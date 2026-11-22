/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

render(() => <App />, root)

requestAnimationFrame(() => {
  root.scrollTop = 0;
});