/*
ロケール名を指定するslug
Next.js 15対応
See: https://nextjs.org/docs/app/building-your-application/upgrading/version-15#params--searchparams
*/
export type LocaleParam = Promise<{ locale: string }>;