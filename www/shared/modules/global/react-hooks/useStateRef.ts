import React, { useCallback, useState, useRef } from 'react';
import cloneDeep from 'lodash-es/cloneDeep';

const useStateRef = <T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>, React.MutableRefObject<T>] => {
  const [state, setState] = useState<T>(initialState);
  const stateRef = useRef(state);

  const updateState: React.Dispatch<React.SetStateAction<T>> = useCallback((action) => {
    setState((prevState) => {
      const nextState = action instanceof Function ? action(prevState) : action;

      stateRef.current = cloneDeep(nextState);

      return nextState;
    });
  }, []);

  return [state, updateState, stateRef];
};

export default useStateRef;
