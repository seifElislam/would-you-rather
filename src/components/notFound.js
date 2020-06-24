import React, { Component } from 'react';
import { Container, Header} from 'semantic-ui-react';

export class NotFound extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3">Oops!</Header>
        <p>Sorry we can’t find the page you are looking for.</p>
        <a href="/">Return to home page</a>
      </Container>
    );
  }
}

export default NotFound;
