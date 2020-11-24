export const initialState = {
  player: 1,
  dice: null,
  fields: [0, 0, 0, 0, 0],
};

export const isPlayerInGame = (state, player) =>
  state.fields.find((p) => p === player);

export const doTurn = (state) => {
  if (state.dice === null) {
    return {
      ...state,
      dice: 1 + Math.floor(Math.random() * 6),
    };
  }

  return {
    ...state,
    dice: null,
    player: state.player === 1 ? 2 : 1,
  };
};
