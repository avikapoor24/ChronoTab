# Custom Chrome Extension - React & Tailwind

This is a custom Chrome extension built with React and Tailwind CSS, designed to provide a personalized homepage experience. The extension includes multiple features like a time-based theme, to-do list, notes, Astronomy Picture of the Day (APOD), fun facts, and an interactive menu for quick access to different functionalities.
![image](https://github.com/user-attachments/assets/4c1e613a-32f4-43d2-a7ae-f9af29929eb1)

## Features

- **Time-Based Theme**: The theme of the homepage changes dynamically based on the time of day (e.g., dark mode at night, light mode during the day).
- **To-Do List**: Keep track of your tasks with an interactive to-do list that allows you to add, edit, and remove tasks.
- **Notes**: Quickly jot down notes on the homepage to keep track of thoughts or reminders.
- **Astronomy Picture of the Day (APOD)**: View NASA's Astronomy Picture of the Day directly on your homepage.
- **Fun Facts**: Get random fun facts displayed on your homepage for a bit of trivia.
- **Menu (Press `M`)**: Press `M` to open a hidden menu for quick access to various settings and features.
  
## Installation

To use the extension, follow these steps:

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/your-username/your-extension-repo.git
    ```
  
2. Navigate to the `chrome://extensions/` page in your Chrome browser.

3. Enable **Developer mode** in the top right corner.

4. Click on the **Load unpacked** button.

5. Select the directory where you've cloned the repository.

6. The extension will be installed, and your custom homepage will be live when you open a new tab.

## Usage

- When you open a new tab in Chrome, the extension's homepage will be displayed.
- **Time-based Theme**: The theme will automatically adjust based on the current time of day.
- **To-Do List**: Add, edit, or remove tasks by interacting with the to-do list section.
- **Notes**: Write down notes directly on the homepage by interacting with the notes section.
- **APOD**: The Astronomy Picture of the Day will be displayed with a short description.
- **Fun Facts**: Random fun facts will appear in a dedicated section.
- **Menu**: Press `M` on your keyboard to open or close the interactive menu that gives you quick access to the extension's features.

## Development

If you'd like to contribute or make changes to the extension, you can start by cloning the repository and installing the necessary dependencies.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for managing dependencies)

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-extension-repo.git
    cd your-extension-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. Run the development server:
    ```bash
    npm start
    ```

4. This will run the React app in development mode. The changes you make will automatically reflect when you load the extension.

### Building for Production

To create a production build of the extension:

1. Run the build command:
    ```bash
    npm run build
    ```

2. After building, you can follow the steps in the **Installation** section to load the newly built extension into Chrome.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Chrome Extension API**: For creating the extension and interacting with Chrome's features.
  
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [NASA API](https://api.nasa.gov/) for the Astronomy Picture of the Day (APOD).
- [Fun Facts API](https://api.chucknorris.io/) for random fun facts.

## Snippets
![image](https://github.com/user-attachments/assets/affce78d-2962-4ea7-9d63-b365982dcaa4)

![image](https://github.com/user-attachments/assets/5ccf1921-09c7-414c-9817-960ac554beac)

![image](https://github.com/user-attachments/assets/48e94f41-0284-4a1e-91d3-eec7ddd3ee32)
![image](https://github.com/user-attachments/assets/17214365-3950-4e02-b882-2f24a57f9907)
