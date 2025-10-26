<script lang="ts">
	import { companyData } from '$lib/companyData';
	import type { PricingPlan } from '$lib/companyData';

	const { pricing } = companyData;

	function handleCtaClick(plan: PricingPlan) {
		// Handle CTA click based on action type
		if (plan.ctaAction.startsWith('order-')) {
			// Handle order action
			console.log(`Ordering ${plan.name} plan`);
			// You can add your order logic here
		} else if (plan.ctaAction.startsWith('consult-')) {
			// Handle consultation action
			console.log(`Consulting for ${plan.name} plan`);
			// You can add your consultation logic here
		}
	}
</script>

<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
				{pricing.title}
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				{pricing.subtitle}
			</p>
		</div>

		<!-- Pricing Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
			{#each pricing.plans as plan}
				<div class="relative bg-white rounded-2xl shadow-lg p-8 {plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}">
					<!-- Popular Badge -->
					{#if plan.popular}
						<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
							<span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
								Most Popular
							</span>
						</div>
					{/if}

					<!-- Plan Header -->
					<div class="text-center mb-8">
						<h3 class="text-2xl font-bold text-blue-600 mb-2">
							{plan.name}
						</h3>
						
						<!-- Price -->
						<div class="mb-4">
							{#if plan.price.original}
								<span class="text-lg text-gray-500 line-through">
									{plan.price.original}
								</span>
							{/if}
							<div class="text-4xl font-bold text-gray-900">
								{plan.price.current}
								<span class="text-lg font-normal text-gray-600">
									{plan.price.period}
								</span>
							</div>
						</div>

						<p class="text-gray-600 text-sm">
							{plan.description}
						</p>
					</div>

					<!-- Features List -->
					<div class="space-y-4 mb-8">
						{#each plan.features as feature}
							<div class="flex items-start">
								{#if feature.included}
									<svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
									</svg>
								{:else}
									<svg class="w-5 h-5 text-red-500 mt-0.5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
									</svg>
								{/if}
								<span class="text-gray-700 {feature.included ? '' : 'line-through text-gray-400'}">
									{feature.name}
								</span>
							</div>
						{/each}
					</div>

					<!-- CTA Button -->
					<button
						on:click={() => handleCtaClick(plan)}
						class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						{plan.ctaText}
					</button>
				</div>
			{/each}
		</div>

		<!-- Additional Info -->
		<div class="mt-12 text-center">
			<p class="text-gray-600">
				All packages include technical support and regular updates. 
				<a href="#contact" class="text-blue-600 hover:text-blue-700 font-medium">
					Contact us
				</a> for more information.
			</p>
		</div>
	</div>
</section>
