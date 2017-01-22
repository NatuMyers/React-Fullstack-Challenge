import Immutable from 'immutable'

export default (state = Immutable.List(['John Doe']), action) => {
  switch(action.type) {
    case 'addLead':
      return state.unshift({

        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        phone: "",
        appointment_date: "",
        call_log: "",
        account: false,
        name: action.lead

      })

    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}
