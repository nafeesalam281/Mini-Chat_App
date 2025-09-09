# Mini-Chat_App

![Project Status](https://img.shields.io/badge/Status-In%20Progress-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A simple, yet robust, chat application backend built on the **Node.js** and **Express.js** stack, with **MongoDB** for data management. This project demonstrates my ability to build a comprehensive RESTful API with full CRUD functionality.

## 🚀 Live Demo & Repository

* **GitHub Repository:** [https://github.com/nafeesalam281/Mini-Chat_App](https://github.com/nafeesalam281/Mini-Chat_App)
* **Live Application:** *(Currently a backend-only project. A frontend will be added in a future update.)*

***

## ✨ Features

* **RESTful API:** A well-structured API to handle all client-server interactions.
* **CRUD Operations:** Implemented full functionality to **create**, **read**, **update**, and **delete** chats.
* **Middleware:** Utilized custom middleware for tasks like request handling and authentication to build a secure and efficient application.
* **Data Persistence:** Uses a **MongoDB** database to store all chat data.

***

## 💻 Technologies Used

* **Backend:**
    * **Node.js**: The JavaScript runtime environment.
    * **Express.js**: The web application framework.
* **Database:**
    * **MongoDB**: A NoSQL, document-based database.
* **Tools:**
    * **Postman**: For testing the API endpoints.

***

## 🛠️ Installation and Setup

Follow these steps to get a local copy of the project up and running.

### Prerequisites

* **Node.js**: Ensure you have Node.js installed on your machine.
* **npm**: Comes with Node.js.
* **MongoDB**: You need a running MongoDB instance (local or a cloud service like MongoDB Atlas).

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/nafeesalam281/Mini-Chat_App.git](https://github.com/nafeesalam281/Mini-Chat_App.git)
    cd Mini-Chat_App
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    * Create a `.env` file in the root directory.
    * Add your MongoDB connection string:
        ```
        MONGODB_URI=your_mongodb_connection_string
        ```

4.  **Run the application:**
    ```bash
    npm start
    ```
    The server will start on `http://localhost:3000`.

***

## 💡 API Endpoints

The following RESTful endpoints are available. You can use **Postman** or any API client to test them.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/chats` | Retrieves all chats. |
| `GET` | `/api/chats/:id` | Retrieves a specific chat by its ID. |
| `POST`| `/api/chats` | Creates a new chat. |
| `PUT` | `/api/chats/:id` | Updates an existing chat. |
| `DELETE`| `/api/chats/:id`| Deletes a chat. |

***

## 🤝 Contribution

Feel free to fork this repository and contribute! If you find a bug or have a suggestion, please open an issue.

***

    
