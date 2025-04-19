import React from 'react';
import { AccordionProvider } from './AccordionContext';
import { AccordionItem } from './AccordionItem';

export interface AccordionProps {
  children: React.ReactNode;
  defaultExpandedItems?: string[];
  allowMultiple?: boolean;
  className?: string;
}

export interface AccordionComponent extends React.FC<AccordionProps> {
  Item: typeof AccordionItem;
}

export const Accordion: AccordionComponent = ({
  children,
  defaultExpandedItems = [],
  allowMultiple = false,
  className = '',
}) => {
  return (
    <AccordionProvider
      defaultExpandedItems={defaultExpandedItems}
      allowMultiple={allowMultiple}
    >
      <div className={`w-full ${className}`} role="region">
        {children}
      </div>
    </AccordionProvider>
  );
};

// Add AccordionItem as a property of Accordion
Accordion.Item = AccordionItem;

export default Accordion;