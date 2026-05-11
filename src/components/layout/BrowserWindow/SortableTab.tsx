import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useTranslation } from 'react-i18next';

interface SortableTabProps {
  tab: string;
  index: number;
  isActive: boolean;
  moveTab: (dragIndex: number, hoverIndex: number) => void;
  onClick: (tab: string) => void;
}

const SortableTab = ({ tab, index, isActive, moveTab, onClick }: SortableTabProps) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLButtonElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'TAB',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'TAB',
    hover: (item: { index: number }) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      moveTab(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // eslint-disable-next-line react-hooks/refs
  drag(drop(ref));

  return (
    <button
      ref={ref}
      className={`tab ${isActive ? "active" : ""} ${isDragging ? "dragging" : ""}`}
      onClick={() => onClick(tab)}
      type="button"
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab' }}
    >
      <span className="tab-dot" />
      {t(`nav.tabs.${tab}`, { defaultValue: tab })}
    </button>
  );
};

export default SortableTab;