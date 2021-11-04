const express = require("express");
const app = express();
const port = 8000;


const faker = require("faker");
app.get("/api", (request, response) => {
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let phonenumber = faker.phone.phoneNumber();
    response.json({ firstname: `${firstname}`, lastname: `${lastname}`, phonenumber: `${phonenumber}` })
});


app.get("/api/company", (request, response) => {
    let name = faker.company.companyName();
    let product = faker.commerce.productName();
    let description = faker.commerce.productDescription();
    response.json({ name: `${name}`, product: `${product}`, description: `${description}`, })
})


app.get("/api/user/company", (request, response) => {
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let name = faker.company.companyName();
    response.json({ firstname: `${firstname}`, lastname: `${lastname}`, name: `${name}` })
})

app.listen(port, () => console.log(`Listening on port: ${port}`));
