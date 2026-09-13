/* =========================================================
   TRAVELMATE - COMPLETE SCRIPT
   Compatible with the current index.html
   ========================================================= */


/* =========================================================
   01. CONFIGURATION
   ========================================================= */

const DEMO_EMAIL = "demo@travelmate.app";
const DEMO_PASSWORD = "travelmate123";

const CURRENCY_API =
    "https://open.er-api.com/v6/latest/EUR";

const FRANKFURTER_API =
    "https://api.frankfurter.app/latest?from=EUR";

let currentLanguage =
    localStorage.getItem("travelmateLanguage") || "de";

let currencyRates = null;


/* =========================================================
   02. TRANSLATIONS
   ========================================================= */

const translations = {

    de: {

        subtitle:
            "Deine Reise. Einfacher.",

        settings:
            "Einstellungen",

        settingsDescription:
            "Sprache und App-Einstellungen",

        accountTitle:
            "Mein Account",

        accountStatus:
            "Noch nicht angemeldet",

        email:
            "E-Mail-Adresse",

        password:
            "Passwort",

        login:
            "Anmelden",

        createAccount:
            "Account erstellen",

        logout:
            "Abmelden",

        loggedInAs:
            "Angemeldet als",

        currency:
            "Währungsrechner",

        currencyDescription:
            "Währungen weltweit schnell umrechnen",

        amount:
            "Betrag",

        convert:
            "Umrechnen",

        currencyResult:
            "Ergebnis erscheint hier",

        loadingCurrencies:
            "Währungen werden geladen...",

        rateError:
            "Wechselkurse konnten momentan nicht geladen werden.",

        connection:
            "Anschlussrechner",

        connectionDescription:
            "Prüfe deine Umsteigezeit zwischen Flügen",

        arrival:
            "Ankunftszeit",

        departure:
            "Abflugzeit",

        checkConnection:
            "Anschluss prüfen",

        connectionEnterTimes:
            "Bitte gib Ankunfts- und Abflugzeit ein.",

        connectionTooShort:
            "⚠️ Sehr kurze Umsteigezeit",

        connectionTight:
            "🟠 Knapp",

        connectionGood:
            "🟢 Gute Umsteigezeit",

        connectionLong:
            "🔵 Sehr großzügige Umsteigezeit",

        timezone:
            "Zeitzonenrechner",

        timezoneDescription:
            "Uhrzeiten weltweit vergleichen",

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

        budget:
            "Reisebudget",

        budgetDescription:
            "Plane und berechne deine Reisekosten",

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

        airlineFinder:
            "Airline Finder",

        airlineDescription:
            "Finde die besten Airlines für dein Reiseziel.",

        airlineDestination:
            "Reiseziel",

        airlinePriority:
            "Priorität",

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

        airlineSearch:
            "🔎 Airlines finden",

        noAirlines:
            "Keine passenden Airlines gefunden.",

        accountLoginSuccess:
            "Erfolgreich angemeldet.",

        accountLoginError:
            "E-Mail-Adresse oder Passwort ist falsch.",

        accountCreated:
            "Demo-Account wurde erstellt.",

        loggedOut:
            "Du wurdest abgemeldet.",

        invalidAmount:
            "Bitte gib einen gültigen Betrag ein.",

        budgetTotal:
            "Gesamtkosten",

        minutes:
            "Minuten",

        hours:
            "Stunden",

        result:
            "Ergebnis",

        overall:
            "Gesamt",

        value:
            "Preis-Leistung",

        economy:
            "Economy",

        business:
            "Business",

        comfort:
            "Komfort"
    },


    en: {

        subtitle:
            "Your journey. Made easier.",

        settings:
            "Settings",

        settingsDescription:
            "Language and app settings",

        accountTitle:
            "My Account",

        accountStatus:
            "Not signed in",

        email:
            "Email address",

        password:
            "Password",

        login:
            "Sign in",

        createAccount:
            "Create account",

        logout:
            "Sign out",

        loggedInAs:
            "Signed in as",

        currency:
            "Currency Converter",

        currencyDescription:
            "Convert currencies worldwide quickly",

        amount:
            "Amount",

        convert:
            "Convert",

        currencyResult:
            "Your result will appear here",

        loadingCurrencies:
            "Loading currencies...",

        rateError:
            "Exchange rates could not be loaded right now.",

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

        connectionEnterTimes:
            "Please enter arrival and departure times.",

        connectionTooShort:
            "⚠️ Very short connection",

        connectionTight:
            "🟠 Tight connection",

        connectionGood:
            "🟢 Good connection",

        connectionLong:
            "🔵 Very comfortable connection",

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
            "Your result will appear here",

        budget:
            "Travel Budget",

        budgetDescription:
            "Plan and calculate your travel costs",

        flight:
            "Flight costs €",

        hotel:
            "Accommodation €",

        food:
            "Food €",

        transport:
            "Transport €",

        calculateBudget:
            "Calculate budget",

        airlineFinder:
            "Airline Finder",

        airlineDescription:
            "Find the best airlines for your destination.",

        airlineDestination:
            "Destination",

        airlinePriority:
            "Priority",

        bestOverall:
            "⭐ Best overall",

        bestValue:
            "💰 Best value",

        bestEconomy:
            "🧳 Best Economy",

        bestBusiness:
            "👑 Best Business Class",

        bestComfort:
            "🛋️ Best comfort",

        airlineSearch:
            "🔎 Find airlines",

        noAirlines:
            "No matching airlines found.",

        accountLoginSuccess:
            "Successfully signed in.",

        accountLoginError:
            "Incorrect email address or password.",

        accountCreated:
            "Demo account created.",

        loggedOut:
            "You have been signed out.",

        invalidAmount:
            "Please enter a valid amount.",

        budgetTotal:
            "Total cost",

        minutes:
            "minutes",

        hours:
            "hours",

        result:
            "Result",

        overall:
            "Overall",

        value:
            "Value",

        economy:
            "Economy",

        business:
            "Business",

        comfort:
            "Comfort"
    }
};


/* =========================================================
   03. TRANSLATION SYSTEM
   ========================================================= */

function getLanguage() {

    return currentLanguage === "en"
        ? "en"
        : "de";
}


function t(key) {

    const language =
        getLanguage();

    return (
        translations[language]?.[key] ||
        translations.de?.[key] ||
        key
    );
}


function changeLanguage() {

    const select =
        document.getElementById(
            "languageSelect"
        );

    if (!select) return;

    currentLanguage =
        select.value === "en"
            ? "en"
            : "de";

    localStorage.setItem(
        "travelmateLanguage",
        currentLanguage
    );

    applyLanguage();
}


function applyLanguage() {

    document.documentElement.lang =
        getLanguage();


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );

            const translated =
                t(key);


            if (
                element.tagName === "INPUT" ||
                element.tagName === "TEXTAREA"
            ) {

                element.placeholder =
                    translated;

            } else {

                element.textContent =
                    translated;
            }
        });


    const select =
        document.getElementById(
            "languageSelect"
        );

    if (select) {

        select.value =
            getLanguage();
    }


    updateAccountUI();

    updateAirlineFinderLanguage();

    updateConnectionResultLanguage();
}


/* =========================================================
   04. ACCOUNT
   ========================================================= */

function openAccount() {

    const modal =
        document.getElementById(
            "accountModal"
        );

    if (!modal) return;

    modal.classList.add(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    updateAccountUI();
}


function closeAccount() {

    const modal =
        document.getElementById(
            "accountModal"
        );

    if (!modal) return;

    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );
}


function login() {

    const email =
        document.getElementById(
            "email"
        )?.value
            .trim()
            .toLowerCase();

    const password =
        document.getElementById(
            "password"
        )?.value || "";

    const message =
        document.getElementById(
            "accountMessage"
        );


    if (
        email === DEMO_EMAIL &&
        password === DEMO_PASSWORD
    ) {

        localStorage.setItem(
            "travelmateLoggedIn",
            "true"
        );

        localStorage.setItem(
            "travelmateUser",
            email
        );


        if (message) {

            message.textContent =
                t(
                    "accountLoginSuccess"
                );

            message.className =
                "message success";
        }


        updateAccountUI();

        return;
    }


    /*
     * Also allow a locally created
     * demo account.
     */

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
        password === savedPassword &&
        email
    ) {

        localStorage.setItem(
            "travelmateLoggedIn",
            "true"
        );

        localStorage.setItem(
            "travelmateUser",
            email
        );


        if (message) {

            message.textContent =
                t(
                    "accountLoginSuccess"
                );

            message.className =
                "message success";
        }


        updateAccountUI();

        return;
    }


    if (message) {

        message.textContent =
            t(
                "accountLoginError"
            );

        message.className =
            "message error";
    }
}


function createAccount() {

    const email =
        document.getElementById(
            "email"
        )?.value
            .trim()
            .toLowerCase();

    const password =
        document.getElementById(
            "password"
        )?.value || "";

    const message =
        document.getElementById(
            "accountMessage"
        );


    if (
        !email ||
        !password
    ) {

        if (message) {

            message.textContent =
                getLanguage() === "de"
                    ? "Bitte E-Mail und Passwort eingeben."
                    : "Please enter an email and password.";

            message.className =
                "message error";
        }

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


    if (message) {

        message.textContent =
            t("accountCreated");

        message.className =
            "message success";
    }
}


function logout() {

    localStorage.removeItem(
        "travelmateLoggedIn"
    );

    localStorage.removeItem(
        "travelmateUser"
    );


    updateAccountUI();


    const message =
        document.getElementById(
            "accountMessage"
        );

    if (message) {

        message.textContent =
            t("loggedOut");

        message.className =
            "message success";
    }
}


function updateAccountUI() {

    const loggedIn =
        localStorage.getItem(
            "travelmateLoggedIn"
        ) === "true";


    const user =
        localStorage.getItem(
            "travelmateUser"
        ) || "";


    const loginArea =
        document.getElementById(
            "loginArea"
        );

    const loggedInArea =
        document.getElementById(
            "loggedInArea"
        );

    const accountStatus =
        document.getElementById(
            "accountStatus"
        );

    const loggedInEmail =
        document.getElementById(
            "loggedInEmail"
        );

    const modalStatus =
        document.getElementById(
            "modalAccountStatus"
        );


    if (loginArea) {

        loginArea.hidden =
            loggedIn;
    }


    if (loggedInArea) {

        loggedInArea.hidden =
            !loggedIn;
    }


    if (loggedInEmail) {

        loggedInEmail.textContent =
            user;
    }


    if (accountStatus) {

        accountStatus.textContent =
            loggedIn
                ? `${t("loggedInAs")}: ${user}`
                : t("accountStatus");
    }


    if (modalStatus) {

        modalStatus.textContent =
            loggedIn
                ? `${t("loggedInAs")}: ${user}`
                : t("accountStatus");
    }
}


/* =========================================================
   05. CURRENCY API
   ========================================================= */

async function fetchCurrencyRates() {

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
                `HTTP ${response.status}`
            );
        }


        const data =
            await response.json();


        if (
            data.result !== "success" ||
            !data.rates
        ) {

            throw new Error(
                "Invalid API response"
            );
        }


        currencyRates = {
            EUR: 1,
            ...data.rates
        };


        return currencyRates;

    } catch (error) {

        console.warn(
            "Primary currency API failed:",
            error
        );
    }


    /*
     * Fallback
     */

    try {

        const response =
            await fetch(
                FRANKFURTER_API,
                {
                    cache: "no-store"
                }
            );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );
        }


        const data =
            await response.json();


        if (!data.rates) {

            throw new Error(
                "Invalid fallback response"
            );
        }


        currencyRates = {
            EUR: 1,
            ...data.rates
        };


        return currencyRates;

    } catch (error) {

        console.error(
            "Currency API fallback failed:",
            error
        );

        currencyRates = null;

        return null;
    }
}


/* =========================================================
   06. CURRENCY CONVERTER
   ========================================================= */

function formatCurrency(
    value,
    currency
) {

    try {

        return new Intl.NumberFormat(
            getLanguage() === "de"
                ? "de-DE"
                : "en-US",
            {
                style: "currency",
                currency: currency,
                maximumFractionDigits: 2
            }
        ).format(value);

    } catch {

        return `${value.toFixed(2)} ${currency}`;
    }
}


function populateCurrencies(
    selectedFrom = "EUR",
    selectedTo = "IDR"
) {

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
        !to
    ) return;


    if (!currencyRates) {

        from.innerHTML =
            `<option value="EUR">EUR</option>`;

        to.innerHTML =
            `<option value="IDR">IDR</option>`;

        return;
    }


    const currencies =
        Object.keys(
            currencyRates
        ).sort();


    from.innerHTML = "";
    to.innerHTML = "";


    currencies.forEach(
        currency => {

            const optionFrom =
                document.createElement(
                    "option"
                );

            const optionTo =
                document.createElement(
                    "option"
                );


            optionFrom.value =
                currency;

            optionTo.value =
                currency;


            optionFrom.textContent =
                currency;

            optionTo.textContent =
                currency;


            from.appendChild(
                optionFrom
            );

            to.appendChild(
                optionTo
            );
        }
    );


    from.value =
        currencies.includes(
            selectedFrom
        )
            ? selectedFrom
            : "EUR";


    to.value =
        currencies.includes(
            selectedTo
        )
            ? selectedTo
            : "IDR";
}


async function initializeCurrencies() {

    const result =
        document.getElementById(
            "currencyResult"
        );


    if (result) {

        result.textContent =
            t(
                "loadingCurrencies"
            );
    }


    const rates =
        await fetchCurrencyRates();


    if (!rates) {

        if (result) {

            result.textContent =
                t("rateError");
        }

        return;
    }


    populateCurrencies(
        "EUR",
        "IDR"
    );


    if (result) {

        result.textContent =
            t("currencyResult");
    }
}


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


    if (
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        if (result) {

            result.textContent =
                t("invalidAmount");
        }

        return;
    }


    if (!currencyRates) {

        await initializeCurrencies();
    }


    if (
        !currencyRates ||
        currencyRates[from] == null ||
        currencyRates[to] == null
    ) {

        if (result) {

            result.textContent =
                t("rateError");
        }

        return;
    }


    /*
     * All rates have EUR as base.
     */

    const eurValue =
        amount /
        currencyRates[from];


    const converted =
        eurValue *
        currencyRates[to];


    if (result) {

        result.innerHTML = `
            <strong>
                ${formatCurrency(
                    converted,
                    to
                )}
            </strong>

            <small>
                ${amount} ${from}
                → ${to}
            </small>
        `;
    }
}


/* =========================================================
   07. CONNECTION CALCULATOR
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


    if (
        !arrival ||
        !departure
    ) {

        if (result) {

            result.textContent =
                t(
                    "connectionEnterTimes"
                );
        }

        return;
    }


    const [
        arrivalHour,
        arrivalMinute
    ] =
        arrival
            .split(":")
            .map(Number);


    const [
        departureHour,
        departureMinute
    ] =
        departure
            .split(":")
            .map(Number);


    let arrivalMinutes =
        arrivalHour * 60 +
        arrivalMinute;


    let departureMinutes =
        departureHour * 60 +
        departureMinute;


    /*
     * Departure on the following day.
     */

    if (
        departureMinutes <=
        arrivalMinutes
    ) {

        departureMinutes +=
            24 * 60;
    }


    const difference =
        departureMinutes -
        arrivalMinutes;


    let message;


    if (
        difference < 60
    ) {

        message =
            t(
                "connectionTooShort"
            );

    } else if (
        difference < 90
    ) {

        message =
            t(
                "connectionTight"
            );

    } else if (
        difference <= 240
    ) {

        message =
            t(
                "connectionGood"
            );

    } else {

        message =
            t(
                "connectionLong"
            );
    }


    const hours =
        Math.floor(
            difference / 60
        );


    const minutes =
        difference % 60;


    const timeText =
        hours > 0
            ? `${hours} ${t("hours")} ${
                minutes > 0
                    ? `${minutes} ${t("minutes")}`
                    : ""
              }`
            : `${minutes} ${t("minutes")}`;


    if (result) {

        result.innerHTML = `
            <strong>
                ${message}
            </strong>

            <span>
                ${timeText}
            </span>
        `;
    }
}


function updateConnectionResultLanguage() {

    const result =
        document.getElementById(
            "connectionResult"
        );


    if (!result) return;


    const arrival =
        document.getElementById(
            "arrivalTime"
        )?.value;


    const departure =
        document.getElementById(
            "departureTime"
        )?.value;


    if (
        !arrival ||
        !departure
    ) {

        result.textContent =
            t(
                "connectionEnterTimes"
            );
    }
}


/* =========================================================
   08. TIME ZONES
   ========================================================= */

const timezones = [

    "UTC",

    "Europe/Berlin",
    "Europe/London",
    "Europe/Paris",
    "Europe/Madrid",
    "Europe/Rome",

    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Toronto",
    "America/Vancouver",

    "America/Sao_Paulo",

    "Asia/Dubai",
    "Asia/Kolkata",
    "Asia/Bangkok",
    "Asia/Singapore",
    "Asia/Jakarta",
    "Asia/Shanghai",
    "Asia/Hong_Kong",
    "Asia/Tokyo",
    "Asia/Seoul",

    "Australia/Sydney",

    "Pacific/Auckland"
];


function populateTimezones() {

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


    from.innerHTML = "";
    to.innerHTML = "";


    timezones.forEach(
        zone => {

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
                zone;

            optionTo.textContent =
                zone;


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


/*
 * Convert a local time in one timezone
 * to another timezone.
 */

function calculateTimezone() {

    const dateValue =
        document.getElementById(
            "timezoneDate"
        )?.value;


    const timeValue =
        document.getElementById(
            "timezoneTime"
        )?.value;


    const fromZone =
        document.getElementById(
            "fromTimezone"
        )?.value;


    const toZone =
        document.getElementById(
            "toTimezone"
        )?.value;


    const result =
        document.getElementById(
            "timezoneResult"
        );


    if (
        !dateValue ||
        !timeValue ||
        !fromZone ||
        !toZone
    ) {

        if (result) {

            result.textContent =
                t("timezoneResult");
        }

        return;
    }


    try {

        /*
         * We calculate the UTC instant
         * corresponding to the source timezone.
         */

        const [
            year,
            month,
            day
        ] =
            dateValue
                .split("-")
                .map(Number);


        const [
            hour,
            minute
        ] =
            timeValue
                .split(":")
                .map(Number);


        let utcTimestamp =
            Date.UTC(
                year,
                month - 1,
                day,
                hour,
                minute,
                0
            );


        /*
         * Correct the UTC estimate using
         * the actual source timezone.
         */

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            const parts =
                new Intl.DateTimeFormat(
                    "en-US",
                    {
                        timeZone:
                            fromZone,

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
                )
                    .formatToParts(
                        new Date(
                            utcTimestamp
                        )
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


            const displayedAsUTC =
                Date.UTC(
                    values.year,
                    values.month - 1,
                    values.day,
                    values.hour,
                    values.minute,
                    values.second
                );


            const desiredAsUTC =
                Date.UTC(
                    year,
                    month - 1,
                    day,
                    hour,
                    minute,
                    0
                );


            utcTimestamp +=
                desiredAsUTC -
                displayedAsUTC;
        }


        const formatted =
            new Intl.DateTimeFormat(
                getLanguage() === "de"
                    ? "de-DE"
                    : "en-US",
                {
                    timeZone:
                        toZone,

                    dateStyle:
                        "medium",

                    timeStyle:
                        "short"
                }
            )
                .format(
                    new Date(
                        utcTimestamp
                    )
                );


        if (result) {

            result.innerHTML = `
                <strong>
                    ${formatted}
                </strong>

                <span>
                    ${toZone}
                </span>
            `;
        }

    } catch (error) {

        console.error(
            "Timezone conversion error:",
            error
        );

        if (result) {

            result.textContent =
                t("timezoneResult");
        }
    }
}


/* =========================================================
   09. TRAVEL BUDGET
   ========================================================= */

function getNumber(id) {

    const value =
        Number(
            document.getElementById(
                id
            )?.value
        );


    return Number.isFinite(value)
        ? Math.max(
            0,
            value
        )
        : 0;
}


function calculateBudget() {

    const flight =
        getNumber("flight");

    const hotel =
        getNumber("hotel");

    const food =
        getNumber("food");

    const transport =
        getNumber("transport");


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


    result.innerHTML = `
        <span>
            ${t("budgetTotal")}
        </span>

        <strong>
            ${formatCurrency(
                total,
                "EUR"
            )}
        </strong>
    `;
}


/* =========================================================
   10. AIRLINE DATABASE
   ========================================================= */

const airlineDatabase = [

    {
        name:
            "Singapore Airlines",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "dubai",
            "singapore",
            "sydney",
            "toronto",
            "bangkok",
            "jakarta",
            "frankfurt"
        ],

        overall: 9.8,
        value: 8.5,
        economy: 9.6,
        business: 9.9,
        comfort: 9.8
    },


    {
        name:
            "Qatar Airways",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "dubai",
            "sydney",
            "toronto",
            "bangkok",
            "jakarta",
            "frankfurt"
        ],

        overall: 9.7,
        value: 8.8,
        economy: 9.4,
        business: 10.0,
        comfort: 9.8
    },


    {
        name:
            "Emirates",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "dubai",
            "sydney",
            "toronto",
            "bangkok",
            "jakarta",
            "frankfurt"
        ],

        overall: 9.6,
        value: 8.6,
        economy: 9.3,
        business: 9.7,
        comfort: 9.7
    },


    {
        name:
            "ANA",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "sydney",
            "singapore",
            "bangkok",
            "frankfurt"
        ],

        overall: 9.5,
        value: 8.4,
        economy: 9.5,
        business: 9.7,
        comfort: 9.6
    },


    {
        name:
            "Cathay Pacific",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "sydney",
            "singapore",
            "bangkok",
            "jakarta",
            "frankfurt"
        ],

        overall: 9.3,
        value: 8.7,
        economy: 9.2,
        business: 9.5,
        comfort: 9.5
    },


    {
        name:
            "Lufthansa",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "singapore",
            "toronto",
            "bangkok",
            "frankfurt"
        ],

        overall: 9.0,
        value: 8.1,
        economy: 8.7,
        business: 9.0,
        comfort: 8.9
    },


    {
        name:
            "Air France",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "singapore",
            "toronto",
            "bangkok",
            "frankfurt"
        ],

        overall: 9.0,
        value: 8.3,
        economy: 8.9,
        business: 9.3,
        comfort: 9.1
    },


    {
        name:
            "KLM",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "singapore",
            "toronto",
            "bangkok",
            "frankfurt"
        ],

        overall: 8.9,
        value: 8.5,
        economy: 8.8,
        business: 9.0,
        comfort: 8.9
    },


    {
        name:
            "Etihad Airways",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "dubai",
            "sydney",
            "toronto",
            "bangkok",
            "jakarta",
            "frankfurt"
        ],

        overall: 9.2,
        value: 8.9,
        economy: 9.0,
        business: 9.6,
        comfort: 9.4
    },


    {
        name:
            "Turkish Airlines",

        destinations: [
            "new-york",
            "london",
            "paris",
            "tokyo",
            "dubai",
            "sydney",
            "toronto",
            "bangkok",
            "jakarta",
            "frankfurt"
        ],

        overall: 9.1,
        value: 9.1,
        economy: 9.0,
        business: 9.1,
        comfort: 9.0
    }
];


/* =========================================================
   11. AIRLINE FINDER
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
}


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
}


function getAirlinePriorityName(
    priority
) {

    if (
        priority === "overall"
    ) {

        return t("overall");
    }

    if (
        priority === "value"
    ) {

        return t("value");
    }

    if (
        priority === "economy"
    ) {

        return t("economy");
    }

    if (
        priority === "business"
    ) {

        return t("business");
    }

    return t("comfort");
}


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


    const results =
        document.getElementById(
            "airlineResults"
        );


    if (!results) return;


    const matches =
        airlineDatabase
            .filter(
                airline =>
                    airline.destinations
                        .includes(
                            destination
                        )
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    b[priority] -
                    a[priority]
            )
            .slice(
                0,
                3
            );


    if (
        !matches.length
    ) {

        results.innerHTML = `
            <div class="result-box">
                ${t("noAirlines")}
            </div>
        `;

        return;
    }


    results.innerHTML =
        matches
            .map(
                (
                    airline,
                    index
                ) => {

                    const score =
                        airline[
                            priority
                        ];


                    const medal =
                        index === 0
                            ? "🥇"
                            : index === 1
                                ? "🥈"
                                : "🥉";


                    return `
                        <div
                            class="airline-result-card"
                        >

                            <div
                                class="airline-result-top"
                            >

                                <span
                                    class="airline-rank"
                                >
                                    ${medal}
                                </span>


                                <div>

                                    <h3>
                                        ${airline.name}
                                    </h3>

                                    <span>
                                        ${getAirlinePriorityName(
                                            priority
                                        )}
                                    </span>

                                </div>


                                <strong
                                    class="airline-score"
                                >
                                    ${score.toFixed(1)}
                                </strong>

                            </div>


                            <div
                                class="airline-score-bar"
                            >

                                <span
                                    style="
                                        width:${score * 10}%;
                                    "
                                ></span>

                            </div>

                        </div>
                    `;
                }
            )
            .join("");
}


function updateAirlineFinderLanguage() {

    const results =
        document.getElementById(
            "airlineResults"
        );


    /*
     * Existing results need to be
     * rendered again after language change.
     */

    if (
        results &&
        results.children.length > 0
    ) {

        findAirlines();
    }
}


/* =========================================================
   12. CARD SYSTEM
   ========================================================= */

function toggleTool(
    cardId
) {

    const card =
        document.getElementById(
            cardId
        );


    if (!card) return;


    const wasOpen =
        card.classList.contains(
            "open"
        );


    /*
     * Close every other card.
     */

    document
        .querySelectorAll(
            ".tool-card.open"
        )
        .forEach(
            openCard => {

                openCard.classList.remove(
                    "open"
                );
            }
        );


    /*
     * Toggle selected card.
     */

    if (!wasOpen) {

        card.classList.add(
            "open"
        );
    }
}


/* =========================================================
   13. MODAL HANDLING
   ========================================================= */

function setupModalClosing() {

    document
        .querySelectorAll(
            ".modal"
        )
        .forEach(
            modal => {

                modal.addEventListener(
                    "click",
                    event => {

                        if (
                            event.target ===
                            modal
                        ) {

                            modal.classList.remove(
                                "active"
                            );

                            modal.setAttribute(
                                "aria-hidden",
                                "true"
                            );
                        }
                    }
                );
            }
        );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) return;


            document
                .querySelectorAll(
                    ".modal.active"
                )
                .forEach(
                    modal => {

                        modal.classList.remove(
                            "active"
                        );

                        modal.setAttribute(
                            "aria-hidden",
                            "true"
                        );
                    }
                );
        }
    );
}


/* =========================================================
   14. AIRLINE FINDER KEYBOARD SUPPORT
   ========================================================= */

function setupKeyboardControls() {

    const airlineCard =
        document.querySelector(
            ".airline-finder-card"
        );


    if (!airlineCard) return;


    airlineCard.addEventListener(
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


/* =========================================================
   15. DEFAULT VALUES
   ========================================================= */

function setDefaultDate() {

    const date =
        document.getElementById(
            "timezoneDate"
        );


    if (!date) return;


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


    date.value =
        `${year}-${month}-${day}`;
}


function setupDefaultValues() {

    const timezoneTime =
        document.getElementById(
            "timezoneTime"
        );


    if (
        timezoneTime &&
        !timezoneTime.value
    ) {

        timezoneTime.value =
            "12:00";
    }
}


/* =========================================================
   16. INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        /*
         * Never allow one initialization
         * failure to break the rest of the app.
         */

        try {

            applyLanguage();

        } catch (error) {

            console.error(
                "Language initialization failed:",
                error
            );
        }


        try {

            populateTimezones();

        } catch (error) {

            console.error(
                "Timezone initialization failed:",
                error
            );
        }


        try {

            setDefaultDate();

            setupDefaultValues();

        } catch (error) {

            console.error(
                "Default value setup failed:",
                error
            );
        }


        try {

            setupModalClosing();

            setupKeyboardControls();

        } catch (error) {

            console.error(
                "Modal setup failed:",
                error
            );
        }


        /*
         * Currency API is deliberately isolated.
         * If it fails, the rest of TravelMate
         * still works.
         */

        try {

            await initializeCurrencies();

        } catch (error) {

            console.error(
                "Currency initialization failed:",
                error
            );
        }


        try {

            applyLanguage();

        } catch (error) {

            console.error(
                "Final language update failed:",
                error
            );
        }

    }
);