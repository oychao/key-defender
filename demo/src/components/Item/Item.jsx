import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import './style.less';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  render() {
    const { title, remove } = this.props;
    const { count } = this.state;
    return (
      <li className="item">
        <span role="button" tabIndex="0" onClick={remove} onKeyDown={remove}>X</span>
        <button type="button" onClick={this.handleIncrement}>{count}</button>
        <span>{title}</span>
      </li>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired
};

export default hot(module)(Item);
