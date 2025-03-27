export const VISIBILITY_FILTERS = {
    UNMARKED: 'Remaining',
    MARKED: 'Completed',
    ALL: 'All'
} as const;

export const LOCALSTORAGE_KEY: string = 'groceryList' as const;
export const LOCALSTORAGE_THEME: string = 'theme' as const;

export const THEME_MAP = {
    'Mint': {
        primary: 'var(--color-mint)',
        secondary: 'var(--color-mint-light)',
    },
    'Hot Pink': {
        primary: 'var(--color-hot-pink)',
        secondary: 'var(--color-bubblegum)',
    },
    'Azureish White': {
        primary: 'var(--color-azureish-white)',
        secondary: 'var(--color-ghost-white)',
    }
} as const;