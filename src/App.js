import Router from "./route";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  );
}
export default App;
