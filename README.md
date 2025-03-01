# CV Project

A modern, interactive CV/resume application built with Next.js, PayloadCMS, and Tailwind CSS.

## Features

- Customizable CV/resume content through PayloadCMS admin panel
- Responsive design with print-friendly layout
- Work experience, education, skills, certifications, and language sections
- Technology stack visualization

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **CMS**: PayloadCMS with PostgreSQL database
- **Styling**: shadcn/ui components
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js v22+
- pnpm v9+
- PostgreSQL (local or cloud)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Variables

This project uses Vercel for deployment and environment variable management. Instead of manually creating `.env` files, use the Vercel CLI to pull environment variables from your Vercel project:

1. Install Vercel CLI if you haven't already:

   ```bash
   npm install -g vercel
   ```

2. Link your local project to your Vercel project:

   ```bash
   vercel link
   ```

3. Pull the environment variables:

   ```bash
   vercel env pull
   ```

This will create a `.env` file with all the necessary environment variables from your Vercel project.

## Development Commands

```bash
# Build for production
pnpm build

# Run linter
pnpm lint

# Generate PayloadCMS types
pnpm generate:types
```

## License

THE BEER-WARE LICENSE

