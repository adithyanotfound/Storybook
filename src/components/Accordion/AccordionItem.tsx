import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useAccordion } from './AccordionContext';

export interface AccordionItemProps {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  children,
  disabled = false,
  className = '',
  headerClassName = '',
  contentClassName = '',
  iconClassName = '',
}) => {
  const { isExpanded, toggleItem } = useAccordion();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const expanded = isExpanded(id);

  useEffect(() => {
    if (expanded) {
      const contentEl = contentRef.current;
      if (contentEl) {
        setHeight(contentEl.scrollHeight);
      }
    } else {
      setHeight(0);
    }
  }, [expanded]);
  
  const handleToggle = () => {
    if (!disabled) {
      toggleItem(id);
    }
  };

  return (
    <div
      className={`border border-neutral-300 dark:border-neutral-600 rounded-md overflow-hidden mb-2 ${className}`}
      data-state={expanded ? 'expanded' : 'collapsed'}
    >
      <h3>
        <button
          id={`accordion-header-${id}`}
          type="button"
          aria-expanded={expanded}
          aria-controls={`accordion-panel-${id}`}
          aria-disabled={disabled}
          className={`
            flex justify-between items-center w-full p-4
            text-left
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset
            disabled:cursor-not-allowed disabled:opacity-50
            bg-neutral-50 dark:bg-neutral-800
            hover:bg-neutral-100 dark:hover:bg-neutral-700
            transition-colors duration-250
            ${headerClassName}
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
          `}
          onClick={handleToggle}
          disabled={disabled}
        >
          <span className="font-medium text-neutral-900 dark:text-white">{title}</span>
          <ChevronDown 
            className={`
              h-5 w-5 text-neutral-500 dark:text-neutral-400
              transition-transform duration-250
              ${expanded ? 'transform rotate-180' : ''}
              ${iconClassName}
            `} 
          />
        </button>
      </h3>
      <div 
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className="overflow-hidden transition-[height] duration-250"
        style={{ height: height !== undefined ? `${height}px` : 'auto' }}
      >
        <div 
          ref={contentRef}
          className={`p-4 bg-white dark:bg-neutral-900 ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;