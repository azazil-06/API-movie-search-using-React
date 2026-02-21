# goat ARJUN - Movie Search App 🎬

A dynamic movie discovery application built with **React** and the **TMDB API**. This project demonstrates the ability to handle API integration, state management, and responsive UI design.

---

## 📸 Project Showcases

### Home Screen
Displays the top 40 trending movies currently available on TMDB.
![Home Screen](Images\Home.png)

### Search Functionality
Live search capability allowing users to find specific titles across the entire TMDB database.
![Search Screen](Images\Search.png)

### Favorites Management
A personalized section where users can view movies they have bookmarked using the heart icon.
![Favorites Screen](Images\Fav.png)

---

## 🚀 Features

* **Top 40 Movies**: Fetches and displays the most popular films on load.
* **Search Bar**: Real-time filtering and API querying for any movie title.
* **Favorite Tab**: Save your favorite movies to a dedicated list.
* **Theme Changer**: Toggle between Light and Dark modes for better UX.
* **Responsive Design**: Works smoothly across different screen sizes.

## 🛠️ Tech Stack

* **Library**: React.js
* **Data Source**: TMDB (The Movie Database) API
* **Styling**: CSS (with Theme Variables)

## ⚙️ Configuration & Setup

> [!CAUTION]
> **API Key Required**: For security reasons, the API key has been removed from this repository.

1.  **Clone the project**:
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Add your API Key**:
    * Open `src/services/api.js`.
    * Find the API variable and insert your TMDB key:
    ```javascript
    const API_KEY = "YOUR_TMDB_API_KEY_HERE";
    ```
3.  **Install & Run**:
    ```bash
    npm install
    npm start
    ```

---
*Created by Arjun*