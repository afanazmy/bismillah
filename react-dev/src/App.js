import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import theme from "./theme";
import { history, store } from "./redux/store";
import Router from "./router";

const App = () => {
  return (
    <ThemeProvider data-testid="app" theme={theme}>
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
