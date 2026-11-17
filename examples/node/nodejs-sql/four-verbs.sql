-- Lecture 9 - slide 57 : Accessing a SQL Database
-- One table, four verbs. Load setup.sql first, then:
--   mysql -u root -p web_course < four-verbs.sql

-- read
SELECT id, name FROM students;

-- add a row (the id comes from AUTO_INCREMENT)
INSERT INTO students (name, programme) VALUES ('Bob', 'Computing');

-- change one row by its key
UPDATE students SET name = 'Amy' WHERE id = 1;

-- remove one row by its key
DELETE FROM students WHERE id = 1;

-- and read it back
SELECT id, name FROM students;
