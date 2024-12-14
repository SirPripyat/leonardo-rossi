import { ElementType } from 'react';
import './IconButton.scss';

export interface IconButtonProps {
  icon: ElementType;
  clickAction?: () => void;
}

export function IconButton({ icon: Icon, clickAction }: IconButtonProps) {
  return (
    <button className="icon-ghosted" onClick={clickAction}>
      <Icon />
    </button>
  );
}
