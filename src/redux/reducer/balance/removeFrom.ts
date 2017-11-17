export function removeFrom(
  state: IBalanceState,
  action: IBalanceAction = defaultAction,
): IBalanceState {
  const currentValue = state[action.name] || 0;
  return {
    ...state,
    [action.name]: currentValue - action.value,
  };
}
