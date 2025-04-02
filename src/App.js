import React from "react";
import Party from "./Party.js";
import './style.css';

function App() {
    return (
        <div>
            <div>
                <h1>Party</h1>
                {Party()}
            </div>
    
            <div>
                <h1>Badges</h1>
            </div>
        </div>
    );
}

export default App;
