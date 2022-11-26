import React, { useEffect, useState } from "react";
import "./Translation.css";

export default function Translator({ title, text }) {
    // text is going through, next step is to send the text prop to the translator API
    // and display it in the H4

    const [translated, setTranslated] = useState("");

    useEffect(() => {
        async function getResponse() {
            try {
                const config = {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: text,
                };
                const response = await fetch(
                    "http://localhost:8080/translate/",
                    config
                );
                const json = await response.json();
                if (response.ok) {
                    setTranslated(json.translations[0].translatedText);
                } else {
                    console.log(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (text) getResponse();
    }, [text, translated]);

    return (
        <div className="translation-box">
            <h3>{title}</h3>
            <h4>{translated}</h4>
        </div>
    );
}
