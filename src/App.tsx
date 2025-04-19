import React from 'react';
import { ThemeProvider } from './design-system/theme/ThemeContext';
import { Activity } from 'lucide-react';
import Accordion from './components/Accordion';
import TopNavBar from './components/TopNavBar';

// Sample navigation items
const navItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'components', label: 'Components', href: '#' },
  { 
    id: 'docs', 
    label: 'Documentation', 
    items: [
      { id: 'getting-started', label: 'Getting Started', href: '#' },
      { id: 'guides', label: 'Guides', href: '#' },
      { id: 'api', label: 'API Reference', href: '#' },
    ] 
  },
  { id: 'examples', label: 'Examples', href: '#' },
];

// Logo component
const Logo = () => (
  <div className="flex items-center text-primary-600 dark:text-primary-400">
    <Activity className="h-7 w-7 mr-2" />
    <span className="text-xl font-semibold">DesignSystem</span>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <TopNavBar
          logo={<Logo />}
          items={navItems}
        />
        
        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Enterprise Design System
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              A collection of reusable, accessible components built with React and TypeScript.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-100 mb-3">
                  Accordion
                </h3>
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4">
                  <Accordion defaultExpandedItems={['item-1']}>
                    <Accordion.Item
                      id="item-1"
                      title="What is this design system?"
                    >
                      <p className="text-neutral-700 dark:text-neutral-300">
                        This enterprise design system provides a collection of reusable, 
                        accessible components built with React and TypeScript. It includes
                        a comprehensive color system, typography, spacing, and components
                        designed for enterprise applications.
                      </p>
                    </Accordion.Item>
                    <Accordion.Item
                      id="item-2"
                      title="How do I use these components?"
                    >
                      <p className="text-neutral-700 dark:text-neutral-300 mb-2">
                        Import the components directly from their respective modules:
                      </p>
                      <pre className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded text-sm overflow-x-auto">
                        <code>{`import { Accordion, TopNavBar } from './components';`}</code>
                      </pre>
                    </Accordion.Item>
                    <Accordion.Item
                      id="item-3"
                      title="Are these components accessible?"
                    >
                      <p className="text-neutral-700 dark:text-neutral-300">
                        Yes, all components are built with accessibility in mind. They include
                        appropriate ARIA attributes, support keyboard navigation, and meet
                        WCAG 2.1 AA contrast requirements.
                      </p>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-100 mb-3">
                  Color System
                </h3>
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4">
                  <h4 className="font-medium mb-3">Primary Colors</h4>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    <div className="h-12 rounded bg-primary-100 dark:bg-primary-900"></div>
                    <div className="h-12 rounded bg-primary-300 dark:bg-primary-700"></div>
                    <div className="h-12 rounded bg-primary-500"></div>
                    <div className="h-12 rounded bg-primary-700 dark:bg-primary-300"></div>
                    <div className="h-12 rounded bg-primary-900 dark:bg-primary-100"></div>
                  </div>
                  
                  <h4 className="font-medium mb-3">Semantic Colors</h4>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-12 rounded bg-success-500 flex items-center justify-center text-white text-sm">Success</div>
                    <div className="h-12 rounded bg-info-500 flex items-center justify-center text-white text-sm">Info</div>
                    <div className="h-12 rounded bg-warning-500 flex items-center justify-center text-white text-sm">Warning</div>
                    <div className="h-12 rounded bg-error-500 flex items-center justify-center text-white text-sm">Error</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              Getting Started
            </h2>
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Visit our Storybook documentation to explore the components, see code examples,
                and learn how to use the design system in your project.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-250"
                >
                  View in Storybook
                </a>
                <a 
                  href="#" 
                  className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white rounded-md transition-colors duration-250"
                >
                  Read Documentation
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;