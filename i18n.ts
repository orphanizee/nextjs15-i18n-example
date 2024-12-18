import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'de', 'ja'];

export default getRequestConfig(async ({ requestLocale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(requestLocale as any)) notFound();

    return {
        // messages: (await import(`@/messages/${requestLocale}.json`)).default
        messages: (await import(`./messages/${requestLocale}.json`)).default
    };
});
