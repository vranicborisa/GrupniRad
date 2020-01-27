<!DOCTYPE html>
<html>

<head>
	<title>Kladionica | Projekat Kladionica</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
		integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
</head>

<body onload="proveriToken(); ucitaj();">
	<?php include "include/navbar.php"; ?>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="well">
                    <div class="padajuca_lista" id="padajuca_lista">
                        <select class="form-control"  name="izaberi_tim_1" id="izaberi_tim_1" onchange="ucitajTimove();">
                            <!-- <option value="1">Mancester</option> -->
                        </select>
                        <select class="form-control" name="izaberi_tim_2" id="izaberi_tim_2" onchange="ucitajTimove();">
                            <!-- <option value="2">Mornar</option> -->
                            
                        </select>
                    </div>
                    <br>

                    <input type="Kvota 1" class="form-control" id="kvota_1" placeholder="Kvota 1"><br>
                    <input type="Kvota x" class="form-control" id="kvota_x" placeholder="Kvota x"><br>
                    <input type="Kvota 2" class="form-control" id="kvota_2" placeholder="Kvota 2"><br>
                    <button class="btn btn-primary btn-block" onclick="dodajNovuUtakmicu();">Dodaj utakmicu</button><br>
                </div>
            </div>
        </div>
        <div class="row">
			<div class="col-lg-12">
				<table class="table" id="dostupne_utakmice">
					<thead>
						<tr>
							<th>Tim 1</th>
							<th>Tim 2</th>
							<th>Kvota 1</th>
							<th>Kvota 2</th>
							<th>Kvota X</th>
						</tr>
					</thead>
					<tbody>

					</tbody>
				</table>
			</div>
		</div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
		integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
		crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="utakmice.js"></script>
    <script src="index.js"></script>
	<script src="funkcije.js"></script>
</body>

</html>