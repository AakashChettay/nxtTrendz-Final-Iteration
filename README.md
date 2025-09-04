# NxtTrendz - The E-commerce Website

Welcome to NxtTrendz, a modern and feature-rich e-commerce platform built with React JS. This application provides a seamless shopping experience for both prime and non-prime users, featuring a wide range of products, advanced filtering options, and a robust cart system.

## ✨ Features

### User Authentication & Authorization

  - **Secure Logins:** Users can securely log in using a JWT (JSON Web Token) based authentication system.
  - **Role-Based Access:** The application distinguishes between "Prime" and "Non-Prime" users, potentially offering different features or privileges (e.g., special discounts, free shipping) based on their user status.
  - **Login/Signup:** A dedicated login and registration page allows new users to create an account and existing users to sign in.

### Product Management

  - **Extensive Product Catalog:** Browse a diverse collection of products across various categories.
  - **Advanced Filtering:** Easily find what you're looking for with multiple filtering options:
      - **Category Filters:** Filter products by specific categories (e.g., Electronics, Clothing, etc.).
      - **Rating Filters:** Filter products based on user ratings.
  - **Product Sorting:** Sort the product list to prioritize your search:
      - **Price-Based Sorting:** Arrange products by price in ascending (Low to High) or descending (High to Low) order.

### Detailed Product Views

  - **Product Description Page:** Click on any product to view a detailed page containing:
      - High-resolution images.
      - Comprehensive product descriptions.
      - Pricing information.
      - User ratings and reviews.
  - **Recommended Products:** On the product description page, a "Recommended Products" section suggests similar items, enhancing the user's browsing experience.

### Shopping Cart

  - **Add to Cart:** Users can add products to their shopping cart from both the product listing and the detailed product page.
  - **Cart Management:** The cart feature allows users to:
      - View all selected items.
      - Adjust the quantity of each item.
      - Remove items from the cart.
  - **Persistent Cart:** The cart's state is maintained across different sessions (if the user is logged in), so they won't lose their selected items.

## 🚀 Tech Stack

  - **Frontend:**
      - **React JS:** A JavaScript library for building user interfaces.
  - **Backend:**
      - **REST API:** Handles all server-side logic, including user authentication, product data fetching, and cart management.
  - **Templating:**
      - **EJS (Embedded JavaScript Templating):** Used for server-side rendering, especially for initial page loads or dynamic content generation.
  - **Authentication:**
      - **JWT (JSON Web Token):** A compact, URL-safe means of representing claims to be transferred between two parties. It is used for secure user authentication and authorization.

## 📦 Getting Started

### Prerequisites

  - Node.js
  - npm (Node Package Manager) or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/NxtTrendz-The-Ecom-Website.git
    cd NxtTrendz-The-Ecom-Website
    ```

2.  Install the dependencies for the frontend:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Configure your environment variables (e.g., API endpoints, JWT secret keys). Create a `.env` file in the root directory based on a `.env.example` file (if provided).

4.  Run the application:

    ```bash
    npm start
    # or
    yarn start
    ```

The application should now be running on `http://localhost:3000`.

## 📸 Screenshots
<img width="1752" height="848" alt="image" src="https://github.com/user-attachments/assets/679557b2-b56b-451f-9836-033a45fdc2bd" />
<img width="1547" height="902" alt="image" src="https://github.com/user-attachments/assets/d248bdb1-bee8-4d50-9ae7-c9db09c9a56d" />
<img width="1481" height="902" alt="image" src="https://github.com/user-attachments/assets/b9165f73-3ca6-4850-9888-02db16c3cdbb" />
<img width="1182" height="894" alt="image" src="https://github.com/user-attachments/assets/9e126201-5183-499c-953c-caea0f68d33b" />

## 🤝 Contribution

Contributions are welcome\! If you have any suggestions or find a bug, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

-----
