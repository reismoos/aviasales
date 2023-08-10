import { v4 as uuidv4 } from 'uuid'

import request from '../service/request'

export const changeFilter = (id) => {
  return {
    type: 'CHANGE_FILTER',
    id,
  }
}

export const changeSort = (value) => {
  return {
    type: 'CHANGE_SORT',
    payload: value,
  }
}

export const getTickets = (tickets) => {
  tickets.map
  console.log(tickets)
  return {
    type: 'GET_TICKETS',
    payload: tickets.map((el) => {
      el.id = uuidv4()
      return el
    }),
  }
}

export const fetchTickets = () => (dispatch) => {
  dispatch(ticketsLoading())
  request().then((tickets) => {
    dispatch(getTickets(tickets.tickets))
    let a = []
    for (let i = 0; i < 5; i++) {
      a.push(tickets.tickets[i])
    }
    dispatch(getTicketsForRendering(a))
    dispatch(ticketsLoaded())
  })
}

export const ticketsLoading = () => {
  return {
    type: 'TICKETS_LOADING',
  }
}

export const ticketsLoaded = () => {
  return {
    type: 'TICKETS_LOADED',
  }
}

export const getTicketsForRendering = (tickets) => {
  return {
    type: 'GET_TICKETS_FOR_RENDERING',
    payload: tickets,
  }
}
