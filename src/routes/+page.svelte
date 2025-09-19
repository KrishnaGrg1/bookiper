<script lang="ts">
	import {
		CircleCheck,
		Facebook,
		Star,
		Menu,
		File,
		ChartNoAxesColumn,
		Handshake,
		ArrowRight
	} from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { t } from '$lib/translation';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { onMount } from 'svelte';
	import TestimonialsCarousel from '$lib/components/TestimonialsCarousel.svelte';
	import TrustedBy from '$lib/components/TrustedBy.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import ProcessStep from '$lib/components/ProcesStep.svelte';
	import CalculatePrice from '$lib/components/CalculatePrice.svelte';
	let lastScrollY = 0;
	let isHeaderVisible = true;
	let hasScrolled = false;

	onMount(() => {
		const header = document.querySelector('header');
		const navContent = document.querySelector('#nav-content');
		const scrollThreshold = 8;
		let ticking = false;

		function handleScroll() {
			const currentScrollY = window.scrollY;
			const scrollDifference = Math.abs(currentScrollY - lastScrollY);

			if (scrollDifference < scrollThreshold) return;

			const scrollingDown = currentScrollY > lastScrollY;
			const scrollingUp = currentScrollY < lastScrollY;

			// Always update header background based on scroll position
			if (currentScrollY <= 30) {
				header.style.backgroundColor = 'rgba(17, 17, 17, 0.9)';
				navContent.style.border = 'none';
			} else {
				header.style.backgroundColor = 'transparent';
			}

			// Update nav content background and blur based on scroll position
			if (currentScrollY > 30) {
				if (!hasScrolled) {
					hasScrolled = true;
					navContent.style.backgroundColor = 'rgba(17, 17, 17, 0.98)';
					navContent.style.backdropFilter = 'blur(12px)';
				}
			} else {
				if (hasScrolled) {
					hasScrolled = false;
					navContent.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
					navContent.style.backdropFilter = 'blur(8px)';
				}
			}

			// Handle hide/show logic for nav content
			if (scrollingDown && currentScrollY > 120) {
				if (isHeaderVisible) {
					isHeaderVisible = false;
					navContent.style.transform = 'translateY(-100px)';
					navContent.style.opacity = '0';
					navContent.style.pointerEvents = 'none';
				}
			} else if (scrollingUp && currentScrollY > 30) {
				if (!isHeaderVisible) {
					isHeaderVisible = true;
					navContent.style.transform = 'translateY(0)';
					navContent.style.opacity = '1';
					navContent.style.pointerEvents = 'auto';
					navContent.style.border = '1px solid rgba(255, 255, 255, 0.2)';
					navContent.style.borderRadius = '1rem';
					navContent.style.backgroundColor = 'rgba(17, 17, 17, 0.98)';
					navContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
				}
			} else if (scrollingUp && currentScrollY <= 30) {
				if (!isHeaderVisible) {
					isHeaderVisible = true;
					navContent.style.transform = 'translateY(0)';
					navContent.style.opacity = '1';
					navContent.style.pointerEvents = 'auto';
					navContent.style.border = 'none';
					navContent.style.borderRadius = '0';
					navContent.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
				}
				navContent.style.boxShadow = 'none';
			}

			lastScrollY = currentScrollY;
		}

		function requestTick() {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		}

		window.addEventListener('scroll', requestTick, { passive: true });

		// Initialize nav content state
		navContent.style.transform = 'translateY(0)';
		navContent.style.opacity = '1';
		navContent.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
		navContent.style.backdropFilter = 'blur(8px)';

		// Set initial header background
		if (window.scrollY <= 30) {
			header.style.backgroundColor = 'rgba(17, 17, 17, 0.9)';
			navContent.style.border = 'none';
		} else {
			header.style.backgroundColor = 'transparent';
		}
	});
</script>

<svelte:head>
	<title>Bookiper - Professional Accounting Services</title>
	<meta
		name="description"
		content="Professional accounting services for businesses. Stress-free bookkeeping, tax preparation, and financial planning starting from €89/month."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<!-- Navigation Header -->
<header class="fixed top-0 left-0 right-0 z-50">
	<!-- <nav
		class="bg-[#111111]/95 backdrop-blur-sm border border-[#333] rounded-2xl px-6 py-4 transition-all duration-300 ease-in-out"
	> -->
	<nav class="container mx-auto md:px-4 md:py-4 xl:px-20 2xl:px-50">
		<div
			id="nav-content"
			class="flex items-center justify-between bg-[#111111]/95 backdrop-blur-sm p-2 transition-all duration-300 ease-in-out"
		>
			<!-- Logo -->
			<div class="text-[#edff8c] text-2xl lg:text-3xl font-bold cursor-pointer font-satoshi">
				{$t('home.brand')}
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden xl:flex items-center space-x-8">
				<a href="#home" class="text-[#fafafa] hover:text-[#edff8c] font-dm-sans transition-colors"
					>{$t('home.menu.home')}</a
				>
				<a
					href="#services"
					class="text-[#fafafa] hover:text-[#edff8c] font-dm-sans transition-colors"
					>{$t('home.menu.services')}</a
				>
				<a href="#about" class="text-[#fafafa] hover:text-[#edff8c] transition-colors"
					>{$t('home.menu.about')}</a
				>
				<a
					href="#pricing"
					class="text-[#fafafa] hover:text-[#edff8c] font-dm-sans transition-colors"
					>{$t('home.menu.pricing')}</a
				>
				<a
					href="#contact"
					class="text-[#fafafa] hover:text-[#edff8c] font-dm-sans transition-colors"
					>{$t('home.menu.contact')}</a
				>
			</div>

			<!-- Desktop CTA Button -->
			<div class=" xl:flex items-center space-x-4">
				<Button
					variant="default"
					onclick={() => (window.location.href = '#pricing')}
					class="hidden xl:block bg-[#edff8c] text-black font-medium text-base  cursor-pointer
						hover:bg-[#E9FF73]
		active:bg-[#DFFF36]
		disabled:bg-[#F3F6E3]
		disabled:text-[#777777]
		disabled:cursor-not-allowed
		transition-colors
		font-dm-mono
					">{$t('home.calculate_price')}</Button
				>

				<LanguageSwitcher />

				<Sheet>
					<SheetTrigger>
						<button class="xl:hidden text-[#fafafa] p-2 cursor-pointer">
							<Menu size={24} />
						</button>
					</SheetTrigger>
					<SheetContent side="right" class="bg-[#111111] text-white w-80">
						<nav class="flex flex-col gap-6 mt-10 p-4">
							{#each [{ id: 'home', label: 'home.menu.home' }, { id: 'services', label: 'home.menu.services' }, { id: 'about', label: 'home.menu.about' }, { id: 'pricing', label: 'home.menu.pricing' }, { id: 'contact', label: 'home.menu.contact' }] as item}
								<a
									href={'#' + item.id}
									class="block text-[#fafafa] hover:text-[#edff8c] py-2 text-lg font-dm-sans"
								>
									{$t(item.label)}
								</a>
							{/each}
							<Button
								onclick={() => (window.location.href = '#pricing')}
								class="mt-4 w-full bg-[#edff8c] text-black py-3 font-medium font-dm-mono	hover:bg-[#E9FF73] active:bg-[#DFFF36] disabled:bg-[#F3F6E3] disabled:text-[#777777] disabled:cursor-not-allowed transition-colors"
							>
								{$t('home.calculate_price')}
							</Button>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</nav>
</header>

<!-- Main Content -->
<main class="overflow-x-hidden">
	<!-- Hero Section -->
	<section id="home" class="relative bg-[#111111] flex items-center sm:pt-0 pt-12">
		<!-- Background Gradients -->
		<div
			class="absolute top-32 right-4 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full opacity-60"
			style="background: linear-gradient(180deg, rgba(255, 123, 202, 1) 0%, rgba(255, 197, 111, 0.46) 100%); filter: blur(100px);"
		></div>
		<div
			class="absolute top-20 right-2 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full opacity-40"
			style="background: linear-gradient(180deg, rgba(242, 47, 176, 1) 0%, rgba(245, 138, 37, 0) 100%, rgba(112, 97, 163, 1) 100%); filter: blur(50px);"
		></div>

		<div class="container mx-auto lg:px-8 sm:pt-0 pt-10">
			<div class="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-16 items-center min-h-[80vh] mt-10">
				<!-- Hero Content -->
				<div class="space-y-8 z-10">
					<div class="space-y-6">
						<h1
							class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fafafa] leading-tight font-satoshi tracking-wider"
						>
							{$t('home.hero.title')}
						</h1>
						<p class="text-base text-[#fafafa] max-w-lg font-dm-sans tracking-wide">
							{$t('home.hero.subtitle')}
						</p>
					</div>

					<div class="space-y-4 max-w-lg">
						<button
							class="group bg-[#edff8c] text-black px-8 py-4 rounded-lg text-xl font-medium
  hover:bg-[#E9FF73] active:bg-[#DFFF36] disabled:bg-[#F3F6E3]
  disabled:text-[#777777] disabled:cursor-not-allowed transition-colors
  w-full cursor-pointer flex items-center justify-center gap-2 font-dm-mono"
							aria-label={$t('home.hero.cta_primary')}
						>
							<ArrowRight
								class="transition-opacity duration-500 opacity-0 group-hover:opacity-100"
							/>
							<span class="transition-transform duration-500 ease-out group-hover:translate-x-1">
								{$t('home.hero.cta_primary')}
							</span>
						</button>

						<div
							class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-lg"
						>
							<p class="text-[#e5e5e5] text-sm font-dm-sans">{$t('home.hero.trust_text')}</p>
							<div class="flex items-center gap-2">
								<Star class="w-5 h-5 text-yellow-400 fill-current" />
								<span class="text-[#fafafa] text-base font-dm-sans"
									>{$t('home.hero.rating_text')}</span
								>
							</div>
						</div>
					</div>
				</div>

				<!-- Hero Image -->
				<div class="flex justify-center lg:justify-end">
					<img
						src="/images/hero.png"
						alt="Professional woman"
						class="w-64 h-auto md:w-80 lg:w-96 xl:w-[414px] rounded-lg object-cover"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Trusted Companies Section -->
	<section class="bg-[#111111] py-10">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="text-center space-y-8">
				<p class="text-[#fafafa] text-base font-dm-sans">
					{$t('home.trusted_companies.title')}
				</p>
				<TrustedBy />
			</div>
		</div>
	</section>

	<!-- Process Steps Section -->
	<ProcessStep />
	<!-- Services Section -->
	<section id="services" class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-[40px] font-bold text-black mb-6 font-satoshi">
					{$t('home.services.title')}
				</h2>
				<p class="text-lg md:text-xl text-black font-dm-sans">
					{$t('home.services.subtitle')}
				</p>
			</div>

			<!-- Services Grid -->
			<div class="grid md:grid-cols-2 min-h-[355px] lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				<!-- Service 1 -->
				<div
					class="bg-[#111111] rounded-3xl min-h-[355px] flex flex-col group transition-all duration-300 ease-in-out hover:shadow-lg hover:border hover:border-[#EEFF8C]"
					style="box-shadow: 0px 4px 4px -1px rgba(12, 12, 13, 0.05), 0px 4px 4px -1px rgba(12, 12, 13, 0.1);"
				>
					<div class="flex-1 space-y-12 p-6">
						<!-- Icon -->
						<File
							class="w-14 h-14 text-[#EEFF8C] transition-all duration-300 ease-in-out group-hover:w-16 group-hover:h-16"
						/>

						<div class="space-y-4">
							<h3
								class="text-[#fafafa] text-xl md:text-[24px] font-bold leading-tight font-satoshi transition-colors duration-300 group-hover:text-[#EEFF8C]"
							>
								{$t('home.services.service_1.title')}
							</h3>
							<p class="text-[#fafafa] text-base leading-relaxed font-dm-sans">
								{$t('home.services.service_1.description')}
							</p>
						</div>
					</div>
				</div>

				<!-- Service 2 -->
				<div
					class="bg-[#111111] rounded-3xl min-h-[355px] flex flex-col group transition-all duration-300 ease-in-out hover:shadow-lg"
					style="box-shadow: 0px 4px 4px -1px rgba(12, 12, 13, 0.05), 0px 4px 4px -1px rgba(12, 12, 13, 0.1);"
				>
					<div class="flex-1 space-y-12 p-6">
						<ChartNoAxesColumn
							class="w-14 h-14 text-[#EEFF8C] transition-all duration-300 ease-in-out group-hover:w-16 group-hover:h-16"
						/>
						<div class="space-y-4">
							<h3
								class="text-[#fafafa] text-xl md:text-[24px] font-bold leading-tight font-satoshi transition-colors duration-300 group-hover:text-[#EEFF8C]"
							>
								{$t('home.services.service_2.title')}
							</h3>
							<p class="text-[#fafafa] text-base leading-relaxed font-dm-sans">
								{$t('home.services.service_2.description')}
							</p>
						</div>
					</div>
				</div>

				<!-- Service 3 -->
				<div
					class="bg-[#111111] rounded-3xl min-h-[355px] flex flex-col group transition-all duration-300 ease-in-out hover:shadow-lg"
					style="box-shadow: 0px 4px 4px -1px rgba(12, 12, 13, 0.05), 0px 4px 4px -1px rgba(12, 12, 13, 0.1);"
				>
					<div class="flex-1 space-y-12 p-6">
						<Handshake
							class="w-14 h-14 text-[#EEFF8C] transition-all duration-300 ease-in-out group-hover:w-16 group-hover:h-16"
						/>
						<div class="space-y-4">
							<h3
								class="text-[#fafafa] text-xl md:text-[24px] font-bold leading-tight font-satoshi transition-colors duration-300 group-hover:text-[#EEFF8C]"
							>
								{$t('home.services.service_3.title')}
							</h3>
							<p class="text-[#fafafa] text-base leading-relaxed font-dm-sans">
								{$t('home.services.service_3.description')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Bookiper Section -->
	<section class="bg-[#f4f4f4] py-20 flex justify-center">
		<div class="container px-4 lg:px-8">
			<!-- Features List -->
			<div class="space-y-12 max-w-7xl mx-auto">
				<!-- Section Header -->
				<div class="space-y-6">
					<h2
						class="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-satoshi"
						style="letter-spacing: 1.5px;"
					>
						{$t('home.why_bookiper.title')}
					</h2>
					<p class="text-lg md:text-xl text-black font-dm-sans" style=" letter-spacing: 1px;">
						{$t('home.why_bookiper.subtitle')}
					</p>
				</div>
				<div class="grid lg:grid-cols-2 gap-16 items-center">
					<div class="space-y-12">
						<!-- Features -->
						<div class="space-y-8">
							<!-- Feature 1 -->
							<div class="flex gap-6">
								<div class="text-black text-2xl font-bold flex-shrink-0 font-satoshi">/01</div>
								<div class="space-y-2">
									<h3 class="text-black text-xl font-bold" style="letter-spacing: 0.02em;">
										{$t('home.why_bookiper.feature_1.title')}
									</h3>
									<p class="text-black text-base font-dm-sans" style="letter-spacing: 1px;">
										{$t('home.why_bookiper.feature_1.description')}
									</p>
								</div>
							</div>

							<!-- Feature 2 -->
							<div class="flex gap-6">
								<div class="text-black text-2xl font-bold flex-shrink-0 font-satoshi">/02</div>
								<div class="space-y-2">
									<h3 class="text-black text-xl font-bold" style="letter-spacing: 0.02em;">
										{$t('home.why_bookiper.feature_2.title')}
									</h3>
									<p class="text-black text-base font-dm-sans" style="letter-spacing: 1px;">
										{$t('home.why_bookiper.feature_2.description')}
									</p>
								</div>
							</div>

							<!-- Feature 3 -->
							<div class="flex gap-6">
								<div class="text-black text-2xl font-bold flex-shrink-0 font-satoshi">/03</div>
								<div class="space-y-2">
									<h3
										class="text-black text-xl font-bold font-satoshi"
										style="letter-spacing: 0.02em;"
									>
										{$t('home.why_bookiper.feature_3.title')}
									</h3>
									<p class="text-black text-base font-dm-sans" style="letter-spacing: 1px;">
										{$t('home.why_bookiper.feature_3.description')}
									</p>
								</div>
							</div>

							<!-- Feature 4 -->
							<div class="flex gap-6">
								<div class="text-black text-2xl font-bold flex-shrink-0 font-satoshi">/04</div>
								<div class="space-y-2">
									<h3
										class="text-black text-xl font-bold font-satoshi"
										style="letter-spacing: 0.02em;"
									>
										{$t('home.why_bookiper.feature_4.title')}
									</h3>
									<p class="text-black text-base font-dm-sans" style="letter-spacing: 1px;">
										{$t('home.why_bookiper.feature_4.description')}
									</p>
								</div>
							</div>
						</div>

						<!-- CTA Button -->
						<button
							class="group bg-black text-[#fafafa] px-8 py-2.5 rounded-lg text-xl font-medium
active:bg-[#292929] disabled:bg-[#CECECE] disabled:text-[#959595]
transition-colors w-full cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
						>
							<!-- Animated Arrow Icon -->
							<span
								class="transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
transition-all duration-500 ease-out"
							>
								<ArrowRight class="w-5 h-5 text-[#fafafa]" />
							</span>

							<!-- Button Text -->
							<span
								class="transform group-hover:translate-x-2 transition-transform duration-500 ease-out font-dm-mono"
							>
								{$t('home.why_bookiper.cta')}
							</span>
						</button>
					</div>
					<div class="flex justify-center h-full lg:justify-end">
						<img
							src="/images/frame-130.png"
							alt="Team collaboration"
							class="h-full rounded-3xl object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-satoshi"
					style="letter-spacing: 1.5px;"
				>
					{$t('home.team.title')}
				</h2>
				<p class="text-lg md:text-xl text-black font-dm-sans" style="letter-spacing: 1px;">
					{$t('home.team.subtitle')}
				</p>
			</div>

			<!-- Team Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6.5xl mx-auto">
				<!-- Team Member 1 -->
				<div
					class="border border-[#7e7e7e] hover:border-2 rounded-3xl p-8 text-center space-y-8 min-h-[460px]"
				>
					<img
						src="/images/ellipse-20.png"
						alt="Olena Kovalchuk"
						class="w-40 h-40 rounded-full mx-auto object-cover"
					/>
					<div class="space-y-3">
						<h3 class="text-black text-xl font-bold font-satoshi" style="letter-spacing: 0.02em;">
							Olena Kovalchuk
						</h3>
						<p class="text-[#7e7e7e] text-base font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.team.member_1.position')}
						</p>
						<p class="text-black text-base font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.team.member_1.description')}
						</p>
					</div>
				</div>

				<!-- Team Member 2 -->
				<div class="border hover:border-2 border-[#7e7e7e] rounded-3xl p-8 text-center space-y-8">
					<img
						src="/images/ellipse-21.png"
						alt="Andriy Melnyk"
						class="w-40 h-40 rounded-full mx-auto object-cover"
					/>
					<div class="space-y-3">
						<h3 class="text-black text-xl font-bold font-satoshi" style="letter-spacing: 0.02em;">
							Andriy Melnyk
						</h3>
						<p class="text-[#7e7e7e] text-base font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.team.member_2.position')}
						</p>
						<p class="text-black text-base font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.team.member_2.description')}
						</p>
					</div>
				</div>

				<!-- Team Member 3 -->
				<div
					class="border hover:border-2 border-[#7e7e7e] rounded-3xl p-8 text-center space-y-8 md:col-span-2 lg:col-span-1"
				>
					<img
						src="/images/ellipse-22.png"
						alt="Iryna Shevchenko"
						class="w-40 h-40 rounded-full mx-auto object-cover"
					/>
					<div class="space-y-3">
						<h3 class="text-black text-xl font-bold font-satoshi" style="letter-spacing: 0.02em;">
							Iryna Shevchenko
						</h3>
						<p class="text-[#7e7e7e] text-base font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.team.member_3.position')}
						</p>
						<p class="text-black text-base font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.team.member_3.description')}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-satoshi"
					style="letter-spacing: 1.5px;"
				>
					{$t('home.testimonials.title')}
				</h2>
				<p class="text-lg md:text-xl text-black font-dm-sans" style=" letter-spacing: 1px;">
					{$t('home.testimonials.subtitle')}
				</p>
			</div>

			<!-- Testimonials Carousel -->
			<TestimonialsCarousel />
		</div>
	</section>

	<!-- Pricing Section -->
	<section id="pricing" class="bg-[#111111] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fafafa] mb-6 font-satoshi"
					style="letter-spacing: 1.5px;"
				>
					{$t('home.pricing.title')}
				</h2>
				<p class="text-lg md:text-xl text-[#fafafa] font-dm-sans" style="letter-spacing: 1px;">
					{$t('home.pricing.subtitle')}
				</p>
			</div>

			<!-- Pricing Content -->
			<div
				class="grid grid-cols-1 lg:grid-cols-[201fr_275fr] gap-[58px] max-w-[1200px] mx-auto px-4 lg:px-0"
			>
				<!-- Pricing Card -->
				<div
					class="border-2 border-[#f4f4f4] rounded-3xl bg-[#0b0b0b] p-8 flex flex-col justify-between gap-2.5"
				>
					<div class="space-y-8">
						<!-- Price Header -->
						<div class="text-center space-y-6">
							<h3 class="text-[#fafafa] text-xl md:text-2xl font-bold leading-[29px] font-satoshi">
								{$t('home.pricing.plan_title')}
							</h3>
							<div
								class="text-[#f4f4f4] text-3xl lg:text-5xl font-bold leading-[58px] font-satoshi"
								style="letter-spacing: 2px;"
							>
								{$t('home.pricing.plan_price')}
							</div>
						</div>

						<!-- Features List -->
						<div class="space-y-5">
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p class="text-[#f4f4f4] text-lg font-dm-sans" style="letter-spacing: 1.5px;">
									{$t('home.pricing.features.bookkeeping')}
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p class="text-[#f4f4f4] text-lg font-dm-sans" style="letter-spacing: 1.5px;">
									{$t('home.pricing.features.reports')}
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p class="text-[#f4f4f4] text-lg font-dm-sans" style="letter-spacing: 1.5px;">
									{$t('home.pricing.features.support')}
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p class="text-[#f4f4f4] text-lg font-dm-sans" style="letter-spacing: 1.5px;">
									{$t('home.pricing.features.onboarding')}
								</p>
							</div>
						</div>
					</div>

					<!-- CTA and Disclaimer -->
					<div class="space-y-3">
						<button
							class="group bg-[#edff8c] text-black w-full py-4 min-h-[60px] rounded-lg text-xl font-medium
         hover:bg-[#E9FF73] active:bg-[#DFFF36] disabled:bg-[#F3F6E3] disabled:text-[#777777]
         disabled:cursor-not-allowed transition-colors leading-[20px] flex items-center justify-center gap-2 overflow-hidden font-dm-sans"
						>
							<!-- Animated Arrow Icon -->
							<span
								class="transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
           transition-all duration-500 ease-out"
							>
								<ArrowRight class="w-5 h-5 text-black" />
							</span>

							<!-- Button Text -->
							<span
								class="transform group-hover:translate-x-2 transition-transform duration-500 ease-out font-dm-mono"
							>
								{$t('home.pricing.cta')}
							</span>
						</button>

						<p class="text-[#7e7e7e] text-sm md:text-base text-center leading-[24px] font-dm-sans">
							{$t('home.pricing.disclaimer')}
						</p>
					</div>
				</div>

				<!-- Calculator Form -->
				<CalculatePrice />
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<FAQ />
	<!-- Contact Section -->
	<section id="contact" class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid lg:grid-cols-[45%_55%] gap-10 items-start max-w-7xl mx-auto">
				<!-- Contact Info -->
				<div class="space-y-6">
					<h2 class="text-[40px] font-bold text-black font-satoshi" style=" letter-spacing: 1.5px;">
						{$t('home.contact.title')}
					</h2>
					<p class="text-lg md:text-xl text-black font-dm-sans" style="letter-spacing: 1px;">
						{$t('home.contact.subtitle')}
					</p>
				</div>

				<!-- Contact Form -->
				<div class="bg-[#111111] rounded-3xl p-8 lg:p-10 space-y-8">
					<!-- Form Header -->
					<div class="space-y-4">
						<h3 class="text-[#fafafa] text-2xl font-bold font-satoshi" style="letter-spacing: 1px;">
							{$t('home.contact.form.title')}
						</h3>
						<p class="text-[#fafafa] text-base font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.contact.form.subtitle')}
						</p>
					</div>

					<!-- Form -->
					<form class="space-y-6">
						<!-- Full Name -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder={$t('home.contact.form.full_name.placeholder')}
								required
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
								style="letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm font-dm-sans" style="letter-spacing: 1px;">
								{$t('home.contact.form.full_name.help')}
							</p>
						</div>

						<!-- Email -->
						<div class="space-y-2">
							<input
								type="email"
								placeholder={$t('home.contact.form.email.placeholder')}
								required
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
								style="letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm font-dm-sans" style="letter-spacing: 1px;">
								{$t('home.contact.form.email.help')}
							</p>
						</div>

						<!-- Phone -->
						<div class="space-y-2">
							<input
								type="tel"
								placeholder={$t('home.contact.form.phone.placeholder')}
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
								style="letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm font-dm-sans">
								{$t('home.contact.form.phone.help')}
							</p>
						</div>

						<!-- Message -->
						<div class="space-y-2">
							<textarea
								placeholder={$t('home.contact.form.message.placeholder')}
								rows="1"
								class="w-full resize-none rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
							></textarea>
							<p class="text-[#e5e5e5] text-sm font-dm-sans">
								{$t('home.contact.form.message.help')}
							</p>
						</div>

						<!-- Submit Button -->
						<button
							type="submit"
							class="group bg-[#EDFF8C] text-black w-full py-4 rounded-lg text-xl font-medium cursor-pointer
         hover:bg-[#E9FF73]
         active:bg-[#DFFF36]
         disabled:bg-[#F3F6E3]
         disabled:text-[#777777]
         disabled:cursor-not-allowed
         transition-colors flex items-center justify-center gap-2 overflow-hidden font-dm-sans"
						>
							<!-- Animated Arrow Icon -->
							<span
								class="transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
           transition-all duration-500 ease-out"
							>
								<ArrowRight class="w-5 h-5 text-black" />
							</span>

							<!-- Button Text -->
							<span
								class="transform group-hover:translate-x-2 transition-transform duration-500 ease-out"
							>
								{$t('home.contact.form.submit')}
							</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="bg-[#111111] py-16">
	<div class="container mx-auto px-4 lg:px-8">
		<div class="space-y-16">
			<!-- Footer Content -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-20">
				<!-- Brand Section -->
				<div class="lg:col-span-5 space-y-8">
					<div class="space-y-6">
						<h3
							class="text-[#edff8c] text-3xl lg:text-4xl font-bold font-satoshi"
							style="letter-spacing: 1.5px;"
						>
							BOOKIPER
						</h3>
						<p class="text-[#fafafa] text-lg max-w-lg font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.footer.description')}
						</p>
					</div>
					<!-- Social Media -->
					<div class="flex gap-6">
						<Facebook
							class="w-11 h-11 p-2 bg-blue-600 fill-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
						/>
						<img
							src="/images/logos_whatsapp-icon.png"
							alt="WhatsApp"
							class="w-11 h-11 hover:opacity-80 transition-opacity cursor-pointer"
						/>
						<img
							src="/images/instagram.png"
							alt="Instagram"
							class="w-11 h-11 hover:opacity-80 transition-opacity cursor-pointer"
						/>
					</div>
				</div>

				<!-- Menu Links -->
				<div class="lg:col-span-3 space-y-12">
					<!-- Menu -->
					<div class="space-y-6">
						<h4 class="text-[#fafafa] text-xl font-bold font-satoshi">
							{$t('home.footer.menu_title')}
						</h4>
						<nav class="space-y-4">
							<a href="#home" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.home')}</a
							>
							<a
								href="#how-we-work"
								class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.how_we_work')}</a
							>
							<a
								href="#services"
								class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.services')}</a
							>
							<a href="#about" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.about')}</a
							>
						</nav>
					</div>

					<!-- Contact - Directly below Menu -->
					<div class="space-y-6">
						<h4 class="text-[#fafafa] text-xl font-bold font-satoshi">
							{$t('home.footer.contact_title')}
						</h4>
						<div class="space-y-4 text-[#fafafa]">
							<div class="flex gap-4">
								<span class="font-medium min-w-[60px]">{$t('home.contact.phone')}:</span>
								<span>+12 123 345 67</span>
							</div>
							<div class="flex gap-4">
								<span class="font-medium min-w-[60px]">{$t('home.contact.email')}:</span>
								<span>bookiper@gmail.com</span>
							</div>
							<div class="flex gap-4">
								<span class="font-medium min-w-[70px]">{$t('home.contact.address')}:</span>
								<span>Lisa Simpson, 742 Evergreens</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Resources Links -->
				<div class="lg:col-span-4 space-y-6">
					<h4 class="text-[#fafafa] text-xl font-bold font-satoshi">
						{$t('home.footer.resources_title')}
					</h4>
					<nav class="space-y-4">
						<a
							href="#testimonials"
							class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.resources.testimonials')}</a
						>
						<a href="#pricing" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.menu.pricing')}</a
						>
						<a href="#faq" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.resources.faq')}</a
						>
						<a href="#contact" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.resources.free_consultation')}</a
						>
					</nav>
				</div>
			</div>

			<!-- Footer Bottom -->
			<div
				class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-[#333]"
			>
				<p
					class="text-[#fafafa] text-center sm:text-left font-dm-sans"
					style="letter-spacing: 1.5px;"
				>
					{$t('home.footer.copyright')}
				</p>
				<div class="flex flex-col items-start sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
					<a
						href="#privacy"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors font-dm-sans"
						style="letter-spacing: 1.5px;"
					>
						{$t('home.footer.privacy_policy')}
					</a>
					<a
						href="#terms"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors font-dm-sans"
						style="letter-spacing: 1.5px;"
					>
						{$t('home.footer.terms_of_service')}
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(header) {
		transition:
			transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
			opacity 300ms ease-in-out !important;
	}

	:global(header nav) {
		transition:
			background-color 300ms ease-in-out,
			border-color 300ms ease-in-out,
			backdrop-filter 300ms ease-in-out !important;
	}

	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Account for fixed header when scrolling to sections */
	:global(section) {
		scroll-margin-top: 100px; /* Adjusted for contained header */
	}
</style>
