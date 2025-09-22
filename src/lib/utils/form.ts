import { browser } from '$app/environment';
import { toast } from '$lib/stores/toast';
import {
	superForm as originalSuperForm,
	setError,
	setMessage,
	superValidate,
	type FormOptions,
	type FormResult,
	type SuperForm,
	type SuperValidated
} from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Client-side wrapper for superForm with toast notifications
export function superForm<
	T extends Record<string, unknown> = Record<string, unknown>,
	// @ts-expect-error type issue
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	M = App.Superforms.Message extends never ? any : App.Superforms.Message,
	In extends Record<string, unknown> = T
>(form: SuperValidated<T, M, In> | T, formOptions?: FormOptions<T, M, In>): SuperForm<T, M> {
	const result = originalSuperForm(form, {
		...formOptions
	});
	
	if (browser) {
		const errorUnsubscribe = result.errors.subscribe((d) => {
			const errors = d._errors || [];
			if (errors.length > 0) {
				errors.forEach((error) => {
					toast.error(error);
				});
			}
		});
		
		const formUnsubscribe = result.message.subscribe((d) => {
			if (d && typeof d === 'string') {
				toast.success(d as string);
			}
		});
		
		const originalOnUpdated = formOptions?.onUpdated;
		result.options.onUpdated = () => {
			errorUnsubscribe();
			formUnsubscribe();
			if (originalOnUpdated) {
				originalOnUpdated(result.options.onUpdated?.arguments);
			}
		};
	}
	
	return result;
}


export { setError, setMessage, superValidate, z, zod, type FormResult };