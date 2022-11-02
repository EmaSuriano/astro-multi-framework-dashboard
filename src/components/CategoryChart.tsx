import { useStore } from '@nanostores/react';
import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { Product } from 'types';
import {
  getCategories,
  getTotalStock,
  groupByCategory,
  getRating,
} from 'utils/product';
import { hiddenCategories } from 'utils/state';
import randomColor from 'randomcolor';
import { humanize } from 'utils/string';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '30px',
};

type Props = {
  products: Product[];
};

type View = 'stock' | 'rating';

const CategoryChart = (props: Props) => {
  const [view, setView] = React.useState<View>('stock');

  const disabledCategories = useStore(hiddenCategories);
  const categories = getCategories(props.products);
  const groupedByCategory = groupByCategory(props.products);

  const data = categories
    .filter((category) => !disabledCategories.includes(category))
    .map((category) => ({
      name: humanize(category),
      stock: getTotalStock(groupedByCategory[category]!),
      rating: getRating(groupedByCategory[category]!),
      fill: randomColor({ seed: category, luminosity: 'dark' }),
    }));

  return (
    <>
      <div style={{ width: '100%', height: 400, position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="80%"
            barSize={15}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey={view}
            />

            <Legend
              iconSize={20}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <ToggleButtonGroup
          style={{ position: 'absolute', top: 0 }}
          color="primary"
          value={view}
          exclusive
          onChange={(_, val) => val && setView(val)}
        >
          <ToggleButton value="stock">Stock</ToggleButton>
          <ToggleButton value="rating">Rating</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default CategoryChart;
