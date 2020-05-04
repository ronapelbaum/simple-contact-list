export const Types = {
  INIT: 'INIT',
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
};

export const incrementCounter = () => ({
  type: Types.INCREMENT_COUNTER,
});
