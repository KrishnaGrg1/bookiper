<script>
	import { ChevronDown } from 'lucide-svelte';
	import { t } from '$lib/translation';
	import {
		Accordion,
		AccordionItem,
		AccordionTrigger,
		AccordionContent
	} from '$lib/components/ui/accordion';
	const faqItems = [
		{
			question: 'home.faq.questions.cost',
			answer: 'home.faq.answers.cost'
		},
		{
			question: 'home.faq.questions.industries',
			answer: 'home.faq.answers.industries'
		},
		{
			question: 'home.faq.questions.tax_compliance',
			answer: 'home.faq.answers.tax_compliance'
		},
		{
			question: 'home.faq.questions.scalability',
			answer: 'home.faq.answers.scalability'
		},
		{
			question: 'home.faq.questions.getting_started',
			answer: 'home.faq.answers.getting_started'
		}
	];
</script>

<section class="bg-[#f4f4f4] py-20 md:pb-24">
	<div class="container mx-auto px-4 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16 max-w-4xl mx-auto">
			<h2
				class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-satoshi"
				style="letter-spacing: 1.5px;"
			>
				{$t('home.faq.title')}
			</h2>
			<p class="text-lg md:text-xl text-black font-dm-sans" style="letter-spacing: 1px;">
				{$t('home.faq.subtitle')}
			</p>
		</div>
		<!-- FAQ List -->
		<div class="max-w-4xl mx-auto mb-8">
			<Accordion type="single" class="w-full">
				<div class="space-y-4">
					{#each faqItems as item, index}
						<AccordionItem
							value={`item-${index}`}
							class="border border-[#7e7e7e]  rounded-3xl  overflow-hidden last:border-b-1 hover:border-2"
						>
							<AccordionTrigger
								class="text-left px-6 py-6 text-xl font-bold text-black no-underline hover:no-underline  w-full"
								style="font-family: 'SatoshiVariable-Bold', sans-serif;"
							>
								{$t(item.question)}
							</AccordionTrigger>
							<AccordionContent class="px-6 pb-6 text-[#444] text-[16px] font-normal font-dm-sans">
								{$t(item.answer)}
							</AccordionContent>
						</AccordionItem>
					{/each}
				</div>
			</Accordion>
		</div>
	</div>
</section>
