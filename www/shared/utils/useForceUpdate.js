import { useState, useCallback } from 'react';

const useForceUpdate = () => {
  const [, setState] = useState(false);

  const toggleState = useCallback(() => setState((state) => !state), []);

  return toggleState;
};

export default useForceUpdate;
