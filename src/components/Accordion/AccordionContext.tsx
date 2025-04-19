import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AccordionContextType {
  expandedItems: string[];
  toggleItem: (id: string) => void;
  isExpanded: (id: string) => boolean;
  expandItem: (id: string) => void;
  collapseItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
};

interface AccordionProviderProps {
  children: ReactNode;
  defaultExpandedItems?: string[];
  allowMultiple?: boolean;
}

export const AccordionProvider: React.FC<AccordionProviderProps> = ({
  children,
  defaultExpandedItems = [],
  allowMultiple = false
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpandedItems);

  const isExpanded = (id: string): boolean => {
    return expandedItems.includes(id);
  };

  const toggleItem = (id: string) => {
    if (isExpanded(id)) {
      collapseItem(id);
    } else {
      expandItem(id);
    }
  };

  const expandItem = (id: string) => {
    if (allowMultiple) {
      setExpandedItems(prev => [...prev, id]);
    } else {
      setExpandedItems([id]);
    }
  };

  const collapseItem = (id: string) => {
    setExpandedItems(prev => prev.filter(item => item !== id));
  };

  return (
    <AccordionContext.Provider
      value={{
        expandedItems,
        toggleItem,
        isExpanded,
        expandItem,
        collapseItem,
        allowMultiple
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionProvider;