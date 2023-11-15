
import { Route,Routes, BrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/welcomePage/WelcomePage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;