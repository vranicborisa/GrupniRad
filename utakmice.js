var token = localStorage.getItem("token");
console.log(token);

function dodajNovuUtakmicu(){
	var tiket = localStorage.getItem("tiket");

    var tim1 = $("#izaberi_tim_1").val();
    var tim2 = $("#izaberi_tim_2").val();
    var kvota1 = $("#kvota_1").val();
    var kvotax = $("#kvota_x").val();
    var kvota2 = $("#kvota_2").val();

    var novaUtakmica = new NovaUtakmica(tim1,tim2,kvota1,kvota2,kvotax);
    var json_novaUtakmica = JSON.stringify(novaUtakmica);
    console.log(json_novaUtakmica);
	$.post( "http://obrada.in.rs/kladionica/api/dodajUtakmicu/"+token , json_novaUtakmica, function( data ) {

    });

}

function NovaUtakmica(tim1,tim2,kvota1,kvota2,kvotax){
    this.tim1 =tim1;
    this.tim2 = tim2;
    this.kvota1 = kvota1;
    this.kvotax = kvotax;
    this.kvota2 = kvota2;

}

function ucitajTimove() {
	$.getJSON("http://obrada.in.rs/kladionica/api/ucitajTimove/"+token, function(json) {
		$.each(json, function(key, value){
            timovi[value.id]=value.naziv_tima;
			$("#ucitaj_timove_1").append("<option value='" + value.id + "'>" + value.naziv_tima +"</option>");
            $("#ucitaj_timove_2").append("<option value='" + value.id + "'>" + value.naziv_tima +"</option>");
		});
		ucitajUtakmice();
	});
}

function ucitajUtakmice() {
	$.getJSON("http://obrada.in.rs/kladionica/api/ucitajUtakmice/"+token, function(json) {
		$("#dostupne_utakmice tbody").empty();
		$.each(json, function(key, value){
			if(value.rezultat == null){
				utakmice.push(value);
				// $("#padajuca_lista").append("<select class="form-control"  name="tim_1" id="izaberi_tim_1"> <option value="+value.utakmica.id+">Mancester</option> </select><br> <select class="form-control" name="tim_2" id="izaberi_tim_2"> <option value="Mornar">Mornar</option> </select>");	
                
                
                	
			}
		});
		ucitajTiket();
	});
}

// function igrajUtakmicu(utakmica_id, tip) {
// 	var tiket = localStorage.getItem("tiket");
// 	var par = new Par(utakmica_id, tip);
// 	var izmena = 0;
// 	if(tiket == null) {
// 		var tiket_niz = [];
// 		tiket_niz.push(par);
// 		localStorage.setItem("tiket", JSON.stringify(tiket_niz));
// 	} else {
// 		var tiket_niz = JSON.parse(tiket);
// 		$.each(tiket_niz, function(key, value){
// 			if(value.utakmica_id==utakmica_id) {
// 				tiket_niz.splice(key,1, par);
// 				izmena++;
// 			}
// 		});
// 		if(izmena==0){
// 			tiket_niz.push(par);
// 		}
// 		localStorage.setItem("tiket", JSON.stringify(tiket_niz));
// 	}
// 	ucitajTiket();
// }