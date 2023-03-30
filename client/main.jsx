import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { App } from "/imports/ui/App";
import { ThemeProvider } from "theme-ui";
import theme from "/imports/ui/theme";

export default (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
});
