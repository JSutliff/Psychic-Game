<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Psycic key-press game (Recomended assignment)

<!-- Put a description of what the project is -->
Combining HTML and javascript to build a DOM based game where the computer 
generates a random letter and compares it to the key presses of the user.  

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->
[Psychic-Game](https://jsutliff.github.io/Psychic-Game/)

# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
[screen shot of completed assignment](assets/images/screenShot.png)


<img src="assets/images/psychicScreenShot.jpeg">
# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->
- HTML5
- JavaScript
- Bootstrap
- CSS3

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```javascript
var checkKey = function (userKey) {
 if (alphabet.includes(userKey) && (!keyLog.includes(userKey))) {
  if (userKey === computerGuess) {
    wins++;
    handleWin();
    resetGuessVars();
    handleDomUpdate();
  } else if (!keyLog.includes(userKey) && remainingGuesses > 0) {
     keyLog.push(userKey);
     remainingGuesses--;
     handleDomUpdate();
  } else {
    losses++;
    handleLoss();
    resetGuessVars();
    handleDomUpdate();
  }
 } else {
   handleInvalidKey();
 }
}
```


# Learning points
<!-- Learning points where you would write what you thought was helpful -->
I found this to be a challenging exercise. After building the program in one 
function with nested if/else statements I refactored my code to include modular 
functions. This exercise was good practice and helped me learn more about control
flow and hoisting. 

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Jason P. Sutliff](https://jsutliff.github.io/Basic-Portfolio/)