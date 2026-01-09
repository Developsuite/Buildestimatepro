# Construction Estimation Website

A modern, responsive construction estimation website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏗️ Professional construction estimation services showcase
- 📱 Fully responsive design for all devices
- 🎨 Modern UI with glassmorphism effects
- 📄 Sample document gallery with PDF downloads
- ❓ Interactive FAQ sections
- 📞 Contact forms and information
- 🎯 Service-specific pages for different construction trades

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Figtree, Plus Jakarta Sans
- **Icons**: Heroicons, Custom SVGs

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/construction-website.git
cd construction-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── samples/           # Sample documents page
│   ├── services/          # Services pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── SAMPLES/         # PDF sample documents
└── styles/              # Global styles
```

## Pages

- **Home**: Landing page with hero section and services overview
- **Services**: Detailed service offerings for different construction trades
- **Samples**: Gallery of sample estimation documents
- **About**: Company information and team details
- **Contact**: Contact forms and company information
- **Pricing**: Service pricing information

## Sample Documents

The website includes sample estimation documents for various construction trades:
- Commercial projects
- Residential projects
- Industrial projects
- Electrical work
- Plumbing
- Mechanical systems
- And many more...

## Deployment

The website can be deployed on various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For any inquiries about this project, please contact:
- Email: info@buildestimate.com
- Phone: (555) 123-4567

---

Built with ❤️ using Next.js and Tailwind CSS