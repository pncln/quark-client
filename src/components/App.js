import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Interface from './Pages/Interface';

const App = () => {
    return (
        <div className="mainApp">
            <div className="topBar">
                <div className="titleBar">
                    <div className="title">
                        Bar Title
                    </div>
                </div>
            </div>
            <div className="contentArea">
                <div className="contentPages">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Interface />} />
                        </Routes>
                    </Router>
                </div>
                
            </div>
        </div>
    )
}

export default App;