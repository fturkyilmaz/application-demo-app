import {useMemo} from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import {I18nManager} from 'react-native';

const translationGetters = {
  tr: () => require('./tr.json'),
  en: () => require('./en.json'),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = async (selectedLanguage) => {
  const fallback = {languageTag: 'tr', isRTL: false};

  let {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  if (selectedLanguage) {
    languageTag = selectedLanguage;
  }

  translate.cache.clear();

  I18nManager.forceRTL(isRTL);

  i18n.translations = {[languageTag]: translationGetters[languageTag]()};

  i18n.locale = languageTag;
};

export const useTranslation = (key, config) => {
  return i18n.t(key, config);
};

export const useOnceTranslations = (keys) => {
  return useMemo(() => {
    const resp = [];

    for (const key of keys) {
      resp.push(translate(key));
    }
    return resp;
  }, [keys]);
};
