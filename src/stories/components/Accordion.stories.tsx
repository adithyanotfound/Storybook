import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../components/Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be open simultaneously',
    },
    defaultExpandedItems: {
      control: 'array',
      description: 'Array of item IDs that should be expanded by default',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the accordion container',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    defaultExpandedItems: ['item-1'],
    children: (
      <>
        <Accordion.Item
          id="item-1"
          title="What is an accordion component?"
        >
          <p>
            An accordion component is a UI element that allows users to toggle the visibility of content sections.
            It's useful for compressing information and giving users control over what they want to read.
          </p>
        </Accordion.Item>
        <Accordion.Item
          id="item-2"
          title="How do I use this component?"
        >
          <p>
            Import the Accordion component and use it with Accordion.Item children.
            Each item requires a unique id and title prop. The content goes inside the Accordion.Item.
          </p>
          <pre className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded mt-2 overflow-x-auto">
            <code>{`<Accordion>
  <Accordion.Item id="item-1" title="Title">
    Content goes here
  </Accordion.Item>
</Accordion>`}</code>
          </pre>
        </Accordion.Item>
        <Accordion.Item
          id="item-3"
          title="Can I customize the styling?"
        >
          <p>
            Yes, you can customize the styling using the className, headerClassName, 
            and contentClassName props on both the Accordion and Accordion.Item components.
          </p>
        </Accordion.Item>
      </>
    ),
  },
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    defaultExpandedItems: ['item-1', 'item-2'],
    children: (
      <>
        <Accordion.Item
          id="item-1"
          title="First Section"
        >
          <p>This is the content for the first section.</p>
        </Accordion.Item>
        <Accordion.Item
          id="item-2"
          title="Second Section"
        >
          <p>This is the content for the second section.</p>
        </Accordion.Item>
        <Accordion.Item
          id="item-3"
          title="Third Section"
        >
          <p>This is the content for the third section.</p>
        </Accordion.Item>
      </>
    ),
  },
};

export const WithDisabledItem: Story = {
  args: {
    children: (
      <>
        <Accordion.Item
          id="item-1"
          title="Available Section"
        >
          <p>This section is available for interaction.</p>
        </Accordion.Item>
        <Accordion.Item
          id="item-2"
          title="Disabled Section"
          disabled={true}
        >
          <p>This section is disabled and cannot be toggled.</p>
        </Accordion.Item>
        <Accordion.Item
          id="item-3"
          title="Another Available Section"
        >
          <p>This section is also available for interaction.</p>
        </Accordion.Item>
      </>
    ),
  },
};

export const WithRichContent: Story = {
  args: {
    children: (
      <>
        <Accordion.Item
          id="item-1"
          title={
            <div className="flex items-center">
              <span className="h-4 w-4 rounded-full bg-primary-500 mr-2"></span>
              <span>Rich Title with Icon</span>
            </div>
          }
        >
          <div>
            <h4 className="font-medium mb-2">Rich content can include headers</h4>
            <p className="mb-2">And paragraphs with detailed information.</p>
            <ul className="list-disc pl-5 mb-2">
              <li>List items</li>
              <li>Can be included</li>
              <li>For better organization</li>
            </ul>
            <button className="bg-primary-500 text-white px-4 py-2 rounded">
              Even buttons
            </button>
          </div>
        </Accordion.Item>
        <Accordion.Item
          id="item-2"
          title="Form Elements Example"
        >
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email"
                className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="button"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
            >
              Submit
            </button>
          </form>
        </Accordion.Item>
      </>
    )
  }
};

export const CustomStyling: Story = {
  args: {
    className: "max-w-md mx-auto",
    children: (
      <>
        <Accordion.Item
          id="item-1"
          title="Custom Header Styling"
          headerClassName="bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800"
        >
          <p>This accordion item has custom header styling.</p>
        </Accordion.Item>
        <Accordion.Item
          id="item-2"
          title="Custom Content Styling"
          contentClassName="bg-secondary-50 dark:bg-secondary-900 text-secondary-900 dark:text-secondary-50"
        >
          <p>This accordion item has custom content styling.</p>
        </Accordion.Item>
        <Accordion.Item
          id="item-3"
          title="Custom Icon Styling"
          iconClassName="text-tertiary-500"
        >
          <p>This accordion item has custom icon styling.</p>
        </Accordion.Item>
      </>
    ),
  },
};

export const AccordionDocs: Story = {
  render: () => (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Accordion Component</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          The Accordion component allows users to toggle between showing and hiding sections of content.
          It's useful for organizing information in a compact way, allowing users to focus on specific content.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Props / API</h2>
        
        <h3 className="font-medium mt-4 mb-2">Accordion</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-100 dark:bg-neutral-800">
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Prop</th>
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Type</th>
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Default</th>
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">children</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">ReactNode</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">-</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Accordion.Item components</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">defaultExpandedItems</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string[]</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">[]</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">IDs of items that should be expanded by default</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">allowMultiple</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">boolean</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">false</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Allow multiple items to be expanded simultaneously</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">className</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">''</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Additional CSS class for the accordion container</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="font-medium mt-4 mb-2">Accordion.Item</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-100 dark:bg-neutral-800">
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Prop</th>
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Type</th>
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Default</th>
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">id</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">-</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Unique identifier for the accordion item</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">title</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">ReactNode</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">-</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Content for the accordion header</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">children</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">ReactNode</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">-</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Content for the accordion panel</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">disabled</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">boolean</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">false</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Whether the accordion item is disabled</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">className</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">''</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Additional CSS class for the item container</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">headerClassName</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">''</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Additional CSS class for the header</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">contentClassName</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">''</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Additional CSS class for the content panel</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">iconClassName</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">''</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Additional CSS class for the toggle icon</td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>FAQs</strong> - Display a list of frequently asked questions and their answers.</li>
          <li><strong>Product Details</strong> - Organize product information into collapsible sections.</li>
          <li><strong>Form Sections</strong> - Break up complex forms into manageable sections.</li>
          <li><strong>Settings</strong> - Organize settings into categories that can be expanded/collapsed.</li>
          <li><strong>Navigation</strong> - Create nested navigation menus with expandable sections.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Anatomy / Structure</h2>
        <div className="border border-neutral-300 dark:border-neutral-700 rounded p-4 mb-4">
          <pre className="whitespace-pre-wrap">
{`Accordion (Container)
├── AccordionItem
│   ├── Header
│   │   ├── Title
│   │   └── Icon (ChevronDown)
│   └── Panel (Content)
├── AccordionItem
│   ├── ...
└── ...`}
          </pre>
        </div>
        <p>
          The Accordion component serves as a container for multiple AccordionItem components.
          Each AccordionItem has a header with a title and icon, and a panel that contains the content.
          The header is clickable and toggles the visibility of the panel.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">States & Variants</h2>
        
        <h3 className="font-medium mt-4 mb-2">States</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Collapsed</strong> - The default state where the content is hidden.</li>
          <li><strong>Expanded</strong> - The state where the content is visible.</li>
          <li><strong>Disabled</strong> - The accordion item cannot be interacted with.</li>
          <li><strong>Focus</strong> - Visual indicator when the header has keyboard focus.</li>
          <li><strong>Hover</strong> - Visual feedback when the mouse hovers over the header.</li>
        </ul>
        
        <h3 className="font-medium mt-4 mb-2">Variants</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Default</strong> - Only one item can be expanded at a time.</li>
          <li><strong>Multi-Expand</strong> - Multiple items can be expanded simultaneously.</li>
          <li><strong>Custom Styling</strong> - Customizable header, content, and icon styles.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Interaction Behavior</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Clicking on the header toggles the visibility of the content panel.</li>
          <li>When `allowMultiple` is false, opening one item will close any currently open item.</li>
          <li>When `allowMultiple` is true, multiple items can be open simultaneously.</li>
          <li>The header can receive focus through tabbing and can be activated with Enter or Space.</li>
          <li>Disabled items cannot be interacted with via mouse or keyboard.</li>
          <li>The icon rotates 180 degrees when the item is expanded, providing visual feedback.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Accessibility Notes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Uses proper ARIA attributes to communicate state to assistive technologies:
            <ul className="list-disc pl-5 mt-1">
              <li>`aria-expanded` indicates whether the panel is expanded.</li>
              <li>`aria-controls` associates the header with the panel it controls.</li>
              <li>`aria-disabled` indicates when an item is disabled.</li>
              <li>The panel has `role="region"` to identify it as a section of content.</li>
              <li>`aria-labelledby` associates the panel with its header.</li>
            </ul>
          </li>
          <li>Focus management:
            <ul className="list-disc pl-5 mt-1">
              <li>Headers can receive keyboard focus.</li>
              <li>Visual focus indicators are provided for keyboard navigation.</li>
              <li>Header buttons can be activated using Space or Enter keys.</li>
            </ul>
          </li>
          <li>The expand/collapse animation is purely visual and doesn't interfere with accessibility.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Theming / Responsiveness Support</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Theming</strong>: The accordion supports both light and dark themes through the 
            Tailwind CSS dark mode classes.
          </li>
          <li>
            <strong>Customization</strong>: Header, content, and icon styles can be customized using
            the `className`, `headerClassName`, `contentClassName`, and `iconClassName` props.
          </li>
          <li>
            <strong>Responsiveness</strong>: The accordion is fully responsive and adapts to different
            screen sizes. The content expands to fill the available width, and the header remains
            usable on touch devices with adequate tap targets.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Do's and Don'ts / Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-neutral-300 dark:border-neutral-700 rounded p-4">
            <h3 className="font-medium text-success-500 mb-2">Do</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use clear, concise titles that describe the content of each section.</li>
              <li>Group related content together in the same accordion item.</li>
              <li>Consider using defaultExpandedItems for the most important or frequently accessed sections.</li>
              <li>Ensure there's adequate spacing around the accordion for better readability.</li>
              <li>Use accordions to progressively disclose complex information.</li>
              <li>Ensure the component is fully accessible via keyboard navigation.</li>
            </ul>
          </div>
          
          <div className="border border-neutral-300 dark:border-neutral-700 rounded p-4">
            <h3 className="font-medium text-error-500 mb-2">Don't</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Don't hide critical information that users need immediately in accordions.</li>
              <li>Don't nest accordions within accordions (creates complex interaction patterns).</li>
              <li>Don't use accordions for very little content that could simply be displayed.</li>
              <li>Don't use generic titles like "Click here" or "More information".</li>
              <li>Don't disable items without providing context about why they're disabled.</li>
              <li>Don't override the default interaction behavior without a good reason.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};