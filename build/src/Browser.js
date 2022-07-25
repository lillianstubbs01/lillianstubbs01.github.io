import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import {Routes} from 'react-router';
import Home from './routes/Home';

function Browser() {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    return (
        root.render(
            <React.StrictMode>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/Home" element={<Home />}></Route>
                    </Routes>
                </Router>
            </React.StrictMode>
        )
    );
}

export default Browser;