# Portfolio Website - API Documentation

## Table of Contents
1. [Overview](#overview)
2. [Utility Functions](#utility-functions)
3. [UI Components](#ui-components)
4. [Custom Components](#custom-components)
5. [Page Components](#page-components)
6. [Main App Structure](#main-app-structure)
7. [Usage Examples](#usage-examples)
8. [Props Reference](#props-reference)

---

## Overview

This is a modern React portfolio website built with Vite, featuring animated UI components, smooth scrolling, and responsive design. The project uses Tailwind CSS for styling, Framer Motion for animations, and various UI libraries for enhanced user experience.

### Technologies Used
- **React 18.3.1** - Main framework
- **Vite 6.0.1** - Build tool
- **Tailwind CSS 3.4.17** - Styling
- **Framer Motion 11.15.0** - Animations
- **React Router DOM 7.1.1** - Routing
- **Radix UI** - Component primitives
- **Lucide React** - Icons

---

## Utility Functions

### `cn(...inputs)`
**Location:** `src/lib/utils.js`

A utility function that combines class names using `clsx` and `tailwind-merge` for optimal CSS class handling.

**Parameters:**
- `...inputs` (string | object | array): CSS class names to merge

**Returns:** `string` - Merged CSS class names

**Example:**
```javascript
import { cn } from "@/lib/utils";

const className = cn(
  "base-class",
  condition && "conditional-class",
  { "object-class": true }
);
```

---

## UI Components

### Button Component
**Location:** `src/components/ui/button.jsx`

A versatile button component with multiple variants and sizes.

**Props:**
- `variant` (string): Button style variant
  - `default` - Primary button style
  - `destructive` - Danger/delete button style
  - `outline` - Outlined button style
  - `secondary` - Secondary button style
  - `ghost` - Transparent button style
  - `link` - Link-styled button
- `size` (string): Button size
  - `default` - Standard size (h-10 px-4 py-2)
  - `sm` - Small size (h-9 px-3)
  - `lg` - Large size (h-11 px-8)
  - `icon` - Icon button (h-10 w-10)
- `asChild` (boolean): Render as child component using Slot
- `className` (string): Additional CSS classes
- `...props`: Standard HTML button props

**Example:**
```jsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

### Card Components
**Location:** `src/components/ui/card.jsx`

A collection of card components for structured content display.

**Components:**
- `Card` - Main card container
- `CardHeader` - Card header section
- `CardTitle` - Card title
- `CardDescription` - Card description
- `CardContent` - Card main content
- `CardFooter` - Card footer section

**Props (all components):**
- `className` (string): Additional CSS classes
- `...props`: Standard HTML div props

**Example:**
```jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Badge Component
**Location:** `src/components/ui/badge.jsx`

A small label component for displaying status or categories.

**Props:**
- `variant` (string): Badge style variant
  - `default` - Primary badge style
  - `secondary` - Secondary badge style
  - `destructive` - Danger badge style
  - `outline` - Outlined badge style
- `className` (string): Additional CSS classes
- `...props`: Standard HTML div props

**Example:**
```jsx
import { Badge } from "@/components/ui/badge";

<Badge variant="default">New</Badge>
<Badge variant="outline">Status</Badge>
```

### Tooltip Components
**Location:** `src/components/ui/tooltip.jsx`

Tooltip components for displaying contextual information.

**Components:**
- `TooltipProvider` - Provides tooltip context
- `Tooltip` - Main tooltip wrapper
- `TooltipTrigger` - Element that triggers tooltip
- `TooltipContent` - Tooltip content container

**Example:**
```jsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### FlipWords Component
**Location:** `src/components/ui/flip-words.jsx`

An animated text component that cycles through different words with smooth transitions.

**Props:**
- `words` (array): Array of strings to cycle through
- `duration` (number): Duration in milliseconds between word changes (default: 3000)
- `className` (string): Additional CSS classes

**Example:**
```jsx
import { FlipWords } from "@/components/ui/flip-words";

const words = ["Developer", "Designer", "Creator"];

<FlipWords words={words} duration={2000} className="text-blue-400" />
```

### SparklesText Component
**Location:** `src/components/ui/sparkles-text.jsx`

An animated text component with sparkle effects.

**Props:**
- `text` (string): Text to display
- `colors` (object): Color configuration
  - `first` (string): First sparkle color (default: "#9E7AFF")
  - `second` (string): Second sparkle color (default: "#FE8BBB")
- `sparklesCount` (number): Number of sparkles (default: 10)
- `className` (string): Additional CSS classes

**Example:**
```jsx
import SparklesText from "@/components/ui/sparkles-text";

<SparklesText 
  text="Hello World" 
  colors={{ first: "#ff6b6b", second: "#4ecdc4" }}
  sparklesCount={15}
/>
```

### Meteors Component
**Location:** `src/components/ui/meteors.jsx`

A background animation component that creates falling meteor effects.

**Props:**
- `number` (number): Number of meteors to display (default: 20)

**Example:**
```jsx
import Meteors from "@/components/ui/meteors";

<div className="relative">
  <Meteors number={10} />
  <div>Your content here</div>
</div>
```

### IconCloud Component
**Location:** `src/components/ui/icon-cloud.jsx`

A 3D rotating cloud of icons using react-icon-cloud.

**Props:**
- `iconSlugs` (array): Array of icon slugs from Simple Icons
- `imageArray` (array): Array of custom image URLs

**Example:**
```jsx
import IconCloud from "@/components/ui/icon-cloud";

const iconSlugs = ["react", "javascript", "typescript", "nodejs"];

<IconCloud iconSlugs={iconSlugs} />
```

### EvervaultCard Component
**Location:** `src/components/ui/evervault-card.jsx`

An animated card component with encrypted text effect.

**Props:**
- `text` (string): Text to display
- `className` (string): Additional CSS classes

### CoolMode Component
**Location:** `src/components/ui/cool-mode.jsx`

A wrapper component that adds particle effects on click.

**Props:**
- `children` (ReactNode): Child components to wrap
- `options` (object): Configuration options for particle effects

### EducationLoader Component
**Location:** `src/components/ui/EducationLoader.jsx`

A loading spinner component specifically designed for education section.

**Props:**
- `className` (string): Additional CSS classes

---

## Custom Components

### EnhancedPortfolioCard
**Location:** `src/components/enhanced-portfolio-card.jsx`

A comprehensive portfolio card component with animations and interactive elements.

**Features:**
- Animated background with particles
- Profile image with rotating border
- Interactive hover effects
- Gradient text styling
- Tooltip integration

**Props:**
- No props required - self-contained component

**Example:**
```jsx
import EnhancedPortfolioCard from "@/components/enhanced-portfolio-card";

<EnhancedPortfolioCard />
```

### AnimatedGrid Component
**Location:** `src/components/AnimatedGrid.jsx`

A background grid animation component.

**Props:**
- `className` (string): Additional CSS classes

### Globe Component
**Location:** `src/components/globe.jsx`

A 3D globe component with technology icons.

**Props:**
- `className` (string): Additional CSS classes

---

## Page Components

### Hero Component
**Location:** `src/pages/Hero/Hero.jsx`

The main hero section with animated text, code window, and background effects.

**Features:**
- Animated text with FlipWords component
- Syntax-highlighted code display
- Grid background animation
- Meteors effect
- Responsive design with specific handling for 1366x768 resolution

**Props:**
- No props required - self-contained component

**Example:**
```jsx
import Hero from "@/pages/Hero/Hero";

<Hero />
```

### Skills Component
**Location:** `src/pages/Skills/Skills.jsx`

A skills showcase section with categorized skill cards and icon cloud.

**Features:**
- Categorized skill display
- Interactive skill cards with hover effects
- Icon cloud integration
- Responsive grid layout

**Props:**
- No props required - self-contained component

**Skills Categories:**
- Frontend Development
- Backend Development
- UI/UX Design
- Cloud & DevOps
- Tools & Technologies
- Creative Skills

### Projects Component
**Location:** `src/pages/Projects/Projects.jsx`

A projects showcase with smooth scrolling and scale animations.

**Features:**
- Smooth scrolling with Lenis
- Scale animations on scroll
- Interactive project cards
- GitHub and live demo links
- Responsive design

**Props:**
- No props required - self-contained component

**Project Data Structure:**
```javascript
{
  title: "Project Title",
  description: "Project Description",
  src: "image.jpg",
  link: "preview-image-url",
  color: "#hexcolor",
  githubLink: "github-url",
  liveLink: "live-demo-url"
}
```

### Header Component
**Location:** `src/pages/Header/Header.jsx`

Navigation header component with routing links.

### Experience Component
**Location:** `src/pages/Experience/Experience.jsx`

Professional experience showcase section.

### Education Component
**Location:** `src/pages/Education/Education.jsx`

Educational background display section.

### Contact Component
**Location:** `src/pages/Contact/Contact.jsx`

Contact information and form section.

---

## Main App Structure

### App Component
**Location:** `src/App.jsx`

The main application component handling routing and layout.

**Features:**
- React Router integration
- Conditional rendering (one-page vs multi-page mode)
- State management for page mode toggle

**State:**
- `isOnePage` (boolean): Controls rendering mode

**Routes:**
- `/` - Hero page
- `/skills` - Skills page
- `/experience` - Experience page
- `/education` - Education page
- `/contact` - Contact page
- `/projects` - Projects page

### Main Entry Point
**Location:** `src/main.jsx`

Application entry point with React Router setup.

**Features:**
- React StrictMode enabled
- BrowserRouter configuration
- DOM rendering setup

---

## Usage Examples

### Basic Component Usage

```jsx
// Import required components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Use in your component
function MyComponent() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Badge variant="default">Featured</Badge>
          <h2 className="text-xl font-bold">My Project</h2>
        </div>
        <p className="mt-4 text-gray-600">Project description here</p>
        <Button className="mt-4" variant="default">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
```

### Animation Component Usage

```jsx
// Import animation components
import { FlipWords } from "@/components/ui/flip-words";
import SparklesText from "@/components/ui/sparkles-text";
import Meteors from "@/components/ui/meteors";

function AnimatedSection() {
  const words = ["Developer", "Designer", "Creator"];
  
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background meteors */}
      <Meteors number={15} />
      
      {/* Animated text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <SparklesText text="Hello" className="text-6xl mb-4" />
        <FlipWords words={words} className="text-2xl text-blue-400" />
      </div>
    </div>
  );
}
```

### Tooltip Usage

```jsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

function TooltipExample() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for info</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a helpful tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

---

## Props Reference

### Common Props Pattern

Most components follow these common patterns:

**Standard Props:**
- `className` (string): Additional CSS classes
- `children` (ReactNode): Child components
- `...props`: Spread remaining props to the underlying element

**Variant Props:**
- `variant` (string): Component style variant
- `size` (string): Component size option

**Animation Props:**
- `duration` (number): Animation duration in milliseconds
- `delay` (number): Animation delay in milliseconds

### Component-Specific Props

**FlipWords:**
- `words` (array): Required array of strings
- `duration` (number): Time between word changes

**SparklesText:**
- `text` (string): Required text to display
- `colors` (object): Color configuration
- `sparklesCount` (number): Number of sparkles

**Meteors:**
- `number` (number): Number of meteors

**IconCloud:**
- `iconSlugs` (array): Simple Icons slugs
- `imageArray` (array): Custom image URLs

**Button:**
- `variant` (enum): default | destructive | outline | secondary | ghost | link
- `size` (enum): default | sm | lg | icon
- `asChild` (boolean): Render as child component

**Badge:**
- `variant` (enum): default | secondary | destructive | outline

---

## Development Notes

### Performance Considerations

1. **Lazy Loading**: Consider lazy loading for heavy components
2. **Memoization**: Use React.memo for expensive re-renders
3. **Animation Optimization**: Framer Motion components are optimized but monitor performance

### Accessibility

1. **Keyboard Navigation**: All interactive components support keyboard navigation
2. **ARIA Labels**: Components include appropriate ARIA attributes
3. **Screen Reader Support**: Text alternatives provided for visual elements

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Specific optimizations for 1366x768 resolution

### Customization

All components can be customized through:
- CSS classes via `className` prop
- CSS custom properties for colors and spacing
- Tailwind CSS configuration
- Component variant system

---

## Contributing

When adding new components:

1. Follow the existing component structure
2. Include proper TypeScript definitions
3. Add comprehensive prop validation
4. Include usage examples
5. Update this documentation

---

## License

MIT License - See LICENSE file for details