const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.post("api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({message: 'Post sent.'});
});

app.use('/api/posts', (req, res, next)=>{

  const posts = [{
    id: '123456',
    title: 'title 1',
    content: 'content 1'
  },
  {
    id: '987654',
    title: 'title 2',
    content: 'content 2'
  }];

  res.status(200).json({message:'This is the result', posts: posts});

});

module.exports = app;
