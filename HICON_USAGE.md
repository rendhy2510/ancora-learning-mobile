# Hicon Icons Integration

This project uses [Hicon](https://hicon.me/) - a web-friendly icon pack.

## Usage

### Method 1: Using the Hicon Component (Recommended)

```tsx
import Hicon from "@/components/Hicon";

// Basic usage
<Hicon name="home" />

// With custom className
<Hicon name="arrow-right" className="text-blue-500" />

// With custom size
<Hicon name="user" size={24} />
```

### Method 2: Using HTML directly

```tsx
<i load-hicon="home"></i>
<i load-hicon="arrow-right"></i>
<i load-hicon="user"></i>
```

## Available Icons

Browse all available icons at: https://hicon.me/

Common icons include:

- `home`
- `user`
- `settings`
- `search`
- `bell` (notifications)
- `arrow-right`, `arrow-left`, `arrow-up`, `arrow-down`
- `check`, `x` (close)
- `menu`, `menu-alt`
- `heart`, `star`
- `calendar`, `clock`
- `mail`, `phone`
- `book`, `bookmark`
- `chart`, `trending-up`
- And many more...

## How It Works

The Hicon library is loaded via CDN in the `HiconProvider` component and automatically replaces all `<i load-hicon="...">` tags with the corresponding SVG icons.

## Styling

You can style Hicon icons using standard CSS classes:

```tsx
<Hicon name="home" className="w-6 h-6 text-primary-900" />
<Hicon name="user" className="text-gray-600 hover:text-primary-900" />
```

## Resources

- Official Website: https://hicon.me/
- GitHub Repository: https://github.com/coswise/hicon
- Figma Source: Available on the official website
