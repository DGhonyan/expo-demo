<script setup>
import Header from './components/Header.vue'
import Invest from './components/Invest.vue'
import About from './components/About.vue'
import Speakers from './components/Speakers.vue'
import Benefits from './components/Benefits.vue'
import Register from './components/Register.vue'
import Contact from './components/Contact.vue'
</script>

<template>
	<div class="container">
		<Header />

		<div class="container-content">
			<Invest />
			<About />
		</div>

		<Speakers />
		<Benefits />
		<Register />
		<Contact />
	</div>
</template>

<style scoped>

.container {
	display: flex;
	flex-direction: column;

	gap: 100px;
}

.container-content {
	display: flex;
	flex-direction: column;
	gap: 40px;
}

</style>
