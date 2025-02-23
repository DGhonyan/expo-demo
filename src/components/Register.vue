<script setup>
import { texts } from '@/Store';
import { ref } from 'vue';

const currentDateIndex = ref(0);
const arrows = ['arrow1', 'arrow2'];

const changeDate = () => {
	currentDateIndex.value = (currentDateIndex.value + 1) % arrows.length;
}

const getArrow = () => {
	const arrowName = arrows[currentDateIndex.value];
	return new URL(`/src/assets/icons/${arrowName}.svg`, import.meta.url).href;
}
</script>

<template>
	<div class="register padding">
		<div class="register__content">
			<div class="register__text_content">
				<div class="register__no_spam">{{ texts.register.no_spam }}</div>
				<div class="register__title">{{ texts.register.title }}</div>
				<div class="register__text">{{ texts.register.text }}</div>
			</div>
			<div class="register__form">
				<div class="row">
					<div class="register__form__input">
						<input type="text" :placeholder="texts.register.form.first_name" />
					</div>
					<div class="register__form__input">
						<input type="text" :placeholder="texts.register.form.last_name" />
					</div>
				</div>
				<div class="register__form__input">
					<input type="text" :placeholder="texts.register.form.email" />
				</div>
				<div class="register__form__input">
					<input type="text" :placeholder="texts.register.form.phone" />
				</div>

				<div class="register__form__date">
					<div class="register__form__date__text_container">
						<div class="register__form__date__text_container__icon">
							<img src="@/assets/icons/calendar.svg" alt="calendar" class="register__form__date__text_container__icon__image">
						</div>
						<div class="register__form__date__text">
							{{ texts.register.form.dates[currentDateIndex] }}
						</div>
					</div>
					<div class="register__form__change_date" @click="changeDate">
						<img :src="getArrow()" alt="arrow" class="register__form__change_date__arrow">
					</div>
				</div>

				<div class="register__form__button">
					{{ texts.register.form.button }}
				</div>
			</div>
		</div>
		<div class="register__form__limited">
			{{ texts.register.form.limited }}
		</div>
	</div>
</template>

<style scoped>
.register {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 20px;
}

.register__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
}

.register__no_spam {
	font-size: 25px;
	font-weight: bold;
	color: #005F56;
}

.register__title {
	font-size: 33px;
	font-weight: bold;
	color: #000929;
}

.register__text {
	font-size: 16px;
	color: #6C727F;
	opacity: 0.5;
}

.register__text_content {
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 10px;
}

.register__form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.row {
	width: 100%;
	display: flex;
	gap: 10px;
}

.register__form__input {
	width: 100%;
}

.register__form__input input, .register__form__date {
	padding: 10px 20px;
	width: 100%;
	border-radius: 5px;
	background-color: #fff;
	color: #6C727F;
	font-size: 12px;

	border: none;
}

.register__form__input input:focus {
	outline: none;
}

.register__form__input input::placeholder {
	color: #6C727F;
}

.register__form__button {
	padding: 10px 20px;
	width: 100%;
	border-radius: 5px;
	background: linear-gradient(90deg, #005F56 0%, #078276 83%);
	color: #fff;

	user-select: none;
	-webkit-user-select: none;
}

.register__form__button:hover {
	cursor: pointer;
}

.register__form__limited {
	font-size: 12px;
	color: #6C727F;
}

.register__form__date {
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
}

.register__form__date__text_container, .register__form__date__text_container__icon {
	display: flex;
	align-items: center;
	gap: 10px;
}

.register__form__change_date {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

.register__form__change_date__arrow {
	width: 14px;
	height: 14px;
}
</style>