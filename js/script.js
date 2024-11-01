//

//$(document).ready(function () {});

//

$(document).ready(function () {
	var username = "admin";
	var password = "123";
	var failedLogins = 0;
	$("#loginButton").click(function () {
		$("#wrongUsername").hide();
		$("#wrongPassword").hide();

		var unetoIme = $("#username").val();
		var unetaLozinka = $("#password").val();
		if (failedLogins >= 3) {
			$(".podaci").attr("disabled", true);
			return;
		}
		if (username != unetoIme) {
			$("#wrongUsername").show();
			failedLogins++;
			return;
		}
		console.log(failedLogins);
		if (password != unetaLozinka) {
			$("#wrongPassword").show();
			failedLogins++;
			return;
		}

		if ((username == unetoIme) & (password == unetaLozinka)) {
			console.log("podaci su ok");
			$("#loginForm").hide();
			$("#paragraf").text("Uspesno ste se ulogovali");
		}

		// $(".podaci").attr("disabled", "");
	});
});
