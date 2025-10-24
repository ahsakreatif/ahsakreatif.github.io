<script lang="ts">
	// CTA data can be customized or made dynamic later
	const ctaData = {
		title: "Ready to Transform Your Business?",
		subtitle: "Let's discuss how we can help you achieve your technology goals",
		primaryButton: "Start Your Project",
		secondaryButton: "Schedule Consultation",
		features: [
			"Free initial consultation",
			"Custom solution design",
			"Transparent pricing",
			"Ongoing support"
		]
	};
</script>

<section class="py-20 bg-primary-600">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<!-- Main Content -->
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
				{ctaData.title}
			</h2>
			
			<p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
				{ctaData.subtitle}
			</p>
			
			<!-- Features List -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
				{#each ctaData.features as feature}
					<div class="flex items-center text-primary-100">
						<svg class="w-5 h-5 text-primary-200 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-sm sm:text-base">{feature}</span>
					</div>
				{/each}
			</div>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<button class="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
					{ctaData.primaryButton}
				</button>
				<button class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
					{ctaData.secondaryButton}
				</button>
			</div>
			
			<!-- Trust Indicators -->
			<div class="mt-12 pt-8 border-t border-primary-500">
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
					<div>
						<div class="text-2xl font-bold text-white mb-1">24/7</div>
						<div class="text-primary-200 text-sm">Support Available</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-white mb-1">100%</div>
						<div class="text-primary-200 text-sm">Client Satisfaction</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-white mb-1">9+</div>
						<div class="text-primary-200 text-sm">Years Experience</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
