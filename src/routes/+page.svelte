<script lang="ts">
	import { onMount } from 'svelte';
	import { getLanguage } from '$lib/i18n';
	import { goto } from '$app/navigation';
	
	// Redirect to language-specific page
	onMount(() => {
		const lang = getLanguage();
		goto(`/${lang}`, { replaceState: true });
	});
</script>

<!-- Loading page - will redirect to language-specific page -->
<div class="min-h-screen flex items-center justify-center">
	<div class="text-center">
		<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
		<p class="text-gray-600">Loading...</p>
	</div>
</div>
