import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreem } from './04-useRef/FocusScreem'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    <MultipleCustomHook />
    {/* <FocusScreem/> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
  </React.StrictMode>,
)
