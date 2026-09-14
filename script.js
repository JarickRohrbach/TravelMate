  /* ============================================================
   TRAVELMATE - COMPLETE SCRIPT
   German / English
   Modular translations for every section
   ============================================================ */


/* ============================================================
   1. CURRENCY TRANSLATIONS
   ============================================================ */

const currencyTranslations = {
  de: {
    title: "💱 Währungsrechner",
    amount: "Betrag eingeben",
    loadingCurrencies: "Währungen werden geladen...",
    convert: "Umrechnen",
    result: "Ergebnis erscheint hier",
    validAmount: "Bitte gib einen gültigen Betrag ein.",
    chooseCurrencies: "Bitte wähle beide Währungen aus.",
    loadingRate: "Wechselkurs wird geladen...",
    rateError: "Wechselkurs konnte nicht geladen werden.",
    ratesBy: "Kurse von"
  },

  en: {
    title: "💱 Currency Converter",
    amount: "Enter amount",
    loadingCurrencies: "Loading currencies...",
    convert: "Convert",
    result: "Result appears here",
    validAmount: "Please enter a valid amount.",
    chooseCurrencies: "Please select both currencies.",
    loadingRate: "Loading exchange rate...",
    rateError: "Exchange rate could not be loaded.",
    ratesBy: "Rates by"
  }
};


/* ============================================================
   2. CONNECTION CALCULATOR TRANSLATIONS
   ============================================================ */

const connectionTranslations = {
  de: {
    title: "✈️ Anschlussrechner",
    arrival: "Ankunftszeit",
    departure: "Abflugzeit",
    check: "Anschluss prüfen",
    enterTimes: "Gib deine Flugzeiten ein",
    error: "Bitte gib beide Zeiten ein.",
    goodBuffer: "🟢 Guter Puffer",
    tight: "🟡 Könnte knapp werden",
    veryTight: "🔴 Sehr knapp",
    connectionTime: "Umsteigezeit",
    hours: "Std.",
    minutes: "Min."
  },

  en: {
    title: "✈️ Connection Calculator",
    arrival: "Arrival time",
    departure: "Departure time",
    check: "Check connection",
    enterTimes: "Enter your flight times",
    error: "Please enter both times.",
    goodBuffer: "🟢 Good buffer",
    tight: "🟡 Could be tight",
    veryTight: "🔴 Very tight",
    connectionTime: "Connection time",
    hours: "h",
    minutes: "min"
  }
};


/* ============================================================
   3. TIMEZONE TRANSLATIONS
   ============================================================ */

const timezoneTranslations = {
  de: {
    title: "🕐 Zeitzonenrechner",
    date: "Datum",
    time: "Uhrzeit",
    from: "Ausgangs-Zeitzone",
    to: "Ziel-Zeitzone",
    convert: "Zeitzone umrechnen",
    result: "Ergebnis erscheint hier",
    error: "Bitte Datum und Uhrzeit eingeben."
  },

  en: {
    title: "🕐 Time Zone Converter",
    date: "Date",
    time: "Time",
    from: "From time zone",
    to: "To time zone",
    convert: "Convert time zone",
    result: "Result appears here",
    error: "Please enter a date and time."
  }
};


/* ============================================================
   4. BUDGET TRANSLATIONS
   ============================================================ */

const budgetTranslations = {
  de: {
    title: "💰 Reisebudget",
    flight: "Flugkosten €",
    hotel: "Unterkunft €",
    food: "Essen €",
    transport: "Transport €",
    calculate: "Budget berechnen",
    result: "Dein Reisebudget",
    total: "Gesamt",
    valid: "Bitte gib einen gültigen Betrag ein."
  },

  en: {
    title: "💰 Travel Budget",
    flight: "Flight cost €",
    hotel: "Accommodation €",
    food: "Food €",
    transport: "Transport €",
    calculate: "Calculate budget",
    result: "Your travel budget",
    total: "Total",
    valid: "Please enter a valid amount."
  }
};


/* ============================================================
   5. ACCOUNT TRANSLATIONS
   ============================================================ */

const accountTranslations = {
  de: {
    title: "👤 Mein Account",
    status: "Noch nicht angemeldet",
    login: "Anmelden",
    create: "Account erstellen",
    logout: "Abmelden",
    email: "E-Mail-Adresse",
    password: "Passwort",
    welcome: "Willkommen bei TravelMate! ✈️",
    enterData: "Bitte E-Mail und Passwort eingeben.",
    passwordShort: "Das Passwort muss mindestens 6 Zeichen haben.",
    created: "Account wurde erstellt! 🎉",
    loginError: "E-Mail oder Passwort ist nicht korrekt.",
    loggedInAs: "Angemeldet als "
  },

  en: {
    title: "👤 My Account",
    status: "Not logged in",
    login: "Sign in",
    create: "Create account",
    logout: "Sign out",
    email: "Email address",
    password: "Password",
    welcome: "Welcome to TravelMate! ✈️",
    enterData: "Please enter your email and password.",
    passwordShort: "Password must contain at least 6 characters.",
    created: "Account created! 🎉",
    loginError: "Email or password is incorrect.",
    loggedInAs: "Logged in as "
  }
};


/* ============================================================
   6. GENERAL / CARD TRANSLATIONS
   ============================================================ */

const generalTranslations = {
  de: {
    subtitle: "Deine Reise. Einfacher.",
    settings: "⚙️ Einstellungen",
    settingsDescription: "Sprache und App-Einstellungen",
    language: "Sprache"
  },

  en: {
    subtitle: "Your journey. Made easier.",
    settings: "⚙️ Settings",
    settingsDescription: "Language and app settings",
    language: "Language"
  }
};


/* ============================================================
   7. AIRLINE FINDER TRANSLATIONS
   ============================================================ */

const airlineFinderTranslations = {
  de: {
    title: "Airline Finder",
    description: "Finde die besten Airlines für dein Reiseziel.",
    destination: "Reiseziel",
    priority: "Priorität",
    search: "🔎 Airlines finden",
    results: "Top 3 Airlines",

    overall: "⭐ Beste Gesamtqualität",
    value: "💰 Bestes Preis-Leistungs-Verhältnis",
    economy: "🧳 Beste Economy",
    business: "👑 Beste Business Class",
    comfort: "🛋️ Bester Komfort",

    wifi: "📶 Bestes WLAN",
    connections: "🔄 Beste Umsteigeverbindungen",

    topPick: "⭐ Top Pick",
    service: "Service",
    premium: "Premium-Service",
    entertainment: "Entertainment",
    longHaul: "Langstrecke",
    europe: "Europa",
    network: "Großes Streckennetz",
    japan: "Japan",
    australia: "Australien",
    canada: "Kanada",
    thailand: "Thailand",
    indonesia: "Indonesien",

    rating: "Bewertung",
    noAirlines:
      "Für dieses Reiseziel sind noch keine Empfehlungen hinterlegt.",

    liveChecking:
      "Live-Airline-Daten werden geprüft…",

    close: "Schließen"
  },

  en: {
    title: "Airline Finder",
    description: "Find the best airlines for your destination.",
    destination: "Destination",
    priority: "Priority",
    search: "🔎 Find Airlines",
    results: "Top 3 Airlines",

    overall: "⭐ Best Overall",
    value: "💰 Best Value for Money",
    economy: "🧳 Best Economy",
    business: "👑 Best Business Class",
    comfort: "🛋️ Best Comfort",

    wifi: "📶 Best Wi-Fi",
    connections: "🔄 Best Connections",

    topPick: "⭐ Top Pick",
    service: "Service",
    premium: "Premium Service",
    entertainment: "Entertainment",
    longHaul: "Long-haul",
    europe: "Europe",
    network: "Large route network",
    japan: "Japan",
    australia: "Australia",
    canada: "Canada",
    thailand: "Thailand",
    indonesia: "Indonesia",

    rating: "Rating",
    noAirlines:
      "There are no recommendations for this destination yet.",

    liveChecking:
      "Checking live airline data…",

    close: "Close"
  }
};


/* ============================================================
   8. LANGUAGE HELPERS
   ============================================================ */

function getLanguage() {
  return localStorage.getItem("travelmateLanguage") === "en"
    ? "en"
    : "de";
}


function $(id) {
  return document.getElementById(id);
}


/* ============================================================
   9. LANGUAGE CHANGE
   ============================================================ */

function changeLanguage() {

  const select = $("languageSelect");

  const language =
    select && select.value === "en"
      ? "en"
      : "de";

  localStorage.setItem(
    "travelmateLanguage",
    language
  );

  applyLanguage(language);

  if (currencyRates) {
    populateCurrencies(
      $("fromCurrency")?.value || "EUR",
      $("toCurrency")?.value || "IDR"
    );
  }

  loadTimezones();

  addCurrencyAttribution();
}


/* ============================================================
   10. MAIN LANGUAGE APPLICATION
   ============================================================ */

function applyLanguage(
  language = getLanguage()
) {

  language =
    language === "en"
      ? "en"
      : "de";

  document.documentElement.lang =
    language;


  const select =
    $("languageSelect");

  if (select) {
    select.value = language;
  }


  updateGeneralLanguage(language);

  updateCurrencyLanguage(language);

  updateConnectionLanguage(language);

  updateTimezoneLanguage(language);

  updateBudgetLanguage(language);

  updateAccountLanguage(language);

  updateAirlineFinderLanguage(language);

  translateDataAttributes();
}


/* ============================================================
   11. GENERAL TRANSLATION
   ============================================================ */

function updateGeneralLanguage(language = getLanguage()) {

  const tr =
    generalTranslations[language];

  const subtitle =
    $("subtitle");

  if (subtitle) {
    subtitle.textContent =
      tr.subtitle;
  }


  const settingsTitle =
    $("settingsTitle");

  if (settingsTitle) {
    settingsTitle.textContent =
      tr.settings;
  }


  const languageLabel =
    $("languageLabel");

  if (languageLabel) {
    languageLabel.textContent =
      tr.language;
  }


  const settingsCard =
    $("settingsCard");

  if (settingsCard) {

    const description =
      settingsCard.querySelector(
        ".tool-description"
      );

    if (description) {
      description.textContent =
        tr.settingsDescription;
    }
  }
}


/* ============================================================
   12. CURRENCY TRANSLATION
   ============================================================ */

function updateCurrencyLanguage(
  language = getLanguage()
) {

  const tr =
    currencyTranslations[language];


  const title =
    $("currencyTitle");

  if (title) {
    title.textContent =
      tr.title;
  }


  const amount =
    $("amount");

  if (amount) {
    amount.placeholder =
      tr.amount;
  }


  const button =
    document.querySelector(
      'button[onclick="convertCurrency()"]'
    );

  if (button) {
    button.textContent =
      tr.convert;
  }


  const result =
    $("currencyResult");

  if (
    result &&
    !result.dataset.calculated
  ) {
    result.textContent =
      tr.result;
  }
}


/* ============================================================
   13. CONNECTION TRANSLATION
   ============================================================ */

function updateConnectionLanguage(
  language = getLanguage()
) {

  const tr =
    connectionTranslations[language];


  const title =
    $("connectionTitle");

  if (title) {
    title.textContent =
      tr.title;
  }


  const arrival =
    $("arrivalLabel");

  if (arrival) {
    arrival.textContent =
      tr.arrival;
  }


  const departure =
    $("departureLabel");

  if (departure) {
    departure.textContent =
      tr.departure;
  }


  const button =
    document.querySelector(
      'button[onclick="calculateConnection()"]'
    );

  if (button) {
    button.textContent =
      tr.check;
  }


  const result =
    $("connectionResult");

  if (
    result &&
    !result.dataset.calculated
  ) {
    result.textContent =
      tr.enterTimes;
  }
}


/* ============================================================
   14. TIMEZONE TRANSLATION
   ============================================================ */

function updateTimezoneLanguage(
  language = getLanguage()
) {

  const tr =
    timezoneTranslations[language];


  const title =
    $("timezoneTitle");

  if (title) {
    title.textContent =
      tr.title;
  }


  const date =
    $("timezoneDateLabel");

  if (date) {
    date.textContent =
      tr.date;
  }


  const time =
    $("timezoneTimeLabel");

  if (time) {
    time.textContent =
      tr.time;
  }


  const from =
    $("fromTimezoneLabel");

  if (from) {
    from.textContent =
      tr.from;
  }


  const to =
    $("toTimezoneLabel");

  if (to) {
    to.textContent =
      tr.to;
  }


  const button =
    document.querySelector(
      'button[onclick="calculateTimezone()"]'
    );

  if (button) {
    button.textContent =
      tr.convert;
  }


  const result =
    $("timezoneResult");

  if (
    result &&
    !result.dataset.calculated
  ) {
    result.textContent =
      tr.result;
  }
}


/* ============================================================
   15. BUDGET TRANSLATION
   ============================================================ */

function updateBudgetLanguage(
  language = getLanguage()
) {

  const tr =
    budgetTranslations[language];


  const title =
    $("budgetTitle");

  if (title) {
    title.textContent =
      tr.title;
  }


  const fields = {
    flight: tr.flight,
    hotel: tr.hotel,
    food: tr.food,
    transport: tr.transport
  };


  Object.entries(fields).forEach(
    ([id, text]) => {

      const element =
        $(id);

      if (element) {
        element.placeholder =
          text;
      }

    }
  );


  const button =
    document.querySelector(
      'button[onclick="calculateBudget()"]'
    );

  if (button) {
    button.textContent =
      tr.calculate;
  }


  const result =
    $("budgetResult");

  if (
    result &&
    !result.dataset.calculated
  ) {
    result.textContent =
      tr.result;
  }
}


/* ============================================================
   16. ACCOUNT TRANSLATION
   ============================================================ */

function updateAccountLanguage(
  language = getLanguage()
) {

  const tr =
    accountTranslations[language];


  const title =
    $("accountModalTitle");

  if (title) {
    title.textContent =
      tr.title;
  }


  const status =
    $("accountStatus");

  if (
    status &&
    localStorage.getItem(
      "travelmateLoggedIn"
    ) !== "true"
  ) {
    status.textContent =
      tr.status;
  }


  const email =
    $("email");

  if (email) {
    email.placeholder =
      tr.email;
  }


  const password =
    $("password");

  if (password) {
    password.placeholder =
      tr.password;
  }


  const loginButton =
    document.querySelector(
      'button[onclick="login()"]'
    );

  if (loginButton) {
    loginButton.textContent =
      tr.login;
  }


  const createButton =
    document.querySelector(
      'button[onclick="createAccount()"]'
    );

  if (createButton) {
    createButton.textContent =
      tr.create;
  }


  const logoutButton =
    document.querySelector(
      'button[onclick="logout()"]'
    );

  if (logoutButton) {
    logoutButton.textContent =
      tr.logout;
  }
}


/* ============================================================
   17. DATA-I18N SUPPORT
   ============================================================ */

function translateDataAttributes() {

  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(element => {

      const key =
        element.getAttribute(
          "data-i18n"
        );

      const language =
        getLanguage();

      const sources = [
        generalTranslations,
        currencyTranslations,
        connectionTranslations,
        timezoneTranslations,
        budgetTranslations,
        accountTranslations,
        airlineFinderTranslations
      ];


      for (
        const source of sources
      ) {

        if (
          source[language] &&
          source[language][key] != null
        ) {

          element.textContent =
            source[language][key];

          break;

        }
      }
    });


  document
    .querySelectorAll(
      "[data-i18n-placeholder]"
    )
    .forEach(element => {

      const key =
        element.getAttribute(
          "data-i18n-placeholder"
        );

      const language =
        getLanguage();

      const sources = [
        currencyTranslations,
        accountTranslations,
        budgetTranslations
      ];


      for (
        const source of sources
      ) {

        if (
          source[language] &&
          source[language][key] != null
        ) {

          element.placeholder =
            source[language][key];

          break;

        }
      }
    });
}


/* ============================================================
   18. COLLAPSIBLE CARDS
   ============================================================ */

function toggleTool(cardId) {

  const card =
    $(cardId);

  if (!card) return;


  const wasOpen =
    card.classList.contains(
      "open"
    );


  document
    .querySelectorAll(
      ".tool-card.open"
    )
    .forEach(other => {

      if (other !== card) {
        other.classList.remove(
          "open"
        );
      }

    });


  card.classList.toggle(
    "open",
    !wasOpen
  );
}


/* ============================================================
   19. CURRENCY API
   ============================================================ */

const CURRENCY_API =
  "https://open.er-api.com/v6/latest/EUR";

const CURRENCY_FALLBACK_API =
  "https://api.frankfurter.dev/v2/rates?base=EUR";

const CURRENCY_CACHE_KEY =
  "travelmateCurrencyRates_v2";

const CURRENCY_CACHE_MAX_AGE =
  24 * 60 * 60 * 1000;

let currencyRates = null;


function saveCurrencyCache(
  rates,
  provider
) {

  try {

    localStorage.setItem(
      CURRENCY_CACHE_KEY,
      JSON.stringify({
        savedAt: Date.now(),
        provider:
          provider ||
          "ExchangeRate-API",
        rates
      })
    );

  } catch (e) {}
}


function readCurrencyCache() {

  try {

    const raw =
      localStorage.getItem(
        CURRENCY_CACHE_KEY
      );

    if (!raw) return null;


    const cached =
      JSON.parse(raw);


    if (
      !cached ||
      !cached.rates ||
      Date.now() -
        cached.savedAt >
        CURRENCY_CACHE_MAX_AGE
    ) {
      return null;
    }


    return cached;

  } catch (e) {

    return null;

  }
}


async function fetchJSON(
  url,
  timeout = 10000
) {

  const controller =
    new AbortController();

  const timer =
    setTimeout(
      () =>
        controller.abort(),
      timeout
    );


  try {

    const response =
      await fetch(
        url,
        {
          cache: "no-store",
          headers: {
            Accept:
              "application/json"
          },
          signal:
            controller.signal
        }
      );


    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}`
      );
    }


    return await response.json();

  } finally {

    clearTimeout(timer);

  }
}


function normalizeFrankfurter(
  data
) {

  const rates = {
    EUR: 1
  };


  if (!Array.isArray(data)) {
    return null;
  }


  data.forEach(item => {

    if (
      item &&
      item.quote &&
      Number.isFinite(
        Number(item.rate)
      )
    ) {

      rates[
        String(
          item.quote
        ).toUpperCase()
      ] =
        Number(
          item.rate
        );

    }

  });


  return Object.keys(
    rates
  ).length > 1
    ? rates
    : null;
}


async function loadCurrencies() {

  const from =
    $("fromCurrency");

  const to =
    $("toCurrency");


  if (!from || !to) {
    return false;
  }


  const oldFrom =
    from.value || "EUR";

  const oldTo =
    to.value || "IDR";


  const cached =
    readCurrencyCache();


  if (
    cached &&
    cached.rates
  ) {

    currencyRates =
      cached.rates;

    populateCurrencies(
      oldFrom,
      oldTo
    );

    return true;
  }


  const tr =
    currencyTranslations[
      getLanguage()
    ];


  from.innerHTML =
    `<option value="">${tr.loadingCurrencies}</option>`;

  to.innerHTML =
    `<option value="">${tr.loadingCurrencies}</option>`;


  try {

    const data =
      await fetchJSON(
        CURRENCY_API
      );


    if (
      data.result !==
        "success" ||
      !data.rates
    ) {

      throw new Error(
        "Invalid ExchangeRate-API response"
      );

    }


    currencyRates =
      data.rates;

    saveCurrencyCache(
      currencyRates,
      "ExchangeRate-API"
    );

    populateCurrencies(
      oldFrom,
      oldTo
    );

    return true;

  } catch (primaryError) {

    console.warn(
      "TravelMate primary currency API failed:",
      primaryError
    );

  }


  try {

    const data =
      await fetchJSON(
        CURRENCY_FALLBACK_API
      );


    const rates =
      normalizeFrankfurter(
        data
      );


    if (!rates) {

      throw new Error(
        "Invalid Frankfurter response"
      );

    }


    currencyRates =
      rates;

    saveCurrencyCache(
      currencyRates,
      "Frankfurter"
    );

    populateCurrencies(
      oldFrom,
      oldTo
    );

    return true;

  } catch (fallbackError) {

    console.error(
      "TravelMate currency APIs failed:",
      fallbackError
    );


    currencyRates = null;


    from.innerHTML =
      '<option value="EUR">EUR – Euro</option>';

    to.innerHTML =
      '<option value="IDR">IDR – Indonesian Rupiah</option>';


    const result =
      $("currencyResult");


    if (result) {
      result.textContent =
        currencyTranslations[
          getLanguage()
        ].rateError;
    }


    return false;
  }
}


/* ============================================================
   20. CURRENCY DROPDOWNS
   ============================================================ */

function currencyName(code) {

  try {

    if (Intl.DisplayNames) {

      const names =
        new Intl.DisplayNames(
          [getLanguage()],
          {
            type: "currency"
          }
        );

      return (
        names.of(code) ||
        code
      );
    }

  } catch (e) {}


  return code;
}


function populateCurrencies(
  previousFrom = "EUR",
  previousTo = "IDR"
) {

  const from =
    $("fromCurrency");

  const to =
    $("toCurrency");


  if (
    !from ||
    !to ||
    !currencyRates
  ) {
    return;
  }


  const codes =
    Object.keys(
      currencyRates
    ).sort();


  from.innerHTML = "";
  to.innerHTML = "";


  codes.forEach(code => {

    const a =
      document.createElement(
        "option"
      );

    const b =
      document.createElement(
        "option"
      );


    a.value =
      b.value =
        code;


    a.textContent =
      b.textContent =
        `${code} – ${currencyName(code)}`;


    from.appendChild(a);
    to.appendChild(b);

  });


  from.value =
    codes.includes(
      previousFrom
    )
      ? previousFrom
      : codes.includes("EUR")
        ? "EUR"
        : codes[0];


  to.value =
    codes.includes(
      previousTo
    )
      ? previousTo
      : codes.includes("IDR")
        ? "IDR"
        : codes[1] ||
          codes[0];


  addCurrencyAttribution();
}


function addCurrencyAttribution() {

  const result =
    $("currencyResult");

  if (!result) return;


  let element =
    $("exchangeRateAttribution");


  if (!element) {

    element =
      document.createElement(
        "small"
      );

    element.id =
      "exchangeRateAttribution";


    result.insertAdjacentElement(
      "afterend",
      element
    );
  }


  element.innerHTML =
    `${currencyTranslations[getLanguage()].ratesBy}
     <a href="https://www.exchangerate-api.com"
        target="_blank"
        rel="noopener noreferrer">
        ExchangeRate-API
     </a>`;
}


function formatNumber(
  value
) {

  return Number(
    value
  ).toLocaleString(
    getLanguage() === "de"
      ? "de-DE"
      : "en-US",
    {
      maximumFractionDigits: 2
    }
  );
}


function formatConverted(
  value,
  currency
) {

  const noDecimals = [
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


  return Number(
    value
  ).toLocaleString(
    getLanguage() === "de"
      ? "de-DE"
      : "en-US",
    {
      maximumFractionDigits:
        noDecimals.includes(
          currency
        )
          ? 0
          : 2
    }
  );
}


/* ============================================================
   21. CURRENCY CONVERTER
   ============================================================ */

async function convertCurrency() {

  const amount =
    $("amount");

  const from =
    $("fromCurrency");

  const to =
    $("toCurrency");

  const result =
    $("currencyResult");


  if (
    !amount ||
    !from ||
    !to ||
    !result
  ) {
    return;
  }


  const value =
    Number(
      amount.value
    );


  const tr =
    currencyTranslations[
      getLanguage()
    ];


  if (
    !Number.isFinite(
      value
    ) ||
    value <= 0
  ) {

    result.textContent =
      tr.validAmount;

    result.dataset.calculated =
      "true";

    return;
  }


  if (
    !from.value ||
    !to.value
  ) {

    result.textContent =
      tr.chooseCurrencies;

    result.dataset.calculated =
      "true";

    return;
  }


  if (!currencyRates) {

    result.textContent =
      tr.loadingRate;


    const loaded =
      await loadCurrencies();


    if (!loaded) {

      result.textContent =
        tr.rateError;

      return;
    }
  }


  const fromRate =
    currencyRates[
      from.value
    ];

  const toRate =
    currencyRates[
      to.value
    ];


  if (
    typeof fromRate !==
      "number" ||
    typeof toRate !==
      "number"
  ) {

    result.textContent =
      tr.rateError;

    return;
  }


  const converted =
    value *
    (toRate / fromRate);


  result.textContent =
    `${formatNumber(value)}
     ${from.value}
     =
     ${formatConverted(
       converted,
       to.value
     )}
     ${to.value}`;


  result.dataset.calculated =
    "true";
}


/* ============================================================
   22. CONNECTION CALCULATOR
   ============================================================ */

function calculateConnection() {

  const arrival =
    $("arrivalTime");

  const departure =
    $("departureTime");

  const result =
    $("connectionResult");


  if (
    !arrival ||
    !departure ||
    !result
  ) {
    return;
  }


  const tr =
    connectionTranslations[
      getLanguage()
    ];


  if (
    !arrival.value ||
    !departure.value
  ) {

    result.textContent =
      tr.error;

    result.dataset.calculated =
      "true";

    return;
  }


  const [
    arrivalHour,
    arrivalMinute
  ] =
    arrival.value
      .split(":")
      .map(Number);


  const [
    departureHour,
    departureMinute
  ] =
    departure.value
      .split(":")
      .map(Number);


  const arrivalTotal =
    arrivalHour * 60 +
    arrivalMinute;


  let departureTotal =
    departureHour * 60 +
    departureMinute;


  if (
    departureTotal <
    arrivalTotal
  ) {

    departureTotal +=
      1440;
  }


  const difference =
    departureTotal -
    arrivalTotal;


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
      tr.goodBuffer;

  } else if (
    difference >= 60
  ) {

    status =
      tr.tight;

  } else {

    status =
      tr.veryTight;
  }


  result.innerHTML =
    `<strong>${status}</strong><br>
     ${tr.connectionTime}:
     ${hours} ${tr.hours}
     ${minutes} ${tr.minutes}`;


  result.dataset.calculated =
    "true";
}


/* ============================================================
   23. TIMEZONE CALCULATOR
   ============================================================ */

function getAllTimezones() {

  if (
    typeof Intl !==
      "undefined" &&
    typeof Intl.supportedValuesOf ===
      "function"
  ) {

    try {

      return Intl.supportedValuesOf(
        "timeZone"
      );

    } catch (e) {}
  }


  return [
    "Europe/Berlin",
    "Europe/London",
    "Europe/Paris",
    "America/New_York",
    "America/Los_Angeles",
    "Asia/Dubai",
    "Asia/Singapore",
    "Asia/Jakarta",
    "Asia/Tokyo",
    "Australia/Sydney"
  ];
}


function timezoneLabel(
  zone
) {

  return zone
    .split("/")
    .map(
      part =>
        part.replace(
          /_/g,
          " "
        )
    )
    .join(" / ");
}


function loadTimezones() {

  const from =
    $("fromTimezone");

  const to =
    $("toTimezone");


  if (!from || !to) {
    return;
  }


  const oldFrom =
    from.value ||
    "Europe/Berlin";

  const oldTo =
    to.value ||
    "Asia/Jakarta";


  from.innerHTML = "";
  to.innerHTML = "";


  getAllTimezones()
    .forEach(zone => {

      const a =
        document.createElement(
          "option"
        );

      const b =
        document.createElement(
          "option"
        );


      a.value =
        b.value =
          zone;


      a.textContent =
        b.textContent =
          timezoneLabel(zone);


      from.appendChild(a);
      to.appendChild(b);

    });


  from.value =
    [...from.options]
      .some(
        option =>
          option.value ===
          oldFrom
      )
      ? oldFrom
      : "Europe/Berlin";


  to.value =
    [...to.options]
      .some(
        option =>
          option.value ===
          oldTo
      )
      ? oldTo
      : "Asia/Jakarta";
}


function getTimezoneOffset(
  date,
  timeZone
) {

  const parts =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23"
      }
    ).formatToParts(
      date
    );


  const values = {};


  parts.forEach(
    part => {

      if (
        part.type !==
        "literal"
      ) {

        values[
          part.type
        ] =
          part.value;
      }

    }
  );


  const asUTC =
    Date.UTC(
      Number(values.year),
      Number(values.month) - 1,
      Number(values.day),
      Number(values.hour),
      Number(values.minute),
      Number(values.second)
    );


  return (
    asUTC -
    date.getTime()
  );
}


function localTimeToUTC(
  year,
  month,
  day,
  hour,
  minute,
  timeZone
) {

  let timestamp =
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      0
    );


  for (
    let i = 0;
    i < 4;
    i++
  ) {

    timestamp =
      Date.UTC(
        year,
        month - 1,
        day,
        hour,
        minute,
        0
      ) -
      getTimezoneOffset(
        new Date(timestamp),
        timeZone
      );
  }


  return new Date(
    timestamp
  );
}


function calculateTimezone() {

  const date =
    $("timezoneDate");

  const time =
    $("timezoneTime");

  const from =
    $("fromTimezone");

  const to =
    $("toTimezone");

  const result =
    $("timezoneResult");


  if (
    !date ||
    !time ||
    !from ||
    !to ||
    !result
  ) {
    return;
  }


  const tr =
    timezoneTranslations[
      getLanguage()
    ];


  if (
    !date.value ||
    !time.value
  ) {

    result.textContent =
      tr.error;

    result.dataset.calculated =
      "true";

    return;
  }


  const [
    year,
    month,
    day
  ] =
    date.value
      .split("-")
      .map(Number);


  const [
    hour,
    minute
  ] =
    time.value
      .split(":")
      .map(Number);


  const utc =
    localTimeToUTC(
      year,
      month,
      day,
      hour,
      minute,
      from.value
    );


  const formatted =
    new Intl.DateTimeFormat(
      getLanguage() === "de"
        ? "de-DE"
        : "en-US",
      {
        timeZone:
          to.value,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "2-digit"
      }
    ).format(
      utc
    );


  result.textContent =
    `${formatted}
     (${timezoneLabel(
       to.value
     )})`;


  result.dataset.calculated =
    "true";
}


function setTimezoneDefaults() {

  const date =
    $("timezoneDate");

  const time =
    $("timezoneTime");

  const now =
    new Date();


  if (
    date &&
    !date.value
  ) {

    date.value =
      `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(
        2,
        "0"
      )}-${String(
        now.getDate()
      ).padStart(
        2,
        "0"
      )}`;
  }


  if (
    time &&
    !time.value
  ) {

    time.value =
      `${String(
        now.getHours()
      ).padStart(
        2,
        "0"
      )}:${String(
        now.getMinutes()
      ).padStart(
        2,
        "0"
      )}`;
  }
}


/* ============================================================
   24. BUDGET
   ============================================================ */

function calculateBudget() {

  const ids = [
    "flight",
    "hotel",
    "food",
    "transport"
  ];


  const total =
    ids.reduce(
      (
        sum,
        id
      ) =>
        sum +
        (
          Number(
            $(id)?.value
          ) || 0
        ),
      0
    );


  const result =
    $("budgetResult");


  if (!result) {
    return;
  }


  const tr =
    budgetTranslations[
      getLanguage()
    ];


  result.textContent =
    `${tr.total}: ${total.toLocaleString(
      getLanguage() === "de"
        ? "de-DE"
        : "en-US",
      {
        style: "currency",
        currency: "EUR"
      }
    )}`;


  result.dataset.calculated =
    "true";
}


/* ============================================================
   25. ACCOUNT
   ============================================================ */

function openAccount() {

  const modal =
    $("accountModal");


  if (modal) {

    modal.style.display =
      "block";

    modal.classList.add(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );
  }


  updateAccountView();
}


function closeAccount() {

  const modal =
    $("accountModal");


  if (modal) {

    modal.style.display =
      "none";

    modal.classList.remove(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );
  }
}


function createAccount() {

  const email =
    $("email")
      ?.value
      .trim();

  const password =
    $("password")
      ?.value;

  const message =
    $("accountMessage");


  if (!message) {
    return;
  }


  const tr =
    accountTranslations[
      getLanguage()
    ];


  if (
    !email ||
    !password
  ) {

    message.textContent =
      tr.enterData;

    return;
  }


  if (
    password.length < 6
  ) {

    message.textContent =
      tr.passwordShort;

    return;
  }


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


  message.textContent =
    tr.created;


  updateAccountView();
}


function login() {

  const email =
    $("email")
      ?.value
      .trim();

  const password =
    $("password")
      ?.value;

  const message =
    $("accountMessage");


  if (!message) {
    return;
  }


  const savedEmail =
    localStorage.getItem(
      "travelmateEmail"
    );

  const savedPassword =
    localStorage.getItem(
      "travelmatePassword"
    );


  if (
    email === savedEmail &&
    password === savedPassword
  ) {

    localStorage.setItem(
      "travelmateLoggedIn",
      "true"
    );

    message.textContent =
      "";

    updateAccountView();

  } else {

    message.textContent =
      accountTranslations[
        getLanguage()
      ].loginError;
  }
}


function logout() {

  localStorage.removeItem(
    "travelmateLoggedIn"
  );

  updateAccountView();
}


function updateAccountView() {

  const logged =
    localStorage.getItem(
      "travelmateLoggedIn"
    ) === "true";


  const email =
    localStorage.getItem(
      "travelmateEmail"
    ) || "";


  const status =
    $("accountStatus");

  const loginArea =
    $("loginArea");

  const loggedArea =
    $("loggedInArea");

  const loggedEmail =
    $("loggedInEmail");


  const tr =
    accountTranslations[
      getLanguage()
    ];


  if (logged) {

    if (status) {

      status.textContent =
        tr.loggedInAs +
        email;
    }


    if (loginArea) {

      loginArea.style.display =
        "none";
    }


    if (loggedArea) {

      loggedArea.style.display =
        "block";
    }


    if (loggedEmail) {

      loggedEmail.textContent =
        email;
    }

  } else {

    if (status) {

      status.textContent =
        tr.status;
    }


    if (loginArea) {

      loginArea.style.display =
        "block";
    }


    if (loggedArea) {

      loggedArea.style.display =
        "none";
    }
  }
}


/* ============================================================
   26. AIRLINE FINDER DATABASE
   ============================================================ */

/*
   This is the working Airline Finder database.
   The matching system uses these recommendations first.
*/

const airlineDatabase = {

  "new-york": [
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["premium", "comfort"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["value", "service"]
    ],
    [
      "Emirates",
      "4.7",
      "🇦🇪",
      ["comfort", "entertainment"]
    ]
  ],

  london: [
    [
      "Singapore Airlines",
      "4.9",
      "🇸🇬",
      ["premium", "comfort"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["service", "value"]
    ],
    [
      "British Airways",
      "4.5",
      "🇬🇧",
      ["network", "europe"]
    ]
  ],

  paris: [
    [
      "Air France",
      "4.7",
      "🇫🇷",
      ["europe", "premium"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["service", "comfort"]
    ],
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["premium", "longHaul"]
    ]
  ],

  tokyo: [
    [
      "ANA",
      "4.9",
      "🇯🇵",
      ["service", "japan"]
    ],
    [
      "Japan Airlines",
      "4.8",
      "🇯🇵",
      ["economy", "service"]
    ],
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["comfort", "longHaul"]
    ]
  ],

  dubai: [
    [
      "Emirates",
      "4.9",
      "🇦🇪",
      ["comfort", "entertainment"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["service", "businessClass"]
    ],
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["premium", "comfort"]
    ]
  ],

  singapore: [
    [
      "Singapore Airlines",
      "4.9",
      "🇸🇬",
      ["premium", "bestOverall"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["service", "comfort"]
    ],
    [
      "Emirates",
      "4.7",
      "🇦🇪",
      ["entertainment", "comfort"]
    ]
  ],

  sydney: [
    [
      "Qantas",
      "4.8",
      "🇦🇺",
      ["australia", "service"]
    ],
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["comfort", "longHaul"]
    ],
    [
      "Qatar Airways",
      "4.7",
      "🇶🇦",
      ["value", "service"]
    ]
  ],

  toronto: [
    [
      "Air Canada",
      "4.6",
      "🇨🇦",
      ["canada", "network"]
    ],
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["comfort", "service"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["service", "longHaul"]
    ]
  ],

  bangkok: [
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["service", "comfort"]
    ],
    [
      "Thai Airways",
      "4.7",
      "🇹🇭",
      ["thailand", "service"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["value", "comfort"]
    ]
  ],

  jakarta: [
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["premium", "comfort"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["value", "service"]
    ],
    [
      "Garuda Indonesia",
      "4.6",
      "🇮🇩",
      ["indonesia", "service"]
    ]
  ],

  frankfurt: [
    [
      "Lufthansa",
      "4.6",
      "🇩🇪",
      ["network", "europe"]
    ],
    [
      "Singapore Airlines",
      "4.8",
      "🇸🇬",
      ["premium", "longHaul"]
    ],
    [
      "Qatar Airways",
      "4.8",
      "🇶🇦",
      ["service", "comfort"]
    ]
  ]
};


/* ============================================================
   27. AIRLINE SCORES
   ============================================================ */

const airlineCodes = {

  "Singapore Airlines": "SIA",
  "Qatar Airways": "QTR",
  "Emirates": "UAE",
  "ANA": "ANA",
  "Japan Airlines": "JAL",
  "Qantas": "QFA",
  "Air France": "AFR",
  "Lufthansa": "DLH",
  "British Airways": "BAW",
  "Thai Airways": "THA",
  "Air Canada": "ACA",
  "Garuda Indonesia": "GIA"

};


const airlineScores = {

  "Singapore Airlines": {
    overall: 100,
    value: 94,
    economy: 97,
    business: 100,
    comfort: 100,
    wifi: 97,
    connections: 100
  },

  "Qatar Airways": {
    overall: 99,
    value: 98,
    economy: 97,
    business: 100,
    comfort: 98,
    wifi: 97,
    connections: 100
  },

  "Emirates": {
    overall: 97,
    value: 94,
    economy: 96,
    business: 99,
    comfort: 100,
    wifi: 96,
    connections: 99
  },

  "ANA": {
    overall: 99,
    value: 95,
    economy: 100,
    business: 98,
    comfort: 99,
    wifi: 95,
    connections: 96
  },

  "Japan Airlines": {
    overall: 98,
    value: 96,
    economy: 100,
    business: 98,
    comfort: 98,
    wifi: 94,
    connections: 96
  },

  "Qantas": {
    overall: 96,
    value: 92,
    economy: 96,
    business: 97,
    comfort: 96,
    wifi: 95,
    connections: 98
  },

  "Air France": {
    overall: 95,
    value: 92,
    economy: 94,
    business: 97,
    comfort: 97,
    wifi: 92,
    connections: 98
  },

  "Lufthansa": {
    overall: 92,
    value: 89,
    economy: 91,
    business: 94,
    comfort: 91,
    wifi: 92,
    connections: 100
  },

  "British Airways": {
    overall: 90,
    value: 89,
    economy: 89,
    business: 93,
    comfort: 91,
    wifi: 90,
    connections: 97
  },

  "Thai Airways": {
    overall: 92,
    value: 94,
    economy: 95,
    business: 94,
    comfort: 95,
    wifi: 90,
    connections: 94
  },

  "Air Canada": {
    overall: 90,
    value: 89,
    economy: 90,
    business: 93,
    comfort: 91,
    wifi: 92,
    connections: 98
  },

  "Garuda Indonesia": {
    overall: 88,
    value: 92,
    economy: 94,
    business: 93,
    comfort: 92,
    wifi: 88,
    connections: 93
  }

};


/* ============================================================
   28. AIRLINE FINDER LIVE API
   ============================================================ */

const AIRLINE_LIVE_API =
  "https://www.adsbdb.com/api";


async function getLiveAirlineData(
  name
) {

  const icao =
    airlineCodes[name];


  if (!icao) {
    return null;
  }


  try {

    const controller =
      new AbortController();


    const timer =
      setTimeout(
        () =>
          controller.abort(),
        5000
      );


    const response =
      await fetch(
        `${AIRLINE_LIVE_API}/airline/${encodeURIComponent(
          icao
        )}`,
        {
          cache: "no-store",
          signal:
            controller.signal,
          headers: {
            Accept:
              "application/json"
          }
        }
      );


    clearTimeout(timer);


    if (!response.ok) {
      return null;
    }


    const data =
      await response.json();


    return data || null;

  } catch (error) {

    console.warn(
      "TravelMate Airline API unavailable:",
      error
    );


    return null;
  }
}


/* ============================================================
   29. AIRLINE FINDER HELPERS
   ============================================================ */

function airlineScore(
  name,
  priority
) {

  return (
    airlineScores[name]?.[
      priority
    ] ??
    airlineScores[name]?.overall ??
    80
  );
}


function translateAirlineTag(
  tag
) {

  const tr =
    airlineFinderTranslations[
      getLanguage()
    ];


  const translations = {

    premium:
      tr.premium,

    comfort:
      tr.comfort,

    value:
      tr.value,

    service:
      tr.service,

    entertainment:
      tr.entertainment,

    longHaul:
      tr.longHaul,

    europe:
      tr.europe,

    network:
      tr.network,

    economy:
      tr.economy,

    businessClass:
      tr.business,

    japan:
      tr.japan,

    australia:
      tr.australia,

    canada:
      tr.canada,

    thailand:
      tr.thailand,

    indonesia:
      tr.indonesia,

    bestOverall:
      tr.overall
  };


  return (
    translations[tag] ||
    tag
  );
}


/* ============================================================
   30. AIRLINE FINDER LANGUAGE
   ============================================================ */

function updateAirlineFinderLanguage(
  language = getLanguage()
) {

  const tr =
    airlineFinderTranslations[
      language
    ];


  const card =
    document.querySelector(
      ".airline-finder-card"
    );


  if (card) {

    const title =
      card.querySelector(
        ".airline-finder-text h2"
      );

    const description =
      card.querySelector(
        ".airline-finder-text p"
      );


    if (title) {
      title.textContent =
        tr.title;
    }


    if (description) {
      description.textContent =
        tr.description;
    }
  }


  const modal =
    $("airlineFinderModal");


  if (modal) {

    const title =
      modal.querySelector(
        ".modal-content > h2"
      );

    const subtitle =
      modal.querySelector(
        ".airline-modal-subtitle"
      );

    const labels =
      modal.querySelectorAll(
        "label"
      );


    const search =
      modal.querySelector(
        'button[onclick="findAirlines()"]'
      );


    const close =
      modal.querySelector(
        'button[onclick="closeAirlineFinder()"]'
      );


    if (title) {
      title.textContent =
        `✈️ ${tr.title}`;
    }


    if (subtitle) {
      subtitle.textContent =
        tr.description;
    }


    if (labels[0]) {
      labels[0].textContent =
        tr.destination;
    }


    if (labels[1]) {
      labels[1].textContent =
        tr.priority;
    }


    if (search) {
      search.textContent =
        tr.search;
    }


    if (close) {
      close.setAttribute(
        "aria-label",
        tr.close
      );
    }
  }


  const priority =
    $("airlinePriority");


  if (priority) {

    const options = {

      overall:
        tr.overall,

      economy:
        tr.economy,

      business:
        tr.business,

      comfort:
        tr.comfort
    };


    [
      ...priority.options
    ].forEach(option => {

      if (
        options[
          option.value
        ]
      ) {

        option.textContent =
          options[
            option.value
          ];
      }

    });
  }


  const results =
    $("airlineResults");


  if (
    results &&
    results.dataset.hasResults ===
      "true"
  ) {

    findAirlines();
  }
}


/* ============================================================
   31. OPEN AIRLINE FINDER
   ============================================================ */

function openAirlineFinder() {

  const modal =
    $("airlineFinderModal");


  if (!modal) {
    return;
  }


  modal.classList.add(
    "active"
  );


  modal.style.display =
    "flex";


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  updateAirlineFinderLanguage();
}


/* ============================================================
   32. CLOSE AIRLINE FINDER
   ============================================================ */

function closeAirlineFinder() {

  const modal =
    $("airlineFinderModal");


  if (!modal) {
    return;
  }


  modal.classList.remove(
    "active"
  );


  modal.style.display =
    "none";


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";
}


/* ============================================================
   33. AIRLINE MATCHING SYSTEM
   ============================================================ */

async function findAirlines() {

  const destination =
    $("airlineDestination")
      ?.value;


  const priority =
    $("airlinePriority")
      ?.value ||
    "overall";


  const container =
    $("airlineResults");


  if (!container) {
    return;
  }


  const tr =
    airlineFinderTranslations[
      getLanguage()
    ];


  if (!destination) {

    container.innerHTML =
      `
        <h3 class="airline-results-title">
          ${tr.results}
        </h3>

        <p>
          ${tr.noAirlines}
        </p>
      `;


    container.dataset.hasResults =
      "true";


    return;
  }


  const base =
    (
      airlineDatabase[
        destination
      ] || []
    )
      .map(
        airline => ({
          name:
            airline[0],

          rating:
            airline[1],

          logo:
            airline[2],

          tags:
            airline[3]
        })
      )
      .sort(
        (a, b) =>
          airlineScore(
            b.name,
            priority
          ) -
          airlineScore(
            a.name,
            priority
          )
      )
      .slice(
        0,
        3
      );


  if (!base.length) {

    container.innerHTML =
      `
        <h3 class="airline-results-title">
          ${tr.results}
        </h3>

        <p>
          ${tr.noAirlines}
        </p>
      `;


    container.dataset.hasResults =
      "true";


    return;
  }


  /*
     Show the result immediately.
     The live API is optional and cannot break
     the working local recommendation system.
  */

  container.innerHTML =
    `
      <h3 class="airline-results-title">
        ${tr.results}
      </h3>

      <p class="airline-live-status">
        ${tr.liveChecking}
      </p>
    `;


  const liveData =
    await Promise.all(
      base.map(
        airline =>
          getLiveAirlineData(
            airline.name
          )
      )
    );


  container.innerHTML =
    `
      <h3 class="airline-results-title">
        ${tr.results}
      </h3>
    `;


  base.forEach(
    (
      airline,
      index
    ) => {

      const data =
        liveData[index];


      const liveName =
        data?.name ||
        data?.airline_name ||
        airline.name;


      const liveCountry =
        data?.country ||
        data?.country_name ||
        "";


      const liveCode =
        data?.iata ||
        data?.iata_code ||
        "";


      const liveLine =
        [
          liveCountry,
          liveCode
        ]
          .filter(Boolean)
          .join(" · ");


      const medal =
        index === 0
          ? "🥇"
          : index === 1
            ? "🥈"
            : "🥉";


      const score =
        airlineScore(
          airline.name,
          priority
        );


      const result =
        document.createElement(
          "div"
        );


      result.className =
        "airline-result";


      result.innerHTML =
        `
          <div class="airline-rank">
            ${medal}
          </div>

          <div class="airline-logo">
            ${airline.logo}
          </div>

          <div class="airline-info">

            <div class="airline-name">
              ${
                index === 0
                  ? `${tr.topPick} · `
                  : ""
              }${liveName}
            </div>

            <div class="airline-rating">
              ${tr.rating}:
              ${airline.rating}/5
              ·
              ${score}/100
            </div>

            ${
              liveLine
                ? `
                  <div class="airline-live-info">
                    ${liveLine}
                  </div>
                `
                : ""
            }

            <div class="airline-tags">

              ${airline.tags
                .map(
                  tag =>
                    `
                      <span class="airline-tag">
                        ${translateAirlineTag(
                          tag
                        )}
                      </span>
                    `
                )
                .join("")}

            </div>

          </div>
        `;


      container.appendChild(
        result
      );
    }
  );


  container.dataset.hasResults =
    "true";
}


/* ============================================================
   34. AIRLINE FINDER INITIALIZATION
   ============================================================ */

function initializeAirlineFinder() {

  const card =
    document.querySelector(
      ".airline-finder-card"
    );


  const modal =
    $("airlineFinderModal");


  if (
    card &&
    !card.dataset.tmKeyboardBound
  ) {

    card.dataset.tmKeyboardBound =
      "true";


    card.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openAirlineFinder();
        }

      }
    );
  }


  if (
    modal &&
    !modal.dataset.tmBound
  ) {

    modal.dataset.tmBound =
      "true";


    modal.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          modal
        ) {

          closeAirlineFinder();
        }

      }
    );
  }
}


/* ============================================================
   35. MODAL EVENTS
   ============================================================ */

window.addEventListener(
  "click",
  event => {

    const modal =
      $("accountModal");


    if (
      modal &&
      event.target ===
        modal
    ) {

      closeAccount();
    }
  }
);


/* ============================================================
   36. ESC KEY
   ============================================================ */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      closeAirlineFinder();

      closeAccount();
    }
  }
);


/* ============================================================
   37. START TRAVELMATE
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    const language =
      getLanguage();


    if (
      $("languageSelect")
    ) {

      $("languageSelect").value =
        language;
    }


    /*
       Apply all modular translations.
    */

    applyLanguage(
      language
    );


    /*
       Timezone.
    */

    setTimezoneDefaults();

    loadTimezones();


    /*
       Airline Finder.
    */

    initializeAirlineFinder();


    /*
       Currency API.
       Failure here does NOT stop
       the rest of TravelMate.
    */

    try {

      await loadCurrencies();

    } catch (error) {

      console.error(
        "TravelMate currency initialization failed:",
        error
      );
    }


    /*
       Account.
    */

    updateAccountView();


    /*
       Final language update
       after all elements exist.
    */

    applyLanguage(
      language
    );

  }
);