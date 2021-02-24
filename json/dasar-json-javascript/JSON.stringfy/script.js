// Penggunaan JSON.stringfy
// mengubah objek menjadi JSON

let siswa = [
  {
    nama:"Rizal Fauzi",
    umur:18,
    nik:"17103033",
    hobi:["Coding","Ngedit","Rebahan"],
    guru:{
      guru1:"Efrida",
      guru2:"Nur"
    }
  },
  {
    nama:"Rivansyach",
    umur:18,
    nik:"17103032",
    hobi:["Coding","Ngedit","Rebahan"],
    guru:{
      guru1:"Efrida",
      guru2:"Nur"
    }
  }
]


const span = document.querySelectorAll('span');
function isiData(type) {
  return siswa.map(swa => {
    if (type === 'nama') {
      return swa.nama;
    }
    if (type === `umur`) {
      return swa.umur;
    }
    if (type === `nik`) {
      return swa.nik;
    }
  }).join(`, `)
}
// let cards = siswa.map(swa => `${swa.nama}`).join(`, `);
span.forEach(sp => {
  if (sp.classList.contains('nama')) {
    sp.innerHTML = isiData('nama');
  };
  if (sp.classList.contains(`umur`)) {
    sp.innerHTML = isiData(`umur`);
  };
  if (sp.classList.contains(`nik`)) {
    sp.innerHTML = isiData(`nik`)
  }
})

const button = document.querySelector(`button`);
button.addEventListener(`click`, () => {
  // let siswaBaru = JSON.stringify(siswa[0]);
  // console.log(siswaBaru);
  siswa.forEach(swa => {
    // JSON.stringfy() mengubah objek menjadi JSON
    let siswaBaru = JSON.stringify(swa)
    let pBaru = document.createElement(`p`);
    pBaru.append(siswaBaru);
    button.after(pBaru);
  })
  
})