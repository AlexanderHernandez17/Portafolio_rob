const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alexanderhdez2001:5GoB0XMUNtmwDxlb@cluster0.ktydaqs.mongodb.net/');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'conection error:'));

db.once('open', function() {
    console.log('connected to mongoDB')});

    //MODEL
    const userSchema = mongoose.Schema({
        nombres: String,
        apellidos: String
    })
    
    const User = mongoose.model('User', userSchema);

    const empresaSchema = mongoose.Schema({
        nombres: String,
        nit: Number
    })

    const empresa = mongoose.model('empresa', empresaSchema);

    const app = express();
    app.use(express.json());

    app.get('/api/users', async(req, res)=> {
    
        try {
            /*1. Obtener todos los usuarios que sean mayores de 18 años.*/
            const users = await User.find({edad: {$gt:18}});

            /*2. Obtener todos los usuarios que sean de Londres o de París.
            const users = await User.find({ciudad: {$in: ["Paris", "Londres"]}})*/

            /*3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años
            const users = await User.find({salario:{$gte:2000}, edad:{$lt:30}})*/

            /*4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
            const users = await User.find({pais: {$eq:"España"}, salario: {$gt: 3000}});*/

            /*5. Obtener todos los usuarios que tengan entre 25 y 35 años.
            const users = await User.find({edad: {$gte: 25, $lte: 35}});*/

            /*6. Obtener a todos los usuarios que no sean de Estados Unidos.
            const users = await User.find({pais: {$ne:"Estadosunidos"}});*/

            /*7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
            const users = await User.find({$and: [{ciudad: 'Londres'}, {$or: [{salario: {$gt: 2500}},{edad: {$gt: 30}}]}]});*/

            /*8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
            const users = await User.find({pais: 'Australia', peso: {$gt : 140} });*/

            /*9. Obtener a todos los usuarios que no sean de Londres ni de París.
            const users = await User.find({ciudad: {$nin: ["Paris","Londres"]}});*/

            /*10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años 
            const users = await User.find({$or: [{salario: {$lt: 2000}},{edad: {$gt: 40}}]});*/

            /*11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
            const users = await User.find({$and: [{pais: 'Canadá'}, {$or: [{salario: {$gt: 4000}},{altura: {$gt: 180}}]}]});*/

            /*12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
            const users = await User.find({$and: [{pais: 'Italia'}, {$or: [{edad: {$gte: 20}},{edad: {$lte: 30}}]}]});*/

            /*13. Obtener todos los usuarios que no tengan un correo electrónico registrado. 
            const users = await User.find({correo: {$exists: false}});*/

            /*14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes. 
            const users = await User.find({$and: [{pais: 'Francia'}, {$or: [{salario: {$gte: 3000}},{salario: {$lte: 5000}}]}]});*/

            /*15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras. 
            const users = await User.find({$and: [{pais: 'Brasil'}, {$or: [{peso: {$lt: 120}},{peso: {$gt: 140}}]}]});*/

            /*16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años. 
            const users = await User.find({$or: [{pais: 'Argentina', edad: {$lt: 25}},{pais: 'Chile', edad: {$gt: 25}}]});*/

            /*17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
            const users = await User.find({pais: {$nin: ["España", "Mexico"]}, salario: {$lt: 3000}});*/

            /*18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
            const users = await User.find({pais: "Alemania", $or: [{salario: {$lt : 4000}}, {edad: {$gt: 35}}]});*/

            /*19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm. 
            const users = await User.find({pais: {$ne: "Colombia"}, alturas: {$lt: 170}});*/

            /*20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado. 
            const users = await User.find({pais: "India", salario: {$exists: false}});*/
 



            res.json(users);
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            res.status(500).json({ error: "Error al obtener los usuarios" });
        }
    });
    
    

    app.listen(4000, function() {
        console.log('server arriba');
});