export function setTo(
  state: IBalanceState,
  action: IBalanceAction = defaultAction,
): IBalanceState {
  return {
    ...state,
    [action.currency]: action.amount,
  };
}
