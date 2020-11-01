const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'));
app.get('/', (request, response) => {
  response.send({ say: 'hiiiii'});
});
app.get('/ask', (req, res) => {
  const pathFile = path.resolve(__dirname, './client/createquestion.html');
  res.sendFile(pathFile)
})
app.post('/createquestion', (req, res) => {
  const { content } = req.body;
  // const content = req.body.content
  fs.readFile('data.json', (err, data) => {
    if (err) return res.send({ success: 0 });
    let oldQuestions;
    try {
      oldQuestions = JSON.parse(data);
    } catch (err) {
      oldQuestions = []
    }
    const newQuestion = {
      id: oldQuestions.length,
      content,
      yesCount: 0,
      noCount: 0
    }
    // oldQuestions.push(newQuestion);
    if(newQuestion.content!==''){const newQuestions = [...oldQuestions, newQuestion];
    let i=newQuestions.length
    fs.writeFile('data.json', JSON.stringify(newQuestions), (err) => {
      if (err) return res.send({ success: 0 });
      res.send({ success: 1, data: newQuestion });
    })
    console.log('asdasdasd');
  }
  })

})
app.get('*', (request, response) => {
  response.send({ say: '404'});
})
// app.get('/create-question.css', (req, res) => {
//   const pathFile = path.resolve(__dirname, './client/create-question.css');
//   res.sendFile(pathFile)
// })
app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server started');})