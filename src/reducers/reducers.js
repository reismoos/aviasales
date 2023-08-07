/* eslint-disable prettier/prettier */
const initialState = {
  sort: 'cheap',
  filters: [
    { id: 1, label: 'Все', checked: true },
    { id: 2, label: 'Без пересадок', checked: true },
    { id: 3, label: '1 пересадка', checked: true },
    { id: 4, label: '2 пересадки', checked: true },
    { id: 5, label: '3 пересадки', checked: true },
  ],
}

const changingFilters = (state, action) => {
  let newFilters 
  if (action.id === 1) {
    newFilters = state.filters.map(filter => {
      return {
        ...filter,
        checked: !state.filters[0].checked
      }
    })
  } else {
    newFilters = state.filters.map(filter => {
      if (filter.id === action.id) {
        return {
          ...filter, 
          checked: !filter.checked
        }
      }
      return {...filter}
    })
  }
  let allChecked = true

  newFilters.forEach(filter => {
    if (!filter.checked && filter.id !== 1) {
      allChecked = false
    }
  })

  newFilters[0].checked = allChecked ? true : false

  return newFilters

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_FILTER':
    return {
      ...state,
      filters: changingFilters(state, action)
    }
  case 'CHANGE_SORT':
    return {
      ...state,
      sort: action.payload
    }
  default:
    return state
  }
}

export default reducer
