import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import FoodDetail from './pages/FoodDetail';


export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<FoodDetail />} />
      </Routes>
    </Router>
  )
}