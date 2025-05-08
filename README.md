# Architect Portfolio
A modern, responsive portfolio website for architects built with React, TypeScript, and Vite. This project showcases architectural projects with beautiful animations, responsive design, and interactive features.

## Features
- Responsive Design : Optimized for all devices from mobile to desktop
- Project Gallery : Showcase architectural projects with detailed modal views
- Smooth Animations : Using Framer Motion for fluid transitions and interactions
- Dark/Light Mode : Toggle between color schemes
- Contact Form : Built-in contact functionality
- Performance Optimized : Fast loading times with Vite's build system
## Technologies Used
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
## Getting Started
### Prerequisites
- Node.js (v14 or later)
- npm or yarn
### Installation
1. Clone the repository
bash

Run

Open Folder

1

2

git clone https://github.com/

yourusername/architect-portfolio.git

cd architect-portfolio

2. Install dependencies
bash

Run

Open Folder

1

2

3

npm install

# or

yarn

3. Start the development server
bash

Run

Open Folder

1

2

3

npm run dev

# or

yarn dev

4. Open your browser and navigate to http://localhost:5173
## Building for Production
bash

Run

Open Folder

1

2

3

npm run build

# or

yarn build

The build artifacts will be stored in the dist/ directory.

## Project Structure
plaintext

Open Folder

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

architect-portfolio/

├── public/            # Static assets

├── src/

│   ├── assets/        # Images and

other assets

│   ├── components/    # Reusable UI

components

│   ├── pages/         # Page components

│   ├── hooks/         # Custom React

hooks

│   ├── utils/         # Utility

functions

│   ├── App.tsx        # Main

application component

│   └── main.tsx       # Entry point

├── index.html         # HTML template

├── package.json       # Project

dependencies and scripts

├── tsconfig.json      # TypeScript

configuration

├── vite.config.ts     # Vite

configuration

└── README.md          # Project

documentation

Fold

## Customization
### Adding New Projects
To add new architectural projects, modify the projects data in the Projects component.

### Styling
This project uses Tailwind CSS for styling. You can customize the design by modifying the tailwind.config.js file.

## Mobile Compatibility
The website is fully responsive and optimized for mobile devices. Key features include:

- Touch-friendly navigation
- Optimized images for faster loading on mobile networks
- Responsive layouts that adapt to different screen sizes
## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Design inspiration from modern architectural websites
- Photos from Unsplash and other free stock photo sites
This project was bootstrapped with Vite and uses React with TypeScript for type safety.