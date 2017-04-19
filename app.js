$("#login").click(function() {

	var loginGrtr = G$("Bohdan", "Basov");

	$("#logindiv").hide();

	loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();

});