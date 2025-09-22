// src/lib/services/User.ts
import type { RequestEvent } from '@sveltejs/kit';
import axios from 'axios';
import {N8N_URL} from '$env/static/private';
export interface ContactFormDataInput {
    full_name: string;
    email: string;
    phone: string;
    message: string;
}

interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
}

export const sendContactForm = async (
    event: RequestEvent,
    data: ContactFormDataInput
): Promise<[ApiResponse | null, { message: string } | null]> => {
    try {
        const response = await axios.post(
			`${N8N_URL}/sendContactFormDetails`,
			data,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
    console.log(response);
		return [response.data, null]; // Axios parses JSON automatically

    } catch (error: any) {
        // Handle network errors, JSON parsing errors, etc.
        return [
            null,
            {
                message: error.message || 'Network error occurred'
            }
        ];
    }
};