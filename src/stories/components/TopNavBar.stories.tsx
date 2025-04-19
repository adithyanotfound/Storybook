import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Activity, User, Settings, Search, Bell } from 'lucide-react';
import TopNavBar from '../../components/TopNavBar';
import { ThemeProvider } from '../../design-system/theme/ThemeContext';

const meta = {
  title: 'Components/TopNavBar',
  component: TopNavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'transparent'],
      description: 'Visual style variant of the navigation bar',
    },
    showThemeToggle: {
      control: 'boolean',
      description: 'Whether to show the theme toggle button',
    },
  },
  decorators: [(Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )],
} satisfies Meta<typeof TopNavBar>;

export default meta;
type Story = StoryObj<typeof TopNavBar>;

// Sample navigation items
const sampleNavItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'features', label: 'Features', href: '#' },
  { 
    id: 'products', 
    label: 'Products', 
    items: [
      { id: 'prod-1', label: 'Enterprise', href: '#' },
      { id: 'prod-2', label: 'Small Business', href: '#' },
      { id: 'prod-3', label: 'Personal', href: '#' },
    ] 
  },
  { 
    id: 'services', 
    label: 'Services', 
    items: [
      { id: 'serv-1', label: 'Consulting', href: '#' },
      { id: 'serv-2', label: 'Implementation', href: '#' },
      { id: 'serv-3', label: 'Support', href: '#' },
    ] 
  },
  { id: 'about', label: 'About', href: '#' },
  { id: 'contact', label: 'Contact', href: '#' },
];

// Logo component
const Logo = () => (
  <div className="flex items-center text-primary-600 dark:text-primary-400">
    <Activity className="h-8 w-8 mr-2" />
    <span className="text-xl font-semibold">EnterpriseUI</span>
  </div>
);

// Right side items
const RightItems = () => (
  <div className="flex items-center space-x-2">
    <button className="p-2 rounded-full text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-250">
      <Search className="h-5 w-5" />
    </button>
    <button className="p-2 rounded-full text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-250">
      <Bell className="h-5 w-5" />
    </button>
    <button className="p-2 rounded-full text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-250">
      <User className="h-5 w-5" />
    </button>
    <button className="p-2 rounded-full text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-250">
      <Settings className="h-5 w-5" />
    </button>
  </div>
);

export const Default: Story = {
  args: {
    logo: <Logo />,
    items: sampleNavItems,
    rightItems: <RightItems />,
    variant: 'solid',
    showThemeToggle: true,
  },
};

export const Transparent: Story = {
  args: {
    logo: <Logo />,
    items: sampleNavItems,
    rightItems: <RightItems />,
    variant: 'transparent',
    showThemeToggle: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const MinimalNavigation: Story = {
  args: {
    logo: <Logo />,
    items: sampleNavItems.slice(0, 3),
    showThemeToggle: false,
  },
};

export const WithoutLogo: Story = {
  args: {
    items: sampleNavItems,
    rightItems: <RightItems />,
    showThemeToggle: true,
  },
};

export const WithoutRightItems: Story = {
  args: {
    logo: <Logo />,
    items: sampleNavItems,
    showThemeToggle: true,
  },
};

export const TopNavBarDocs: Story = {
  render: () => (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Top Navigation Bar Component</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          The TopNavBar component is a responsive navigation bar that provides access to main sections of an application.
          It supports a logo, navigation links, dropdowns, right-side items, and theme toggling.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Props / API</h2>
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
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">logo</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">ReactNode</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">undefined</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Logo element displayed at the left side</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">items</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">NavItem[]</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">-</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Navigation items to display</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">rightItems</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">ReactNode</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">undefined</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Additional items to display on the right side</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">className</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">string</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">''</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Additional CSS class for the nav element</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">variant</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">'solid' | 'transparent'</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">'solid'</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Visual style variant of the navigation bar</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">showThemeToggle</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">boolean</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">true</td>
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">Whether to show the theme toggle button</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="font-medium mt-4 mb-2">NavItem Interface</h3>
        <pre className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded mb-4 overflow-x-auto">
          <code>{`interface NavItem {
  id: string;
  label: string;
  href?: string;
  items?: NavItem[]; // For dropdown menus
}`}</code>
        </pre>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Main Application Navigation</strong> - Provide access to the main sections of an application.</li>
          <li><strong>Website Header</strong> - Use as the primary navigation for websites.</li>
          <li><strong>Dashboard Navigation</strong> - Navigation for admin dashboards and control panels.</li>
          <li><strong>Portal Navigation</strong> - Navigation for user portals with profile access.</li>
          <li><strong>Landing Page</strong> - Use with the transparent variant for hero sections.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Anatomy / Structure</h2>
        <div className="border border-neutral-300 dark:border-neutral-700 rounded p-4 mb-4">
          <pre className="whitespace-pre-wrap">
{`TopNavBar
├── Logo (optional)
├── Navigation Items
│   ├── Simple Link
│   └── Dropdown
│       ├── Trigger Button
│       └── Dropdown Menu
│           ├── Menu Item
│           ├── Menu Item
│           └── ...
├── Right Side Items (optional)
│   ├── Icon Button
│   ├── Icon Button
│   └── ...
└── Theme Toggle Button (optional)`}
          </pre>
        </div>
        <p>
          The TopNavBar consists of several key elements:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>A logo area at the far left (optional)</li>
          <li>Primary navigation links in the center-left</li>
          <li>Dropdown menus for links with sub-items</li>
          <li>Right-aligned action items (often icon buttons)</li>
          <li>A theme toggle button for switching between light and dark mode</li>
          <li>A hamburger menu for mobile that collapses all navigation</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">States & Variants</h2>
        
        <h3 className="font-medium mt-4 mb-2">States</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Default</strong> - The navigation bar in its default state.</li>
          <li><strong>Mobile Menu Open</strong> - The state where the mobile menu is expanded.</li>
          <li><strong>Dropdown Open</strong> - The state where a dropdown menu is visible.</li>
          <li><strong>Hover</strong> - Visual feedback when hovering over navigation items.</li>
          <li><strong>Focus</strong> - Visual indicator when navigation items have keyboard focus.</li>
        </ul>
        
        <h3 className="font-medium mt-4 mb-2">Variants</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Solid</strong> - A solid background with shadow for traditional navigation bars.</li>
          <li><strong>Transparent</strong> - A transparent background suitable for hero sections.</li>
          <li><strong>With/Without Logo</strong> - The navigation bar can be used with or without a logo.</li>
          <li><strong>With/Without Right Items</strong> - Additional items on the right side are optional.</li>
          <li><strong>With/Without Theme Toggle</strong> - The theme toggle button can be hidden if not needed.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Interaction Behavior</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Clicking on a navigation link navigates to the specified URL.</li>
          <li>Clicking on a dropdown trigger toggles the visibility of the dropdown menu.</li>
          <li>Clicking anywhere outside an open dropdown closes the dropdown.</li>
          <li>On mobile, clicking the hamburger menu toggles the mobile menu.</li>
          <li>Clicking the theme toggle button switches between light and dark mode.</li>
          <li>All interactive elements provide hover and focus states for better usability.</li>
          <li>Dropdown menus have expanded/collapsed states indicated by a rotating chevron icon.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Accessibility Notes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All interactive elements can be accessed via keyboard navigation (Tab key).</li>
          <li>Dropdown menus use appropriate ARIA attributes:
            <ul className="list-disc pl-5 mt-1">
              <li>`aria-expanded` indicates whether the dropdown is open.</li>
              <li>`aria-haspopup="true"` indicates that the button has a popup menu.</li>
            </ul>
          </li>
          <li>Mobile menu button has appropriate ARIA attributes:
            <ul className="list-disc pl-5 mt-1">
              <li>`aria-controls` identifies the element that is controlled by the button.</li>
              <li>`aria-expanded` indicates whether the mobile menu is open.</li>
              <li>An accessible name is provided via `aria-label` or screen-reader-only text.</li>
            </ul>
          </li>
          <li>Theme toggle button has an informative `aria-label` that changes with the current theme.</li>
          <li>Color contrast meets WCAG AA requirements for both light and dark themes.</li>
          <li>Menu items in dropdowns have the `role="menuitem"` attribute.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Theming / Responsiveness Support</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Theming</strong>: The navigation bar supports both light and dark themes through the 
            ThemeContext provider. Color schemes are applied consistently across all elements.
          </li>
          <li>
            <strong>Responsiveness</strong>: The component is fully responsive with:
            <ul className="list-disc pl-5 mt-1">
              <li>Desktop view: Full horizontal navigation with dropdowns</li>
              <li>Mobile view: Collapsible menu with a hamburger icon</li>
              <li>Breakpoint at medium screens (768px and above)</li>
              <li>Appropriate touch targets for mobile devices</li>
            </ul>
          </li>
          <li>
            <strong>Customization</strong>: The appearance can be customized using:
            <ul className="list-disc pl-5 mt-1">
              <li>The `variant` prop to choose between solid and transparent styles</li>
              <li>The `className` prop to add custom CSS classes</li>
              <li>ThemeContext for consistent light/dark mode support</li>
            </ul>
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Do's and Don'ts / Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-neutral-300 dark:border-neutral-700 rounded p-4">
            <h3 className="font-medium text-success-500 mb-2">Do</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Keep navigation labels short and descriptive.</li>
              <li>Limit the number of top-level navigation items (5-7 is ideal).</li>
              <li>Use dropdowns for grouping related navigation items.</li>
              <li>Ensure sufficient contrast between text and background.</li>
              <li>Make the logo clickable and link to the home page.</li>
              <li>Provide visual feedback for hover and focus states.</li>
              <li>Use familiar icons for common actions on the right side.</li>
            </ul>
          </div>
          
          <div className="border border-neutral-300 dark:border-neutral-700 rounded p-4">
            <h3 className="font-medium text-error-500 mb-2">Don't</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Don't overload the navigation with too many items.</li>
              <li>Don't use deeply nested dropdown menus (max 1 level deep).</li>
              <li>Don't use ambiguous or generic labels like "Click Here".</li>
              <li>Don't hide critical functionality in the mobile menu only.</li>
              <li>Don't use low-contrast color combinations for text and background.</li>
              <li>Don't change the order of items between desktop and mobile views.</li>
              <li>Don't use non-standard navigation patterns that might confuse users.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};