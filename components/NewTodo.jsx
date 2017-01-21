import React from 'react'
import { connect } from 'react-redux'
import {Card, Col} from 'react-materialize';

const NewTodo = ({onChange}) => (
<Col m={6} s={12}>
  <Card className='white' textClassName='black-text'>
      <h3>Add A Lead</h3>
      <input type="text" onKeyUp={onChange}/>
  </Card>
</Col>
)

export default NewTodo
