//CEWyrmlMlGegsQxmVPvmYQNbfWhAHyoLFDddWLfiX3TEi84O7DcAVn7e
//https://api.pexels.com/v1/search?query=INSERISCIQUERY
//{Authorization: "CEWyrmlMlGegsQxmVPvmYQNbfWhAHyoLFDddWLfiX3TEi84O7DcAVn7e"}

const query = "Tigers";
const option = {
  headers: {
    Authorization: "CEWyrmlMlGegsQxmVPvmYQNbfWhAHyoLFDddWLfiX3TEi84O7DcAVn7e",
  },
};
const url = "https://api.pexels.com/v1/search?query=" + query;
const all = document.querySelector("#all");

fetch(url, option)
  .then((res) => {
    return res.json();
  })
  .then((obj) => {
    const items = obj.photos;
    console.log(items);

    items.forEach((item) => {
      all.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3">
     <div class="card mt-4 ">
        <div class="ratio ratio-16x9"><img src=${item.src.landscape} class="card-img-top mt-2" alt="image" /></div>
        <div class="card-body">
         <h5 class="card-title text-truncate">${item.alt}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.photographer}</li>
       </ul>
      </div>
    </div>
    `;
    });
  }).catch((error)=> console.error(error));
