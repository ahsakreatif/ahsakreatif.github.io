<script lang="ts">
	import type { CompanyData } from '$lib/companyData';
	
	export let data: CompanyData;
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="shrink-0 flex items-center">
				<a href="/" class="flex items-center space-x-2">
					<div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
						<span class="text-white font-bold text-xl">A</span>
					</div>
					<span class="text-xl font-bold text-gray-900">{data.name}</span>
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a href="#home" class="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
						Home
					</a>
					<a href="#services" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
						Services
					</a>
					<a href="#clients" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
						Clients
					</a>
					<a href="#portfolio" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
						Portfolio
					</a>
					<a href="#about" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
						About
					</a>
					<a href="#blog" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
						Blog
					</a>
					<a href="#contact" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
						Contact
					</a>
				</div>
			</div>
			
			<!-- CTA Button -->
			<div class="hidden md:block">
				<a href="#contact" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
					Get Started
				</a>
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={toggleMobileMenu}
					class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
					aria-label="Toggle mobile menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>
	
	<!-- Mobile Navigation Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
				<a href="#home" on:click={closeMobileMenu} class="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">
					Home
				</a>
				<a href="#services" on:click={closeMobileMenu} class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
					Services
				</a>
				<a href="#clients" on:click={closeMobileMenu} class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
					Clients
				</a>
				<a href="#portfolio" on:click={closeMobileMenu} class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
					Portfolio
				</a>
				<a href="#about" on:click={closeMobileMenu} class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
					About
				</a>
				<a href="#blog" on:click={closeMobileMenu} class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
					Blog
				</a>
				<a href="#contact" on:click={closeMobileMenu} class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
					Contact
				</a>
				<div class="pt-4">
					<a href="#contact" on:click={closeMobileMenu} class="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 rounded-lg text-base font-medium text-center">
						Get Started
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
