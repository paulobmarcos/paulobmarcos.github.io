export interface PromptResult {
  outcome: 'accepted' | 'dismissed';
  platform: 'web' | 'android' | 'windows';
}

export interface BeforeInstallPromptEvent extends Event {
  prompt?: () => Promise<PromptResult>;
}

export enum PwaState {
  Initializing = 'initializing',
  NotSupported = 'not-supported',
  NotInstalled = 'not-installed',
  Installing = 'installing',
  Installed = 'installed',
  InstallationFailed = 'installation-failed',
}
