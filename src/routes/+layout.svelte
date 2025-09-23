<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import ToastManager from '$lib/components/ToastManager.svelte';
	import './app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<ToastManager />
