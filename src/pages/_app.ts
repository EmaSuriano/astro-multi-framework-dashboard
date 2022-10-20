import type { App } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default (app: App) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  });

  app.use(vuetify);
};
