export {};
type TranslateElementLayout = 0 | 1 | 2;
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay?: boolean;
            layout?: TranslateElementLayout; // Google TranslateElement.Layout enum value
          },
          elementId: string
        ) => void;
      };
    };
  }
}
