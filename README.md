<!-- Header Banner -->
<div align="center">
 <img src="./assets/landing-header.png" alt="OnePiece Odyssey Banner" />
  <h1>⚓ OnePiece Odyssey</h1>
  <p>An immersive One Piece experience brought to life with modern web technologies</p>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/github/last-commit/ansh-gajbhiye/OnePiece-Odyssey?color=blue&style=flat" alt="Last Commit">
    <img src="https://img.shields.io/github/repo-size/ansh-gajbhiye/OnePiece-Odyssey?color=success&style=flat" alt="Repo Size">
    <img src="https://img.shields.io/badge/license-MIT-orange?style=flat" alt="License">
  </p>
</div>

---

## 🌟 Features Preview

| Feature               | Preview                          | Description                                  |
|-----------------------|----------------------------------|----------------------------------------------|
| Animated Hero Section | ![Hero](./assets/screenshot-desktop.png) | Dynamic GSAP animations with parallax effects |
| Responsive Design     | ![Mobile](./assets/screenshot-mobile.png) | Mobile-first layout with touch optimization |
| Character Showcase    | ![Characters](./assets/character-showcase.png) | Interactive crew member profiles (NEW) |

---

## 🚀 Live Demo

Experience the Grand Line in your browser:  
[https://ansh-gajbhiye.github.io/OnePiece-Odyssey/](https://ansh-gajbhiye.github.io/OnePiece-Odyssey/)

---

## 🛠️ Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,tailwind,gsap,vite,github" />
</div>

| Technology       | Purpose                                |
|------------------|----------------------------------------|
| **React 18**     | Component-based UI architecture        |
| **Tailwind CSS** | Utility-first responsive styling       |
| **GSAP 3**       | Professional-grade animations          |
| **Vite 4**       | Lightning-fast development tooling     |
| **GitHub Pages** | Zero-config deployment                 |

---

## 🧭 Navigation System (New Feature)

```jsx
// Pirate-themed navigation component
const Navigation = () => (
  <nav className="bg-jolly-roger-red px-4 py-3 rounded-full shadow-lg">
    <ul className="flex space-x-6">
      {['Home', 'Crew', 'Ship', 'Map'].map((item) => (
        <li key={item}>
          <a 
            href={`#${item.toLowerCase()}`} 
            className="text-white font-pirate hover:text-yellow-300 transition"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
