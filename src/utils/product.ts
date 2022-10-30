import type { Product } from 'types';

export const groupByCategory = (
  products: Product[],
): Record<string, Product[]> => {
  return products.reduce((acc, curr) => {
    const existingCategory = acc[curr.category];

    acc[curr.category] = existingCategory
      ? existingCategory.concat(curr)
      : [curr];
    return acc;
  }, {} as Record<string, Product[]>);
};

export const getCategories = (products: Product[]): string[] => {
  const categoriesMap = products.reduce((acc, curr) => {
    acc[curr.category] = true;
    return acc;
  }, {} as Record<string, boolean>);

  return Object.keys(categoriesMap);
};

export const getTotalStock = (products: Product[]) => {
  return products.reduce((acc, curr) => acc + curr.stock, 0);
};

export const getRating = (products: Product[]) => {
  const avg =
    products.reduce((acc, curr) => acc + curr.rating, 0) / products.length;
  return Math.round(avg * 100) / 100;
};

export const getBrands = (products: Product[]) => {
  const brandsMap = products.reduce((acc, curr) => {
    acc[curr.brand] = true;
    return acc;
  }, {} as Record<string, boolean>);

  return Object.keys(brandsMap);
};
