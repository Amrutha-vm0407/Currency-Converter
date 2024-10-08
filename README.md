<h1>Currency Converter using API</h1>
<h2>Procedure followed while building</h2>
<h3>Step:1. Choose a Currency API:</h3>
<p>Free APIs like ExchangeRate-API, Open Exchange Rates, or Fixer provide real-time currency exchange rates. Some might offer limited free usage</p>

<h3>Step:2. Collecting the country code and country flag </h3>
<li>The file copy.js contains the country list with the country code</li>
<li>https://flagsapi.com/{countrycode}/flat/64.png ,this link contains the flag of each country we can be accessed using country code</li> 
<li>e.g., for Indian flag -> https://flagsapi.com/IN/flat/64.png</li>

<h3>Step:3. Designing the Converter:</h3>
<p>You will need to build an User Interface (HTML ,CSS) that allows the user to input:</p>

<li>The amount of money to convert.</li>
<li>The source currency (e.g., USD).</li>
<li>The target currency (e.g., INR).</li>

<h3>Step:4. Fetching API:</h3>
<li>We have used the API link that contains the currency value of each country</li>
<li>https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/{current country}</li>

