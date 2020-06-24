import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import PollCard from './components/PollCard';
import NewPoll from './components/newPoll';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
                <ContentGrid>
                <Login />
                </ContentGrid>
              )}
            />
          ) : (
              <Fragment>
                <Nav />
                <ContentGrid>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/questions/:question_id" component={PollCard} />
                    <Route path="/add" component={NewPoll} />
                    <Route path="/leaderboard" component={Leaderboard} />
                  </Switch>
                </ContentGrid>
              </Fragment>
            )}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
