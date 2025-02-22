// load langData.json
import langData from './langData.json'
import { ref, computed } from 'vue'

const lang = ref('en');

export const texts = computed(() => {
	return langData[lang.value]
})
