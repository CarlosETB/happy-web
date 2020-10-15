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

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={LandingPage} exact/>
                <Route path='/map' component={OrphanagesMap} exact />
            </Switch>
        </Router>
    )
}

export default Routes