const express = require("express");
const app = express();
const PORT = 8000;

const { User, users } = require("./models/user.models");
const { Company, companies } = require("./models/company.models");

//MIDDLEWARE
// Toma los datos del post y los añade al campo body del objeto request
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


/*Users*/
app.get('/users', (req,res) =>{
    res.json(users)
})
//probar con un get http://localhost:8000/users

app.get("/user/new", (req, res) => {
    const newUser = new User();
    users.push(newUser);
    res.json(users);
});
//probar con un get http://localhost:8000/user/new


/*Companies*/
app.get('/companies', (req,res) =>{
    res.json(companies)
})

app.get("/companie/new", (req, res) => {
    const newCompany = new Company();
    companies.push(newCompany);
    res.json(companies);
});
// probar con get http://localhost:8000/companies/new

app.post("/user/company", (req, res) => {
const newUser = new User();
users.push(newUser);
const newCompany = new Company();
companies.push(newCompany);

res.json({User: new User(), Company: new Company()});
});

//probar con post http://localhost:8000/user/company