import React from 'react';

import { renderHook, act } from '@testing-library/react-hooks';

import useInputChange from '../src/hooks/useInputChange';

test('**useInputChange test**', () => {
  const { result } = renderHook(({ initialValue }) => useInputChange(initialValue), {
    initialProps: {initialValue: ''}
  });

  act(() => {
    result.current[1]({target: {value: 'hello'}});
  });

  expect(result.current[0]).toBe('hello');
});


