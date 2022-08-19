import { useRef, useEffect, useCallback, useState } from 'react';
import { PwaState, BeforeInstallPromptEvent } from './types';
import { isPwa, isPwaReadyToInstall } from './utils';

const usePwa = () => {
  const [state, setState] = useState(PwaState.Initializing);
  const promptRef = useRef<BeforeInstallPromptEvent | null>();

  const promptInstall = useCallback(async () => {
    if (!promptRef.current?.prompt) return;

    setState(PwaState.Installing);

    try {
      const { outcome } = await promptRef.current.prompt();

      if (outcome === 'dismissed') {
        throw new Error('User dismissed installation prompt');
      }
  
      setState(PwaState.Installed);
    } catch (error) {
      setState(PwaState.InstallationFailed);
    } finally {
      promptRef.current = null;
    }
  }, [setState]);

  const handleBeforeInstallPrompt = useCallback((event: BeforeInstallPromptEvent) => {
    event.preventDefault();

    if (!event.prompt) {
      promptRef.current = null;
      setState(PwaState.NotSupported);
      return;
    }

    if (promptRef.current === undefined) {
      setState(PwaState.NotInstalled);
    }

    promptRef.current = event;
  }, []);

  const handleAppInstalled = useCallback(() => {
    setState(PwaState.Installed);
  }, []);

  useEffect(() => {
    const installed = isPwa();
  
    if (installed) {
      promptRef.current = null;
      return handleAppInstalled();
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // If beforeinstallprompt doesn't fire we assume PWA is not supported.
    setTimeout(() => {
      if (promptRef.current === undefined) {
        setState(PwaState.NotSupported);
      }
    }, 3000);
  }, []);

  return {
    pwaState: state,
    isPwaReadyToInstall: isPwaReadyToInstall(state),
    promptPwaInstall: promptInstall,
  };
};

export default usePwa;
