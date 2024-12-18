import { ElementType } from 'react';
import './Button.scss';

export interface ButtonIconProps {
  icon: ElementType;
}

export function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon className="button-icon" />;
}
