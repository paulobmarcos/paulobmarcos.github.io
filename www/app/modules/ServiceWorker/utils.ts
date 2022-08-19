export const registerServieWorker = async (path: string) => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('Service Worker is not supported by this browser.');
  }

  try {
    const registration = await navigator.serviceWorker.register(path);

    return registration;
  } catch (error: any) {
    throw new Error(`Service Worker registration failed: ', ${error.message}`);
  }
};

