import { register, init, getLocaleFromNavigator, locale, t } from 'svelte-i18n';
import en from './en';
import fr from './fr';


// Register translation files
register('en', () => Promise.resolve(en));
register('fr', () => Promise.resolve(fr));

// Initialize i18n
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

export { locale, t };