import React from 'react'

// Native
import { 
    BrowserRouter as Router, 
    Switch, 
    Route 
} from 'react-router-dom'

// Pages
import LandingPage from 'pages/LandingPage'
import MapPage from 'pages/MapPage'
import CreatePage from 'pages/CreatePage'
import DetailPage from 'pages/DetailPage'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={LandingPage} exact/>
                <Route path='/map' component={MapPage} exact />
                <Route path='/orphanages/create' component={CreatePage} exact />
                <Route path='/orphanages/:id' component={DetailPage} exact />
            </Switch>
        </Router>
    )
}

export default Routes