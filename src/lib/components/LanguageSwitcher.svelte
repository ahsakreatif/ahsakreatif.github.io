<script lang="ts">
	import { getLanguage, setLanguage, languages } from '$lib/i18n';
	
	let currentLang = getLanguage();
	
	function switchLanguage(lang: string) {
		setLanguage(lang as 'en' | 'id');
	}
</script>

<div class="flex items-center space-x-2">
	<button
		class="px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 {currentLang === 'en' 
			? 'bg-primary-600 text-white' 
			: 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'}"
		onclick={() => switchLanguage('en')}
	>
		EN
	</button>
	<button
		class="px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 {currentLang === 'id' 
			? 'bg-primary-600 text-white' 
			: 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'}"
		onclick={() => switchLanguage('id')}
	>
		ID
	</button>
</div>
