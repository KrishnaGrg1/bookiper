<script lang="ts">
	import { t } from '$lib/translation';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { ArrowRight } from 'lucide-svelte';
	const activeStep = writable<string | null>(null);
	const steps = ['step_1', 'step_2', 'step_3', 'step_4', 'step_5'];

	let observers: IntersectionObserver[] = [];

	onMount(() => {
		steps.forEach((step) => {
			const element = document.getElementById(step);
			if (!element) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						activeStep.set(step);
					}
				},
				{
					rootMargin: '0px 0px -50% 0px', // Trigger when element is 50% visible
					threshold: 0.3
				}
			);

			observer.observe(element);
			observers.push(observer);
		});

		return () => {
			observers.forEach((obs) => obs.disconnect());
		};
	});

	function getCol(index: number) {
		return index % 2 === 0 ? 1 : 2;
	}
</script>

<section class="bg-[#111111] py-12 lg:py-20">
	<div class="container mx-auto px-4 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-8 lg:mb-16 max-w-4xl mx-auto">
			<h2
				class="text-2xl md:text-[40px] font-bold text-[#fafafa] mb-4 lg:mb-6 font-satoshi"
				style="letter-spacing: 1.5px;"
			>
				{$t('home.process.title')}
			</h2>
			<p
				class="text-base md:text-lg lg:text-xl text-[#fafafa] font-satoshi"
				style="letter-spacing: 1px;"
			>
				{$t('home.process.subtitle')}
			</p>
		</div>

		<!-- Process Steps -->
		<div class="relative max-w-7xl mx-auto">
			<!-- Vertical Line (Desktop Only) -->
			<div
				class="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 z-0"
				style="width: 2px; height: 100%; background-color: #fafafa; opacity: 0.3;"
			></div>

			<!-- Yellow Dot (Start) -->
			<div
				class="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-[#edff8c] rounded-full transform -translate-x-1/2 z-10"
			></div>

			<!-- Steps Grid -->
			<div class="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-32 md:gap-y-45">
				{#each steps as step, idx}
					<div
						id={step}
						class="process-step space-y-4 transition-all duration-500 ease-out"
						class:md:col-start-1={getCol(idx) === 1}
						class:md:col-start-2={getCol(idx) === 2}
						class:md:row-start-1={idx === 0}
						class:md:row-start-2={idx === 1}
						class:md:row-start-3={idx === 2}
						class:md:row-start-4={idx === 3}
						class:md:row-start-5={idx === 4}
					>
						<h3
							class="text-xl md:text-2xl font-bold flex items-center gap-3 font-satoshi"
							class:text-[#edff8c]={$activeStep === step}
							class:text-[#7e7e7e]={$activeStep !== step}
						>
							<span class="block md:hidden">{idx + 1}.</span>
							{$t(`home.process.${step}.title`)}
						</h3>
						<p
							class="text-xl font-dm-sans"
							class:text-[#fafafa]={$activeStep === step}
							class:text-[#7e7e7e]={$activeStep !== step}
							style="letter-spacing: 1px;"
						>
							{$t(`home.process.${step}.description`)}
						</p>

						{#if step === 'step_5'}
							<button
								class="group bg-[#edff8c] text-black px-8 py-3 rounded-lg text-xl font-medium
         hover:bg-[#E9FF73] active:bg-[#DFFF36] disabled:bg-[#F3F6E3]
         disabled:text-[#777777] disabled:cursor-not-allowed transition-colors
         w-full cursor-pointer flex items-center justify-center gap-3 relative overflow-hidden"
							>
								<!-- Animated Arrow -->
								<span
									class="transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
           transition-all duration-500 ease-out"
								>
									<ArrowRight />
								</span>

								<!-- Button Text -->
								<span
									class="transform group-hover:translate-x-2 transition-transform duration-500 ease-out"
								>
									{$t('home.process.cta')}
								</span>
							</button>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
