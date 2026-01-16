# SMILE Organization Website

This is the official website for **SMILE** (State-Sponsored Veterinary Awareness & Livestock Development Organisation, Andhra Pradesh).

## Overview

SMILE is committed to improving animal health, farmer livelihoods, and rural sustainability in Andhra Pradesh through education, outreach, and scientific animal husbandry practices.

## Features

The website includes the following sections:

1. **Home** - Welcome page with organization introduction
2. **About SMILE** - Vision, mission, and key focus areas
3. **Organization Structure** - Organizational hierarchy and partners
4. **Training Programs** - Annual training calendar with registration
5. **Success Stories** - Inspiring stories from farmers
6. **Knowledge Centre** - Educational resources and downloads
7. **E-Magazine** - Monthly digital magazine
8. **Useful Links** - Quick access to partner organizations
9. **Photo Gallery** - Visual showcase of activities
10. **Contact** - Contact form and information
11. **Notification Subscription** - Email and WhatsApp updates
12. **Admin Portal** - Content management system

## Tech Stack

- **React** 18.3.1 with TypeScript
- **Vite** for build and development
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Formspree** for contact form handling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Admin Portal

The website includes an admin portal for managing content including announcements, photo gallery, e-magazines, training programs, and success stories.

### Accessing Admin Portal

Navigate to the Admin section via the navigation menu. The admin portal features:

- Dashboard with overview statistics
- Announcement management
- Photo gallery management
- E-magazine management
- Training program management
- Success story management

### Demo Credentials

For demonstration purposes, you can use:
- **Username:** admin
- **Password:** smile2026

> **Note:** In a production environment, proper authentication with secure backend validation should be implemented.

## Development

### Project Structure

```
src/
├── components/
│   ├── admin/           # Admin portal components
│   ├── AboutSection.tsx
│   ├── AnnouncementScroll.tsx
│   ├── ContactSection.tsx
│   ├── EMagazine.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── KnowledgeCentre.tsx
│   ├── Navbar.tsx
│   ├── NotificationSubscription.tsx
│   ├── OrganizationStructure.tsx
│   ├── PhotoGallery.tsx
│   ├── ScrollToTop.tsx
│   ├── SuccessStories.tsx
│   ├── TrainingCalendar.tsx
│   └── UsefulLinks.tsx
├── context/
│   └── ThemeContext.tsx
├── App.tsx
├── index.css
└── main.tsx
```

### Building

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Features in Detail

### Responsive Design
The website is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

### Dark Mode
Theme toggle is available in the navigation bar, allowing users to switch between light and dark modes.

### Accessibility
All components follow accessibility best practices with proper ARIA labels and semantic HTML.

## License

This project is private and proprietary to SMILE Organization, Andhra Pradesh.

## Contact

For questions or support, please contact:
- **Email:** info@smile-ap.org
- **Phone:** 1800-XXX-XXXX
- **WhatsApp:** +91-XXXXX-XXXXX

---

**SMILE** - Empowering Farmers, Enriching Lives
