import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
  //</React.StrictMode>,
);
