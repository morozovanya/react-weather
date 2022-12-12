import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
