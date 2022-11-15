import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
  module.exports = (on: any, config: any) => {
    addMatchImageSnapshotPlugin(on, config);
  };
  