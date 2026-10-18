 // VAIHE 1: Haetaan tarvittavat HTML-elementit
 // Haetaan lomake
 const lomake = document. getElementById('Ostoslista');
 const tuote = document. getElementById('tuote');
 const lista = document. getElementById('ostoslista');
 const virhe = document. getElementById('virhe');
 const ostetut = document.getElementById('ostetutTuotteet');

 // Vaihe 2: Käyttäjä syöttää tuotteen ja painaa "Lisää tuote" -painiketta
 lomake.addEventListener("submit", function(event) {
    event.preventDefault();
    const tuoteNimi = tuote.value.trim();
    console.log("Tuote: " + tuoteNimi);

    // Vaihe 3: Tuote lisätään listaan käyttäjän nähtäväksi
    if (tuoteNimi.length<2) {
        virhe.textContent = "Tuotteen nimen on oltava vähintään 2 merkkiä pitkä.";
        tuote.style.border = "2px solid pink";
        } else {
            virhe.textContent = "";
            tuote.style.border = "";

          // VAIHE 4: Lisätään tuote ostoslistaan
          const uusiTuote = document.createElement("li");
          uusiTuote.textContent = tuoteNimi;
          lista.appendChild(uusiTuote);
          tuote.value = "";
          // VAIHE 5: Luodaan Ostettu-painike
          const ostettuPainike = document.createElement("button");
          ostettuPainike.textContent = "Ostettu";
          uusiTuote.appendChild(ostettuPainike);

          ostettuPainike.addEventListener("click", function() {
            ostetut.appendChild(uusiTuote);
            ostettuPainike.remove();
            tallennaLista();
            tallennaOstetut();
            });
        // VAIHE 6: Luodaan Poista-painike
        const poistaPainike = document.createElement("button");
        poistaPainike.textContent = "poista";
        uusiTuote.appendChild(poistaPainike);
        poistaPainike.addEventListener("click", function() {
            uusiTuote.remove();
            tallennaLista();
            });
         // VAIHE 7: Tallennetaan ostoslista selaimeen
            tallennaLista();
}
});
// VAIHE 8: Haetaan tallennetut tuotteet selaimesta
const tallennetutTuotteet = JSON.parse(localStorage.getItem("ostoslista")) || [];
tallennetutTuotteet.forEach(function(tuoteNimi) {
    const uusiTuote = document.createElement("li");
uusiTuote.textContent = tuoteNimi;
lista.appendChild(uusiTuote);
const ostettuPainike = document.createElement("button");
ostettuPainike.textContent = "Ostettu"; 
uusiTuote.appendChild(ostettuPainike);
ostettuPainike.addEventListener("click", function() {
    ostetut.appendChild(uusiTuote);
ostettuPainike.remove();
tallennaLista();
tallennaOstetut();
});
const poistaPainike = document.createElement("button");
poistaPainike.textContent = "poista";
    uusiTuote.appendChild(poistaPainike);
    poistaPainike.addEventListener("click", function() {
        uusiTuote.remove();
        tallennaLista();
    });
});
// VAIHE 9: Tallennetaan ostoslistan muutokset
function tallennaLista() {
    const tuotteet=[];
    lista.querySelectorAll("li").forEach(function(tuote) {
        tuotteet.push(tuote.firstChild.textContent);
    });
    localStorage.setItem("ostoslista", JSON.stringify(tuotteet));
}
// VAIHE 10: Tallennetaan ja haetaan ostetut tuotteet
function tallennaOstetut() {
    const ostetutTuotteet = [];

    ostetut.querySelectorAll("li").forEach(function(tuote) {
        ostetutTuotteet.push(tuote.firstChild.textContent);
    });

    localStorage.setItem("ostetutTuotteet", JSON.stringify(ostetutTuotteet));
}

const tallennetutOstetut = JSON.parse(localStorage.getItem("ostetutTuotteet")) || [];

tallennetutOstetut.forEach(function(tuoteNimi) {
    const uusiTuote = document.createElement("li");
    uusiTuote.textContent = tuoteNimi;
    ostetut.appendChild(uusiTuote);

    const poistaPainike = document.createElement("button");
    poistaPainike.textContent = "poista";
    uusiTuote.appendChild(poistaPainike);

    poistaPainike.addEventListener("click", function() {
        uusiTuote.remove();
        tallennaOstetut();
    });
});
