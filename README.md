<h1>Currency Converter using API</h1>
<h2>Live Demo: https://chipper-dusk-326501.netlify.app/<h2>
<h2>Procedure followed while building</h2>
<h3>1. Choose a Currency API:</h3>
<p>Free APIs like ExchangeRate-API, Open Exchange Rates, or Fixer provide real-time currency exchange rates. Some might offer limited free usage</p>

<h3>2. Collecting the country code and country flag </h3>
<li>The file copy.js contains the country list with the country code</li>
<li>https://flagsapi.com/{countrycode}/flat/64.png ,this link contains the flag of each country we can be accessed using country code</li> 
<li>e.g., for Indian flag -> https://flagsapi.com/IN/flat/64.png</li>

<h3>3. Designing the Converter:</h3>
<p>You will need to build an User Interface (HTML ,CSS) that allows the user to input:</p>

<li>The amount of money to convert.</li>
<li>The source currency (e.g., USD).</li>
<li>The target currency (e.g., INR).</li>

<h3>4. Fetching API:</h3>
<li>We have used the API link that contains the currency value of each country</li>
<li>https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/{currentcountry}.json</li>
<img src="Screenshot 2024-10-09 232339.png">
<h2>Currency Converter interface</h2>
<img src="Screenshot 2024-10-09 232512.png">
<h2>Currency Converter interface which shows all the country codes included for the conversion</h2>


<h1>Technology used</h1>
<p>HTML5: For structuring the API interface.</p>
<p>CSS3: For styling the elements and creating a responsive design.</p>
<p>JavaScript (ES6): For implementing logic, handling user interactions, and updating the amount of the currency state dynamically.</p>

<h1>Installation</h1>

<h1>Step 1: Install Git </h1>
<p>If Git is not installed on your machine, download and install it:</p>
<p>Download Git https://git-scm.com/downloads</p>


<h1>Step 2: Clone the Repository</h1>
<p>Open your terminal (Command Prompt or Git Bash for Windows, Terminal for macOS or Linux).</p>
<p>Use the git clone command followed by the repository's URL : https://github.com/Amrutha-vm0407/Currency-Converter.git</p>
<p>After this type : code . to open the code in VSCode</p>



<h1>Step 3: Once the repository has been cloned, navigate to the project folder using the following command:</h1>
<p>cd Currency-Converter</p>
<p>open index.html and then run the code </p>

