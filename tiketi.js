var token = localStorage.getItem("token");
var timovi = [];
var utakmice = [];
var tiketi = [];

$(document).ready(function () {
    ucitajTimove();
    ucitajTikete();
});

function ucitajUtakmice() {
    $.getJSON("http://obrada.in.rs/kladionica/api/ucitajUtakmice/" + token, function (json) {
        $("#dostupne_utakmice tbody").empty();
        $.each(json, function (key, value) {
            utakmice.push(value);
            $("#dostupne_utakmice tbody").append("<tr><td>" + timovi[value.tim1] + "</td><td>" + timovi[value.tim2] + "</td><td><button class='btn btn-xs btn-primary' onclick='igrajUtakmicu(" + value.id + ", 1);'>Igraj  <span class='badge'>" + value.kvota1 + "</span></button></td><td><button class='btn btn-xs btn-primary' onclick='igrajUtakmicu(" + value.id + ", 2);'>Igraj  <span class='badge'>" + value.kvota2 + "</span></button></td><td><button class='btn btn-xs btn-primary' onclick='igrajUtakmicu(" + value.id + ", 3);'>Igraj  <span class='badge'>" + value.kvotax + "</span></button></td></tr>");
        });

    });
}

function ucitajTikete() {
    $.getJSON("http://obrada.in.rs/kladionica/api/ucitajTikete/" + token, function (json) {
        $("#tiketi").empty();
        $.each(json, function (key, value) {
            // console.log(value);
            tiketi.push(value);
            var broj_odigranih_utakmica = value.parovi.length;
            var uplata = value.uplata;
            var datum_i_vremen_uplate = value.vreme_uplate;
            $("#tiketi").append('<div class="well text-center"> <h2>Tiket ID: ' + value.tiket_id + '</h2> <div class="row"> <div class="col-lg-6 col-xs-12"> <p>Broj odigranih utakmica: <span id="odigrane_utakmice">' + broj_odigranih_utakmica + '</span></p> <p>Uplata: <span id="">' + uplata + ' RSD</span></p> <p>Datum i vremen uplate: <span id="datum_i_vremen_uplate">' + datum_i_vremen_uplate + '</span></p> </div> <div class="col-lg-6 col-xs-12"> <div class="alert alert-info">Tiket je aktivan.</div> <button class="btn btn-primary btn-block" onclick="otvoriModal(' + value.tiket_id + ')">Detalji</button> </div> </div> </div>');

        });
        $("#ukupno_tiketa").html(json.length);
        console.log(json);
    });
}

function otvoriModal(tiket_id) {
    $("#myModal1").modal("show");
    var tiket = (findByTiketId(tiket_id));
    $("#uplata").html(tiket[0].uplata + " RSD");
    $("#tabela_modal tbody").empty();
    var ukupna_kvota = 1;
    var utakmice_u_igri = 0;
    var pogodak = 0;
    var promasaj = 0;

    $.each(tiket[0].parovi, function (key, value) {
        var utakmica = (findById(value.utakmica_id));
        if (utakmica[0].rezultat == null) {
            utakmice_u_igri++;
        } else {
            if (utakmica[0].rezultat == value.igra) {
                pogodak++;
            } else {
                promasaj++;
            }
        }
        if (value.igra == 3) {
            var tip_za_tabelu = "X";
        } else {
            var tip_za_tabelu = value.igra;
        }
        switch (+value.igra) {
            case 1:
                var kvota = utakmica[0].kvota1;
                break;
            case 2:
                var kvota = utakmica[0].kvota2;
                break;
            case 3:
                var kvota = utakmica[0].kvotax;
                break;
            default:
                var kvota = "Greska";
        }
        ukupna_kvota *= parseFloat(kvota);

        $("#ukupna_kvota").html(Math.round(ukupna_kvota * 100) / 100);
        console.log(timovi[utakmica]);
        console.log(utakmica.tim1);
        (Math.round((ukupna_kvota * tiket[0].uplata) * 100) / 100)
        $("#potencijalna_isplata").html(Math.round((ukupna_kvota * tiket[0].uplata) * 100) / 100);
        $("#tabela_modal tbody").append('<tr><td>' + timovi[utakmica[0].tim1] + '</td><td>' + timovi[utakmica[0].tim2] + '</td><td>' + tip_za_tabelu + '</td><td>' + kvota + '</td></tr>');
    });
    if (utakmice_u_igri > 0) {
        $("#status_tiketa").html("AKtivan");
        $("#status_tiketa").removeClass("AKtivan1");
        $("#status_tiketa").removeClasss("AKtivan2");
        $("#status_tiketa").addClass("AKtivan");
    } else if (promasaj > 0) {
        $("#status_tiketa").html("Gubitan");
        $("#status_tiketa").removeClass("AKtivan12");
        $("#status_tiketa").removeClasss("AKtivan22");
        $("#status_tiketa").addClass("AKtivan23");
    } else {
        $("#status_tiketa").html("AKtivan");
        $("#status_tiketa").removeClass("AKtivan13");
        $("#status_tiketa").removeClasss("AKtivan23");
        $("#status_tiketa").addClass("AKtivan33");
        // console.log(utakmice_u_igri);
        // console.log(pogodak);
        // console.log(promasaj);


    }
}


    function ucitajTimove() {
        $.getJSON("http://obrada.in.rs/kladionica/api/ucitajTimove/" + token, function (json) {
            $.each(json, function (key, value) {
                // console.log(value);
                timovi[value.id] = value.naziv_tima;

            });
            ucitajUtakmice();
        });
    }

    function findById(id) {
        var result = utakmice.filter(obj => {
            return obj.id == id;
        });
        return result;
    }

    function findByTiketId(id) {
        var result = tiketi.filter(obj => {
            return obj.tiket_id == id;
        });
        return result;
    }

