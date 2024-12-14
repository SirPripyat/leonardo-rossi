import { LanguageContext } from '@/app/context/languageContext/LanguageContext';
import { useCallback, useContext, useEffect, useState } from 'react';

type MainButton = 'Ver projeto' | 'See project';
type SecondaryButton = 'Ver GitHub' | 'See GitHub';

type ButtonsText = {
  mainButton: MainButton;
  secondaryButton: SecondaryButton;
};

export default function useToggleButtonsText() {
  const [buttonsText, setButtonsText] = useState<ButtonsText>(
    {} as ButtonsText,
  );

  const { language } = useContext(LanguageContext);

  const toggleButtonsText = useCallback(() => {
    if (language === 'pt-br')
      return setButtonsText({
        mainButton: 'Ver projeto',
        secondaryButton: 'Ver GitHub',
      });

    if (language === 'us-en')
      return setButtonsText({
        mainButton: 'See project',
        secondaryButton: 'See GitHub',
      });
  }, [language]);

  useEffect(() => {
    toggleButtonsText();
  }, [toggleButtonsText]);

  return {
    buttonsText,
  };
}
