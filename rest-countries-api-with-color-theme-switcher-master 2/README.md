# Frontend Mentor - REST Countries API with Color Theme Switcher

This is my solution to the **REST Countries API with Color Theme Switcher** challenge on Frontend Mentor. This project helped me strengthen my JavaScript, DOM manipulation, API handling, and beginner-friendly UI logic. It also served as great practice for structuring a project, debugging, and writing clean code that works.

Live Demo + Repo  
*( will add  links once ready)*

---

## 📌 Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## 🧩 Overview

### 🔥 The Challenge

Users should be able to:

- See all countries fetched from the REST Countries API  
- Search for a country using an input field  
- Filter countries by region  
- Click a country to view additional details  
- Navigate through border countries  
- Toggle between **light** and **dark** mode  
- Enjoy a clean layout that adjusts from mobile → desktop  

This project also allowed me to practice concepts I previously used in my **TypeScript SBA E-Commerce Management System**, such as working with APIs, asynchronous functions, modular thinking, and debugging.

---

### 🖼 Screenshot

*(Add your screenshot here once you take it)*  




---

### 🔗 Links

- **Solution URL:** *(Add link)*
- **Live Site URL:** *(Add link)*

---

## 🚀 My Process

### 🛠 Built With

- Semantic **HTML5**  
- **CSS custom properties** (variables)  
- Flexbox  
- CSS Grid  
- Mobile-first workflow 
- Vanilla **JavaScript (ES6+)**  
- Fetch API  
- DOM manipulation  
- Folder-based project organization  
- Light/Dark theme toggling  

---

### 📘 What I Learned

This project taught me a lot as a beginner, especially how JavaScript interacts with APIs and the page.

#### ✔ Understanding API data  
I learned how to request and filter specific fields:

```js
fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
Before this, I didn’t realize I had to request the population field separately.

✔ Building & inserting dynamic elements
I practiced creating elements for each country:

js
Copy code
const card = document.createElement("a");
card.classList.add("country-card");
✔ Fixing logical mistakes
For example, I originally wrote:

js
Copy code
country.name.population
But I learned population lives here:

js
Copy code
country.population
Small debugging moments like this made me understand objects better.

✔ Theme switching
I implemented a beginner-friendly toggle by updating the page’s data-theme attribute. This helped me understand CSS variable changes in real time.

✔ Working with responsive layout
Fixing the spacing in my last row of country cards helped me understand grid behavior and how auto-fit / auto-fill work.

🔮 Continued Development
As I grow, I want to focus on:

Writing cleaner, more modular JavaScript

Practicing more projects that involve APIs

Improving debugging skills

Learning how to break down layouts faster

Becoming comfortable with responsive design

Strengthening confidence with DOM events and loops

I also want to rebuild this project in React once I’m ready.

📚 Useful Resources
These helped me a lot during this challenge:

REST Countries API Docs — great for understanding available fields

MDN Web Docs — for fetch(), async JS, DOM methods

YouTube explanations on APIs and async code

https://www.youtube.com/watch?v=RvYYCGs45L4

https://www.youtube.com/watch?v=h33Srr5J9nY

https://www.youtube.com/watch?v=DHvZLI7Db8E

✨ Author
GitHub – https://github.com/Vanessa30043

Frontend Mentor – (Vanessa30043)

🙏 Acknowledgments

Shoutout to:

Frontend Mentor for structured beginner-friendly challenges

YouTube creators who break concepts down simply


My classmate that share his thoughts and suggested edits in my code.


This project was created using references and tutorials from:

W3Schools

Per-Scholas Software Engineering Curriculum and My instructors at Per Scholas who taught foundational JavaScript.

Google search for concepts and code

ReadMe Template Inspiration – DomPizzie Gist

emojis inspo: https://towardsdev.com/how-to-add-emojis-to-your-github-readme-and-other-markdown-files-c8f13b3f9de4