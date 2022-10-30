<template>
  <h1>Overview</h1>

  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div>Total stock</div>
            <p class="text-h4 text--primary">
              {{
                getTotalStock(
                  props.products.filter(
                    (product) => !$disableCategories.includes(product.category),
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
              {{
                getBrands(
                  props.products.filter(
                    (product) => !$disableCategories.includes(product.category),
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

<script setup lang="ts">
import type { Product } from 'types';
import { disableCategories } from 'utils/state';
import { useStore } from '@nanostores/vue';
import { getBrands, getTotalStock } from 'utils/product';

type Props = {
  products: Product[];
};

const props = defineProps<Props>();
const $disableCategories = useStore(disableCategories);
</script>
