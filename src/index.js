/**
 *  Grill Cell Component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Cell extends Component {
  static displayName = 'Cell';

  static propTypes = {
    span: PropTypes.number.isRequired,
    divide: PropTypes.number,
    offset: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    span: 1
  };

  render () {
    const {
      span,
      divide,
      offset,
      className
    } = this.props;

    return (
      <div className={`
        ${className ||''}
        cell
        cell-n-${span}
        cell-d-${divide || span}
        ${offset ? `cell-o-${offset}` : ''}
      `}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Cell;
