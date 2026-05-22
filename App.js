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

const bookingWidget = document.getElementById('bookingWidget');
const bookingClose = document.getElementById('bookingClose');

if (bookingWidget && bookingClose) {
  setTimeout(() => {
    if (!localStorage.getItem('bookingWidgetClosed')) {
      bookingWidget.classList.add('active');
    }
  }, 6000);

  bookingClose.addEventListener('click', () => {
    bookingWidget.classList.remove('active');
    localStorage.setItem('bookingWidgetClosed', 'true');
  });
}

setTimeout(() => {
  if (!localStorage.getItem('bookingWidgetClosed')) {
    bookingWidget.classList.add('active');
  }
}, 18000);