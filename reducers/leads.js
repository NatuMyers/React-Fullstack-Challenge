import Immutable from 'immutable'

export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case 'addLead':
      return state.unshift(action.lead)
    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}
