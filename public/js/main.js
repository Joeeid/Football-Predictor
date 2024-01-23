function enablePredict() {
	var selectedMatch = document.querySelector("#match").value;
	if (selectedMatch === "all") {
		document.querySelector("#predictBtn").disabled = true;
	}
}
