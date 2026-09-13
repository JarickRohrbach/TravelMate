/* TRAVELMATE - COMPLETE SCRIPT
   German / English
   Keeps all existing TravelMate functions.
   Full language switching including small descriptions,
   buttons, settings and Airline Finder.
*/

const translations = {
  de: {
    subtitle: "Deine Reise. Einfacher.",
    accountTitle: "👤 Mein Account",
    accountStatus: "Noch nicht angemeldet",
    login: "Anmelden",
    createAccount: "Account erstellen",
    logout: "Abmelden",
    email: "E-Mail-Adresse",
    password: "Passwort",
    welcome: "Willkommen bei TravelMate! ✈️",

    settings: "⚙️ Einstellungen",
    settingsDescription: "Sprache und App-Einstellungen",
    language: "Sprache",

    currency: "💱 Währungsrechner",
    currencyDescription: "Währungen weltweit schnell umrechnen",
    amount: "Betrag eingeben",
    loadingCurrencies: "Währungen werden geladen...",
    convert: "Umrechnen",
    currencyResult: "Ergebnis erscheint hier",

    connection: "✈️ Anschlussrechner",
    connectionDescription: "Prüfe deine Umsteigezeit zwischen Flügen",
    arrival: "Ankunftszeit",
    departure: "Abflugzeit",
    checkConnection: "Anschluss prüfen",
    enterTimes: "Gib deine Flugzeiten ein",

    timezone: "🕐 Zeitzonenrechner",
    timezoneDescription: "Uhrzeiten weltweit vergleichen",
    timezoneDate: "Datum",
    timezoneTime: "Uhrzeit",
    fromTimezone: "Ausgangs-Zeitzone",
    toTimezone: "Ziel-Zeitzone",
    convertTimezone: "Zeitzone umrechnen",
    timezoneResult: "Ergebnis erscheint hier",
    timezoneError: "Bitte Datum und Uhrzeit eingeben.",

    budget: "💰 Reisebudget",
    budgetDescription: "Plane und berechne deine Reisekosten",
    flight: "Flugkosten €",
    hotel: "Unterkunft €",
    food: "Essen €",
    transport: "Transport €",
    calculateBudget: "Budget berechnen",
    budgetResult: "Dein Reisebudget",

    validAmount: "Bitte gib einen gültigen Betrag ein.",
    chooseCurrencies: "Bitte wähle beide Währungen aus.",
    loadingRate: "Wechselkurs wird geladen...",
    rateError: "Wechselkurs konnte nicht geladen werden.",

    connectionError: "Bitte gib beide Zeiten ein.",
    goodBuffer: "🟢 Guter Puffer",
    tight: "🟡 Könnte knapp werden",
    veryTight: "🔴 Sehr knapp",
    total: "Gesamt",
    connectionTime: "Umsteigezeit",
    hours: "Std.",
    minutes: "Min.",

    enterLoginData: "Bitte E-Mail und Passwort eingeben.",
    passwordShort: "Das Passwort muss mindestens 6 Zeichen haben.",
    accountCreated: "Account wurde erstellt! 🎉",
    loginError: "E-Mail oder Passwort ist nicht korrekt.",
    loggedInAs: "Angemeldet als ",
    ratesBy: "Kurse von",

    airlineFinder: "Airline Finder",
    airlineDescription: "Finde die besten Airlines für dein Reiseziel.",
    airlineDestination: "Reiseziel",
    airlinePriority: "Priorität",
    airlineSearch: "🔎 Airlines finden",
    airlineResults: "Top 3 Airlines",

    bestOverall: "⭐ Beste Gesamtqualität",
    bestValue: "💰 Bestes Preis-Leistungs-Verhältnis",
    bestEconomy: "🧳 Beste Economy",
    bestBusiness: "👑 Beste Business Class",
    bestComfort: "🛋️ Bester Komfort",
    bestWifi: "📶 Bestes WLAN",
    bestConnections: "🔄 Beste Umsteigeverbindungen",

    topPick: "⭐ Top Pick",
    service: "Service",
    comfort: "Komfort",
    premium: "Premium-Service",
    entertainment: "Entertainment",
    longHaul: "Langstrecke",
    value: "Preis-Leistung",
    europe: "Europa",
    network: "Großes Streckennetz",
    economy: "Economy",
    businessClass: "Business Class",
    japan: "Japan",
    australia: "Australien",
    canada: "Kanada",
    thailand: "Thailand",
    indonesia: "Indonesien",

    noAirlines:
      "Für dieses Reiseziel sind noch keine Empfehlungen hinterlegt.",

    rating: "Bewertung"
  },

  en: {
    subtitle: "Your journey. Made easier.",
    accountTitle: "👤 My Account",
    accountStatus: "Not logged in",
    login: "Sign in",
    createAccount: "Create account",
    logout: "Sign out",
    email: "Email address",
    password: "Password",
    welcome: "Welcome to TravelMate! ✈️",

    settings: "⚙️ Settings",
    settingsDescription: "Language and app settings",
    language: "Language",

    currency: "💱 Currency Converter",
    currencyDescription: "Convert currencies worldwide quickly",
    amount: "Enter amount",
    loadingCurrencies: "Loading currencies...",
    convert: "Convert",
    currencyResult: "Result appears here",

    connection: "✈️ Connection Calculator",
    connectionDescription: "Check your connection time between flights",
    arrival: "Arrival time",
    departure: "Departure time",
    checkConnection: "Check connection",
    enterTimes: "Enter your flight times",

    timezone: "🕐 Time Zone Converter",
    timezoneDescription: "Compare times around the world",
    timezoneDate: "Date",
    timezoneTime: "Time",
    fromTimezone: "From time zone",
    toTimezone: "To time zone",
    convertTimezone: "Convert time zone",
    timezoneResult: "Result appears here",
    timezoneError: "Please enter a date and time.",

    budget: "💰 Travel Budget",
    budgetDescription: "Plan and calculate your travel costs",
    flight: "Flight cost €",
    hotel: "Accommodation €",
    food: "Food €",
    transport: "Transport €",
    calculateBudget: "Calculate budget",
    budgetResult: "Your travel budget",

    validAmount: "Please enter a valid amount.",
    chooseCurrencies: "Please select both currencies.",
    loadingRate: "Loading exchange rate...",
    rateError: "Exchange rate could not be loaded.",

    connectionError: "Please enter both times.",
    goodBuffer: "🟢 Good buffer",
    tight: "🟡 Could be tight",
    veryTight: "🔴 Very tight",
    total: "Total",
    connectionTime: "Connection time",
    hours: "h",
    minutes: "min",

    enterLoginData: "Please enter your email and password.",
    passwordShort: "Password must contain at least 6 characters.",
    accountCreated: "Account created! 🎉",
    loginError: "Email or password is incorrect.",
    loggedInAs: "Logged in as ",
    ratesBy: "Rates by",

    airlineFinder: "Airline Finder",
    airlineDescription: "Find the best airlines for your destination.",
    airlineDestination: "Destination",
    airlinePriority: "Priority",
    airlineSearch: "🔎 Find Airlines",
    airlineResults: "Top 3 Airlines",

    bestOverall: "⭐ Best Overall",
    bestValue: "💰 Best Value for Money",
    bestEconomy: "🧳 Best Economy",
    bestBusiness: "👑 Best Business Class",
    bestComfort: "🛋️ Best Comfort",
    bestWifi: "📶 Best Wi-Fi",
    bestConnections: "🔄 Best Connections",

    topPick: "⭐ Top Pick",
    service: "Service",
    comfort: "Comfort",
    premium: "Premium Service",
    entertainment: "Entertainment",
    longHaul: "Long-haul",
    value: "Value for money",
    europe: "Europe",
    network: "Large route network",
    economy: "Economy",
    businessClass: "Business Class",
    japan: "Japan",
    australia: "Australia",
    canada: "Canada",
    thailand: "Thailand",
    indonesia: "Indonesia",

    noAirlines:
      "There are no recommendations for this destination yet.",

    rating: "Rating"
  }
};


/* =========================================================
   HELPERS
   ========================================================= */

function getLanguage() {
  return localStorage.getItem("travelmateLanguage") === "en"
    ? "en"
    : "de";
}

function t() {
  return translations[getLanguage()];
}

function $(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = $(id);

  if (el) {
    el.textContent = value;
  }
}

function setPlaceholder(id, value) {
  const el = $(id);

  if (el) {
    el.placeholder = value;
  }
}

function setButton(selector, value) {
  const el = document.querySelector(selector);

  if (el) {
    el.textContent = value;
  }
}


/* =========================================================
   COLLAPSIBLE CARDS
   ========================================================= */

function toggleTool(cardId) {
  const card = $(cardId);

  if (!card) {
    return;
  }

  const wasOpen = card.classList.contains("open");

  document
    .querySelectorAll(".tool-card.open")
    .forEach(other => {
      if (other !== card) {
        other.classList.remove("open");
      }
    });

  card.classList.toggle("open", !wasOpen);
}


/* =========================================================
   LANGUAGE
   ========================================================= */

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

  loadCurrencies();
  loadTimezones();
  addCurrencyAttribution();
}


function translateDataAttributes() {
  document
    .querySelectorAll("[data-i18n]")
    .forEach(el => {

      const key =
        el.getAttribute("data-i18n");

      if (t()[key] != null) {
        el.textContent = t()[key];
      }

    });


  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(el => {

      const key =
        el.getAttribute(
          "data-i18n-placeholder"
        );

      if (t()[key] != null) {
        el.placeholder = t()[key];
      }

    });
}


/* =========================================================
   COMPLETE LANGUAGE APPLICATION
   ========================================================= */

function applyLanguage(language = getLanguage()) {

  language =
    language === "en"
      ? "en"
      : "de";

  const tr =
    translations[language];

  document.documentElement.lang =
    language;


  const select =
    $("languageSelect");

  if (select) {
    select.value = language;
  }


  /* -------------------------------------------------------
     MAIN TEXTS
     ------------------------------------------------------- */

  const textMap = {

    subtitle:
      tr.subtitle,

    accountTitle:
      tr.accountTitle,

    settingsTitle:
      tr.settings,

    languageLabel:
      tr.language,

    currencyTitle:
      tr.currency,

    connectionTitle:
      tr.connection,

    arrivalLabel:
      tr.arrival,

    departureLabel:
      tr.departure,

    timezoneTitle:
      tr.timezone,

    timezoneDateLabel:
      tr.timezoneDate,

    timezoneTimeLabel:
      tr.timezoneTime,

    fromTimezoneLabel:
      tr.fromTimezone,

    toTimezoneLabel:
      tr.toTimezone,

    budgetTitle:
      tr.budget,

    accountModalTitle:
      tr.accountTitle,

    welcomeMessage:
      tr.welcome,

    airlineFinderTitle:
      tr.airlineFinder,

    airlineFinderDescription:
      tr.airlineDescription,

    airlineDestinationLabel:
      tr.airlineDestination,

    airlinePriorityLabel:
      tr.airlinePriority
  };


  Object.entries(textMap)
    .forEach(([id, value]) => {

      setText(id, value);

    });


  /* -------------------------------------------------------
     PLACEHOLDERS
     ------------------------------------------------------- */

  [
    "amount",
    "flight",
    "hotel",
    "food",
    "transport",
    "email",
    "password"
  ].forEach(id => {

    if (tr[id] != null) {
      setPlaceholder(
        id,
        tr[id]
      );
    }

  });


  /* -------------------------------------------------------
     BUTTONS
     ------------------------------------------------------- */

  setButton(
    'button[onclick="convertCurrency()"]',
    tr.convert
  );

  setButton(
    'button[onclick="calculateConnection()"]',
    tr.checkConnection
  );

  setButton(
    'button[onclick="calculateTimezone()"]',
    tr.convertTimezone
  );

  setButton(
    'button[onclick="calculateBudget()"]',
    tr.calculateBudget
  );

  setButton(
    'button[onclick="openAccount()"]',
    tr.login
  );

  setButton(
    'button[onclick="createAccount()"]',
    tr.createAccount
  );

  setButton(
    'button[onclick="login()"]',
    tr.login
  );

  setButton(
    'button[onclick="logout()"]',
    tr.logout
  );


  /* -------------------------------------------------------
     RESULT PLACEHOLDERS
     ------------------------------------------------------- */

  const cr =
    $("currencyResult");

  if (
    cr &&
    !cr.dataset.calculated
  ) {
    cr.textContent =
      tr.currencyResult;
  }


  const con =
    $("connectionResult");

  if (
    con &&
    !con.dataset.calculated
  ) {
    con.textContent =
      tr.enterTimes;
  }


  const tz =
    $("timezoneResult");

  if (
    tz &&
    !tz.dataset.calculated
  ) {
    tz.textContent =
      tr.timezoneResult;
  }


  const br =
    $("budgetResult");

  if (
    br &&
    !br.dataset.calculated
  ) {
    br.textContent =
      tr.budgetResult;
  }


  /* -------------------------------------------------------
     TRANSLATION ATTRIBUTES
     ------------------------------------------------------- */

  translateDataAttributes();


  /* -------------------------------------------------------
     CARD DESCRIPTIONS
     ------------------------------------------------------- */

  updateCardTeasers();


  /* -------------------------------------------------------
     AIRLINE FINDER
     ------------------------------------------------------- */

  updateAirlineFinderLanguage();


  /* -------------------------------------------------------
     ACCOUNT
     ------------------------------------------------------- */

  updateAccountView();
}


/* =========================================================
   CARD DESCRIPTIONS
   ========================================================= */

function updateCardTeasers() {

  const tr = t();

  const cardTranslations = {

    settingsCard: {
      title: tr.settings,
      description:
        tr.settingsDescription
    },

    currencyCard: {
      title: tr.currency,
      description:
        tr.currencyDescription
    },

    connectionCard: {
      title: tr.connection,
      description:
        tr.connectionDescription
    },

    timezoneCard: {
      title: tr.timezone,
      description:
        tr.timezoneDescription
    },

    budgetCard: {
      title: tr.budget,
      description:
        tr.budgetDescription
    }

  };


  Object.entries(
    cardTranslations
  ).forEach(
    ([id, data]) => {

      const card = $(id);

      if (!card) {
        return;
      }


      const title =
        card.querySelector(
          ".tool-info h2"
        );

      const description =
        card.querySelector(
          ".tool-description"
        );


      if (title) {
        title.textContent =
          data.title;
      }


      if (description) {
        description.textContent =
          data.description;
      }

    }
  );


  /* -------------------------------------------------------
     AIRLINE FINDER TEASER
     ------------------------------------------------------- */

  const airline =
    document.querySelector(
      ".airline-finder-card"
    );

  if (airline) {

    const title =
      airline.querySelector(
        ".airline-finder-text h2"
      );

    const description =
      airline.querySelector(
        ".airline-finder-text p"
      );


    if (title) {
      title.textContent =
        tr.airlineFinder;
    }


    if (description) {
      description.textContent =
        tr.airlineDescription;
    }

  }
}


/* =========================================================
   CURRENCY
   ========================================================= */

const CURRENCY_API =
  "https://open.er-api.com/v6/latest/EUR";

let currencyRates = null;


async function loadCurrencies() {

  const from =
    $("fromCurrency");

  const to =
    $("toCurrency");


  if (!from || !to) {
    return;
  }


  const oldFrom =
    from.value || "EUR";

  const oldTo =
    to.value || "IDR";


  from.innerHTML =
    `<option value="">${t().loadingCurrencies}</option>`;

  to.innerHTML =
    `<option value="">${t().loadingCurrencies}</option>`;


  try {

    const response =
      await fetch(
        CURRENCY_API,
        {
          cache: "no-store"
        }
      );


    if (!response.ok) {
      throw new Error(
        "Currency API error"
      );
    }


    const data =
      await response.json();


    if (
      data.result !== "success" ||
      !data.rates
    ) {
      throw new Error(
        "Invalid currency data"
      );
    }


    currencyRates =
      data.rates;


    populateCurrencies(
      oldFrom,
      oldTo
    );

  } catch (error) {

    console.error(
      "TravelMate currency error",
      error
    );


    currencyRates =
      null;


    from.innerHTML =
      '<option value="EUR">EUR – Euro</option>';

    to.innerHTML =
      '<option value="IDR">IDR – Indonesian Rupiah</option>';
  }
}


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


    a.value = code;
    b.value = code;


    a.textContent =
      `${code} – ${currencyName(code)}`;

    b.textContent =
      `${code} – ${currencyName(code)}`;


    from.appendChild(a);
    to.appendChild(b);

  });


  from.value =
    codes.includes(previousFrom)
      ? previousFrom
      : (
          codes.includes("EUR")
            ? "EUR"
            : codes[0]
        );


  to.value =
    codes.includes(previousTo)
      ? previousTo
      : (
          codes.includes("IDR")
            ? "IDR"
            : codes[1] ||
              codes[0]
        );


  addCurrencyAttribution();
}


function addCurrencyAttribution() {

  const result =
    $("currencyResult");


  if (!result) {
    return;
  }


  let el =
    $("exchangeRateAttribution");


  if (!el) {

    el =
      document.createElement(
        "small"
      );

    el.id =
      "exchangeRateAttribution";


    result.insertAdjacentElement(
      "afterend",
      el
    );
  }


  el.innerHTML =
    `${t().ratesBy} <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">ExchangeRate-API</a>`;
}


function formatNumber(value) {

  return Number(value)
    .toLocaleString(
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


  return Number(value)
    .toLocaleString(
      getLanguage() === "de"
        ? "de-DE"
        : "en-US",
      {
        maximumFractionDigits:
          noDecimals.includes(currency)
            ? 0
            : 2
      }
    );
}


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
    Number(amount.value);


  if (
    !Number.isFinite(value) ||
    value <= 0
  ) {

    result.textContent =
      t().validAmount;

    result.dataset.calculated =
      "true";

    return;
  }


  if (
    !from.value ||
    !to.value
  ) {

    result.textContent =
      t().chooseCurrencies;

    result.dataset.calculated =
      "true";

    return;
  }


  if (!currencyRates) {

    result.textContent =
      t().loadingRate;


    await loadCurrencies();


    if (!currencyRates) {

      result.textContent =
        t().rateError;

      return;
    }
  }


  const a =
    currencyRates[
      from.value
    ];

  const b =
    currencyRates[
      to.value
    ];


  if (
    typeof a !== "number" ||
    typeof b !== "number"
  ) {

    result.textContent =
      t().rateError;

    return;
  }


  result.textContent =
    `${formatNumber(value)} ${from.value} = ${formatConverted(value * (b / a), to.value)} ${to.value}`;


  result.dataset.calculated =
    "true";
}


/* =========================================================
   CONNECTION
   ========================================================= */

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


  if (
    !arrival.value ||
    !departure.value
  ) {

    result.textContent =
      t().connectionError;

    result.dataset.calculated =
      "true";

    return;
  }


  const [
    ah,
    am
  ] =
    arrival.value
      .split(":")
      .map(Number);


  const [
    dh,
    dm
  ] =
    departure.value
      .split(":")
      .map(Number);


  const a =
    ah * 60 + am;

  let d =
    dh * 60 + dm;


  if (d < a) {
    d += 1440;
  }


  const diff =
    d - a;


  const h =
    Math.floor(diff / 60);

  const m =
    diff % 60;


  let status =
    diff >= 120
      ? t().goodBuffer
      : diff >= 60
        ? t().tight
        : t().veryTight;


  result.innerHTML =
    `<strong>${status}</strong><br>${t().connectionTime}: ${h} ${t().hours} ${m} ${t().minutes}`;


  result.dataset.calculated =
    "true";
}


/* =========================================================
   TIME ZONES
   ========================================================= */

function getAllTimezones() {

  if (
    typeof Intl !== "undefined" &&
    typeof Intl.supportedValuesOf === "function"
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


function timezoneLabel(zone) {

  return zone
    .split("/")
    .map(
      p =>
        p.replace(
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


      a.value = zone;
      b.value = zone;


      a.textContent =
        timezoneLabel(zone);

      b.textContent =
        timezoneLabel(zone);


      from.appendChild(a);
      to.appendChild(b);

    });


  from.value =
    [
      ...from.options
    ].some(
      o =>
        o.value === oldFrom
    )
      ? oldFrom
      : "Europe/Berlin";


  to.value =
    [
      ...to.options
    ].some(
      o =>
        o.value === oldTo
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
    )
      .formatToParts(date);


  const values = {};


  parts.forEach(p => {

    if (
      p.type !== "literal"
    ) {
      values[p.type] =
        p.value;
    }

  });


  const asUTC =
    Date.UTC(
      +values.year,
      +values.month - 1,
      +values.day,
      +values.hour,
      +values.minute,
      +values.second
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


  if (
    !date.value ||
    !time.value
  ) {

    result.textContent =
      t().timezoneError;

    result.dataset.calculated =
      "true";

    return;
  }


  const [
    y,
    mo,
    d
  ] =
    date.value
      .split("-")
      .map(Number);


  const [
    h,
    m
  ] =
    time.value
      .split(":")
      .map(Number);


  const utc =
    localTimeToUTC(
      y,
      mo,
      d,
      h,
      m,
      from.value
    );


  const formatted =
    new Intl.DateTimeFormat(
      getLanguage() === "de"
        ? "de-DE"
        : "en-US",
      {
        timeZone: to.value,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "2-digit"
      }
    )
      .format(utc);


  result.textContent =
    `${formatted} (${timezoneLabel(to.value)})`;


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
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  }


  if (
    time &&
    !time.value
  ) {

    time.value =
      `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  }
}


/* =========================================================
   BUDGET
   ========================================================= */

function calculateBudget() {

  const ids = [
    "flight",
    "hotel",
    "food",
    "transport"
  ];


  const total =
    ids.reduce(
      (sum, id) =>
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


  result.textContent =
    `${t().total}: ${total.toLocaleString(getLanguage() === "de" ? "de-DE" : "en-US", {
      style: "currency",
      currency: "EUR"
    })}`;


  result.dataset.calculated =
    "true";
}


/* =========================================================
   ACCOUNT
   ========================================================= */

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
    $("email")?.value.trim();

  const password =
    $("password")?.value;

  const message =
    $("accountMessage");


  if (!message) {
    return;
  }


  if (
    !email ||
    !password
  ) {

    message.textContent =
      t().enterLoginData;

    return;
  }


  if (
    password.length < 6
  ) {

    message.textContent =
      t().passwordShort;

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
    t().accountCreated;


  updateAccountView();
}


function login() {

  const email =
    $("email")?.value.trim();

  const password =
    $("password")?.value;

  const message =
    $("accountMessage");


  if (!message) {
    return;
  }


  if (
    email ===
      localStorage.getItem(
        "travelmateEmail"
      ) &&
    password ===
      localStorage.getItem(
        "travelmatePassword"
      )
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
      t().loginError;

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


  if (logged) {

    if (status) {

      status.textContent =
        t().loggedInAs +
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
        t().accountStatus;

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


/* =========================================================
   AIRLINE FINDER
   ========================================================= */

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


function airlineScore(
  name,
  priority
) {

  return (
    airlineScores[name]?.[priority] ??
    airlineScores[name]?.overall ??
    80
  );
}


function translateAirlineTag(tag) {

  return {

    premium:
      t().premium,

    comfort:
      t().comfort,

    value:
      t().value,

    service:
      t().service,

    entertainment:
      t().entertainment,

    longHaul:
      t().longHaul,

    europe:
      t().europe,

    network:
      t().network,

    economy:
      t().economy,

    businessClass:
      t().businessClass,

    japan:
      t().japan,

    australia:
      t().australia,

    canada:
      t().canada,

    thailand:
      t().thailand,

    indonesia:
      t().indonesia,

    bestOverall:
      t().bestOverall

  }[tag] || tag;
}


/* =========================================================
   AIRLINE FINDER LANGUAGE
   ========================================================= */

function updateAirlineFinderLanguage() {

  const tr =
    t();


  /* -------------------------------------------------------
     TEASER
     ------------------------------------------------------- */

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
        tr.airlineFinder;

    }


    if (description) {

      description.textContent =
        tr.airlineDescription;

    }

  }


  /* -------------------------------------------------------
     MODAL
     ------------------------------------------------------- */

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
        ".close-button"
      );


    if (title) {

      title.textContent =
        `✈️ ${tr.airlineFinder}`;

    }


    if (subtitle) {

      subtitle.textContent =
        tr.airlineDescription;

    }


    if (labels[0]) {

      labels[0].textContent =
        tr.airlineDestination;

    }


    if (labels[1]) {

      labels[1].textContent =
        tr.airlinePriority;

    }


    if (search) {

      search.textContent =
        tr.airlineSearch;

    }


    if (close) {

      close.setAttribute(
        "aria-label",
        getLanguage() === "en"
          ? "Close"
          : "Schließen"
      );

    }

  }


  /* -------------------------------------------------------
     PRIORITY OPTIONS
     ------------------------------------------------------- */

  const priority =
    $("airlinePriority");


  if (priority) {

    const options = {

      overall:
        tr.bestOverall,

      economy:
        tr.bestEconomy,

      business:
        tr.bestBusiness,

      comfort:
        tr.bestComfort

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


  /* -------------------------------------------------------
     EXISTING RESULTS
     ------------------------------------------------------- */

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


/* =========================================================
   AIRLINE FINDER OPEN / CLOSE
   ========================================================= */

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


/* =========================================================
   FIND AIRLINES
   ========================================================= */

function findAirlines() {

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


  const results =
    (
      airlineDatabase[
        destination
      ] || []
    )
      .map(a => ({

        name: a[0],
        rating: a[1],
        logo: a[2],
        tags: a[3]

      }))
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
      );


  if (!results.length) {

    container.innerHTML =
      `<h3 class="airline-results-title">${t().airlineResults}</h3>
       <p>${t().noAirlines}</p>`;


    container.dataset.hasResults =
      "true";


    return;
  }


  container.innerHTML =
    `<h3 class="airline-results-title">${t().airlineResults}</h3>` +

    results
      .slice(0, 3)
      .map(
        (a, i) => `

        <div class="airline-result">

          <div class="airline-rank">
            ${
              i === 0
                ? "🥇"
                : i === 1
                  ? "🥈"
                  : "🥉"
            }
          </div>

          <div class="airline-logo">
            ${a.logo}
          </div>

          <div class="airline-info">

            <div class="airline-name">
              ${
                i === 0
                  ? `${t().topPick} · `
                  : ""
              }${a.name}
            </div>

            <div class="airline-rating">
              ${t().rating}: ${a.rating}/5 · ${airlineScore(a.name, priority)}/100
            </div>

            <div class="airline-tags">

              ${a.tags
                .map(
                  tag =>
                    `<span class="airline-tag">${translateAirlineTag(tag)}</span>`
                )
                .join("")}

            </div>

          </div>

        </div>
      `
      )
      .join("");


  container.dataset.hasResults =
    "true";
}


/* =========================================================
   AIRLINE FINDER INITIALIZATION
   ========================================================= */

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
      e => {

        if (
          e.key === "Enter" ||
          e.key === " "
        ) {

          e.preventDefault();

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
      e => {

        if (
          e.target === modal
        ) {

          closeAirlineFinder();

        }

      }
    );

  }
}


/* =========================================================
   GLOBAL EVENTS
   ========================================================= */

window.addEventListener(
  "click",
  e => {

    const modal =
      $("accountModal");


    if (
      modal &&
      e.target === modal
    ) {

      closeAccount();

    }

  }
);


document.addEventListener(
  "keydown",
  e => {

    if (
      e.key === "Escape"
    ) {

      closeAirlineFinder();

      closeAccount();

    }

  }
);


/* =========================================================
   START TRAVELMATE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    const lang =
      getLanguage();


    if (
      $("languageSelect")
    ) {

      $("languageSelect").value =
        lang;

    }


    applyLanguage(
      lang
    );


    setTimezoneDefaults();


    loadTimezones();


    initializeAirlineFinder();


    await loadCurrencies();


    updateAccountView();


    updateAirlineFinderLanguage();

  }
);
