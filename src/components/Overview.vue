<script setup lang="ts">
import type { Product } from 'types';
import { hiddenCategories } from 'utils/state';
import { useStore } from '@nanostores/vue';
import { getBrands, getTotalStock } from 'utils/product';

type Props = {
  products: Product[];
};

const props = defineProps<Props>();
const $hiddenCategories = useStore(hiddenCategories);
</script>

<template>
  <h1>Overview</h1>

  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div>Total stock</div>
            <p class="text-h4 text--primary">
              <!-- Calculating stock with value from store -->
              {{
                getTotalStock(
                  props.products.filter(
                    (product) => !$hiddenCategories.includes(product.category),
                  ),
                )
              }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div>Total brands</div>
            <p class="text-h4 text--primary">
              <!-- Calculating brand amount with value from store -->
              {{
                getBrands(
                  props.products.filter(
                    (product) => !$hiddenCategories.includes(product.category),
                  ),
                ).length
              }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
