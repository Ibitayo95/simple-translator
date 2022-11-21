import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Translation.css";

export default function Translation({ title, translate }) {
    const [text, setText] = useState(); // when we capture the userInput this will be saved as state

    function sendText() {
        translate(text); // this sends the text to the parent component
    }

    return (
        <div className="translation-box">
            <h3>{title}</h3>
            <TextField
                id="outlined-basic"
                label="English"
                variant="outlined"
                multiline
                rows={8}
                fullWidth
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <div onClick={sendText}>
                <Button variant="outlined">Translate!</Button>
            </div>
        </div>
    );
}
