import React from 'react'
import { connect } from 'react-redux'
import {Card, Col, Input, Icon, Button, Table, Row, Collapsible, CollapsibleItem, Modal} from 'react-materialize';

const SaveLead = ({onChange}) => (

  <Modal
    header='Item Details'
    trigger={
        <Button className="large flat" waves='light'>Details</Button>
    }>

    <Col m={6} s={12}>

      <Row>
        <Input s={6} label="Telephone" className="active" onKeyUp={onChange}  validate type='tel'><Icon>phone</Icon></Input>
        <Input Input s={6} label="Date" type="date" onKeyUp={onChange} className="datepicker active"><Icon>schedule</Icon></Input>
      </Row>

      <Collapsible popout='true' expanded='true'>
        <CollapsibleItem expanded='true' header='Write A Call Log' className='hoverable container'  icon='edit'>
          <Row className='container'>
            <Input  s={10} label="Call Log" className='textarea' validate type='tel' onKeyUp={onChange}><Icon></Icon></Input>
          </Row>
        </CollapsibleItem>
      </Collapsible>

    </Col>

  </Modal>
)

export default SaveLead
