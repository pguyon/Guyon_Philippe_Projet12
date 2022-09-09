import './App.css';
import HorizontalNav from './components/navbar/horizontalNav/HorizontalNav';
import VerticalNav from './components/navbar/verticalNav/VerticalNav';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <HorizontalNav/>
                <VerticalNav/>
                    <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="/dashboard/:id" element={<Dashboard />}/>
                    </Routes>
                </BrowserRouter>
            </div>
    );
}

export default App;
