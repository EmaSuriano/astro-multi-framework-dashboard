<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import type { Product } from 'types';
  import { hiddenCategories } from 'utils/state';
  import { humanize } from 'utils/string';

  export let products: Product[];
</script>

<DataTable style="width: 100%;">
  <Head>
    <Row>
      <Cell style="width: 100%;">Title</Cell>
      <Cell>Category</Cell>
      <Cell>Description</Cell>
      <Cell>Price</Cell>
      <Cell>Stock</Cell>
    </Row>
  </Head>
  <Body>
    {#each products.filter((product) => !$hiddenCategories.includes(product.category)) as item (item.id)}
      <Row>
        <Cell>{item.title}</Cell>
        <Cell>{humanize(item.category)}</Cell>
        <Cell>{item.description}</Cell>
        <Cell numeric>{item.price}</Cell>
        <Cell numeric>{item.stock}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>
