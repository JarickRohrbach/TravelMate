/* =========================================================
   TRAVELMATE - COMPLETE JAVASCRIPT
   German / English
   Currency Converter
   Connection Calculator
   Time Zone Converter
   Travel Budget
   Account
   Airline Finder
   ========================================================= */

const translations = {

    /* =========================
       GERMAN
       ========================= */
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
        language: "Sprache",

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

        timezone: "🕐 Zeitzonenrechner",
        timezoneDate: "Datum",
        timezoneTime: "Uhrzeit",
        fromTimezone: "Ausgangs-Zeitzone",
        toTimezone: "Ziel-Zeitzone",
        convertTimezone: "Zeitzone umrechnen",
        timezoneResult: "Ergebnis erscheint hier",
        timezoneError: "Bitte Datum und Uhrzeit eingeben.",

        budget: "💰 Reisebudget",
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

    /* =========================
       ENGLISH
       ========================= */
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
        language: "Language",

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

        timezone: "🕐 Time Zone Converter",
        timezoneDate: "Date",
        timezoneTime: "Time",
        fromTimezone: "From time zone",
        toTimezone: "To time zone",
        convertTimezone: "Convert time zone",
        timezoneResult: "Result appears here",
        timezoneError: "Please enter a date and time.",

        budget: "💰 Travel Budget",
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
   BASIC HELPERS
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
    const element = $(id);

    if (element) {
        element.textContent = value;
    }
}

function setPlaceholder(id, value) {
    const element = $(id);

    if (element) {
        element.placeholder = value;
    }
}

function setButton(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
        element.textContent = value;
    }
}


/* =========================================================
   COLLAPSIBLE TOOL CARDS
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
   LANGUAGE SYSTEM
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
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (t()[key] != null) {
                element.textContent = t()[key];
            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (t()[key] != null) {
                element.placeholder = t()[key];
            }

        });
}


function applyLanguage(language = getLanguage()) {

    language =
        language === "en"
            ? "en"
            : "de";

    const tr = translations[language];

    document.documentElement.lang = language;


    const select = $("languageSelect");

    if (select) {
        select.value = language;
    }


    /* Main text elements */

    const textMap = {

        subtitle: tr.subtitle,

        accountTitle: tr.accountTitle,

        settingsTitle: tr.settings,

        languageLabel: tr.language,

        currencyTitle: tr.currency,

        connectionTitle: tr.connection,

        arrivalLabel: tr.arrival,

        departureLabel: tr.departure,

        timezoneTitle: tr.timezone,

        timezoneDateLabel: tr.timezoneDate,

        timezoneTimeLabel: tr.timezoneTime,

        fromTimezoneLabel: tr.fromTimezone,

        toTimezoneLabel: tr.toTimezone,

        budgetTitle: tr.budget,

        accountModalTitle: tr.accountTitle,

        welcomeMessage: tr.welcome,

        airlineFinderTitle: tr.airlineFinder,

        airlineFinderDescription:
            tr.airlineDescription,

        airlineDestinationLabel:
            tr.airlineDestination,

        airlinePriorityLabel:
            tr.airlinePriority
    };


    Object
        .entries(textMap)
        .forEach(([id, value]) => {

            setText(id, value);

        });


    /* Placeholders */

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
            setPlaceholder(id, tr[id]);
        }

    });


    /* Buttons */

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


    /* Results */

    const currencyResult =
        $("currencyResult");

    if (
        currencyResult &&
        !currencyResult.dataset.calculated
    ) {
        currencyResult.textContent =
            tr.currencyResult;
    }


    const connectionResult =
        $("connectionResult");

    if (
        connectionResult &&
        !connectionResult.dataset.calculated
    ) {
        connectionResult.textContent =
            tr.enterTimes;
    }


    const timezoneResult =
        $("timezoneResult");

    if (
        timezoneResult &&
        !timezoneResult.dataset.calculated
    ) {
        timezoneResult.textContent =
            tr.timezoneResult;
    }


    const budgetResult =
        $("budgetResult");

    if (
        budgetResult &&
        !budgetResult.dataset.calculated
    ) {
        budgetResult.textContent =
            tr.budgetResult;
    }


    translateDataAttributes();

    updateCardTeasers();

    updateAirlineFinderLanguage();

    updateAccountView();
}


/* =========================================================
   TOOL CARD TRANSLATIONS
   ========================================================= */

function updateCardTeasers() {

    const tr = t();

    const cards = {

        settingsCard: {
            title: tr.settings,
            description:
                getLanguage() === "en"
                    ? "Language and app settings"
                    : "Sprache und App-Einstellungen"
        },

        currencyCard: {
            title: tr.currency,
            description:
                getLanguage() === "en"
                    ? "Convert currencies worldwide quickly"
                    : "Währungen weltweit schnell umrechnen"
        },

        connectionCard: {
            title: tr.connection,
            description:
                getLanguage() === "en"
                    ? "Check your connection time between flights"
                    : "Prüfe deine Umsteigezeit zwischen Flügen"
        },

        timezoneCard: {
            title: tr.timezone,
            description:
                getLanguage() === "en"
                    ? "Compare times around the world"
                    : "Uhrzeiten weltweit vergleichen"
        },

        budgetCard: {
            title: tr.budget,
            description:
                getLanguage() === "en"
                    ? "Plan and calculate your travel costs"
                    : "Plane und berechne deine Reisekosten"
        }
    };


    Object
        .entries(cards)
        .forEach(([id, data]) => {

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

        });


    /* Airline Finder */

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
   CURRENCY CONVERTER
   ========================================================= */

const CURRENCY_API =
    "https://open.er-api.com/v6/latest/EUR";

let currencyRates = null;


async function loadCurrencies() {

    const from = $("fromCurrency");

    const to = $("toCurrency");

    if (!from || !to) {
        return;
    }


    const oldFrom =
        from.value || "EUR";

    const oldTo =
        to.value || "IDR";


    from.innerHTML =
        `<option value="">
            ${t().loadingCurrencies}
        </option>`;

    to.innerHTML =
        `<option value="">
            ${t().loadingCurrencies}
        </option>`;


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

    }

    catch (error) {

        console.error(
            "TravelMate currency error:",
            error
        );


        currencyRates = null;


        from.innerHTML =
            `<option value="EUR">
                EUR – Euro
            </option>`;


        to.innerHTML =
            `<option value="IDR">
                IDR – Indonesian Rupiah
            </option>`;
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

    }

    catch (error) {}

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

        const optionFrom =
            document.createElement(
                "option"
            );

        const optionTo =
            document.createElement(
                "option"
            );


        optionFrom.value = code;
        optionTo.value = code;


        const text =
            `${code} – ${currencyName(code)}`;


        optionFrom.textContent =
            text;

        optionTo.textContent =
            text;


        from.appendChild(
            optionFrom
        );

        to.appendChild(
            optionTo
        );
    });


    from.value =
        codes.includes(previousFrom)
            ? previousFrom
            : codes.includes("EUR")
                ? "EUR"
                : codes[0];


    to.value =
        codes.includes(previousTo)
            ? previousTo
            : codes.includes("IDR")
                ? "IDR"
                : codes[1] || codes[0];


    addCurrencyAttribution();
}


function addCurrencyAttribution() {

    const result =
        $("currencyResult");


    if (!result) {
        return;
    }


    let attribution =
        $("exchangeRateAttribution");


    if (!attribution) {

        attribution =
            document.createElement(
                "small"
            );

        attribution.id =
            "exchangeRateAttribution";


        result.insertAdjacentElement(
            "afterend",
            attribution
        );
    }


    attribution.innerHTML =
        `${t().ratesBy} 
        <a 
            href="https://www.exchangerate-api.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            ExchangeRate-API
        </a>`;
}


function formatNumber(value) {

    return Number(value).toLocaleString(
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


    return Number(value).toLocaleString(
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


    const converted =
        value * (b / a);


    result.textContent =
        `${formatNumber(value)} ${from.value} = ${formatConverted(converted, to.value)} ${to.value}`;


    result.dataset.calculated =
        "true";
}


/* =========================================================
   CONNECTION CALCULATOR
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


    const arrivalMinutes =
        arrivalHour * 60 +
        arrivalMinute;


    let departureMinutes =
        departureHour * 60 +
        departureMinute;


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


    if (difference >= 120) {

        status =
            t().goodBuffer;

    }

    else if (difference >= 60) {

        status =
            t().tight;

    }

    else {

        status =
            t().veryTight;
    }


    result.innerHTML =
        `<strong>${status}</strong>
         <br>
         ${t().connectionTime}: 
         ${hours} ${t().hours} 
         ${minutes} ${t().minutes}`;


    result.dataset.calculated =
        "true";
}


/* =========================================================
   TIME ZONE CALCULATOR
   ========================================================= */

function getAllTimezones() {

    if (
        typeof Intl !== "undefined" &&
        typeof Intl.supportedValuesOf ===
            "function"
    ) {

        try {

            return Intl.supportedValuesOf(
                "timeZone"
            );

        }

        catch (error) {}
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

            const optionFrom =
                document.createElement(
                    "option"
                );

            const optionTo =
                document.createElement(
                    "option"
                );


            optionFrom.value =
                zone;

            optionTo.value =
                zone;


            optionFrom.textContent =
                timezoneLabel(zone);

            optionTo.textContent =
                timezoneLabel(zone);


            from.appendChild(
                optionFrom
            );

            to.appendChild(
                optionTo
            );
        });


    from.value =
        [
            ...from.options
        ].some(
            option =>
                option.value === oldFrom
        )
            ? oldFrom
            : "Europe/Berlin";


    to.value =
        [
            ...to.options
        ].some(
            option =>
                option.value === oldTo
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
        ).formatToParts(date);


    const values = {};


    parts.forEach(part => {

        if (
            part.type !== "literal"
        ) {
            values[
                part.type
            ] = part.value;
        }

    });


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
            )
            -
            getTimezoneOffset(
                new Date(timestamp),
                timeZone
            );
    }


    return new Date(timestamp);
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
                timeZone: to.value,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: "h23"
            }
        ).format(utc);


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
            `${now.getFullYear()}-${String(
                now.getMonth() + 1
            ).padStart(2, "0")}-${String(
                now.getDate()
            ).padStart(2, "0")`;
    }


    if (
        time &&
        !time.value
    ) {

        time.value =
            `${String(
                now.getHours()
            ).padStart(2, "0")}:${String(
                now.getMinutes()
            ).padStart(2, "0")}`;
    }
}


/* =========================================================
   TRAVEL BUDGET
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
        `${t().total}: ${total.toLocaleString(
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
            )
        &&
        password ===
            localStorage.getItem(
                "travelmatePassword"
            )
    ) {

        localStorage.setItem(
            "travelmateLoggedIn",
            "true"
        );


        message.textContent = "";


        updateAccountView();

    }

    else {

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

    }

    else {

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
   AIRLINE FINDER DATABASE
   ========================================================= */

const airlineDatabase = {

    "new-york": [

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "premium",
                "comfort"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "value",
                "service"
            ]
        ],

        [
            "Emirates",
            "4.7",
            "🇦🇪",
            [
                "comfort",
                "entertainment"
            ]
        ]
    ],


    london: [

        [
            "Singapore Airlines",
            "4.9",
            "🇸🇬",
            [
                "premium",
                "comfort"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "service",
                "value"
            ]
        ],

        [
            "British Airways",
            "4.5",
            "🇬🇧",
            [
                "network",
                "europe"
            ]
        ]
    ],


    paris: [

        [
            "Air France",
            "4.7",
            "🇫🇷",
            [
                "europe",
                "premium"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "service",
                "comfort"
            ]
        ],

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "premium",
                "longHaul"
            ]
        ]
    ],


    tokyo: [

        [
            "ANA",
            "4.9",
            "🇯🇵",
            [
                "service",
                "japan"
            ]
        ],

        [
            "Japan Airlines",
            "4.8",
            "🇯🇵",
            [
                "economy",
                "service"
            ]
        ],

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "comfort",
                "longHaul"
            ]
        ]
    ],


    dubai: [

        [
            "Emirates",
            "4.9",
            "🇦🇪",
            [
                "comfort",
                "entertainment"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "service",
                "businessClass"
            ]
        ],

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "premium",
                "comfort"
            ]
        ]
    ],


    singapore: [

        [
            "Singapore Airlines",
            "4.9",
            "🇸🇬",
            [
                "premium",
                "bestOverall"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "service",
                "comfort"
            ]
        ],

        [
            "Emirates",
            "4.7",
            "🇦🇪",
            [
                "entertainment",
                "comfort"
            ]
        ]
    ],


    sydney: [

        [
            "Qantas",
            "4.8",
            "🇦🇺",
            [
                "australia",
                "service"
            ]
        ],

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "comfort",
                "longHaul"
            ]
        ],

        [
            "Qatar Airways",
            "4.7",
            "🇶🇦",
            [
                "value",
                "service"
            ]
        ]
    ],


    toronto: [

        [
            "Air Canada",
            "4.6",
            "🇨🇦",
            [
                "canada",
                "network"
            ]
        ],

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "comfort",
                "service"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "service",
                "longHaul"
            ]
        ]
    ],


    bangkok: [

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "service",
                "comfort"
            ]
        ],

        [
            "Thai Airways",
            "4.7",
            "🇹🇭",
            [
                "thailand",
                "service"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "value",
                "comfort"
            ]
        ]
    ],


    jakarta: [

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "premium",
                "comfort"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "value",
                "service"
            ]
        ],

        [
            "Garuda Indonesia",
            "4.6",
            "🇮🇩",
            [
                "indonesia",
                "service"
            ]
        ]
    ],


    frankfurt: [

        [
            "Lufthansa",
            "4.6",
            "🇩🇪",
            [
                "network",
                "europe"
            ]
        ],

        [
            "Singapore Airlines",
            "4.8",
            "🇸🇬",
            [
                "premium",
                "longHaul"
            ]
        ],

        [
            "Qatar Airways",
            "4.8",
            "🇶🇦",
            [
                "service",
                "comfort"
            ]
        ]
    ]
};


/* =========================================================
   AIRLINE SCORES
   ========================================================= */

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
        airlineScores[name]?.[
            priority
        ]
        ??
        airlineScores[name]?.overall
        ??
        80
    );
}


/* =========================================================
   AIRLINE TAG TRANSLATION
   ========================================================= */

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

    const tr = t();


    /* Finder card */

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


    /* Finder modal */

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


    /* Priority selector */

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


    /* Re-render existing results */

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
        $("airlineDestination")?.value;


    const priority =
        $("airlinePriority")?.value ||
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
        .map(airline => ({

            name:
                airline[0],

            rating:
                airline[1],

            logo:
                airline[2],

            tags:
                airline[3]

        }))
        .sort(
            (a, b) =>
                airlineScore(
                    b.name,
                    priority
                )
                -
                airlineScore(
                    a.name,
                    priority
                )
        );


    /* No result */

    if (!results.length) {

        container.innerHTML =
            `
            <h3 class="airline-results-title">
                ${t().airlineResults}
            </h3>

            <p>
                ${t().noAirlines}
            </p>
            `;


        container.dataset.hasResults =
            "true";


        return;
    }


    /* Results */

    container.innerHTML =
        `
        <h3 class="airline-results-title">
            ${t().airlineResults}
        </h3>
        `
        +

        results
            .slice(0, 3)
            .map(
                (airline, index) => {

                    const medal =
                        index === 0
                            ? "🥇"
                            : index === 1
                                ? "🥈"
                                : "🥉";


                    const topPick =
                        index === 0
                            ? `${t().topPick} · `
                            : "";


                    const tags =
                        airline.tags
                            .map(
                                tag =>
                                    `
                                    <span class="airline-tag">
                                        ${translateAirlineTag(tag)}
                                    </span>
                                    `
                            )
                            .join("");


                    return `
                    <div class="airline-result">

                        <div class="airline-rank">
                            ${medal}
                        </div>

                        <div class="airline-logo">
                            ${airline.logo}
                        </div>

                        <div class="airline-info">

                            <div class="airline-name">
                                ${topPick}${airline.name}
                            </div>

                            <div class="airline-rating">
                                ${t().rating}: 
                                ${airline.rating}/5 · 
                                ${airlineScore(
                                    airline.name,
                                    priority
                                )}/100
                            </div>

                            <div class="airline-tags">
                                ${tags}
                            </div>

                        </div>

                    </div>
                    `;
                }
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


    /* Keyboard */

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


    /* Close by clicking background */

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


/* =========================================================
   GLOBAL EVENTS
   ========================================================= */

window.addEventListener(
    "click",
    event => {

        const modal =
            $("accountModal");


        if (
            modal &&
            event.target === modal
        ) {

            closeAccount();
        }
    }
);


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


/* =========================================================
   START TRAVELMATE
   ========================================================= */

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


        applyLanguage(
            language
        );


        setTimezoneDefaults();


        loadTimezones();


        initializeAirlineFinder();


        await loadCurrencies();


        updateAccountView();


        updateAirlineFinderLanguage();

    }
);
/* =========================================================
   TRAVELMATE - FINAL TRANSLATION FIX
   Übersetzt wirklich ALLE sichtbaren Texte
   passend zur aktuellen index.html
   ========================================================= */

(function () {

    const TM_TRANSLATIONS = {

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

            settings: "Einstellungen",
            settingsDescription:
                "Sprache und App-Einstellungen",
            language: "Sprache",

            currency: "Währungsrechner",
            currencyDescription:
                "Währungen weltweit schnell umrechnen",
            amount: "Betrag eingeben",
            loadingCurrencies:
                "Währungen werden geladen...",
            convert: "Umrechnen",
            currencyResult:
                "Ergebnis erscheint hier",

            connection: "Anschlussrechner",
            connectionDescription:
                "Prüfe deine Umsteigezeit zwischen Flügen",
            arrival: "Ankunftszeit",
            departure: "Abflugzeit",
            checkConnection:
                "Anschluss prüfen",
            enterTimes:
                "Gib deine Flugzeiten ein",

            timezone: "Zeitzonenrechner",
            timezoneDescription:
                "Uhrzeiten weltweit vergleichen",
            timezoneDate: "Datum",
            timezoneTime: "Uhrzeit",
            fromTimezone:
                "Ausgangs-Zeitzone",
            toTimezone:
                "Ziel-Zeitzone",
            convertTimezone:
                "Zeitzone umrechnen",
            timezoneResult:
                "Ergebnis erscheint hier",

            budget: "Reisebudget",
            budgetDescription:
                "Plane und berechne deine Reisekosten",
            flight: "Flugkosten €",
            hotel: "Unterkunft €",
            food: "Essen €",
            transport: "Transport €",
            calculateBudget:
                "Budget berechnen",
            budgetResult:
                "Dein Reisebudget",

            airlineFinder:
                "Airline Finder",
            airlineDescription:
                "Finde die besten Airlines für dein Reiseziel.",
            airlineDestination:
                "Reiseziel",
            airlinePriority:
                "Priorität",
            airlineSearch:
                "✈️ Airlines finden",

            bestOverall:
                "⭐ Beste Gesamtqualität",
            bestEconomy:
                "💰 Economy / Preis-Leistung",
            bestBusiness:
                "💎 Business Class",
            bestComfort:
                "🛋️ Komfort",

            close:
                "Schließen"
        },

        en: {
            subtitle:
                "Your journey. Made easier.",

            accountTitle:
                "👤 My Account",
            accountStatus:
                "Not logged in",
            login:
                "Sign in",
            createAccount:
                "Create account",
            logout:
                "Sign out",
            email:
                "Email address",
            password:
                "Password",
            welcome:
                "Welcome to TravelMate! ✈️",

            settings:
                "Settings",
            settingsDescription:
                "Language and app settings",
            language:
                "Language",

            currency:
                "Currency Converter",
            currencyDescription:
                "Convert currencies worldwide quickly",
            amount:
                "Enter amount",
            loadingCurrencies:
                "Loading currencies...",
            convert:
                "Convert",
            currencyResult:
                "Result appears here",

            connection:
                "Connection Calculator",
            connectionDescription:
                "Check your connection time between flights",
            arrival:
                "Arrival time",
            departure:
                "Departure time",
            checkConnection:
                "Check connection",
            enterTimes:
                "Enter your flight times",

            timezone:
                "Time Zone Converter",
            timezoneDescription:
                "Compare times around the world",
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

            budget:
                "Travel Budget",
            budgetDescription:
                "Plan and calculate your travel costs",
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

            airlineFinder:
                "Airline Finder",
            airlineDescription:
                "Find the best airlines for your destination.",
            airlineDestination:
                "Destination",
            airlinePriority:
                "Priority",
            airlineSearch:
                "✈️ Find Airlines",

            bestOverall:
                "⭐ Best Overall",
            bestEconomy:
                "💰 Economy / Best Value",
            bestBusiness:
                "💎 Business Class",
            bestComfort:
                "🛋️ Comfort",

            close:
                "Close"
        }
    };


    /* =====================================================
       HELPER
       ===================================================== */

    function tmLang() {

        return localStorage.getItem(
            "travelmateLanguage"
        ) === "en"
            ? "en"
            : "de";
    }


    function tmT() {

        return TM_TRANSLATIONS[
            tmLang()
        ];
    }


    function tmText(
        selector,
        text
    ) {

        const element =
            document.querySelector(
                selector
            );

        if (element) {
            element.textContent = text;
        }
    }


    function tmPlaceholder(
        selector,
        text
    ) {

        const element =
            document.querySelector(
                selector
            );

        if (element) {
            element.placeholder = text;
        }
    }


    function tmButton(
        selector,
        text
    ) {

        const button =
            document.querySelector(
                selector
            );

        if (button) {
            button.textContent = text;
        }
    }


    /* =====================================================
       TRANSLATE EVERYTHING
       ===================================================== */

    function translateEverything() {

        const t = tmT();


        /* ---------------------------------------------
           HEADER
           --------------------------------------------- */

        tmText(
            "#subtitle",
            t.subtitle
        );


        /* ---------------------------------------------
           ACCOUNT CARD
           --------------------------------------------- */

        tmText(
            "#accountTitle",
            t.accountTitle
        );

        tmText(
            "#accountStatus",
            t.accountStatus
        );

        tmButton(
            'button[onclick="openAccount()"]',
            t.login
        );


        /* ---------------------------------------------
           SETTINGS
           --------------------------------------------- */

        tmText(
            "#settingsTitle",
            t.settings
        );

        const settingsCard =
            document.querySelector(
                "#settingsCard"
            );

        if (settingsCard) {

            const description =
                settingsCard.querySelector(
                    ".tool-description"
                );

            if (description) {
                description.textContent =
                    t.settingsDescription;
            }
        }


        tmText(
            "#languageLabel",
            t.language
        );


        /* ---------------------------------------------
           CURRENCY CARD
           --------------------------------------------- */

        tmText(
            "#currencyTitle",
            `💱 ${t.currency}`
        );


        const currencyCard =
            document.querySelector(
                "#currencyCard"
            );

        if (currencyCard) {

            const description =
                currencyCard.querySelector(
                    ".tool-description"
                );

            if (description) {

                description.textContent =
                    t.currencyDescription;
            }
        }


        tmPlaceholder(
            "#amount",
            t.amount
        );


        tmButton(
            'button[onclick="convertCurrency()"]',
            t.convert
        );


        const currencyResult =
            document.querySelector(
                "#currencyResult"
            );

        if (
            currencyResult &&
            !currencyResult.dataset.calculated
        ) {

            currencyResult.textContent =
                t.currencyResult;
        }


        /* ---------------------------------------------
           CONNECTION CARD
           --------------------------------------------- */

        tmText(
            "#connectionTitle",
            `✈️ ${t.connection}`
        );


        const connectionCard =
            document.querySelector(
                "#connectionCard"
            );

        if (connectionCard) {

            const description =
                connectionCard.querySelector(
                    ".tool-description"
                );

            if (description) {

                description.textContent =
                    t.connectionDescription;
            }
        }


        tmText(
            "#arrivalLabel",
            t.arrival
        );

        tmText(
            "#departureLabel",
            t.departure
        );


        tmButton(
            'button[onclick="calculateConnection()"]',
            t.checkConnection
        );


        const connectionResult =
            document.querySelector(
                "#connectionResult"
            );

        if (
            connectionResult &&
            !connectionResult.dataset.calculated
        ) {

            connectionResult.textContent =
                t.enterTimes;
        }


        /* ---------------------------------------------
           TIME ZONE CARD
           --------------------------------------------- */

        tmText(
            "#timezoneTitle",
            `🕐 ${t.timezone}`
        );


        const timezoneCard =
            document.querySelector(
                "#timezoneCard"
            );

        if (timezoneCard) {

            const description =
                timezoneCard.querySelector(
                    ".tool-description"
                );

            if (description) {

                description.textContent =
                    t.timezoneDescription;
            }
        }


        tmText(
            "#timezoneDateLabel",
            t.timezoneDate
        );

        tmText(
            "#timezoneTimeLabel",
            t.timezoneTime
        );

        tmText(
            "#fromTimezoneLabel",
            t.fromTimezone
        );

        tmText(
            "#toTimezoneLabel",
            t.toTimezone
        );


        tmButton(
            'button[onclick="calculateTimezone()"]',
            t.convertTimezone
        );


        const timezoneResult =
            document.querySelector(
                "#timezoneResult"
            );

        if (
            timezoneResult &&
            !timezoneResult.dataset.calculated
        ) {

            timezoneResult.textContent =
                t.timezoneResult;
        }


        /* ---------------------------------------------
           BUDGET CARD
           --------------------------------------------- */

        tmText(
            "#budgetTitle",
            `💰 ${t.budget}`
        );


        const budgetCard =
            document.querySelector(
                "#budgetCard"
            );

        if (budgetCard) {

            const description =
                budgetCard.querySelector(
                    ".tool-description"
                );

            if (description) {

                description.textContent =
                    t.budgetDescription;
            }
        }


        tmPlaceholder(
            "#flight",
            t.flight
        );

        tmPlaceholder(
            "#hotel",
            t.hotel
        );

        tmPlaceholder(
            "#food",
            t.food
        );

        tmPlaceholder(
            "#transport",
            t.transport
        );


        tmButton(
            'button[onclick="calculateBudget()"]',
            t.calculateBudget
        );


        const budgetResult =
            document.querySelector(
                "#budgetResult"
            );

        if (
            budgetResult &&
            !budgetResult.dataset.calculated
        ) {

            budgetResult.textContent =
                t.budgetResult;
        }


        /* ---------------------------------------------
           AIRLINE FINDER
           --------------------------------------------- */

        tmText(
            ".airline-finder-text h2",
            t.airlineFinder
        );

        tmText(
            ".airline-finder-text p",
            t.airlineDescription
        );


        /* Airline Finder modal */

        const airlineModal =
            document.querySelector(
                "#airlineFinderModal"
            );

        if (airlineModal) {

            const title =
                airlineModal.querySelector(
                    ".modal-content h2"
                );

            if (title) {

                title.textContent =
                    `✈️ ${t.airlineFinder}`;
            }


            const subtitle =
                airlineModal.querySelector(
                    ".airline-modal-subtitle"
                );

            if (subtitle) {

                subtitle.textContent =
                    t.airlineDescription;
            }


            const labels =
                airlineModal.querySelectorAll(
                    "label"
                );


            if (labels[0]) {

                labels[0].textContent =
                    t.airlineDestination;
            }


            if (labels[1]) {

                labels[1].textContent =
                    t.airlinePriority;
            }


            tmButton(
                'button[onclick="findAirlines()"]',
                t.airlineSearch
            );


            /* Priority dropdown */

            const priority =
                document.querySelector(
                    "#airlinePriority"
                );

            if (priority) {

                const overall =
                    priority.querySelector(
                        'option[value="overall"]'
                    );

                const economy =
                    priority.querySelector(
                        'option[value="economy"]'
                    );

                const business =
                    priority.querySelector(
                        'option[value="business"]'
                    );

                const comfort =
                    priority.querySelector(
                        'option[value="comfort"]'
                    );


                if (overall) {

                    overall.textContent =
                        t.bestOverall;
                }


                if (economy) {

                    economy.textContent =
                        t.bestEconomy;
                }


                if (business) {

                    business.textContent =
                        t.bestBusiness;
                }


                if (comfort) {

                    comfort.textContent =
                        t.bestComfort;
                }
            }
        }


        /* ---------------------------------------------
           ACCOUNT MODAL
           --------------------------------------------- */

        tmText(
            "#accountModalTitle",
            `👤 TravelMate Account`
        );


        tmPlaceholder(
            "#email",
            t.email
        );

        tmPlaceholder(
            "#password",
            t.password
        );


        tmButton(
            'button[onclick="createAccount()"]',
            t.createAccount
        );


        tmButton(
            'button[onclick="login()"]',
            t.login
        );


        tmButton(
            'button[onclick="logout()"]',
            t.logout
        );


        tmText(
            "#welcomeMessage",
            t.welcome
        );


        const closeButtons =
            document.querySelectorAll(
                "#accountModal .close-button, #airlineFinderModal .close-button"
            );


        closeButtons.forEach(
            button => {

                button.setAttribute(
                    "aria-label",
                    t.close
                );
            }
        );
    }


    /* =====================================================
       LANGUAGE CHANGE
       ===================================================== */

    const oldChangeLanguage =
        window.changeLanguage;


    window.changeLanguage =
        function () {

            const select =
                document.querySelector(
                    "#languageSelect"
                );


            if (!select) {
                return;
            }


            const language =
                select.value === "en"
                    ? "en"
                    : "de";


            localStorage.setItem(
                "travelmateLanguage",
                language
            );


            /*
             * Erst das vorhandene TravelMate-System
             * ausführen.
             */
            if (
                typeof oldChangeLanguage ===
                "function"
            ) {

                try {
                    oldChangeLanguage();
                }

                catch (error) {

                    console.warn(
                        "Original language function:",
                        error
                    );
                }
            }


            /*
             * Danach ALLE Texte aus unserem
             * vollständigen Übersetzungssystem
             * setzen.
             */
            setTimeout(
                function () {

                    translateEverything();

                },
                0
            );
        };


    /* =====================================================
       INITIAL TRANSLATION
       ===================================================== */

    function initializeTranslation() {

        /*
         * Warten, bis das komplette HTML vorhanden ist.
         */

        translateEverything();


        /*
         * Falls das bestehende Script
         * anschließend noch Texte setzt,
         * nochmal übersetzen.
         */

        setTimeout(
            translateEverything,
            100
        );

        setTimeout(
            translateEverything,
            500
        );
    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTranslation
        );

    } else {

        initializeTranslation();
    }


})();
/* =========================================================
   TRAVELMATE - FINAL LANGUAGE PATCH
   Behebt die fehlenden Übersetzungen der aktuellen HTML-Version
   ========================================================= */

(function () {

    function TM_translateAll() {

        const lang =
            localStorage.getItem("travelmateLanguage") === "en"
                ? "en"
                : "de";

        const t = translations[lang];

        if (!t) return;


        /* =====================================================
           1. KARTEN-BESCHREIBUNGEN
           ===================================================== */

        const descriptions = document.querySelectorAll(
            ".tool-card .tool-description"
        );

        const descriptionTexts = lang === "en"
            ? [
                "Language and app settings",
                "Convert currencies worldwide quickly",
                "Check your connection time between flights",
                "Compare times around the world",
                "Plan and calculate your travel costs"
            ]
            : [
                "Sprache und App-Einstellungen",
                "Währungen weltweit schnell umrechnen",
                "Prüfe deine Umsteigezeit zwischen Flügen",
                "Uhrzeiten weltweit vergleichen",
                "Plane und berechne deine Reisekosten"
            ];

        descriptions.forEach(function (element, index) {

            if (descriptionTexts[index]) {
                element.textContent =
                    descriptionTexts[index];
            }

        });


        /* =====================================================
           2. AIRLINE FINDER TEASER
           ===================================================== */

        const airlineCard =
            document.querySelector(
                ".airline-finder-card"
            );

        if (airlineCard) {

            const title =
                airlineCard.querySelector("h2");

            const description =
                airlineCard.querySelector("p");

            if (title) {

                title.textContent =
                    t.airlineFinder;

            }

            if (description) {

                description.textContent =
                    t.airlineDescription;

            }

        }


        /* =====================================================
           3. AIRLINE FINDER MODAL
           ===================================================== */

        const modal =
            document.getElementById(
                "airlineFinderModal"
            );

        if (modal) {

            const title =
                modal.querySelector(
                    ".modal-content > h2"
                );

            const description =
                modal.querySelector(
                    ".airline-modal-subtitle"
                );

            const labels =
                modal.querySelectorAll(
                    "label"
                );

            const searchButton =
                modal.querySelector(
                    'button[onclick="findAirlines()"]'
                );

            if (title) {

                title.textContent =
                    "✈️ " +
                    t.airlineFinder;

            }

            if (description) {

                description.textContent =
                    t.airlineDescription;

            }

            if (labels[0]) {

                labels[0].textContent =
                    t.airlineDestination;

            }

            if (labels[1]) {

                labels[1].textContent =
                    t.airlinePriority;

            }

            if (searchButton) {

                searchButton.textContent =
                    t.airlineSearch;

            }


            /* ---------------------------------------------
               PRIORITY DROPDOWN
               --------------------------------------------- */

            const priority =
                document.getElementById(
                    "airlinePriority"
                );

            if (priority) {

                const options =
                    priority.options;


                if (options[0]) {

                    options[0].textContent =
                        t.bestOverall;

                }

                if (options[1]) {

                    options[1].textContent =
                        t.bestEconomy;

                }

                if (options[2]) {

                    options[2].textContent =
                        t.bestBusiness;

                }

                if (options[3]) {

                    options[3].textContent =
                        t.bestComfort;

                }

            }

        }


        /* =====================================================
           4. ACCOUNT STATUS
           ===================================================== */

        const accountStatus =
            document.getElementById(
                "accountStatus"
            );

        if (
            accountStatus &&
            !localStorage.getItem(
                "travelmateUser"
            )
        ) {

            accountStatus.textContent =
                t.accountStatus;

        }


        /* =====================================================
           5. WÄHRUNGSRECHNER - LOADING TEXT
           ===================================================== */

        const fromCurrency =
            document.getElementById(
                "fromCurrency"
            );

        const toCurrency =
            document.getElementById(
                "toCurrency"
            );

        if (
            fromCurrency &&
            fromCurrency.options.length === 1 &&
            fromCurrency.options[0].value === ""
        ) {

            fromCurrency.options[0].textContent =
                t.loadingCurrencies;

        }

        if (
            toCurrency &&
            toCurrency.options.length === 1 &&
            toCurrency.options[0].value === ""
        ) {

            toCurrency.options[0].textContent =
                t.loadingCurrencies;

        }


        /* =====================================================
           6. CLOSE-BUTTONS
           ===================================================== */

        document
            .querySelectorAll(
                ".close-button"
            )
            .forEach(function (button) {

                button.setAttribute(
                    "aria-label",
                    lang === "en"
                        ? "Close"
                        : "Schließen"
                );

            });


        /* =====================================================
           7. HTML-SPRACHE
           ===================================================== */

        document.documentElement.lang =
            lang;

    }


    /* =========================================================
       LANGUAGE SELECT ÜBERWACHEN
       ========================================================= */

    const languageSelect =
        document.getElementById(
            "languageSelect"
        );


    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            function () {

                setTimeout(
                    TM_translateAll,
                    20
                );

                setTimeout(
                    TM_translateAll,
                    200
                );

            }
        );

    }


    /* =========================================================
       NACH DEM LADEN
       ========================================================= */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                setTimeout(
                    TM_translateAll,
                    50
                );

                setTimeout(
                    TM_translateAll,
                    300
                );

            }
        );

    } else {

        TM_translateAll();

    }


    /* =========================================================
       AUCH BEI ÖFFNEN DES AIRLINE FINDERS
       ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            const airlineCard =
                event.target.closest(
                    ".airline-finder-card"
                );

            if (airlineCard) {

                setTimeout(
                    TM_translateAll,
                    50
                );

            }

        }
    );


    /* =========================================================
       GLOBALE FUNKTION
       ========================================================= */

    window.TravelMateTranslate =
        TM_translateAll;

})();
