import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Interface from './Pages/Interface';

const App = () => {
    return (
        <div className="root-container">
            <Router>
                <Routes>
                    <Route path="/" element={<Interface />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;