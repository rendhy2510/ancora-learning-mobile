# L&D - Learning and Development Platform

Platform Learning Management System (LMS) untuk Ancora Indonesia Resource yang dirancang untuk meningkatkan pengembangan profesional karyawan.

## 🎯 Fitur Utama

- **Dashboard Interaktif**: Tampilan statistik lengkap tentang progress pembelajaran
- **Course Management**: Kelola dan pantau kursus yang sedang diikuti
- **Progress Tracking**: Monitor kemajuan pembelajaran secara real-time
- **Schedule Calendar**: Jadwal kursus dan assignment yang terorganisir
- **Certification**: Sistem sertifikasi untuk pencapaian pembelajaran
- **Social Learning**: Fitur kolaborasi dan diskusi antar peserta

## 🚀 Teknologi

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## 📦 Instalasi

1. Clone repository:

```bash
cd /Users/air-rendi/Documents/l-and-d
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka browser dan akses:

```
http://localhost:3000
```

## 🏗️ Struktur Project

```
l-and-d/
├── app/
│   ├── globals.css          # Global styles & design system
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Dashboard page
├── components/
│   ├── Sidebar.tsx           # Sidebar navigation
│   ├── Header.tsx            # Top navigation bar
│   ├── DashboardStats.tsx    # Statistics cards
│   ├── RecentActivity.tsx    # Recent learning activity
│   ├── ProgressCourse.tsx    # Course progress bars
│   ├── Schedule.tsx          # Calendar & schedule
│   └── MyCourse.tsx          # Course cards
├── public/
│   └── logo.png              # Ancora logo
└── tailwind.config.ts        # Tailwind configuration
```

## 🎨 Design System

### Colors

- **Primary Teal**: `#00a99d` - Main brand color
- **Primary Orange**: `#ff6b35` - Accent color
- **Dark Navy**: `#1a1f36` - Text primary
- **Light Gray**: `#f5f7fa` - Background
- **Medium Gray**: `#e8ecf1` - Borders

### Typography

- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components

- Cards dengan shadow soft
- Buttons dengan gradient
- Progress bars dengan animasi
- Hover effects untuk interaktivitas

## 📱 Responsive Design

Dashboard fully responsive untuk:

- Desktop (1920px+)
- Laptop (1280px - 1919px)
- Tablet (768px - 1279px)
- Mobile (< 768px)

## 🔧 Development

### Build untuk Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

## 📄 Pages

### Dashboard (/)

Halaman utama dengan:

- 4 Stat cards (Courses Enrolled, Assignments Due, Quiz Performance, Certificates Earned)
- Recent Activity section
- Progress Course section
- Schedule Calendar
- My Course cards

### Coming Soon

- Learning Progress (/learning-progress)
- Assigned Courses (/assigned-courses)
- Learning Path (/learning-path)
- Knowledge Assessment (/knowledge-assessment)
- Certification Record (/certification-record)
- Social Learning (/social-learning)
- Notifications (/notifications)
- Settings (/settings)

## 🎯 Next Steps

1. **Backend Integration**:
    - Setup API routes di Next.js
    - Integrasi dengan database (PostgreSQL/MySQL)
    - Authentication & Authorization

2. **Additional Features**:
    - Video player untuk course content
    - Quiz & assessment system
    - Certificate generator
    - Discussion forum
    - Real-time notifications

3. **Optimization**:
    - Image optimization
    - Code splitting
    - Performance monitoring
    - SEO optimization

## 👥 Team

Developed by Ancora Indonesia Resource Team

## 📝 License

Copyright © 2026 Ancora Indonesia Resource. All rights reserved.
