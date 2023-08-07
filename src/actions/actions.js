export const changeFilter = (id) => {
  return {
    type: 'CHANGE_FILTER',
    id,
  }
}

export const changeSort = (value) => {
  return {
    type: 'CHANGE_SORT',
    payload: value,
  }
}
