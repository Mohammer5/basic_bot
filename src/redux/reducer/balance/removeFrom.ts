export function removeFrom(
  state: IBalanceState,
  action: IBalanceAction = defaultAction,
): IBalanceState {
  const currentValue = state[action.currency] || 0;
  return {
    ...state,
    [action.currency]: currentValue - action.amount,
  };
}
