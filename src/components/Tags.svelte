<script lang="ts">
  import Chip, { Set, Text } from '@smui/chips';
  import { getCategories } from 'utils/product';
  import type { Product } from 'types';
  import { humanize } from 'utils/string';
  import { hiddenCategories } from 'utils/state';

  export let products: Product[];

  let categories = getCategories(products);
  let selected: string[] = Array.from(categories);

  function updateSelection() {
    hiddenCategories.set(
      categories.filter((category) => !selected.includes(category)),
    );
  }
</script>

<h1>Categories</h1>

<Set
  chips={categories}
  let:chip
  filter
  bind:selected
  on:click={updateSelection}
>
  <Chip {chip} touch>
    <Text>{humanize(chip)}</Text>
  </Chip>
</Set>
