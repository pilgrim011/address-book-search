$(document).ready(function() {
  var klijenti = [];
  //fiktivna baza clanova
  klijenti.push({
    Naziv: 'Kiza Kizenovic',
    ID: '0101982123456',
    Adresa: '1.Ulica bb',
    Lice: 'Fizicko'
  });
  klijenti.push({
    Naziv: 'Marko Markovic',
    ID: '0101982123457',
    Adresa: '2.Ulica bb',
    Lice: 'Fizicko'
  });
  klijenti.push({
    Naziv: 'Dejan Dejanovic',
    ID: '0101982123458',
    Adresa: '3.Ulica bb',
    Lice: 'Fizicko'
  });
  klijenti.push({
    Naziv: 'Kiza DOO',
    ID: '987654321',
    Adresa: '4.Ulica bb',
    Lice: 'Pravno'
  });
  klijenti.push({
    Naziv: 'Marko DOO',
    ID: '987654322',
    Adresa: '5.Ulica bb',
    Lice: 'Pravno'
  });
  klijenti.push({
    Naziv: 'Dejan DOO',
    ID: '987654323',
    Adresa: '6.Ulica bb',
    Lice: 'Pravno'
  });

  function daj_klijente(rec) {

    var pret_klijenti = [];
    for (var i = 0; i < klijenti.length; i++)
      for (var key in klijenti[i])

    if (klijenti[i][key].toLowerCase().indexOf(rec) != -1) {
      pret_klijenti.push(klijenti[i]);
    }
    return pret_klijenti;
  }
  $(".pretraga_text").keydown(function(e) {
    if (e.which === 13) {
      $(".pretraga_btn").click();
    }
  });

  $('.pretraga_btn').on('click', function() {
    $("ul").empty();
    var termin = $('.pretraga_text').val();
    if (termin.length===0) return ;
    if (!isNaN(termin)) var rec = termin;

    else var rec = termin.toLowerCase();

    var prik_klijente = daj_klijente(rec);

    for (var i = 0; i < prik_klijente.length; i++)
      if (prik_klijente[i].Lice == 'Fizicko')
        $('#fizicko').append('<li><a href=#>' + prik_klijente[i].Naziv + ' - ' + prik_klijente[i].Adresa + '</a></li>');
      else if (prik_klijente[i].Lice == 'Pravno')
      $('#pravno').append('<li><a href=#>' + prik_klijente[i].Naziv + ' - ' + prik_klijente[i].Adresa + '</a></li>');

  });

  function dodaj_partnera(naziv, adresa, id, lice) {
    klijenti.push({
      Naziv: naziv,
      ID: id,
      Adresa: adresa,
      Lice: lice
    });
  }

  function izmeni_partnera(naziv, adresa, id, lice) {
    for (var i = 0; i < klijenti.length; i++)
      if (klijenti[i].ID == id) {
        klijenti[i].Naziv = naziv;
        klijenti[i].Adresa = adresa;
        klijenti[i].Lice = lice;
      }
  }
});