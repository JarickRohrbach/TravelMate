/* =========================================================
   TRAVELMATE
   COMPLETE SCRIPT
   Compatible with current index.html
   ========================================================= */


/* =========================================================
   1. CONFIG
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
   2. TRANSLATIONS
   ========================================================= */

const translations = {

    de: {

        subtitle:
            "Deine Reise. Einfacher.",

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

        settings:
            "Einstellungen",

        settingsDescription:
            "Sprache und App-Einstellungen",

        language:
            "Sprache",

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

        budgetTotal:
            "Gesamtkosten",

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

        minutes:
            "Minuten",

        hours:
            "Stunden",

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

        budgetTotal:
            "Total cost",

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

        minutes:
            "minutes",

        hours:
            "hours",

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
   3. TRANSLATION SYSTEM
   ========================================================= */

function getLanguage() {

    return currentLanguage === "en"
        ? "en"
        : "de";
}


function t(key) {

    return (
        translations[getLanguage()]?.[key] ||
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

            element.textContent =
                t(key);
        });


    const languageSelect =
        document.getElementById(
            "languageSelect"
        );

    if (languageSelect) {

        languageSelect.value =
            getLanguage();
    }


    /*
     * Placeholders
     */

    const email =
        document.getElementById(
            "email"
        );

    const password =
        document.getElementById(
            "password"
        );

    const amount =
        document.getElementById(
            "amount"
        );


    if (email) {

        email.placeholder =
            t("email");
    }

    if (password) {

        password.placeholder =
            t("password");
    }

    if (amount) {

        amount.placeholder =
            getLanguage() === "de"
                ? "Betrag eingeben"
                : "Enter amount";
    }


    updateAccountUI();
}


/* =========================================================
   4. ACCOUNT
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

    const emailElement =
        document.getElementById(
            "email"
        );

    const passwordElement =
        document.getElementById(
            "password"
        );

    const message =
        document.getElementById(
            "accountMessage"
        );


    const email =
        emailElement
            ? emailElement.value
                .trim()
                .toLowerCase()
            : "";

    const password =
        passwordElement
            ? passwordElement.value
            : "";


    /*
     * Built-in demo account
     */

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
     * Locally created demo account
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
        email &&
        password &&
        email === savedEmail &&
        password === savedPassword
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

    const emailElement =
        document.getElementById(
            "email"
        );

    const passwordElement =
        document.getElementById(
            "password"
        );

    const message =
        document.getElementById(
            "accountMessage"
        );


    const email =
        emailElement
            ? emailElement.value
                .trim()
                .toLowerCase()
            : "";

    const password =
        passwordElement
            ? passwordElement.value
            : "";


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
            t(
                "accountCreated"
            );

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
            t(
                "loggedOut"
            );

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
   5. CARD SYSTEM
   ========================================================= */

function toggleTool(cardId) {

    const card =
        document.getElementById(
            cardId
        );

    if (!card) return;


    const isOpen =
        card.classList.contains(
            "open"
        );


    /*
     * Only close other tool cards.
     * Do NOT close the clicked card first.
     */

    document
        .querySelectorAll(
            ".tool-card.open"
        )
        .forEach(
            otherCard => {

                if (
                    otherCard !== card
                ) {

                    otherCard.classList.remove(
                        "open"
                    );
                }
            }
        );


    if (isOpen) {

        card.classList.remove(
            "open"
        );

    } else {

        card.classList.add(
            "open"
        );
    }
}


/* =========================================================
   6. CURRENCY API
   ========================================================= */

async function fetchCurrencyRates() {

    /*
     * Primary API
     */

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
                "Invalid currency API response"
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
     * Fallback API
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
            "Currency API failed:",
            error
        );

        currencyRates = null;

        return null;
    }
}


/* =========================================================
   7. CURRENCY DROPDOWNS
   ========================================================= */

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
            '<option value="EUR">EUR</option>';

        to.innerHTML =
            '<option value="IDR">IDR</option>';

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


/* =========================================================
   8. CURRENCY INITIALIZATION
   ========================================================= */

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
                t(
                    "rateError"
                );
        }

        return;
    }


    populateCurrencies(
        "EUR",
        "IDR"
    );


    if (result) {

        result.textContent =
            t(
                "currencyResult"
            );
    }
}


/* =========================================================
   9. CURRENCY CONVERSION
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
                style:
                    "currency",

                currency:
                    currency,

                maximumFractionDigits:
                    2
            }
        ).format(value);

    } catch {

        return (
            `${value.toFixed(2)} ${currency}`
        );
    }
}


async function convertCurrency() {

    const amountElement =
        document.getElementById(
            "amount"
        );

    const fromElement =
        document.getElementById(
            "fromCurrency"
        );

    const toElement =
        document.getElementById(
            "toCurrency"
        );

    const result =
        document.getElementById(
            "currencyResult"
        );


    const amount =
        amountElement
            ? Number(
                amountElement.value
            )
            : NaN;


    const from =
        fromElement
            ? fromElement.value
            : "EUR";


    const to =
        toElement
            ? toElement.value
            : "IDR";


    if (
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        if (result) {

            result.textContent =
                t(
                    "invalidAmount"
                );
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
                t(
                    "rateError"
                );
        }

        return;
    }


    /*
     * Rates are based on EUR.
     */

    const eurAmount =
        amount /
        currencyRates[from];


    const converted =
        eurAmount *
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
   10. CONNECTION CALCULATOR
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


    const arrivalTotal =
        arrivalHour * 60 +
        arrivalMinute;


    let departureTotal =
        departureHour * 60 +
        departureMinute;


    /*
     * If departure is earlier than
     * arrival, assume next day.
     */

    if (
        departureTotal <=
        arrivalTotal
    ) {

        departureTotal +=
            24 * 60;
    }


    const difference =
        departureTotal -
        arrivalTotal;


    let status;


    if (
        difference < 60
    ) {

        status =
            t(
                "connectionTooShort"
            );

    } else if (
        difference < 90
    ) {

        status =
            t(
                "connectionTight"
            );

    } else if (
        difference <= 240
    ) {

        status =
            t(
                "connectionGood"
            );

    } else {

        status =
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


    let duration;


    if (hours > 0) {

        duration =
            `${hours} ${t("hours")}`;

        if (minutes > 0) {

            duration +=
                ` ${minutes} ${t("minutes")}`;
        }

    } else {

        duration =
            `${minutes} ${t("minutes")}`;
    }


    if (result) {

        result.innerHTML = `
            <strong>
                ${status}
            </strong>

            <span>
                ${duration}
            </span>
        `;
    }
}


/* =========================================================
   11. TIMEZONE DATA
   ========================================================= */

const timezones = [

    "UTC",

    "Europe/Berlin",
    "Europe/London",
    "Europe/Paris",
    "Europe/Madrid",
    "Europe/Rome",
    "Europe/Amsterdam",
    "Europe/Vienna",
    "Europe/Zurich",

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


/* =========================================================
   12. TIMEZONE DROPDOWNS
   ========================================================= */

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

            const fromOption =
                document.createElement(
                    "option"
                );

            const toOption =
                document.createElement(
                    "option"
                );


            fromOption.value =
                zone;

            toOption.value =
                zone;


            fromOption.textContent =
                zone;

            toOption.textContent =
                zone;


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
   13. TIMEZONE CONVERTER
   ========================================================= */

function getTimeZoneOffset(
    date,
    timeZone
) {

    const parts =
        new Intl.DateTimeFormat(
            "en-US",
            {
                timeZone:
                    timeZone,

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
                t(
                    "timezoneResult"
                );
        }

        return;
    }


    try {

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


        /*
         * Start with the requested local
         * time interpreted as UTC.
         */

        let timestamp =
            Date.UTC(
                year,
                month - 1,
                day,
                hour,
                minute,
                0
            );


        /*
         * Correct for source timezone.
         */

        for (
            let i = 0;
            i < 3;
            i++
        ) {

            const offset =
                getTimeZoneOffset(
                    new Date(
                        timestamp
                    ),
                    fromZone
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


        const output =
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
                        timestamp
                    )
                );


        if (result) {

            result.innerHTML = `
                <strong>
                    ${output}
                </strong>

                <span>
                    ${toZone}
                </span>
            `;
        }

    } catch (error) {

        console.error(
            "Timezone error:",
            error
        );

        if (result) {

            result.textContent =
                t(
                    "timezoneResult"
                );
        }
    }
}


/* =========================================================
   14. BUDGET
   ========================================================= */

function getNumber(id) {

    const element =
        document.getElementById(
            id
        );


    if (!element) return 0;


    const number =
        Number(
            element.value
        );


    if (
        !Number.isFinite(
            number
        )
    ) {

        return 0;
    }


    return Math.max(
        0,
        number
    );
}


function calculateBudget() {

    const flight =
        getNumber(
            "flight"
        );

    const hotel =
        getNumber(
            "hotel"
        );

    const food =
        getNumber(
            "food"
        );

    const transport =
        getNumber(
            "transport"
        );


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
   15. AIRLINE FINDER DATABASE
   ========================================================= */

/* =========================================================
   TRAVELMATE AIRLINE FINDER
   DATABASE VERSION
   ========================================================= */

const TravelMateAirlineFinder = (() => {

    /* =====================================================
       TRANSLATIONS – ONLY FOR AIRLINE FINDER
       ===================================================== */

    const translations = {
        de: {
            noResults: "Keine passenden Airlines gefunden.",
            overall: "Gesamtqualität",
            value: "Preis-Leistung",
            economy: "Economy",
            business: "Business Class",
            comfort: "Komfort"
        },

        en: {
            noResults: "No matching airlines found.",
            overall: "Overall quality",
            value: "Value for money",
            economy: "Economy",
            business: "Business Class",
            comfort: "Comfort"
        }
    };


    /* =====================================================
       AIRLINE DATABASE
       ===================================================== */

    const database = [

        {
            name: "Singapore Airlines",
            code: "SQ",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 9.8,
            value: 8.7,
            economy: 9.7,
            business: 9.9,
            comfort: 9.9
        },

        {
            name: "Qatar Airways",
            code: "QR",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "dubai",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 9.7,
            value: 9.2,
            economy: 9.5,
            business: 10.0,
            comfort: 9.8
        },

        {
            name: "Emirates",
            code: "EK",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "dubai",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 9.6,
            value: 8.8,
            economy: 9.5,
            business: 9.8,
            comfort: 9.8
        },

        {
            name: "ANA",
            code: "NH",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "frankfurt"
            ],
            overall: 9.5,
            value: 8.7,
            economy: 9.6,
            business: 9.7,
            comfort: 9.7
        },

        {
            name: "Japan Airlines",
            code: "JL",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "frankfurt"
            ],
            overall: 9.4,
            value: 8.8,
            economy: 9.5,
            business: 9.6,
            comfort: 9.6
        },

        {
            name: "Cathay Pacific",
            code: "CX",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 9.4,
            value: 8.9,
            economy: 9.3,
            business: 9.6,
            comfort: 9.6
        },

        {
            name: "Etihad Airways",
            code: "EY",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "dubai",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 9.3,
            value: 9.1,
            economy: 9.1,
            business: 9.7,
            comfort: 9.5
        },

        {
            name: "Korean Air",
            code: "KE",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "frankfurt"
            ],
            overall: 9.2,
            value: 8.8,
            economy: 9.2,
            business: 9.5,
            comfort: 9.4
        },

        {
            name: "Turkish Airlines",
            code: "TK",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "dubai",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 9.2,
            value: 9.4,
            economy: 9.1,
            business: 9.2,
            comfort: 9.1
        },

        {
            name: "Qantas",
            code: "QF",
            destinations: [
                "new-york",
                "london",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "frankfurt"
            ],
            overall: 9.1,
            value: 8.4,
            economy: 9.0,
            business: 9.4,
            comfort: 9.2
        },

        {
            name: "Lufthansa",
            code: "LH",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "bangkok",
                "frankfurt"
            ],
            overall: 9.0,
            value: 8.2,
            economy: 8.8,
            business: 9.1,
            comfort: 8.9
        },

        {
            name: "Air France",
            code: "AF",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "bangkok",
                "frankfurt"
            ],
            overall: 9.0,
            value: 8.5,
            economy: 9.0,
            business: 9.3,
            comfort: 9.2
        },

        {
            name: "KLM",
            code: "KL",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "bangkok",
                "frankfurt"
            ],
            overall: 8.9,
            value: 8.8,
            economy: 8.8,
            business: 9.1,
            comfort: 8.9
        },

        {
            name: "Virgin Atlantic",
            code: "VS",
            destinations: [
                "new-york",
                "london",
                "tokyo",
                "singapore",
                "sydney",
                "frankfurt"
            ],
            overall: 8.8,
            value: 8.4,
            economy: 8.8,
            business: 9.2,
            comfort: 9.0
        },

        {
            name: "Thai Airways",
            code: "TG",
            destinations: [
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 8.8,
            value: 9.0,
            economy: 8.8,
            business: 9.0,
            comfort: 8.8
        },

        {
            name: "Finnair",
            code: "AY",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "bangkok",
                "singapore",
                "frankfurt"
            ],
            overall: 8.8,
            value: 8.7,
            economy: 8.8,
            business: 8.9,
            comfort: 8.8
        },

        {
            name: "Swiss",
            code: "LX",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "bangkok",
                "frankfurt"
            ],
            overall: 8.9,
            value: 8.1,
            economy: 8.8,
            business: 9.1,
            comfort: 8.9
        },

        {
            name: "Austrian Airlines",
            code: "OS",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "bangkok",
                "frankfurt"
            ],
            overall: 8.7,
            value: 8.4,
            economy: 8.6,
            business: 8.9,
            comfort: 8.7
        },

        {
            name: "British Airways",
            code: "BA",
            destinations: [
                "new-york",
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "toronto",
                "frankfurt"
            ],
            overall: 8.7,
            value: 8.0,
            economy: 8.5,
            business: 8.9,
            comfort: 8.6
        },

        {
            name: "Malaysia Airlines",
            code: "MH",
            destinations: [
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 8.6,
            value: 9.0,
            economy: 8.7,
            business: 8.9,
            comfort: 8.6
        },

        {
            name: "Garuda Indonesia",
            code: "GA",
            destinations: [
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "jakarta",
                "frankfurt"
            ],
            overall: 8.5,
            value: 8.8,
            economy: 8.7,
            business: 8.8,
            comfort: 8.6
        },

        {
            name: "Vietnam Airlines",
            code: "VN",
            destinations: [
                "london",
                "paris",
                "tokyo",
                "singapore",
                "sydney",
                "bangkok",
                "frankfurt"
            ],
            overall: 8.5,
            value: 9.0,
            economy: 8.7,
            business: 8.8,
            comfort: 8.5
        },

        {
            name: "Iberia",
            code: "IB",
            destinations: [
                "new-york",
                "london",
                "paris",
                "frankfurt"
            ],
            overall: 8.5,
            value: 8.6,
            economy: 8.4,
            business: 8.8,
            comfort: 8.4
        },

        {
            name: "ITA Airways",
            code: "AZ",
            destinations: [
                "new-york",
                "london",
                "paris",
                "frankfurt"
            ],
            overall: 8.3,
            value: 8.3,
            economy: 8.2,
            business: 8.5,
            comfort: 8.3
        }

    ];


    /* =====================================================
       LANGUAGE
       ===================================================== */

    function getLanguage() {

        if (
            typeof currentLanguage !== "undefined" &&
            currentLanguage === "en"
        ) {
            return "en";
        }

        return "de";
    }


    function t(key) {

        const language =
            getLanguage();

        return (
            translations[language]?.[key] ||
            translations.de[key] ||
            key
        );
    }


    /* =====================================================
       OPEN FINDER
       ===================================================== */

    function open() {

        const modal =
            document.getElementById(
                "airlineFinderModal"
            );

        if (!modal) {

            console.error(
                "TravelMate: airlineFinderModal fehlt."
            );

            return;
        }

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    /* =====================================================
       CLOSE FINDER
       ===================================================== */

    function close() {

        const modal =
            document.getElementById(
                "airlineFinderModal"
            );

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    /* =====================================================
       FIND AIRLINES
       ===================================================== */

    function find() {

        const destination =
            document.getElementById(
                "airlineDestination"
            );

        const priority =
            document.getElementById(
                "airlinePriority"
            );

        const results =
            document.getElementById(
                "airlineResults"
            );


        if (
            !destination ||
            !priority ||
            !results
        ) {

            console.error(
                "TravelMate: Airline Finder HTML elements fehlen."
            );

            return;
        }


        const selectedDestination =
            destination.value;


        const selectedPriority =
            priority.value;


        const validPriorities = [
            "overall",
            "value",
            "economy",
            "business",
            "comfort"
        ];


        const safePriority =
            validPriorities.includes(
                selectedPriority
            )
                ? selectedPriority
                : "overall";


        const matches =
            database
                .filter(
                    airline =>
                        airline.destinations.includes(
                            selectedDestination
                        )
                )
                .sort(
                    (a, b) =>
                        b[safePriority] -
                        a[safePriority]
                );


        if (
            matches.length === 0
        ) {

            results.innerHTML = `
                <div class="result-box">
                    ${t("noResults")}
                </div>
            `;

            return;
        }


        results.innerHTML =
            matches
                .slice(0, 5)
                .map(
                    (
                        airline,
                        index
                    ) =>
                        createCard(
                            airline,
                            index,
                            safePriority
                        )
                )
                .join("");
    }


    /* =====================================================
       RESULT CARD
       ===================================================== */

    function createCard(
        airline,
        index,
        priority
    ) {

        const medals = [
            "🥇",
            "🥈",
            "🥉",
            "✈️",
            "✈️"
        ];


        const score =
            Number(
                airline[priority]
            ).toFixed(1);


        return `
            <div class="airline-result-card">

                <div
                    style="
                        display:flex;
                        align-items:center;
                        gap:12px;
                    "
                >

                    <div
                        style="
                            font-size:28px;
                        "
                    >
                        ${medals[index] || "✈️"}
                    </div>

                    <div
                        style="
                            flex:1;
                        "
                    >

                        <strong
                            style="
                                display:block;
                                font-size:18px;
                            "
                        >
                            ${airline.name}
                        </strong>

                        <small>
                            ${airline.code}
                        </small>

                    </div>

                    <strong
                        style="
                            font-size:22px;
                        "
                    >
                        ${score}/10
                    </strong>

                </div>


                <div
                    style="
                        margin-top:12px;
                        height:8px;
                        background:rgba(0,0,0,.08);
                        border-radius:10px;
                        overflow:hidden;
                    "
                >

                    <div
                        style="
                            width:${Number(score) * 10}%;
                            height:100%;
                            background:#087cf5;
                        "
                    ></div>

                </div>


                <div
                    style="
                        display:grid;
                        grid-template-columns:1fr 1fr;
                        gap:8px;
                        margin-top:14px;
                        font-size:13px;
                    "
                >

                    <span>
                        ⭐ ${t("overall")}:
                        ${airline.overall}/10
                    </span>

                    <span>
                        💰 ${t("value")}:
                        ${airline.value}/10
                    </span>

                    <span>
                        🧳 ${t("economy")}:
                        ${airline.economy}/10
                    </span>

                    <span>
                        👑 ${t("business")}:
                        ${airline.business}/10
                    </span>

                    <span>
                        🛋️ ${t("comfort")}:
                        ${airline.comfort}/10
                    </span>

                </div>

            </div>
        `;
    }


    return {
        open,
        close,
        find
    };

})();


/* =========================================================
   HTML COMPATIBILITY FUNCTIONS
   ========================================================= */

function openAirlineFinder() {

    TravelMateAirlineFinder.open();

}


function closeAirlineFinder() {

    TravelMateAirlineFinder.close();

}


function findAirlines() {

    TravelMateAirlineFinder.find();

}


/* =========================================================
   ESC TO CLOSE
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !== "Escape"
        ) {
            return;
        }

        const modal =
            document.getElementById(
                "airlineFinderModal"
            );

        if (
            modal &&
            modal.classList.contains(
                "active"
            )
        ) {

            closeAirlineFinder();

        }

    }
);


/* =========================================================
   CLICK OUTSIDE MODAL TO CLOSE
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "airlineFinderModal"
            );

        if (
            modal &&
            event.target === modal
        ) {

            closeAirlineFinder();

        }

    }
);

/* =========================================================
   AIRLINE FINDER LANGUAGE UPDATE
   ========================================================= */

function updateAirlineFinderLanguage() {

    const results =
        document.getElementById(
            "airlineResults"
        );


    /*
     * Re-render existing results
     * when language changes.
     */

    if (
        results &&
        results.children.length > 0
    ) {

        findAirlines();
    }
}
   





 





/* =========================================================
   17. MODAL HANDLING
   ========================================================= */

function closeModalOnBackgroundClick() {

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


    const airlineModal =
        document.getElementById(
            "airlineFinderModal"
        );


    if (airlineModal) {

        airlineModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    airlineModal
                ) {

                    closeAirlineFinder();
                }
            }
        );
    }
}


function setupEscapeKey() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {

                return;
            }


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
   18. DEFAULT VALUES
   ========================================================= */

function setDefaultDate() {

    const element =
        document.getElementById(
            "timezoneDate"
        );


    if (!element) return;


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        )
            .padStart(
                2,
                "0"
            );


    const day =
        String(
            today.getDate()
        )
            .padStart(
                2,
                "0"
            );


    element.value =
        `${year}-${month}-${day}`;
}


function setDefaultTime() {

    const element =
        document.getElementById(
            "timezoneTime"
        );


    if (
        element &&
        !element.value
    ) {

        element.value =
            "12:00";
    }
}


/* =========================================================
   19. INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        /*
         * UI first.
         * No API failure is allowed to
         * stop the rest of the application.
         */

        try {

            applyLanguage();

        } catch (error) {

            console.error(
                "Language initialization:",
                error
            );
        }


        try {

            populateTimezones();

            setDefaultDate();

            setDefaultTime();

        } catch (error) {

            console.error(
                "Timezone initialization:",
                error
            );
        }


        try {

            closeModalOnBackgroundClick();

            setupEscapeKey();

        } catch (error) {

            console.error(
                "Modal initialization:",
                error
            );
        }


        try {

            updateAccountUI();

        } catch (error) {

            console.error(
                "Account initialization:",
                error
            );
        }


        /*
         * Currency API is isolated.
         * If the API is down, the other
         * functions remain clickable.
         */

        try {

            await initializeCurrencies();

        } catch (error) {

            console.error(
                "Currency initialization:",
                error
            );
        }


        /*
         * Apply translations one final time
         * after currency initialization.
         */

        try {

            applyLanguage();

        } catch (error) {

            console.error(
                "Final language initialization:",
                error
            );
        }
    }
);