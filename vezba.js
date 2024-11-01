//

//$(document).ready(function () {});

//

$(document).ready(function () {
	var username = "admin";
	var password = "123";
	var pogresniPodaci = [];
	$("#loginButton").click(function () {
		$("#wrongUsername").hide();
		$("#wrongPassword").hide();

		var unetoIme = $("#username").val();
		var unetaLozinka = $("#password").val();

		if (username != unetoIme) {
			$("#wrongUsername").show();
			pogresniPodaci.push(" ");
		}
		if (password != unetaLozinka) {
			$("#wrongPassword").show();
			pogresniPodaci.push(" ");
		}
		if ((username == unetoIme) & (password == unetaLozinka)) {
			console.log("podaci su ok");
			$("#loginForm").hide();
			$("#paragraf").text("Uspesno ste se ulogovali");
		}
		var broj = pogresniPodaci.length;
		console.log(pogresniPodaci);
		if (broj >= 3) {
			$(".podaci").attr("disabled", "");
		}
		// $(".podaci").attr("disabled", "");
	});
});
