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
    budgetResult: "Dein Reisebudget",

    settings: "⚙️ Einstellungen",
    language: "Sprache",

    validAmount: "Bitte gib einen gültigen Betrag ein.",
    sameCurrency: "Die Währungen sind identisch.",
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
    budgetResult: "Your travel budget",

    settings: "⚙️ Settings",
    language: "Language",

    validAmount: "Please enter a valid amount.",
    sameCurrency: "The currencies are identical.",
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


  /* -----------------------------------------
     Header
     ----------------------------------------- */

  const headerText =
    document.querySelector(
      "header p"
    );

  if (headerText) {

    headerText.textContent =
      t.subtitle;

  }


  /* -----------------------------------------
     Account card
     ----------------------------------------- */

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

    if (title) {

      title.textContent =
        t.account;

    }

    if (button) {

      button.textContent =
        t.login;

    }

  }


  /* -----------------------------------------
     Currency calculator
     ----------------------------------------- */

  const cards =
    document.querySelectorAll(
      "main .card"
    );


  if (cards[0]) {

    const title =
      cards[0].querySelector(
        "h2"
      );

    const button =
      cards[0].querySelector(
        "button"
      );

    if (title) {

      title.textContent =
        t.currency;

    }

    if (button) {

      button.textContent =
        t.convert;

    }

  }


  const amount =
    document.getElementById(
      "amount"
    );

  if (amount) {

    amount.placeholder =
      t.amount;

  }


  /* -----------------------------------------
     Currency loading text
     ----------------------------------------- */

  const from =
    document.getElementById(
      "fromCurrency"
    );

  const to =
    document.getElementById(
      "toCurrency"
    );


  if (
    from &&
    from.options.length === 1 &&
    from.options[0].value === ""
  ) {

    from.options[0].textContent =
      t.loadingCurrencies;

  }


  if (
    to &&
    to.options.length === 1 &&
    to.options[0].value === ""
  ) {

    to.options[0].textContent =
      t.loadingCurrencies;

  }


  /* -----------------------------------------
     Connection calculator
     ----------------------------------------- */

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


    if (title) {

      title.textContent =
        t.connection;

    }


    if (labels[0]) {

      labels[0].textContent =
        t.arrival;

    }


    if (labels[1]) {

      labels[1].textContent =
        t.departure;

    }


    if (button) {

      button.textContent =
        t.checkConnection;

    }

  }


  /* -----------------------------------------
     Budget calculator
     ----------------------------------------- */

  if (cards[2]) {

    const title =
      cards[2].querySelector(
        "h2"
      );

    const button =
      cards[2].querySelector(
        "button"
      );


    if (title) {

      title.textContent =
        t.budget;

    }


    if (button) {

      button.textContent =
        t.calculateBudget;

    }

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


  /* -----------------------------------------
     Account modal
     ----------------------------------------- */

  const modal =
    document.getElementById(
      "accountModal"
    );


  if (modal) {

    const title =
      modal.querySelector(
        "h2"
      );

    if (title) {

      title.textContent =
        t.accountTitle;

    }


    const emailInput =
      document.getElementById(
        "email"
      );

    const passwordInput =
      document.getElementById(
        "password"
      );


    if (emailInput) {

      emailInput.placeholder =
        t.email;

    }


    if (passwordInput) {

      passwordInput.placeholder =
        t.password;

    }


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


    if (welcome) {

      welcome.textContent =
        t.welcome;

    }

  }


  /* -----------------------------------------
     Settings
     ----------------------------------------- */

  const settingsTitle =
    document.getElementById(
      "settingsTitle"
    );

  const languageLabel =
    document.getElementById(
      "languageLabel"
    );


  if (settingsTitle) {

    settingsTitle.textContent =
      t.settings;

  }


  if (languageLabel) {

    languageLabel.textContent =
      t.language;

  }


  /* -----------------------------------------
     Account status
     ----------------------------------------- */

  updateAccountView();

}


/* =========================================================
   3. CURRENCY LIST
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

    const response =
      await fetch(
        "https://api.frankfurter.dev/v2/currencies"
      );


    if (!response.ok) {

      throw new Error(
        "Currency API error"
      );

    }


    const currencies =
      await response.json();


    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";


    currencies
      .sort(
        function(a, b) {

          return a.iso_code.localeCompare(
            b.iso_code
          );

        }
      )
      .forEach(
        function(currency) {

          const optionFrom =
            document.createElement(
              "option"
            );

          optionFrom.value =
            currency.iso_code;

          optionFrom.textContent =
            `${currency.iso_code} – ${currency.name}`;

          fromSelect.appendChild(
            optionFrom
          );


          const optionTo =
            document.createElement(
              "option"
            );

          optionTo.value =
            currency.iso_code;

          optionTo.textContent =
            `${currency.iso_code} – ${currency.name}`;

          toSelect.appendChild(
            optionTo
          );

        }
      );


    fromSelect.value =
      "EUR";

    toSelect.value =
      "IDR";


  } catch (error) {

    console.error(
      error
    );


    fromSelect.innerHTML =
      `<option value="EUR">
        EUR – Euro
      </option>`;


    toSelect.innerHTML =
      `<option value="IDR">
        IDR – Indonesian Rupiah
      </option>`;

  }

}


/* =========================================================
   4. CURRENCY CONVERTER
   ========================================================= */

function convertCurrency() {

  const amount =
    Number(
      document.getElementById(
        "amount"
      ).value
    );


  const from =
    document.getElementById(
      "fromCurrency"
    ).value;


  const to =
    document.getElementById(
      "toCurrency"
    ).value;


  const result =
    document.getElementById(
      "currencyResult"
    );


  const t =
    translations[
      getLanguage()
    ];


  if (
    !amount ||
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

    return;

  }


  if (
    from === to
  ) {

    result.innerText =
      `${amount} ${from}`;

    return;

  }


  /*
   * Aktuelle bisherige TravelMate-Kurse.
   * Den Wechselkursdienst können wir separat
   * austauschen, ohne das Sprachsystem zu ändern.
   */

  const rates = {

    EUR: 1,
    USD: 0.92,
    IDR: 0.000055,
    SGD: 0.69

  };


  if (
    rates[from] === undefined ||
    rates[to] === undefined
  ) {

    result.innerText =
      "Exchange rate unavailable.";

    return;

  }


  const amountInEuro =
    amount *
    rates[from];


  const converted =
    amountInEuro /
    rates[to];


  result.innerText =
    amount.toLocaleString(
      getLanguage() === "de"
        ? "de-DE"
        : "en-US"
    ) +
    " " +
    from +
    " = " +
    converted.toLocaleString(
      getLanguage() === "de"
        ? "de-DE"
        : "en-US",
      {
        maximumFractionDigits: 2
      }
    ) +
    " " +
    to;

}


/* =========================================================
   5. CONNECTION CALCULATOR
   ========================================================= */

function calculateConnection() {

  const arrival =
    document.getElementById(
      "arrivalTime"
    ).value;


  const departure =
    document.getElementById(
      "departureTime"
    ).value;


  const result =
    document.getElementById(
      "connectionResult"
    );


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
   6. BUDGET CALCULATOR
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
   7. ACCOUNT
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

  const email =
    document.getElementById(
      "email"
    ).value;


  const password =
    document.getElementById(
      "password"
    ).value;


  const message =
    document.getElementById(
      "accountMessage"
    );


  const t =
    translations[
      getLanguage()
    ];


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


  localStorage.setItem(
    "travelmateEmail",
    email
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

  const email =
    document.getElementById(
      "email"
    ).value;


  const password =
    document.getElementById(
      "password"
    ).value;


  const savedEmail =
    localStorage.getItem(
      "travelmateEmail"
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
    email === savedEmail &&
    password.length >= 6
  ) {

    localStorage.setItem(
      "travelmateLoggedIn",
      "true"
    );


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
   8. ACCOUNT DISPLAY
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
   9. CLOSE ACCOUNT MODAL
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
   10. START TRAVELMATE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

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


    loadCurrencies();

  }
);
