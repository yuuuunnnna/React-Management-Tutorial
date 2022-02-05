import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [
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
]


class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name}gender={c.gender} job={c.job} />);})}
      </div>
    );
  }
}

export default App;
