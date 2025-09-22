// src/routes/+page.server.ts (or contact page)
import { z } from 'zod';
// Import directly from sveltekit-superforms for server-side usage
import { setError, setMessage, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from '@sveltejs/kit';
import { sendContactForm } from '$lib/services/User';

const contactFormSchema = z.object({
	email: z.string().email('error.auth.invalid_email'),
	full_name: z.string().min(2, 'error.auth.full_name').max(100, 'error.auth.full_name_max'),
	phone: z.string().min(10, 'error.auth.phone').max(15, 'error.auth.phone_max'),
	message: z.string().min(5, 'error.auth.message').max(1000, 'error.auth.message_max')
});


export const load = async () => {
    const contactForm = await superValidate(zod(contactFormSchema));
    
    return { contactForm };
};

export const actions: Actions = {
    default: async (event) => {
        const { request } = event;
        const form = await superValidate(request, zod(contactFormSchema));
        console.log(form); 
        if (!form.valid) {
            return setError(form, 'error.auth.required_fields');
        }
        
        const [result, error] = await sendContactForm(event, form.data);
        
        if (error) {
            return setError(form, error.message);
        }
        
        return setMessage(form, 'success.contact.form.submit_success');
    }
};