<script setup>
import { texts } from '@/Store';
</script>

<template>
    <div class="speakers padding">
		<div class="title">
			<div class="title__text">{{ texts.speakers.title }}</div>
			<div class="have_to_say">{{ texts.speakers.have_to_say }}</div>
		</div>
		<div class="quote">
			<div class="quote__text">{{ texts.speakers.quote }}</div>
		</div>
		<div class="founder">
			<span class="founder__name">{{ texts.speakers.founder_name }}</span>
			<span class="founder__text">{{ texts.speakers.founder }}</span>
		</div>

		<div class="speakers-list">
			<div class="speaker" v-for="i in 3" :key="i">
				<img src="@/assets/images/speaker.png" alt="speaker-1">
			</div>
		</div>
    </div>
</template>

<style scoped>
.speakers {
	display: flex;
	flex-direction: column;
	justify-content: center;

	gap: 20px;
	text-align: center;
}

.title {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.title__text {
	font-size: 32px;
	font-weight: bold;
	color: #000929;
}

.have_to_say {
	font-size: 16px;
	color: #6C727F;
}

.quote__text {
	font-size: 20px;
	color: #000929;
	font-weight: medium;
}

.founder__name {
	font-size: 16px;
	color: #000929;
	font-weight: bold;
}

.founder__text {
	font-size: 16px;
	color: #6C727F;
}	

.speakers-list {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 40px;
}

.speaker {
	width: 60px;
	height: 60px;
	border-radius: 50%;
}

.speaker img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>