function checkAnswer() {
    const correctAnswer = "X2H4K6";
    const correctAnswer_nospace = "X2 H4 K6";
    const correctAnswer_pause = "X2-H4-K6"; // Oczekiwana odpowiedź
    const userAnswer = document.getElementById('solution').value.trim();
    const feedback = document.getElementById('feedback');
    const rightSectionText = document.getElementById('right-section-text'); // Pobranie diva

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase() || userAnswer.toLowerCase() === correctAnswer_nospace.toLowerCase() || userAnswer.toLowerCase() === correctAnswer_pause.toLowerCase()  ) {
        feedback.textContent = "Udało ci się rozwiązać wszystkie zagadki!";
        feedback.style.color = "green";

        rightSectionText.style.display="block";

    } else {
        feedback.textContent = "Niestety, to niepoprawna odpowiedź. Spróbuj ponownie.";
        feedback.style.color = "red";
    }
}
