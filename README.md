# CampusFinder - Global University Explorer 📖

CampusFinder is a dynamic, JavaScript website designed to help prospective students research, filter, and discover universities across the globe using real-time API data.

## ✨ Features & Functionality
- **Live Search**: Find specific institutions instantly. Built using the JS Array `.filter()` method.
- **Country Filtering**: Narrow down the global list to a specific country using the `.filter()` method.
- **A-Z Sorting**: Sort the visible results alphabetically via the `.sort()` method.
- **Dark/Light Theme Toggle**: Improves accessibility and visual experience.
- **Local Shortlisting (Local Storage)**: Interactively "Save" and manage a personal shortlist of universities, manipulating states via `.some()`, `.filter()`, and `.push()`.

## 🛠️ Technologies Used
- **HTML5**: Semantic web structure.
- **CSS3**: Custom variables, Flexbox, and CSS Grid for responsive mobile-first design.
- **JavaScript (ES6+)**: Features Fetch API async/await data retrieval and strict use of Array Higher-Order Functions for declarative state manipulation.
- **Hipo Universities API**: Provides the dataset of universities, domains, and country codes.

## 🚀 Setup Instructions
1. Clone this repository or download the files.
2. Put `index.html`, `styles.css`, and `script.js` in the same directory.
3. Open `index.html` in your web browser. (An active internet connection is required to fetch the real-time API data).