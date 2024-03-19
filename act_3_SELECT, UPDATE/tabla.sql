/*Ejercicio 1*/
SELECT nombres, apellidos, edad 
FROM users 
WHERE edad = 20;

/*Ejercicio 2*/
SELECT * FROM users
WHERE genero = "M" AND edad BETWEEN 20 AND 30;

/*Ejercicio 3*/
SELECT * FROM users
WHERE edad = (SELECT MIN(edad) FROM users)
LIMIT 1;

/*Ejercicio 4*/
SELECT COUNT(*) AS total_usuarios
FROM users;

/*Ejercicio 5*/
SELECT * FROM users
LIMIT 5;

/*Ejercicio 6*/
SELECT * FROM users
ORDER BY id DESC
LIMIT 10;

/*Ejercicio 7*/
SELECT * FROM users
WHERE correo
LIKE '%.NET'

/*Ejercicio 8*/
SELECT * FROM users
WHERE pais NOT IN ('colombia');

/*Ejercicio 9*/
SELECT * FROM users
WHERE pais NOT IN ('ecuador', 'panama');

/*Ejercicio 10*/
SELECT COUNT(*) AS total_usuarios
FROM users
WHERE pais = 'colombia' AND musica = 'rock';

/*Ejercicio 11*/

UPDATE users
SET musica = 'carranga'
WHERE musica = 'metal'

/*Ejercicio 12*/

SELECT * FROM users
WHERE genero = 'H'
AND musica = 'carranga'
AND pais = 'colombia'
AND edad BETWEEN 10 AND 20;

/*Ejercicio 13*/

UPDATE users
SET musica = 'carranga'
WHERE edad = 99;

/*Ejercicio 14*/

SELECT * FROM users
WHERE (LOWER(SUBSTRING(nombres, 1, 1)) = 'a');


/*Ejercicio 15*/

SELECT * FROM users
WHERE (LOWER(RIGHT(apellidos, 1))= 'z')

/*Ejercicio 16*/
ALTER TABLE users
CHANGE musica musica varchar(255) COLLATE utf8mb4_unicode_ci NULL

UPDATE users
SET musica = NULL
WHERE edad = 50;

/*Ejercicio 17*/

SELECT * FROM usuarios
WHERE musica IS NULL;

/*Ejercicio 18*/
SELECT SUM(edad) AS suma_de_edades
FROM usuarios;

/*Ejercicio 19*/
SELECT COUNT(*)
FROM usuarios
WHERE pais = 'Ecuador';

/*Ejercicio 20*/
SELECT COUNT(*)
FROM usuarios
WHERE pais = 'Colombia' AND genero_musical = 'vallenato';
















