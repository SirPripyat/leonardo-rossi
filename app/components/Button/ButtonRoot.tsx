import Link from "next/link";
import "../../styles/components/Button.scss";

export interface ButtonRootProps {
  children: React.ReactNode;
  clickAction?: () => void;
  variant?: string;
  link: string;
  targetValue?: string;
}

export interface ButtonTypes {
  [key: string]: string;
}

export function ButtonRoot({
  children,
  clickAction,
  variant,
  link,
  targetValue,
}: ButtonRootProps) {
  const buttonTypes: ButtonTypes = {
    filled: "filled",
    outlined: "outlined",
    ghosted: "ghosted",
  };

  let variantOnLowerCase;

  if (variant) {
    variantOnLowerCase = variant.toLowerCase();
  } else {
    variantOnLowerCase = "filled";
  }

  const getButtonType = buttonTypes[variantOnLowerCase];

  return link ? (
    <button className="reset-button" onClick={clickAction}>
      <Link
        href={link}
        target={targetValue}
        className={`universal-button ${getButtonType}`}
      >
        {children}
      </Link>
    </button>
  ) : (
    <button
      onClick={clickAction}
      className={`universal-button ${getButtonType}`}
    >
      {children}
    </button>
  );
}
