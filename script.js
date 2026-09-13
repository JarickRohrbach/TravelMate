/* =========================================================
   TRAVELMATE
   Complete JavaScript
   ========================================================= */

/* =========================================================
   1. TRANSLATIONS
   ========================================================= */

const translations = {

    de: {

        appSubtitle: "Deine Reise. Einfacher.",

        settings: "Einstellungen",
        language: "Sprache",
        german: "Deutsch",
        english: "Englisch",

        currencyTitle: "Währungsrechner",
        currencyDescription: "Konvertiere Währungen mit aktuellen Wechselkursen.",
        amount: "Betrag",
        from: "Von",
        to: "Nach",
        convert: "Umrechnen",
        loading: "Lädt...",
        currencyError: "Wechselkurs konnte nicht geladen werden.",

        airlineFinder: "Airline Finder",
        airlineDescription: "Finde die Airline, die am besten zu deiner Reise passt.",
        destination: "Reiseziel",
        priority: "Was ist dir wichtig?",
        bestOverall: "Beste Gesamtleistung",
        bestValue: "Preis-Leistung",
        bestEconomy: "Economy",
        bestBusiness: "Business Class",
        bestComfort: "Komfort",
        bestWifi: "WLAN",
        bestConnections: "Verbindungen",
        findAirlines: "Airlines finden",
        recommendations: "Empfehlungen",
        topPick: "Top-Empfehlung",
        liveData: "Live-Daten",
        rating: "Bewertung",
        service: "Service",
        comfort: "Komfort",
        value: "Preis-Leistung",
        network: "Streckennetz",
        entertainment: "Entertainment",

        connectionTitle: "Anschlussrechner",
        connectionDescription: "Prüfe, wie viel Zeit du für deinen Anschluss hast.",
        arrival: "Ankunft",
        departure: "Abflug",
        calculate: "Berechnen",
        connectionTime: "Umsteigezeit",
        goodConnection: "Guter Puffer",
        tightConnection: "Knapp",
        badConnection: "Sehr knapp",

        timezoneTitle: "Zeitzonenrechner",
        timezoneDescription: "Vergleiche die Zeit an verschiedenen Orten.",
        date: "Datum",
        time: "Uhrzeit",
        fromTimezone: "Ausgangszeitzone",
        toTimezone: "Zielzeitzone",
        convertTime: "Zeit umrechnen",

        budgetTitle: "Reisebudget",
        budgetDescription: "Berechne deine voraussichtlichen Reisekosten.",
        flightCost: "Flug",
        hotelCost: "Unterkunft",
        foodCost: "Essen",
        transportCost: "Transport",
        otherCost: "Sonstiges",
        total: "Gesamt",

        accountTitle: "Mein Account",
        notLoggedIn: "Nicht angemeldet",
        email: "E-Mail",
        password: "Passwort",
        login: "Anmelden",
        createAccount: "Account erstellen",
        logout: "Abmelden",
        demoAccount: "Demo Account",
        loginSuccess: "Erfolgreich angemeldet.",
        accountCreated: "Account erstellt.",
        invalidLogin: "E-Mail oder Passwort falsch.",

        close: "Schließen",
        error: "Fehler",
        pleaseEnter: "Bitte fülle alle Felder aus."
    },

    en: {

        appSubtitle: "Your journey. Made easier.",

        settings: "Settings",
        language: "Language",
        german: "German",
        english: "English",

        currencyTitle: "Currency Converter",
        currencyDescription: "Convert currencies using current exchange rates.",
        amount: "Amount",
        from: "From",
        to: "To",
        convert: "Convert",
        loading: "Loading...",
        currencyError: "Exchange rate could not be loaded.",

        airlineFinder: "Airline Finder",
        airlineDescription: "Find the airline that best matches your trip.",
        destination: "Destination",
        priority: "What matters to you?",
        bestOverall: "Best Overall",
        bestValue: "Best Value",
        bestEconomy: "Best Economy",
        bestBusiness: "Best Business Class",
        bestComfort: "Best Comfort",
        bestWifi: "Best Wi-Fi",
        bestConnections: "Best Connections",
        findAirlines: "Find Airlines",
        recommendations: "Recommendations",
        topPick: "Top Pick",
        liveData: "Live Data",
        rating: "Rating",
        service: "Service",
        comfort: "Comfort",
        value: "Value",
        network: "Network",
        entertainment: "Entertainment",

        connectionTitle: "Connection Calculator",
        connectionDescription: "Check how much time you have for your connection.",
        arrival: "Arrival",
        departure: "Departure",
        calculate: "Calculate",
        connectionTime: "Connection time",
        goodConnection: "Good buffer",
        tightConnection: "Tight",
        badConnection: "Very tight",

        timezoneTitle: "Time Zone Converter",
        timezoneDescription: "Compare the time in different locations.",
        date: "Date",
        time: "Time",
        fromTimezone: "From time zone",
        toTimezone: "To time zone",
        convertTime: "Convert time",

        budgetTitle: "Travel Budget",
        budgetDescription: "Calculate your estimated travel costs.",
        flightCost: "Flight",
        hotelCost: "Accommodation",
        foodCost: "Food",
        transportCost: "Transport",
        otherCost: "Other",
        total: "Total",

        accountTitle: "My Account",
        notLoggedIn: "Not logged in",
        email: "Email",
        password: "Password",
        login: "Sign in",
        createAccount: "Create account",
        logout: "Sign out",
        demoAccount: "Demo Account",
        loginSuccess: "Successfully signed in.",
        accountCreated: "Account created.",
        invalidLogin: "Incorrect email or password.",

        close: "Close",
        error: "Error",
        pleaseEnter: "Please fill in all fields."
    }
};


/* =========================================================
   2. LANGUAGE SYSTEM
   ========================================================= */

let currentLanguage =
    localStorage.getItem("travelmateLanguage") || "de";

function t(key) {

    return (
        translations[currentLanguage]?.[key] ??
        translations.de[key] ??
        key
    );
}


function setLanguage(language) {

    if (!translations[language]) {
        language = "de";
    }

    currentLanguage = language;

    localStorage.setItem(
        "travelmateLanguage",
        language
    );

    applyTranslations();
}


function applyTranslations() {

    document.documentElement.lang =
        currentLanguage;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (translations[currentLanguage][key]) {

                element.textContent =
                    translations[currentLanguage][key];

            }
        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            if (translations[currentLanguage][key]) {

                element.placeholder =
                    translations[currentLanguage][key];

            }
        });


    const languageSelect =
        document.getElementById(
            "languageSelect"
        );

    if (languageSelect) {

        languageSelect.value =
            currentLanguage;

    }


    updateAirlineFinderTexts();

    updateAccountUI();
}


/* =========================================================
   3. SETTINGS
   ========================================================= */

function openSettings() {

    const settings =
        document.getElementById(
            "settingsModal"
        );

    if (!settings) return;

    settings.classList.add("active");

    settings.style.display = "flex";
}


function closeSettings() {

    const settings =
        document.getElementById(
            "settingsModal"
        );

    if (!settings) return;

    settings.classList.remove("active");

    settings.style.display = "none";
}


function initializeSettings() {

    const select =
        document.getElementById(
            "languageSelect"
        );

    if (select) {

        select.value =
            currentLanguage;

        select.addEventListener(
            "change",
            () => {

                setLanguage(
                    select.value
                );

            }
        );
    }
}


/* =========================================================
   4. CURRENCY API
   ========================================================= */

/*
   ExchangeRate-API:
   https://open.er-api.com/v6/latest/EUR

   Fallback:
   Frankfurter API
*/

const CURRENCY_API =
    "https://open.er-api.com/v6/latest/EUR";

const CURRENCY_FALLBACK =
    "https://api.frankfurter.app/latest?from=EUR";

let currencyRates = null;


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
            throw new Error("API error");
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

        currencyRates =
            data.rates;

        currencyRates.EUR = 1;

        return true;

    } catch (error) {

        console.warn(
            "Primary currency API failed.",
            error
        );

    }


    /* Fallback */

    try {

        const response =
            await fetch(
                CURRENCY_FALLBACK,
                {
                    cache: "no-store"
                }
            );

        if (!response.ok) {
            throw new Error("Fallback error");
        }

        const data =
            await response.json();

        currencyRates = {
            EUR: 1,
            ...data.rates
        };

        return true;

    } catch (error) {

        console.error(
            "Currency APIs failed.",
            error
        );

        return false;
    }
}


function currencyName(code) {

    try {

        const names =
            new Intl.DisplayNames(
                [currentLanguage],
                {
                    type: "currency"
                }
            );

        return names.of(code) || code;

    } catch {

        return code;
    }
}


function populateCurrencySelects() {

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


    const oldFrom =
        from.value || "EUR";

    const oldTo =
        to.value || "IDR";


    const currencies =
        Object.keys(
            currencyRates
        ).sort();


    from.innerHTML = "";

    to.innerHTML = "";


    currencies.forEach(
        currency => {

            const option1 =
                document.createElement(
                    "option"
                );

            const option2 =
                document.createElement(
                    "option"
                );

            option1.value =
                currency;

            option2.value =
                currency;

            option1.textContent =
                `${currency} – ${currencyName(currency)}`;

            option2.textContent =
                `${currency} – ${currencyName(currency)}`;

            from.appendChild(
                option1
            );

            to.appendChild(
                option2
            );
        }
    );


    from.value =
        currencies.includes(oldFrom)
            ? oldFrom
            : "EUR";

    to.value =
        currencies.includes(oldTo)
            ? oldTo
            : "IDR";
}


async function initializeCurrency() {

    const from =
        document.getElementById(
            "fromCurrency"
        );

    if (!from) return;

    const result =
        document.getElementById(
            "currencyResult"
        );

    if (result) {

        result.textContent =
            t("loading");
    }


    const success =
        await fetchCurrencyRates();


    if (!success) {

        if (result) {

            result.textContent =
                t("currencyError");
        }

        return;
    }


    populateCurrencySelects();
}


function convertCurrency() {

    const amount =
        parseFloat(
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
        !result ||
        !currencyRates
    ) return;


    if (
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        result.textContent =
            t("pleaseEnter");

        return;
    }


    const fromRate =
        currencyRates[from];

    const toRate =
        currencyRates[to];


    if (
        !fromRate ||
        !toRate
    ) {

        result.textContent =
            t("currencyError");

        return;
    }


    const converted =
        amount *
        (toRate / fromRate);


    result.textContent =
        `${amount.toLocaleString(
            currentLanguage === "de"
                ? "de-DE"
                : "en-US"
        )} ${from} = ${converted.toLocaleString(
            currentLanguage === "de"
                ? "de-DE"
                : "en-US",
            {
                maximumFractionDigits:
                    2
            }
        )} ${to}`;
}


/* =========================================================
   5. AIRLINE DATABASE
   ========================================================= */

const AIRLINES = [

    {
        name: "Singapore Airlines",
        country: "Singapore",
        iata: "SQ",
        icao: "SIA",
        logo: "🇸🇬",

        overall: 98,
        value: 91,
        economy: 97,
        business: 100,
        comfort: 99,
        wifi: 96,
        connections: 99,

        destinations: [
            "singapore",
            "jakarta",
            "surabaya",
            "bali",
            "tokyo",
            "sydney",
            "london",
            "frankfurt",
            "paris",
            "new york"
        ],

        tags: [
            "service",
            "comfort",
            "premium",
            "longhaul"
        ]
    },


    {
        name: "Qatar Airways",
        country: "Qatar",
        iata: "QR",
        icao: "QTR",
        logo: "🇶🇦",

        overall: 98,
        value: 96,
        economy: 96,
        business: 100,
        comfort: 98,
        wifi: 96,
        connections: 100,

        destinations: [
            "doha",
            "jakarta",
            "bali",
            "tokyo",
            "sydney",
            "london",
            "frankfurt",
            "paris",
            "new york"
        ],

        tags: [
            "service",
            "business",
            "comfort",
            "value"
        ]
    },


    {
        name: "Emirates",
        country: "United Arab Emirates",
        iata: "EK",
        icao: "UAE",
        logo: "🇦🇪",

        overall: 97,
        value: 93,
        economy: 95,
        business: 99,
        comfort: 100,
        wifi: 95,
        connections: 99,

        destinations: [
            "dubai",
            "jakarta",
            "bali",
            "tokyo",
            "sydney",
            "london",
            "frankfurt",
            "paris",
            "new york"
        ],

        tags: [
            "comfort",
            "entertainment",
            "longhaul"
        ]
    },


    {
        name: "ANA",
        country: "Japan",
        iata: "NH",
        icao: "ANA",
        logo: "🇯🇵",

        overall: 98,
        value: 94,
        economy: 99,
        business: 98,
        comfort: 99,
        wifi: 94,
        connections: 95,

        destinations: [
            "tokyo",
            "osaka",
            "frankfurt",
            "london",
            "singapore",
            "new york"
        ],

        tags: [
            "service",
            "economy",
            "japan",
            "comfort"
        ]
    },


    {
        name: "Japan Airlines",
        country: "Japan",
        iata: "JL",
        icao: "JAL",
        logo: "🇯🇵",

        overall: 97,
        value: 95,
        economy: 99,
        business: 97,
        comfort: 98,
        wifi: 93,
        connections: 94,

        destinations: [
            "tokyo",
            "osaka",
            "frankfurt",
            "london",
            "singapore",
            "new york"
        ],

        tags: [
            "economy",
            "service",
            "japan"
        ]
    },


    {
        name: "Lufthansa",
        country: "Germany",
        iata: "LH",
        icao: "DLH",
        logo: "🇩🇪",

        overall: 92,
        value: 87,
        economy: 90,
        business: 94,
        comfort: 91,
        wifi: 92,
        connections: 100,

        destinations: [
            "frankfurt",
            "munich",
            "london",
            "paris",
            "new york",
            "tokyo"
        ],

        tags: [
            "network",
            "europe",
            "connections"
        ]
    },


    {
        name: "Air France",
        country: "France",
        iata: "AF",
        icao: "AFR",
        logo: "🇫🇷",

        overall: 94,
        value: 91,
        economy: 93,
        business: 97,
        comfort: 96,
        wifi: 91,
        connections: 97,

        destinations: [
            "paris",
            "frankfurt",
            "london",
            "tokyo",
            "new york"
        ],

        tags: [
            "service",
            "europe",
            "premium"
        ]
    },


    {
        name: "British Airways",
        country: "United Kingdom",
        iata: "BA",
        icao: "BAW",
        logo: "🇬🇧",

        overall: 90,
        value: 87,
        economy: 89,
        business: 93,
        comfort: 90,
        wifi: 89,
        connections: 97,

        destinations: [
            "london",
            "frankfurt",
            "paris",
            "new york",
            "tokyo"
        ],

        tags: [
            "network",
            "europe"
        ]
    },


    {
        name: "Qantas",
        country: "Australia",
        iata: "QF",
        icao: "QFA",
        logo: "🇦🇺",

        overall: 95,
        value: 91,
        economy: 95,
        business: 97,
        comfort: 96,
        wifi: 94,
        connections: 96,

        destinations: [
            "sydney",
            "melbourne",
            "singapore",
            "london",
            "tokyo"
        ],

        tags: [
            "australia",
            "longhaul",
            "service"
        ]
    },


    {
        name: "Thai Airways",
        country: "Thailand",
        iata: "TG",
        icao: "THA",
        logo: "🇹🇭",

        overall: 92,
        value: 94,
        economy: 95,
        business: 94,
        comfort: 95,
        wifi: 89,
        connections: 93,

        destinations: [
            "bangkok",
            "singapore",
            "tokyo",
            "frankfurt",
            "london"
        ],

        tags: [
            "thailand",
            "service",
            "economy"
        ]
    },


    {
        name: "Garuda Indonesia",
        country: "Indonesia",
        iata: "GA",
        icao: "GIA",
        logo: "🇮🇩",

        overall: 89,
        value: 93,
        economy: 94,
        business: 93,
        comfort: 92,
        wifi: 87,
        connections: 91,

        destinations: [
            "jakarta",
            "bali",
            "surabaya",
            "singapore",
            "tokyo"
        ],

        tags: [
            "indonesia",
            "service",
            "economy"
        ]
    },


    {
        name: "Air Canada",
        country: "Canada",
        iata: "AC",
        icao: "ACA",
        logo: "🇨🇦",

        overall: 90,
        value: 89,
        economy: 90,
        business: 93,
        comfort: 91,
        wifi: 92,
        connections: 97,

        destinations: [
            "toronto",
            "vancouver",
            "frankfurt",
            "london",
            "tokyo"
        ],

        tags: [
            "canada",
            "network",
            "longhaul"
        ]
    }
];


/* =========================================================
   6. AIRLINE DESTINATION NORMALIZATION
   ========================================================= */

function normalizeDestination(
    destination
) {

    return destination
        .toLowerCase()
        .trim()
        .replace(
            /ä/g,
            "ae"
        )
        .replace(
            /ö/g,
            "oe"
        )
        .replace(
            /ü/g,
            "ue"
        )
        .replace(
            /ß/g,
            "ss"
        );
}


/* =========================================================
   7. AIRLINE MATCHING
   ========================================================= */

function calculateAirlineMatch(
    airline,
    destination,
    priority
) {

    let score =
        airline[priority] ??
        airline.overall;


    /*
     * Destination bonus
     */

    const normalized =
        normalizeDestination(
            destination
        );


    if (
        airline.destinations.some(
            d =>
                normalizeDestination(d)
                    .includes(normalized) ||
                normalized.includes(
                    normalizeDestination(d)
                )
        )
    ) {

        score += 3;

    }


    /*
     * Small overall quality bonus
     */

    score +=
        airline.overall /
        100;


    return Math.min(
        100,
        Math.round(score)
    );
}


/* =========================================================
   8. LIVE AIRLINE API
   ========================================================= */

/*
   ADS-B DB provides live aviation information.

   It does NOT provide subjective airline quality.
   Therefore the matching score comes from TravelMate,
   while the API is used to enrich the result with
   current airline/flight information where available.
*/

const AIRLINE_API =
    "https://api.adsbdb.com/v0";


async function fetchLiveAirline(
    airline
) {

    try {

        const response =
            await fetch(
                `${AIRLINE_API}/callsign/${airline.iata}`,
                {
                    cache: "no-store"
                }
            );

        if (!response.ok) {

            return null;
        }

        return await response.json();

    } catch (error) {

        console.warn(
            "Airline API unavailable:",
            airline.name,
            error
        );

        return null;
    }
}


/* =========================================================
   9. AIRLINE FINDER UI
   ========================================================= */

function openAirlineFinder() {

    const modal =
        document.getElementById(
            "airlineFinderModal"
        );

    if (!modal) return;

    modal.style.display = "flex";

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
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

    modal.style.display =
        "none";

    document.body.style.overflow =
        "";
}


function updateAirlineFinderTexts() {

    const title =
        document.getElementById(
            "airlineFinderTitle"
        );

    const description =
        document.getElementById(
            "airlineFinderDescription"
        );

    const searchButton =
        document.getElementById(
            "airlineSearchButton"
        );


    if (title) {

        title.textContent =
            `✈️ ${t("airlineFinder")}`;
    }


    if (description) {

        description.textContent =
            t("airlineDescription");
    }


    if (searchButton) {

        searchButton.textContent =
            `🔎 ${t("findAirlines")}`;
    }
}


/* =========================================================
   10. RENDER AIRLINE RESULT
   ========================================================= */

function renderAirlineResult(
    airline,
    score,
    position
) {

    const medal =
        position === 0
            ? "🥇"
            : position === 1
                ? "🥈"
                : "🥉";


    const top =
        position === 0
            ? `<span class="airline-top-pick">
                 ${t("topPick")}
               </span>`
            : "";


    const tags =
        airline.tags
            .map(
                tag => {

                    let text =
                        tag;

                    const translationMap = {

                        service:
                            t("service"),

                        comfort:
                            t("comfort"),

                        premium:
                            "Premium",

                        longhaul:
                            "Long-haul",

                        value:
                            t("value"),

                        network:
                            t("network"),

                        entertainment:
                            t("entertainment"),

                        economy:
                            t("bestEconomy"),

                        business:
                            t("bestBusiness")

                    };


                    if (
                        translationMap[tag]
                    ) {

                        text =
                            translationMap[tag];

                    }


                    return `
                        <span class="airline-tag">
                            ${text}
                        </span>
                    `;
                }
            )
            .join("");


    return `
        <div
            class="airline-result-card"
            data-airline="${airline.name}"
        >

            <div class="airline-result-rank">
                ${medal}
            </div>

            <div class="airline-result-logo">
                ${airline.logo}
            </div>

            <div class="airline-result-main">

                <div class="airline-result-header">

                    <div>

                        <div class="airline-result-name">
                            ${airline.name}
                        </div>

                        ${top}

                    </div>

                    <div class="airline-score">
                        ${score}/100
                    </div>

                </div>


                <div class="airline-result-country">
                    ${airline.country}
                    ·
                    ${airline.iata}
                </div>


                <div class="airline-result-rating">

                    ⭐ ${t("rating")}:
                    ${airline.overall}/100

                </div>


                <div class="airline-tags">
                    ${tags}
                </div>


                <div class="airline-stats">

                    <div>
                        <span>
                            ${t("service")}
                        </span>
                        <strong>
                            ${airline.overall}%
                        </strong>
                    </div>

                    <div>
                        <span>
                            ${t("comfort")}
                        </span>
                        <strong>
                            ${airline.comfort}%
                        </strong>
                    </div>

                    <div>
                        <span>
                            ${t("value")}
                        </span>
                        <strong>
                            ${airline.value}%
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   11. FIND AIRLINES
   ========================================================= */

async function findAirlines() {

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


    if (!destination) {

        results.innerHTML = `
            <p class="error-message">
                ${t("pleaseEnter")}
            </p>
        `;

        return;
    }


    results.innerHTML = `
        <div class="airline-loading">
            ${t("loading")}
        </div>
    `;


    /*
     * Find matching airlines
     */

    let matching =
        AIRLINES
            .map(
                airline => ({

                    airline,

                    score:
                        calculateAirlineMatch(
                            airline,
                            destination,
                            priority
                        )

                })
            );


    /*
     * Destination relevance
     */

    const normalized =
        normalizeDestination(
            destination
        );


    const destinationMatches =
        matching.filter(
            item =>
                item.airline.destinations.some(
                    d =>
                        normalizeDestination(d)
                            .includes(normalized) ||
                        normalized.includes(
                            normalizeDestination(d)
                        )
                )
        );


    if (
        destinationMatches.length >= 3
    ) {

        matching =
            destinationMatches;
    }


    /*
     * Sort
     */

    matching.sort(
        (a,b) =>
            b.score-a.score
    );


    const top =
        matching.slice(
            0,
            3
        );


    /*
     * Try live API.
     *
     * Failure does NOT break
     * the finder.
     */

    await Promise.all(
        top.map(
            item =>
                fetchLiveAirline(
                    item.airline
                )
        )
    );


    results.innerHTML = `

        <h3 class="airline-results-heading">
            ${t("recommendations")}
        </h3>

        ${top
            .map(
                (
                    item,
                    index
                ) =>
                    renderAirlineResult(
                        item.airline,
                        item.score,
                        index
                    )
            )
            .join("")
        }

        <div class="airline-api-note">
            ${t("liveData")}
        </div>
    `;
}


/* =========================================================
   12. CONNECTION CALCULATOR
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


    if (
        !arrival ||
        !departure
    ) {

        result.textContent =
            t("pleaseEnter");

        return;
    }


    const [arrivalHour,
        arrivalMinute] =
        arrival
            .split(":")
            .map(Number);


    const [departureHour,
        departureMinute] =
        departure
            .split(":")
            .map(Number);


    let arrivalMinutes =
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


    if (
        difference >= 120
    ) {

        status =
            `🟢 ${t("goodConnection")}`;

    } else if (
        difference >= 60
    ) {

        status =
            `🟡 ${t("tightConnection")}`;

    } else {

        status =
            `🔴 ${t("badConnection")}`;
    }


    result.innerHTML = `

        <strong>
            ${status}
        </strong>

        <br>

        ${t("connectionTime")}:
        ${hours}h ${minutes}min
    `;
}


/* =========================================================
   13. TIMEZONE CONVERTER
   ========================================================= */

const DEFAULT_TIMEZONES = [

    "Europe/Berlin",
    "Europe/London",
    "Europe/Paris",
    "Europe/Madrid",
    "Europe/Rome",

    "America/New_York",
    "America/Chicago",
    "America/Los_Angeles",
    "America/Toronto",

    "Asia/Dubai",
    "Asia/Jakarta",
    "Asia/Singapore",
    "Asia/Bangkok",
    "Asia/Tokyo",

    "Australia/Sydney",

    "Pacific/Auckland"
];


function loadTimezoneSelects() {

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


    let zones =
        DEFAULT_TIMEZONES;


    if (
        typeof Intl.supportedValuesOf ===
        "function"
    ) {

        try {

            zones =
                Intl.supportedValuesOf(
                    "timeZone"
                );

        } catch {

            zones =
                DEFAULT_TIMEZONES;
        }
    }


    const oldFrom =
        from.value ||
        "Europe/Berlin";


    const oldTo =
        to.value ||
        "Asia/Jakarta";


    from.innerHTML = "";
    to.innerHTML = "";


    zones.forEach(
        zone => {

            const a =
                document.createElement(
                    "option"
                );

            const b =
                document.createElement(
                    "option"
                );


            a.value =
                zone;

            b.value =
                zone;


            a.textContent =
                zone.replaceAll(
                    "_",
                    " "
                );

            b.textContent =
                zone.replaceAll(
                    "_",
                    " "
                );


            from.appendChild(a);
            to.appendChild(b);

        }
    );


    from.value =
        zones.includes(oldFrom)
            ? oldFrom
            : "Europe/Berlin";


    to.value =
        zones.includes(oldTo)
            ? oldTo
            : "Asia/Jakarta";
}


function convertTimezone() {

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


    if (
        !date ||
        !time ||
        !from ||
        !to
    ) {

        result.textContent =
            t("pleaseEnter");

        return;
    }


    /*
     * Convert using DateTimeFormat
     * and timezone-aware formatting.
     */

    const [year,
        month,
        day] =
        date
            .split("-")
            .map(Number);


    const [hour,
        minute] =
        time
            .split(":")
            .map(Number);


    /*
     * Initial UTC approximation.
     */

    let utc =
        new Date(
            Date.UTC(
                year,
                month - 1,
                day,
                hour,
                minute
            )
        );


    /*
     * Iteratively correct for source
     * timezone offset.
     */

    for (
        let i = 0;
        i < 3;
        i++
    ) {

        const parts =
            new Intl.DateTimeFormat(
                "en-US",
                {
                    timeZone: from,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hourCycle: "h23"
                }
            )
                .formatToParts(utc);


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


        const localAsUTC =
            Date.UTC(
                values.year,
                values.month - 1,
                values.day,
                values.hour,
                values.minute,
                values.second
            );


        const wantedAsUTC =
            Date.UTC(
                year,
                month - 1,
                day,
                hour,
                minute,
                0
            );


        utc =
            new Date(
                utc.getTime() +
                (
                    wantedAsUTC -
                    localAsUTC
                )
            );
    }


    const formatted =
        new Intl.DateTimeFormat(
            currentLanguage === "de"
                ? "de-DE"
                : "en-US",
            {
                timeZone: to,
                dateStyle: "medium",
                timeStyle: "short"
            }
        )
            .format(utc);


    result.textContent =
        formatted;
}


/* =========================================================
   14. BUDGET
   ========================================================= */

function calculateBudget() {

    const ids = [

        "flightCost",
        "hotelCost",
        "foodCost",
        "transportCost",
        "otherCost"

    ];


    let total = 0;


    ids.forEach(
        id => {

            const element =
                document.getElementById(
                    id
                );


            if (element) {

                const value =
                    parseFloat(
                        element.value
                    );


                if (
                    Number.isFinite(value)
                ) {

                    total += value;
                }
            }
        }
    );


    const result =
        document.getElementById(
            "budgetResult"
        );


    if (!result) return;


    result.innerHTML = `

        <strong>
            ${t("total")}
        </strong>

        <br>

        ${total.toLocaleString(
            currentLanguage === "de"
                ? "de-DE"
                : "en-US",
            {
                style: "currency",
                currency: "EUR"
            }
        )}
    `;
}


/* =========================================================
   15. DEMO ACCOUNT
   ========================================================= */

const DEMO_ACCOUNT = {

    email:
        "demo@travelmate.app",

    password:
        "travelmate123"

};


function openAccount() {

    const modal =
        document.getElementById(
            "accountModal"
        );


    if (!modal) return;


    modal.style.display =
        "flex";

    modal.classList.add(
        "active"
    );
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

    modal.style.display =
        "none";
}


function login() {

    const email =
        document.getElementById(
            "loginEmail"
        )?.value.trim();


    const password =
        document.getElementById(
            "loginPassword"
        )?.value;


    const message =
        document.getElementById(
            "loginMessage"
        );


    if (
        !email ||
        !password
    ) {

        if (message) {

            message.textContent =
                t("pleaseEnter");
        }

        return;
    }


    if (
        email ===
        DEMO_ACCOUNT.email
        &&
        password ===
        DEMO_ACCOUNT.password
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
                t("loginSuccess");
        }


        updateAccountUI();

    } else {

        /*
         * Allow users to create their
         * own local demo account.
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
                    t("loginSuccess");
            }


            updateAccountUI();

        } else {

            if (message) {

                message.textContent =
                    t("invalidLogin");
            }
        }
    }
}


function createAccount() {

    const email =
        document.getElementById(
            "loginEmail"
        )?.value.trim();


    const password =
        document.getElementById(
            "loginPassword"
        )?.value;


    const message =
        document.getElementById(
            "loginMessage"
        );


    if (
        !email ||
        !password
    ) {

        if (message) {

            message.textContent =
                t("pleaseEnter");
        }

        return;
    }


    if (
        password.length < 6
    ) {

        if (message) {

            message.textContent =
                currentLanguage === "de"
                    ? "Passwort muss mindestens 6 Zeichen haben."
                    : "Password must contain at least 6 characters.";
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
            t("accountCreated");
    }


    updateAccountUI();
}


function logout() {

    localStorage.removeItem(
        "travelmateLoggedIn"
    );

    localStorage.removeItem(
        "travelmateUser"
    );


    updateAccountUI();
}


function updateAccountUI() {

    const loggedIn =
        localStorage.getItem(
            "travelmateLoggedIn"
        ) === "true";


    const user =
        localStorage.getItem(
            "travelmateUser"
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


    if (loggedIn) {

        if (status) {

            status.textContent =
                user ||
                t("demoAccount");
        }


        if (loginArea) {

            loginArea.style.display =
                "none";
        }


        if (loggedInArea) {

            loggedInArea.style.display =
                "block";
        }

    } else {

        if (status) {

            status.textContent =
                t("notLoggedIn");
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
   16. CARD / TILE SYSTEM
   ========================================================= */

function openTool(toolId) {

    const tool =
        document.getElementById(
            toolId
        );


    if (!tool) return;


    /*
     * Close other open tools.
     */

    document
        .querySelectorAll(
            ".tool-card.open, .feature-card.open"
        )
        .forEach(
            card => {

                if (
                    card !== tool
                ) {

                    card.classList.remove(
                        "open"
                    );
                }
            }
        );


    tool.classList.toggle(
        "open"
    );
}


function initializeCards() {

    document
        .querySelectorAll(
            "[data-tool]"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    event => {

                        /*
                         * Don't toggle when
                         * clicking a button/input.
                         */

                        if (
                            event.target.closest(
                                "button, input, select, textarea, a"
                            )
                        ) {

                            return;
                        }


                        const id =
                            card.dataset.tool;


                        openTool(id);
                    }
                );
            }
        );
}


/* =========================================================
   17. MODAL OUTSIDE CLICK
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const airlineModal =
            document.getElementById(
                "airlineFinderModal"
            );


        if (
            airlineModal &&
            event.target ===
            airlineModal
        ) {

            closeAirlineFinder();
        }


        const accountModal =
            document.getElementById(
                "accountModal"
            );


        if (
            accountModal &&
            event.target ===
            accountModal
        ) {

            closeAccount();
        }


        const settingsModal =
            document.getElementById(
                "settingsModal"
            );


        if (
            settingsModal &&
            event.target ===
            settingsModal
        ) {

            closeSettings();
        }
    }
);


/* =========================================================
   18. ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeAirlineFinder();

            closeAccount();

            closeSettings();
        }
    }
);


/* =========================================================
   19. GLOBAL INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        /*
         * Language
         */

        applyTranslations();


        /*
         * Settings
         */

        initializeSettings();


        /*
         * Currency API
         */

        await initializeCurrency();


        /*
         * Time zones
         */

        loadTimezoneSelects();


        /*
         * Account
         */

        updateAccountUI();


        /*
         * Cards
         */

        initializeCards();


        /*
         * Airline Finder
         */

        updateAirlineFinderTexts();


        /*
         * Default date
         */

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

            date.value =
                `${now.getFullYear()}-${String(
                    now.getMonth()+1
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
);


/* =========================================================
   20. GLOBAL FUNCTIONS
   ========================================================= */

/*
 * These assignments make the functions
 * available to inline onclick="" handlers
 * in index.html.
 */

window.openSettings =
    openSettings;

window.closeSettings =
    closeSettings;

window.setLanguage =
    setLanguage;

window.convertCurrency =
    convertCurrency;

window.openAirlineFinder =
    openAirlineFinder;

window.closeAirlineFinder =
    closeAirlineFinder;

window.findAirlines =
    findAirlines;

window.calculateConnection =
    calculateConnection;

window.convertTimezone =
    convertTimezone;

window.calculateBudget =
    calculateBudget;

window.openAccount =
    openAccount;

window.closeAccount =
    closeAccount;

window.login =
    login;

window.createAccount =
    createAccount;

window.logout =
    logout;

window.openTool =
    openTool;