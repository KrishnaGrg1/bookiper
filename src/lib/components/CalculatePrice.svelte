<script lang="ts">
	import { t } from '$lib/translation';
	import { ArrowRight, Check, CheckCircle, Loader2 } from 'lucide-svelte';

	interface FormData {
		companyName: string;
		numberOfAssociates: number;
		yearlyTurnover: number;
	}
	let data: FormData = {
		companyName: '',
		numberOfAssociates: 0,
		yearlyTurnover: 0
	};
	let showResult = false;
	let calculatedPrice = 0;
	let isCalculating = false;
	function handleSubmit(event: Event) {
		event.preventDefault();
		// Handle form submission logic here
		isCalculating = true;
		setTimeout(() => {
			const turnover = data.yearlyTurnover;

			if (turnover < 200000) {
				calculatedPrice = 90;
			} else {
				calculatedPrice = 140;
			}

			isCalculating = false;
			showResult = true;
		}, 5000);
	}
	function recalculate(event: Event) {
		event.preventDefault();
		showResult = false;
		data = {
			companyName: '',
			numberOfAssociates: 0,
			yearlyTurnover: 0
		};
		calculatedPrice = 0;
	}
</script>

<div
	class="bg-[#fafafa] rounded-3xl p-8 md:px-20 md:py-7 lg:p-12 flex flex-col gap-2.5 justify-between h-full"
>
	<!-- Form Header -->
	{#if !showResult}
		<div class="space-y-4 text-center">
			<h3
				class="text-black text-3xl lg:text-4xl font-bold font-satoshi"
				style="letter-spacing: 1.5px;"
			>
				{$t('home.pricing.calculator.title')}
			</h3>
			<p class="text-black text-xl leading-[30px] font-dm-sans" style="letter-spacing: 1.5px;">
				{$t('home.pricing.calculator.subtitle')}
			</p>
		</div>

		<!-- Form -->
		<form class="space-y-6" onsubmit={handleSubmit}>
			<!-- Company Name -->
			<div class="space-y-2">
				<input
					type="text"
					placeholder={$t('home.pricing.calculator.company_name.placeholder')}
					class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black font-dm-sans"
					style="letter-spacing: 1px;"
					bind:value={data.companyName}
					required
				/>
				<p class="text-[#5a5a5a] text-sm font-dm-sans">
					{$t('home.pricing.calculator.company_name.help')}
				</p>
			</div>

			<!-- Number of Associates -->
			<div class="space-y-2">
				<input
					type="number"
					placeholder={$t('home.pricing.calculator.associates.placeholder')}
					class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black font-dm-sans"
					style="letter-spacing: 1px;"
					bind:value={data.numberOfAssociates}
					required
				/>
				<p class="text-[#5a5a5a] text-sm font-dm-sans">
					{$t('home.pricing.calculator.associates.help')}
				</p>
			</div>

			<!-- Yearly Turnover -->
			<div class="space-y-2">
				<input
					type="number"
					placeholder={$t('home.pricing.calculator.turnover.placeholder')}
					class="w-full rounded-lg border border-black px-4 py-4 text-[#5a5a5a] text-base placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-black font-dm-sans"
					style="letter-spacing: 1px;"
					bind:value={data.yearlyTurnover}
					required
				/>
				<p class="text-[#5a5a5a] text-sm font-dm-sans">
					{$t('home.pricing.calculator.turnover.help')}
				</p>
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				class="group bg-black text-[#fafafa] w-full py-4 rounded-lg text-xl font-medium
         active:bg-[#292929] disabled:text-[#959595] disabled:bg-[#CECECE]
         transition-colors cursor-pointer flex items-center justify-center gap-2 overflow-hidden font-dm-mono"
				disabled={isCalculating}
			>
				<span
					class="transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
           transition-all duration-500 ease-out"
				>
					<ArrowRight class="w-5 h-5 text-[#fafafa]" />
				</span>

				<!-- Button Text -->
				<span
					class="transform group-hover:translate-x-2 transition-transform duration-500 ease-out flex items-center gap-2"
				>
					{#if isCalculating}
						<Loader2 class="animate-spin w-4 h-4 mr-2" />
					{/if}

					{$t('home.pricing.calculator.submit')}
				</span>
			</button>
		</form>
	{:else}
		<div class="md:px-11 flex flex-col items-center gap-6">
			<div class="flex justify-center">
				<div class="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full">
					<h4 class="font-bold text-2xl font-satoshi">
						{$t('home.pricing.calculated.title')}
					</h4>
					<Check class="w-6 h-5" />
				</div>
			</div>

			<div class="flex flex-col items-center">
				<h3 class="text-[32px] font-bold text-gray-800 mb-4 font-satoshi">
					{$t('home.pricing.calculated.price_label')}
				</h3>
				<div class="text-5xl font-bold text-black mb-4 font-satoshi">
					€{calculatedPrice}
				</div>
			</div>

			<div class="">
				<p class="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
					{$t('home.pricing.calculated.note')}
				</p>
			</div>

			<div class="space-y-4">
				<button
					onclick={() => window.open('https://cal.com/charles-martin-hpuy6l/30min', '_blank')}
					class="group w-full bg-black text-white py-4 px-6 rounded-lg text-lg font-medium
	       active:bg-[#292929] disabled:bg-[#CECECE] disabled:text-[#959595]
	       transition-colors font-dm-mono cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
				>
					<span
						class="transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
		       transition-all duration-500 ease-out"
					>
						<ArrowRight class="w-5 h-5 text-[#fafafa]" />
					</span>

					<span
						class="transform group-hover:translate-x-1 transition-transform duration-500 ease-out"
					>
						{$t('home.pricing.calculated.schedule_call')}
					</span>
				</button>
				<button
					onclick={recalculate}
					class="w-full bg-[#F4F4F4] border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg text-lg font-medium transition-colors font-dm-mono cursor-pointer
                    hover:border-2 active:bg-[#5A5A5A] disabled:bg-[#777777]
                    "
				>
					{$t('home.pricing.calculated.recalculate')}
				</button>
			</div>
		</div>
	{/if}
</div>
