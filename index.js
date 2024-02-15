const express = require("express");
const app = express();
app.use(express.json());
const  {LocalStorage} = require('node-localstorage')
const localStorage = new LocalStorage('./files');
const user={
    name:"soujanya",
    password:"soujanya123"
}
app.get("/", (req, res) => {
    localStorage.setItem("value",JSON.stringify(user));
    const storedValue = localStorage.getItem("value");
    res.send({storedValue});
});
app.listen(3020, () => {
    console.log("Server is running on port 3020");
});