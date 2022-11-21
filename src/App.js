import "./App.css";
import { Navbar } from "./components/Navbar";
import Translation from "./components/Translation";
import Translator from "././components/Translator";
import ButtonAppBar from "./components/ButtonAppBar";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2",
        },
    },
});

function App() {
    const [text, setText] = useState(); // userInput from the Translation component

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <Navbar />
                <ButtonAppBar />
                <div className="translation-area">
                    <Translation
                        title="Enter English"
                        translate={(userInput) => {
                            setText(userInput);
                        }}
                    />
                    <Translator title="Translation" text={text} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
