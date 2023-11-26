import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
