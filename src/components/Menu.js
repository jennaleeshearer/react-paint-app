import React from "react";
import "../App.css";

export default function Menu(props) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="Menu d-flex mx-auto align-items-center rounded justify-content-evenly position-absolute bottom-0">
                <label>Brush Color </label>
                <input type="color" onChange={evt => props.setLineColor(evt.target.value)} />

                <label>Brush Width </label>
                <input type="range" className="form-range w-25" min="1" max="20" onChange={evt => props.setLineWidth(evt.target.value)} />

                <label>Brush Opacity</label>
                <input type="range" className="form-range w-25" min="1" max="20" onChange={evt => props.setLineOpacity(evt.target.value / 100)} />
            </div>
        </div>
    );
}
