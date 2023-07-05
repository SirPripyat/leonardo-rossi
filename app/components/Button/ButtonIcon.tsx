import { ElementType } from "react";
import "../../styles/components/Button.scss";

export interface ButtonIconProps {
  icon: ElementType;
}

export function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon className="button-icon" />;
}
