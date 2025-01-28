import { StrictMode } from "react";
import 'react-awesome-slider/dist/styles.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./index.css";
/* Import these in your global CSS or a component where the slider is used */
import { Provider } from "react-redux";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { store } from "./core/stateManagement/store.ts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
