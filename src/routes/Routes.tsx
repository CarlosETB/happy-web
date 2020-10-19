import React from 'react'

// Native
import { 
    BrowserRouter as Router, 
    Switch, 
    Route 
} from 'react-router-dom'

// Pages
import LandingPage from 'pages/LandingPage'
import OrphanagesMap from 'pages/OrphanagesMap'
import CreateOrphanage from 'pages/CreateOrphanage'
import Orphanage from 'pages/Orphanage'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={LandingPage} exact/>
                <Route path='/map' component={OrphanagesMap} exact />
                <Route path='/orphanages/create' component={CreateOrphanage} exact />
                <Route path='/orphanages/:id' component={Orphanage} exact />
            </Switch>
        </Router>
    )
}

export default Routes