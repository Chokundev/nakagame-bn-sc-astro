
# Nakagame-BN-SC-Astro

Nakagame-BN-SC-Astro is the official website for the inter-faculty sports competition, **Nakagame**, hosted by Wat Bowonniwet School. The website is developed using the **Astro JS Framework** with a focus on **Thai UI** design, offering a seamless user experience in Thai. It dynamically fetches real-time competition results via the
 **api-bn-sc**, managed by the Nakagame-MIS system.

## Features

- **Astro JS Framework**: Utilizes the modern Astro framework for fast and optimized static site generation.
- **Thai UI Design**: Designed with a user-friendly interface for Thai-language users.
- **Real-time API Integration**: Fetches live competition data using the **api-bn-sc**, which is managed by the Nakagame-MIS system.
- **Responsive Layout**: Ensures that the website works smoothly on both desktop and mobile devices.
- **Minimalistic & Fast**: Prioritizes performance, loading speed, and smooth navigation.

## API Integration

The website is connected to the **api-bn-sc** service, which provides real-time updates of competition results. This API is managed by the **Nakagame-MIS** system, ensuring that all data presented on the website is accurate and up-to-date.

API Endpoint:
- `https://api.bn-sc.cloud/nakagame/v1/compet-result`: Fetches the current competition results from the database.

## Usage

### Installation

Follow these steps to run the Nakagame-BN-SC-Astro website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nakagame-bn-sc-astro.git
   ``` 

2.  Navigate to the project directory:
    
    `cd nakagame-bn-sc-astro` 
    
3.  Install all the necessary dependencies:
    
    `npm install` 
    
4.  Start the development server:
    
    `npm run dev` 
    
5.  Open your browser and visit `http://localhost:3000` to view the website.
    

### Deployment

To deploy the website, you can use any static hosting provider that supports Astro, such as:

-   **Cloudflare Pages**

Simply follow the provider’s guidelines for deploying an Astro project.

## Project Structure

Here is an overview of the project's structure:

```
`/
├── public/              # Static assets such as images, fonts, etc.
├── src/
│   ├── components/      # Reusable components used across the site
│   ├── layouts/         # Page layouts
│   ├── pages/           # Individual pages (home, results, etc.)
│   ├── styles/          # Global and component-specific styles
│   └── utils/           # Utility functions and API calls
├── astro.config.mjs     # Astro project configuration
└── package.json         # Project dependencies and scripts` 
```
## Contributing

If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

-   **Framework**: Astro JS
-   **UI Design**: Custom Thai UI
-   **API**: Nakagame-MIS system via api-bn-sc

Developed by Teerachanon Puanngern (Chokundev)


