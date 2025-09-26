import { register, init, getLocaleFromNavigator, locale, t } from 'svelte-i18n';
import en from './en';
import fr from './fr';
import de from './de';
import es from './es';
import hi from './hi';
import it from './it';
import pt from './pt';
import ru from './ru';
import uk from './uk';
import zh from './zh';
// Register translation files
register('en', () => Promise.resolve(en));
register('fr', () => Promise.resolve(fr));
register('de', () => Promise.resolve(de));
register('es', () => Promise.resolve(es));
register('hi', () => Promise.resolve(hi));
register('it', () => Promise.resolve(it));
register('pt', () => Promise.resolve(pt));
register('ru', () => Promise.resolve(ru));
register('uk', () => Promise.resolve(uk));
register('zh', () => Promise.resolve(zh));

// Initialize i18n
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

export { locale, t };