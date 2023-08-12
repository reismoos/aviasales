import { v4 as uuidv4 } from 'uuid'

import { requestFetchTickets, requestSearchId } from '../service/request'

export const setSearchId = () => (dispatch) => {
  dispatch(ticketsLoading())
  requestSearchId().then((res) => dispatch({ type: 'SET_SEARCH_ID', payload: res.searchId }))
}

export const changeFilter = (id) => {
  return {
    type: 'CHANGE_FILTER',
    id,
  }
}

export const changeSort = (tickets, value) => (dispatch) => {
  dispatch({
    type: 'CHANGE_SORT',
    payload: value,
  })
}

export const getTickets = (tickets) => {
  return {
    type: 'GET_TICKETS',
    payload: tickets.map((el) => {
      el.id = uuidv4()
      return el
    }),
  }
}

export const setStopFetching = () => {
  return {
    type: 'STOP_FETCHING',
  }
}

export const fetchTickets = (searchId) => (dispatch) => {
  dispatch(ticketsLoading())
  requestFetchTickets(searchId)
    .then((tickets) => {
      dispatch(getTickets(tickets.tickets))
      tickets.stop ? dispatch(setStopFetching()) : null
    })
    .catch((err) => {
      if (err.status !== 500) {
        dispatch(error())
      } else {
        dispatch(fetchTickets(searchId))
      }
    })
}

export const error = () => {
  return {
    type: 'ERROR',
  }
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

export const renderMoreTickets = () => {
  return {
    type: 'RENDER_MORE_TICKETS',
  }
}
