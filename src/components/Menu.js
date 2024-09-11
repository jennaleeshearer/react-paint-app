import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth,
    setLineOpacity }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="Menu d-flex mx-auto align-items-center rounded justify-content-evenly position-absolute bottom-0">
                <label>Brush Color </label>
                <input
                    type="color"
                    onChange={(e) => {
                        setLineColor(e.target.value);
                    }}
                />
                <label>Brush Width </label>
                <input type="range" className="form-range w-25" min="1" max="20" onChange={(e) => {setLineWidth(e.target.value);}} />

                <label>Brush Opacity</label>
                <input type="range" className="form-range w-25" min="1" max="20" onChange={(e) => {setLineOpacity(e.target.value / 100);}} />
            </div>
        </div>
    );
};

export default Menu;
