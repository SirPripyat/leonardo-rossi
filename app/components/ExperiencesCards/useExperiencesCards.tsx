import { useState } from "react";

interface useExperiencesCardsProps {
  cardIsOpen?: boolean;
}

export default function useExperiencesCards({
  cardIsOpen,
}: useExperiencesCardsProps) {
  const [cardOpen, setCardOpen] = useState(cardIsOpen ? true : false);

  const toggleCardOpen = () => setCardOpen(!cardOpen);

  return {
    cardOpen,
    toggleCardOpen,
  };
}
