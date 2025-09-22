<script lang="ts">
	import { t } from '$lib/translation';
	interface Props {
		errors: string[];
	}

	let { errors }: Props = $props();
</script>

{#if errors && errors.length > 0}
	<div class="flex flex-col justify-center items-center mt-2 gap-y-2 text-sm text-red-500">
		{#each errors as error}
			<span>{$t(error)} </span>
		{/each}
	</div>
{/if}
