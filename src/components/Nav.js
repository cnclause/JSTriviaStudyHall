import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import CardContainer from './CardContainer'
import SearchForm from './SearchForm'
import AppNotFound from './AppNotFound'

const Nav = () => {
    return(

        <Router>
            <nav className="nav">
                <Link className="link" to="/">Cards</Link>
                <Link className="link" to="/search">Search</Link>  
            </nav>
            <Switch>
                <Route exact path="/" component={CardContainer}/>
                {/* to pass props: 
                <Route exact path="/" render={()=> <SearchFrom cards = {} />} */}
                <Route exact path="/search" component={SearchForm} />
                <Route component={AppNotFound}/>
            </Switch>
        </Router>
    )
       

}

export default Nav