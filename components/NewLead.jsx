import React from 'react'
import { connect } from 'react-redux'
import {Card, Col, Input, Icon} from 'react-materialize';

const NewLead = ({onChange}) => (
<Col m={6} s={12}>
  <br></br>
  <Card className='white hoverable' textClassName='black-text'>
      <h3>Add A Lead</h3>
      <br></br>
      <Input Input s={6} label="Name" validate onKeyUp={onChange}><Icon>account_circle</Icon></Input>
  </Card>
</Col>
)

export default NewLead
