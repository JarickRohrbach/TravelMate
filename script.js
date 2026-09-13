/* =========================================================
   TRAVELMATE
   Complete JavaScript
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

    return localStorage.getItem(
        "travelmateLanguage"
    ) || "de";

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

}


/* =========================================================
   3. APPLY LANGUAGE
   ========================================================= */

function applyLanguage(language) {

    const t =
        translations[language] ||
        translations.de;


    document.documentElement.lang =
        language;


    /* -------------------------
       TEXT
       ------------------------- */

    setText("subtitle", t.subtitle);

    setText(
        "accountTitle",
        t.accountTitle
    );

    setText(
        "settingsTitle",
        t.settings
    );

    setText(
        "languageLabel",
        t.language
    );

    setText(
        "currencyTitle",
        t.currency
    );

    setText(
        "connectionTitle",
        t.connection
    );

    setText(
        "arrivalLabel",
        t.arrival
    );

    setText(
        "departureLabel",
        t.departure
    );

    setText(
        "timezoneTitle",
        t.timezone
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

    setText(
        "budgetTitle",
        t.budget
    );

    setText(
        "accountModalTitle",
        t.accountTitle
    );

    setText(
        "welcomeMessage",
        t.welcome
    );


    /* -------------------------
       INPUT PLACEHOLDERS
       ------------------------- */

    setPlaceholder(
        "amount",
        t.amount
    );

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


    /* =====================================================
       BUTTONS
       DAS WAR DER FEHLER IN DER ALTEN VERSION
       ===================================================== */

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


    /* -------------------------
       DEFAULT RESULTS
       ------------------------- */

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

}


/* =========================================================
   4. DOM HELPERS
   ========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}


function setPlaceholder(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.placeholder = value;
    }

}


function setButton(selector, value) {

    const button =
        document.querySelector(selector);

    if (button) {
        button.textContent = value;
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
   7. POPULATE ALL CURRENCIES
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
            typeof Intl !== "undefined" &&
            Intl.DisplayNames
        ) {

            names =
                new Intl.DisplayNames(
                    [getLanguage()],
                    {
                        type: "currency"
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
   8. API ATTRIBUTION
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


    const text =
        getLanguage() === "de"
            ? "Kurse von"
            : "Rates by";


    attribution.innerHTML =
        `${text}
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
        typeof fromRate !== "number" ||
        typeof toRate !== "number"
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


    if (difference >= 120) {

        status =
            t.goodBuffer;

    } else if (difference >= 60) {

        status =
            t.tight;

    } else {

        status =
            t.veryTight;

    }


    const h =
        getLanguage() === "de"
            ? "Std."
            : "h";


    const m =
        getLanguage() === "de"
            ? "Min."
            : "min";


    const label =
        getLanguage() === "de"
            ? "Umsteigezeit"
            : "Connection time";


    result.textContent =
        `${hours} ${h} ${minutes} ${m}
        ${label}
        — ${status}`;


    result.dataset.calculated =
        "true";

}


/* =========================================================
   12. TIME ZONES
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
                timezoneLabel(zone);


            const toOption =
                document.createElement(
                    "option"
                );

            toOption.value =
                zone;

            toOption.textContent =
                timezoneLabel(zone);


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
   14. TIMEZONE CONVERTER
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


    const utc =
        localTimeToUTC(
            `${date.value}T${time.value}:00`,
            from.value
        );


    if (!utc) {

        result.textContent =
            t.rateError;

        return;

    }


    const locale =
        getLanguage() === "de"
            ? "de-DE"
            : "en-US";


    const formatted =
        new Intl.DateTimeFormat(
            locale,
            {
                timeZone:
                    to.value,

                dateStyle:
                    "medium",

                timeStyle:
                    "short"
            }
        ).format(utc);


    result.innerHTML =
        `<strong>
            ${formatted}
        </strong>
        <br>
        ${timezoneLabel(to.value)}`;


    result.dataset.calculated =
        "true";

}


/* =========================================================
   15. LOCAL TIME → UTC
   ========================================================= */

function localTimeToUTC(
    dateTime,
    timezone
) {

    const match =
        dateTime.match(
            /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
        );


    if (!match) return null;


    const year =
        Number(match[1]);

    const month =
        Number(match[2]);

    const day =
        Number(match[3]);

    const hour =
        Number(match[4]);

    const minute =
        Number(match[5]);

    const second =
        Number(match[6]);


    let timestamp =
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

        const date =
            new Date(timestamp);


        const parts =
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
            ).formatToParts(date);


        const getPart =
            type => {

                const part =
                    parts.find(
                        p =>
                            p.type ===
                            type
                    );

                return part
                    ? Number(part.value)
                    : 0;

            };


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


        timestamp +=
            desiredTimestamp -
            localTimestamp;

    }


    return new Date(timestamp);

}


/* =========================================================
   16. DEFAULT DATE/TIME
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
            ).padStart(2, "0");

        const d =
            String(
                now.getDate()
            ).padStart(2, "0");


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
            ).padStart(2, "0");

        const m =
            String(
                now.getMinutes()
            ).padStart(2, "0");


        time.value =
            `${h}:${m}`;

    }

}


/* =========================================================
   17. TRAVEL BUDGET
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
                    style: "currency",
                    currency: "EUR"
                }
            )
        }`;


    result.dataset.calculated =
        "true";

}


/* =========================================================
   18. ACCOUNT MODAL
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
   19. CREATE ACCOUNT
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
   20. LOGIN
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


        message.textContent = "";


        updateAccountView();

    } else {

        message.textContent =
            t.loginError;

    }

}


/* =========================================================
   21. LOGOUT
   ========================================================= */

function logout() {

    localStorage.removeItem(
        "travelmateLoggedIn"
    );


    updateAccountView();

}


/* =========================================================
   22. ACCOUNT VIEW
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
   23. CLOSE MODAL WHEN CLICKING OUTSIDE
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
   24. START APP
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


        await loadCurrencies();


        updateAccountView();

    }
);
