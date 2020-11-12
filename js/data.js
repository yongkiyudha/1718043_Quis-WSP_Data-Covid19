const urlData = "https://indonesia-covid-19.mathdro.id/api/";

const fetchApi = url => {
    return fetch(url).then(res => {
        if(res.status !== 200){
            console.log("Error "+ res.status);
            return Promise.reject(new Error(res.statusText));
        } else {
            return Promise.resolve(res);
        }
    })
    .then(res => res.json())
    .catch(error => {
        console.log("Error " +error);
    })

};

const data = () => { 
    fetchApi(urlData)
        .then(data => {
            ambilData(data);
        })
        .catch(error => {
            console.log(error);
        })
}

const ambilData = data => {
    let iniData = "";
    let element = document.getElementById("dataCovid");

    console.log(data);
    iniData = `
    <br>
    <h4><center>Jumlah Kasus Saat ini di Indonesia</center></h4>
    <div class="row">
        <div class="col-lg-3 col-sm-6 col-md-6 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="card bg-dark" style="border:0; border-bottom: 5px solid grey;">
                <div class="card-body text-muted">
                    <h1 class="card-title display-5" style="font-size: 50px; margin-top:-10px;">
                    ${data.jumlahKasus}</h1>
                    <p class="card-text" style="margin-top: -10px;">Terkonfirmasi</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="card bg-dark" style="border:0; border-bottom: 5px solid grey;">
                <div class="card-body text-success">
                    <h1 class="card-title display-5" style="font-size: 50px; margin-top:-10px;">
                    ${data.sembuh}</h1>
                    <p class="card-text" style="margin-top: -10px;">Sembuh</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="card bg-dark" style="border:0; border-bottom: 5px solid grey;">
                <div class="card-body text-warning">
                    <h1 class="card-title display-5" style="font-size: 50px; margin-top:-10px;">
                    ${data.perawatan}</h1>
                    <p class="card-text" style="margin-top: -10px;">Perawatan</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="card bg-dark" style="border:0; border-bottom: 5px solid grey;">
                <div class="card-body text-danger">
                    <h1 class="card-title  display-5" style="font-size: 50px; margin-top:-10px;">
                    ${data.meninggal}</h1>
                    <p class="card-text" style="margin-top: -10px;">Meninggal</p>
                </div>
            </div>
        </div>
    </div>
    `;
    element.innerHTML = iniData;
}

data();