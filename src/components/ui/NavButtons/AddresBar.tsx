import { useState, useEffect, useRef } from "react";
import Skeleton from 'react-loading-skeleton';
import { useTranslation } from 'react-i18next'; // Importante
import type { AddressBarProps } from "../../../assets/types/navButtons.Types";

const AddressBar = ({ isLoading, active, onNavigate }: AddressBarProps) => {
  const { t, i18n } = useTranslation(); // Escuchamos cambios de idioma
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Esta función limpia el texto para la URL (quita acentos y espacios)
  const formatUrlPath = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Quita tildes
      .replace(/\s+/g, "-"); // Cambia espacios por guiones
  };

  useEffect(() => {
    // Obtenemos la traducción actual de la pestaña activa
    const translatedName = t(`nav.tabs.${active}`, { defaultValue: active });
    const path = formatUrlPath(translatedName);
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInputValue(`ramirourteaga.online/${path}`);
  }, [active, t, i18n.language]); // Se dispara cuando cambia la pestaña O el idioma

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Al navegar, mandamos solo la última parte
      const parts = inputValue.split('/');
      const lastPart = parts[parts.length - 1];
      onNavigate(lastPart);
      inputRef.current?.blur();
    }
  };

  return (
    <div className="address-bar">
      {isLoading ? (
        <div style={{ marginLeft: '10px', flex: 1 }}>
          <Skeleton width="60%" height={12} />
        </div>
      ) : (
        <input
          ref={inputRef}
          type="text"
          className="address-input address-text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => inputRef.current?.select()}
          spellCheck={false}
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default AddressBar;