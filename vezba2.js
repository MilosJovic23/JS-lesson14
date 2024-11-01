//

//

//

$(document).ready(function () {
	$("#sacuvajIzmene").click(function () {
		var visinaElementa = $("#visina").val();
		var sirinaElementa = $("#sirina").val();
		var bojaElementa = $("#color").val();
		$("#element").css({
			width: sirinaElementa,
			height: visinaElementa,
			// backgroundColor: bojaElementa,
		});
		$("#color").on("input", function () {
			console.log("test");
			var boja = $(this).val();
			$("#element").css("backgroundColor", boja);
		});
	});
});
