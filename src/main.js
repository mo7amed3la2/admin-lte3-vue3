import { createApp } from "vue";
import App from "./App.vue";

import "jquery";
import "bootstrap";
import "popper.js";
// fortawesome
import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/fontawesome.js";

import "bootstrap/dist/css/bootstrap.min.css";

// adminlte css
import "./assets/dist/css/adminlte.min.css";

import router from "./router";
// adminlte js
import "./assets/dist/js/adminlte.min.js";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

createApp(App).use(router).mount("#app");
