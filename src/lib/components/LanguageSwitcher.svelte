<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Languages } from 'lucide-svelte';
	import { locale } from '$lib/translation';

	// Auto-subscription to the Svelte store
	$: currentLanguage = languages.find((lang) => lang.code === $locale) || languages[0];

	type Language = {
		code: string;
		name: string;
		flag: string;
	};

	const languages: Language[] = [
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'fr', name: 'Français', flag: '🇫🇷' },
		{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
		{ code: 'it', name: 'Italiano', flag: '🇮🇹' },
		{ code: 'pt', name: 'Português', flag: '🇧🇷' },
		{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
		{ code: 'uk', name: 'Українська', flag: '🇺🇦' },
		{ code: 'zh', name: '中文', flag: '🇨🇳' }
	];

	function changeLanguage(languageCode: string) {
		if (languageCode === $locale) return;
		locale.set(languageCode);
	}
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		<Button
			variant="secondary"
			size="sm"
			class="cursor-pointer  flex items-center "
			aria-label="Change language"
		>
			<Languages class="mr-2 h-4 w-4" />
			{currentLanguage.flag}
			<span class="hidden text-sm md:text-base md:block ml-2">{currentLanguage.name}</span>
		</Button>
	</DropdownMenuTrigger>

	<DropdownMenuContent class="grid grid-cols-2 gap-2 w-auto min-w-[200px] p-2" align="start">
		{#each languages as language}
			<DropdownMenuItem
				onclick={() => changeLanguage(language.code)}
				class={language.code === $locale ? ' cursor-not-allowed ' : ''}
			>
				<span class="mr-2">{language.flag}</span>
				{language.name}
			</DropdownMenuItem>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
