# Football Predictor Website

## Overview

This is a football predictor website where users can select a match, filter matches by federation, and get predictions for the match outcomes (winner or draw) through an API.

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- EJS
- Node.js

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/football-predictor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd football-predictor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Get an API Key:

   1. Go to https://rapidapi.com/boggio-analytics/api/football-prediction .
   2. Log In/Sign Up to get an API Key.
   3. Replace the API Key provided with [YOUR_API_KEY] in the code.

5. Start the application:

   ```bash
   nodemon index.js
   # Or node index.js
   ```

   The website should now be accessible at http://localhost:3000.

## Usage

1. Open the website in your browser.
2. Select a match from the available list.
3. Optionally, filter matches by selecting a federation.
4. Click the "Predict" button to retrieve the match prediction.

## API Integration

The website uses a football prediction API to get match predictions. The API endpoint is https://rapidapi.com/boggio-analytics/api/football-prediction. Ensure that the API is accessible and replace [YOUR_API_KEY] with the actual API key provided in your code.

## Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.
