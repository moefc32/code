const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const owner = {
    displayName: 'Faizal Chan.',
    introduction: 'I build solutions by prioritizing clarity, efficiency, and long-term sustainability over trends.',
    shortTitle: 'UX Engineer & Researcher',
};

export const blog = {
    title: {
        long: 'Architecture Recipes',
        short: 'Architectures',
    },
    path: '/architecture-recipes',
    pageSize,
};
