/* StoredZip — minimal, dependency-free ZIP writer for the browser.
 *
 * Builds a valid .zip Blob from text/binary entries using STORED
 * (uncompressed) entries + UTF-8 file names. Perfectly fine for small
 * source files; works offline (no CDN needed) and on GitHub Pages
 * (no server-side code needed).
 *
 * Usage:
 *   const blob = StoredZip.build([
 *     { name: 'hello/index.html', data: '<h1>hi</h1>' },   // string
 *     { name: 'hello/img.png',    data: uint8Array }        // or Uint8Array
 *   ]);
 *   // then: URL.createObjectURL(blob) + <a download="hello.zip">
 */
(function () {
  'use strict';

  var CRC_TABLE = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();

  function crc32(bytes) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function dosDateTime(d) {
    var time = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
    var date = (((d.getFullYear() - 1980) & 0x7F) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    return { time: time & 0xFFFF, date: date & 0xFFFF };
  }

  var te = new TextEncoder();

  function toBytes(v) {
    return typeof v === 'string' ? te.encode(v) : v;
  }

  function build(entries, opts) {
    opts = opts || {};
    var dt = dosDateTime(opts.mtime || new Date());
    var parts = [];      // Uint8Array pieces of the final blob
    var central = [];    // metadata for the central directory
    var offset = 0;

    entries.forEach(function (e) {
      var name = toBytes(e.name);
      var data = toBytes(e.data);
      var crc = crc32(data);
      var size = data.length;

      // --- local file header (30 bytes) ---
      var lh = new Uint8Array(30);
      var v = new DataView(lh.buffer);
      v.setUint32(0, 0x04034B50, true);   // "PK\x03\x04"
      v.setUint16(4, 20, true);           // version needed to extract
      v.setUint16(6, 0x0800, true);       // flags: UTF-8 file names
      v.setUint16(8, 0, true);            // method: stored (no compression)
      v.setUint16(10, dt.time, true);
      v.setUint16(12, dt.date, true);
      v.setUint32(14, crc, true);
      v.setUint32(18, size, true);        // compressed size
      v.setUint32(22, size, true);        // uncompressed size
      v.setUint16(26, name.length, true);
      v.setUint16(28, 0, true);           // extra field length

      parts.push(lh, name, data);
      central.push({ name: name, crc: crc, size: size, offset: offset });
      offset += 30 + name.length + size;
    });

    // --- central directory ---
    var cdStart = offset;
    central.forEach(function (c) {
      var rec = new Uint8Array(46 + c.name.length);
      var v = new DataView(rec.buffer);
      v.setUint32(0, 0x02014B50, true);   // "PK\x01\x02"
      v.setUint16(4, 20, true);           // version made by
      v.setUint16(6, 20, true);           // version needed to extract
      v.setUint16(8, 0x0800, true);       // UTF-8 flag
      v.setUint16(10, 0, true);           // stored
      v.setUint16(12, dt.time, true);
      v.setUint16(14, dt.date, true);
      v.setUint32(16, c.crc, true);
      v.setUint32(20, c.size, true);
      v.setUint32(24, c.size, true);
      v.setUint16(28, c.name.length, true);
      v.setUint16(30, 0, true);           // extra length
      v.setUint16(32, 0, true);           // comment length
      v.setUint16(34, 0, true);           // disk number start
      v.setUint16(36, 0, true);           // internal attrs
      v.setUint32(38, 0, true);           // external attrs
      v.setUint32(42, c.offset, true);    // local header offset
      rec.set(c.name, 46);
      parts.push(rec);
    });

    // --- end of central directory (22 bytes) ---
    var cdSize = 0;
    for (var i = 0; i < central.length; i++) {
      cdSize += 46 + central[i].name.length;
    }
    var eocd = new Uint8Array(22);
    var v = new DataView(eocd.buffer);
    v.setUint32(0, 0x06054B50, true);     // "PK\x05\x06"
    v.setUint16(4, 0, true);              // disk number
    v.setUint16(6, 0, true);              // cd start disk
    v.setUint16(8, central.length, true); // entries on this disk
    v.setUint16(10, central.length, true);// total entries
    v.setUint32(12, cdSize, true);
    v.setUint32(16, cdStart, true);
    v.setUint16(20, 0, true);             // comment length
    parts.push(eocd);

    return new Blob(parts, { type: 'application/zip' });
  }

  window.StoredZip = { build: build };
})();
