import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.querySelector("#root");
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error("container not found");
};
