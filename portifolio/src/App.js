
import { Route,Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "./pages/welcomePage/WelcomePage";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;