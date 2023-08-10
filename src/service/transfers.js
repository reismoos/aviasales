/* eslint-disable prettier/prettier */
export const transfers = (arr) => {
  let transfersCount
  switch (arr.length) {
  case 0:
    transfersCount = 'без пересадкок'
    break
  case 1:
    transfersCount = '1 пересадка'
    break
  default:
    transfersCount = `${arr.length} пересадки`
    break
  }
  return {
    transfersCount: transfersCount,
    stops: arr.join(', '),
  }
}
