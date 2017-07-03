const get = state => state.components.clock;

export const getTime = state => get(state).time;
