import { type ItemContactProps } from "../../../assets/types/items.Types";
import CopyBtn from "../Buttons/copy/CopyBtn"
import { SOCIAL_LINKS } from "../../../assets/constant/socialProfileLink";
import { useState } from "react";

const ItemContact = ({ text, icon, type }: ItemContactProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    if (type === "email") {
      navigator.clipboard.writeText("urteagaramiro33@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
    if (type === "link") {
      window.open(SOCIAL_LINKS.whatsapp, "_blank");
    }
  };

  return (
    <div
      className={`item-contact relative group flex items-center gap-2 p-2  ${type ? `item-${type}` : ""}`}
      onClick={handleClick}
    >
      <span className="icon shrink-0 w-5 h-5 flex items-center justify-center">
        {icon}
      </span>
      <span className="subtitle font-medium truncate">{text}</span>

      {type === "email" && <CopyBtn isCopied={isCopied} />}
    </div>
  );
};

export default ItemContact;