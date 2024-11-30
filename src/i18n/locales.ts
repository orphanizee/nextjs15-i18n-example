// src/config/locales.ts
export enum Locale {
    EN = 'en',
    DE = 'de',
    JA = 'ja'
}

// 配列として使用する場合のヘルパー
export const SUPPORTED_LOCALES = Object.values(Locale);

// デフォルトのロケール
export const DEFAULT_LOCALE = Locale.EN;

// 言語の表示名
export const LOCALE_LABELS: Record<Locale, string> = {
    [Locale.EN]: 'English',
    [Locale.DE]: 'Deutsch',
    [Locale.JA]: '日本語'
} as const;