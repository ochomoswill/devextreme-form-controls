import React from 'react';
import 'devextreme/dist/css/dx.light.compact.css';

import './App.css';
import RHFControls from "./features/RHFControls";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Controls from "./features/Controls";

function App() {
    return (
        <div className={'main'}>
            <BrowserRouter>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 40}}>
                    <NavLink to={'/'}>Controls</NavLink>
                    <NavLink to={'/react-hook-form'}>RHF Controls</NavLink>
                </div>

                <Routes>
                    <Route path="/" element={<Controls />} />
                    <Route path="/react-hook-form" element={<RHFControls />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
