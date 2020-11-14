import React, { useEffect } from "react";
import Router from "./scenes/routes";
import { createStore, Provider } from "./stores/createStore";

const store = createStore();

store.bootstrap();

function App() {
  // useEffect(() => {
  //   store.bootstrap().then(() => {
  //     // setLoading(false);
  //   });
  // }, []);

  return (
    <main>
      <Provider value={store}>
        <Router></Router>
      </Provider>
    </main>
  );
}

export default App;
