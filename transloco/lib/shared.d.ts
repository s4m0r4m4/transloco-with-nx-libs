import { TranslocoService } from './transloco.service';
export declare function getScopeFromLang(lang: string): string;
export declare function getLangFromScope(lang: string): string;
/**
 * @example
 *
 * getPipeValue('todos|scoped', 'scoped') [true, 'todos']
 * getPipeValue('en|static', 'static') [true, 'en']
 * getPipeValue('en', 'static') [false, 'en']
 */
export declare function getPipeValue(str: string, value: string, char?: string): [boolean, string];
export declare function shouldListenToLangChanges(service: TranslocoService, lang: string): boolean;
export declare function listenOrNotOperator(listenToLangChange: boolean): (source: any) => any;
export declare function prependScope(inlineLoader: any, scope: any): {};
