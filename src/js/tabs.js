"use strict"
import '../components/Tabs.vue'
const ratings = document.querySelectorAll('.rating');
		if (ratings.length > 0) {
			initRatings();
		}

		// Основна функція
		function initRatings () {
			let ratingActive, ratingValue;
			// Пробігаємо по всім рейтингам на сторінці
			for (let index = 0; index < ratings.length; index++) {
				const rating = ratings[index];
				initRating(rating);
			}
			// ініціалізуємо конкретний рейтинг
			function initRating(rating) {
				initRatingVars(rating);
				
				setRatingActiveWidth();
			}
			// ініціалізація перемєнних
			function initRatingVars(rating) {
				ratingActive = rating.querySelector('.rating__active');
				ratingValue = rating.querySelector('.rating__value');
			}
			// міняємо ширину активних зірок
			function setRatingActiveWidth (index = ratingValue.innerHTML) {
				const ratingActiveWidth = index / 0.05;
				ratingActive.style.width = `${ratingActiveWidth}%`;
			}

		}