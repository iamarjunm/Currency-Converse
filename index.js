import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const API_URL = "https://api.frankfurter.app";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    const year = dateObj.getFullYear();
    const month = `${dateObj.getMonth() + 1}`.padStart(2, '0');
    const day = `${dateObj.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
};

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/currencies");
        res.render("index.ejs", {
            currency: result.data,
            content: null,
            fromCurrency: null,
            toCurrency: null,
            rateOption: null,
            amountOption: null,
            amount: null,
            date: null
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.post("/convert", async (req, res) => {
    const { fromCurrency, toCurrency, rateOption, date, amount, amountOption } = req.body;
    console.log('From Currency:', fromCurrency);
    console.log('To Currency:', toCurrency);
    console.log('Rate Option:', rateOption);
    console.log('Date:', date);
    console.log('Amount:', amount);

    let apiUrl;

    if (rateOption === 'latest' && amountOption === 'default') {
        apiUrl = API_URL + "/latest?from=" + fromCurrency + "&to=" + toCurrency;
    } else if (rateOption === 'historical' && amountOption === 'default') {
        apiUrl = API_URL + "/" + formatDate(date) + "?from=" + fromCurrency + "&to=" + toCurrency;
    } else if (rateOption === 'latest' && amountOption === 'custom') {
        apiUrl = API_URL + "/latest?from=" + fromCurrency + "&to=" + toCurrency + "&amount=" + amount;
    } else if (rateOption === 'historical' && amountOption === 'custom') {
        apiUrl = API_URL + "/" + formatDate(date) + "?from=" + fromCurrency + "&to=" + toCurrency + "&amount=" + amount;
    }

    console.log('API URL:', apiUrl);

    try {
        const result = await axios.get(apiUrl);
        const currencyResult = await axios.get(API_URL + "/currencies");
        console.log(date, formatDate(date));
        res.render("index", {
            content: result.data,
            currency: currencyResult.data,
            fromCurrency,
            toCurrency,
            rateOption,
            amountOption,
            amount,
            date: formatDate(date)
        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(404).send(error.message);
    }
});

app.get("/back", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
