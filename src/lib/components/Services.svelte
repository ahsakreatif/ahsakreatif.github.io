<script lang="ts">
	import type { Service } from '$lib/companyData';
	
	export let services: Service[];
	export let technologies: { category: string; items: string[] }[];
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
				Our Services
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Comprehensive IT solutions tailored to your business needs
			</p>
		</div>
		
		<!-- Services Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
			{#each services as service}
				<div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
					<div class="text-4xl mb-4">{service.icon}</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
					<p class="text-gray-600 mb-4">{service.description}</p>
					
					<!-- Features -->
					<ul class="space-y-2 mb-4">
						{#each service.features.slice(0, 3) as feature}
							<li class="flex items-center text-sm text-gray-600">
								<svg class="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
								{feature}
							</li>
						{/each}
					</ul>
					
					<!-- Technologies -->
					<div class="flex flex-wrap gap-2">
						{#each service.technologies.slice(0, 3) as tech}
							<span class="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		
		<!-- Technologies Section -->
		<div class="bg-gray-50 rounded-2xl p-8">
			<h3 class="text-2xl font-bold text-gray-900 text-center mb-8">
				Technologies We Master
			</h3>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each technologies as category}
					<div class="bg-white rounded-lg p-6 shadow-sm">
						<h4 class="text-lg font-semibold text-gray-900 mb-4">{category.category}</h4>
						<div class="flex flex-wrap gap-2">
							{#each category.items as item}
								<span class="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
									{item}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
