# AequiFlow

A Next.js project for managing and tracking projects.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## Setup Instructions

Follow these steps to get the project running on your laptop:

### 1. Clone the Repository

Open your terminal (Command Prompt, PowerShell, or Git Bash) and run:

```bash
git clone https://github.com/monicatagalag/AequiFlow.git
```

### 2. Navigate to the Project Directory

```bash
cd AequiFlow
```

### 3. Install Dependencies

Install all the required packages:

```bash
npm install
```

This will download all the dependencies listed in `package.json`. This may take a few minutes.

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 15.1.2
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### 5. Open in Browser

Open your web browser and go to:
```
http://localhost:3000
```

You should now see the AequiFlow application running!

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm start` - Start the production server (after building)
- `npm run lint` - Run ESLint to check for code issues

## Troubleshooting

### Port Already in Use
If you see an error that port 3000 is already in use, you can run:
```bash
npm run dev -- -p 3001
```
This will start the server on port 3001 instead.

### Node Version Issues
Make sure you have Node.js version 18 or higher. Check your version with:
```bash
node --version
```

### Installation Errors
If you encounter errors during `npm install`, try:
1. Delete the `node_modules` folder (if it exists)
2. Delete `package-lock.json` (if it exists)
3. Run `npm install` again

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/lib` - Utility functions and data
- `/public` - Static assets (images, etc.)

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling
- **Radix UI** - UI components
- **Leaflet** - Maps functionality

