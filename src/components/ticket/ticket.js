import React from 'react'

import { getTime } from '../../service/date'
import { transfers } from '../../service/transfers'

import classes from './ticket.module.scss'

let Ticket = ({ price, aviaCompanyCode, segments }) => {
  const [firstWay, secondWay] = segments
  const firstWayTimes = getTime(firstWay.date, firstWay.duration)
  const secondWayTimes = getTime(secondWay.date, secondWay.duration)
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <h3 className={classes['ticket__cost']}>{price} Р</h3>
        <img src={`//pics.avs.io/99/36/${aviaCompanyCode}.png`} alt="company" className={classes['ticket__logo']} />
      </div>
      <div className={classes['ticket__info']}>
        <div className={classes['ticket__info-raw']}>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>{`${firstWay.origin} – ${firstWay.destination}`}</span>
            <span className={classes['ticket__info-text']}>{firstWayTimes.startFinish}</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>В пути</span>
            <span className={classes['ticket__info-text']}>{firstWayTimes.inPath}</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>{transfers(firstWay.stops).transfersCount}</span>
            <span className={classes['ticket__info-text']}>{transfers(firstWay.stops).stops}</span>
          </div>
        </div>
        <div className={classes['ticket__info-raw']}>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>{`${secondWay.origin} – ${secondWay.destination}`}</span>
            <span className={classes['ticket__info-text']}>{secondWayTimes.startFinish}</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>В пути</span>
            <span className={classes['ticket__info-text']}>{secondWayTimes.inPath}</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>{transfers(secondWay.stops).transfersCount}</span>
            <span className={classes['ticket__info-text']}>{transfers(secondWay.stops).stops}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket = React.memo(Ticket)
