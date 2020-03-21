import React from "react"
import {renderToString} from 'react-dom/server'
import {App} from "./main.tsx"

export function render() {
    return renderToString(React.createElement(App))
}