/* eslint-disable prettier/prettier */
const getActiveFilters = (filters) => {
  const result = []
  for (let filter of filters) {
    if (filter.id === 1 && filter.checked) {
      result.push(0, 1, 2, 3)
      break
    } else if (filter.checked) {
      result.push(filter.id - 2)
    }
  }
  return result
}



export const filterTickets = (tickets, filters) => {
  const filter = getActiveFilters(filters)
  if (filter.length === 0) {
    return []
  }
  return tickets.filter((ticket) => {
    for (let countTransfers of filter) {
      if(countTransfers === ticket.segments[0].stops.length) {
        return true
      }
    }
    return false
  })
}

export const sortTicketsCheapest = (ticket1, ticket2) => ticket1.price - ticket2.price

export const sortTicketsFastest = (ticket1, ticket2) => ticket1.segments[0].duration - ticket2.segments[0].duration
