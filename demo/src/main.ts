import { createApp } from 'vue'
import { setWorkerUrl } from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import App from './App.vue'

// maplibre-gl v6 is ESM-only and needs to be told where the bundler placed its worker
setWorkerUrl(workerUrl)

createApp(App).mount('#app')
