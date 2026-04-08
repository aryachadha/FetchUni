# FetchUni 🎓

**FetchUni** is a sleek, modern web application designed to help students and researchers explore universities worldwide. By leveraging the Hipo Universities API, users can search, filter, and shortlist institutions in a refined, dark-themed interface.

---

## ✨ Features

* **Global Search:** Instantly find universities by name using the real-time search bar.
* **Country Filtering:** Use a dynamically populated dropdown to narrow down results by specific countries.
* **Alphabetical Sorting:** Toggle between A-Z and Z-A sorting to organize the university list.
* **Personal Shortlist:** Save your favorite universities to a persistent shortlist that stays saved even after a page refresh.
* **Direct Links:** Quick access to official university websites via external links.
* **Responsive Design:** A tailored experience for desktop, tablet, and mobile devices using CSS Grid and Flexbox.

---

## 🎨 Design Language

The project features a premium "Midnight Gold" aesthetic:
* **Typography:** A sophisticated mix of **Playfair Display** for headings and **DM Sans** for UI elements.
* **Visuals:** Subtle radial gradients, glassmorphism-inspired surfaces, and smooth CSS animations.
* **UX:** Interactive hover states and a sticky shortlist sidebar for easy reference.

---

## 🛠️ Technical Stack

* **Frontend:** HTML5, CSS3 (Custom Properties, CSS Grid, Flexbox).
* **Scripting:** Vanilla JavaScript (ES6+) for DOM manipulation and state management.
* **API:** Powered by the [Hipo University List API](http://universities.hipolabs.com/search).
* **Storage:** Browser `localStorage` to persist your shortlist.

---

## 📂 File Structure

* `index.html`: The main structure and UI layout.
* `styles.css`: Custom styling, variables, and animations.
* `script.js`: API fetching, filtering logic, and shortlist management.

---

## 🚀 Getting Started

1.  **Clone the repository** or download the source files.
2.  **Open `index.html`** in any modern web browser.
3.  **Ensure you have an internet connection** to fetch data from the API.

---

## 📖 How It Works

### 1. Data Fetching
Upon loading, the app triggers an `async` fetch request to the Hipo Labs API. While the data loads, a CSS-animated loading indicator is displayed.

### 2. Filtering & Sorting
The app filters the university list based on user input from the search bar and the country selection dropdown. Users can also reorder the results alphabetically.

### 3. Persistence
The shortlist is synchronized with the browser's `localStorage`. When a user adds or removes a university, the state is updated and saved so that favorites remain intact across sessions.

---

*“Fetch the Future of Education.”*
