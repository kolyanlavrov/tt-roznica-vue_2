<template>
	<div class="cards-tabs">
		<b-card class="cards-tabs__body d-n-480" no-body>
			<b-tabs class="cards-tabs__container" card>
				<b-tab class="cards-tabs__title" title="Описание" active>
					<b-card class="cards-tabs__text cards-tabs__description">
						<p>Не бояться инфекции поможет маска медицинская одноразовая трехслойная на резинке. Мы создаем изделия из ткани SMS. Три слоя материала становятся надежным фильтром, защищают органы дыхания от вирусов, бактерий, пыльцы растений и других загрязнений, летающих в воздухе.</p>
						<p>Мы используем в производстве экологически чистую полипропиленовую ткань, которая применяется в медицине. Материал легко пропускает воздух, но является влагонепроницаемым. Маска медицинская одноразовая, которую по низкой стоимости можно купить у нас оптом от производителя, оснащена фиксатором по линии носа и удобной резинкой.</p>
					</b-card>
				</b-tab>
				<b-tab class="cards-tabs__title" title="Характеристики">
					<div class="cards-tabs__text cards-tabs__specifications">
						<p class="cards-tabs__characteristic"><span>Назначение: </span> {{item.Appointment}}</p>
						<p class="cards-tabs__characteristic"><span>Класс защиты: </span> {{item.Protection}}</p>
						<p class="cards-tabs__characteristic"><span>Слои:</span> {{item.Layers}}</p>
						<p class="cards-tabs__characteristic"><span>Использование:</span> {{item.Usage}}</p>
						<p class="cards-tabs__characteristic"><span>Наличие клапана:</span> {{item.Presence}}</p>
						<p class="cards-tabs__characteristic"><span>Материал:</span> {{item.Material}}</p>
						<p class="cards-tabs__characteristic"><span>Проницаемость:</span> {{item.Permeability}}</p>
						<p class="cards-tabs__characteristic"><span>Фиксация:</span> {{item.Fixation}}</p>
					</div>
				</b-tab>
				<b-tab class="cards-tabs__title tabs-rewiews" title="Отзывы">
					<div class="cards-tabs__text tabs-rewiews__wrapper">
						<div class="tabs-rewiews__body">
							<p class="tabs-rewiews__name">Alex Kral <span>10 дней назад</span> </p>
							<form action="#" class="tabs-rewiews__form form">
								<div class="form__item">
									<div class="tabs-rewiews__rating">
										<div class="tabs-rewiews__items">
											<input id="rewiews-rating__5" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="5">
											<label for="rewiews-rating__5" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__4" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="4">
											<label for="rewiews-rating__4" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__3" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="3">
											<label for="rewiews-rating__3" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__2" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="2">
											<label for="rewiews-rating__2" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__1" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="1">
											<label for="rewiews-rating__1" class="tabs-rewiews__label"></label>
										</div>
									</div>
									<p class="tabs-rewiews__estimate">4.3 <span>(56 оценок)</span></p>
								</div>
							</form>
							<p class="tabs-rewiews__comment">Эксперты перепроверили пельмени «Белорусские», «Бульмени», «Ложкарев», «Останкинские традиционные пельмени», «Сибирская коллекция», «Стародворье» и «Цезарь». И кишечная палочка, и сальмонелла обнаружены в продукции «Сибирской коллекции»...</p>
							<form action="#" class="tabs-rewiews__feedback feedback">
								<p class="feedback__helpfull">Отзыв был полезен? </p>
								<button type="submit" class="button__feedback feedback__yes">да</button>
								<button type="submit" class="button__feedback feedback__no">нет</button>
								<button class="button__feedback feedback__complain">Пожаловаться на отзыв</button>
							</form>
						</div>
						<div class="tabs-rewiews__body">
							<p class="tabs-rewiews__name">Полина Невероятная <span>2 месяца назад</span> </p>
							<form action="#" class="tabs-rewiews__form form">
								<div class="form__item">
									<div class="tabs-rewiews__rating">
										<div class="tabs-rewiews__items">
											<input id="rewiews-rating__55" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="5">
											<label for="rewiews-rating__55" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__44" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="4">
											<label for="rewiews-rating__44" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__33" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="3">
											<label for="rewiews-rating__33" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__22" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="2">
											<label for="rewiews-rating__22" class="tabs-rewiews__label"></label>
											<input id="rewiews-rating__11" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="1">
											<label for="rewiews-rating__11" class="tabs-rewiews__label"></label>
										</div>
									</div>
									<p class="tabs-rewiews__estimate">3.2 <span>(14 оценок)</span></p>
								</div>
							</form>
							<p class="tabs-rewiews__comment">Читатели тульских новостных сайтов поддержали медработницу. Большинство комментариев к фотографии оказались позитивными, девушку призвали наградить, а не наказывать, дать ей премию, обратить внимание на проблемы врачей и даже сделать главврачом.</p>
							<form action="#" class="tabs-rewiews__feedback feedback">
								<p class="feedback__helpfull">Отзыв был полезен? </p>
								<button type="submit" class="button__feedback feedback__yes">да</button>
								<button type="submit" class="button__feedback feedback__no">нет</button>
								<button class="button__feedback feedback__complain">Пожаловаться на отзыв</button>
							</form>
						</div>
						<div class="tabs-rewiews__more more-rewiews">
							<button class="more-rewiews__button">Показать больше отзывов</button>
						</div>
						<form class="tabs-rewiews__your-review your-review" action="#" method="GET">
							<input class="your-review__input" type="text" name="name" value="" placeholder="Ваше имя">
							<textarea class="your-review__textarea" name="review" placeholder="Оставьте свой отзыв"></textarea>
							<button class="your-review__button button" type="submit"><a href="#">Оставить отзыв</a></button>
						</form>
					</div>
				</b-tab>
				<b-tab class="cards-tabs__title questions-tab" title="Вопросы">
					<b-card no-body class="cards-tabs__text questions-tab__text">
						<div class="questions-tab__header" header-tag="header" role="tab">
							<button class="questions-tab__button" v-b-toggle.questions-1>Как подобрать подходящий размер</button>
						</div>
						<b-collapse id="questions-1" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
					<b-card no-body class="cards-tabs__text questions-tab__text">
						<div class="questions-tab__header" header-tag="header" role="tab">
							<button class="questions-tab__button" v-b-toggle.questions-2>Ожидается ли поступление товара и в какие сроки</button>
						</div>
						<b-collapse id="questions-2" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
					<b-card no-body class="cards-tabs__text questions-tab__text">
						<div class="questions-tab__header" header-tag="header" role="tab">
							<button class="questions-tab__button" v-b-toggle.questions-3>Уточнение дополнительной информации по товару</button>
						</div>
						<b-collapse id="questions-3" visible accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>Точку в дебатах вокруг даты начала кампании по сдаче ЕГЭ в России поставил президент Владимир Путин. Госэкзамен начнется 29 июня, объявил глава государства в ходе совещания по вопросам образования с профильными министрами. ЕГЭ в 2020 году будут сдавать лишь одиннадцатиклассники, которые планируют поступать в вузы, и по тем предметам, которые необходимы для зачисления. В Минобрнауки заверяют, что вузы смогут провести вступительную кампанию в сжатые сроки, а учебный год начнется 1 сентября.</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
					<b-card no-body class="cards-tabs__text questions-tab__text">
						<div class="questions-tab__header" header-tag="header" role="tab">
							<button class="questions-tab__button" v-b-toggle.questions-4>Сообщить о неточности в описании товара</button>
						</div>
						<b-collapse id="questions-4" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
					<b-card no-body class="cards-tabs__text questions-tab__text">
						<div class="questions-tab__header" header-tag="header" role="tab">
							<button class="questions-tab__button" v-b-toggle.questions-5>Возможность отложить товар для дальнейшего выбора</button>
						</div>
						<b-collapse id="questions-5" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
					<b-card no-body class="cards-tabs__text questions-tab__text">
						<div class="questions-tab__header" header-tag="header" role="tab">
							<button class="questions-tab__button" v-b-toggle.questions-6>Можно ли добавить товар в "Резерв"</button>
						</div>
						<b-collapse id="questions-6" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
					<button type="submit" class="questions-tab__question button">
						<a href="#">Показать все вопросы</a>
					</button>
				</b-tab>
				<b-tab class="cards-tabs__title" title="Доставка">
					<b-card-text class="cards-tabs__text cards-tabs__delivery">
						Доставка
					</b-card-text>
				</b-tab>
			</b-tabs>
		</b-card>
		<div class="cards-tabs__mobile mobile-spoiler" role="tablist">
			<div class="cards-tabs__container">
				<b-card class="mobile-spoiler__title cards-tabs__title" no-body>
					<div header-tag="header" class="" role="tab">
						<div class="mobile-spoiler__button" v-b-toggle.accordion-1 >Описание</div>
					</div>
					<b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
						<b-card-body class="cards-tabs__text cards-tabs__description">
							<b-card-text>Не бояться инфекции поможет маска медицинская одноразовая трехслойная на резинке. Мы создаем изделия из ткани SMS. Три слоя материала становятся надежным фильтром, защищают органы дыхания от вирусов, бактерий, пыльцы растений и других загрязнений, летающих в воздухе.</b-card-text>
							<b-card-text>Мы используем в производстве экологически чистую полипропиленовую ткань, которая применяется в медицине. Материал легко пропускает воздух, но является влагонепроницаемым. Маска медицинская одноразовая, которую по низкой стоимости можно купить у нас оптом от производителя, оснащена фиксатором по линии носа и удобной резинкой.</b-card-text>
						</b-card-body>
					</b-collapse>
				</b-card>
				<b-card class="mobile-spoiler__title cards-tabs__title" no-body>
					<div header-tag="header" class="" role="tab">
						<div class="mobile-spoiler__button" v-b-toggle.accordion-2 >Характеристики</div>
					</div>
					<b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
						<b-card-body class="cards-tabs__text cards-tabs__specifications">
							<p class="cards-tabs__characteristic"><span>Назначение: </span> {{item.Appointment}}</p>
							<p class="cards-tabs__characteristic"><span>Класс защиты: </span> {{item.Protection}}</p>
							<p class="cards-tabs__characteristic"><span>Слои:</span> {{item.Layers}}</p>
							<p class="cards-tabs__characteristic"><span>Использование:</span> {{item.Usage}}</p>
							<p class="cards-tabs__characteristic"><span>Наличие клапана:</span> {{item.Presence}}</p>
							<p class="cards-tabs__characteristic"><span>Материал:</span> {{item.Material}}</p>
							<p class="cards-tabs__characteristic"><span>Проницаемость:</span> {{item.Permeability}}</p>
							<p class="cards-tabs__characteristic"><span>Фиксация:</span> {{item.Fixation}}</p>
						</b-card-body>
					</b-collapse>
				</b-card>
				<b-card class="mobile-spoiler__title cards-tabs__title tabs-rewiews" no-body>
					<div header-tag="header" class="" role="tab">
						<div class="mobile-spoiler__button" v-b-toggle.accordion-3 >Отзывы</div>
					</div>
					<b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
						<div class="cards-tabs__text tabs-rewiews__wrapper">
							<div class="tabs-rewiews__body">
								<p class="tabs-rewiews__name">Alex Kral <span>10 дней назад</span> </p>
								<form action="#" class="tabs-rewiews__form form">
									<div class="form__item">
										<div class="tabs-rewiews__rating">
											<div class="tabs-rewiews__items">
												<input id="rewiews-rating__5" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="5">
												<label for="rewiews-rating__5" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__4" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="4">
												<label for="rewiews-rating__4" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__3" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="3">
												<label for="rewiews-rating__3" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__2" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="2">
												<label for="rewiews-rating__2" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__1" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="1">
												<label for="rewiews-rating__1" class="tabs-rewiews__label"></label>
											</div>
										</div>
										<p class="tabs-rewiews__estimate">4.3 <span>(56 оценок)</span></p>
									</div>
								</form>
								<p class="tabs-rewiews__comment">Эксперты перепроверили пельмени «Белорусские», «Бульмени», «Ложкарев», «Останкинские традиционные пельмени», «Сибирская коллекция», «Стародворье» и «Цезарь». И кишечная палочка, и сальмонелла обнаружены в продукции «Сибирской коллекции»...</p>
								<form action="#" class="tabs-rewiews__feedback feedback">
									<p class="feedback__helpfull">Отзыв был полезен? </p>
									<button type="submit" class="button__feedback feedback__yes">да</button>
									<button type="submit" class="button__feedback feedback__no">нет</button>
									<button class="button__feedback feedback__complain">Пожаловаться на отзыв</button>
								</form>
							</div>
							<div class="tabs-rewiews__body">
								<p class="tabs-rewiews__name">Полина Невероятная <span>2 месяца назад</span> </p>
								<form action="#" class="tabs-rewiews__form form">
									<div class="form__item">
										<div class="tabs-rewiews__rating">
											<div class="tabs-rewiews__items">
												<input id="rewiews-rating__55" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="5">
												<label for="rewiews-rating__55" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__44" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="4">
												<label for="rewiews-rating__44" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__33" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="3">
												<label for="rewiews-rating__33" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__22" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="2">
												<label for="rewiews-rating__22" class="tabs-rewiews__label"></label>
												<input id="rewiews-rating__11" type="radio" class="tabs-rewiews__item" name="rewiews-rating" value="1">
												<label for="rewiews-rating__11" class="tabs-rewiews__label"></label>
											</div>
										</div>
										<p class="tabs-rewiews__estimate">3.2 <span>(14 оценок)</span></p>
									</div>
								</form>
								<p class="tabs-rewiews__comment">Читатели тульских новостных сайтов поддержали медработницу. Большинство комментариев к фотографии оказались позитивными, девушку призвали наградить, а не наказывать, дать ей премию, обратить внимание на проблемы врачей и даже сделать главврачом.</p>
								<form action="#" class="tabs-rewiews__feedback feedback">
									<p class="feedback__helpfull">Отзыв был полезен? </p>
									<button type="submit" class="button__feedback feedback__yes">да</button>
									<button type="submit" class="button__feedback feedback__no">нет</button>
									<button class="button__feedback feedback__complain">Пожаловаться на отзыв</button>
								</form>
							</div>
							<div class="tabs-rewiews__more more-rewiews">
								<button class="more-rewiews__button">Показать больше отзывов</button>
							</div>
							<form class="tabs-rewiews__your-review your-review" action="#" method="GET">
								<input class="your-review__input" type="text" name="name" value="" placeholder="Ваше имя">
								<textarea class="your-review__textarea" name="review" placeholder="Оставьте свой отзыв"></textarea>
								<button class="your-review__button button" type="submit"><a href="#">Оставить отзыв</a></button>
							</form>
						</div>
					</b-collapse>
				</b-card>
				<b-card class="mobile-spoiler__title cards-tabs__title" no-body>
					<div header-tag="header" class="cards-tabs__subtitle" role="tab">
						<div class="mobile-spoiler__button" v-b-toggle.accordion-4 >Вопросы</div>
					</div>
					<b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
						<div>
							<a class="mobile-spoiler__link" v-b-toggle.collapse-1 @click.prevent role="tab">Как подобрать подходящий размер</a>
							<b-collapse id="collapse-1" accordion="collapse">
								<b-card class="mobile-spoiler__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?
								</b-card>
							</b-collapse>
						</div>
						<div>
							<a class="mobile-spoiler__link" v-b-toggle.collapse-2 @click.prevent role="tab">Ожидается ли поступление товара и в какие сроки</a>
							<b-collapse id="collapse-2" accordion="collapse">
								<b-card class="mobile-spoiler__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?
								</b-card>
							</b-collapse>
						</div>
						<div>
							<a class="mobile-spoiler__link" v-b-toggle.collapse-3 @click.prevent role="tab">Уточнение дополнительной информации по товару</a>
							<b-collapse id="collapse-3" accordion="collapse">
								<b-card class="mobile-spoiler__text">
									Точку в дебатах вокруг даты начала кампании по сдаче ЕГЭ в России поставил президент Владимир Путин. Госэкзамен начнется 29 июня, объявил глава государства в ходе совещания по вопросам образования с профильными министрами. ЕГЭ в 2020 году будут сдавать лишь одиннадцатиклассники, которые планируют поступать в вузы, и по тем предметам, которые необходимы для зачисления. В Минобрнауки заверяют, что вузы смогут провести вступительную кампанию в сжатые сроки, а учебный год начнется 1 сентября.
								</b-card>
							</b-collapse>
						</div>
						<div>
							<a class="mobile-spoiler__link" v-b-toggle.collapse-4 @click.prevent role="tab">Сообщить о неточности в описании товара</a>
							<b-collapse id="collapse-4" accordion="collapse">
								<b-card class="mobile-spoiler__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?
								</b-card>
							</b-collapse>
						</div>
						<div>
							<a class="mobile-spoiler__link" v-b-toggle.collapse-5 @click.prevent role="tab">Возможность отложить товар для дальнейшего выбора</a>
							<b-collapse id="collapse-5" accordion="collapse">
								<b-card class="mobile-spoiler__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?
								</b-card>
							</b-collapse>
						</div>
						<div>
							<a class="mobile-spoiler__link" v-b-toggle.collapse-6 @click.prevent role="tab">Можно ли добавить товар в "Резерв"</a>
							<b-collapse id="collapse-6" accordion="collapse">
								<b-card class="mobile-spoiler__text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor qui esse assumenda odit recusandae tenetur rem. Perspiciatis sunt sapiente accusamus aperiam cupiditate recusandae cumque excepturi rem voluptatum rerum. Quam, impedit dolores. Dignissimos, ut ratione temporibus doloremque voluptatibus et est magni mollitia debitis ab laborum, officiis, omnis quasi placeat harum?
								</b-card>
							</b-collapse>
						</div>
					</b-collapse>
				</b-card>
				<b-card class="mobile-spoiler__title cards-tabs__title" no-body>
					<div header-tag="header" class="" role="tab">
						<div class="mobile-spoiler__button" v-b-toggle.accordion-5 >Доставка</div>
					</div>
					<b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
						<b-card-body class="cards-tabs__text cards-tabs__delivery">
							DOSTAVKA Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse porro est atque quaerat mollitia, provident eos amet ducimus velit rerum autem voluptas itaque unde aspernatur nam omnis alias illo.
						</b-card-body>
					</b-collapse>
				</b-card>
			</div>
		</div>
	</div>
</template>
<script>
import data from '../mock/cards'
export default {
	name: 'Tabs',
	components: {
		
	},
	data () {
		return {
			
		}
	},
	created () {
		const item = data.products.specifications.find(
			(item) => item.id == this.$route.params.id
		);
		if (item) {
			this.item = item;
		}
	},
}
</script>

<style lang="scss">
@import '../assets/styles/mixins.scss';
.mobile-spoiler {
	display: none;
}
.cards-tabs__text {
	font-size: 17px;
	line-height: 24px;
	color: #191919;
}
.tabs-rewiews__wrapper {
	font-size: 15px;
	max-width: 850px;
	margin: 0px auto;
	padding-top: 50px;
}
.tabs-rewiews__body {
	margin: 0px 0px 45px 0px;
}
.cards-tabs__description,
.cards-tabs__specifications {
	padding-top: 35px;
}
.cards-tabs__description p,
.cards-tabs__specifications p {
	margin-bottom: 24px;
}
.cards-tabs__specifications {
	display: flex;
	align-items: flex-start;
	/* flex-direction: column; */
	flex-wrap: wrap;
	margin: 0px -10px;
}
.cards-tabs__characteristic {
	flex: 0 1 33.33333%;
	padding: 0px 10px;
}
.cards-tabs__characteristic span {
	font-weight: bold;
}
.cards-tabs {
	padding: 42px 0px 72px;
}
.card-header {
	border-bottom: 1px solid #C4C4C4;
	padding:  0px;
	background-color: #fff;
	font-size: 20px;
	line-height: 23px;
	text-transform: uppercase;
	color: #C4C4C4;
	// padding: 17px 0px;
}
.card-header:first-child {
	border-radius: 0px;
}
.card-header-tabs {
	margin: 0px;
	// border-bottom: 1px solid #C4C4C4;
}
.nav-tabs .nav-link {
	border: none;
	margin: 0px;
}
.nav-item {
	padding: 0px 15px;
}
.nav-tabs .nav-item:first-child {
	padding-left: 0px;
}
.nav-link {
	padding: 18px 0px;
	color: #E2E2E2;
	@include adaptiv-value (font-size, 20, 17, 1);
	@include adaptiv-value (line-height, 23, 19, 1);
	// font-size: 20px;
	// line-height: 23px;
	text-transform: capitalize;
}
.nav-tabs .nav-link.active {
	border-bottom: 2px solid #EC5827;
}
.nav-tabs .nav-link.active, 
.nav-tabs .nav-item.show .nav-link,
.nav-link:hover, 
.nav-link:focus {
	color: #EC5827;
}
.nav-tabs .nav-link.active,
.nav-link:focus {
	font-weight: bold;
}
.card-body {
	padding: 0px;
}
@media (max-width: 767px) {
	.card-header-tabs {
		display: flex;
		flex-direction: column;
	}
	.nav-link {
		text-transform: uppercase;
	}
}
.tabs-rewiews__form {
	margin: 0px 0px 10px 0px;
}
.form__item {
	display: flex;
	align-items: flex-end;
	line-height: 0.75;
}
.tabs-rewiews__rating {
	position: relative;
	font-size: 25px;
	display: inline-block;
	color: #c4c4c4;
}
.tabs-rewiews__rating::before {
	content: '★★★★★';
	display: block;
}
.tabs-rewiews__items {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	display: flex;
	flex-direction: row-reverse;
	overflow: hidden;
}
.tabs-rewiews__item {
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0;
	visibility: hidden;
	top: 0;
	left: 0;
}
.tabs-rewiews__label {
	flex: 0 0 20%;
	height: 100%;
	cursor: pointer;
	color:#c4c4c4;
}
.tabs-rewiews__label::before {
	content: '★';
	display: block;
	transition: color 0.3s ease 0s;
}
.tabs-rewiews__item:checked,
.tabs-rewiews__item:checked ~ .tabs-rewiews__label {
	color: #EC5827;
}
.tabs-rewiews__label:hover,
.tabs-rewiews__label:hover ~ .tabs-rewiews__label,
.tabs-rewiews__label:checked ~ .tabs-rewiews__label:hover {
	color: #EC5827;
	
}
.tabs-rewiews__name {
	font-size: 17px;
	font-weight: 700;
	margin: 0px 0px 10px 0px;
}
.tabs-rewiews__name span {
	font-weight: 400;
	color: #C4C4C4;
	padding-left: 10px;
}
.tabs-rewiews__estimate {
	color: #EC5827;
	font-size: 15px;
	font-weight: 700;
	padding-left: 10px;
}
.tabs-rewiews__estimate span {
	color: #C4C4C4;
	font-weight: 400;
}
.tabs-rewiews__comment {
	margin: 0px 0px 25px 0px;
}
.feedback {
	display: flex;
}
.button__feedback {
	background-color: #fff;
	text-decoration: underline;
	margin-left: 20px;
}
.feedback__complain {
	color: #C4C4C4;
}
.tabs-rewiews__more {
	text-align: center;
	margin: 60px 0px 25px;
}
.more-rewiews__button {
	background-color: #fff;
	text-decoration: underline;
	color: #EC5827;
	font-weight: 700;
}
.your-review {
	border-top: 2px solid #C4C4C4;
    padding-top: 58px;
}
input.your-review__input::placeholder, 
textarea.your-review__textarea::placeholder{
    color: #C4C4C4;
}
.your-review__input, .your-review__textarea{
    border: 1px solid #000000;
    border-radius: 2px;
    font-size: 18px;
    line-height: 22px;
    color: #000;
}
.your-review__input:focus, .your-review__textarea:focus{
    border: 1px solid #EC5827;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
}
.your-review__input{
	// @include adaptiv-value (width, 328, 333, 1);
    width: 328px;
	// margin: 0 auto;
    padding: 10px 15px;
}
.your-review__textarea{
    // width: 850px;
	@include adaptiv-value (width, 850, 333, 1);
	@include adaptiv-value (height, 98, 218, 1);
    // height: 98px;
    resize: none;
    overflow : auto;
    text-align: center;
    padding: 36px 0px;
    margin: 20px auto 0px;
}
button.button {
    background: #EC5827;
    // padding: 9px 67px;
	width: 241px;
	height: 42px;
    display: block;
    margin: 35px auto 0px;
}
button.button:hover {
    background: #FF7E53;
    /* border-radius: 4px; */
    text-decoration: none;
    color: #FFFFFF;
}
button.button:active {
    background: #AB3A15;
}
.button a {
    color: #FFFFFF;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
}
.questions-tab {
	max-width: 850px;
	margin: 0px auto;
	padding-top: 50px;
}
.questions-tab__text:first-child {
	border-top: 1px solid #000;
}
.questions-tab__text {
	border-bottom: 1px solid #000;
	border-radius: 0px;
	padding: 17px 0px;
}
.questions-tab__text p.card-text{
	padding: 20px 0px 40px;
}
.questions-tab__header{
	position: relative;
}
.questions-tab__button,
.mobile-spoiler__link {
	background-color: #fff;
	font-weight: 700;
	font-size: 24px;
	color: #191919;
	display: block;
}
a.mobile-spoiler__link:hover {
	color: #000;
	text-decoration: underline;
}
.questions-tab__button.not-collapsed,
a.mobile-spoiler__link.not-collapsed {
	color: #EC5827;
	text-decoration: none;
}
.questions-tab__button::before,
.questions-tab__button::after {
	content: '';
    position: absolute;
    width: 11px;
    height: 2px;
    background-color: #000;
    top: 15px;
    transition: all 0.3s ease 0s;
}
.questions-tab__button::before {
	transform: rotate(45deg);
    right: 32px;
}
.questions-tab__button::after {
	transform: rotate(135deg);
    right: 25px;
}
.questions-tab__button.not-collapsed::before,
.questions-tab__button.not-collapsed::after {
	background-color: #EC5827;
}
.questions-tab__button.not-collapsed::before {
	transform: rotate(135deg);
}
.questions-tab__button.not-collapsed::after {
	transform: rotate(45deg);
}
.mobile-spoiler__link {
	display: inline-block;
	position: relative;
	font-size: 17px;
	line-height: 22px;
	padding: 10px 0px;
	color: #191919;
	text-decoration: underline;
}
.mobile-spoiler__link.not-collapsed {
	text-decoration: none;
}

.mobile-spoiler__text {
	font-size: 17px;
	line-height: 22px;
	color: #191919;
}
@media (max-width:768px) { 
	.your-review {
		text-align: center;
	}
	.your-review__input{ 
		text-align: center;
	}
}
@media (max-width:480px) {
	.card-text:last-child {
		margin: 0px 0px 40px 0px;
	}
	.cards-tabs__characteristic {
		flex: 0 1 100%;
	}
    button.button {
    // padding: 13px 64.5px;
    }
	.nav-item {
		padding: 0px;
		border-top: 1px solid #C4C4C4;
	}
	.nav-tabs .nav-link.active {
		border: none;
	}
	.d-n-480 {
		display: none;
	}
	.mobile-spoiler {
		display: block;
		border-top: 1px solid #C4C4C4;
	}
	.mobile-spoiler__title {
		border-bottom: 1px solid #C4C4C4;
	}
	.not-collapsed,
	.mobile-spoiler__button.not-collapsed {
		color: #EC5827;
		font-weight: 700;
	}
	.mobile-spoiler__button {
		position: relative;
		font-size: 17px;
		text-transform: uppercase;
		color: #C4C4C4;
		padding: 18px 0px;
	}
	.mobile-spoiler__button::before,
	.mobile-spoiler__button::after {
		content: '';
		width: 11px;
		height: 2px;
		background-color: #C4C4C4;
		position: absolute;
		top: 25px;
		right: 0px;
		transition: all 0.3s ease 0s;
	}
	.mobile-spoiler__button::before {
		transform: rotate(45deg);
        right: 32px;
	}
	.mobile-spoiler__button::after {
		transform: rotate(135deg);
        right: 25px;
	}
	.mobile-spoiler__button.not-collapsed::before,
	.mobile-spoiler__button.not-collapsed::after {
		background-color: #EC5827;
	}
	.mobile-spoiler__button.not-collapsed::before {
		transform: rotate(135deg);
	}
	.mobile-spoiler__button.not-collapsed::after {
		transform: rotate(45deg);
	}
	.tabs-rewiews__wrapper {
		padding: 0px;
	}
	.feedback {
		flex-wrap: wrap;
	}
	.feedback button:last-child {
		margin: 10px 0px 0px 0px;
	}
	.tabs-rewiews__body {
		margin: 0px 0px 20px 0px;
	}
	.tabs-rewiews__more {
		margin: 30px 0px 0px 0px;
	}
	.your-review {
		border:none;
		padding: 50px 0px;
	}
	button.button {
		padding: 9px 42px;
	}
}
@media (max-width:320px) {
	.your-review__textarea,
	.your-review__input{ 
		width: 280px;
	}
}
</style>