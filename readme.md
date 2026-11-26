# JavaScript – Kokeen kertausmuistio

**Kurssin aiheet:** WS01–WS08, projektit 1–3, Smart Forms, Browser Storage, JSON, REST API, AJAX, Fetch API, async/await, jQuery, Axios ja Chart.js.

Tämä README sisältää JavaScript-kurssin keskeiset käsitteet, koodiesimerkit ja kokeessa hyödylliset muistisäännöt.

## Sisällysluettelo

1. JavaScriptin perusteet
2. DOM ja HTML-elementtien käsittely
3. Tapahtumat (Events)
4. Smart Forms ja validointi
5. Browser Storage
6. Oliot, taulukot ja JSON
7. REST API ja HTTP-metodit
8. AJAX ja Fetch API
9. Async/await ja virheenkäsittely
10. jQuery, Axios ja Chart.js
11. Projektien keskeiset asiat
12. Koodin järjestämistehtävät
13. Kokeen pikamuistio

---

## 1. JavaScriptin perusteet (WS01–WS02)

### HTML, CSS ja JavaScript

| Tekniikka | Tehtävä |
|---|---|
| HTML | Verkkosivun rakenne |
| CSS | Verkkosivun ulkoasu |
| JavaScript | Verkkosivun toiminnallisuus |

### JavaScriptin liittäminen HTML:ään

```html
<script src="script.js" defer></script>
```

`defer` tarkoittaa, että skripti suoritetaan vasta HTML:n jäsentämisen jälkeen.

### Muuttujat

```javascript
const name = "Matti";
let age = 20;

age = 21;
```

- `const` – muuttujaan ei voi sijoittaa uutta arvoa.
- `let` – muuttujan arvon voi vaihtaa.

### Tietotyypit

```javascript
const name = "Matti";        // String
const age = 25;              // Number
const isStudent = true;      // Boolean
const animals = ["Norsu"];   // Array
const animal = {name:"Norsu"}; // Object
```

### Tulostaminen

```javascript
console.log("Hei maailma!");
alert("Tervetuloa!");
```

- `console.log()` – tulostaa selaimen konsoliin.
- `alert()` – näyttää ilmoitusikkunan.
- `prompt()` – kysyy käyttäjältä tietoa.

```javascript
const name = prompt("Mikä on nimesi?");
console.log("Hei " + name);
```

### Ehtolauseet

```javascript
const age = 18;

if (age >= 18) {
    console.log("Täysi-ikäinen");
} else {
    console.log("Alaikäinen");
}
```

| Operaattori | Merkitys |
|---|---|
| `=` | Sijoittaa arvon |
| `===` | Vertaa arvoa ja tyyppiä |
| `!==` | Ei täsmälleen sama |
| `>` | Suurempi kuin |
| `<` | Pienempi kuin |
| `>=` | Suurempi tai yhtä suuri |
| `<=` | Pienempi tai yhtä suuri |

### Funktiot

```javascript
function sayHello() {
    console.log("Hei!");
}

sayHello();
```

Funktio on uudelleenkäytettävä koodikokonaisuus.

### Template literals

```javascript
const name = "Matti";

console.log(`Hei ${name}!`);
```

Template literal käyttää takakenomerkkejä (backticks) ja muuttujia `${}`-merkinnällä.

---

## 2. DOM – Document Object Model (WS01, WS03–WS04)

DOM on HTML-sivun rakenne, jota JavaScript voi käsitellä.

### Elementtien hakeminen

```javascript
document.querySelector("#title");      // ID
document.querySelector(".box");        // Luokka
document.querySelector("p");           // Elementti
document.querySelectorAll(".item");    // Kaikki vastaavat
document.getElementById("title");      // ID ilman #-merkkiä
```

### Tekstin muuttaminen

```javascript
const title = document.querySelector("#title");

title.textContent = "Uusi otsikko";
```

### HTML-sisällön muuttaminen

```javascript
title.innerHTML = "<strong>Hei!</strong>";
```

**Ero:** `textContent` käsittelee tekstiä, `innerHTML` tulkitsee HTML-rakennetta. Käyttäjän antaman tekstin näyttämiseen kannattaa käyttää `textContent`-ominaisuutta.

### Tyylin muuttaminen

```javascript
title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.fontSize = "30px";
title.style.display = "none";
```

### CSS-luokkien käsittely

```javascript
title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("highlight");
```

- `add()` – lisää luokan.
- `remove()` – poistaa luokan.
- `toggle()` – lisää tai poistaa luokan sen nykyisen tilan mukaan.

### Elementin luominen

```javascript
const paragraph = document.createElement("p");

paragraph.textContent = "Uusi kappale";

document.body.append(paragraph);
```

### Elementin poistaminen

```javascript
paragraph.remove();
```

### Elementin näyttäminen ja piilottaminen

```javascript
const box = document.querySelector("#box");

box.style.display = "none";   // Piilota
box.style.display = "block";  // Näytä
```

Vaihtoehtoisesti voidaan käyttää `hidden`-ominaisuutta:

```javascript
box.hidden = true;
box.hidden = false;
```

---

## 3. Tapahtumat – Events (WS01–WS04)

JavaScript reagoi käyttäjän toimintaan tapahtumankuuntelijoilla.

### addEventListener()

```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    alert("Painiketta klikattiin!");
});
```

### Tärkeimmät tapahtumat

| Tapahtuma | Merkitys |
|---|---|
| `click` | Elementtiä klikataan |
| `mouseover` | Hiiri siirtyy elementin päälle |
| `mouseout` | Hiiri poistuu elementiltä |
| `mouseenter` | Hiiri tulee elementin alueelle |
| `mouseleave` | Hiiri poistuu elementin alueelta |
| `input` | Kentän arvo muuttuu |
| `change` | Käyttäjä vahvistaa arvon muutoksen |
| `focus` | Kenttä saa kohdistuksen |
| `blur` | Kenttä menettää kohdistuksen |
| `submit` | Lomake lähetetään |
| `keydown` | Näppäintä painetaan |

### Input-tapahtuma

```javascript
const input = document.querySelector("#name");

input.addEventListener("input", function(event) {
    console.log(event.target.value);
});
```

`event.target.value` kertoo tapahtuman kohteena olevan kentän arvon.

### Näppäimistötapahtumat

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.key);
    console.log(event.code);
});
```

- `event.key` – näppäimen arvo, esim. `"a"`.
- `event.code` – fyysisen näppäimen tunniste, esim. `"KeyA"`.

### onclick vs. addEventListener

HTML:ään kirjoitettu tapahtuma:

```html
<button onclick="sayHello()">Klikkaa</button>
```

JavaScriptillä lisätty tapahtuma:

```javascript
button.addEventListener("click", sayHello);
```

Kurssiprojekteissa tapahtumankuuntelijoiden lisääminen JavaScriptillä on tärkeää.

---

## 4. Smart Forms ja lomakkeiden validointi (WS03–WS05)

Smart Form on älykäs lomake, joka tarkistaa käyttäjän syötteitä ja reagoi muutoksiin.

### Lomakkeen HTML

```html
<form id="myForm">
    <input type="text" id="username">
    <button type="submit">Lähetä</button>
</form>

<p id="error"></p>
```

### Lomakkeen käsittely

```javascript
const form = document.querySelector("#myForm");
const username = document.querySelector("#username");
const error = document.querySelector("#error");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = username.value.trim();

    if (name === "") {
        error.textContent = "Nimi ei saa olla tyhjä!";
    } else {
        error.textContent = "";
        console.log("Hyväksytty:", name);
    }
});
```

### Tärkeät käsitteet

| Käsite | Merkitys |
|---|---|
| `.value` | Lomakekentän arvo |
| `.trim()` | Poistaa tyhjää tilaa tekstin alusta ja lopusta |
| `.length` | Merkkien tai taulukon alkioiden määrä |
| `submit` | Lomakkeen lähettämistapahtuma |
| `preventDefault()` | Estää tapahtuman oletustoiminnon |
| `Number()` | Yrittää muuntaa arvon numeroksi |

### Merkkimäärän validointi

```javascript
const message = document.querySelector("#message").value.trim();

if (message.length < 10) {
    console.log("Viesti on liian lyhyt");
} else if (message.length > 200) {
    console.log("Viesti on liian pitkä");
} else {
    console.log("Viesti hyväksytty");
}
```

### Virheellisen kentän korostaminen

```javascript
username.style.border = "2px solid red";
```

Tai CSS-luokan avulla:

```javascript
username.classList.add("error");
username.classList.remove("error");
```

### Numeron tarkistaminen

```javascript
const rawHours = document.querySelector("#hours").value.trim();
const hours = Number(rawHours);

if (rawHours === "" || !Number.isFinite(hours) || hours < 0) {
    console.log("Anna kelvollinen tuntimäärä!");
}
```

### Alasvetovalikko

```javascript
const select = document.querySelector("#animalType");

select.addEventListener("change", function() {
    console.log(select.value);
});
```

### Checkbox

```javascript
const checkbox = document.querySelector("#showExtra");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        console.log("Valittu");
    } else {
        console.log("Ei valittu");
    }
});
```

`checked` palauttaa `true` tai `false`.

---

## 5. Browser Storage (WS05)

Selaimeen voidaan tallentaa tietoja useilla tavoilla.

| Tallennustapa | Käyttötarkoitus |
|---|---|
| localStorage | Pysyvämpi selainkohtainen tallennus |
| sessionStorage | Välilehden istunnon aikainen tallennus |
| Cookies | Pieni tieto, jota voidaan lähettää palvelimelle |
| Cache | Nopeuttaa resurssien lataamista |

### localStorage – tallentaminen

```javascript
localStorage.setItem("nimi", "Matti");
```

### localStorage – hakeminen

```javascript
const name = localStorage.getItem("nimi");
console.log(name);
```

### localStorage – poistaminen

```javascript
localStorage.removeItem("nimi");
```

### Kaikkien localStorage-tietojen poistaminen

```javascript
localStorage.clear();
```

### sessionStorage

```javascript
sessionStorage.setItem("nimi", "Matti");

const name = sessionStorage.getItem("nimi");

sessionStorage.removeItem("nimi");
```

**Tärkein ero:** localStorage säilyy yleensä selaimen sulkemisen jälkeen, sessionStorage vain välilehden istunnon ajan.

### Olion tallentaminen localStorageen

```javascript
const animal = {
    name: "Norsu",
    species: "Elephant"
};

localStorage.setItem("animal", JSON.stringify(animal));
```

### Olion hakeminen

```javascript
const saved = localStorage.getItem("animal");

if (saved !== null) {
    const animal = JSON.parse(saved);
    console.log(animal.name);
}
```

**Muista:**

- `JSON.stringify()` muuntaa JavaScript-arvon JSON-tekstiksi.
- `JSON.parse()` muuntaa JSON-tekstin JavaScript-arvoksi.

Älä tallenna salasanoja tai arkaluonteisia tietoja localStorageen.

---

## 6. Oliot, taulukot ja JSON (WS05–WS06)

### Taulukko – Array

```javascript
const animals = ["Norsu", "Tiikeri", "Koira"];

console.log(animals[0]); // Norsu
console.log(animals[1]); // Tiikeri
console.log(animals.length); // 3
```

Taulukon indeksointi alkaa **nollasta**.

### Taulukon muokkaaminen

```javascript
animals.push("Kissa"); // Lisää loppuun
animals.pop();          // Poistaa viimeisen
```

### Olio – Object

```javascript
const animal = {
    name: "Norsu",
    species: "Elephant",
    age: 10
};

console.log(animal.name);
console.log(animal["species"]);
```

### Taulukko, jossa on olioita

```javascript
const animals = [
    { name: "Norsu", species: "Elephant" },
    { name: "Tiikeri", species: "Tiger" }
];

console.log(animals[0].name); // Norsu
```

### forEach()

```javascript
animals.forEach(function(animal) {
    console.log(animal.name);
});
```

Käy jokaisen taulukon alkion läpi.

### map()

```javascript
const names = animals.map(animal => animal.name);
```

Muodostaa uuden taulukon.

### slice()

```javascript
const numbers = [1, 2, 3, 4, 5];

const firstThree = numbers.slice(0, 3);
// [1, 2, 3]
```

`slice()` palauttaa valitun osan taulukosta muuttamatta alkuperäistä taulukkoa.

### JSON-esimerkki

```json
{
    "name": "Matti",
    "age": 25,
    "city": "Helsinki"
}
```

JSON on tekstimuotoinen tiedonsiirtoformaatti.

---

## 7. REST API ja HTTP-metodit (WS06–WS07)

### Mikä API on?

API eli Application Programming Interface mahdollistaa ohjelmien välisen tiedonvaihdon.

Esimerkiksi verkkosivu voi hakea säätietoja sääpalvelun API:sta.

### Mikä REST API on?

REST API on rajapinta, joka noudattaa REST-arkkitehtuurin periaatteita ja käyttää tavallisesti HTTP-protokollaa.

### Client ja Server

- **Client:** selain tai sovellus, joka lähettää pyynnön.
- **Server:** palvelin, joka käsittelee pyynnön ja palauttaa vastauksen.

### Endpoint

Endpoint on osoite, johon API-pyyntö lähetetään.

Esimerkiksi:

```text
https://jsonplaceholder.typicode.com/users/1
```

### HTTP-metodit

| Metodi | Tarkoitus |
|---|---|
| GET | Hakee tietoja |
| POST | Luo uuden resurssin |
| PUT | Päivittää tai korvaa resurssin |
| DELETE | Poistaa resurssin |

### Stateless

RESTin tilattomuus tarkoittaa, että jokainen pyyntö sisältää sen käsittelyyn tarvittavat tiedot. Palvelimen ei tarvitse muistaa edellisen pyynnön keskustelutilaa.

### HTTP-tilakoodit

| Koodi | Merkitys |
|---|---|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## 8. AJAX ja Fetch API (WS06–WS07)

### Mikä AJAX on?

AJAX tarkoittaa Asynchronous JavaScript and XML.

Se on tekniikka, jolla verkkosivu voi hakea tai lähettää tietoa ilman koko sivun uudelleenlatausta.

Nimestä huolimatta AJAXissa käytetään nykyään usein JSONia XML:n sijaan.

### Mikä Fetch API on?

`fetch()` on JavaScriptin rajapinta HTTP-pyyntöjen tekemiseen.

### GET-pyyntö Fetchillä

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
    })
    .catch(error => {
        console.error("Virhe:", error);
    });
```

### Miten koodi toimii?

1. `fetch()` lähettää HTTP-pyynnön.
2. `.then()` käsittelee valmistuneen Promise-operaation tuloksen.
3. `response.json()` lukee vastauksen JSONin JavaScript-arvoksi.
4. `data` sisältää saadut tiedot.
5. `.catch()` käsittelee hylätyn Promise-operaation.

### Tärkeä huomio

`fetch()` ei automaattisesti hylkää Promisea HTTP-virhekoodeilla, kuten 404.

Tarkista tarvittaessa `response.ok`:

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP-virhe: " + response.status);
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### API-tiedon näyttäminen HTML:ssä

HTML:

```html
<p id="customerName"></p>
```

JavaScript:

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#customerName").textContent = data.name;
    });
```

### POST-pyyntö

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Uusi viesti",
        body: "Hei maailma!",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data));
```

**Muista:** AJAX on tekniikka, Fetch on työkalu HTTP-pyyntöihin ja REST API on rajapinnan suunnittelutapa.

---

## 9. async/await ja virheenkäsittely (WS07)

`async/await` on tapa kirjoittaa Promiseihin perustuvaa asynkronista koodia selkeämmin.

### async/await-esimerkki

```javascript
async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    console.log(data.name);
}

getUser();
```

### Tärkeimmät käsitteet

- `async` – määrittelee asynkronisen funktion.
- `await` – odottaa Promise-operaation valmistumista.
- `try` – sisältää koodin, jossa voi syntyä virhe.
- `catch` – käsittelee virheen.

### try/catch

```javascript
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Tietojen haku epäonnistui");
        }

        const data = await response.json();

        console.log(data.name);

    } catch (error) {
        console.error("Virhe:", error);
    }
}
```

### JSON vs. XML

WS07:ssa käsiteltiin myös XML-muotoisia säävastauksia.

JSON:

```json
{
    "temperature": 20
}
```

XML:

```xml
<weather>
    <temperature>20</temperature>
</weather>
```

Fetchillä voidaan lukea XML-vastaus tekstinä:

```javascript
const response = await fetch(url);
const xmlText = await response.text();
```

XML-teksti voidaan muuntaa DOM-rakenteeksi esimerkiksi `DOMParser`-rajapinnalla.

---

## 10. Ulkoiset JavaScript-kirjastot (WS08)

### Mikä kirjasto on?

JavaScript-kirjasto sisältää valmiita toimintoja, joita voidaan käyttää omassa sovelluksessa.

WS08:ssa käsiteltiin erityisesti jQueryä, Axiosia ja Chart.js:ää.

### jQuery

jQuery helpottaa esimerkiksi DOMin käsittelyä ja tapahtumankuuntelua.

Tavallinen JavaScript:

```javascript
document.querySelector("#button")
    .addEventListener("click", function() {
        console.log("Klikattu");
    });
```

jQuery:

```javascript
$("#button").on("click", function() {
    console.log("Klikattu");
});
```

### jQuery-valitsimet

```javascript
$("#title");    // ID
$(".item");     // Luokka
$("p");         // Kaikki p-elementit
```

### jQuery-efektit

```javascript
$("#box").hide();
$("#box").show();
$("#box").fadeOut();
$("#box").fadeIn();
```

### Axios

Axios on HTTP-pyyntöjen tekemiseen tarkoitettu kirjasto.

```javascript
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
```

**Fetch vs. Axios:**

- Fetch on selaimen sisäänrakennettu rajapinta.
- Axios on erikseen lisättävä kirjasto.
- Axios tarjoaa vastauksen käsitellyn datan yleensä `response.data`-ominaisuudessa.
- Fetchissä JSON luetaan tavallisesti `response.json()`-metodilla.

### Chart.js

Chart.js on kirjasto kaavioiden luomiseen.

HTML:

```html
<canvas id="myChart"></canvas>
```

JavaScript:

```javascript
const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Ma", "Ti", "Ke"],
        datasets: [{
            label: "Lämpötila",
            data: [10, 12, 15]
        }]
    }
});
```

### Kaaviotyyppejä

| Tyyppi | Merkitys |
|---|---|
| `bar` | Pylväskaavio |
| `line` | Viivakaavio |
| `pie` | Ympyräkaavio |
| `doughnut` | Rengaskaavio |

### Muut kurssilla mainitut kirjastot

| Kirjasto | Käyttö |
|---|---|
| SweetAlert2 | Tyylikkäät ilmoitusikkunat |
| Leaflet | Interaktiiviset kartat |
| Baffle | Tekstiefektit |
| Vanta | Animoidut taustat |
| Bootstrap | Käyttöliittymän tyylittely |
| Tailwind CSS | CSS-apuluokat käyttöliittymään |

---

## 11. Projektien keskeiset asiat

### Projekti 1 – TODO-lista tai Smart Form

Tärkeimmät tekniikat:

- HTML, CSS ja JavaScript
- DOMin käsittely
- Tapahtumankuuntelijat
- Lomakkeet ja validointi
- Tehtävien tai tietojen lisääminen ja poistaminen
- Mahdollinen localStorage-tallennus

TODO-listassa voidaan käyttää:

```javascript
document.createElement("li");
list.append(item);
item.remove();
```

Smart Formissa käytetään esimerkiksi:

```javascript
input.value;
input.value.trim();
Number(input.value);
event.preventDefault();
```

### Projekti 2 – REST API -sovellus

Tärkeimmät asiat:

- API-pyyntöjen tekeminen
- JSON-vastauksen käsittely
- Haettujen tietojen näyttäminen DOMissa
- Käyttäjän syötteen tai valinnan hyödyntäminen
- Virhetilanteiden käsittely

Tyypillinen rakenne:

```javascript
async function searchData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Haku epäonnistui");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error(error);
    }
}
```

### Projekti 3 – Ulkoiset JavaScript-kirjastot

Tärkeimmät asiat:

- jQuery
- Axios tai muu AJAX-toteutus
- Chart.js tai muu visualisointikirjasto
- Käyttöliittymäkirjastot ja efektit
- DOMin ja tapahtumien käsittely

### Projektien dokumentointi

Kurssiprojekteissa korostuivat myös:

- GitHub-repositorio
- README ja projektin kuvaus
- Suunnitelma tai wireframe
- Julkaisu esimerkiksi GitHub Pagesissa tai Netlifyssa
- Demovideo
- Koodin kommentointi
- Käytettyjen lähteiden ja tekoälyavun ilmoittaminen

---

## 12. Koodin järjestämistehtävät

### Tehtävä 1 – Painikkeen tapahtumankuuntelija

Oikea järjestys:

```javascript
const button = document.querySelector("#button");

button.addEventListener("click", function() {
    alert("Klikattu!");
});
```

**Muistisääntö:** Etsi elementti → lisää tapahtumankuuntelija → suorita toiminto.

### Tehtävä 2 – Lomakkeen validointi

Oikea järjestys:

```javascript
const form = document.querySelector("#myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();

    if (name === "") {
        alert("Nimi puuttuu!");
    }
});
```

**Muistisääntö:** Etsi lomake → kuuntele submit → estä oletustoiminto → lue arvo → tarkista ehto.

### Tehtävä 3 – Fetch API

Oikea järjestys:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

**Muistisääntö:** Fetch → response → JSON → data → virheenkäsittely.

### Tehtävä 4 – localStorage

Oikea tallennusjärjestys:

```javascript
const animal = { name: "Norsu" };

const jsonText = JSON.stringify(animal);

localStorage.setItem("animal", jsonText);
```

Oikea lukemisjärjestys:

```javascript
const saved = localStorage.getItem("animal");

const animal = JSON.parse(saved);

console.log(animal.name);
```

---

## 13. Kokeen pikamuistio

| Kysymys | Vastaus |
|---|---|
| Mikä on DOM? | HTML-sivun ohjelmallisesti käsiteltävä rakenne |
| Mitä `querySelector()` tekee? | Etsii ensimmäisen sopivan elementin |
| Mitä `querySelectorAll()` tekee? | Etsii kaikki sopivat elementit |
| Mitä `textContent` tekee? | Lukee tai muuttaa tekstiä |
| Mitä `innerHTML` tekee? | Lukee tai muuttaa HTML-sisältöä |
| Mitä `addEventListener()` tekee? | Lisää tapahtumankuuntelijan |
| Mitä `event.target` tarkoittaa? | Elementtiä, jossa tapahtuma sai alkunsa |
| Mitä `preventDefault()` tekee? | Estää tapahtuman oletustoiminnon |
| Mitä `.value` tekee? | Lukee tai asettaa lomakekentän arvon |
| Mitä `.trim()` tekee? | Poistaa tyhjää tilaa tekstin alusta ja lopusta |
| Mitä `.length` tekee? | Kertoo merkkien tai alkioiden määrän |
| Mitä `Number()` tekee? | Yrittää muuntaa arvon numeroksi |
| Mitä `checked` kertoo? | Onko valintaruutu valittu |
| Mitä `classList.toggle()` tekee? | Lisää tai poistaa CSS-luokan |
| Mitä `createElement()` tekee? | Luo uuden HTML-elementin |
| Mitä `append()` tekee? | Lisää sisältöä elementtiin |
| Mitä `remove()` tekee? | Poistaa elementin |
| Mitä `setItem()` tekee? | Tallentaa tietoa |
| Mitä `getItem()` tekee? | Hakee tallennettua tietoa |
| Mitä `removeItem()` tekee? | Poistaa tallennetun avaimen |
| Mitä `JSON.stringify()` tekee? | Muuntaa JavaScript-arvon JSON-tekstiksi |
| Mitä `JSON.parse()` tekee? | Muuntaa JSON-tekstin JavaScript-arvoksi |
| Mitä `push()` tekee? | Lisää alkion taulukon loppuun |
| Mitä `pop()` tekee? | Poistaa viimeisen alkion |
| Mitä `forEach()` tekee? | Käy taulukon alkiot läpi |
| Mitä `map()` tekee? | Luo uuden taulukon muuntamalla alkioita |
| Mitä `fetch()` tekee? | Tekee HTTP-pyynnön |
| Mitä `response.json()` tekee? | Lukee vastauksen JSONin JavaScript-arvoksi |
| Mitä `response.ok` kertoo? | Onko HTTP-vastauksen status onnistunut (200–299) |
| Mitä `.then()` tekee? | Käsittelee Promisen valmistuneen tuloksen |
| Mitä `.catch()` tekee? | Käsittelee Promisen hylkäyksen |
| Mitä `async` tarkoittaa? | Asynkroninen funktio |
| Mitä `await` tekee? | Odottaa Promisen tulosta |
| Mitä `try/catch` tekee? | Mahdollistaa virheiden käsittelyn |
| Mitä GET tekee? | Hakee tietoja |
| Mitä POST tekee? | Luo resurssin |
| Mitä PUT tekee? | Päivittää tai korvaa resurssin |
| Mitä DELETE tekee? | Poistaa resurssin |
| Mikä on AJAX? | Tekniikka asynkroniseen tiedonsiirtoon ilman koko sivun uudelleenlatausta |
| Mikä on REST API? | REST-periaatteita noudattava rajapinta |
| Mikä on JSON? | Tekstimuotoinen tiedonsiirtoformaatti |
| Mikä on jQuery? | JavaScript-kirjasto DOMin ja tapahtumien käsittelyyn |
| Mikä on Axios? | HTTP-pyyntöihin tarkoitettu kirjasto |
| Mikä on Chart.js? | Kaavioiden luomiseen tarkoitettu kirjasto |

---

## 14. Yleisimmät virheet

### 1. ID-valitsimesta puuttuu `#`

Väärin:

```javascript
document.querySelector("myButton");
```

Oikein:

```javascript
document.querySelector("#myButton");
```

### 2. Muuttujan sijoitus ja vertailu sekoitetaan

```javascript
let age = 18;   // Sijoitus

age === 18;     // Vertailu
```

### 3. Lomakekentän arvoa ei muuteta numeroksi

```javascript
"2" + "3";               // "23"

Number("2") + Number("3"); // 5
```

### 4. JSON.stringify ja JSON.parse sekoitetaan

```javascript
JSON.stringify(object); // Olio → JSON-teksti

JSON.parse(jsonText);   // JSON-teksti → JavaScript-arvo
```

### 5. Fetchin HTTP-virhettä ei tarkisteta

```javascript
if (!response.ok) {
    throw new Error("HTTP-virhe");
}
```

### 6. addEventListener-funktio suoritetaan heti

Väärin, jos tarkoitus on antaa funktio tapahtumankuuntelijalle:

```javascript
button.addEventListener("click", sayHello());
```

Oikein:

```javascript
button.addEventListener("click", sayHello);
```

### 7. Taulukon ensimmäinen indeksi muistetaan väärin

```javascript
const animals = ["Norsu", "Tiikeri"];

animals[0]; // Norsu
animals[1]; // Tiikeri
```

---

## 15. Tärkeimmät asiat ennen koetta

Kertaa erityisesti seuraavat:

1. DOM-elementtien etsiminen ja muokkaaminen
2. `addEventListener()` ja tapahtumat
3. Lomakkeiden validointi ja `preventDefault()`
4. `localStorage`, `JSON.stringify()` ja `JSON.parse()`
5. Taulukot, oliot, `forEach()` ja `map()`
6. REST API ja HTTP-metodit
7. Fetch, Promise, `.then()` ja `async/await`
8. jQuery, Axios ja Chart.js
9. Koodin oikea suoritusjärjestys
10. Koodin virheiden tunnistaminen

**Kokeen rakenne:** 20 kysymystä, joihin voi sisältyä monivalintoja, koodin järjestämistä ja puuttuvan koodin täydentämistä.

---

**Muistio perustuu kurssin WS01–WS08-aiheisiin, projekteihin 1–3 sekä kurssilla käsiteltyihin JavaScript-teorioihin.**

