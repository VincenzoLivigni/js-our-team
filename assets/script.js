const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "female3.png"
  }
];


// seleziono elemento della DOM
const rigaEl = document.getElementById("riga");
// console.log(rigaEl);

// creo una variabile d'appoggio
let newRiga = "";

// ciclo for trovare i singoli membri del team
for (let i = 0; i < teamMembers.length; i++) {
     const singleMember = teamMembers[i];
     // console.log(singleMember);

// scompongo l'oggetto per aver accesso alle singole proprietà
const {name, role, email, img} = singleMember
console.log(name, role, email, img);

// inserisco le variabili appena create nella costante in modo da sostituire ad ogni iterazione le proprietà della card
const markupCard = `
  <div class="col-md-4">
    <div class="card mb-3 bg-dark text-white">
      <div class="row g-0">
 
        <div class="col-md-4">
          <img src="./assets/img/${img}"
             class="img-fluid rounded-start" alt="...">
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
                <a href="#" class="card-text">${email}</a>
          </div>
        </div>

      </div>
    </div>
  </div>
`


// la variabile d'appoggio ora contiene tutte le card
newRiga += markupCard;
}

console.log(newRiga);

//stampo il contenuto in pagina
rigaEl.innerHTML = newRiga;



/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
*/