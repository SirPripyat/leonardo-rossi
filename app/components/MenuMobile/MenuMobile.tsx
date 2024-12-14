'use client';

import { X } from 'lucide-react';
import './MenuMobile.scss';
import { IconButton } from '../IconButton/IconButton';
import { Button } from '../Button';
import { useMenuMobileStore } from '@/app/store/menuMobile';
import useToggleLanguageText from '@/app/hooks/useToggleText';
import { pageAnchorsText } from '@/app/texts/pageAnchorsText';

export function MenuMobile() {
  const { menuMobileIsOpen, toggleMenuMobile } = useMenuMobileStore();

  const { text } = useToggleLanguageText(pageAnchorsText);

  return (
    menuMobileIsOpen && (
      <div className="menu-mobile">
        <IconButton icon={X} clickAction={toggleMenuMobile} />
        <div>
          {text.map(({ label, link }, index) => (
            <Button.Root
              key={index}
              variant={'Ghosted'}
              clickAction={toggleMenuMobile}
              link={link}
            >
              {label}
            </Button.Root>
          ))}
        </div>
      </div>
    )
  );
}
