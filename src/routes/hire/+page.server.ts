import { supabase } from '$lib/db/supabaseClient.js';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
    message: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('emailAddress');
        const message = formData.get('formMessage');

        if (!email) {
            return fail(400, {email, missing: true});
        }

        if (!message) {
            return fail(400, {message, missing: true});
        }

        const { error } = await supabase
        .from('Contact Forms')
        .insert([
        { email: email, message: message },
        ]);

        console.log(error);

        if (error) {
            return fail(500, {error});
        }

        return {success: true }
    }
} satisfies Actions;