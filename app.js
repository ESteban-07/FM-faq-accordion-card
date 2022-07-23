const questions = document.querySelectorAll('.faq-item');

questions.forEach(function (question) {
    const trigger = question.querySelector('.faq-question');
    trigger.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item != question) {
                item.classList.remove('show-content');
            }
        });
        question.classList.toggle('show-content');
    });
});
