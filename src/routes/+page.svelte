<script lang="ts">
	import { CircleCheck, Facebook, Star, Menu, X } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { t } from '$lib/translation';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
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
<header class="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-sm">
	<nav class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between xl:px-50">
			<!-- Logo -->
			<div
				class="text-[#edff8c] text-2xl lg:text-3xl font-bold cursor-pointer"
				style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1px;"
			>
				{$t('home.brand')}
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden xl:flex items-center space-x-8">
				<a href="#home" class="text-[#fafafa] hover:text-[#edff8c] transition-colors"
					>{$t('home.menu.home')}</a
				>
				<a href="#services" class="text-[#fafafa] hover:text-[#edff8c] transition-colors"
					>{$t('home.menu.services')}</a
				>
				<a href="#about" class="text-[#fafafa] hover:text-[#edff8c] transition-colors"
					>{$t('home.menu.about')}</a
				>
				<a href="#pricing" class="text-[#fafafa] hover:text-[#edff8c] transition-colors"
					>{$t('home.menu.pricing')}</a
				>
				<a href="#contact" class="text-[#fafafa] hover:text-[#edff8c] transition-colors"
					>{$t('home.menu.contact')}</a
				>
			</div>

			<!-- Mobile Menu Button -->

			<!-- Desktop CTA Button -->
			<div class=" xl:flex items-center space-x-4">
				<Button
					variant="default"
					onclick={() => (window.location.href = '#pricing')}
					class="hidden xl:block bg-[#edff8c] text-black font-medium text-base hover:bg-[#edff8c]/90 transition-colors"
					>{$t('home.calculate_price')}</Button
				>

				<LanguageSwitcher />

				<Sheet>
					<SheetTrigger>
						<button class="xl:hidden text-[#fafafa] p-2">
							<Menu size={24} />
						</button>
					</SheetTrigger>
					<SheetContent side="right" class="bg-[#111111] text-white w-80">
						<nav class="flex flex-col gap-6 mt-10 p-4">
							{#each ['home.menu.home', 'home.menu.how_we_work', 'home.menu.services', 'home.menu.about', 'home.menu.contact'] as item}
								<a
									href={'#' + item.toLowerCase()}
									class="block text-[#fafafa] hover:text-[#edff8c] py-2 text-lg ml-10"
								>
									{$t(item)}
								</a>
							{/each}
							<Button
								class="mt-4 w-full bg-[#edff8c] text-black py-3  font-medium hover:bg-[#edff8c]/90 transition-colors"
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
	<section id="home" class="relative min-h-screen bg-[#111111] flex items-center">
		<!-- Background Gradients -->
		<div
			class="absolute top-32 right-4 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full opacity-60"
			style="background: linear-gradient(180deg, rgba(255, 123, 202, 1) 0%, rgba(255, 197, 111, 0.46) 100%); filter: blur(100px);"
		></div>
		<div
			class="absolute top-20 right-2 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full opacity-40"
			style="background: linear-gradient(180deg, rgba(242, 47, 176, 1) 0%, rgba(245, 138, 37, 0) 100%, rgba(112, 97, 163, 1) 100%); filter: blur(50px);"
		></div>

		<div class="container mx-auto px-4 lg:px-8 pt-20">
			<div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
				<!-- Hero Content -->
				<div class="space-y-8 z-10">
					<div class="space-y-6">
						<h1
							class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#fafafa] leading-tight"
							style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 2px;"
						>
							{$t('home.hero.title')}
						</h1>
						<p
							class="text-base md:text-lg text-[#fafafa] max-w-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.hero.subtitle')}
						</p>
					</div>

					<div class="space-y-4">
						<button
							class="bg-[#edff8c] text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#edff8c]/90 transition-colors w-full sm:w-auto"
						>
							{$t('home.hero.cta_primary')}
						</button>

						<div
							class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-lg"
						>
							<p class="text-[#e5e5e5] text-sm">{$t('home.hero.trust_text')}</p>
							<div class="flex items-center gap-2">
								<Star class="w-5 h-5 text-yellow-400 fill-current" />
								<span class="text-[#fafafa] text-sm">{$t('home.hero.rating_text')}</span>
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
	<section class="bg-[#111111] py-16">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="text-center space-y-8">
				<p class="text-[#fafafa] text-sm md:text-base">
					{$t('home.trusted_companies.title')}
				</p>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
					{#each Array(6) as _, i}
						<div class="bg-[#aaaaaa] rounded-xl h-12 w-full"></div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Process Steps Section -->
	<section class="bg-[#111111] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fafafa] mb-6"
					style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
				>
					{$t('home.process.title')}
				</h2>
				<p
					class="text-lg md:text-xl text-[#fafafa]"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					{$t('home.process.subtitle')}
				</p>
			</div>

			<!-- Process Steps Grid -->
			<div class="relative grid md:grid-cols-2 gap-32 lg:gap-40 xl:gap-48 max-w-7xl mx-auto">
				<!-- Vertical Connecting Line -->
				<div
					class="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 z-0"
					style="width: 2px; height: 100%; background-color: #fafafa; opacity: 0.3;"
				></div>

				<!-- Yellow Connecting Dots -->
				<div
					class="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-[#edff8c] rounded-full transform -translate-x-1/2 z-10"
				></div>

				<!-- Left Column -->
				<div class="space-y-60">
					<!-- Step 1 -->
					<div class="space-y-4">
						<h3
							class="text-[#edff8c] text-xl md:text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							{$t('home.process.step_1.title')}
						</h3>
						<p
							class="text-[#fafafa] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.process.step_1.description')}
						</p>
					</div>

					<!-- Step 3 -->
					<div class="space-y-4">
						<h3
							class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							{$t('home.process.step_3.title')}
						</h3>
						<p
							class="text-[#7e7e7e] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.process.step_3.description')}
						</p>
					</div>

					<!-- Step 5 -->
					<div class="space-y-6">
						<div class="space-y-4">
							<h3
								class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								{$t('home.process.step_5.title')}
							</h3>
							<p
								class="text-[#7e7e7e] text-lg"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							>
								{$t('home.process.step_5.description')}
							</p>
						</div>
						<button
							class="bg-[#edff8c] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#edff8c]/90 transition-colors w-full sm:w-auto"
						>
							{$t('home.process.cta')}
						</button>
					</div>
				</div>

				<!-- Right Column -->
				<div class="space-y-90 lg:pt-32">
					<!-- Step 2 -->
					<div class="space-y-4 md:mt-20">
						<h3
							class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							{$t('home.process.step_2.title')}
						</h3>
						<p
							class="text-[#7e7e7e] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.process.step_2.description')}
						</p>
					</div>

					<!-- Step 4 -->
					<div class="space-y-4">
						<h3
							class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							{$t('home.process.step_4.title')}
						</h3>
						<p
							class="text-[#7e7e7e] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.process.step_4.description')}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section id="services" class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
					style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
				>
					{$t('home.services.title')}
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					{$t('home.services.subtitle')}
				</p>
			</div>

			<!-- Services Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				<!-- Service 1 -->
				<div
					class="bg-[#111111] rounded-3xl p-8 min-h-[400px] flex flex-col"
					style="box-shadow: 0px 4px 4px -1px rgba(12, 12, 13, 0.05), 0px 4px 4px -1px rgba(12, 12, 13, 0.1);"
				>
					<div class="flex-1 space-y-12">
						<img src="/images/solar_document-outline.svg" alt="Document icon" class="w-14 h-14" />
						<div class="space-y-4">
							<h3
								class="text-[#fafafa] text-xl md:text-2xl font-bold leading-tight"
								style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: -0.011em;"
							>
								{$t('home.services.service_1.title')}
							</h3>
							<p
								class="text-[#fafafa] text-base leading-relaxed"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 0.02em;"
							>
								{$t('home.services.service_1.description')}
							</p>
						</div>
					</div>
				</div>

				<!-- Service 2 -->
				<div
					class="bg-[#111111] rounded-3xl p-8 min-h-[400px] flex flex-col"
					style="box-shadow: 0px 4px 4px -1px rgba(12, 12, 13, 0.05), 0px 4px 4px -1px rgba(12, 12, 13, 0.1);"
				>
					<div class="flex-1 space-y-12">
						<img src="/images/mage_chart.svg" alt="Chart icon" class="w-14 h-14" />
						<div class="space-y-4">
							<h3
								class="text-[#fafafa] text-xl md:text-2xl font-bold leading-tight"
								style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: -0.011em;"
							>
								{$t('home.services.service_2.title')}
							</h3>
							<p
								class="text-[#fafafa] text-base leading-relaxed"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 0.02em;"
							>
								{$t('home.services.service_2.description')}
							</p>
						</div>
					</div>
				</div>

				<!-- Service 3 -->
				<div
					class="bg-[#111111] rounded-3xl p-8 min-h-[400px] flex flex-col md:col-span-2 lg:col-span-1"
					style="box-shadow: 0px 4px 4px -1px rgba(12, 12, 13, 0.05), 0px 4px 4px -1px rgba(12, 12, 13, 0.1);"
				>
					<div class="flex-1 space-y-12">
						<img src="/images/lucide_handshake.svg" alt="Handshake icon" class="w-14 h-14" />
						<div class="space-y-4">
							<h3
								class="text-[#fafafa] text-xl md:text-2xl font-bold leading-tight"
								style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: -0.011em;"
							>
								{$t('home.services.service_3.title')}
							</h3>
							<p
								class="text-[#fafafa] text-base leading-relaxed"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 0.02em;"
							>
								{$t('home.services.service_3.description')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Bookiper Section -->
	<section class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
				<!-- Features List -->
				<div class="space-y-12">
					<!-- Section Header -->
					<div class="space-y-6">
						<h2
							class="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
							style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
						>
							{$t('home.why_bookiper.title')}
						</h2>
						<p
							class="text-lg md:text-xl text-black"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.why_bookiper.subtitle')}
						</p>
					</div>

					<!-- Features -->
					<div class="space-y-8">
						<!-- Feature 1 -->
						<div class="flex gap-6">
							<div
								class="text-black text-2xl font-bold flex-shrink-0"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								/01
							</div>
							<div class="space-y-2">
								<h3
									class="text-black text-xl font-bold"
									style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 0.02em;"
								>
									{$t('home.why_bookiper.feature_1.title')}
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									{$t('home.why_bookiper.feature_1.description')}
								</p>
							</div>
						</div>

						<!-- Feature 2 -->
						<div class="flex gap-6">
							<div
								class="text-black text-2xl font-bold flex-shrink-0"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								/02
							</div>
							<div class="space-y-2">
								<h3
									class="text-black text-xl font-bold"
									style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 0.02em;"
								>
									{$t('home.why_bookiper.feature_2.title')}
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									{$t('home.why_bookiper.feature_2.description')}
								</p>
							</div>
						</div>

						<!-- Feature 3 -->
						<div class="flex gap-6">
							<div
								class="text-black text-2xl font-bold flex-shrink-0"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								/03
							</div>
							<div class="space-y-2">
								<h3
									class="text-black text-xl font-bold"
									style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 0.02em;"
								>
									{$t('home.why_bookiper.feature_3.title')}
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									{$t('home.why_bookiper.feature_3.description')}
								</p>
							</div>
						</div>

						<!-- Feature 4 -->
						<div class="flex gap-6">
							<div
								class="text-black text-2xl font-bold flex-shrink-0"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								/04
							</div>
							<div class="space-y-2">
								<h3
									class="text-black text-xl font-bold"
									style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 0.02em;"
								>
									{$t('home.why_bookiper.feature_4.title')}
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									{$t('home.why_bookiper.feature_4.description')}
								</p>
							</div>
						</div>
					</div>

					<!-- CTA Button -->
					<button
						class="bg-black text-[#fafafa] px-8 py-4 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
					>
						{$t('home.why_bookiper.cta')}
					</button>
				</div>

				<!-- Feature Image -->
				<div class="flex justify-center lg:justify-end">
					<img
						src="/images/frame-130.png"
						alt="Team collaboration"
						class="w-full max-w-lg rounded-3xl object-cover"
					/>
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
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
					style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
				>
					{$t('home.team.title')}
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					{$t('home.team.subtitle')}
				</p>
			</div>

			<!-- Team Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
				<!-- Team Member 1 -->
				<div class="border border-[#7e7e7e] rounded-3xl p-8 text-center space-y-8">
					<img
						src="/images/ellipse-20.png"
						alt="Olena Kovalchuk"
						class="w-40 h-40 rounded-full mx-auto object-cover"
					/>
					<div class="space-y-3">
						<h3
							class="text-black text-xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 0.02em;"
						>
							Olena Kovalchuk
						</h3>
						<p
							class="text-[#7e7e7e] text-base"
							style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.team.member_1.position')}
						</p>
						<p
							class="text-black text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.team.member_1.description')}
						</p>
					</div>
				</div>

				<!-- Team Member 2 -->
				<div class="border border-[#7e7e7e] rounded-3xl p-8 text-center space-y-8">
					<img
						src="/images/ellipse-21.png"
						alt="Andriy Melnyk"
						class="w-40 h-40 rounded-full mx-auto object-cover"
					/>
					<div class="space-y-3">
						<h3
							class="text-black text-xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 0.02em;"
						>
							Andriy Melnyk
						</h3>
						<p
							class="text-[#7e7e7e] text-base"
							style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.team.member_2.position')}
						</p>
						<p
							class="text-black text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.team.member_2.description')}
						</p>
					</div>
				</div>

				<!-- Team Member 3 -->
				<div
					class="border border-[#7e7e7e] rounded-3xl p-8 text-center space-y-8 md:col-span-2 lg:col-span-1"
				>
					<img
						src="/images/ellipse-22.png"
						alt="Iryna Shevchenko"
						class="w-40 h-40 rounded-full mx-auto object-cover"
					/>
					<div class="space-y-3">
						<h3
							class="text-black text-xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 0.02em;"
						>
							Iryna Shevchenko
						</h3>
						<p
							class="text-[#7e7e7e] text-base"
							style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
						>
							{$t('home.team.member_3.position')}
						</p>
						<p
							class="text-black text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
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
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
					style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
				>
					{$t('home.testimonials.title')}
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					{$t('home.testimonials.subtitle')}
				</p>
			</div>

			<!-- Testimonials -->
			<div class="space-y-8">
				<!-- Testimonials Grid -->
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
					<!-- Testimonial 1 -->
					<div class="bg-[#e5e5e5] rounded-3xl p-6 space-y-6">
						<p
							class="text-[#aaaaaa] text-lg leading-relaxed"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
						>
							{$t('home.testimonials.testimonial_1.text')}
						</p>
						<div class="flex items-center gap-4">
							<img
								src="/images/ellipse-70.png"
								alt="Michael Turner"
								class="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<h4
									class="text-[#5a5a5a] text-lg font-bold"
									style="font-family: 'SatoshiVariable-Bold', sans-serif;"
								>
									{$t('home.testimonials.testimonial_1.author')}
								</h4>
								<p
									class="text-[#5a5a5a] text-sm"
									style="font-family: 'DmSans-Regular', sans-serif;"
								>
									{$t('home.testimonials.testimonial_1.position')}
								</p>
							</div>
						</div>
					</div>

					<!-- Testimonial 2 -->
					<div class="bg-[#e5e5e5] rounded-3xl p-6 space-y-6 lg:pt-12 lg:pb-12">
						<p
							class="text-black text-lg leading-relaxed"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
						>
							{$t('home.testimonials.testimonial_2.text')}
						</p>
						<div class="flex items-center gap-4">
							<img
								src="/images/ellipse-71.png"
								alt="Frances Swann"
								class="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<h4
									class="text-black text-lg font-bold"
									style="font-family: 'SatoshiVariable-Bold', sans-serif;"
								>
									{$t('home.testimonials.testimonial_2.author')}
								</h4>
								<p class="text-black text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
									{$t('home.testimonials.testimonial_2.position')}
								</p>
							</div>
						</div>
					</div>

					<!-- Testimonial 3 -->
					<div class="bg-[#e5e5e5] rounded-3xl p-6 space-y-6 md:col-span-2 lg:col-span-1">
						<p
							class="text-[#aaaaaa] text-lg leading-relaxed"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
						>
							{$t('home.testimonials.testimonial_3.text')}
						</p>
						<div class="flex items-center gap-4">
							<img
								src="/images/ellipse-72.png"
								alt="Mary Freund"
								class="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<h4
									class="text-[#5a5a5a] text-lg font-bold"
									style="font-family: 'SatoshiVariable-Bold', sans-serif;"
								>
									{$t('home.testimonials.testimonial_3.author')}
								</h4>
								<p
									class="text-[#5a5a5a] text-sm"
									style="font-family: 'DmSans-Regular', sans-serif;"
								>
									{$t('home.testimonials.testimonial_3.position')}
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Pagination Dots -->
				<div class="flex justify-center gap-2">
					{#each Array(6) as _, i}
						<div class="w-2 h-2 rounded-full {i === 1 ? 'bg-black' : 'bg-[#aaaaaa]'}"></div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section id="pricing" class="bg-[#111111] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fafafa] mb-6"
					style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
				>
					{$t('home.pricing.title')}
				</h2>
				<p
					class="text-lg md:text-xl text-[#fafafa]"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
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
							<h3
								class="text-[#fafafa] text-xl md:text-2xl font-bold leading-[29px]"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								{$t('home.pricing.plan_title')}
							</h3>
							<div
								class="text-[#f4f4f4] text-3xl lg:text-5xl font-bold leading-[58px]"
								style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 2px;"
							>
								{$t('home.pricing.plan_price')}
							</div>
						</div>

						<!-- Features List -->
						<div class="space-y-5">
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p
									class="text-[#f4f4f4] text-lg"
									style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
								>
									{$t('home.pricing.features.bookkeeping')}
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p
									class="text-[#f4f4f4] text-lg"
									style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
								>
									{$t('home.pricing.features.reports')}
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p
									class="text-[#f4f4f4] text-lg"
									style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
								>
									{$t('home.pricing.features.support')}
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p
									class="text-[#f4f4f4] text-lg"
									style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
								>
									{$t('home.pricing.features.onboarding')}
								</p>
							</div>
						</div>
					</div>

					<!-- CTA and Disclaimer -->
					<div class="space-y-3">
						<button
							class="bg-[#edff8c] text-black w-full py-4 rounded-lg text-xl font-medium hover:bg-[#edff8c]/90 transition-colors leading-[20px]"
							style="font-family: DmMono-Medium, sans-serif"
						>
							{$t('home.pricing.cta')}
						</button>
						<p
							class="text-[#7e7e7e] text-sm md:text-base text-center leading-[24px]"
							style="font-family: 'DmSans-Regular', sans-serif; "
						>
							{$t('home.pricing.disclaimer')}
						</p>
					</div>
				</div>

				<!-- Calculator Form -->
				<div
					class="bg-[#fafafa] rounded-3xl px-[79px] py-[29px] lg:p-12 flex flex-col gap-2.5 justify-between h-full"
				>
					<!-- Form Header -->
					<div class="space-y-4 text-center">
						<h3
							class="text-black text-3xl lg:text-4xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
						>
							{$t('home.pricing.calculator.title')}
						</h3>
						<p
							class="text-black text-xl leading-[30px]"
							style="font-family: 'DmSans-Regular', sans-serif; "
						>
							{$t('home.pricing.calculator.subtitle')}
						</p>
					</div>

					<!-- Form -->
					<form class="space-y-6">
						<!-- Company Name -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder={$t('home.pricing.calculator.company_name.placeholder')}
								class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#5a5a5a] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								{$t('home.pricing.calculator.company_name.help')}
							</p>
						</div>

						<!-- Number of Associates -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder={$t('home.pricing.calculator.associates.placeholder')}
								class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#5a5a5a] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								{$t('home.pricing.calculator.associates.help')}
							</p>
						</div>

						<!-- Yearly Turnover -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder={$t('home.pricing.calculator.turnover.placeholder')}
								class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#5a5a5a] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								{$t('home.pricing.calculator.turnover.help')}
							</p>
						</div>

						<!-- Submit Button -->
						<button
							type="submit"
							class="bg-black text-[#fafafa] w-full py-4 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors"
							style="font-family: 'DmMono-Medium', sans-serif;"
						>
							{$t('home.pricing.calculator.submit')}
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-16 max-w-4xl mx-auto">
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
					style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
				>
					{$t('home.faq.title')}
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					{$t('home.faq.subtitle')}
				</p>
			</div>

			<!-- FAQ List -->
			<div class="max-w-4xl mx-auto space-y-4">
				{#each ['home.faq.questions.cost', 'home.faq.questions.industries', 'home.faq.questions.tax_compliance', 'home.faq.questions.scalability', 'home.faq.questions.getting_started'] as question}
					<div class="border border-[#7e7e7e] rounded-3xl p-6">
						<div class="flex items-center justify-between">
							<h3
								class="text-black text-xl font-bold"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								{$t(question)}
							</h3>
							<img src="/images/ep-arrow-up0.png" alt="Toggle" class="w-6 h-6" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="bg-[#f4f4f4] py-20">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
				<!-- Contact Info -->
				<div class="space-y-6">
					<h2
						class="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
						style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
					>
						{$t('home.contact.title')}
					</h2>
					<p
						class="text-lg md:text-xl text-black"
						style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
					>
						{$t('home.contact.subtitle')}
					</p>
				</div>

				<!-- Contact Form -->
				<div class="bg-[#111111] rounded-3xl p-8 lg:p-12 space-y-8">
					<!-- Form Header -->
					<div class="space-y-4">
						<h3
							class="text-[#fafafa] text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							{$t('home.contact.form.title')}
						</h3>
						<p
							class="text-[#fafafa] text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
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
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								{$t('home.contact.form.full_name.help')}
							</p>
						</div>

						<!-- Email -->
						<div class="space-y-2">
							<input
								type="email"
								placeholder={$t('home.contact.form.email.placeholder')}
								required
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								{$t('home.contact.form.email.help')}
							</p>
						</div>

						<!-- Phone -->
						<div class="space-y-2">
							<input
								type="tel"
								placeholder={$t('home.contact.form.phone.placeholder')}
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								{$t('home.contact.form.phone.help')}
							</p>
						</div>

						<!-- Message -->
						<div class="space-y-2">
							<textarea
								placeholder={$t('home.contact.form.message.placeholder')}
								rows="4"
								class="w-full resize-none rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							></textarea>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								{$t('home.contact.form.message.help')}
							</p>
						</div>

						<!-- Submit Button -->
						<button
							type="submit"
							class="bg-[#edff8c] text-black w-full py-4 rounded-lg text-xl font-medium hover:bg-[#edff8c]/90 transition-colors"
							style="font-family: 'DmMono-Medium', sans-serif;"
						>
							{$t('home.contact.form.submit')}
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
							class="text-[#edff8c] text-3xl lg:text-4xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 1.5px;"
						>
							BOOKIPER
						</h3>
						<p
							class="text-[#fafafa] text-lg max-w-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
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
						<h4
							class="text-[#fafafa] text-xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
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
						<h4
							class="text-[#fafafa] text-xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
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
					<h4
						class="text-[#fafafa] text-xl font-bold"
						style="font-family: 'SatoshiVariable-Bold', sans-serif;"
					>
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
					class="text-[#fafafa] text-center sm:text-left"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
				>
					{$t('home.footer.copyright')}
				</p>
				<div class="flex flex-col items-start sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
					<a
						href="#privacy"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors"
						style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
					>
						{$t('home.footer.privacy_policy')}
					</a>
					<a
						href="#terms"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors"
						style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
					>
						{$t('home.footer.terms_of_service')}
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- 
<style>
	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Account for fixed header when scrolling to sections */
	:global(section) {
		scroll-margin-top: 80px;
	}

	/* Mobile menu animation */
	.mobile-menu-enter {
		transform: translateX(100%);
	}

	.mobile-menu-enter-active {
		transform: translateX(0);
		transition: transform 300ms ease-in-out;
	}
</style> -->
