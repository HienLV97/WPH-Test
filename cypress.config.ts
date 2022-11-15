import { defineConfig } from "cypress";
import {addMatchImageSnapshotPlugin} from 'cypress-image-snapshot/plugin';
const { defineConfig } = require('cypress')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

export default defineConfig({
  // ...restConfigs
  // setupNodeEvents(on, config) {
  //     addMatchImageSnapshotPlugin(on, config);
  // },
  // ...restConfigs
  e2e:
  {

    env: {

    },
    baseUrl: 'https://writersperhour.dev/',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      })
    }
  }
})

