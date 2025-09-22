<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { setupToastListener, type ToastData } from '$lib/stores/toast';
	import { Toaster, toast } from 'svelte-sonner';
	import { t } from '$lib/translation'; // or your i18n lib

	interface Props {
		duration?: number;
	}

	let { duration = 4000 }: Props = $props();

	let cleanup: () => void;

	const handleToast = (data: ToastData) => {
		switch (data.type) {
			case 'success':
				toast.success($t(data.message), { duration });
				break;
			case 'error':
				toast.error($t(data.message), { duration });
				break;
			case 'info':
				toast.info($t(data.message), { duration });
				break;
			case 'warning':
				toast.warning($t(data.message), { duration });
				break;
			default:
				toast($t(data.message), { duration });
		}
	};

	onMount(() => {
		cleanup = setupToastListener(handleToast);
	});

	onDestroy(() => {
		if (cleanup) cleanup();
	});
</script>

<Toaster position="bottom-right" richColors closeButton theme="light" />
