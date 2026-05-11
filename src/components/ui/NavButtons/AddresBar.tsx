import Skeleton from 'react-loading-skeleton';
import { useTranslation } from 'react-i18next';
import type { AddressBarProps } from "../../../assets/types/navButtons.Types";

const AddressBar = ({ isLoading, active }: AddressBarProps) => {
  const { t } = useTranslation();

  // Calculamos la ruta traducida basada en el ID técnico (active)
  const translatedPath = t(`nav.tabs.${active}`, { defaultValue: active })
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

    
  return (
    <div className="address-bar">
      {isLoading ? (
        <div style={{ marginLeft: '10px', flex: 1 }}>
          <Skeleton width="60%" height={12} />
        </div>
      ) : (
        <p className="address-text">
          ramirourteaga.online<span>/{translatedPath}</span>
        </p>
      )}
    </div>
  );
};

export default AddressBar;
