import { useDispatch, useSelector } from 'react-redux'

import { changeSort } from '../../actions/actions'

import classes from './sort-pannel.module.scss'

const btns = [
  { value: 'cheap', label: 'Самый дешевый' },
  { value: 'expensive', label: 'Самый быстрый' },
]

const SortPannel = () => {
  const dispatch = useDispatch()
  const { sort, allTickets } = useSelector((state) => state)
  const buttons = btns.map((btn) => {
    return (
      <Button
        key={btn.value}
        className={
          btn.value === sort
            ? `${classes['sort-pannel__btn']} ${classes['sort-pannel__btn_active']}`
            : classes['sort-pannel__btn']
        }
        label={btn.label}
        value={btn.value}
        changeSort={(e) => dispatch(changeSort(allTickets, e.target.value))}
      />
    )
  })
  return <div className={classes['sort-pannel']}>{buttons}</div>
}

const Button = ({ className, label, changeSort, value }) => {
  return (
    <button className={className} onClick={changeSort} value={value}>
      {label}
    </button>
  )
}

export default SortPannel
