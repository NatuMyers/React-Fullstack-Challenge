import Immutable from 'immutable'

export default (state = Immutable.List(['John Doe']), action) => {
  switch(action.type) {
    case 'addLead':
      return state.unshift(action.lead)
    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}
