/**
 * Color System
 * 
 * This file defines the color tokens for the design system.
 * All colors are WCAG compliant and support both light and dark themes.
 */

// Primary Colors
export const primary = {
  50: '#E6F0FF',
  100: '#CCE0FF',
  200: '#99C2FF',
  300: '#66A3FF',
  400: '#3385FF',
  500: '#0066FF', // Main primary color
  600: '#0052CC', // Darker shade for hover states
  700: '#003D99',
  800: '#002966',
  900: '#001433',
};

// Secondary Colors
export const secondary = {
  50: '#F3F0FF',
  100: '#E5DEFF',
  200: '#C8BDFF',
  300: '#A899FF',
  400: '#8A75FF',
  500: '#6554C0', // Main secondary color
  600: '#5243AA', // Darker shade for hover states
  700: '#403294',
  800: '#2A1F73',
  900: '#150F40',
};

// Tertiary Colors (Accent)
export const tertiary = {
  50: '#E6FCFF',
  100: '#B3F5FF',
  200: '#79EEFF',
  300: '#33DDFF',
  400: '#00C7E5',
  500: '#00B8D9', // Main accent color
  600: '#0093B8', // Darker shade for hover states
  700: '#007396',
  800: '#004D66',
  900: '#002633',
};

// Neutral Colors
export const neutral = {
  50: '#F9FAFB',  // Lightest background
  100: '#F4F5F7', // Light background
  200: '#EBECF0', // Border light
  300: '#DFE1E6', // Border
  400: '#C1C7D0', // Border dark
  500: '#97A0AF', // Subtle text
  600: '#6B778C', // Subtle icon
  700: '#42526E', // Secondary text
  800: '#253858', // Text
  900: '#091E42', // Heading text
};

// Semantic Colors
export const semantic = {
  success: {
    50: '#E3FCEF',
    100: '#ABF5D1',
    200: '#79F2C0',
    300: '#57D9A3',
    400: '#36B37E', // Base success
    500: '#00875A', // Darker success
    600: '#006644', // Darkest success
  },
  info: {
    50: '#DEEBFF',
    100: '#B3D4FF',
    200: '#4C9AFF',
    300: '#2684FF',
    400: '#0065FF', // Base info
    500: '#0052CC', // Darker info
    600: '#0747A6', // Darkest info
  },
  warning: {
    50: '#FFFAE6',
    100: '#FFF0B3',
    200: '#FFE380',
    300: '#FFC400',
    400: '#FFAB00', // Base warning
    500: '#FF8B00', // Darker warning
    600: '#FF5630', // Darkest warning
  },
  error: {
    50: '#FFEBE6',
    100: '#FFBDAD',
    200: '#FF8F73',
    300: '#FF7452',
    400: '#FF5630', // Base error
    500: '#DE350B', // Darker error
    600: '#BF2600', // Darkest error
  },
};

// Theme definitions
export const lightTheme = {
  background: {
    default: '#FFFFFF',
    surface: '#F9FAFB',
    surfaceRaised: '#FFFFFF',
    surfaceSunken: '#F4F5F7',
  },
  text: {
    primary: neutral[900],
    secondary: neutral[700],
    tertiary: neutral[600],
    disabled: neutral[500],
    inverse: '#FFFFFF',
  },
  border: {
    default: neutral[300],
    strong: neutral[400],
    light: neutral[200],
  }
};

export const darkTheme = {
  background: {
    default: '#1A202C',
    surface: '#2D3748',
    surfaceRaised: '#4A5568',
    surfaceSunken: '#171923',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#E2E8F0',
    tertiary: '#A0AEC0',
    disabled: '#718096',
    inverse: neutral[900],
  },
  border: {
    default: '#4A5568',
    strong: '#718096',
    light: '#2D3748',
  }
};

// Collection of all color tokens
export const colors = {
  primary,
  secondary,
  tertiary,
  neutral,
  semantic,
  light: lightTheme,
  dark: darkTheme,
};

export default colors;