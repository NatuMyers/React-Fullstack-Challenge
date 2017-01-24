import React from 'react'

// connect allows us to choose what parts of our state we want to give to our React component.
import { connect } from 'react-redux'

// import actions
import NewLead from './NewLead'
import SaveLead from './SaveLead'

import { addLead, deleteLead, setLeadPhone } from '../actions'
import {Button, Table, Card, Row, Icon, Input, Collapsible, CollapsibleItem} from 'react-materialize';

const Leads = ({leads, dispatch}) => (


  <div>

      <NewLead onChange={e => { // 'e' is what is entered in
        if(e.keyCode == 13){ // keycode 13 is enter
          dispatch(addLead(e.target.value)) // To dispatch (execute) an action to change the state
          // the 'target' event property returns the element that triggered the event
          e.target.value = '' // now empty it right after to clear it
        }

      }}/>

        <Card className='white ' textClassName='black-text'>
        <h3>Current Leads</h3>
                  {
                    leads.map(
                        (lead, index) => <Card className='card  hoverable' textClassName='black-text' title={lead.name} key={index}>
                        <br></br>

                        {lead.phone}

                        <SaveLead onChange={e => {
                          if(e.keyCode == 13){
                            dispatch(setLeadPhone(e.target.value))
                            e.target.value = ''
                          }
                        }}/>

                        <Button  className='right hoverable waves-effect waves-yellow btn  ' onClick={e => {dispatch(deleteLead(index))}}>
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
