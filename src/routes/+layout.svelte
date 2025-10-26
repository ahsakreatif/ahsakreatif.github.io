<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { getCompanyData } from '$lib/companyData';
	import { getLanguage } from '$lib/i18n';
	
	// Get data based on current language
	let companyData = $derived(getCompanyData());

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navigation data={companyData} />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<Footer data={companyData} />
	
	<!-- Language Switcher - Fixed Position -->
	<div class="fixed top-4 right-4 z-50">
		<LanguageSwitcher />
	</div>
</div>
