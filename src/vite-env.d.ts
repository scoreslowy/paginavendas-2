/// <reference types="vite/client" />

declare global {
  interface Window {
    utmify?: {
      track: (event: string, data?: any) => void;
    };
    fbq?: (action: string, event: string, data?: any) => void;
    trackInitiateCheckout?: () => void;
    getCheckoutUrlWithUtms?: () => string;
    utmifyLoaded?: boolean;
  }
}

export {};
