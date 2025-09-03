# Tailwind CSS + React + Vite Template

A clean, modern template for React projects with Tailwind CSS v4 and Vite. This template eliminates the common setup headaches and gets you building beautiful UIs immediately.

## 🚀 Quick Start

### Use This Template

Click "Use this template" or clone directly:

```bash
git clone https://github.com/Grizak/tailwind-react-vite-template.git my-project
cd my-project
npm install
npm run dev
```

### What's Included

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React with modern features
- 🎨 **Tailwind CSS v4** - Latest utility-first CSS framework
- 🔧 **PostCSS** - Seamless CSS processing
- 📦 **All configured** - Ready to use, no setup required

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main app component
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # React entry point
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 🎯 Key Features

### Single Command Development

```bash
npm run dev
```

No need to manage multiple terminal windows or separate build processes. Everything runs together with hot reload.

### Production Ready

```bash
npm run build
```

Automatically purges unused CSS and optimizes for production. Your final bundle only includes the Tailwind classes you actually use.

### Modern Tailwind v4

This template uses Tailwind CSS v4 with the latest features and improved performance.

## 🔧 Configuration Details

### Tailwind v4 Setup

Unlike v3, Tailwind v4 uses a streamlined setup:

**postcss.config.js**

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

**src/index.css**

```css
@import "tailwindcss";
```

### Content Configuration

The template is configured to scan all your React files:

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🎨 Example Usage

The template includes a sample component demonstrating various Tailwind features:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Hello Tailwind!
        </h1>
        <p className="text-gray-600 mb-6">Your template is ready to use!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}
```

## 🆚 Tailwind v3 vs v4

If you're familiar with Tailwind v3, here are the key differences in v4:

| Feature        | v3                                                           | v4                           |
| -------------- | ------------------------------------------------------------ | ---------------------------- |
| CSS Import     | `@tailwind base; @tailwind components; @tailwind utilities;` | `@import "tailwindcss";`     |
| PostCSS Plugin | `tailwindcss: {}`                                            | `"@tailwindcss/postcss": {}` |
| Performance    | Good                                                         | Improved                     |
| Setup          | More complex                                                 | Streamlined                  |

## 🛠️ Customization

### Adding Custom Styles

Extend the theme in `tailwind.config.js`:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1e40af",
      },
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

### Adding Tailwind Plugins

```bash
npm install @tailwindcss/forms
```

```javascript
// tailwind.config.js
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
```

## 📚 Helpful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 🐛 Troubleshooting

### Styles Not Applying?

1. Check that classes are spelled correctly
2. Ensure `src/index.css` is imported in `main.jsx`
3. Restart the dev server: `npm run dev`

### Need to Switch to Tailwind v3?

```bash
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
```

Then update your configs to use v3 syntax.

## 🤝 Contributing

Found an issue or want to improve the template? Pull requests are welcome!

## 📄 License

This template is available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉

Start building beautiful UIs with Tailwind CSS without the setup headaches.
