/* =========================================================
   TRAVELMATE
   COMPLETE JAVASCRIPT
   German 🇩🇪 / English 🇬🇧
   ========================================================= */


/* =========================================================
   1. TRANSLATIONS
   ========================================================= */

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
        language: "Sprache",
        settingsDescription:
            "Sprache und App-Einstellungen",

        currency: "💱 Währungsrechner",
        currencyDescription:
            "Währungen weltweit schnell umrechnen",
        amount: "Betrag eingeben",
        loadingCurrencies:
            "Währungen werden geladen...",
        convert: "Umrechnen",
        currencyResult:
            "Ergebnis erscheint hier",

        connection: "✈️ Anschlussrechner",
        connectionDescription:
            "Prüfe deine Umsteigezeit zwischen Flügen",
        arrival: "Ankunftszeit",
        departure: "Abflugzeit",
        checkConnection:
            "Anschluss prüfen",
        enterTimes:
            "Gib deine Flugzeiten ein",

        timezone: "🕐 Zeitzonenrechner",
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
        timezoneError:
            "Bitte Datum und Uhrzeit eingeben.",

        budget: "💰 Reisebudget",
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

        total: "Gesamt",
        connectionTime:
            "Umsteigezeit",
        hours: "Std.",
        minutes: "Min.",

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

        ratesBy:
            "Kurse von",

        /* AIRLINE FINDER */

        airlineFinder:
            "Airline Finder",

        airlineDescription:
            "Finde die besten Airlines für dein Reiseziel.",

        airlineDestination:
            "Reiseziel",

        airlinePriority:
            "Priorität",

        airlineSearch:
            "🔎 Airlines finden",

        airlineResults:
            "Top 3 Airlines",

        bestOverall:
            "⭐ Beste Gesamtqualität",

        bestValue:
            "💰 Bestes Preis-Leistungs-Verhältnis",

        bestEconomy:
            "🧳 Beste Economy",

        bestBusiness:
            "👑 Beste Business Class",

        bestComfort:
            "🛋️ Bester Komfort",

        bestWifi:
            "📶 Bestes WLAN",

        bestConnections:
            "🔄 Beste Verbindungen",

        topPick:
            "⭐ Top-Auswahl",

        service:
            "Service",

        comfort:
            "Komfort",

        premium:
            "Premium-Service",

        entertainment:
            "Unterhaltung",

        longHaul:
            "Langstrecke",

        value:
            "Preis-Leistung",

        europe:
            "Europa",

        network:
            "Großes Streckennetz",

        economy:
            "Economy",

        businessClass:
            "Business Class",

        japan:
            "Japan",

        australia:
            "Australien",

        canada:
            "Kanada",

        thailand:
            "Thailand",

        indonesia:
            "Indonesien",

        bestOverallShort:
            "Beste Gesamtqualität"
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
            "⚙️ Settings",

        language:
            "Language",

        settingsDescription:
            "Language and app settings",

        currency:
            "💱 Currency Converter",

        currencyDescription:
            "Convert currencies around the world",

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
            "🕐 Time Zone Converter",

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

        timezoneError:
            "Please enter a date and time.",

        budget:
            "💰 Travel Budget",

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

        connectionTime:
            "Connection time",

        hours:
            "h",

        minutes:
            "min",

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

        ratesBy:
            "Rates by",

        /* AIRLINE FINDER */

        airlineFinder:
            "Airline Finder",

        airlineDescription:
            "Find the best airlines for your destination.",

        airlineDestination:
            "Destination",

        airlinePriority:
            "Priority",

        airlineSearch:
            "🔎 Find Airlines",

        airlineResults:
            "Top 3 Airlines",

        bestOverall:
            "⭐ Best Overall",

        bestValue:
            "💰 Best Value for Money",

        bestEconomy:
            "🧳 Best Economy",

        bestBusiness:
            "👑 Best Business Class",

        bestComfort:
            "🛋️ Best Comfort",

        bestWifi:
            "📶 Best Wi-Fi",

        bestConnections:
            "🔄 Best Connections",

        topPick:
            "⭐ Top Pick",

        service:
            "Service",

        comfort:
            "Comfort",

        premium:
            "Premium Service",

        entertainment:
            "Entertainment",

        longHaul:
            "Long-haul",

        value:
            "Value for money",

        europe:
            "Europe",

        network:
            "Large route network",

        economy:
            "Economy",

        businessClass:
            "Business Class",

        japan:
            "Japan",

        australia:
            "Australia",

        canada:
            "Canada",

        thailand:
            "Thailand",

        indonesia:
            "Indonesia",

        bestOverallShort:
            "Best Overall"
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

    const select =
        document.getElementById(
            "languageSelect"
        );

    if (!select) return;

    const language =
        select.value === "en"
            ? "en"
            : "de";

    localStorage.setItem(
        "travelmateLanguage",
        language
    );

    applyLanguage(language);

    loadCurrencies();

    loadTimezones();

    updateAirlineFinderLanguage();

}


/* =========================================================
   3. DOM HELPERS
   ========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

}


function setPlaceholder(
    id,
    value
) {

    const element =
        document.getElementById(id);

    if (element) {

        element.placeholder =
            value;

    }

}


function setButton(
    selector,
    value
) {

    const button =
        document.querySelector(
            selector
        );

    if (button) {

        button.textContent =
            value;

    }

}


/* =========================================================
   4. APPLY LANGUAGE
   ========================================================= */

function applyLanguage(language) {

    const t =
        translations[language] ||
        translations.de;

    document.documentElement.lang =
        language;


    /* HEADER */

    setText(
        "subtitle",
        t.subtitle
    );


    /* ACCOUNT */

    setText(
        "accountTitle",
        t.accountTitle
    );


    setText(
        "accountModalTitle",
        t.accountTitle
    );


    setText(
        "welcomeMessage",
        t.welcome
    );


    /* SETTINGS */

    setText(
        "settingsTitle",
        t.settings
    );


    setText(
        "languageLabel",
        t.language
    );


    /* SETTINGS DESCRIPTION */

    translateTextByIdOrSelector(
        "settingsDescription",
        ".settings-description",
        t.settingsDescription
    );


    /* CURRENCY */

    setText(
        "currencyTitle",
        t.currency
    );


    translateTextByIdOrSelector(
        "currencyDescription",
        ".currency-description",
        t.currencyDescription
    );


    setPlaceholder(
        "amount",
        t.amount
    );


    /* CONNECTION */

    setText(
        "connectionTitle",
        t.connection
    );


    translateTextByIdOrSelector(
        "connectionDescription",
        ".connection-description",
        t.connectionDescription
    );


    setText(
        "arrivalLabel",
        t.arrival
    );


    setText(
        "departureLabel",
        t.departure
    );


    /* TIMEZONE */

    setText(
        "timezoneTitle",
        t.timezone
    );


    translateTextByIdOrSelector(
        "timezoneDescription",
        ".timezone-description",
        t.timezoneDescription
    );


    setText(
        "timezoneDateLabel",
        t.timezoneDate
    );


    setText(
        "timezoneTimeLabel",
        t.timezoneTime
    );


    setText(
        "fromTimezoneLabel",
        t.fromTimezone
    );


    setText(
        "toTimezoneLabel",
        t.toTimezone
    );


    /* BUDGET */

    setText(
        "budgetTitle",
        t.budget
    );


    translateTextByIdOrSelector(
        "budgetDescription",
        ".budget-description",
        t.budgetDescription
    );


    /* INPUTS */

    setPlaceholder(
        "flight",
        t.flight
    );

    setPlaceholder(
        "hotel",
        t.hotel
    );

    setPlaceholder(
        "food",
        t.food
    );

    setPlaceholder(
        "transport",
        t.transport
    );

    setPlaceholder(
        "email",
        t.email
    );

    setPlaceholder(
        "password",
        t.password
    );


    /* BUTTONS */

    setButton(
        'button[onclick="convertCurrency()"]',
        t.convert
    );


    setButton(
        'button[onclick="calculateConnection()"]',
        t.checkConnection
    );


    setButton(
        'button[onclick="calculateTimezone()"]',
        t.convertTimezone
    );


    setButton(
        'button[onclick="calculateBudget()"]',
        t.calculateBudget
    );


    setButton(
        'button[onclick="openAccount()"]',
        t.login
    );


    setButton(
        'button[onclick="createAccount()"]',
        t.createAccount
    );


    setButton(
        'button[onclick="login()"]',
        t.login
    );


    setButton(
        'button[onclick="logout()"]',
        t.logout
    );


    /* RESULTS */

    const currencyResult =
        document.getElementById(
            "currencyResult"
        );

    if (
        currencyResult &&
        !currencyResult.dataset.calculated
    ) {

        currencyResult.textContent =
            t.currencyResult;

    }


    const connectionResult =
        document.getElementById(
            "connectionResult"
        );

    if (
        connectionResult &&
        !connectionResult.dataset.calculated
    ) {

        connectionResult.textContent =
            t.enterTimes;

    }


    const timezoneResult =
        document.getElementById(
            "timezoneResult"
        );

    if (
        timezoneResult &&
        !timezoneResult.dataset.calculated
    ) {

        timezoneResult.textContent =
            t.timezoneResult;

    }


    const budgetResult =
        document.getElementById(
            "budgetResult"
        );

    if (
        budgetResult &&
        !budgetResult.dataset.calculated
    ) {

        budgetResult.textContent =
            t.budgetResult;

    }


    updateAccountView();

    updateAirlineFinderLanguage();

}


/* =========================================================
   EXTRA TEXT TRANSLATION
   ========================================================= */

function translateTextByIdOrSelector(
    id,
    selector,
    text
) {

    const byId =
        document.getElementById(id);

    if (byId) {

        byId.textContent =
            text;

        return;

    }

    const element =
        document.querySelector(
            selector
        );

    if (element) {

        element.textContent =
            text;

    }

}


/* =========================================================
   5. CURRENCY API
   ========================================================= */

const CURRENCY_API =
    "https://open.er-api.com/v6/latest/EUR";

let currencyRates = null;


/* =========================================================
   6. LOAD CURRENCIES
   ========================================================= */

async function loadCurrencies() {

    const from =
        document.getElementById(
            "fromCurrency"
        );

    const to =
        document.getElementById(
            "toCurrency"
        );

    if (!from || !to) return;

    const t =
        translations[
            getLanguage()
        ];


    from.innerHTML =
        `<option value="">
            ${t.loadingCurrencies}
        </option>`;


    to.innerHTML =
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


        if (!response.ok) {

            throw new Error(
                "Currency API error"
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


/* =========================================================
   7. POPULATE CURRENCIES
   ========================================================= */

function populateCurrencies() {

    const from =
        document.getElementById(
            "fromCurrency"
        );

    const to =
        document.getElementById(
            "toCurrency"
        );

    if (
        !currencyRates ||
        !from ||
        !to
    ) return;


    from.innerHTML = "";

    to.innerHTML = "";


    const codes =
        Object.keys(
            currencyRates
        ).sort();


    let names = null;


    try {

        if (
            typeof Intl !==
                "undefined" &&
            Intl.DisplayNames
        ) {

            names =
                new Intl.DisplayNames(
                    [getLanguage()],
                    {
                        type:
                            "currency"
                    }
                );

        }

    } catch (error) {

        names = null;

    }


    codes.forEach(
        code => {

            let name = code;


            if (names) {

                try {

                    name =
                        names.of(code) ||
                        code;

                } catch (error) {

                    name = code;

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


            const optionTo =
                document.createElement(
                    "option"
                );

            optionTo.value =
                code;

            optionTo.textContent =
                `${code} – ${name}`;


            from.appendChild(
                optionFrom
            );

            to.appendChild(
                optionTo
            );

        }
    );


    from.value = "EUR";

    to.value = "IDR";


    addCurrencyAttribution();

}


/* =========================================================
   8. CURRENCY ATTRIBUTION
   ========================================================= */

function addCurrencyAttribution() {

    const result =
        document.getElementById(
            "currencyResult"
        );

    if (!result) return;


    let attribution =
        document.getElementById(
            "exchangeRateAttribution"
        );


    if (!attribution) {

        attribution =
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
            "0.65";


        result.insertAdjacentElement(
            "afterend",
            attribution
        );

    }


    const t =
        translations[
            getLanguage()
        ];


    attribution.innerHTML =
        `${t.ratesBy}
        <a
            href="https://www.exchangerate-api.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            ExchangeRate-API
        </a>`;

}


/* =========================================================
   9. CURRENCY CONVERTER
   ========================================================= */

async function convertCurrency() {

    const amount =
        document.getElementById(
            "amount"
        );

    const from =
        document.getElementById(
            "fromCurrency"
        );

    const to =
        document.getElementById(
            "toCurrency"
        );

    const result =
        document.getElementById(
            "currencyResult"
        );


    if (
        !amount ||
        !from ||
        !to ||
        !result
    ) return;


    const t =
        translations[
            getLanguage()
        ];


    const value =
        Number(
            amount.value
        );


    if (
        !Number.isFinite(value) ||
        value <= 0
    ) {

        result.textContent =
            t.validAmount;

        result.dataset.calculated =
            "true";

        return;

    }


    if (
        !from.value ||
        !to.value
    ) {

        result.textContent =
            t.chooseCurrencies;

        result.dataset.calculated =
            "true";

        return;

    }


    if (!currencyRates) {

        result.textContent =
            t.loadingRate;

        await loadCurrencies();


        if (!currencyRates) {

            result.textContent =
                t.rateError;

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
            t.rateError;

        return;

    }


    const converted =
        value *
        (
            toRate /
            fromRate
        );


    result.textContent =
        `${formatNumber(value)}
        ${from.value} =
        ${formatConverted(
            converted,
            to.value
        )}
        ${to.value}`;


    result.dataset.calculated =
        "true";

}


/* =========================================================
   10. NUMBER FORMATTING
   ========================================================= */

function formatNumber(value) {

    return Number(value)
        .toLocaleString(
            getLanguage() === "de"
                ? "de-DE"
                : "en-US",
            {
                maximumFractionDigits:
                    2
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
                    noDecimals.includes(
                        currency
                    )
                        ? 0
                        : 2
            }
        );

}


/* =========================================================
   11. CONNECTION CALCULATOR
   ========================================================= */

function calculateConnection() {

    const arrival =
        document.getElementById(
            "arrivalTime"
        );

    const departure =
        document.getElementById(
            "departureTime"
        );

    const result =
        document.getElementById(
            "connectionResult"
        );


    if (
        !arrival ||
        !departure ||
        !result
    ) return;


    const t =
        translations[
            getLanguage()
        ];


    if (
        !arrival.value ||
        !departure.value
    ) {

        result.textContent =
            t.connectionError;

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
            24 * 60;

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


    result.textContent =
        `${hours} ${t.hours}
        ${minutes} ${t.minutes}
        ${t.connectionTime}
        — ${status}`;


    result.dataset.calculated =
        "true";

}


/* =========================================================
   12. TIME ZONES
   ========================================================= */

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

        } catch (error) {}

    }


    return [

        "UTC",

        "Europe/London",
        "Europe/Paris",
        "Europe/Berlin",
        "Europe/Madrid",
        "Europe/Rome",
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
        "Asia/Tokyo",
        "Asia/Seoul",

        "Australia/Perth",
        "Australia/Adelaide",
        "Australia/Sydney",

        "Pacific/Auckland",
        "Pacific/Honolulu",

        "America/Anchorage",
        "America/Los_Angeles",
        "America/Denver",
        "America/Chicago",
        "America/New_York",
        "America/Sao_Paulo"

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


/* =========================================================
   13. LOAD TIME ZONES
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


    if (!from || !to) return;


    const zones =
        getAllTimezones();


    from.innerHTML = "";

    to.innerHTML = "";


    zones.forEach(
        zone => {

            const fromOption =
                document.createElement(
                    "option"
                );

            fromOption.value =
                zone;

            fromOption.textContent =
                timezoneLabel(
                    zone
                );


            const toOption =
                document.createElement(
                    "option"
                );

            toOption.value =
                zone;

            toOption.textContent =
                timezoneLabel(
                    zone
                );


            from.appendChild(
                fromOption
            );

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
   14. TIMEZONE OFFSET
   ========================================================= */

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
                    Number(
                        part.value
                    );

            }

        }
    );


    const asUTC =
        Date.UTC(
            values.year,
            values.month - 1,
            values.day,
            values.hour,
            values.minute,
            values.second
        );


    return (
        asUTC -
        date.getTime()
    );

}


/* =========================================================
   15. LOCAL TIME TO UTC
   ========================================================= */

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
        i < 3;
        i++
    ) {

        const offset =
            getTimezoneOffset(
                new Date(timestamp),
                timeZone
            );


        timestamp =
            Date.UTC(
                year,
                month - 1,
                day,
                hour,
                minute,
                0
            ) -
            offset;

    }


    return new Date(
        timestamp
    );

}


/* =========================================================
   16. TIMEZONE CONVERTER
   ========================================================= */

function calculateTimezone() {

    const date =
        document.getElementById(
            "timezoneDate"
        );

    const time =
        document.getElementById(
            "timezoneTime"
        );

    const from =
        document.getElementById(
            "fromTimezone"
        );

    const to =
        document.getElementById(
            "toTimezone"
        );

    const result =
        document.getElementById(
            "timezoneResult"
        );


    if (
        !date ||
        !time ||
        !from ||
        !to ||
        !result
    ) return;


    const t =
        translations[
            getLanguage()
        ];


    if (
        !date.value ||
        !time.value
    ) {

        result.textContent =
            t.timezoneError;

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


    const utcDate =
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

                hourCycle:
                    "h23"
            }
        ).format(
            utcDate
        );


    result.textContent =
        `${formatted}
        (${timezoneLabel(
            to.value
        )})`;


    result.dataset.calculated =
        "true";

}


/* =========================================================
   17. DEFAULT DATE/TIME
   ========================================================= */

function setTimezoneDefaults() {

    const date =
        document.getElementById(
            "timezoneDate"
        );

    const time =
        document.getElementById(
            "timezoneTime"
        );


    const now =
        new Date();


    if (
        date &&
        !date.value
    ) {

        const y =
            now.getFullYear();

        const m =
            String(
                now.getMonth() + 1
            ).padStart(
                2,
                "0"
            );

        const d =
            String(
                now.getDate()
            ).padStart(
                2,
                "0"
            );


        date.value =
            `${y}-${m}-${d}`;

    }


    if (
        time &&
        !time.value
    ) {

        const h =
            String(
                now.getHours()
            ).padStart(
                2,
                "0"
            );

        const m =
            String(
                now.getMinutes()
            ).padStart(
                2,
                "0"
            );


        time.value =
            `${h}:${m}`;

    }

}


/* =========================================================
   18. TRAVEL BUDGET
   ========================================================= */

function calculateBudget() {

    const flight =
        Number(
            document.getElementById(
                "flight"
            )?.value
        ) || 0;


    const hotel =
        Number(
            document.getElementById(
                "hotel"
            )?.value
        ) || 0;


    const food =
        Number(
            document.getElementById(
                "food"
            )?.value
        ) || 0;


    const transport =
        Number(
            document.getElementById(
                "transport"
            )?.value
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


    const t =
        translations[
            getLanguage()
        ];


    result.textContent =
        `${t.total}: ${
            total.toLocaleString(
                getLanguage() === "de"
                    ? "de-DE"
                    : "en-US",
                {
                    style:
                        "currency",
                    currency:
                        "EUR"
                }
            )
        }`;


    result.dataset.calculated =
        "true";

}


/* =========================================================
   19. ACCOUNT
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


/* =========================================================
   20. CREATE ACCOUNT
   ========================================================= */

function createAccount() {

    const email =
        document.getElementById(
            "email"
        )?.value.trim();


    const password =
        document.getElementById(
            "password"
        )?.value;


    const message =
        document.getElementById(
            "accountMessage"
        );


    if (!message) return;


    const t =
        translations[
            getLanguage()
        ];


    if (
        !email ||
        !password
    ) {

        message.textContent =
            t.enterLoginData;

        return;

    }


    if (
        password.length < 6
    ) {

        message.textContent =
            t.passwordShort;

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
        t.accountCreated;


    updateAccountView();

}


/* =========================================================
   21. LOGIN
   ========================================================= */

function login() {

    const email =
        document.getElementById(
            "email"
        )?.value.trim();


    const password =
        document.getElementById(
            "password"
        )?.value;


    const message =
        document.getElementById(
            "accountMessage"
        );


    if (!message) return;


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
            t.loginError;

    }

}


/* =========================================================
   22. LOGOUT
   ========================================================= */

function logout() {

    localStorage.removeItem(
        "travelmateLoggedIn"
    );


    updateAccountView();

}


/* =========================================================
   23. ACCOUNT VIEW
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

            status.textContent =
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

            loggedInEmail.textContent =
                email;

        }

    } else {

        if (status) {

            status.textContent =
                t.accountStatus;

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
   24. AIRLINE DATABASE
   ========================================================= */

const airlineDatabase = {

    "new-york": [

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "premium",
                "comfort"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "value",
                "service"
            ]
        },

        {
            name: "Emirates",
            rating: "4.7",
            logo: "🇦🇪",
            tags: [
                "comfort",
                "entertainment"
            ]
        }

    ],


    "london": [

        {
            name: "Singapore Airlines",
            rating: "4.9",
            logo: "🇸🇬",
            tags: [
                "premium",
                "comfort"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "service",
                "value"
            ]
        },

        {
            name: "British Airways",
            rating: "4.5",
            logo: "🇬🇧",
            tags: [
                "network",
                "europe"
            ]
        }

    ],


    "paris": [

        {
            name: "Air France",
            rating: "4.7",
            logo: "🇫🇷",
            tags: [
                "europe",
                "premium"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "service",
                "comfort"
            ]
        },

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "premium",
                "longHaul"
            ]
        }

    ],


    "tokyo": [

        {
            name: "ANA",
            rating: "4.9",
            logo: "🇯🇵",
            tags: [
                "service",
                "japan"
            ]
        },

        {
            name: "Japan Airlines",
            rating: "4.8",
            logo: "🇯🇵",
            tags: [
                "economy",
                "service"
            ]
        },

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "comfort",
                "longHaul"
            ]
        }

    ],


    "dubai": [

        {
            name: "Emirates",
            rating: "4.9",
            logo: "🇦🇪",
            tags: [
                "comfort",
                "entertainment"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "service",
                "businessClass"
            ]
        },

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "premium",
                "comfort"
            ]
        }

    ],


    "singapore": [

        {
            name: "Singapore Airlines",
            rating: "4.9",
            logo: "🇸🇬",
            tags: [
                "premium",
                "bestOverall"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "service",
                "comfort"
            ]
        },

        {
            name: "Emirates",
            rating: "4.7",
            logo: "🇦🇪",
            tags: [
                "entertainment",
                "comfort"
            ]
        }

    ],


    "sydney": [

        {
            name: "Qantas",
            rating: "4.8",
            logo: "🇦🇺",
            tags: [
                "australia",
                "service"
            ]
        },

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "comfort",
                "longHaul"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.7",
            logo: "🇶🇦",
            tags: [
                "value",
                "service"
            ]
        }

    ],


    "toronto": [

        {
            name: "Air Canada",
            rating: "4.6",
            logo: "🇨🇦",
            tags: [
                "canada",
                "network"
            ]
        },

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "comfort",
                "service"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "service",
                "longHaul"
            ]
        }

    ],


    "bangkok": [

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "service",
                "comfort"
            ]
        },

        {
            name: "Thai Airways",
            rating: "4.7",
            logo: "🇹🇭",
            tags: [
                "thailand",
                "service"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "value",
                "comfort"
            ]
        }

    ],


    "jakarta": [

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "premium",
                "comfort"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "value",
                "service"
            ]
        },

        {
            name: "Garuda Indonesia",
            rating: "4.6",
            logo: "🇮🇩",
            tags: [
                "indonesia",
                "service"
            ]
        }

    ],


    "frankfurt": [

        {
            name: "Lufthansa",
            rating: "4.6",
            logo: "🇩🇪",
            tags: [
                "network",
                "europe"
            ]
        },

        {
            name: "Singapore Airlines",
            rating: "4.8",
            logo: "🇸🇬",
            tags: [
                "premium",
                "longHaul"
            ]
        },

        {
            name: "Qatar Airways",
            rating: "4.8",
            logo: "🇶🇦",
            tags: [
                "service",
                "comfort"
            ]
        }

    ]

};


/* =========================================================
   25. AIRLINE TAG TRANSLATIONS
   ========================================================= */

function translateAirlineTag(
    tag,
    t
) {

    const map = {

        premium:
            t.premium,

        comfort:
            t.comfort,

        value:
            t.value,

        service:
            t.service,

        entertainment:
            t.entertainment,

        longHaul:
            t.longHaul,

        europe:
            t.europe,

        network:
            t.network,

        economy:
            t.economy,

        businessClass:
            t.businessClass,

        japan:
            t.japan,

        australia:
            t.australia,

        canada:
            t.canada,

        thailand:
            t.thailand,

        indonesia:
            t.indonesia,

        bestOverall:
            t.bestOverall

    };


    return (
        map[tag] ||
        tag
    );

}


/* =========================================================
   26. AIRLINE FINDER LANGUAGE
   ========================================================= */

function updateAirlineFinderLanguage() {

    const t =
        translations[
            getLanguage()
        ];


    /* TITLE */

    setText(
        "airlineFinderTitle",
        t.airlineFinder
    );


    /* DESCRIPTION */

    setText(
        "airlineFinderDescription",
        t.airlineDescription
    );


    /* LABELS */

    setText(
        "airlineDestinationLabel",
        t.airlineDestination
    );


    setText(
        "airlinePriorityLabel",
        t.airlinePriority
    );


    /* SEARCH BUTTON */

    setButton(
        "#airlineSearchButton",
        t.airlineSearch
    );


    /*
     * Support für deine aktuelle HTML-Version,
     * falls der Button direkt onclick verwendet.
     */

    setButton(
        'button[onclick="findAirlines()"]',
        t.airlineSearch
    );


    /* PRIORITY OPTIONS */

    const priority =
        document.getElementById(
            "airlinePriority"
        );


    if (priority) {

        const options = [

            t.bestOverall,
            t.bestValue,
            t.bestEconomy,
            t.bestBusiness,
            t.bestComfort,
            t.bestWifi,
            t.bestConnections

        ];


        options.forEach(
            (
                text,
                index
            ) => {

                if (
                    priority.options[
                        index
                    ]
                ) {

                    priority.options[
                        index
                    ].text =
                        text;

                }

            }
        );

    }


    /* TEASER */

    const teaser =
        document.querySelector(
            ".airline-teaser"
        );


    if (teaser) {

        const title =
            teaser.querySelector(
                "h2"
            );

        const description =
            teaser.querySelector(
                "p"
            );


        if (title) {

            title.textContent =
                t.airlineFinder;

        }


        if (description) {

            description.textContent =
                t.airlineDescription;

        }

    }


    /* BLUE AIRLINE CARD */

    const airlineCard =
        document.querySelector(
            ".airline-finder-card"
        );


    if (airlineCard) {

        const title =
            airlineCard.querySelector(
                "h2"
            );

        const description =
            airlineCard.querySelector(
                "p"
            );


        if (title) {

            title.textContent =
                t.airlineFinder;

        }


        if (description) {

            description.textContent =
                t.airlineDescription;

        }

    }


    /* RESULTS */

    const resultContainer =
        document.getElementById(
            "airlineResults"
        );


    if (
        resultContainer &&
        resultContainer.dataset.hasResults ===
            "true"
    ) {

        findAirlines();

    }

}


/* =========================================================
   27. OPEN AIRLINE FINDER
   ========================================================= */

function openAirlineFinder() {

    const modal =
        document.getElementById(
            "airlineFinderModal"
        );


    if (!modal) return;


    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    updateAirlineFinderLanguage();

}


/* =========================================================
   28. CLOSE AIRLINE FINDER
   ========================================================= */

function closeAirlineFinder() {

    const modal =
        document.getElementById(
            "airlineFinderModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   29. AIRLINE SCORES
   ========================================================= */

function airlineScore(
    airline,
    priority
) {

    const scores = {

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


    return (
        scores[
            airline
        ]?.[priority] ||

        scores[
            airline
        ]?.overall ||

        80
    );

}


/* =========================================================
   30. FIND AIRLINES
   ========================================================= */

function findAirlines() {

    const destination =
        document.getElementById(
            "airlineDestination"
        )?.value;


    const priority =
        document.getElementById(
            "airlinePriority"
        )?.value ||
        "overall";


    const resultContainer =
        document.getElementById(
            "airlineResults"
        );


    if (!resultContainer) return;


    const results =
        airlineDatabase[
            destination
        ] || [];


    const sortedResults =
        [...results].sort(
            (
                a,
                b
            ) =>
                airlineScore(
                    b.name,
                    priority
                ) -
                airlineScore(
                    a.name,
                    priority
                )
        );


    const t =
        translations[
            getLanguage()
        ];


    resultContainer.innerHTML = `

        <h3 class="airline-results-title">
            ${t.airlineResults}
        </h3>

        ${sortedResults
            .slice(0, 3)
            .map(
                (
                    airline,
                    index
                ) => {

                    const translatedTags =
                        airline.tags
                            .map(
                                tag =>
                                    translateAirlineTag(
                                        tag,
                                        t
                                    )
                            )
                            .join(
                                " • "
                            );


                    return `

                        <div class="airline-result">

                            <div class="airline-rank">

                                ${
                                    index === 0
                                        ? "🥇"
                                        : index === 1
                                        ? "🥈"
                                        : "🥉"
                                }

                            </div>


                            <div class="airline-logo">

                                ${airline.logo}

                            </div>


                            <div class="airline-info">

                                <div class="airline-name">

                                    ${airline.name}

                                </div>


                                <div class="airline-rating">

                                    ⭐
                                    ${airline.rating}/5

                                </div>


                                <div class="airline-tags">

                                    <span class="airline-tag">

                                        ${translatedTags}

                                    </span>

                                </div>

                            </div>

                        </div>

                    `;

                }
            )
            .join("")
        }

    `;


    resultContainer.dataset.hasResults =
        "true";

}


/* =========================================================
   31. AIRLINE FINDER EVENTS
   ========================================================= */

function initializeAirlineFinder() {

    const teaser =
        document.getElementById(
            "airlineFinderTeaser"
        );


    const modal =
        document.getElementById(
            "airlineFinderModal"
        );


    const closeButton =
        document.getElementById(
            "airlineFinderClose"
        );


    const searchButton =
        document.getElementById(
            "airlineSearchButton"
        );


    if (teaser) {

        teaser.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                openAirlineFinder();

            }
        );


        teaser.addEventListener(
            "keydown",
            function(event) {

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


    /*
     * Unterstützt auch die neue
     * .airline-finder-card.
     */

    const card =
        document.querySelector(
            ".airline-finder-card"
        );


    if (
        card &&
        card !== teaser
    ) {

        card.addEventListener(
            "click",
            function(event) {

                /*
                 * Nicht doppelt öffnen,
                 * wenn bereits onclick vorhanden ist.
                 */

                if (
                    event.target.closest(
                        "button"
                    )
                ) return;

                openAirlineFinder();

            }
        );

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function() {

                closeAirlineFinder();

            }
        );

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function() {

                findAirlines();

            }
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            function(event) {

                if (
                    event.target ===
                    modal
                ) {

                    closeAirlineFinder();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closeAirlineFinder();

            }

        }
    );

}


/* =========================================================
   32. ACCOUNT MODAL OUTSIDE CLICK
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
   33. START APP
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async function() {

        const language =
            getLanguage();


        const languageSelect =
            document.getElementById(
                "languageSelect"
            );


        if (languageSelect) {

            languageSelect.value =
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