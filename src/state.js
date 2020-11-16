export const initialState = {
  onTurn: 1,
  fields: [0, 0, 0, 0, 0],
};

export const isPlayerInGame = (fields, player) =>
  fields.find((p) => p === player);

export const doTurn = (state, player, steps) => {
  return { ...state, onTurn: state.onTurn === 1 ? 2 : 1 };
};
