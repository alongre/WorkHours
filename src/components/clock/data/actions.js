export const SHOW_TIME = 'components/clock/SHOW_TIME';

export const showTime = (time) => ({
  type: SHOW_TIME,
  payload: time,
});