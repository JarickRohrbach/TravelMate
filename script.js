async function loadCurrencies() {

  const fromSelect =
    document.getElementById("fromCurrency");

  const toSelect =
    document.getElementById("toCurrency");

  try {

    const response = await fetch(
      "https://api.frankfurter.dev/v2/currencies"
    );

    if (!response.ok) {
      throw new Error("Währungen konnten nicht geladen werden.");
    }

    const currencies = await response.json();

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    currencies
      .sort((a, b) =>
        a.iso_code.localeCompare(b.iso_code)
      )
      .forEach(currency => {

        const option1 =
          document.createElement("option");

        option1.value = currency.iso_code;

        option1.textContent =
          `${currency.iso_code} – ${currency.name}`;

        fromSelect.appendChild(option1);


        const option2 =
          document.createElement("option");

        option2.value = currency.iso_code;

        option2.textContent =
          `${currency.iso_code} – ${currency.name}`;

        toSelect.appendChild(option2);
      });

    // Standardauswahl
    fromSelect.value = "EUR";
    toSelect.value = "IDR";

  } catch (error) {

    fromSelect.innerHTML =
      '<option value="">Fehler beim Laden</option>';

    toSelect.innerHTML =
      '<option value="">Fehler beim Laden</option>';

    console.error(error);
  }
}
function convertCurrency() {

  const amount = Number(
    document.getElementById("amount").value
  );

  const from =
    document.getElementById("fromCurrency").value;

  const to =
    document.getElementById("toCurrency").value;

  const result =
    document.getElementById("currencyResult");

  if (!amount || amount <= 0) {
    result.innerText =
      "Bitte gib einen gültigen Betrag ein.";
    return;
  }

  if (from === to) {
    result.innerText =
      amount + " " + from;
    return;
  }

  const rates = {
    EUR: 1,
    USD: 0.92,
    IDR: 0.000055,
    SGD: 0.69
  };

  const amountInEuro =
    amount * rates[from];

  const converted =
    amountInEuro / rates[to];

  result.innerText =
    amount.toLocaleString("de-DE") +
    " " +
    from +
    " = " +
    converted.toLocaleString("de-DE", {
      maximumFractionDigits: 2
    }) +
    " " +
    to;
}


function calculateConnection() {

  const arrival =
    document.getElementById("arrivalTime").value;

  const departure =
    document.getElementById("departureTime").value;

  const result =
    document.getElementById("connectionResult");

  if (!arrival || !departure) {
    result.innerText =
      "Bitte gib beide Zeiten ein.";
    return;
  }

  const arrivalParts =
    arrival.split(":");

  const departureParts =
    departure.split(":");

  let arrivalMinutes =
    Number(arrivalParts[0]) * 60 +
    Number(arrivalParts[1]);

  let departureMinutes =
    Number(departureParts[0]) * 60 +
    Number(departureParts[1]);

  if (departureMinutes < arrivalMinutes) {
    departureMinutes += 24 * 60;
  }

  const difference =
    departureMinutes - arrivalMinutes;

  const hours =
    Math.floor(difference / 60);

  const minutes =
    difference % 60;

  let status = "";

  if (difference >= 120) {
    status = "🟢 Guter Puffer";
  } else if (difference >= 60) {
    status = "🟡 Könnte knapp werden";
  } else {
    status = "🔴 Sehr knapp";
  }

  result.innerText =
    hours +
    " Std. " +
    minutes +
    " Min. Umsteigezeit\n" +
    status;
}


function calculateBudget() {

  const flight =
    Number(document.getElementById("flight").value) || 0;

  const hotel =
    Number(document.getElementById("hotel").value) || 0;

  const food =
    Number(document.getElementById("food").value) || 0;

  const transport =
    Number(document.getElementById("transport").value) || 0;

  const total =
    flight +
    hotel +
    food +
    transport;

  document.getElementById(
    "budgetResult"
  ).innerText =
    "Gesamt: " +
    total.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR"
    });
}
loadCurrencies();
async function loadCurrencies() {

  const fromSelect =
    document.getElementById("fromCurrency");

  const toSelect =
    document.getElementById("toCurrency");

  try {

    const response = await fetch(
      "https://api.frankfurter.dev/v2/currencies"
    );

    if (!response.ok) {
      throw new Error("Währungen konnten nicht geladen werden.");
    }

    const currencies = await response.json();

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    currencies
      .sort((a, b) =>
        a.iso_code.localeCompare(b.iso_code)
      )
      .forEach(currency => {

        const option1 =
          document.createElement("option");

        option1.value = currency.iso_code;

        option1.textContent =
          `${currency.iso_code} – ${currency.name}`;

        fromSelect.appendChild(option1);


        const option2 =
          document.createElement("option");

        option2.value = currency.iso_code;

        option2.textContent =
          `${currency.iso_code} – ${currency.name}`;

        toSelect.appendChild(option2);
      });

    // Standardauswahl
    fromSelect.value = "EUR";
    toSelect.value = "IDR";

  } catch (error) {

    fromSelect.innerHTML =
      '<option value="">Fehler beim Laden</option>';

    toSelect.innerHTML =
      '<option value="">Fehler beim Laden</option>';

    console.error(error);
  }
}
