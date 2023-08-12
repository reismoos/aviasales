/* eslint-disable prettier/prettier */
export const requestSearchId = async () => {
  const fetchSearchId = await fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
  

  return fetchSearchId
}

export const requestFetchTickets = async (searchId) => {


  let fetchTickets = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  )

  if (!fetchTickets.ok) {
    throw fetchTickets
  }
  const responsTickets = await fetchTickets.json()
  return responsTickets

}
