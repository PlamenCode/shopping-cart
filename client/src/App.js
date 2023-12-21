import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <Container>
                <NavbarComponent />
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Store />} />
                        <Route path='success' element={<Success />} />
                        <Route path='cancel' element={<Cancel />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </CartProvider>
    );
}

export default App;
