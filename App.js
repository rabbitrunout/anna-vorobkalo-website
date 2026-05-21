const reviewsBtn = document.getElementById('reviewsToggle');
const moreReviews = document.getElementById('moreReviews');

if (reviewsBtn && moreReviews) {

  reviewsBtn.addEventListener('click', () => {

    moreReviews.classList.toggle('active');

    if (moreReviews.classList.contains('active')) {
      reviewsBtn.textContent = 'Скрыть отзывы';
    } else {
      reviewsBtn.textContent = 'Посмотреть больше отзывов';
    }

  });

}