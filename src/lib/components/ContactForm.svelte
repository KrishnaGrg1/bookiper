<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { t } from '$lib/translation';
	import { ArrowRight, Loader2 } from 'lucide-svelte';
	import { superForm } from '$lib/utils/form';
	import ErrorDisplay from './ErrorDisplay.svelte';

	interface Props {
		contact: SuperValidated<Record<string, unknown>>;
	}

	const { contact }: Props = $props();

	const { form, enhance, errors, delayed } = superForm(contact);
</script>

<form class="space-y-6" method="POST" use:enhance>
	<!-- Full Name -->
	<div class="space-y-2">
		<input
			type="text"
			placeholder={$t('home.contact.form.full_name.placeholder')}
			id="full_name"
			name="full_name"
			class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
			style="letter-spacing: 1px;"
		/>
		<div class="w-full text-left flex items-start">
			<ErrorDisplay class="" errors={$errors.full_name ?? []} />
		</div>
		<p class="text-[#e5e5e5] text-sm font-dm-sans" style="letter-spacing: 1px;">
			{$t('home.contact.form.full_name.help')}
		</p>
	</div>

	<!-- Email -->
	<div class="space-y-2">
		<input
			type="email"
			name="email"
			placeholder={$t('home.contact.form.email.placeholder')}
			id="email"
			class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
			style="letter-spacing: 1px;"
		/>
		<div class="w-full text-left flex items-start">
			<ErrorDisplay errors={$errors.email ?? []} />
		</div>
		<p class="text-[#e5e5e5] text-sm font-dm-sans" style="letter-spacing: 1px;">
			{$t('home.contact.form.email.help')}
		</p>
	</div>

	<!-- Phone -->
	<div class="space-y-2">
		<input
			type="tel"
			id="phone"
			name="phone"
			placeholder={$t('home.contact.form.phone.placeholder')}
			class="w-full rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
			style="letter-spacing: 1px;"
		/>
		<div class="w-full text-left flex items-start">
			<ErrorDisplay errors={$errors.phone ?? []} />
		</div>
		<p class="text-[#e5e5e5] text-sm font-dm-sans">
			{$t('home.contact.form.phone.help')}
		</p>
	</div>

	<!-- Message -->
	<div class="space-y-2">
		<textarea
			placeholder={$t('home.contact.form.message.placeholder')}
			rows="1"
			name="message"
			class="w-full resize-none rounded-lg border border-[#f4f4f4] bg-transparent px-4 py-4 text-[#e5e5e5] placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-[#edff8c] font-dm-sans"
		></textarea>
		<div class="w-full text-left flex items-start">
			<ErrorDisplay errors={$errors.message ?? []} />
		</div>
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
			class="transform group-hover:translate-x-2 transition-transform duration-500 ease-out flex items-center gap-6"
		>
			{#if $delayed}
				<Loader2 class="animate-spin w-4 h-4 mr-2" />
			{/if}
			{$t('home.contact.form.submit')}
		</span>
	</button>
	<div class="w-full text-left flex items-start">
		<ErrorDisplay errors={$errors._errors ?? []} />
	</div>
</form>
