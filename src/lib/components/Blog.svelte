<script lang="ts">
	import type { BlogPost } from '$lib/companyData';
	
	export let posts: BlogPost[];
</script>

<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
				Latest Insights
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Stay updated with our latest thoughts on technology, development, and industry trends
			</p>
		</div>
		
		<!-- Featured Post -->
		{#if posts.length > 0}
			{@const featuredPost = posts[0]}
			<div class="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
				<div class="md:flex">
					<div class="md:w-1/2">
						<div class="h-64 md:h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
							<div class="text-6xl opacity-20">📝</div>
						</div>
					</div>
					<div class="md:w-1/2 p-8">
						<div class="flex items-center mb-4">
							<span class="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
								{featuredPost.category}
							</span>
							<span class="ml-4 text-sm text-gray-500">{featuredPost.readTime}</span>
						</div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">
							{featuredPost.title}
						</h3>
						<p class="text-gray-600 mb-6">
							{featuredPost.excerpt}
						</p>
						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
									<span class="text-primary-600 font-semibold">
										{featuredPost.author.split(' ').map(n => n[0]).join('')}
									</span>
								</div>
								<div>
									<div class="text-sm font-medium text-gray-900">{featuredPost.author}</div>
									<div class="text-sm text-gray-500">{featuredPost.date}</div>
								</div>
							</div>
							<button class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}
		
		<!-- Blog Posts Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each posts.slice(1) as post}
				<article class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
					<!-- Post Image -->
					<div class="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
						<div class="text-4xl opacity-20">📝</div>
					</div>
					
					<!-- Post Content -->
					<div class="p-6">
						<div class="flex items-center mb-4">
							<span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
								{post.category}
							</span>
							<span class="ml-3 text-xs text-gray-500">{post.readTime}</span>
						</div>
						
						<h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
							{post.title}
						</h3>
						
						<p class="text-gray-600 text-sm mb-4 line-clamp-3">
							{post.excerpt}
						</p>
						
						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-2">
									<span class="text-primary-600 text-xs font-semibold">
										{post.author.split(' ').map(n => n[0]).join('')}
									</span>
								</div>
								<div>
									<div class="text-xs font-medium text-gray-900">{post.author}</div>
									<div class="text-xs text-gray-500">{post.date}</div>
								</div>
							</div>
							<button class="text-primary-600 hover:text-primary-700 text-sm font-medium">
								Read →
							</button>
						</div>
					</div>
				</article>
			{/each}
		</div>
		
		<!-- View All Posts CTA -->
		<div class="text-center mt-12">
			<button class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
				View All Posts
			</button>
		</div>
	</div>
</section>
