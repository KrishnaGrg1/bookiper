<script lang="ts">
	import { CircleCheck, Facebook, Star, Menu, X } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
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
				BOOKIPER
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden xl:flex items-center space-x-8">
				<a href="#home" class="text-[#fafafa] hover:text-[#edff8c] transition-colors">Home</a>
				<a href="#services" class="text-[#fafafa] hover:text-[#edff8c] transition-colors"
					>Services</a
				>
				<a href="#about" class="text-[#fafafa] hover:text-[#edff8c] transition-colors">About</a>
				<a href="#pricing" class="text-[#fafafa] hover:text-[#edff8c] transition-colors">Pricing</a>
				<a href="#contact" class="text-[#fafafa] hover:text-[#edff8c] transition-colors">Contact</a>
			</div>

			<!-- Desktop CTA Button -->
			<Button
				variant="default"
				class="hidden xl:block bg-[#edff8c] text-black font-medium text-base hover:bg-[#edff8c]/90 transition-colors"
				>Calculate my price</Button
			>
			<!-- Mobile Menu Button -->
			<Sheet>
				<SheetTrigger>
					<button class="xl:hidden text-[#fafafa] p-2">
						<Menu size={24} />
					</button>
				</SheetTrigger>
				<SheetContent side="right" class="bg-[#111111] text-white w-80">
					<nav class="flex flex-col gap-6 mt-10 p-4">
						{#each ['Home', 'Services', 'About', 'Pricing', 'Contact'] as item}
							<a
								href={'#' + item.toLowerCase()}
								class="block text-[#fafafa] hover:text-[#edff8c] py-2 text-lg ml-10"
							>
								{item}
							</a>
						{/each}
						<Button
							class="mt-4 w-full bg-[#edff8c] text-black py-3  font-medium hover:bg-[#edff8c]/90 transition-colors"
						>
							Calculate my price
						</Button>
					</nav>
				</SheetContent>
			</Sheet>
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
							Your trusted partner in finance and compliance in France
						</h1>
						<p
							class="text-base md:text-lg text-[#fafafa] max-w-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							Expert accounting and bookkeeping services to help your business stay compliant,
							organized, and financially healthy — without the stress.
						</p>
					</div>

					<div class="space-y-4">
						<button
							class="bg-[#edff8c] text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#edff8c]/90 transition-colors w-full sm:w-auto"
						>
							Start your company in France
						</button>

						<div
							class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-lg"
						>
							<p class="text-[#e5e5e5] text-sm">More than 4000 clients already trust us</p>
							<div class="flex items-center gap-2">
								<Star class="w-5 h-5 text-yellow-400 fill-current" />
								<span class="text-[#fafafa] text-sm">4.9 on Google</span>
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
					Trusted by international fast-growing companies
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
					Simple steps to stress-free accounting
				</h2>
				<p
					class="text-lg md:text-xl text-[#fafafa]"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					Managing your business finances doesn't have to be complicated. With Bookiper, we've made
					the process clear and straightforward so you can stay compliant, organized, and focused on
					growth.
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
							Book a Free Consultation
						</h3>
						<p
							class="text-[#fafafa] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							Tell us about your business needs, challenges, and goals. We'll identify how our
							services can best support you.
						</p>
					</div>

					<!-- Step 2 -->
					<div class="space-y-4">
						<h3
							class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							Tailored Accounting Plan
						</h3>
						<p
							class="text-[#7e7e7e] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							We design a customized service package to keep your business compliant, organized, and
							financially sound.
						</p>
					</div>

					<!-- Step 3 -->
					<div class="space-y-6">
						<div class="space-y-4">
							<h3
								class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								Ongoing Support & Insights
							</h3>
							<p
								class="text-[#7e7e7e] text-lg"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							>
								Receive regular reports, updates, and proactive advice to stay in control and ahead
								of any changes.
							</p>
						</div>
						<button
							class="bg-[#edff8c] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#edff8c]/90 transition-colors w-full sm:w-auto"
						>
							Speak with us
						</button>
					</div>
				</div>

				<!-- Right Column -->
				<div class="space-y-90 lg:pt-32">
					<!-- Step 4 -->
					<div class="space-y-4 md:mt-20">
						<h3
							class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							Analysis & Recommendations
						</h3>
						<p
							class="text-[#7e7e7e] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							Our experts review your current accounting situation and highlight the best solutions
							for you.
						</p>
					</div>

					<!-- Step 5 -->
					<div class="space-y-4">
						<h3
							class="text-[#7e7e7e] text-xl md:text-2xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							Seamless Onboarding
						</h3>
						<p
							class="text-[#7e7e7e] text-lg"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							We set up the tools, processes, and communication so everything runs smoothly from day
							one.
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
					Our Services
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					Smart accounting solutions designed for your business
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
								Bookkeeping & Compliance in Europe
							</h3>
							<p
								class="text-[#fafafa] text-base leading-relaxed"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 0.02em;"
							>
								Accurate records, timely reports, and full compliance with local regulations - so
								you never worry about deadlines.
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
								Financial Reporting & Insights
							</h3>
							<p
								class="text-[#fafafa] text-base leading-relaxed"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 0.02em;"
							>
								Clear, easy-to-understand reports and data-driven insights to guide smarter business
								decisions.
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
								Advisory & Ongoing Support
							</h3>
							<p
								class="text-[#fafafa] text-base leading-relaxed"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 0.02em;"
							>
								Expert advice on tax planning, financial strategy, and day-to-day guidance for
								sustainable growth.
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
							Why BOOKIPER?
						</h2>
						<p
							class="text-lg md:text-xl text-black"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							Smart accounting solutions designed for your business
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
									Expertise You Can Trust
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									Our certified accountants bring years of experience to keep your business
									compliant and financially secure.
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
									Tailored Solutions
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									We don't believe in one-size-fits-all. Every service is customized to meet your
									unique business needs.
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
									Stress-Free Process
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									From setup to ongoing support, we make accounting simple so you can focus on
									running your business.
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
									Proactive Insights
								</h3>
								<p
									class="text-black text-base"
									style="font-family: 'DmSans-Light', sans-serif; letter-spacing: 1px;"
								>
									Beyond bookkeeping - we provide actionable advice and foresight to help your
									business grow.
								</p>
							</div>
						</div>
					</div>

					<!-- CTA Button -->
					<button
						class="bg-black text-[#fafafa] px-8 py-4 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
					>
						Get your free consultation
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
					Meet the team
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					At Bookiper, our strength lies in the expertise and dedication of our team. Each member
					brings unique skills to ensure your business stays financially healthy, compliant, and
					ready for growth.
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
							Senior Accountant
						</p>
						<p
							class="text-black text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							Focused on accuracy and compliance, Olena ensures your records are always in perfect
							order.
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
							Financial Analyst
						</p>
						<p
							class="text-black text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							Andriy translates complex numbers into clear insights that support smarter business
							decisions.
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
							Client Success Manager
						</p>
						<p
							class="text-black text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							Iryna makes sure every client feels supported, informed, and stress-free at every
							step.
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
					See why our clients love Bookiper
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					Our clients choose Bookiper for reliable support, clear insights, and stress-free
					accounting that helps their business grow.
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
							Bookiper has completely taken the stress out of managing our accounts. Their attention
							to detail and proactive support let me focus on growing my business instead of
							worrying about numbers.
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
									Michael Turner
								</h4>
								<p
									class="text-[#5a5a5a] text-sm"
									style="font-family: 'DmSans-Regular', sans-serif;"
								>
									Founder of Turner Consulting
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
							The team at Bookiper is professional, reliable, and always available to answer my
							questions. Their financial reports are clear and give me the confidence I need to make
							big decisions.
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
									Frances Swann
								</h4>
								<p class="text-black text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
									CEO of GreenLeaf Marketing
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
							Working with Bookiper feels like having an in-house finance department. They truly
							understand our business and provide insights that go beyond basic accounting.
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
									Mary Freund
								</h4>
								<p
									class="text-[#5a5a5a] text-sm"
									style="font-family: 'DmSans-Regular', sans-serif;"
								>
									Operations Manager at TechNova
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
					Clear, flexible, and tailored to your business
				</h2>
				<p
					class="text-lg md:text-xl text-[#fafafa]"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					Managing your accounting doesn't have to be expensive. With Bookiper, you get reliable,
					stress-free financial support.
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
								Your accounting form
							</h3>
							<div
								class="text-[#f4f4f4] text-3xl lg:text-5xl font-bold leading-[58px]"
								style="font-family: 'SatoshiVariable-Bold', sans-serif; letter-spacing: 2px;"
							>
								89€/month
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
									Professional bookkeeping & compliance
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p
									class="text-[#f4f4f4] text-lg"
									style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
								>
									Monthly financial reports & insights
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p
									class="text-[#f4f4f4] text-lg"
									style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
								>
									Dedicated expert support
								</p>
							</div>
							<div class="flex items-start gap-4">
								<CircleCheck class="w-6 h-6 fill-[#edff8c] text-black flex-shrink-0 mt-1" />
								<p
									class="text-[#f4f4f4] text-lg"
									style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
								>
									Stress-free setup & onboarding
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
							Get your free consultation
						</button>
						<p
							class="text-[#7e7e7e] text-sm md:text-base text-center leading-[24px]"
							style="font-family: 'DmSans-Regular', sans-serif; "
						>
							*Final pricing depends on your company's size and activity - fill in the form below to
							receive your personalized offer.
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
							Calculate my price
						</h3>
						<p
							class="text-black text-xl leading-[30px]"
							style="font-family: 'DmSans-Regular', sans-serif; "
						>
							Tell us about your business, and we'll prepare a custom accounting plan tailored to
							your needs.
						</p>
					</div>

					<!-- Form -->
					<form class="space-y-6">
						<!-- Company Name -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder="Company Name"
								class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#5a5a5a] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								Enter your registered business name as it appears in official documents.
							</p>
						</div>

						<!-- Number of Associates -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder="Number of Associates"
								class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#5a5a5a] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								Provide the total number of people working in your company, including employees and
								partners.
							</p>
						</div>

						<!-- Yearly Turnover -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder="Yearly Turnover"
								class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#5a5a5a] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								Indicate your company's approximate annual revenue before expenses.
							</p>
						</div>

						<!-- Submit Button -->
						<button
							type="submit"
							class="bg-black text-[#fafafa] w-full py-4 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors"
							style="font-family: 'DmMono-Medium', sans-serif;"
						>
							Get my quote
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
					Answers to the most common questions about our services
				</h2>
				<p
					class="text-lg md:text-xl text-black"
					style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
				>
					We know choosing an accounting partner is an important decision. Here are some quick
					answers to help you understand how Bookiper can support your business.
				</p>
			</div>

			<!-- FAQ List -->
			<div class="max-w-4xl mx-auto space-y-4">
				{#each ['How much does your service cost?', 'Do you only work with certain industries?', 'Can you handle tax compliance as well?', 'What if my company grows — can the plan be adjusted?', 'How do I get started?'] as question}
					<div class="border border-[#7e7e7e] rounded-3xl p-6">
						<div class="flex items-center justify-between">
							<h3
								class="text-black text-xl font-bold"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								{question}
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
						Let's talk about your business needs
					</h2>
					<p
						class="text-lg md:text-xl text-black"
						style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
					>
						Have questions about accounting, compliance, or financial management? Fill out the form
						and our experts will get in touch to provide clear answers and a tailored plan for your
						business.
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
							Get your free consultation
						</h3>
						<p
							class="text-[#fafafa] text-base"
							style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
						>
							In just 30 minutes, you'll gain clarity on your accounting needs, discover how
							Bookiper can support your business, and receive practical next steps — all free of
							charge.
						</p>
					</div>

					<!-- Form -->
					<form class="space-y-6">
						<!-- Full Name -->
						<div class="space-y-2">
							<input
								type="text"
								placeholder="Full Name*"
								required
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								Please enter your first and last name as you'd like us to address you.
							</p>
						</div>

						<!-- Email -->
						<div class="space-y-2">
							<input
								type="email"
								placeholder="Email Address*"
								required
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								We'll use this to send you confirmation and follow-up details.
							</p>
						</div>

						<!-- Phone -->
						<div class="space-y-2">
							<input
								type="tel"
								placeholder="Phone Number"
								class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							/>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								Optional, but it helps us reach you faster if needed.
							</p>
						</div>

						<!-- Message -->
						<div class="space-y-2">
							<textarea
								placeholder="Message"
								rows="4"
								class="w-full resize-none rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c]"
								style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1px;"
							></textarea>
							<p class="text-[#e5e5e5] text-sm" style="font-family: 'DmSans-Regular', sans-serif;">
								Share any specific concerns, questions, or details about your accounting needs.
							</p>
						</div>

						<!-- Submit Button -->
						<button
							type="submit"
							class="bg-[#edff8c] text-black w-full py-4 rounded-lg text-xl font-medium hover:bg-[#edff8c]/90 transition-colors"
							style="font-family: 'DmMono-Medium', sans-serif;"
						>
							Send
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
							We provide reliable, stress-free accounting services designed to save you time and
							give you peace of mind. Explore our resources or get in touch with our team today.
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
							Menu
						</h4>
						<nav class="space-y-4">
							<a href="#home" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>Home</a
							>
							<a
								href="#how-we-work"
								class="block text-[#fafafa] hover:text-[#edff8c] transition-colors">How we work</a
							>
							<a
								href="#services"
								class="block text-[#fafafa] hover:text-[#edff8c] transition-colors">Services</a
							>
							<a href="#about" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>Why Bookiper?</a
							>
						</nav>
					</div>

					<!-- Contact - Directly below Menu -->
					<div class="space-y-6">
						<h4
							class="text-[#fafafa] text-xl font-bold"
							style="font-family: 'SatoshiVariable-Bold', sans-serif;"
						>
							Contact
						</h4>
						<div class="space-y-4 text-[#fafafa]">
							<div class="flex gap-4">
								<span class="font-medium min-w-[60px]">Phone:</span>
								<span>+12 123 345 67</span>
							</div>
							<div class="flex gap-4">
								<span class="font-medium min-w-[60px]">Email:</span>
								<span>bookiper@gmail.com</span>
							</div>
							<div class="flex gap-4">
								<span class="font-medium min-w-[70px]">Address:</span>
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
						Resources
					</h4>
					<nav class="space-y-4">
						<a
							href="#testimonials"
							class="block text-[#fafafa] hover:text-[#edff8c] transition-colors">Testimonials</a
						>
						<a href="#pricing" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>Pricing</a
						>
						<a href="#faq" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>FAQ</a
						>
						<a href="#contact" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>Free consultation</a
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
					© 2025 Bookiper
				</p>
				<div class="flex flex-col items-start sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
					<a
						href="#privacy"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors"
						style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
					>
						Privacy Policy
					</a>
					<a
						href="#terms"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors"
						style="font-family: 'DmSans-Regular', sans-serif; letter-spacing: 1.5px;"
					>
						Terms of Service
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

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
</style>
