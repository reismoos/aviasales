import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { fetchTickets, setSearchId, ticketsLoaded, renderMoreTickets, ticketsLoading } from '../../actions/actions'
import { filterTickets, sortTicketsCheapest, sortTicketsFastest } from '../../service/filterAndSort'
import Ticket from '../ticket/ticket'

import classes from './ticket-list.module.scss'

const TicketList = () => {
  const dispatch = useDispatch()
  const { ticketLoading, stopFetching, allTickets, searchId, renderingTicketsCount, filters, sort } = useSelector(
    (state) => state
  )
  const [ticketsToShow, setTicketsToShow] = useState([])

  useEffect(() => {
    dispatch(setSearchId())
    dispatch(ticketsLoading())
  }, [])

  useEffect(() => {
    if (!stopFetching && searchId) {
      dispatch(fetchTickets(searchId))
    } else {
      dispatch(ticketsLoaded())
    }
  }, [stopFetching, allTickets, searchId])

  useEffect(() => {
    if (allTickets.length) {
      const method = sort === 'cheap' ? sortTicketsCheapest : sortTicketsFastest
      let filteredTickets = filterTickets(allTickets, filters).sort(method)
      if (filteredTickets.length === 0) {
        setTicketsToShow([])
        return
      }
      const ticketsForRendering = []
      for (let i = 0; i < renderingTicketsCount; i++) {
        ticketsForRendering.push(filteredTickets[i])
      }
      setTicketsToShow(ticketsForRendering)
    }
  }, [allTickets, renderingTicketsCount, filters, sort])

  const tickets = () => {
    if (ticketsToShow.length === 0) {
      return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
    }
    return ticketsToShow.map((ticket) => {
      return <Ticket key={ticket.id} price={ticket.price} aviaCompanyCode={ticket.carrier} segments={ticket.segments} />
    })
  }

  const loadingBar = ticketLoading ? <LoadingBar /> : null

  return (
    <div className={classes['ticket-list']}>
      {loadingBar}
      {tickets()}
      <button onClick={() => dispatch(renderMoreTickets())} className={classes['show-more-btn']}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

const LoadingBar = () => {
  return (
    <div className={classes['loading-bar']}>
      <div className={classes['loading-stripe']}></div>
    </div>
  )
}

export default TicketList
