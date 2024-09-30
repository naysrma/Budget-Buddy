# Finance Tracker App

A personal finance management application built with **React.js**, **CSS**, **Ant Design**, and **Firebase**. This app allows users to add and track their income and expenses, visualize spending patterns using charts, and manage finances efficiently.

## Features

- **Add Income/Expenses:** Easily input your income or expenses and categorize them.
- **Visual Representation:** View your financial data through dynamic pie charts and graphs using **Ant Design**.
- **Categorization:** Categorize your transactions for better clarity on spending habits.
- **Real-time Data:** All data is stored and retrieved in real-time using **Firebase**.
- **User-friendly Interface:** Responsive and easy-to-use interface built with **React.js** and **CSS**.

## Technologies Used

- **React.js**: Frontend framework for building the UI.
- **CSS**: Styling for a clean and responsive design.
- **Ant Design**: Used for creating charts and user interface components.
- **Firebase**: Backend as a service for real-time data storage and authentication.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/YOUR-USERNAME/finance-tracker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd finance-tracker
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Set up Firebase:
    - Create a project in [Firebase](https://console.firebase.google.com/).
    - Set up Firestore and Firebase Authentication.
    - Create a `.env` file in the root directory and add your Firebase configuration:

    ```bash
    REACT_APP_API_KEY=your-api-key
    REACT_APP_AUTH_DOMAIN=your-auth-domain
    REACT_APP_PROJECT_ID=your-project-id
    REACT_APP_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_APP_ID=your-app-id
    ```

5. Start the development server:

    ```bash
    npm start
    ```

6. Open your browser and visit `http://localhost:3000`.

## Usage

- **Add Transactions**: Use the form to add income or expenses with a category and amount.
- **View Charts**: Navigate to the dashboard to see your expenses and income visualized through pie charts and graphs.
- **Data Sync**: All transactions are stored securely and updated in real-time using Firebase.

## Screenshots

![Screenshot (47)](https://github.com/user-attachments/assets/f27a7429-ea4e-4fe1-b7d4-bd12a7895dd1)

![Screenshot (48)](https://github.com/user-attachments/assets/4bdf44a1-d94b-44ce-a6d1-758151e6a72f)

![Screenshot (49)](https://github.com/user-attachments/assets/57441439-6f72-4ebb-897a-8160507e6b6c)

