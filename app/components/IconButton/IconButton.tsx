import { ElementType } from "react";
import "./IconButton.scss";

export interface IconButtonProps {
  icon: ElementType;
  variant?: string;
  clickAction?: () => void;
}

export function IconButton({
  icon: Icon,
  variant,
  clickAction,
}: IconButtonProps) {
  return (
    <button className="icon-ghosted" onClick={clickAction}>
      <Icon />
    </button>
  );
}
