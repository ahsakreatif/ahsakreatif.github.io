<script lang="ts">
	export let data: {
		title: string;
		subtitle: string;
		description: string;
		ctaText: string;
		backgroundImage: string;
	};
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Animated Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
		<!-- Floating geometric shapes -->
		<div class="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
		<div class="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-30 animate-bounce"></div>
		<div class="absolute bottom-32 left-1/4 w-12 h-12 bg-primary-300 rounded-full opacity-25 animate-ping"></div>
		<div class="absolute bottom-20 right-1/3 w-24 h-24 bg-secondary-300 rounded-full opacity-20 animate-float" style="animation-delay: 2s;"></div>
		
		<!-- Grid pattern overlay -->
		<div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0); background-size: 40px 40px;"></div>
		
		<!-- Gradient orbs -->
		<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-200 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary-200 to-transparent rounded-full blur-3xl opacity-25 animate-bounce"></div>
	</div>
	
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="text-center lg:text-left">
				<!-- Badge -->
				<div class="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-800 text-sm font-medium mb-6">
					<span class="w-2 h-2 bg-secondary-600 rounded-full mr-2 animate-pulse"></span>
					Innovative IT Solutions
				</div>
				
				<!-- Main Title with gradient text -->
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-in-left">
					<span class="bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-800 bg-clip-text text-transparent animate-gradient">
						{data.title}
					</span>
				</h1>
				
				<!-- Subtitle with secondary color accent -->
				<p class="text-xl sm:text-2xl text-gray-700 font-semibold mb-6 animate-slide-in-left" style="animation-delay: 0.1s;">
					{data.subtitle}
					<span class="text-secondary-600 ml-2 animate-bounce">✨</span>
				</p>
				
				<!-- Description -->
				<p class="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
					{data.description}
				</p>
				
				<!-- CTA Buttons with enhanced design -->
				<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
					<button class="group relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 btn-glow animate-fade-in-up">
						<span class="relative z-10">{data.ctaText}</span>
						<div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
					</button>
					<button class="group border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 btn-secondary-glow animate-fade-in-up" style="animation-delay: 0.2s;">
						<span class="flex items-center">
							View Our Work
							<svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
							</svg>
						</span>
					</button>
				</div>
				
				<!-- Trust Indicators with enhanced design -->
				<div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
					<div class="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
						<div class="text-2xl font-bold text-primary-600 mb-1">9+</div>
						<div class="text-sm text-gray-600">Years Experience</div>
					</div>
					<div class="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
						<div class="text-2xl font-bold text-secondary-600 mb-1">25+</div>
						<div class="text-sm text-gray-600">Projects Completed</div>
					</div>
					<div class="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
						<div class="text-2xl font-bold text-primary-600 mb-1">15+</div>
						<div class="text-sm text-gray-600">Technologies</div>
					</div>
					<div class="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
						<div class="text-2xl font-bold text-secondary-600 mb-1">100%</div>
						<div class="text-sm text-gray-600">Client Satisfaction</div>
					</div>
				</div>
			</div>
			
			<!-- Right Illustration -->
			<div class="relative lg:block hidden animate-slide-in-right">
				<!-- Main illustration container -->
				<div class="relative w-full h-96 flex items-center justify-center">
					<!-- Background glow -->
					<div class="absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-3xl blur-2xl opacity-30 animate-glow"></div>
					
					<!-- Illustration -->
					<div class="relative z-10 w-full h-full flex items-center justify-center animate-float">
						<img src="/src/lib/assets/hero-illustration.svg" alt="IT Solutions Illustration" class="w-full h-full object-contain" />
					</div>
					
					<!-- Floating elements -->
					<div class="absolute top-8 right-8 w-16 h-16 bg-primary-500 rounded-full opacity-80 animate-bounce"></div>
					<div class="absolute bottom-8 left-8 w-12 h-12 bg-secondary-500 rounded-full opacity-80 animate-pulse"></div>
					<div class="absolute top-1/2 left-4 w-8 h-8 bg-primary-400 rounded-full opacity-60 animate-ping"></div>
				</div>
				
				<!-- Floating tech badges -->
				<div class="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
					<span class="text-sm font-medium text-primary-600">🚀 AI/ML</span>
				</div>
				<div class="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
					<span class="text-sm font-medium text-secondary-600">☁️ Cloud</span>
				</div>
				<div class="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
					<span class="text-sm font-medium text-gray-700">💻 Full-Stack</span>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Enhanced scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
		<div class="flex flex-col items-center text-primary-600 animate-bounce">
			<span class="text-sm font-medium mb-2">Scroll to explore</span>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
			</svg>
		</div>
	</div>
</section>
