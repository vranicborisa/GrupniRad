var token = localStorage.getItem("token");
var timovi = [];
var utakmice = [];

function ucitajTimove() {
    $.getJSON("http://obrada.in.rs/kladionica/api/ucitajTimove/" + token, function (json) {
        $.each(json, function (key, value) {
            timovi[value.id] = value.naziv_tima;
            $("#tim1").append("<option value='" + value.id + "'>" + value.naziv_tima +"</option>");
            $("#tim2").append("<option value='" + value.id + "'>" + value.naziv_tima +"</option>");
        });
        ucitajUtakmice();
    });
}

function ucitajUtakmice() {
    $.getJSON("http://obrada.in.rs/kladionica/api/ucitajUtakmice/" + token, function (json) {
        $("table tbody").empty();
        console.log(json);
        $.each(json, function (key, value) {
            if (value.rezultat === null) {
                utakmice.push(value);
                $("table tbody").append("<tr><td>" + timovi[value.tim1] + "</td><td>" + timovi[value.tim2] + "</td><td>" + value.kvota1 + "</td><td>" + value.kvotax + "</td><td>" + value.kvota2 + "</td><td><select onchange='izmeniRezultat(this.value, " + value.id + ")' class='form-control' id='rezultat-"+ value.id +"'><option value='null'>- - -</option><option value='1'>1</option><option value='2'>2</option><option value='3'>X</option></select></td></tr>");
            }
        });
    });
}

function dodajUtakmicu() {
   var tim1 = $("#tim1").val();
   var tim2 = $("#tim2").val();
   var kvota1 = $("#kvota1").val();
   var kvota2 = $("#kvota2").val();
   var kvotax = $("#kvotax").val();

   if (!kvota1 || !kvota2 || !kvotax) {
       Swal.fire("Upozorenje!", "Molimo Vas da upisete sve kvote!", "error");
       return;
   } else if (tim1 == tim2) {
       Swal.fire("Upozorenje!", "Timovi moraju biti razliciti!", "error");
       return;
   }

   var utakmica = new Utakmica(tim1, tim2, kvota1, kvota2, kvotax);

   $.post("http://obrada.in.rs/kladionica/api/dodajUtakmicu/" + token, JSON.stringify(utakmica), function(data) {
       if (data.sifra == 1) {
        Swal.fire("Info!", data.poruka, "success");
        ucitajUtakmice();
       } else {
        Swal.fire("Upozorenje!", data.poruka, "error");
       }
   })
}

function Utakmica(tim1, tim2, kvota1, kvota2, kvotax) {
    this.tim1 = tim1;
    this.tim2 = tim2;
    this.kvota1 = kvota1;
    this.kvota2 = kvota2;
    this.kvotax = kvotax;
}

function izmeniRezultat(utakmica_id) {
    var rezultat = $("#rezultat-" + utakmica_id).val();
    if (rezultat != "null") {
        $.getJSON("http://obrada.in.rs/kladionica/api/izmeniRezultat/" + token + "/" + utakmica_id + "/" + rezultat, function(data) {
            if (data.sifra == 1) {
                Swal.fire("Info!", data.poruka, "success");
                ucitajUtakmice();
               } else {
                Swal.fire("Upozorenje!", data.poruka, "error");
               }
        })
    }
}

