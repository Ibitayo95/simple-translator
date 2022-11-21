import React from "react";
import "./Translation.css";

export default function Translator({ title, text }) {
    // text is going through, next step is to send the text prop to the translator API
    // and display it in the H4

    return (
        <div className="translation-box">
            <h3>{title}</h3>
            <h4>{text}</h4>
        </div>
    );
}
