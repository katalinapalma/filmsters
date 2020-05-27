import React, { Component, Fragment } from 'react';
// import withApiRequests from '../HOC/withApiRequests';
import { withRouter } from 'react-router-dom';

import '../InloggedUser/InloggedUser.css'

class InloggedUser extends Component {

  render() {
    
    console.log('inlogged user,', this.props.location.state);
    // console.log('2', this.props.location.state.user)


    return (
      <Fragment>
        <div>
          <p> { this.props.location.state && this.props.location.state.user  } </p>
        </div>
      </Fragment>
    );
  }
}

export default withRouter (InloggedUser);