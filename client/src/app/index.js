import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Footer,NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div style={{backgroundColor:"grey", height:"100vh"}}>
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
            </Switch>
            <Footer/>
        </Router>
        </div>
    )
}

export default App