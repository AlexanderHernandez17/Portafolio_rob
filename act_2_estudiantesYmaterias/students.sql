CREATE TABLE students(
    id_student INT PRIMARY KEY AUTO_INCREMENT,
    names (VARCHAR 45)
    lastnames (VARCHAR 45)
    birthdate DATE
    email (VARCHAR 100)

)

CREATE TABLE subjects(
    id_subject INT PRIMARY KEY AUTO_INCREMENT,
    name_subject (VARCHAR 45)

)

CREATE TABLE grades(
    id_grade INT PRIMARY KEY AUTO_INCREMENT
    id_student INT,
    id_subject INT,
    grade FLOAT
    FOREIGN KEY (id_student) REFERENCES students(id_student),
    FOREIGN KEY (id_subject) REFERENCES subjects(id_subject) 

);


/*Insertar los 10 estudiantes*/

INSERT INTO students (id_student, names, birthdate)
VALUES
(1, 'Juan', 15, 'juan@gmail.com'),
(2, 'Maria', 16, 'Maria@gmail.com'),
(3, 'Daniel', 18, 'Daniel@gmail.com'),
(4, 'Alexander', 15, 'Alexander@gmail.com'),
(5, 'Sebastian', 14, 'Sebastian@gmail.com'),
(6, 'Andres', 13, 'Andres@gmail.com'),
(7, 'Natalia', 15, 'Natalia@gmail.com'),
(8, 'Camila', 16, 'Camila@gmail.com'),
(9, 'Sofia', 19, 'Sofia@gmail.com'),
(10, 'Carolina', 14, 'Carolina@gmail.com'),

/*Insertar las 10 materias*/

INSERT INTO grades (id_student, id_subject, grade)
VALUES
(1, 1, 4.0),
(2, 4, 4.0),
(3, 6, 4.0),
(4, 2, 4.0),
(5, 1, 4.0),
(6, 9, 4.0),
(7, 4, 4.0);
