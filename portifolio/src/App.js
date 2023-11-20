
import { Route,Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "./pages/welcomePage/WelcomePage";
import LoadingPage from "./pages/welcomePage/LoadingPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/Loading" element={<LoadingPage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;