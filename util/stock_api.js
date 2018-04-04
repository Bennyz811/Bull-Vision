import {config} from '../config.js';
import * as axios from 'axios';


const alphaIntradayURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=' + config.SECRET_KEY;

export async function fetchAlphaAPI() {
    try {
        const response = await axios.get(alphaIntradayURL);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}



