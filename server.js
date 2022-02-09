const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/any/1',
            'name' : '유나',
            'birthday' : '990804',
            'gender': '여자',
            'job': '대학생'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/any/2',
            'name' : '이유나',
            'birthday' : '000804',
            'gender': '여자',
            'job': '고등학생'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/any/3',
            'name' : '김유나',
            'birthday' : '010804',
            'gender': '남자',
            'job': '중학생'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

