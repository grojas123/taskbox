import '../src/index.css';
// Configures Storybook to log the actions (onArchiveTask and onPingTask) in the UI.
//Register the msw addon
import {initialize,mswDecorator} from "msw-storybook-addon";
//Initialize MWS
initialize();
//Provide the MSW addon decorator globally
export const decorators=[mswDecorator];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
