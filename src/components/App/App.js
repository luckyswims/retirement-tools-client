import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Header from '../Header/Header'
import Annuities from '../Annuities/Annuities'

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/annuity">
            <Annuities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Fragment>
  )
}

export default App
