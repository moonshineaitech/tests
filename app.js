// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import VoterInsights from './components/VoterInsights';
import AdBuilder from './components/AdBuilder';
import FundRaising from './components/FundRaising';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/voter-insights">Voter Insights</Link></li>
            <li><Link to="/ad-builder">Ad Builder</Link></li>
            <li><Link to="/fundraising">Fundraising</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/voter-insights" component={VoterInsights} />
          <Route path="/ad-builder" component={AdBuilder} />
          <Route path="/fundraising" component={FundRaising} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// components/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>RedForge Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Identified Supporters</h3>
          <p>12,547</p>
        </div>
        <div className="stat-card">
          <h3>Total Funds Raised</h3>
          <p>$1,234,567</p>
        </div>
        <div className="stat-card">
          <h3>Tasks Completed</h3>
          <p>87%</p>
        </div>
        <div className="stat-card">
          <h3>Email Open Rate</h3>
          <p>32%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// components/VoterInsights.js
import React from 'react';

function VoterInsights() {
  return (
    <div className="voter-insights">
      <h2>Voter Insights</h2>
      <p>This is where voter analytics would be displayed.</p>
    </div>
  );
}

export default VoterInsights;

// components/AdBuilder.js
import React from 'react';

function AdBuilder() {
  return (
    <div className="ad-builder">
      <h2>Ad Builder</h2>
      <p>This is where the ad creation tool would be implemented.</p>
    </div>
  );
}

export default AdBuilder;

// components/FundRaising.js
import React from 'react';

function FundRaising() {
  return (
    <div className="fundraising">
      <h2>Fundraising</h2>
      <p>This is where fundraising tools and analytics would be displayed.</p>
    </div>
  );
}

export default FundRaising;
