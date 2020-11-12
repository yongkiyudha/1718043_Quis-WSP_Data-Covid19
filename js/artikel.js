// Initialize Firebase 
var config = {
    apiKey: "AIzaSyDg7MkSBFSBnJhqwIsl-SXb76DrDHRxu30",
    authDomain: "informasi-covid19.firebaseapp.com",
    databaseURL: "https://informasi-covid19.firebaseio.com",
    projectId: "informasi-covid19",
    storageBucket: "informasi-covid19.appspot.com",
    messagingSenderId: "163176246296",
    appId: "1:163176246296:web:17d089451cf04fbef4e76d",
    measurementId: "G-1MQXEPY0TY"
};
firebase.initializeApp(config);

let db , dataRef;

// referensi ke database
db = firebase.database();
dataRef = db.ref('Artikel');

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data){
    // console.log(data.val());
    let tampilkan = "";
    let ambilData = document.getElementById("dataArtikel");
    data.forEach(function(konten) {
        tampilkan +=
        `
        <div class="media text-muted pt-3">
            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
                <h5 class="display-5 text-gray-dark">${konten.val().Judul}</h5>
            </div>
            <span class="d-block"><a class="text-secondary" href="./artikellengkap.html?id=${konten.val().ID}">Baca Selengkapnya</a></span>
            </div>
        </div>
        `;
    });
    ambilData.innerHTML += tampilkan;  
}

function dataGagal(err){
  console.log(err);
}

