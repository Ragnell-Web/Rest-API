const kartu = document.querySelector(`.kartu`);
function tampilkanSemua() {
  fetch(`data/pizza.json`, { method: `get` })
    .then(response => response.json())
    .then(response => {
      const menus = response.menu;
      let cards = ``;
      for (const menu of menus) {
        cards += getMenu(menu);
      }
      kartu.innerHTML = cards;
    });
}

tampilkanSemua();

const container = document.querySelector(`nav div.container`);
const navLink = document.querySelectorAll(`.nav-link`)
container.addEventListener(`click`, function (e) { 
  if (e.target.classList.contains(`nav-link`)) {
    for (const nav of navLink) {
      nav.classList.remove(`active`);
      // akan menghapus setiap class active
      // dari tiap navlink satu2
    };
    e.target.classList.add(`active`)

    let kategori = e.target.innerHTML
    document.querySelector(`h1`).innerHTML = kategori;

    if (kategori == `All Menu`) {
      tampilkanSemua();
      return;
    }

    fetch(`data/pizza.json`, { method: `get` })
      .then(response => response.json())
      .then(response => {
        const daftars = response.menu;
        let content = ``;
        for (const daftar of daftars) {
          // karena kategori innerHtml menghasilkan huruf awalan besar
          // maka harus diperkecil dahulu dengan method dari js yaitu
          // toLowerCase()
          if (daftar.kategori == kategori.toLowerCase()) {
            content += getMenu(daftar)
          }
        }
        kartu.innerHTML = content;
      })
  }
})
 
function getMenu(menu) {
  return /*html*/`
            <div class="col-md-4">
              <div class="card mb-3">
                <img src="img/menu/${menu.gambar}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${menu.nama}</h5>
                  <p class="card-text">${menu.deskripsi}</p>
                  <h5 class="card-title">Rp. ${menu.harga},-</h5>
                  <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                </div>
              </div>
            </div>
            `
}