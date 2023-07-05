import Link from "next/link";
import "../styles/components/Anchor.scss";

export interface AnchorProps {
  link: string;
  children: React.ReactNode;
}

export function Anchor({ children, link }: AnchorProps) {
  return (
    <Link href={link} className="anchor">
      {children}
    </Link>
  );
}
