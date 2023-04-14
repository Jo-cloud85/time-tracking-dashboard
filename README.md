# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: https://github.com/Jo-cloud85/time-tracking-dashboard.git
- Live Site URL: https://jo-cloud85.github.io/time-tracking-dashboard/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

As a new learner, attempting the challenge striaght from Javascript is not striaghtforward for me.

I started writing plain HTML code on how I would structure the elements, divs, imgs etc, and use CSS to format the styles. I have placed the original plain HTML file under the folder 'reference'.

As there are a lot of repetitive elements in the challenge, the next step after drafting the plain HTML code would be to use Javascript to work backwards, to create the intended divs and adding the same classes and ids used in the CSS file.

At the same time, the data or textContent for each activity (i.e. work, play, exercise, etc) can be derived from the data.json file.

The first step is to target the intended location where you want to insert all the divs. In this case, it is the 'sub-box'.

Next, set a function, in this case, data(time) to fetch data from data.json file and to feed the data for each of the divs for each actiivity.

Then, write some code that ensures if the divs you want to add already exist, remove the divs first.
This step allows you to toggle between the different timeframes i.e. Daily, Weekly, Monthly, without appending endlessly new elements to the existing DOM elements each time the data(time) function is called (unless the user refreshes the screen.)

After adding the elements into the divs, the last step would be to go back to the HTML file and add the respective onClick functions to call the data(time) function.

Of course, the current HTML code, coupled with JS file can be made more succint by creating another overall div to hold the sub-box-div but I think it is good for now.

On CSS -

This is my first time learning about grid-template-areas. So I thought I will use this challenge to give it a try. It is not the shortest way of creating the grid format expected but nonetheless, it was good to learn something new.

### Continued development

I hope to come back one day to submit another solution using more efficient Javascript that runs on the backend instead of frontend like this one, or to use React, and using Tailwind CSS instead of plain CSS grid etc. 

Also, if possible, I love to add new features like toggling between night and day mode, as well as to use the icon-ellipsis as a dropdown menu button to reset data.
