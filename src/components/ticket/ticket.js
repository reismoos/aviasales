import logoImg from '../../assets/img/S7 Logo.png'

import classes from './ticket.module.scss'

const Ticket = () => {
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <h3 className={classes['ticket__cost']}>13 400 Р</h3>
        <img src={logoImg} alt="company" className={classes['ticket__logo']} />
      </div>
      <div className={classes['ticket__info']}>
        <div className={classes['ticket__info-raw']}>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>MOW – HKT</span>
            <span className={classes['ticket__info-text']}>10:45 – 08:00</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>В пути</span>
            <span className={classes['ticket__info-text']}>21ч 15м</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>2 пересадки</span>
            <span className={classes['ticket__info-text']}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes['ticket__info-raw']}>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>MOW – HKT</span>
            <span className={classes['ticket__info-text']}>10:45 – 08:00</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>В пути</span>
            <span className={classes['ticket__info-text']}>21ч 15м</span>
          </div>
          <div className={classes['ticket__info-col']}>
            <span className={classes['ticket__info-header']}>2 пересадки</span>
            <span className={classes['ticket__info-text']}>HKG, JNB</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
