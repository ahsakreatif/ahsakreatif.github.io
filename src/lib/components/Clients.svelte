<script lang="ts">
	import type { Client } from '$lib/companyData';
	
	export let clients: Client[];
</script>

<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">
				Trusted by Industry Leaders
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				We've had the privilege of working with amazing companies across various industries, 
				helping them achieve their digital transformation goals.
			</p>
		</div>

		<!-- Clients Grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
			{#each clients as client}
				<div class="group flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
					{#if client.website}
						<a 
							href={client.website} 
							target="_blank" 
							rel="noopener noreferrer"
							class="w-full h-20 flex items-center justify-center"
							aria-label="Visit {client.name} website"
						>
							<img 
								src={client.logo} 
								alt="{client.name} logo" 
								class="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
								loading="lazy"
							/>
						</a>
					{:else}
						<div class="w-full h-20 flex items-center justify-center">
							<img 
								src={client.logo} 
								alt="{client.name} logo" 
								class="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
								loading="lazy"
							/>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Stats Section -->
		<div class="mt-16 text-center">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<div class="text-3xl font-bold text-primary-600 mb-2">25+</div>
					<div class="text-gray-600">Projects Completed</div>
				</div>
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<div class="text-3xl font-bold text-primary-600 mb-2">8+</div>
					<div class="text-gray-600">Industries Served</div>
				</div>
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<div class="text-3xl font-bold text-primary-600 mb-2">100%</div>
					<div class="text-gray-600">Client Satisfaction</div>
				</div>
			</div>
		</div>
	</div>
</section>
