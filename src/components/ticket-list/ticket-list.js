import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchTickets } from '../../actions/actions'
import Ticket from '../ticket/ticket'

import classes from './ticket-list.module.scss'

const TicketList = () => {
  const dispatch = useDispatch()
  const { ticketLoading, ticketsForRendering } = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

  const tickets = () => {
    if (ticketsForRendering.length === 0) {
      return null
    }
    return ticketsForRendering.map((ticket) => {
      return <Ticket key={ticket.id} price={ticket.price} aviaCompanyCode={ticket.carrier} segments={ticket.segments} />
    })
  }

  const loadingBar = ticketLoading ? <LinearProgress /> : null

  return (
    <div className={classes['ticket-list']}>
      {loadingBar}
      {tickets()}
      <button className={classes['show-more-btn']}>Показать еще 5 билетов!</button>
    </div>
  )
}

const LinearProgress = () => {
  return <span>Loading</span>
}

export default TicketList
