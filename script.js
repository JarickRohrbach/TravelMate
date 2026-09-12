/* =========================================================
   TRAVELMATE
   Complete JavaScript
   Deutsch 🇩🇪 / English 🇬🇧
   ========================================================= */


/* =========================================================
   1. TRANSLATIONS
   ========================================================= */

const translations = {

  de: {
    subtitle: "Deine Reise. Einfacher.",

    account: "👤 Mein Account",
    notLoggedIn: "Noch nicht angemeldet",
    login: "Anmelden",
    accountTitle: "👤 TravelMate Account",
    email: "E-Mail-Adresse",
    password: "Passwort",
    createAccount: "Account erstellen",
    welcome: "Willkommen bei TravelMate! ✈️",
    logout: "Abmelden",

    currency: "💱 Währungsrechner",
    amount: "Betrag eingeben",
    loadingCurrencies: "Währungen werden geladen...",
    convert: "Umrechnen",
    currencyResult: "Ergebnis erscheint hier",
    loadingRate: "Aktueller Wechselkurs wird geladen...",
    rateError: "Wechselkurs konnte nicht geladen werden.",

    connection: "✈️ Anschlussrechner",
    arrival: "Ankunftszeit",
    departure: "Abflugzeit",
    checkConnection: "Anschluss prüfen",
    enterTimes: "Gib deine Flugzeiten ein",

    budget: "💰 Reisebudget",
    flight: "Flugkosten €",
    hotel: "Unterkunft €",
    food: "Essen €",
    transport: "Transport €",
    calculateBudget: "Budget berechnen",

    settings: "⚙️ Einstellungen",
    language: "Sprache",

    validAmount: "Bitte gib einen gültigen Betrag ein.",
    chooseCurrencies: "Bitte wähle beide Währungen aus.",
    connectionError: "Bitte gib beide Zeiten ein.",

    goodBuffer: "🟢 Guter Puffer",
    tight: "🟡 Könnte knapp werden",
    veryTight: "🔴 Sehr knapp",

    total: "Gesamt",

    enterLoginData:
      "Bitte E-Mail und Passwort eingeben.",

    passwordShort:
      "Das Passwort muss mindestens 6 Zeichen haben.",

    accountCreated:
      "Account wurde erstellt! 🎉",

    loginError:
      "E-Mail oder Passwort ist nicht korrekt.",

    loggedInAs:
      "Angemeldet als "
  },


  en: {
    subtitle: "Your journey. Made easier.",

    account: "👤 My Account",
    notLoggedIn: "Not logged in",
    login: "Sign in",
    accountTitle: "👤 TravelMate Account",
    email: "Email address",
    password: "Password",
    createAccount: "Create account",
    welcome: "Welcome to TravelMate! ✈️",
    logout: "Sign out",

    currency: "💱 Currency Converter",
    amount: "Enter amount",
    loadingCurrencies: "Loading currencies...",
    convert: "Convert",
    currencyResult: "Result appears here",
    loadingRate: "Loading current exchange rate...",
    rateError: "Exchange rate could not be loaded.",

    connection: "✈️ Connection Calculator",
    arrival: "Arrival time",
    departure: "Departure time",
    checkConnection: "Check connection",
    enterTimes: "Enter your flight times",

    budget: "💰 Travel Budget",
    flight: "Flight cost €",
    hotel: "Accommodation €",
    food: "Food €",
    transport: "Transport €",
    calculateBudget: "Calculate budget",

    settings: "⚙️ Settings",
    language: "Language",

    validAmount: "Please enter a valid amount.",
    chooseCurrencies: "Please select both currencies.",
    connectionError: "Please enter both times.",

    goodBuffer: "🟢 Good buffer",
    tight: "🟡 Could be tight",
    veryTight: "🔴 Very tight",

    total: "Total",

    enterLoginData:
      "Please enter your email and password.",

    passwordShort:
      "Password must contain at least 6 characters.",

    accountCreated:
      "Account created! 🎉",

    loginError:
      "Email or password is incorrect.",

    loggedInAs:
      "Logged in as "
  }

};


/* =========================================================
   2. LANGUAGE
   ========================================================= */

function getLanguage() {

  return (
    localStorage.getItem(
      "travelmateLanguage"
    ) || "de"
  );

}


function changeLanguage() {

  const selector =
    document.getElementById(
      "languageSelect"
    );

  if (!selector) return;

  const language =
    selector.value;

  localStorage.setItem(
    "travelmateLanguage",
    language
  );

  applyLanguage(language);

}


function applyLanguage(language) {

  const t =
    translations[language];

  if (!t) return;

  document.documentElement.lang =
    language;


  /* Header */

  const headerText =
    document.querySelector(
      "header p"
    );

  if (headerText) {

    headerText.textContent =
      t.subtitle;

  }


  /* Account card */

  const accountCard =
    document.querySelector(
      ".account-card"
    );

  if (accountCard) {

    const title =
      accountCard.querySelector(
        "h2"
      );

    const button =
      accountCard.querySelector(
        "button"
      );

    if (title)
      title.textContent =
        t.account;

    if (button)
      button.textContent =
        t.login;

  }


  const cards =
    document.querySelectorAll(
      "main .card"
    );


  /* Currency */

  if (cards[0]) {

    const title =
      cards[0].querySelector(
        "h2"
      );

    const button =
      cards[0].querySelector(
        "button"
      );

    if (title)
      title.textContent =
        t.currency;

    if (button)
      button.textContent =
        t.convert;

  }


  const amount =
    document.getElementById(
      "amount"
    );

  if (amount)
    amount.placeholder =
      t.amount;


  /* Connection */

  if (cards[1]) {

    const title =
      cards[1].querySelector(
        "h2"
      );

    const labels =
      cards[1].querySelectorAll(
        "label"
      );

    const button =
      cards[1].querySelector(
        "button"
      );

    if (title)
      title.textContent =
        t.connection;

    if (labels[0])
      labels[0].textContent =
        t.arrival;

    if (labels[1])
      labels[1].textContent =
        t.departure;

    if (button)
      button.textContent =
        t.checkConnection;

  }


  /* Budget */

  if (cards[2]) {

    const title =
      cards[2].querySelector(
        "h2"
      );

    const button =
      cards[2].querySelector(
        "button"
      );

    if (title)
      title.textContent =
        t.budget;

    if (button)
      button.textContent =
        t.calculateBudget;

  }


  const flight =
    document.getElementById(
      "flight"
    );

  const hotel =
    document.getElementById(
      "hotel"
    );

  const food =
    document.getElementById(
      "food"
    );

  const transport =
    document.getElementById(
      "transport"
    );


  if (flight)
    flight.placeholder =
      t.flight;

  if (hotel)
    hotel.placeholder =
      t.hotel;

  if (food)
    food.placeholder =
      t.food;

  if (transport)
    transport.placeholder =
      t.transport;


  /* Account modal */

  const modal =
    document.getElementById(
      "accountModal"
    );

  if (modal) {

    const title =
      modal.querySelector(
        "h2"
      );

    if (title)
      title.textContent =
        t.accountTitle;


    const emailInput =
      document.getElementById(
        "email"
      );

    const passwordInput =
      document.getElementById(
        "password"
      );


    if (emailInput)
      emailInput.placeholder =
        t.email;

    if (passwordInput)
      passwordInput.placeholder =
        t.password;


    const buttons =
      modal.querySelectorAll(
        "button"
      );


    buttons.forEach(
      function(button) {

        const action =
          button.getAttribute(
            "onclick"
          );


        if (
          action ===
          "createAccount()"
        ) {

          button.textContent =
            t.createAccount;

        }


        if (
          action ===
          "login()"
        ) {

          button.textContent =
            t.login;

        }


        if (
          action ===
          "logout()"
        ) {

          button.textContent =
            t.logout;

        }

      }
    );


    const welcome =
      modal.querySelector(
        "#loggedInArea h3"
      );

    if (welcome)
      welcome.textContent =
        t.welcome;

  }


  /* Settings */

  const settingsTitle =
    document.getElementById(
      "settingsTitle"
    );

  const languageLabel =
    document.getElementById(
      "languageLabel"
    );


  if (settingsTitle)
    settingsTitle.textContent =
      t.settings;

  if (languageLabel)
    languageLabel.textContent =
      t.language;


  updateAccountView();

}


/* =========================================================
   3. CURRENCY DATA
   ========================================================= */

/*
   ExchangeRate-API Open Access

   One request returns the complete currency table.
   No API key required.

   The free Open Access data is updated once per day.
*/

const CURRENCY_API =
  "https://open.er-api.com/v6/latest/EUR";


let currencyRates = null;

let currencyUpdateTime = null;

let currencyNextUpdate = null;


/* =========================================================
   4. LOAD ALL CURRENCIES
   ========================================================= */

async function loadCurrencies() {

  const fromSelect =
    document.getElementById(
      "fromCurrency"
    );

  const toSelect =
    document.getElementById(
      "toCurrency"
    );


  if (
    !fromSelect ||
    !toSelect
  ) {

    return;

  }


  const t =
    translations[
      getLanguage()
    ];


  fromSelect.innerHTML =
    `<option value="">
      ${t.loadingCurrencies}
    </option>`;


  toSelect.innerHTML =
    `<option value="">
      ${t.loadingCurrencies}
    </option>`;


  try {

    /*
     * Check whether we already have
     * usable cached data.
     */

    const cached =
      localStorage.getItem(
        "travelmateCurrencyData"
      );


    if (cached) {

      try {

        const parsed =
          JSON.parse(
            cached
          );


        if (
          parsed &&
          parsed.rates &&
          parsed.cacheUntil &&
          Date.now() <
          parsed.cacheUntil
        ) {

          currencyRates =
            parsed.rates;

          currencyUpdateTime =
            parsed.updated;

          currencyNextUpdate =
            parsed.nextUpdate;

          populateCurrencies(
            fromSelect,
            toSelect
          );

          return;

        }

      } catch (cacheError) {

        console.warn(
          "Invalid currency cache.",
          cacheError
        );

      }

    }


    /*
     * Fetch fresh data.
     */

    const response =
      await fetch(
        CURRENCY_API,
        {
          cache: "no-store"
        }
      );


    if (!response.ok) {

      throw new Error(
        "Currency API HTTP " +
        response.status
      );

    }


    const data =
      await response.json();


    if (
      data.result !==
      "success" ||
      !data.rates
    ) {

      throw new Error(
        "Currency API returned an error."
      );

    }


    currencyRates =
      data.rates;


    currencyUpdateTime =
      data.time_last_update_utc ||
      null;


    currencyNextUpdate =
      data.time_next_update_utc ||
      null;


    /*
     * Cache until the API's next
     * announced update.
     */

    let cacheUntil =
      Date.now() +
      24 * 60 * 60 * 1000;


    if (
      data.time_next_update_unix
    ) {

      cacheUntil =
        data.time_next_update_unix *
        1000;

    }


    localStorage.setItem(
      "travelmateCurrencyData",
      JSON.stringify({

        rates:
          currencyRates,

        updated:
          currencyUpdateTime,

        nextUpdate:
          currencyNextUpdate,

        cacheUntil:
          cacheUntil

      })
    );


    populateCurrencies(
      fromSelect,
      toSelect
    );


  } catch (error) {

    console.error(
      "Currency loading error:",
      error
    );


    /*
     * Don't leave the user with
     * an empty converter.
     */

    fromSelect.innerHTML = `
      <option value="EUR">
        EUR – Euro
      </option>
    `;


    toSelect.innerHTML = `
      <option value="IDR">
        IDR – Indonesian Rupiah
      </option>
    `;


    currencyRates = null;

  }

}


/* =========================================================
   5. POPULATE CURRENCY DROPDOWNS
   ========================================================= */

function populateCurrencies(
  fromSelect,
  toSelect
) {

  if (
    !currencyRates
  ) {

    return;

  }


  fromSelect.innerHTML = "";

  toSelect.innerHTML = "";


  const currencyCodes =
    Object.keys(
      currencyRates
    )
    .sort();


  let displayNames = null;


  /*
   * Browser support for localized
   * currency names.
   */

  try {

    if (
      typeof Intl !==
      "undefined" &&
      Intl.DisplayNames
    ) {

      displayNames =
        new Intl.DisplayNames(
          [getLanguage()],
          {
            type: "currency"
          }
        );

    }

  } catch (error) {

    displayNames = null;

  }


  currencyCodes.forEach(
    function(code) {

      let name =
        code;


      if (displayNames) {

        try {

          name =
            displayNames.of(
              code
            ) || code;

        } catch (error) {

          name =
            code;

        }

      }


      const optionFrom =
        document.createElement(
          "option"
        );


      optionFrom.value =
        code;


      optionFrom.textContent =
        `${code} – ${name}`;


      fromSelect.appendChild(
        optionFrom
      );


      const optionTo =
        document.createElement(
          "option"
        );


      optionTo.value =
        code;


      optionTo.textContent =
        `${code} – ${name}`;


      toSelect.appendChild(
        optionTo
      );

    }
  );


  /*
   * TravelMate defaults.
   */

  if (
    currencyRates.EUR
  ) {

    fromSelect.value =
      "EUR";

  }


  if (
    currencyRates.IDR
  ) {

    toSelect.value =
      "IDR";

  }


  /*
   * Attribution required by
   * the Open Access API.
   */

  addCurrencyAttribution();

}


/* =========================================================
   6. API ATTRIBUTION
   ========================================================= */

function addCurrencyAttribution() {

  const result =
    document.getElementById(
      "currencyResult"
    );


  if (!result) return;


  if (
    document.getElementById(
      "exchangeRateAttribution"
    )
  ) {

    return;

  }


  const attribution =
    document.createElement(
      "small"
    );


  attribution.id =
    "exchangeRateAttribution";


  attribution.style.display =
    "block";


  attribution.style.marginTop =
    "8px";


  attribution.style.opacity =
    "0.7";


  attribution.innerHTML =
    `
      Rates by
      <a
        href="https://www.exchangerate-api.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        ExchangeRate-API
      </a>
    `;


  result.insertAdjacentElement(
    "afterend",
    attribution
  );

}


/* =========================================================
   7. CONVERT ANY SUPPORTED CURRENCY
   ========================================================= */

async function convertCurrency() {

  const amountInput =
    document.getElementById(
      "amount"
    );


  const fromSelect =
    document.getElementById(
      "fromCurrency"
    );


  const toSelect =
    document.getElementById(
      "toCurrency"
    );


  const result =
    document.getElementById(
      "currencyResult"
    );


  const t =
    translations[
      getLanguage()
    ];


  if (
    !amountInput ||
    !fromSelect ||
    !toSelect ||
    !result
  ) {

    return;

  }


  const amount =
    Number(
      amountInput.value
    );


  const from =
    fromSelect.value;


  const to =
    toSelect.value;


  if (
    !Number.isFinite(
      amount
    ) ||
    amount <= 0
  ) {

    result.innerText =
      t.validAmount;

    return;

  }


  if (
    !from ||
    !to
  ) {

    result.innerText =
      t.chooseCurrencies;

    return;

  }


  /*
   * Same currency.
   */

  if (
    from === to
  ) {

    result.innerText =
      formatCurrencyNumber(
        amount
      ) +
      " " +
      from +
      " = " +
      formatCurrencyNumber(
        amount
      ) +
      " " +
      to;

    return;

  }


  /*
   * Make sure we have rates.
   */

  if (
    !currencyRates
  ) {

    result.innerText =
      t.loadingRate;


    await loadCurrencies();


    if (
      !currencyRates
    ) {

      result.innerText =
        t.rateError;

      return;

    }

  }


  const fromRate =
    currencyRates[
      from
    ];


  const toRate =
    currencyRates[
      to
    ];


  if (
    typeof fromRate !==
      "number" ||
    typeof toRate !==
      "number"
  ) {

    result.innerText =
      t.rateError;

    return;

  }


  /*
   * The API data is relative to EUR.
   *
   * Example:
   *
   * EUR -> IDR:
   * amount × IDR_rate
   *
   * USD -> IDR:
   * amount × (IDR_rate / USD_rate)
   */

  const exchangeRate =
    toRate /
    fromRate;


  const converted =
    amount *
    exchangeRate;


  result.innerText =
    formatCurrencyNumber(
      amount
    ) +
    " " +
    from +
    " = " +
    formatConvertedNumber(
      converted
    ) +
    " " +
    to;


  addCurrencyAttribution();

}


/* =========================================================
   8. NUMBER FORMATTING
   ========================================================= */

function formatCurrencyNumber(
  value
) {

  return Number(
    value
  ).toLocaleString(
    getLanguage() === "de"
      ? "de-DE"
      : "en-US",
    {
      maximumFractionDigits:
        2
    }
  );

}


function formatConvertedNumber(
  value
) {

  /*
   * IDR, JPY, KRW etc. usually need
   * more visible whole-number precision.
   */

  const noDecimalCurrencies =
    [
      "IDR",
      "JPY",
      "KRW",
      "VND",
      "CLP",
      "PYG",
      "UGX",
      "RWF",
      "XAF",
      "XOF"
    ];


  const to =
    document.getElementById(
      "toCurrency"
    );


  const currency =
    to
      ? to.value
      : "";


  const digits =
    noDecimalCurrencies.includes(
      currency
    )
      ? 0
      : 2;


  return Number(
    value
  ).toLocaleString(
    getLanguage() === "de"
      ? "de-DE"
      : "en-US",
    {
      maximumFractionDigits:
        digits
    }
  );

}


/* =========================================================
   9. CONNECTION CALCULATOR
   ========================================================= */

function calculateConnection() {

  const arrivalElement =
    document.getElementById(
      "arrivalTime"
    );


  const departureElement =
    document.getElementById(
      "departureTime"
    );


  const result =
    document.getElementById(
      "connectionResult"
    );


  if (
    !arrivalElement ||
    !departureElement ||
    !result
  ) {

    return;

  }


  const arrival =
    arrivalElement.value;


  const departure =
    departureElement.value;


  const t =
    translations[
      getLanguage()
    ];


  if (
    !arrival ||
    !departure
  ) {

    result.innerText =
      t.connectionError;

    return;

  }


  const arrivalParts =
    arrival.split(":");


  const departureParts =
    departure.split(":");


  let arrivalMinutes =
    Number(
      arrivalParts[0]
    ) * 60 +
    Number(
      arrivalParts[1]
    );


  let departureMinutes =
    Number(
      departureParts[0]
    ) * 60 +
    Number(
      departureParts[1]
    );


  /*
   * Handles flights crossing midnight.
   */

  if (
    departureMinutes <
    arrivalMinutes
  ) {

    departureMinutes +=
      24 * 60;

  }


  const difference =
    departureMinutes -
    arrivalMinutes;


  const hours =
    Math.floor(
      difference / 60
    );


  const minutes =
    difference % 60;


  let status;


  if (
    difference >= 120
  ) {

    status =
      t.goodBuffer;

  } else if (
    difference >= 60
  ) {

    status =
      t.tight;

  } else {

    status =
      t.veryTight;

  }


  const hourText =
    getLanguage() === "de"
      ? "Std."
      : "h";


  const minuteText =
    getLanguage() === "de"
      ? "Min."
      : "min";


  const connectionText =
    getLanguage() === "de"
      ? "Umsteigezeit"
      : "Connection time";


  result.innerText =
    `${hours} ${hourText} ${minutes} ${minuteText} ${connectionText}\n${status}`;

}


/* =========================================================
   10. BUDGET CALCULATOR
   ========================================================= */

function calculateBudget() {

  const flight =
    Number(
      document.getElementById(
        "flight"
      ).value
    ) || 0;


  const hotel =
    Number(
      document.getElementById(
        "hotel"
      ).value
    ) || 0;


  const food =
    Number(
      document.getElementById(
        "food"
      ).value
    ) || 0;


  const transport =
    Number(
      document.getElementById(
        "transport"
      ).value
    ) || 0;


  const total =
    flight +
    hotel +
    food +
    transport;


  const result =
    document.getElementById(
      "budgetResult"
    );


  if (!result) return;


  const locale =
    getLanguage() === "de"
      ? "de-DE"
      : "en-US";


  result.innerText =
    translations[
      getLanguage()
    ].total +
    ": " +
    total.toLocaleString(
      locale,
      {
        style: "currency",
        currency: "EUR"
      }
    );

}


/* =========================================================
   11. ACCOUNT
   ========================================================= */

function openAccount() {

  const modal =
    document.getElementById(
      "accountModal"
    );


  if (modal) {

    modal.style.display =
      "block";

  }


  updateAccountView();

}


function closeAccount() {

  const modal =
    document.getElementById(
      "accountModal"
    );


  if (modal) {

    modal.style.display =
      "none";

  }

}


function createAccount() {

  const emailInput =
    document.getElementById(
      "email"
    );


  const passwordInput =
    document.getElementById(
      "password"
    );


  const message =
    document.getElementById(
      "accountMessage"
    );


  const t =
    translations[
      getLanguage()
    ];


  if (
    !emailInput ||
    !passwordInput ||
    !message
  ) {

    return;

  }


  const email =
    emailInput.value.trim();


  const password =
    passwordInput.value;


  if (
    !email ||
    !password
  ) {

    message.innerText =
      t.enterLoginData;

    return;

  }


  if (
    password.length < 6
  ) {

    message.innerText =
      t.passwordShort;

    return;

  }


  /*
   * NOTE:
   * This is only a local demo account.
   * It is NOT a real secure user system.
   */

  localStorage.setItem(
    "travelmateEmail",
    email
  );


  localStorage.setItem(
    "travelmatePassword",
    password
  );


  localStorage.setItem(
    "travelmateLoggedIn",
    "true"
  );


  message.innerText =
    t.accountCreated;


  updateAccountView();

}


function login() {

  const emailInput =
    document.getElementById(
      "email"
    );


  const passwordInput =
    document.getElementById(
      "password"
    );


  const message =
    document.getElementById(
      "accountMessage"
    );


  const savedEmail =
    localStorage.getItem(
      "travelmateEmail"
    );


  const savedPassword =
    localStorage.getItem(
      "travelmatePassword"
    );


  const t =
    translations[
      getLanguage()
    ];


  if (
    !emailInput ||
    !passwordInput ||
    !message
  ) {

    return;

  }


  const email =
    emailInput.value.trim();


  const password =
    passwordInput.value;


  if (
    email === savedEmail &&
    password === savedPassword
  ) {

    localStorage.setItem(
      "travelmateLoggedIn",
      "true"
    );


    message.innerText = "";


    updateAccountView();

  } else {

    message.innerText =
      t.loginError;

  }

}


function logout() {

  localStorage.removeItem(
    "travelmateLoggedIn"
  );


  updateAccountView();

}


/* =========================================================
   12. ACCOUNT DISPLAY
   ========================================================= */

function updateAccountView() {

  const loggedIn =
    localStorage.getItem(
      "travelmateLoggedIn"
    );


  const email =
    localStorage.getItem(
      "travelmateEmail"
    );


  const status =
    document.getElementById(
      "accountStatus"
    );


  const loginArea =
    document.getElementById(
      "loginArea"
    );


  const loggedInArea =
    document.getElementById(
      "loggedInArea"
    );


  const loggedInEmail =
    document.getElementById(
      "loggedInEmail"
    );


  const t =
    translations[
      getLanguage()
    ];


  if (
    loggedIn === "true"
  ) {

    if (status) {

      status.innerText =
        t.loggedInAs +
        email;

    }


    if (loginArea) {

      loginArea.style.display =
        "none";

    }


    if (loggedInArea) {

      loggedInArea.style.display =
        "block";

    }


    if (loggedInEmail) {

      loggedInEmail.innerText =
        email;

    }

  } else {

    if (status) {

      status.innerText =
        t.notLoggedIn;

    }


    if (loginArea) {

      loginArea.style.display =
        "block";

    }


    if (loggedInArea) {

      loggedInArea.style.display =
        "none";

    }

  }

}


/* =========================================================
   13. CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

window.addEventListener(
  "click",
  function(event) {

    const modal =
      document.getElementById(
        "accountModal"
      );


    if (
      modal &&
      event.target === modal
    ) {

      closeAccount();

    }

  }
);


/* =========================================================
   14. START TRAVELMATE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async function() {

    const language =
      getLanguage();


    const selector =
      document.getElementById(
        "languageSelect"
      );


    if (selector) {

      selector.value =
        language;

    }


    applyLanguage(
      language
    );


    await loadCurrencies();


  }
);

/* =========================================================
   TRAVELMATE – TIMEZONE CALCULATOR
   ========================================================= */

const travelMateTimezones = [
  "Pacific/Pago_Pago",
  "Pacific/Honolulu",
  "America/Anchorage",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Sao_Paulo",
  "Atlantic/Azores",
  "UTC",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Helsinki",
  "Europe/Athens",
  "Europe/Moscow",
  "Africa/Cairo",
  "Africa/Johannesburg",
  "Africa/Nairobi",
  "Asia/Dubai",
  "Asia/Karachi",
  "Asia/Kolkata",
  "Asia/Dhaka",
  "Asia/Bangkok",
  "Asia/Jakarta",
  "Asia/Makassar",
  "Asia/Jayapura",
  "Asia/Singapore",
  "Asia/Kuala_Lumpur",
  "Asia/Manila",
  "Asia/Hong_Kong",
  "Asia/Shanghai",
  "Asia/Taipei",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Australia/Perth",
  "Australia/Adelaide",
  "Australia/Sydney",
  "Pacific/Guam",
  "Pacific/Auckland"
];


/* =========================================================
   ZEITZONEN IN DIE AUSWAHL LADEN
   ========================================================= */

function loadTimezones() {

  const from =
    document.getElementById("fromTimezone");

  const to =
    document.getElementById("toTimezone");

  if (!from || !to) return;


  from.innerHTML = "";
  to.innerHTML = "";


  travelMateTimezones.forEach(
    function(timezone) {

      const name =
        formatTimezoneName(timezone);


      const optionFrom =
        document.createElement("option");

      optionFrom.value =
        timezone;

      optionFrom.textContent =
        name;

      from.appendChild(
        optionFrom
      );


      const optionTo =
        document.createElement("option");

      optionTo.value =
        timezone;

      optionTo.textContent =
        name;

      to.appendChild(
        optionTo
      );

    }
  );


  /* Standardauswahl */

  from.value =
    "Europe/Berlin";

  to.value =
    "Asia/Jakarta";

}


/* =========================================================
   ZEITZONEN-NAMEN
   ========================================================= */

function formatTimezoneName(timezone) {

  const parts =
    timezone.split("/");

  const city =
    parts[parts.length - 1]
      .replace(/_/g, " ");


  const region =
    parts.length > 1
      ? parts[0]
      : "";


  return region +
    " / " +
    city;

}


/* =========================================================
   ZEITZONE BERECHNEN
   ========================================================= */

function calculateTimezone() {

  const dateInput =
    document.getElementById(
      "timezoneDate"
    );

  const timeInput =
    document.getElementById(
      "timezoneTime"
    );

  const fromSelect =
    document.getElementById(
      "fromTimezone"
    );

  const toSelect =
    document.getElementById(
      "toTimezone"
    );

  const result =
    document.getElementById(
      "timezoneResult"
    );


  if (
    !dateInput ||
    !timeInput ||
    !fromSelect ||
    !toSelect ||
    !result
  ) {

    return;

  }


  if (
    !dateInput.value ||
    !timeInput.value
  ) {

    result.textContent =
      getLanguage() === "en"
        ? "Please enter a date and time."
        : "Bitte Datum und Uhrzeit eingeben.";

    return;

  }


  const fromTimezone =
    fromSelect.value;

  const toTimezone =
    toSelect.value;


  /*
   * Datum und Uhrzeit aus dem Formular.
   */

  const localDateTime =
    `${dateInput.value}T${timeInput.value}:00`;


  /*
   * Wir berechnen zunächst die UTC-Zeit
   * der Ausgangs-Zeitzone.
   */

  const utcDate =
    convertTimezoneToUTC(
      localDateTime,
      fromTimezone
    );


  if (!utcDate) {

    result.textContent =
      getLanguage() === "en"
        ? "The time could not be calculated."
        : "Die Zeit konnte nicht berechnet werden.";

    return;

  }


  /*
   * Jetzt wird dieselbe UTC-Zeit
   * in die Ziel-Zeitzone umgerechnet.
   */

  const converted =
    new Intl.DateTimeFormat(
      getLanguage() === "en"
        ? "en-US"
        : "de-DE",
      {
        timeZone:
          toTimezone,

        year:
          "numeric",

        month:
          "2-digit",

        day:
          "2-digit",

        hour:
          "2-digit",

        minute:
          "2-digit",

        hour12:
          false

      }
    ).format(
      utcDate
    );


  const fromName =
    formatTimezoneName(
      fromTimezone
    );


  const toName =
    formatTimezoneName(
      toTimezone
    );


  const language =
    getLanguage();


  if (language === "en") {

    result.innerHTML =
      `<strong>${converted}</strong>
       <br>
       ${toName}
       <br><br>
       ${fromName} → ${toName}`;

  } else {

    result.innerHTML =
      `<strong>${converted}</strong>
       <br>
       ${toName}
       <br><br>
       ${fromName} → ${toName}`;

  }

}


/* =========================================================
   UTC-BERECHNUNG
   ========================================================= */

function convertTimezoneToUTC(
  dateTimeString,
  timezone
) {

  const parts =
    dateTimeString.match(
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
    );


  if (!parts) {
    return null;
  }


  const year =
    Number(parts[1]);

  const month =
    Number(parts[2]);

  const day =
    Number(parts[3]);

  const hour =
    Number(parts[4]);

  const minute =
    Number(parts[5]);

  const second =
    Number(parts[6]);


  /*
   * Erste Näherung.
   */

  let utcTimestamp =
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      second
    );


  /*
   * Mehrfach korrigieren, damit Sommer-
   * und Winterzeit berücksichtigt werden.
   */

  for (
    let i = 0;
    i < 3;
    i++
  ) {

    const temporaryDate =
      new Date(
        utcTimestamp
      );


    const formatter =
      new Intl.DateTimeFormat(
        "en-US",
        {
          timeZone:
            timezone,

          year:
            "numeric",

          month:
            "2-digit",

          day:
            "2-digit",

          hour:
            "2-digit",

          minute:
            "2-digit",

          second:
            "2-digit",

          hourCycle:
            "h23"

        }
      );


    const values =
      formatter.formatToParts(
        temporaryDate
      );


    const get =
      function(type) {

        const part =
          values.find(
            p =>
              p.type === type
          );

        return part
          ? Number(part.value)
          : 0;

      };


    const localTimestamp =
      Date.UTC(
        get("year"),
        get("month") - 1,
        get("day"),
        get("hour"),
        get("minute"),
        get("second")
      );


    const difference =
      Date.UTC(
        year,
        month - 1,
        day,
        hour,
        minute,
        second
      ) -
      localTimestamp;


    utcTimestamp +=
      difference;

  }


  return new Date(
    utcTimestamp
  );

}


/* =========================================================
   AUTOMATISCH BEIM START LADEN
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadTimezones();


    /*
     * Heutiges Datum vorausfüllen.
     */

    const dateInput =
      document.getElementById(
        "timezoneDate"
      );


    if (dateInput) {

      const today =
        new Date();


      const year =
        today.getFullYear();


      const month =
        String(
          today.getMonth() + 1
        ).padStart(
          2,
          "0"
        );


      const day =
        String(
          today.getDate()
        ).padStart(
          2,
          "0"
        );


      dateInput.value =
        `${year}-${month}-${day}`;

    }


    /*
     * Aktuelle Uhrzeit vorausfüllen.
     */

    const timeInput =
      document.getElementById(
        "timezoneTime"
      );


    if (timeInput) {

      const now =
        new Date();


      const hours =
        String(
          now.getHours()
        ).padStart(
          2,
          "0"
        );


      const minutes =
        String(
          now.getMinutes()
        ).padStart(
          2,
          "0"
        );


      timeInput.value =
        `${hours}:${minutes}`;

    }

  }
);
