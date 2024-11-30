import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { LocaleParam } from '../../types/LocaleParam';
import { ClientComponent } from "@/app/[locale]/ClientComponent";
import { LocaleNavComponent } from "@/app/[locale]/LocaleNavComponent";

// Use the locale param in metadata
// See: https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing#use-the-locale-param-in-metadata
export async function generateMetadata({ params }: { params: LocaleParam }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title')
    };
}

export default async function Index({ params }: { params: LocaleParam }) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = await getTranslations({ locale, namespace: 'Index' });
    return (
        <div>
            <h1>SSG: {t("title")}</h1>
            <ClientComponent />
            <LocaleNavComponent currentLocale={locale} />
            <div>
                → <Link href={`/sub`}>Sub Page</Link>
            </div>
        </div>
    );
}