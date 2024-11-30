"use client";
import React from 'react';
import Link from 'next/link';
import { SUPPORTED_LOCALES } from '@/i18n/locales';
import { useTranslations } from "next-intl";

export const LocaleNavComponent = ({ currentLocale }: { currentLocale: string }) => {
    const t = useTranslations("Nav");
    return (
        <div>
            <ul>
                {SUPPORTED_LOCALES.map((locale) => (
                    <li
                        key={locale}
                        style={{
                            visibility: currentLocale !== locale ? "visible" : "hidden",
                            display: currentLocale !== locale ? "block" : "none",
                        }}
                    >
                        <Link
                            href={locale}
                        >
                            {t(locale)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};