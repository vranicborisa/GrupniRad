<!DOCTYPE html>
<html>
<head>
	<title>Imenik | Projekat Imenik</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
</head>
<body onload="ucitaj(); ucitajKorisnika();">
	<?php include "include/navbar.php"; ?>
	
	<div class="container">
		<div class="row">
			
			<div class="col-lg-4">
				<div class="well">
					<h2 class="text-center">Izmena lozinke</h2>
					<form action="">
						<div class="form-group">
						    <label for="stara_lozinka">Stara lozinka</label>
						    <input type="password" class="form-control" id="stara_lozinka" placeholder="Stara lozinka...">
						</div>
						<div class="form-group">
						    <label for="nova_lozinka">Nova lozinka</label>
						    <input type="password" class="form-control" id="nova_lozinka" placeholder="Nova lozinka...">
						</div>
						<div class="form-group">
						    <label for="potvrdi_lozinku">Potvrdi lozinku</label>
						    <input type="password" class="form-control" id="potvrdi_lozinku" placeholder="Potvrdi lozinku...">
						</div>
						<button onclick="izmeniLozinku();" type="button" class="btn btn-primary btn-block"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span> Promeni lozinku</button>
					</form>
				</div>
				
			</div>
			<div class="col-lg-4">
				
			</div>
		</div>
	</div>

	
	

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtcimz2iBQOvo0vDeMwntyYwbFBiEIp9c&callback=initMap"
    async defer></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script src="profil.js"></script>
	<script src="funkcije.js"></script>
</body>
</html>