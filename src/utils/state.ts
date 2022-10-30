import { atom } from 'nanostores';

export const isFrameworkVisible = atom(false);

export const disableCategories = atom<string[]>([]);
