import React from 'react'
import {StrictMode} from 'react'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'

ReactDOM.render(<App/>, document.querySelector("#root"))

// const rootElement = document.querySelector("#root")
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );