const { uniq } = require('lodash');
import { sum } from 'lodash';
const array = [1, 2, 1, 6, 8, 9, 2, 2, 9, 2, 0];

const uniqueArray = uniq(array);
console.log('Testcode updated!!!');
console.log(uniqueArray, sum(uniqueArray));