import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isNil} from 'ramda';

import {Link} from 'react-router-dom';
import {getResponses} from '../../selectors/data.js';
import {getIsAuthRequired} from '../../selectors/user.js';

export class SignIn extends PureComponent {
  render() {
    const {responses, isAuthRequired} = this.props;
    const email = !isNil(responses.auth) ? responses.auth.email : ``;
    return (
      <Link to={`/favorites`} className={`header__nav-link header__nav-link--profile`}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{isAuthRequired ? `Sign in` : email}</span>
      </Link>
    );
  }
}

SignIn.propTypes = {
  responses: PropTypes.shape({
    auth: PropTypes.shape({
      email: PropTypes.string
    })
  }),
  isAuthRequired: PropTypes.bool
};

export default connect(
    (state) => ({
      isAuthRequired: getIsAuthRequired(state),
      responses: getResponses(state),
    })
)(SignIn);
