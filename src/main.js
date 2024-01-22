/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";
import global from "./mixins/global";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);
app.mixin(global)

registerPlugins(app);

app.mount("#app");
