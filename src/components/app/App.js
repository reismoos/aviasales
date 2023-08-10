import Filter from '../filter/filter'
import SortPannel from '../sort-pannel/sort-pannel'
import TicketList from '../ticket-list/ticket-list'
import logo from '../../assets/img/Logo.svg'

import classes from './App.module.scss'

const { wrapper, header__logo, main } = classes

function App() {
  return (
    <div className={wrapper}>
      <Header />
      <main className={main}>
        <div className={classes['left-colomn']}>
          <Filter />
        </div>
        <div className={classes['right-colomn']}>
          <SortPannel />
          <TicketList />
        </div>
      </main>
    </div>
  )
}

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className={header__logo}></img>
    </header>
  )
}

export default App
