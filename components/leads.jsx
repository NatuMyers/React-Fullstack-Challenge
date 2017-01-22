import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteLead } from '../actions'
import {Button, Table, Card, Row, Icon, Input, Collapsible, CollapsibleItem} from 'react-materialize';



const Leads = ({leads, dispatch}) => (
  <div>



      <NewLead onChange={e => {
        if(e.keyCode == 13){
          dispatch(addLead(e.target.value))
          e.target.value = ''
        }
      }}/>



        <Card className='white ' textClassName='black-text'>
        <h3>Current Leads</h3>

                  {
                    leads.map(
                      (lead, index) => <Card className='card  hoverable' textClassName='black-text' title={lead} key={index}>



                      <Row>
                        <Input s={6} label="Name" value={lead} validate><Icon>account_circle</Icon></Input>
                        <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                      </Row>

                      <Collapsible popout>
                        <CollapsibleItem header='Write A Call Log' className='hoverable'  icon='edit'>
                          Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                      </Collapsible>

                      <br></br>

                                                <Button  className='right ' onClick={e => {dispatch(deleteLead(index))}}>
                                                  Delete
                                                </Button>
                                                <br></br>
                                                <br></br>

                                        </Card>
                              )
                  }

        </Card>



  </div>


)

function mapStateToProps(leads) {
  return {
    leads
  }
}

export default connect(mapStateToProps)(Leads)
