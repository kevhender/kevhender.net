import React, { Fragment } from 'react';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

/**
 * Inserts commas and "and" into an array of strings to make it a useful English phrase
 *  [] -> ''
 *  ['one'] -> 'one'
 *  ['one', 'two'] -> 'one and two'
 *  ['one, 'two', 'three'] -> 'one, two, and three'
 * @param {String[]} stringArray An array of strings to use
 * @param {Function} wrapper A function that returns a string or React Component that wraps
 *  around each of the pieces of stringArray in the final return value
 * @returns {Fragment|String} A string formatted as above, or a React Fragment with
 *  each string wrapped by the wrapper function
 */
export default function arrayToEnglish(stringArray, wrapper) {
  if (isString(stringArray)) {
    return stringArray;
  }
  if (!isArray(stringArray)) {
    return '';
  }
  if (stringArray.length === 0) {
    return '';
  }

  if (stringArray.length === 1) {
    return isFunction(wrapper) ? wrapper(stringArray[0]) : stringArray[0];
  }
  if (stringArray.length === 2) {
    if (isFunction(wrapper)) {
      return (
        <Fragment>
          {wrapper(stringArray[0])}
          {' and '}
          {wrapper(stringArray[1])}
        </Fragment>
      );
    }
    return `${stringArray[0]} and ${stringArray[1]}`;
  }

  const allExceptLast = stringArray.slice(0, -1);
  const last = stringArray.slice(-1)[0];
  if (isFunction(wrapper)) {
    return (
      <Fragment>
        {allExceptLast.map(str => (
          <Fragment>
            {wrapper(str)}
            {', '}
          </Fragment>
        ))}
        {' and '}
        {wrapper(last)}
      </Fragment>
    );
  }
  return `${allExceptLast.join(', ')}, and ${last}`;
}
