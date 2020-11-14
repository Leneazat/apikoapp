import React from "react";
import Router from "./scenes/routes";
import { createStore, Provider } from "./stores/createStore";

const store = createStore();

store.bootstrap();

function App() {
  return (
    <main>
      <Provider value={store}>
        <Router></Router>
      </Provider>
    </main>
  );
}

export default App;
