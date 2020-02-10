import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ComponentWithError({param}) {
    const [t] = useTranslation('from-hook');

    return (
        <div id="WithError">
            <p>{t('key1')}</p>
            <p>{t(param)}</p>
            <p>{t('key2', {ns: 'from-t'})}</p>
        </div>
    );
}
