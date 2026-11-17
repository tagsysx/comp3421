<!-- views/form.ejs -->
<h1>Enter Your Name</h1>

<form action="/greet" method="POST">
  <label for="name">Name:</label>
  <input id="name" name="name" type="text">
  <button type="submit">Submit</button>
</form>
