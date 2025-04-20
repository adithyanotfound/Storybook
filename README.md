# Enterprise Design System

A modern, accessible design system built with React, TypeScript, and Tailwind CSS, showcased through Storybook.

## Features

- 🎨 Comprehensive color system with semantic colors
- 📱 Responsive components
- 🌗 Dark mode support
- ♿️ WCAG 2.1 AA compliant
- 📚 Storybook documentation
- 🧪 TypeScript support
- 🎯 Modular architecture

## Components

- `TopNavBar`: Responsive navigation bar with dropdown support
- `Accordion`: Collapsible content sections with keyboard navigation
- More components coming soon...

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Storybook
- Lucide Icons
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Build

```sh
# Build for production
npm run build

# Build Storybook
npm run build-storybook
```

## Project Structure

```
src/
├── components/         # React components
├── design-system/     # Design system tokens and theme
│   ├── theme/        # Theme context and utils
│   └── tokens/       # Design tokens (colors, typography, spacing)
├── stories/          # Storybook stories
└── App.tsx           # Main application
```

## Design Tokens

### Colors

- Primary: Brand colors
- Secondary: Supporting colors
- Tertiary: Accent colors
- Neutral: Grayscale
- Semantic: Success, Info, Warning, Error

### Typography

- Font Family: Inter (sans-serif)
- Font Sizes: From xs (0.75rem) to 5xl (3rem)
- Font Weights: Regular (400) to Bold (700)

### Spacing

8-point grid system from 0 to 32 (0rem to 8rem)

## Development

### Code Style

The project uses ESLint for code linting. Configuration can be found in `eslint.config.js`.

### Adding New Components

1. Create component in `src/components/`
2. Add TypeScript interfaces/types
3. Create Storybook story in `src/stories/`
4. Add tests if applicable
5. Update documentation

## Documentation

- Component documentation available in Storybook
- Run `npm run storybook` to view locally
- Each component includes:
  - Props documentation
  - Usage examples
  - Interactive playground
  - Accessibility guidelines

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.