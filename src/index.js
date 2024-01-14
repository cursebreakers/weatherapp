// Primary index.js module

import { hello } from "./hello";
import { callApi } from "./call";
import styles from "./style.css"

export async function initWeather() {
    console.log('Initializing...')
    hello();
    callApi();
}

initWeather();