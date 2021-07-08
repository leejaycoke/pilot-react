import { useState, useCallback } from 'react';

const useInputChange = (initialState = '') => {
  const [input, setInput] = useState(initialState);

  const onChange = useCallback(({ target }) => {
    setInput(target.value);
  }, []);

  return [input, onChange, setInput] as const;
};

export default useInputChange;
