import { connect } from 'react-redux';
import { Clock } from './Clock';
import * as selector from './data/selector';
import * as actions from './data/actions';

export const ClockContainer = connect(state => ({
  time: selector.getTime(state),
}), {
  showTime: actions.showTime,
})(Clock);