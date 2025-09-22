// src/lib/stores/toast.ts
// Central store for managing toast notifications

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Toast types
export type ToastType = 'success' | 'error' | 'info' | 'warning';

// Toast data structure
export interface ToastData {
	type: ToastType;
	message: string;
	id: number;
}

// Create a writable store for toast messages
export const toasts = writable<ToastData[]>([]);

// Custom event name
const TOAST_EVENT = 'app:toast';

export function addToast(type: ToastType, message: string): void {
	if (browser) {
		const id = Date.now();

		window.dispatchEvent(
			new CustomEvent(TOAST_EVENT, {
				detail: { type, message, id }
			})
		);
	}
}

export const toast = {
	success: (message: string) => addToast('success', message),
	error: (message: string) => addToast('error', message),
	info: (message: string) => addToast('info', message),
	warning: (message: string) => addToast('warning', message)
};

export function setupToastListener(callback: (data: ToastData) => void): () => void {
	if (!browser) return () => {};

	const handleToast = (event: Event) => {
		const customEvent = event as CustomEvent<ToastData>;
		callback(customEvent.detail);
	};

	window.addEventListener(TOAST_EVENT, handleToast);

	return () => {
		window.removeEventListener(TOAST_EVENT, handleToast);
	};
}
