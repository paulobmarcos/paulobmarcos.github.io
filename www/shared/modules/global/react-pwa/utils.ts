import { PwaState } from './types';

const matchesMedia = (media: string) => window.matchMedia(media).matches;

export const isPwa = () => {
  if (!window.navigator) return false;
  
  // For iOS
  if ('standalone' in window.navigator || 'fullscreen' in window.navigator) return true;

  // For Android
  if (
    matchesMedia('(display-mode: standalone)') ||
    matchesMedia('(display-mode: fullscreen)') ||
    matchesMedia('(display-mode: minimal-ui)')
  ) return true;

  return false;
};

export const isiOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);

export const isPwaReadyToInstall = (state: PwaState) => {
  const states = [PwaState.NotInstalled, PwaState.Installing, PwaState.InstallationFailed];
  
  return states.includes(state);
};
