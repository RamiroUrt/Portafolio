import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useTranslation } from 'react-i18next';
import type { SortableTabProps } from '../../../assets/types/tab.Types';

const SortableTab = ({ tab, index, isActive, moveTab, onClick, onClose }: SortableTabProps) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLButtonElement>(null);

  // Extraemos datos de forma segura
  const isObj = typeof tab === 'object';
  const tabId = isObj ? tab.id : (tab as string); // Cast simple para TS
  
  const tabLabel = isObj 
    ? tab.title 
    : t(`nav.tabs.${tab}`, { defaultValue: tab });

  // Lógica de Drag & Drop
  const [{ isDragging }, drag] = useDrag({
    type: 'TAB',
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: 'TAB',
    hover: (item: { index: number }) => {
      if (!ref.current || item.index === index) return;
      moveTab(item.index, index);
      item.index = index;
    },
  });

  // eslint-disable-next-line react-hooks/refs
  drag(drop(ref));

  return (
    <button
      ref={ref}
      className={`tab ${isActive ? "active" : ""} ${isDragging ? "dragging" : ""}`}
      onClick={() => onClick(tabId)}
      type="button"
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab' }}
    >
      <span className="tab-dot" />
      <span className="tab-label">{tabLabel}</span>

      {/* Cambiamos el button interno por un span con rol de botón para evitar anidamiento ilegal */}
      {tabId.startsWith('Screens: ') && (
        <span 
          className="btn-close-tab cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation(); // CRÍTICO: evita activar la pestaña al cerrarla
            onClose(tabId);
          }}
          onKeyDown={(e) => e.key === 'Enter' && onClose(tabId)}
        >
          <b className='text-[20px] leading-none'>×</b>
        </span>
      )}
    </button>
  );
};

export default SortableTab;