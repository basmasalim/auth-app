# Auth App

A modern Angular 17 authentication application with TailwindCSS styling, featuring beautiful login and registration pages.

## Features

- **Angular 17** with standalone components
- **TailwindCSS** for modern, responsive styling
- **Routing** between login and register pages
- **Form handling** with ngModel for two-way data binding
- **Social login icons** component
- **Modern gradient design** matching the original HTML/CSS layout
- **Responsive design** that works on all devices

## Project Structure

```
auth-app/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   └── register/
│   │   │       ├── register.component.ts
│   │   │       ├── register.component.html
│   │   │       └── register.component.css
│   │   ├── shared/
│   │   │   └── social-icons/
│   │   │       ├── social-icons.component.ts
│   │   │       ├── social-icons.component.html
│   │   │       └── social-icons.component.css
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4200`

## Routes

- `/` - Redirects to login page
- `/login` - Login page with sign-in form
- `/register` - Registration page with sign-up form

## Components

### LoginComponent
- Email and password input fields
- Social login icons
- Form validation and submission
- Navigation to register page

### RegisterComponent  
- Name, email, and password input fields
- Social login icons
- Form validation and submission
- Navigation to login page

### SocialIconsComponent
- Reusable component for social media login icons
- Includes Google, Facebook, GitHub, and LinkedIn icons

## Styling

The application uses TailwindCSS with custom configuration:
- **Montserrat font** for typography
- **Custom colors** for primary theme (#512da8)
- **Gradient backgrounds** for modern appearance
- **Smooth transitions** and hover effects
- **Responsive design** with mobile-first approach

## Form Handling

Forms use Angular's `[(ngModel)]` for two-way data binding. When submitted, form values are logged to the browser console for demonstration purposes.

## Development

This project was generated with Angular CLI and configured for standalone components. All components are standalone and use the latest Angular 17 features.
