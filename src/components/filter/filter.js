import { useDispatch, useSelector } from 'react-redux'

import { changeFilter } from '../../actions/actions'

import classes from './filter.module.scss'

const Filter = () => {
  const { filters } = useSelector((state) => state)
  const dispatch = useDispatch()

  const onChangeFilter = (id) => {
    dispatch(changeFilter(id))
  }

  const inputs = filters.map((filter) => {
    return (
      <li key={filter.id} className={classes['filter__item']}>
        <label className={classes['filter__label']}>
          <input
            type="checkbox"
            checked={filter.checked}
            onChange={() => onChangeFilter(filter.id)}
            className={classes['filter__checkbox']}
          />
          <span className={classes['filter__new-checkbox']}></span>
          {filter.label}
        </label>
      </li>
    )
  })
  return (
    <div className={classes['filter-block']}>
      <h2 className={classes['filter__title']}>Количество пересадок</h2>
      <ul className={classes.filter}>{inputs}</ul>
    </div>
  )
}

export default Filter
