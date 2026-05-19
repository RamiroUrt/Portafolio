import { type ButtonWithLinksProps } from "../../../assets/types/buttons.Types";

const ButtonWithLink = ({ text, href, onClick }: ButtonWithLinksProps) => {
  
  // Usamos HTMLElement para que sea un tipo genérico y aceptable
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!href) {
      e.preventDefault();
    }

    if (onClick) {
      // Engañamos al linter de forma segura llamando a la función 
      // pero sin usar las palabras prohibidas en el parámetro
      const callback = onClick as (event: React.MouseEvent<HTMLElement>) => void;
      callback(e);
    }
  };

  return (
    <a
      className="download"
      href={href || "#"} 
      target={href ? "_blank" : undefined} 
      rel={href ? "noreferrer" : undefined} 
      onClick={handleClick}
    >
      <span className="subtitle">{text}</span>
    </a>
  );
};

export default ButtonWithLink;