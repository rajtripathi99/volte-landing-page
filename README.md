# VOLTE - EV Charging Landing Page

A modern, high-performance landing page for an Electric Vehicle (EV) charging solution. This project showcases a fully responsive design with a clean aesthetic, featuring a bento grid layout and interactive elements.

## 🚀 Features

-   **Fully Responsive**: Optimized for Mobile (375px+), Tablet (768px+), and Desktop (1024px+) devices.
-   **Modern UI/UX**: clean typography (Inter font), whitespace utilization, and a premium "tech" feel.
-   **Interactive Elements**: Hover effects, mobile hamburger menu, and smooth layout transitions.
-   **Component-Based**: Modular architecture using React components.

## 🛠️ Tech Stack

-   **Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Icons**: [Lucide React](https://lucide.dev/) & [React Social Icons](https://jaketrent.github.io/react-social-icons/)
-   **Fonts**: Outfit (Google Fonts)

## 📂 Project Structure

```bash
src/
├── components/         # UI Components
│   ├── Navbar.tsx      # Responsive navigation with mobile menu
│   ├── Hero.tsx        # Hero section with headline and imagery
│   ├── FeatureCard.tsx # Reusable feature/stat cards
│   ├── BentoGrid.tsx   # Grid layout for primary content
│   ├── Features.tsx    # Statistical and feature highlights
│   ├── CTA.tsx         # Call to Action section
│   └── Footer.tsx      # Footer with links and social icons
├── App.tsx             # Main application entry
├── main.tsx            # React root
└── index.css           # Global styles and Tailwind directives
```

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/volte-landing-page.git
    cd volte-landing-page
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized static files in the `dist` directory.

## 🎨 Design Decisions

-   **Mobile-First**: The layout starts with a stacked mobile view and progressively enhances to multi-column layouts for tablets and desktops.
-   **Bento Grid**: Used to display information in a structured, easily scannable format.
-   **Typography**: "Outfit" font selected for high readability and a modern look.

## 📄 License

This project is licensed under the MIT License.
