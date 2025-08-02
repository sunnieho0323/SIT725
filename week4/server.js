var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoose connection

var mongoose = require("mongoose")
const cardList = [
    {
        title: "meme cat 2",
        image: "images/cat2.jpg",
        link: "About this cat",
        description: "Hello!"
    },

    {
        title: "meme cat 3",
        image: "images/cat3.jpg",
        link: "About this cat",
        description: "Are you rich? No? Then why are you here? Nah, just kidding! This cat is here to make you smile!"
    }
];

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
title: String,
image: String,
link: String,
description: String,
});
const Project = mongoose.model('Project', ProjectSchema);



app.get('/api/cards', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" })
})

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})