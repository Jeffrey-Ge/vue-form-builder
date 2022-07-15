import MyCharts from './components/myCharts/index.vue'

import type { App } from 'vue'

const components = [
    MyCharts
]

export function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export {
    MyCharts
}
