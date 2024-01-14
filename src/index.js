// Primary index.js module

import { inputRender } from "./platform";
import { callApi } from "./call";
import styles from "./style.css"

export async function initWeather() {
    console.log('Initializing...')
    inputRender()
}

initWeather();