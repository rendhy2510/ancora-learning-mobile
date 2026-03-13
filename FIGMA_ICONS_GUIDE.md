# Menggunakan Icon dari Figma

File Figma: https://www.figma.com/community/file/1023171235158207826

## 📥 Cara Export Icon dari Figma

### Step 1: Buka File Figma

1. Klik link di atas untuk membuka file Figma
2. Duplicate file ke workspace Anda (jika perlu)

### Step 2: Export Icon sebagai SVG

1. **Select icon** yang ingin digunakan di Figma
2. **Klik kanan** pada icon → **Export**
3. **Pilih format SVG**
4. **Download** icon

### Step 3: Simpan ke Project

1. Simpan file SVG ke folder `/public/icons/`
2. Beri nama file sesuai fungsinya (contoh: `home.svg`, `user.svg`, `settings.svg`)

## 🚀 Cara Menggunakan di Code

### Method 1: Menggunakan SvgIcon Component (Recommended)

```tsx
import SvgIcon from "@/components/SvgIcon";

// Basic usage
<SvgIcon name="home" />

// With custom size
<SvgIcon name="user" size={24} />

// With Tailwind classes
<SvgIcon name="settings" className="text-primary-900 hover:text-primary-700" />
```

### Method 2: Import SVG Langsung

```tsx
import Image from "next/image";

<Image
  src="/icons/home.svg"
  alt="Home"
  width={20}
  height={20}
  className="text-white"
/>;
```

### Method 3: Inline SVG (untuk styling yang lebih flexible)

```tsx
// Copy paste SVG code dari Figma langsung ke component
<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
  <path d="..." stroke="currentColor" strokeWidth="2" />
</svg>
```

## 📁 Struktur Folder

```
/public
  /icons
    ├── home.svg
    ├── user.svg
    ├── settings.svg
    ├── book-open.svg
    ├── chart-bar.svg
    ├── bell.svg
    ├── clock.svg
    ├── shield-check.svg
    ├── clipboard-list.svg
    ├── map.svg
    ├── clipboard-check.svg
    ├── award.svg
    └── users.svg
```

## 🎨 Icon yang Dibutuhkan untuk Project

Berdasarkan komponen yang sudah ada, berikut icon yang perlu di-export dari Figma:

### Dashboard Stats:

- `book-open.svg` - Courses Enrolled
- `clipboard-list.svg` - Assignments Due
- `clock.svg` - Quiz Performance
- `shield-check.svg` - Certificates Earned

### Sidebar Menu:

- `home.svg` - Dashboard
- `chart-bar.svg` - Learning Progress
- `book-open.svg` - Assigned Courses (sama dengan di atas)
- `map.svg` - Learning Path
- `clipboard-check.svg` - Knowledge Assessment
- `award.svg` - Certification Record
- `users.svg` - Social Learning
- `bell.svg` - Notifications
- `settings.svg` - Settings

### Header:

- `search.svg` - Search icon
- `bell.svg` - Notification (sama dengan di atas)
- `user.svg` - User profile

## 🔄 Mengganti Icon yang Ada

Setelah export semua icon, ganti code yang menggunakan Hicon dengan SvgIcon:

**Sebelum:**

```tsx
icon: <i load-hicon="home" className="w-5 h-5" />;
```

**Sesudah:**

```tsx
icon: <SvgIcon name="home" size={20} className="w-5 h-5" />;
```

## 💡 Tips

1. **Naming Convention**: Gunakan nama yang konsisten dengan fungsi icon (kebab-case)
2. **Size Consistency**: Export semua icon dengan size yang sama (24x24 atau 32x32)
3. **Color**: Export icon dengan `stroke="currentColor"` agar bisa di-style dengan CSS
4. **Optimize**: Gunakan SVGO atau Figma plugin untuk optimize SVG size

## 🛠️ Troubleshooting

### Icon tidak muncul?

- Pastikan file SVG ada di `/public/icons/`
- Check nama file sesuai dengan yang dipanggil di code
- Pastikan SVG tidak corrupt

### Icon warna tidak bisa diubah?

- Pastikan SVG menggunakan `stroke="currentColor"` atau `fill="currentColor"`
- Bukan hardcoded color seperti `stroke="#000000"`

### Icon terlalu besar/kecil?

- Adjust prop `size` di SvgIcon component
- Atau gunakan Tailwind classes: `w-4 h-4`, `w-6 h-6`, dll
