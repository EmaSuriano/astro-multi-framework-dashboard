import type { AstroInstance, MarkdownInstance } from 'astro';
import { humanize } from './string';

type Link = {
  label: string;
  href: string;
};

const getName = (fullPath: string) => {
  const fileName = fullPath.replace(/^.*[\\\/]/, '').split('.')[0] || '';
  return fileName === 'index' ? 'Home' : humanize(fileName);
};

export const getPages = (): Promise<Link[]> => {
  return Promise.all(
    [
      ...Object.values(import.meta.glob<AstroInstance>('../pages/*.astro')),
      ...Object.values(import.meta.glob<MarkdownInstance<{}>>('../pages/*.md')),
    ].map((val) =>
      val().then((page) => ({
        label: getName(page.file),
        href: page.url || '/',
      })),
    ),
  );
};
