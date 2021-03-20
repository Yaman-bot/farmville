import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Campaigns from './Campaigns'
import Header from './components/Header'
import HomeScreen from './HomeScreen'
import CampaignNew from './CampaignNew'
import CampaignShow from './CampaignShow'
import RequestIndex from './RequestIndex'
import RequestNew from './RequestNew'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/campaigns" component={Campaigns} />
                    <Route exact path="/campaigns/new" component={CampaignNew} />
                    <Route exact path="/campaigns/:id" component={CampaignShow} />
                    <Route exact path="/campaigns/:id/requests" component={RequestIndex} />
                    <Route exact path="/campaigns/:id/requests/new" component={RequestNew} />
                </Switch>

            </BrowserRouter>
        );

    }
}

export default App;