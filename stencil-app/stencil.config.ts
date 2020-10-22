import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-demo',
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
      inlineDynamicImports: true, // inlines dynamic imports
      externalRuntime: false, // inlines @stencil/core
    },
  ],
};
