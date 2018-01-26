function compareFields() {
    var password = document.getElementById("pass1").value;
    var confirm = document.getElementById("pass2").value;

    if (password != confirm)
        document.getElementById("confirm-pass-match").innerHTML = "<p>Las contraseñas no coinciden <i class='fa fa-thumbs-o-down' aria-hidden='true'></i></p>";
    else
        document.getElementById("confirm-pass-match").innerHTML = "<p>Las contraseñas coinciden <i class='fa fa-thumbs-o-up' aria-hidden='true'></i></p>";
	
	if (password.split("").length < 8)
        document.getElementById("confirm-pass-match").innerHTML += "<p>La contraseña es muy corta <i class='fa fa-thumbs-o-down' aria-hidden='true'></i></p>";
    else
        document.getElementById("confirm-pass-match").innerHTML += "<p>La contraseña tiene el largo correcto <i class='fa fa-thumbs-o-up' aria-hidden='true'></i></p>";
	
}

function quantity() {
    var t1 = parseInt(document.getElementById("q1").value) * 1200;
    var t2 = parseInt(document.getElementById("q2").value) * 1400;
    var t3 = parseInt(document.getElementById("q3").value) * 1100;
	
	if (isNaN(t1))
		t1 = 0;
	if (isNaN(t2))
		t2 = 0;
	if (isNaN(t3))
		t3 = 0;
	
	document.getElementById("impuestos").innerHTML = "$" + (t1+t2+t3)*0.16 + ".00 MXN";
	document.getElementById("total").innerHTML = "$" + (t1+t2+t3)*1.16 + ".00 MXN";
}
