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

    subtitle:
      "Deine Reise. Einfacher.",

    account:
      "👤 Mein Account",

    notLoggedIn:
      "Noch nicht angemeldet",

    login:
      "Anmelden",

    accountTitle:
      "👤 TravelMate Account",

    email:
      "E-Mail-Adresse",

    password:
      "Passwort",

    createAccount:
      "Account erstellen",

    welcome:
      "Willkommen bei TravelMate! ✈️",

    logout:
      "Abmelden",


    currency:
      "💱 Währungsrechner",

    amount:
      "Betrag eingeben",

    loadingCurrencies:
      "Währungen werden geladen...",

    convert:
      "Umrechnen",

    currencyResult:
      "Ergebnis erscheint hier",


    connection:
      "✈️ Anschlussrechner",

    arrival:
      "Ankunftszeit",

    departure:
      "Abflugzeit",

    checkConnection:
      "Anschluss prüfen",

    enterTimes:
      "Gib deine Flugzeiten ein",


    timezone:
      "🕐 Zeitzonenrechner",

    timezoneDate:
      "Datum",

    timezoneTime:
      "Uhrzeit",

    fromTimezone:
      "Ausgangs-Zeitzone",

    toTimezone:
      "Ziel-Zeitzone",

    convertTimezone:
      "Zeitzone umrechnen",

    timezoneResult:
      "Ergebnis erscheint hier",

    timezoneError:
      "Bitte Datum und Uhrzeit eingeben.",


    budget:
      "💰 Reisebudget",

    flight:
      "Flugkosten €",

    hotel:
      "Unterkunft €",

    food:
      "Essen €",

    transport:
      "Transport €",

    calculateBudget:
      "Budget berechnen",

    budgetResult:
      "Dein Reisebudget",


    settings:
      "⚙️ Einstellungen",

    language:
      "Sprache",


    validAmount:
      "Bitte gib einen gültigen Betrag ein.",

    chooseCurrencies:
      "Bitte wähle beide Währungen aus.",

    loadingRate:
      "Wechselkurs wird geladen...",

    rateError:
      "Wechselkurs konnte nicht geladen werden.",


    connectionError:
      "Bitte gib beide Zeiten ein.",

    goodBuffer:
      "🟢 Guter Puffer",

    tight:
      "🟡 Könnte knapp werden",

    veryTight:
      "🔴 Sehr knapp",


    total:
      "Gesamt",


    enterLoginData:
      "Bitte E-Mail und Passwort eingeben.",

    passwordShort:
      "Das Passwort muss mindestens 6 Zeichen haben.",

    accountCreated:
      "Account wurde erstellt! 🎉",

    loginError:
      "E-Mail oder Passwort ist nicht korrekt.",

    loggedInAs:
      "Angemeldet als ",

    timezoneArrow:
      "→"

  },


  en: {

    subtitle:
      "Your journey. Made easier.",

    account:
      "👤 My Account",

    notLoggedIn:
      "Not logged in",

    login:
      "Sign in",

    accountTitle:
      "👤 TravelMate Account",

    email:
      "Email address",

    password:
      "Password",

    createAccount:
      "Create account",

    welcome:
      "Welcome to TravelMate! ✈️",

    logout:
      "Sign out",


    currency:
      "💱 Currency Converter",

    amount:
      "Enter amount",

    loadingCurrencies:
      "Loading currencies...",

    convert:
      "Convert",

    currencyResult:
      "Result appears here",


    connection:
      "✈️ Connection Calculator",

    arrival:
      "Arrival time",

    departure:
      "Departure time",

    checkConnection:
      "Check connection",

    enterTimes:
      "Enter your flight times",


    timezone:
      "🕐 Time Zone Converter",

    timezoneDate:
      "Date",

    timezoneTime:
      "Time",

    fromTimezone:
      "From time zone",

    toTimezone:
      "To time zone",

    convertTimezone:
      "Convert time zone",

    timezoneResult:
      "Result appears here",

    timezoneError:
      "Please enter a date and time.",


    budget:
      "💰 Travel Budget",

    flight:
      "Flight cost €",

    hotel:
      "Accommodation €",

    food:
      "Food €",

    transport:
      "Transport €",

    calculateBudget:
      "Calculate budget",

    budgetResult:
      "Your travel budget",


    settings:
      "⚙️ Settings",

    language:
      "Language",


    validAmount:
      "Please enter a valid amount.",

    chooseCurrencies:
      "Please select both currencies.",

    loadingRate:
      "Loading exchange rate...",

    rateError:
      "Exchange rate could not be loaded.",


    connectionError:
      "Please enter both times.",

    goodBuffer:
      "🟢 Good buffer",

    tight:
      "🟡 Could be tight",

    veryTight:
      "🔴 Very tight",


    total:
      "Total",


    enterLoginData:
      "Please enter your email and password.",

    passwordShort:
      "Password must contain at least 6 characters.",

    accountCreated:
      "Account created! 🎉",

    loginError:
      "Email or password is incorrect.",

    loggedInAs:
      "Logged in as ",

    timezoneArrow:
      "→"

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

  applyLanguage(
    language
  );

  loadCurrencies();

  loadTimezones();

}


function applyLanguage(
  language
) {

  const t =
    translations[language];

  if (!t) return;


  document.documentElement.lang =
    language;


  const subtitle =
    document.getElementById(
      "subtitle"
    );

  if (subtitle)
    subtitle.textContent =
      t.subtitle;


  const accountTitle =
    document.getElementById(
      "accountTitle"
    );

  if (accountTitle)
    accountTitle.textContent =
      t.account;


  const settingsTitle =
    document.getElementById(
      "settingsTitle"
    );

  if (settingsTitle)
    settingsTitle.textContent =
      t.settings;


  const languageLabel =
    document.getElementById(
      "languageLabel"
    );

  if (languageLabel)
    languageLabel.textContent =
      t.language;


  const currencyTitle =
    document.getElementById(
      "currencyTitle"
    );

  if (currencyTitle)
    currencyTitle.textContent =
      t.currency;


  const amount =
    document.getElementById(
      "amount"
    );

  if (amount)
    amount.placeholder =
      t.amount;


  const connectionTitle =
    document.getElementById(
      "connectionTitle"
    );

  if (connectionTitle)
    connectionTitle.textContent =
      t.connection;


  const arrivalLabel =
    document.getElementById(
      "arrivalLabel"
    );

  if (arrivalLabel)
    arrivalLabel.textContent =
      t.arrival;


  const departureLabel =
    document.getElementById(
      "departureLabel"
    );

  if (departureLabel)
    departureLabel.textContent =
      t.departure;


  const timezoneTitle =
    document.getElementById(
      "timezoneTitle"
    );

  if (timezoneTitle)
    timezoneTitle.textContent =
      t.timezone;


  const timezoneDateLabel =
    document.getElementById(
      "timezoneDateLabel"
    );

  if (timezoneDateLabel)
    timezoneDateLabel.textContent =
      t.timezoneDate;


  const timezoneTimeLabel =
    document.getElementById(
      "timezoneTimeLabel"
    );

  if (timezoneTimeLabel)
    timezoneTimeLabel.textContent =
      t.timezoneTime;


  const fromTimezoneLabel =
    document.getElementById(
      "fromTimezoneLabel"
    );

  if (fromTimezoneLabel)
    fromTimezoneLabel.textContent =
      t.fromTimezone;


  const toTimezoneLabel =
    document.getElementById(
      "toTimezoneLabel"
    );

  if (toTimezoneLabel)
    toTimezoneLabel.textContent =
      t.toTimezone;


  const budgetTitle =
    document.getElementById(
      "budgetTitle"
    );

  if (budgetTitle)
    budgetTitle.textContent =
      t.budget;


  const flight =
    document.getElementById(
      "flight"
    );

  if (flight)
    flight.placeholder =
      t.flight;


  const hotel =
    document.getElementById(
      "hotel"
    );

  if (hotel)
    hotel.placeholder =
      t.hotel;


  const food =
    document.getElementById(
      "food"
    );

  if (food)
    food.placeholder =
      t.food;


  const transport =
    document.getElementById(
      "transport"
    );

  if (transport)
    transport.placeholder =
      t.transport;


  const modalTitle =
    document.getElementById(
      "accountModalTitle"
    );

  if (modalTitle)
    modalTitle.textContent =
      t.accountTitle;


  const email =
    document.getElementById(
      "email"
    );

  if (email)
    email.placeholder =
      t.email;


  const password =
    document.getElementById(
      "password"
    );

  if (password)
    password.placeholder =
      t.password;


  const welcome =
    document.getElementById(
      "welcomeMessage"
    );

  if (welcome)
    welcome.textContent =
      t.welcome;


  updateAccountView();

}


/* =========================================================
   3. CURRENCY API
   ========================================================= */

const CURRENCY_API =
  "https://open.er-api.com/v6/latest/EUR";


let currencyRates =
  null;


/* =========================================================
   4. LOAD CURRENCIES
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
  ) return;


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
        CURRENCY_API,
        {
          cache:
            "no-store"
        }
      );


    if (!response.ok)
      throw new Error(
        "Currency API error"
      );


    const data =
      await response.json();


    if (
      data.result !==
      "success" ||
      !data.rates
    ) {

      throw new Error(
        "Invalid currency data"
      );

    }


    currencyRates =
      data.rates;


    populateCurrencies();


  } catch (error) {

    console.error(
      "Currency error:",
      error
    );


    fromSelect.innerHTML =
      `
      <option value="EUR">
        EUR – Euro
      </option>
      `;


    toSelect.innerHTML =
      `
      <option value="IDR">
        IDR – Indonesian Rupiah
      </option>
      `;


    currencyRates =
      null;

  }

}


/* =========================================================
   5. POPULATE CURRENCY SELECTS
   ========================================================= */

function populateCurrencies() {

  const fromSelect =
    document.getElementById(
      "fromCurrency"
    );

  const toSelect =
    document.getElementById(
      "toCurrency"
    );


  if (
    !currencyRates ||
    !fromSelect ||
    !toSelect
  ) return;


  fromSelect.innerHTML =
    "";

  toSelect.innerHTML =
    "";


  const codes =
    Object.keys(
      currencyRates
    ).sort();


  let displayNames =
    null;


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
            type:
              "currency"
          }
        );

    }

  } catch (error) {

    displayNames =
      null;

  }


  codes.forEach(
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


  fromSelect.value =
    "EUR";


  toSelect.value =
    "IDR";


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
  ) return;


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
   7. CURRENCY CONVERTER
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
  ) return;


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


  if (
    from === to
  ) {

    result.innerText =
      `${formatCurrencyNumber(amount)}
       ${from} =
       ${formatCurrencyNumber(amount)}
       ${to}`;

    return;

  }


  if (!currencyRates) {

    result.innerText =
      t.loadingRate;


    await loadCurrencies();


    if (!currencyRates) {

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


  const exchangeRate =
    toRate /
    fromRate;


  const converted =
    amount *
    exchangeRate;


  result.innerText =
    `${formatCurrencyNumber(amount)}
     ${from} =
     ${formatConvertedNumber(converted)}
     ${to}`;

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


  const select =
    document.getElementById(
      "toCurrency"
    );


  const currency =
    select
      ? select.value
      : "";


  const digits =
    noDecimals.includes(
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
    `${hours} ${hourText} ${minutes} ${minuteText}
     ${connectionText}
     \n${status}`;

}


/* =========================================================
   10. TIMEZONE LIST
   ========================================================= */

function getAllTimezones() {

  if (
    typeof Intl !==
      "undefined" &&
    typeof Intl.supportedValuesOf ===
      "function"
  ) {

    try {

      return Intl
        .supportedValuesOf(
          "timeZone"
        );

    } catch (error) {}

  }


  return [

    "UTC",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Moscow",

    "Africa/Cairo",
    "Africa/Johannesburg",
    "Africa/Nairobi",

    "Asia/Dubai",
    "Asia/Kolkata",
    "Asia/Bangkok",
    "Asia/Jakarta",
    "Asia/Makassar",
    "Asia/Jayapura",
    "Asia/Singapore",
    "Asia/Kuala_Lumpur",
    "Asia/Manila",
    "Asia/Hong_Kong",
    "Asia/Shanghai",
    "Asia/Tokyo",
    "Asia/Seoul",

    "Australia/Perth",
    "Australia/Adelaide",
    "Australia/Sydney",

    "Pacific/Auckland",
    "Pacific/Honolulu",

    "America/Los_Angeles",
    "America/Denver",
    "America/Chicago",
    "America/New_York",
    "America/Sao_Paulo"

  ];

}


/* =========================================================
   11. TIMEZONE NAME
   ========================================================= */

function formatTimezoneName(
  timezone
) {

  const parts =
    timezone.split("/");


  const city =
    parts[
      parts.length - 1
    ].replace(
      /_/g,
      " "
    );


  const region =
    parts.length > 1
      ? parts[0]
      : "";


  if (!region)
    return city;


  return `${region} / ${city}`;

}


/* =========================================================
   12. LOAD TIMEZONES
   ========================================================= */

function loadTimezones() {

  const from =
    document.getElementById(
      "fromTimezone"
    );


  const to =
    document.getElementById(
      "toTimezone"
    );


  if (
    !from ||
    !to
  ) return;


  const zones =
    getAllTimezones();


  from.innerHTML =
    "";


  to.innerHTML =
    "";


  zones.forEach(
    function(timezone) {

      const label =
        formatTimezoneName(
          timezone
        );


      const fromOption =
        document.createElement(
          "option"
        );


      fromOption.value =
        timezone;


      fromOption.textContent =
        label;


      from.appendChild(
        fromOption
      );


      const toOption =
        document.createElement(
          "option"
        );


      toOption.value =
        timezone;


      toOption.textContent =
        label;


      to.appendChild(
        toOption
      );

    }
  );


  from.value =
    "Europe/Berlin";


  to.value =
    "Asia/Jakarta";

}


/* =========================================================
   13. TIMEZONE CONVERTER
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


  const t =
    translations[
      getLanguage()
    ];


  if (
    !dateInput ||
    !timeInput ||
    !fromSelect ||
    !toSelect ||
    !result
  ) return;


  if (
    !dateInput.value ||
    !timeInput.value
  ) {

    result.innerText =
      t.timezoneError;

    return;

  }


  const fromTimezone =
    fromSelect.value;


  const toTimezone =
    toSelect.value;


  const localDateTime =
    `${dateInput.value}T${timeInput.value}:00`;


  const utcDate =
    convertTimezoneToUTC(
      localDateTime,
      fromTimezone
    );


  if (!utcDate) {

    result.innerText =
      t.rateError;

    return;

  }


  const locale =
    getLanguage() === "de"
      ? "de-DE"
      : "en-US";


  const converted =
    new Intl.DateTimeFormat(
      locale,
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


  result.innerHTML =
    `
    <strong>
      ${converted}
    </strong>

    <br>

    ${toName}

    <br><br>

    ${fromName}
    ${t.timezoneArrow}
    ${toName}
    `;

}


/* =========================================================
   14. CONVERT LOCAL TIME TO UTC
   ========================================================= */

function convertTimezoneToUTC(
  dateTimeString,
  timezone
) {

  const parts =
    dateTimeString.match(
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
    );


  if (!parts)
    return null;


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


  let utcTimestamp =
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      second
    );


  for (
    let i = 0;
    i < 4;
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


    function getPart(
      type
    ) {

      const part =
        values.find(
          function(item) {
            return (
              item.type ===
              type
            );
          }
        );


      return part
        ? Number(
            part.value
          )
        : 0;

    }


    const localTimestamp =
      Date.UTC(
        getPart("year"),
        getPart("month") - 1,
        getPart("day"),
        getPart("hour"),
        getPart("minute"),
        getPart("second")
      );


    const desiredTimestamp =
      Date.UTC(
        year,
        month - 1,
        day,
        hour,
        minute,
        second
      );


    const difference =
      desiredTimestamp -
      localTimestamp;


    utcTimestamp +=
      difference;

  }


  return new Date(
    utcTimestamp
  );

}


/* =========================================================
   15. DEFAULT DATE / TIME
   ========================================================= */

function setTimezoneDefaults() {

  const dateInput =
    document.getElementById(
      "timezoneDate"
    );


  const timeInput =
    document.getElementById(
      "timezoneTime"
    );


  const now =
    new Date();


  if (
    dateInput &&
    !dateInput.value
  ) {

    const year =
      now.getFullYear();


    const month =
      String(
        now.getMonth() + 1
      ).padStart(
        2,
        "0"
      );


    const day =
      String(
        now.getDate()
      ).padStart(
        2,
        "0"
      );


    dateInput.value =
      `${year}-${month}-${day}`;

  }


  if (
    timeInput &&
    !timeInput.value
  ) {

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


/* =========================================================
   16. BUDGET CALCULATOR
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


  if (!result)
    return;


  const locale =
    getLanguage() === "de"
      ? "de-DE"
      : "en-US";


  const t =
    translations[
      getLanguage()
    ];


  result.innerText =
    `${t.total}: ` +
    total.toLocaleString(
      locale,
      {

        style:
          "currency",

        currency:
          "EUR"

      }
    );

}


/* =========================================================
   17. ACCOUNT
   ========================================================= */

function openAccount() {

  const modal =
    document.getElementById(
      "accountModal"
    );


  if (modal)
    modal.style.display =
      "block";


  updateAccountView();

}


function closeAccount() {

  const modal =
    document.getElementById(
      "accountModal"
    );


  if (modal)
    modal.style.display =
      "none";

}


/* =========================================================
   CREATE ACCOUNT
   ========================================================= */

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
  ) return;


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
   * Demo account only.
   * Not a secure production authentication system.
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


/* =========================================================
   LOGIN
   ========================================================= */

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
  ) return;


  const email =
    emailInput.value.trim();


  const password =
    passwordInput.value;


  if (
    email ===
      savedEmail &&
    password ===
      savedPassword
  ) {

    localStorage.setItem(
      "travelmateLoggedIn",
      "true"
    );


    message.innerText =
      "";


    updateAccountView();

  } else {

    message.innerText =
      t.loginError;

  }

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

  localStorage.removeItem(
    "travelmateLoggedIn"
  );


  updateAccountView();

}


/* =========================================================
   ACCOUNT VIEW
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
    loggedIn ===
    "true"
  ) {

    if (status)
      status.innerText =
        t.loggedInAs +
        email;


    if (loginArea)
      loginArea.style.display =
        "none";


    if (loggedInArea)
      loggedInArea.style.display =
        "block";


    if (loggedInEmail)
      loggedInEmail.innerText =
        email;

  } else {

    if (status)
      status.innerText =
        t.notLoggedIn;


    if (loginArea)
      loginArea.style.display =
        "block";


    if (loggedInArea)
      loggedInArea.style.display =
        "none";

  }

}


/* =========================================================
   18. CLOSE ACCOUNT MODAL
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
      event.target ===
        modal
    ) {

      closeAccount();

    }

  }
);


/* =========================================================
   19. START TRAVELMATE
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


    if (selector)
      selector.value =
        language;


    applyLanguage(
      language
    );


    setTimezoneDefaults();


    loadTimezones();


    await loadCurrencies();


    updateAccountView();

  }
);
