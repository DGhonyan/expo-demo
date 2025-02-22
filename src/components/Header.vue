<script setup>
import globe from '@/assets/icons/globe.svg?raw'
import logo from '@/assets/icons/logo.svg?raw'
</script>

<template>
	<header>
		<div class="header-content padding">
			<div class="header-content__left">
				<div v-html="logo" alt="logo" class="header-logo-icon"></div>
			</div>
			<div class="header-content__right">
				<div v-html="globe" alt="globe" class="header-globe-icon"></div>
			</div>
		</div>
	</header>
</template>

<style scoped>
.header-content {
	position: sticky;
	z-index: 100;

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header-globe-icon {
	cursor: pointer;
}
</style>
