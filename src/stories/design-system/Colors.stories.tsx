import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../design-system/tokens';

const meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const ColorPalette = ({ 
  palette, 
  title 
}: { 
  palette: Record<string, string>, 
  title: string 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(palette).map(([shade, color]) => (
          <div key={shade} className="flex items-center">
            <div 
              className="w-12 h-12 rounded-md shadow-md mr-4 flex-shrink-0" 
              style={{ backgroundColor: color }}
            />
            <div>
              <div className="font-medium">{shade}</div>
              <div className="text-sm text-neutral-500">{color}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ColorSystem = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Color System</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Brand Colors</h3>
        <p className="mb-6">
          Our color system is designed to create a consistent and accessible user experience. 
          All colors meet WCAG 2.1 AA contrast requirements for their intended use cases.
        </p>
        
        <ColorPalette palette={colors.primary} title="Primary Colors" />
        <ColorPalette palette={colors.secondary} title="Secondary Colors" />
        <ColorPalette palette={colors.tertiary} title="Tertiary/Accent Colors" />
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Neutral Colors</h3>
        <p className="mb-6">
          Neutral colors are used for text, backgrounds, borders, and other UI elements.
        </p>
        
        <ColorPalette palette={colors.neutral} title="Neutral Palette" />
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
        <p className="mb-6">
          Semantic colors convey meaning and provide visual cues for different types of information.
        </p>
        
        <ColorPalette palette={colors.semantic.success} title="Success" />
        <ColorPalette palette={colors.semantic.info} title="Information" />
        <ColorPalette palette={colors.semantic.warning} title="Warning" />
        <ColorPalette palette={colors.semantic.error} title="Error" />
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Usage Guidelines</h3>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2">Accessibility</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>All text colors maintain a minimum contrast ratio of 4.5:1 against their backgrounds (WCAG AA)</li>
            <li>Interactive elements use color along with other visual indicators (like borders or underlines)</li>
            <li>Critical information is never conveyed by color alone</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2">Do's and Don'ts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-md p-4">
              <h5 className="font-medium text-success-500 mb-2">Do</h5>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Use primary colors for primary actions and key interactive elements</li>
                <li>Use semantic colors consistently to maintain clear meaning</li>
                <li>Apply neutral colors for most UI surfaces and text</li>
                <li>Maintain adequate contrast between text and background</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-md p-4">
              <h5 className="font-medium text-error-500 mb-2">Don't</h5>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Use semantic colors for non-semantic purposes</li>
                <li>Overuse bright or saturated colors</li>
                <li>Create custom colors outside the system without consulting the design team</li>
                <li>Use colors that don't meet accessibility requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ColorTokens: Story = {
  render: () => <ColorSystem />,
};