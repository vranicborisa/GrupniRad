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

<body onload="proveriToken(); ucitaj(); ucitajTikete();">
    <?php include "include/navbar.php"; ?>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="jumbotron">
                    <h1>Ukupno tiketa: <span id="ukupno_tiketa"></span></h1>
                    <h2>Ukupan dobitak</h2>
                    <h2>Ukupan gubitak</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div id="tiketi">


                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" role="dialog" id="myModal1">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h3 class="modal-title">Detalji tiketa</h3>
                </div>
                <div class="modal-body">
                    <h2><span id="status_tiketa" class="boja"></span></h2>
                    <p>Uplata: <span id="uplata"></span></p>
                    <p>Ukupna kvota: <span id="ukupna_kvota"></span></p>
                    <p>Potencijalna isplata: <span id="potencijalna_isplata"></span></p>
                    <h4 class="text-center">Parovi:</h4>
                    <table class="table" id="tabela_modal">
                        <thead>
                            <tr>
                                <th>Tim 1</th>
                                <th>Tim 2</th>
                                <th>TIP</th>
                                <th>Kvota</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Zatvori</button>
                    <!-- <button type="button" class="btn btn-primary">Sacuvaj izmjene</button> -->
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="tiketi.js"></script>
    <script src="funkcije.js"></script>
</body>

</html>