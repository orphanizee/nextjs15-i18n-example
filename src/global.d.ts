
// Use type safe message keys with `next-intl`
// type Messages = typeof import('@/messages/en.json');
type Messages = typeof import('../messages/en.json');
// declare interface IntlMessages extends Messages {}
export type IntlMessages = Messages
