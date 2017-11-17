import { mapKeys } from 'lodash';
import * as pairs from './pairs';

export const pairMapping = mapKeys(pairs, pair => String(pair));
