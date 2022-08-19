import { useRef } from 'react';
import { useAsync } from 'react-use';
import { registerServieWorker } from './utils';

interface Options {
  path?: string;
}

const useServiceWorker = (options: Options = {}) => {
  const { path = '/service-worker.js' } = options;

  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);

  const state = useAsync(async () => {
    if (registrationRef.current) {
      await registrationRef.current.unregister();
    }

    registrationRef.current = await registerServieWorker(path);

    return registrationRef.current;
  }, [path]);

  return state;
};

export default useServiceWorker;
