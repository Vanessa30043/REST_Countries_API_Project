
# 📄 ** PROJECT_PLAN.md (How I Tackled This Project)**


# REST Countries API Challenge

This document explains my step-by-step plan, thinking process, and how I completed this project as a beginner.

---

## 🥇 1. Understanding the Requirements

Before writing any code, I broke the challenge into smaller goals:

1. Display all countries on the homepage  
2. Create the card layout for each country  
3. Fetch the correct API fields  
4. Add search functionality  
5. Add region filtering  
6. Create a single country details page  
7. Add border country navigation  
8. Add theme switcher  
9. Make layout responsive  

I wanted to avoid being overwhelmed, so I built it one small piece at a time.

---

## 🧱 2. Setting Up the Project

- Created the folder structure from the Frontend Mentor starter files  
- Connected my CSS and JavaScript files  
- Added placeholder content to confirm everything was linked  

This helped me start with clarity instead of confusion.

---

## 🌍 3. Fetching API Data

My first working step was getting the list of countries.

I used:

```js
fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
I logged the data to the console to understand the structure.

This is when I noticed:

population is NOT inside name

capital is an array

region is a simple string

Understanding the data helped me map it correctly.

🧩 4. Building Country Cards
Next, I created each card using JavaScript:

Create element

Add class

Fill innerHTML

Append to container

I tested with only 3 countries, then switched to the full list.

🎨 5. Fixing Layout Gaps
I ran into the “extra space in the last row” issue and learned:

The grid needed grid-template-columns: repeat(auto-fit, minmax())

Consistent card heights improved spacing

Image sizing matters for grid alignment

Debugging this taught me more about Grid behavior.

🔍 6. Adding Search & Filter
After the UI loaded properly, I added:

An input event listener for search

A dropdown listener for region filtering

Both functions rebuild the list based on user input.

🌓 7. Adding Light/Dark Mode
I kept it simple:

Add a button

On click → toggle a class on body

CSS variables update colors automatically

This made theme switching much easier than I expected.

🧪 8. Testing & Debugging
I tested:

Empty search

Undefined capitals

Countries without borders

API fields missing

Mobile resizing

Fixing small issues helped the app feel more polished.

🚀 9. Final Polish
Cleaned up file structure

Commented my code for future me

Updated README

Prepared GitHub repo

🎯 Summary
Building this project taught me how to:

Read and understand API data

Handle DOM manipulation confidently

Use Grid correctly

Debug JavaScript in a beginner-friendly workflow

Write cleaner code by breaking tasks into smaller steps

My confidence in JavaScript grew a lot through this challenge.