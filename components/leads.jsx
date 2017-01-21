import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteLead } from '../actions'
import {Button} from 'react-materialize';



const Leads = ({leads, dispatch}) => (
  <div class="card white center">
    <div class="card-content black-text center">

      <h1>Leads</h1>


      <NewLead onChange={e => {
        if(e.keyCode == 13){
          dispatch(addLead(e.target.value))
          e.target.value = ''
        }
      }}/>
      {leads.map((lead, index) => <p key={index}>{lead} <button onClick={e => {
        dispatch(deleteLead(index))
      }}>X</button></p>)}

    </div>
  </div>


)

function mapStateToProps(leads) {
  return {
    leads
  }
}

export default connect(mapStateToProps)(Leads)
