# Currency Converse

## Overview

Currency Converse is a web application that allows users to convert currencies using the Frankfurter API. It provides up-to-date exchange rates and historical data, giving users the ability to make informed financial decisions.

## Features

- Convert between different currencies
- Retrieve the latest exchange rates
- Get historical exchange rates for a specific date
- Customizable amount input

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/iamarjunm/Currency-Converse.git
    cd Currency-Converse
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Run the server:**

    ```bash
    nodemon index.js
    ```

    or if you prefer to run without nodemon:

    ```bash
    node index.js
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Select the currencies you want to convert from and to.
3. Choose whether you want the latest rate or historical rate.
4. If choosing historical rate, select the desired date.
5. Enter the amount if you want to use a custom amount, otherwise the default amount is 1.
6. Click "Convert" to get the conversion result.

## Project Structure

- `index.js`: Main server file where the Express app is set up and routes are defined.
- `views/`: Folder containing the EJS templates.
  - `partials/`: Contains reusable EJS partials like `header.ejs` and `footer.ejs`.
  - `index.ejs`: Main template for the currency conversion form and result display.
- `public/`: Folder for static assets like CSS and images.
  - `styles/`: Contains the `main.css` file with the styles for the application.

## Technologies Used

- Node.js
- Express.js
- EJS
- Axios
- Body-Parser
- Frankfurter API

## Contribution

Feel free to fork this repository, submit issues and feature requests, and make pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact

For any questions or inquiries, please reach out to me at arjunhero38@gmail.com.

---

Thank you for checking out Currency Converse! If you find this project helpful, please give it a star on GitHub 🌟

