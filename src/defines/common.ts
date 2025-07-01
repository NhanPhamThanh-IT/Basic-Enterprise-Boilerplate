export const Themes = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
} as const;

export type Themes = typeof Themes[keyof typeof Themes];
