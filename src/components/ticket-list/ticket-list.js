import Ticket from '../ticket/ticket'

import classes from './ticket-list.module.scss'

const TicketList = () => {
  return (
    <div className={classes['ticket-list']}>
      <Ticket />
      <Ticket />
      <button className={classes['show-more-btn']}>Показать еще 5 билетов!</button>
    </div>
  )
}

export default TicketList
