<script lang="ts">
	import type { PortfolioItem } from '$lib/companyData';
	
	export let portfolio: PortfolioItem[];
	
	let selectedCategory = 'All';
	let filteredPortfolio = portfolio;
	
	$: {
		if (selectedCategory === 'All') {
			filteredPortfolio = portfolio;
		} else {
			filteredPortfolio = portfolio.filter(item => item.category === selectedCategory);
		}
	}
	
	const categories = ['All', ...new Set(portfolio.map(item => item.category))];
</script>

<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
				Our Portfolio
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Showcasing our expertise through successful projects across various industries
			</p>
		</div>
		
		<!-- Category Filter -->
		<div class="flex flex-wrap justify-center gap-4 mb-12">
			{#each categories as category}
				<button
					class="px-6 py-3 rounded-full font-medium transition-colors duration-200 {selectedCategory === category 
						? 'bg-primary-600 text-white' 
						: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'}"
					on:click={() => selectedCategory = category}
				>
					{category}
				</button>
			{/each}
		</div>
		
		<!-- Portfolio Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredPortfolio as item}
				<div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
					<!-- Project Image -->
					<div class="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="text-6xl opacity-20">💻</div>
						</div>
						<div class="absolute top-4 right-4">
							<span class="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
								{item.category}
							</span>
						</div>
					</div>
					
					<!-- Project Content -->
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
							{item.title}
						</h3>
						<p class="text-gray-600 mb-4 line-clamp-3">
							{item.description}
						</p>
						
						<!-- Achievements -->
						<div class="mb-4">
							<h4 class="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
							<ul class="space-y-1">
								{#each item.achievements.slice(0, 2) as achievement}
									<li class="flex items-center text-sm text-gray-600">
										<svg class="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										{achievement}
									</li>
								{/each}
							</ul>
						</div>
						
						<!-- Technologies -->
						<div class="flex flex-wrap gap-2 mb-4">
							{#each item.technologies.slice(0, 4) as tech}
								<span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
									{tech}
								</span>
							{/each}
						</div>
						
						<!-- Client Info -->
						{#if item.client}
							<div class="text-sm text-gray-500 mb-4">
								<strong>Client:</strong> {item.client}
							</div>
						{/if}
						
						<!-- View Details Button -->
						<button class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
							View Details
						</button>
					</div>
				</div>
			{/each}
		</div>
		
		<!-- View All Projects CTA -->
		<div class="text-center mt-12">
			<button class="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
				View All Projects
			</button>
		</div>
	</div>
</section>
