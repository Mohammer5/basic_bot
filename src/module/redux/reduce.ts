import { executeIfFunction } from './executeIfFunction';

export const reduce = (cases: object) =>
  defaultCase =>
    state =>
      action =>
        key =>
          executeIfFunction(
            key in cases ? cases[key] : defaultCase,
            state,
            action
          )
;
