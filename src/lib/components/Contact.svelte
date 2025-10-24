<script lang="ts">
	export let data: {
		email: string;
		phone: string;
		address: string;
		officeHours: string;
		social: {
			linkedin: string;
			github: string;
			instagram: string;
		};
	};
	
	let formData = {
		name: '',
		email: '',
		company: '',
		message: '',
		service: ''
	};
	
	const services = [
		'Full-Stack Development',
		'Cloud Infrastructure',
		'AI & Machine Learning',
		'Technical Consulting',
		'Other'
	];
	
	function handleSubmit() {
		// Handle form submission
		console.log('Form submitted:', formData);
	}
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
				Get In Touch
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Ready to start your next project? Let's discuss how we can help you achieve your goals.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div class="bg-gray-50 rounded-2xl p-8">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
				
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
								Full Name *
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
								placeholder="Your full name"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
								placeholder="your@email.com"
							/>
						</div>
					</div>
					
					<div>
						<label for="company" class="block text-sm font-medium text-gray-700 mb-2">
							Company
						</label>
						<input
							type="text"
							id="company"
							bind:value={formData.company}
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
							placeholder="Your company name"
						/>
					</div>
					
					<div>
						<label for="service" class="block text-sm font-medium text-gray-700 mb-2">
							Service Interested In
						</label>
						<select
							id="service"
							bind:value={formData.service}
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
						>
							<option value="">Select a service</option>
							{#each services as service}
								<option value={service}>{service}</option>
							{/each}
						</select>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
							placeholder="Tell us about your project..."
						></textarea>
					</div>
					
					<button
						type="submit"
						class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
					>
						Send Message
					</button>
				</form>
			</div>
			
			<!-- Contact Information -->
			<div class="space-y-8">
				<!-- Contact Details -->
				<div class="bg-primary-50 rounded-2xl p-8">
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
					
					<div class="space-y-6">
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-semibold text-gray-900">Email</h4>
								<p class="text-gray-600">{data.email}</p>
							</div>
						</div>
						
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-semibold text-gray-900">Phone</h4>
								<p class="text-gray-600">{data.phone}</p>
							</div>
						</div>
						
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-semibold text-gray-900">Location</h4>
								<p class="text-gray-600">{data.address}</p>
							</div>
						</div>
						
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-semibold text-gray-900">Office Hours</h4>
								<p class="text-gray-600">{data.officeHours}</p>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Social Links -->
				<div class="bg-gray-50 rounded-2xl p-8">
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
					
					<div class="flex space-x-4">
					<a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" 
					   aria-label="LinkedIn Profile"
					   class="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
						</a>
						
					<a href={data.social.github} target="_blank" rel="noopener noreferrer"
					   aria-label="GitHub Profile"
					   class="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</a>
						
					<a href={data.social.instagram} target="_blank" rel="noopener noreferrer"
					   aria-label="Instagram Profile"
					   class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.895-.895 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.895.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.895-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.895 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.895.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
							</svg>
						</a>
					</div>
				</div>
				
				<!-- Map Placeholder -->
				<div class="bg-gray-200 rounded-2xl p-8 text-center">
					<div class="text-gray-500 mb-4">
						<svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
					</div>
					<h4 class="text-lg font-semibold text-gray-700 mb-2">Our Location</h4>
					<p class="text-gray-600">{data.address}</p>
					<p class="text-sm text-gray-500 mt-2">Interactive map will be integrated here</p>
				</div>
			</div>
		</div>
	</div>
</section>
