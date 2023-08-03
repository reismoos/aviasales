import classes from './filter.module.scss'
console.log(classes)
const filters = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'Без пересадок' },
  { id: 3, label: '1 пересадка' },
  { id: 4, label: '2 пересадки' },
  { id: 5, label: '3 пересадки' },
]
const Filter = () => {
  const inputs = filters.map((filter) => {
    return (
      <li key={filter.id} className={classes['filter__item']}>
        <label className={classes['filter__label']}>
          <input type="checkbox" className={classes['filter__checkbox']} />
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
