<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { t } from '$lib/translation';

	// Testimonial data: use translation keys, not $t here
	const testimonials = [
		{
			text: 'home.testimonials.testimonial_1.text',
			author: 'home.testimonials.testimonial_1.author',
			company: 'home.testimonials.testimonial_1.company',
			img: '/images/ellipse-70.png'
		},
		{
			text: 'home.testimonials.testimonial_2.text',
			author: 'home.testimonials.testimonial_2.author',
			company: 'home.testimonials.testimonial_2.company',
			img: '/images/ellipse-71.png'
		},
		{
			text: 'home.testimonials.testimonial_3.text',
			author: 'home.testimonials.testimonial_3.author',
			company: 'home.testimonials.testimonial_3.company',
			img: '/images/ellipse-72.png'
		}
		// Add more testimonials as needed
	];

	let active = 0;
	let timer: NodeJS.Timeout | null = null;
	let paused = false;

	function next() {
		active = (active + 1) % testimonials.length;
	}

	function prev() {
		active = (active - 1 + testimonials.length) % testimonials.length;
	}

	function goTo(idx: number) {
		active = idx;
	}

	function pauseAuto() {
		paused = true;
		if (timer) clearTimeout(timer);
		setTimeout(() => {
			paused = false;
			autoScroll();
		}, 2500);
	}

	function autoScroll() {
		if (!paused) {
			timer = setTimeout(() => {
				next();
				autoScroll();
			}, 4000);
		}
	}

	onMount(() => {
		autoScroll();
		return () => {
			if (timer) clearTimeout(timer);
		};
	});
</script>

<div class="relative w-full bg-gray-100 py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<!-- Navigation and Cards Container -->
		<div class="flex items-center justify-between">
			<!-- Previous Button -->
			<button
				class="bg-white rounded-full shadow-sm border border-gray-200 p-2 sm:p-3 flex items-center justify-center z-10 w-9 h-9 sm:w-12 sm:h-12 hover:shadow-md transition-shadow duration-200 flex-shrink-0 mr-2 sm:mr-4 lg:mr-8"
				onclick={() => {
					prev();
					pauseAuto();
				}}
				aria-label="Previous"
			>
				<ChevronLeft size={20} class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
			</button>

			<!-- Testimonial Cards Container -->
			<div class="flex-1 relative overflow-hidden min-h-[320px] sm:min-h-[340px] lg:min-h-[280px]">
				<!-- Mobile/Tablet: Single Card (visible on screens < lg) -->
				<div class="block lg:hidden">
					<div class="flex justify-center items-center h-full">
						<div
							class="bg-gray-200 rounded-3xl p-6 w-full max-w-sm sm:max-w-md min-h-[280px] sm:min-h-[300px] flex flex-col justify-between transition-all duration-500 ease-in-out relative"
							onmouseenter={pauseAuto}
							ontouchstart={pauseAuto}
						>
							<!-- Testimonial Text -->
							<p class="text-black text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">
								{$t(testimonials[active].text)}
							</p>

							<!-- Author Info -->
							<div class="flex items-center gap-4">
								<img
									src={testimonials[active].img}
									alt={$t(testimonials[active].author)}
									class="w-12 h-12 rounded-full object-cover flex-shrink-0"
								/>
								<div>
									<h4 class="text-black text-lg font-bold">
										{$t(testimonials[active].author)}
									</h4>
									<p class="text-black text-sm">
										{$t(testimonials[active].company)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Desktop: Three Cards (visible on lg+ screens) -->
				<div class="hidden lg:block">
					<div class="flex items-stretch justify-center gap-6 xl:gap-8 h-full">
						{#each [0, 1, 2] as offset}
							{@const testimonialIndex = (active + offset) % testimonials.length}
							{@const testimonial = testimonials[testimonialIndex]}
							<div
								class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-500 ease-in-out
									w-80 xl:w-96 min-h-[280px] flex flex-col justify-between
									{offset === 1 ? 'opacity-100 scale-105 shadow-md z-10' : 'opacity-75 scale-100 z-0'}"
								onmouseenter={pauseAuto}
								ontouchstart={pauseAuto}
							>
								<!-- Testimonial Text -->
								<p class="text-gray-700 text-base leading-relaxed mb-8 flex-grow">
									{$t(testimonial.text)}
								</p>

								<!-- Author Info -->
								<div class="flex items-center gap-4">
									<img
										src={testimonial.img}
										alt={$t(testimonial.author)}
										class="w-12 h-12 rounded-full object-cover flex-shrink-0"
									/>
									<div>
										<h4 class="text-gray-900 text-lg font-semibold">
											{$t(testimonial.author)}
										</h4>
										<p class="text-gray-500 text-sm">
											{$t(testimonial.company)}
										</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Next Button -->
			<button
				class="bg-white rounded-full shadow-sm border border-gray-200 p-2 sm:p-3 flex items-center justify-center z-10 w-9 h-9 sm:w-12 sm:h-12 hover:shadow-md transition-shadow duration-200 flex-shrink-0 ml-2 sm:ml-4 lg:ml-8"
				onclick={() => {
					next();
					pauseAuto();
				}}
				aria-label="Next"
			>
				<ChevronRight size={20} class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
			</button>
		</div>

		<!-- Pagination Dots -->
		<div class="flex justify-center gap-2 mt-8 sm:mt-12">
			{#each testimonials as _, i}
				<button
					class="transition-all duration-300 rounded-full
						{i === active ? 'w-6 sm:w-8 h-2 bg-gray-800' : 'w-2 h-2 bg-gray-300'}"
					onclick={() => {
						goTo(i);
						pauseAuto();
					}}
					aria-label={`Go to testimonial ${i + 1}`}
				></button>
			{/each}
		</div>
	</div>
</div>
