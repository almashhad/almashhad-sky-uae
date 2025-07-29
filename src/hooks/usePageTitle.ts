import { useEffect } from 'react';
import { useTranslation } from './useTranslation';

export const usePageTitle = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('siteTitle');
  }, [t]);
};