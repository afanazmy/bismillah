import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import theme from "./theme";
import { history, store } from "./redux/store";
import Router from "./router";

import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <ThemeProvider data-testid="app" theme={theme}>
      <Provider store={store}>
        <Layout>
          <Router history={history} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
