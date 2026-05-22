const API_KEY = "4eb9ea365997199e9abba90d542707ff";

function createMovieCard(){
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4eb9ea365997199e9abba90d542707ff&language=pt-BR")
  .then(res=>res.json())
  .then(data => {
    let tela=document.getElementById("movie-list");
    let textoHTML="";
    for(let i = 0 ; i < data.results.length ; i++){
      let filme=data.results[i];
      textoHTML+=`
                <div class="card col-md-8 bg-danger" style="width: 18rem;">
                  <img src=https://www.themoviedb.org/t/p/w1280/${filme.poster_path} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.overview}</p>
                  </div>
                  <ul class="list-group list-group-flush ">
                    <li class="list-group-item bg-danger">Nota: ${filme.vote_average}</li>
                  </ul>
                  <div class="card-body">
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="blank" class="card-link">Card link</a>
                  </div>
                </div>
      `
    }
    tela.innerHTML=textoHTML
  })
}

function renderMovies(){
  let tela=document.getElementById("movie-list")
  tela.innerHTML=""
  let textinput=document.getElementById("text")
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4eb9ea365997199e9abba90d542707ff&language=pt-BR")
  .then(res=>res.json())
  .then(data=>{
      str=""
      for (let i=0; i < data.results.length; i++){
        let filme=data.results[i]
        if (textinput.value === "" || filme.title.toLowerCase().includes(textinput.value.toLowerCase())){
            str+=`
                <div class="card col-md-8 bg-danger" style="width: 18rem;">
                  <img src=https://www.themoviedb.org/t/p/w1280/${filme.poster_path} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.overview}</p>
                  </div>
                  <ul class="list-group list-group-flush ">
                    <li class="list-group-item bg-danger">Nota: ${filme.vote_average}</li>
                  </ul>
                  <div class="card-body">
                    <a href="https://www.themoviedb.org/movie/${filme .id}" target="blank" class="card-link">Card link</a>
                  </div>
                </div>
          `
          
        }
      }
      if (str === "") {
        let mensagem=document.getElementById("message")
        msg="Nenhum filme encontrado."
        mensagem.innerHTML = msg 
      } else {
        tela.innerHTML = str
      }
  }
  )
}