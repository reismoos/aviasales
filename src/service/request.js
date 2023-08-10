/* eslint-disable prettier/prettier */
const request = async () => {
  const fetchSearchId = await fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
  const fetchTickets = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${fetchSearchId.searchId}`
  )
  const responsTickets = await fetchTickets.json()

  return responsTickets
}

export default request
