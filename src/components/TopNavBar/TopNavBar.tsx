import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../design-system/theme/ThemeContext';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  items?: NavItem[];
}

export interface TopNavBarProps {
  logo?: React.ReactNode;
  items: NavItem[];
  rightItems?: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'transparent';
  showThemeToggle?: boolean;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  logo,
  items,
  rightItems,
  className = '',
  variant = 'solid',
  showThemeToggle = true,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { mode, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const navbarClasses = {
    solid: 'bg-white dark:bg-neutral-900 shadow-md',
    transparent: 'bg-transparent',
  };

  return (
    <nav className={`
      w-full py-2 px-4 lg:px-8
      ${navbarClasses[variant]}
      ${className}
    `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo and left navigation */}
          <div className="flex items-center">
            {logo && (
              <div className="flex-shrink-0">
                {logo}
              </div>
            )}
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              {items.map((item) => (
                item.items ? (
                  <div key={item.id} className="relative">
                    <button
                      className={`
                        inline-flex items-center px-3 py-2 rounded
                        text-neutral-700 dark:text-neutral-200
                        hover:text-primary-600 dark:hover:text-primary-400
                        hover:bg-neutral-100 dark:hover:bg-neutral-800
                        focus:outline-none focus:ring-2 focus:ring-primary-500
                        transition-colors duration-250
                      `}
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown 
                        className={`
                          ml-1 h-4 w-4 transition-transform duration-250
                          ${activeDropdown === item.id ? 'transform rotate-180' : ''}
                        `}
                      />
                    </button>
                    
                    {/* Dropdown menu */}
                    {activeDropdown === item.id && (
                      <div className="
                        absolute z-10 mt-1 w-48 rounded-md shadow-lg
                        bg-white dark:bg-neutral-800
                        border border-neutral-200 dark:border-neutral-700
                      ">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.id}
                              href={subItem.href || '#'}
                              className="
                                block px-4 py-2 text-sm
                                text-neutral-700 dark:text-neutral-200
                                hover:bg-neutral-100 dark:hover:bg-neutral-700
                                hover:text-primary-600 dark:hover:text-primary-400
                                transition-colors duration-250
                              "
                              role="menuitem"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.id}
                    href={item.href || '#'}
                    className="
                      px-3 py-2 rounded
                      text-neutral-700 dark:text-neutral-200
                      hover:text-primary-600 dark:hover:text-primary-400
                      hover:bg-neutral-100 dark:hover:bg-neutral-800
                      transition-colors duration-250
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                    "
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>
          
          {/* Right items and theme toggle */}
          <div className="flex items-center">
            {rightItems && (
              <div className="hidden md:flex items-center">
                {rightItems}
              </div>
            )}
            
            {showThemeToggle && (
              <button
                className="
                  p-2 ml-4 rounded-full
                  text-neutral-500 dark:text-neutral-400
                  hover:text-primary-600 dark:hover:text-primary-400
                  hover:bg-neutral-100 dark:hover:bg-neutral-800
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  transition-colors duration-250
                "
                onClick={toggleTheme}
                aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} theme`}
              >
                {mode === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            )}
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="
                  p-2 ml-2 rounded-md
                  text-neutral-500 dark:text-neutral-400
                  hover:text-primary-600 dark:hover:text-primary-400
                  hover:bg-neutral-100 dark:hover:bg-neutral-800
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                  transition-colors duration-250
                "
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="
            px-2 pt-2 pb-3 space-y-1
            border-t border-neutral-200 dark:border-neutral-700
          ">
            {items.map((item) => (
              <React.Fragment key={item.id}>
                {item.items ? (
                  <div>
                    <button
                      className="
                        flex justify-between items-center w-full
                        px-3 py-2 rounded
                        text-neutral-700 dark:text-neutral-200
                        hover:text-primary-600 dark:hover:text-primary-400
                        hover:bg-neutral-100 dark:hover:bg-neutral-800
                        transition-colors duration-250
                        focus:outline-none focus:ring-2 focus:ring-primary-500
                      "
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`
                          h-4 w-4 transition-transform duration-250
                          ${activeDropdown === item.id ? 'transform rotate-180' : ''}
                        `}
                      />
                    </button>
                    
                    {activeDropdown === item.id && (
                      <div className="pl-4 mt-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.id}
                            href={subItem.href || '#'}
                            className="
                              block px-3 py-2 rounded
                              text-neutral-700 dark:text-neutral-200
                              hover:text-primary-600 dark:hover:text-primary-400
                              hover:bg-neutral-100 dark:hover:bg-neutral-800
                              transition-colors duration-250
                              focus:outline-none focus:ring-2 focus:ring-primary-500
                            "
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href || '#'}
                    className="
                      block px-3 py-2 rounded
                      text-neutral-700 dark:text-neutral-200
                      hover:text-primary-600 dark:hover:text-primary-400
                      hover:bg-neutral-100 dark:hover:bg-neutral-800
                      transition-colors duration-250
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                    "
                  >
                    {item.label}
                  </a>
                )}
              </React.Fragment>
            ))}
            
            {rightItems && (
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                {rightItems}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;