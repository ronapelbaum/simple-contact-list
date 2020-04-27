import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const Counter = ({ counter, increment }) => (
  <div onClick={increment}>
    {counter}
  </div>
);

const mapStateToProps = state => ({
  counter: state.counter,
});
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(Actions.incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
