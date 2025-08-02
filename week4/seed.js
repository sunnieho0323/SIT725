const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
  {
    title: "DB cat 3",
    image: "images/cat3.jpg",
    link: "About DB 3",
    description: "Hello! This is a sample cat from the database.",
  },
    {
    title: "DB cat 2",
    image: "images/cat2.jpg",
    link: "About DB 2",
    description: "YOYOYO! This is another sample cat from the database.",
  },
  {
    title: "DB cat 1",
    image: "images/cat1.jpg",
    link: "About DB 1",
    description: "YOYOYO! This is another sample cat from the database.",
  },
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
