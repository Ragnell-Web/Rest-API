function getDataSiswa(url, success) {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      success(this.responseText)
    }
  };
  xml.open(`get`, url, true);
  xml.send()
};

getDataSiswa(`../../data/data-siswa.json`, result => {
  // JSON.parse() mengubah JSON menjadi objek
  const siswa = JSON.parse(result);
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
});
