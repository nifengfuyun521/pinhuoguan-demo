
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { installImageFallback } from "./app/lib/installImageFallback.ts";
  import "./styles/index.css";

  installImageFallback();

  createRoot(document.getElementById("root")!).render(<App />);
  
