import classes from './sort-pannel.module.scss'

const SortPannel = () => {
  return (
    <div className={classes['sort-pannel']}>
      <button className={`${classes['sort-pannel__btn']} ${classes['sort-pannel__btn_active']}`}>Самый дешевый</button>
      <button className={classes['sort-pannel__btn']}>Самый быстрый</button>
      <button className={classes['sort-pannel__btn']}>Оптимальный</button>
    </div>
  )
}

export default SortPannel
