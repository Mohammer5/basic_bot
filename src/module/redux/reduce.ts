import { executeIfFunction } from './executeIfFunction';

export const reduce = (cases: object) =>
  state =>
    action =>
      key =>
        executeIfFunction(
          key in cases ? cases[key] : state,
          state,
          action
        )
;
