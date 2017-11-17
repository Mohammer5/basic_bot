export function setTo(
  state: IBalanceState,
  action: IBalanceAction = defaultAction,
): IBalanceState {
  return {
    ...state,
    [action.name]: action.value,
  };
}
