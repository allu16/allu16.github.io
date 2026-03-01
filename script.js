function handleSubmit() {
	const question = document.getElementById("question");
	const input = document.getElementById("question-input");

	input.value = "";
	
	/*
	const answer = document.createElement("p");
	answer.innerHTML = "Kiitos vastauksesta!";
	question.appendChild(answer);
	*/

	var keeper = input.placeholder;

	input.placeholder = "Kiitos vastauksesta!";

	setTimeout(() => {
		input.placeholder = keeper;
	}, 2000);
}
