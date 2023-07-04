import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App";
import { MantineProvider } from "@mantine/core";

ReactDOM.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
    </MantineProvider>
    , document.getElementById("root"));