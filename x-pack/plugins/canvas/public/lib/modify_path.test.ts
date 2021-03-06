/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { prepend, append } from './modify_path';

describe('modify paths', () => {
  describe('prepend', () => {
    it('prepends a string path', () => {
      expect(prepend('a.b.c', '0')).toEqual(['0', 'a', 'b', 'c']);
      expect(prepend('a.b.c', ['0', '1'])).toEqual(['0', '1', 'a', 'b', 'c']);
    });

    it('prepends an array path', () => {
      expect(prepend(['a', 1, 'last'], '0')).toEqual(['0', 'a', '1', 'last']);
      expect(prepend(['a', 1, 'last'], [0, 1])).toEqual(['0', '1', 'a', '1', 'last']);
    });
  });

  describe('append', () => {
    it('appends to a string path', () => {
      expect(append('one.2.3', 'zero')).toEqual(['one', '2', '3', 'zero']);
      expect(append('one.2.3', ['zero', 'one'])).toEqual(['one', '2', '3', 'zero', 'one']);
    });

    it('appends to an array path', () => {
      expect(append(['testString'], 'huzzah')).toEqual(['testString', 'huzzah']);
      expect(append(['testString'], ['huzzah', 'yosh'])).toEqual(['testString', 'huzzah', 'yosh']);
    });
  });
});
