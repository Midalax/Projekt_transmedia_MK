function checkAnswer() {
    const correctAnswer = "szyfr bacona";
    const correctAnswer_nospace = "szyfrbacona";
    const correctAnswer_pause = "szyfr-bacona"; // Oczekiwana odpowiedź
    const userAnswer = document.getElementById('solution').value.trim();
    const feedback = document.getElementById('feedback');
    const rightSectionText = document.getElementById('right-section-text'); // Pobranie diva

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase() || userAnswer.toLowerCase() === correctAnswer_nospace.toLowerCase() || userAnswer.toLowerCase() === correctAnswer_pause.toLowerCase()  ) {
        feedback.textContent = "Udało ci się rozwiązać szyfr cezara! (3 = K6)";
        feedback.style.color = "green";

        rightSectionText.style.display="block";

    } else {
        feedback.textContent = "Niestety, to niepoprawna odpowiedź. Spróbuj ponownie.";
        feedback.style.color = "red";
    }
}
