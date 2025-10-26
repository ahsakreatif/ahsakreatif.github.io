<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import WhyUs from '$lib/components/WhyUs.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { companyData } from '$lib/companyData';
</script>

<svelte:head>
	<title>{companyData.name} - {companyData.tagline}</title>
	<meta name="description" content={companyData.description} />
	<meta name="keywords" content="IT solutions, web development, cloud services, AI development, full-stack development, Indonesia" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<!-- Open Graph -->
	<meta property="og:title" content="{companyData.name} - {companyData.tagline}" />
	<meta property="og:description" content={companyData.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://{companyData.domain}" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{companyData.name} - {companyData.tagline}" />
	<meta name="twitter:description" content={companyData.description} />
</svelte:head>

<Hero data={companyData.hero} />
<section id="services">
	<Services services={companyData.services} technologies={companyData.technologies} />
</section>
<section id="clients">
	<Clients clients={companyData.clients} />
</section>
<section id="portfolio">
	<Portfolio portfolio={companyData.portfolio} />
</section>
<section id="about">
	<WhyUs data={companyData.whyUs} />
</section>
<section id="pricing">
	<Pricing />
</section>
<section id="blog">
	<Blog posts={companyData.blog} />
</section>
<CTA />
<section id="contact">
	<Contact data={companyData.contact} />
</section>
