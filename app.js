const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const scoreInner = document.querySelector('.score');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let score = 0;
	const userAnswers = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
	];

	//check answers
	userAnswers.map((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	});

	result.classList.remove('d-none');
	scrollTo(0, 0);

	let output = 0;
	const timer = setInterval(() => {
		scoreInner.textContent = `${output}%`;
		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}
	}, 10);
});
