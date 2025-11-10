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
        tertiary: 'var(--color-zinc-950)'
    },
    // 'Kelp Green': {
    //     primary: 'var(--color-kelp-green)',
    //     secondary: 'var(--color-dolphin-grey)',
    //     tertiary: 'var(--color-matte-cream)'
    // },
    // 'Hot Pink': {
    //     primary: 'var(--color-hot-pink)',
    //     secondary: 'var(--color-bubblegum)',
    //     tertiary: 'var(--color-zinc-950)'
    // },
    'Bubblegum': {
        primary: 'var(--color-bubblegum)',
        secondary: 'var(--color-hot-pink)',
        tertiary: 'var(--color-zinc-950)',
    },
    'Lemon Yellow': {
        primary: 'var(--color-lemon-yellow)',
        secondary: 'var(--color-yellow-faded)',
        tertiary: 'var(--color-zinc-950)'
    },   
    'Azureish White': {
        primary: 'var(--color-azureish-white)',
        secondary: 'var(--color-ghost-white)',
        tertiary: 'var(--color-zinc-950)'
    },
} as const;