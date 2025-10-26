<script lang="ts">
	export let data: {
		title: string;
		points: { title: string; description: string; icon: string }[];
		stats: { label: string; value: string }[];
	};
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
				{data.title}
			</h2>
		</div>
		
		<!-- Stats Section -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
			{#each data.stats as stat}
				<div class="text-center">
					<div class="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
						{stat.value}
					</div>
					<div class="text-sm sm:text-base text-gray-600">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
		
		<!-- Why Choose Us Points -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each data.points as point}
				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
					<div class="text-primary-600 mb-4">{@html point.icon}</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-3">
						{point.title}
					</h3>
					<p class="text-gray-600 leading-relaxed">
						{point.description}
					</p>
				</div>
			{/each}
		</div>
		
		<!-- Additional Trust Indicators -->
		<!-- <div class="mt-16 bg-primary-50 rounded-2xl p-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">
						Proven Track Record
					</h3>
					<p class="text-gray-600 mb-6">
						With 9+ years of experience in full-stack development and technical leadership, 
						we've successfully delivered projects across fintech, education, and AI sectors. 
						Our expertise spans from enterprise applications to AI-powered systems.
					</p>
					<div class="space-y-3">
						<div class="flex items-center">
							<svg class="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-gray-700">VP of Engineering experience</span>
						</div>
						<div class="flex items-center">
							<svg class="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-gray-700">AI-assisted development pioneer</span>
						</div>
						<div class="flex items-center">
							<svg class="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-gray-700">Competition winner & mentor</span>
						</div>
					</div>
				</div>
				
				<div class="bg-white rounded-xl p-6 shadow-sm">
					<h4 class="text-lg font-semibold text-gray-900 mb-4">Awards & Recognition</h4>
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">LKS Web Design Competition</span>
							<span class="text-sm font-semibold text-primary-600">1st Place Provincial</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Teras Mahasiswa Competition</span>
							<span class="text-sm font-semibold text-primary-600">Regional Finalist</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Team Leadership</span>
							<span class="text-sm font-semibold text-primary-600">5+ Engineers Led</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm text-gray-600">Productivity Improvement</span>
							<span class="text-sm font-semibold text-primary-600">30% Boost</span>
						</div>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</section>
