import '../src/index.css';
// Configures Storybook to log the actions (onArchiveTask and onPingTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
