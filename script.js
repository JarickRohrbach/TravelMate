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

        settings: "⚙️ Einstellungen",
        language: "Sprache",

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
            "Angemeldet als ",

        timezoneArrow: "→",

        ratesBy: "Kurse von"

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

        settings: "⚙️ Settings",
        language: "Language",

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
            "Logged in as ",

        timezoneArrow: "→",

        ratesBy: "Rates by"

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

    const selector =
        document.getElementById(
            "languageSelect"
        );

    if (!selector) return;

    const language =
        selector.value === "en"
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


    /* Header */

    setText(
        "subtitle",
        t.subtitle
    );


    /* Account */

    setText(
        "accountTitle",
        t.account
    );

    setText(
        "settingsTitle",
        t.settings
    );

    setText(
        "languageLabel",
        t.language
    );


    /* Currency */

    setText(
        "currencyTitle",
        t.currency
    );

    setPlaceholder(
        "amount",
        t.amount
    );


    /* Connection */

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


    /* Time zone */

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


    /* Budget */

    setText(
        "budgetTitle",
        t.budget
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


    /* Account modal */

    setText(
        "accountModalTitle",
        t.accountTitle
    );

    setPlaceholder(
        "email",
        t.email
    );

    setPlaceholder(
        "password",
        t.password
    );

    setText(
        "welcomeMessage",
        t.welcome
    );


    /* BUTTONS */

    setButtonText(
        'button[onclick="convertCurrency()"]',
        t.convert
    );

    setButtonText(
        'button[onclick="calculateConnection()"]',
        t.checkConnection
    );

    setButtonText(
        'button[onclick="calculateTimezone()"]',
        t.convertTimezone
    );

    setButtonText(
        'button[onclick="calculateBudget()"]',
        t.calculateBudget
    );

    setButtonText(
        'button[onclick="openAccount()"]',
        t.login
    );

    setButtonText(
        'button[onclick="createAccount()"]',
        t.createAccount
    );

    setButtonText(
        'button[onclick="login()"]',
        t.login
    );

    setButtonText(
        'button[onclick="logout()"]',
        t.logout
    );


    /* Default result texts */

    const currencyResult =
        document.getElementById(
            "currencyResult"
        );

    if (
        currencyResult &&
        !currencyResult.dataset.active
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
        !connectionResult.dataset.active
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
        !timezoneResult.dataset.active
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
        !budgetResult.dataset.active
    ) {

        budgetResult.textContent =
            t.budgetResult;

    }


    updateAccountView();

}


/* =========================================================
   4. SMALL DOM HELPERS
   ========================================================= */

function setText(id, text) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            text;

    }

}


function setPlaceholder(
    id,
    text
) {

    const element =
        document.getElementById(id);

    if (element) {

        element.placeholder =
            text;

    }

}


function setButtonText(
    selector,
    text
) {

    const button =
        document.querySelector(
            selector
        );

    if (button) {

        button.textContent =
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
                "Invalid API response"
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


        currencyRates =
            null;


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
        !from ||
        !to ||
        !currencyRates
    ) return;


    from.innerHTML = "";
    to.innerHTML = "";


    const currencies =
        Object.keys(
            currencyRates
        ).sort();


    let displayNames = null;


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

        displayNames = null;

    }


    currencies.forEach(
        code => {

            let name = code;


            if (displayNames) {

                try {

                    name =
                        displayNames.of(
                            code
                        ) || code;

                } catch (error) {

                    name = code;

                }

            }


            const option1 =
                document.createElement(
                    "option"
                );

            option1.value =
                code;

            option1.textContent =
                `${code} – ${name}`;

            from.appendChild(
                option1
            );


            const option2 =
                document.createElement(
                    "option"
                );

            option2.value =
                code;

            option2.textContent =
                `${code} – ${name}`;

            to.appendChild(
                option2
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
        "0.65";


    attribution.innerHTML = `
        ${translations[getLanguage()].ratesBy}
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
   9. CURRENCY CONVERTER
   ========================================================= */

async function convertCurrency() {

    const amount =
        Number(
            document.getElementById(
                "amount"
            )?.value
        );


    const from =
        document.getElementById(
            "fromCurrency"
        )?.value;


    const to =
        document.getElementById(
            "toCurrency"
        )?.value;


    const result =
        document.getElementById(
            "currencyResult"
        );


    if (!result) return;


    const t =
        translations[
            getLanguage()
        ];


    if (
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        result.textContent =
            t.validAmount;

        result.dataset.active =
            "true";

        return;

    }


    if (!from || !to) {

        result.textContent =
            t.chooseCurrencies;

        result.dataset.active =
            "true";

        return;

    }


    if (!currencyRates) {

        result.textContent =
            t.loadingRate;

        await loadCurrencies();

    }


    if (!currencyRates) {

        result.textContent =
            t.rateError;

        return;

    }


    if (from === to) {

        result.textContent =
            `${formatNumber(amount)}
             ${from} =
             ${formatNumber(amount)}
             ${to}`;

        result.dataset.active =
            "true";

        return;

    }


    const fromRate =
        currencyRates[from];

    const toRate =
        currencyRates[to];


    if (
        typeof fromRate !== "number" ||
        typeof toRate !== "number"
    ) {

        result.textContent =
            t.rateError;

        return;

    }


    const converted =
        amount *
        (toRate / fromRate);


    result.textContent =
        `${formatNumber(amount)}
         ${from} =
         ${formatConverted(
             converted,
             to
         )}
         ${to}`;


    result.dataset.active =
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
        )?.value;


    const departure =
        document.getElementById(
            "departureTime"
        )?.value;


    const result =
        document.getElementById(
            "connectionResult"
        );


    if (!result) return;


    const t =
        translations[
            getLanguage()
        ];


    if (
        !arrival ||
        !departure
    ) {

        result.textContent =
            t.connectionError;

        result.dataset.active =
            "true";

        return;

    }


    const [ah, am] =
        arrival.split(":")
            .map(Number);


    const [dh, dm] =
        departure.split(":")
            .map(Number);


    const arrivalMinutes =
        ah * 60 + am;


    let departureMinutes =
        dh * 60 + dm;


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


    const connectionText =
        getLanguage() === "de"
            ? "Umsteigezeit"
            : "Connection time";


    const hourText =
        getLanguage() === "de"
            ? "Std."
            : "h";


    const minuteText =
        getLanguage() === "de"
            ? "Min."
            : "min";


    result.textContent =
        `${hours} ${hourText} ` +
        `${minutes} ${minuteText} ` +
        `${connectionText}\n` +
        status;


    result.dataset.active =
        "true";

}


/* =========================================================
   12. ALL TIME ZONES
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
        "Asia/Taipei",
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


/* =========================================================
   13. TIMEZONE NAMES
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


    if (parts.length === 1) {

        return city;

    }


    return `${parts[0]} / ${city}`;

}


/* =========================================================
   14. LOAD TIME ZONES
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
        timezone => {

            const label =
                formatTimezoneName(
                    timezone
                );


            const optionFrom =
                document.createElement(
                    "option"
                );

            optionFrom.value =
                timezone;

            optionFrom.textContent =
                label;


            const optionTo =
                document.createElement(
                    "option"
                );

            optionTo.value =
                timezone;

            optionTo.textContent =
                label;


            from.appendChild(
                optionFrom
            );

            to.appendChild(
                optionTo
            );

        }
    );


    from.value =
        "Europe/Berlin";


    to.value =
        "Asia/Jakarta";

}


/* =========================================================
   15. TIMEZONE CONVERTER
   ========================================================= */

function calculateTimezone() {

    const date =
        document.getElementById(
            "timezoneDate"
        )?.value;


    const time =
        document.getElementById(
            "timezoneTime"
        )?.value;


    const from =
        document.getElementById(
            "fromTimezone"
        )?.value;


    const to =
        document.getElementById(
            "toTimezone"
        )?.value;


    const result =
        document.getElementById(
            "timezoneResult"
        );


    if (!result) return;


    const t =
        translations[
            getLanguage()
        ];


    if (
        !date ||
        !time ||
        !from ||
        !to
    ) {

        result.textContent =
            t.timezoneError;

        result.dataset.active =
            "true";

        return;

    }


    const utcDate =
        localTimeToUTC(
            `${date}T${time}:00`,
            from
        );


    if (!utcDate) {

        result.textContent =
            t.rateError;

        return;

    }


    const converted =
        new Intl.DateTimeFormat(
            getLanguage() === "de"
                ? "de-DE"
                : "en-US",
            {
                timeZone: to,

                year: "numeric",
                month: "2-digit",
                day: "2-digit",

                hour: "2-digit",
                minute: "2-digit",

                hour12: false
            }
        ).format(
            utcDate
        );


    const fromName =
        formatTimezoneName(
            from
        );


    const toName =
        formatTimezoneName(
            to
        );


    result.innerHTML = `
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


    result.dataset.active =
        "true";

}


/* =========================================================
   16. LOCAL TIME → UTC
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

        const temporary =
            new Date(
                timestamp
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


        const parts =
            formatter.formatToParts(
                temporary
            );


        const get =
            type => {

                const part =
                    parts.find(
                        item =>
                            item.type ===
                            type
                    );

                return part
                    ? Number(
                        part.value
                    )
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


        const wantedTimestamp =
            Date.UTC(
                year,
                month - 1,
                day,
                hour,
                minute,
                second
            );


        timestamp +=
            wantedTimestamp -
            localTimestamp;

    }


    return new Date(
        timestamp
    );

}


/* =========================================================
   17. DEFAULT TIMEZONE DATE/TIME
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


    const locale =
        getLanguage() === "de"
            ? "de-DE"
            : "en-US";


    result.textContent =
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


    result.dataset.active =
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


    /*
     * DEMO ACCOUNT ONLY.
     *
     * Für eine echte veröffentlichte App
     * brauchen wir später Firebase/Supabase
     * oder einen eigenen Backend-Service.
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
   24. MODAL CLICK
   ========================================================= */

window.addEventListener(
    "click",
    event => {

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
   25. START TRAVELMATE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

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


        setTimezoneDefaults();


        loadTimezones();


        await loadCurrencies();


        updateAccountView();

    }
);
