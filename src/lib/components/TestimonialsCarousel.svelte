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

<div class="relative w-full flex flex-col items-center space-y-8">
	<div class="flex items-center justify-between w-full">
		<button
			class="chevron-btn bg-white rounded-full shadow p-2 flex items-center justify-center z-10"
			style="height: 48px; width: 48px;"
			onclick={() => {
				prev();
				pauseAuto();
			}}
			aria-label="Previous"
		>
			<ChevronLeft size={28} />
		</button>

		<div class=" relative grid md:grid-cols-2 lg:grid-cols-3 w-full" style="height: 320px;">
			{#each [-1, 0, 1] as offset}
				{@const idx = (active + offset + testimonials.length) % testimonials.length}
				{@const testimonial = testimonials[idx]}
				<div
					class="testimonial-card bg-[#e5e5e5] rounded-3xl p-6 space-y-6 transition-all duration-600 ease-in-out absolute"
					style="width: 330px; top: 0; transform: translateX(calc(-50% + {offset *
						330}px)) scale({offset === 0 ? 1 : 0.95}); opacity: {offset === 0
						? 1
						: 0.5}; z-index: {offset === 0 ? 2 : 1}; box-shadow: {offset === 0
						? '0 4px 24px rgba(0,0,0,0.08)'
						: 'none'}; pointer-events: {offset === 0 ? 'auto' : 'none'};"
					role="group"
					onmouseenter={pauseAuto}
					ontouchstart={pauseAuto}
				>
					<p class="text-lg leading-relaxed text-black">{$t(testimonial.text)}</p>
					<div class="flex items-center gap-4">
						<img
							src={testimonial.img}
							alt={$t(testimonial.author)}
							class="w-12 h-12 rounded-full object-cover"
						/>
						<div>
							<h4 class="text-black text-lg font-bold">{$t(testimonial.author)}</h4>
							<p class="text-black text-sm">{$t(testimonial.company)}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<button
			class="chevron-btn bg-white rounded-full shadow p-2 flex items-center justify-center z-10"
			style="height: 48px; width: 48px;"
			onclick={() => {
				next();
				pauseAuto();
			}}
			aria-label="Next"
		>
			<ChevronRight size={28} />
		</button>
	</div>
	<div class="flex justify-center gap-2 mt-6">
		{#each testimonials as _, i}
			<button
				class="w-2 h-2 rounded-full transition-colors duration-300"
				style="background: {i === active ? '#111' : '#aaaaaa'};"
				onclick={() => {
					goTo(i);
					pauseAuto();
				}}
				aria-label={`Go to testimonial ${i + 1}`}
			></button>
		{/each}
	</div>
</div>

<style>
	.testimonial-card {
		transition:
			opacity 0.6s ease-in-out,
			transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		position: absolute;
		top: 0;
		left: 50%;
	}
	@media (max-width: 1024px) {
		.carousel-track {
			min-height: 340px;
			height: 340px;
		}
		.testimonial-card {
			width: 80vw;
			transform: translateX(-50%) scale(1);
			opacity: 1;
			position: absolute;
			display: block !important;
		}
		.testimonial-card:not(:nth-child(2)) {
			display: none !important;
		}
		.chevron-btn {
			height: 40px;
			width: 40px;
		}
	}
	@media (max-width: 640px) {
		.carousel-track {
			min-height: 380px;
			height: 380px;
		}
		.testimonial-card {
			width: 90vw;
			transform: translateX(-50%) scale(1);
			opacity: 1;
			position: absolute;
			display: block !important;
		}
		.testimonial-card:not(:nth-child(2)) {
			display: none !important;
		}
		.chevron-btn {
			height: 36px;
			width: 36px;
		}
	}
</style>
