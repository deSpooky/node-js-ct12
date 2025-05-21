const express = require("express")

const app = express()

app.set("view engine", "pug")

app.use("/contact", function(request, response) {
    response.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["spooky@mycorp.com", "purr@mycorp.com"],
        phone: "+12345678910"
    })
})
app.use("/", function(request, response) {
    response.send("Главная страница")
})

app.listen(3000)