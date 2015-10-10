# README #



### This is for my jQuery Class. ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

-----------------------------------------------------------------------------
#Program 3 #

## Requirement 1 ##

User can enter a Fahrenheit temperature and the page displays a message
based on the value entered. Use if-else-if statements. Use reasonable
judgment to determine if the appropriate message should be cold, chilly,
freezing, warm, hot, etc. Produce an error message if the value entered in
less than -50 or greater than 140. Use try/catch to handle the error.

## Requirement 2 ##

User can enter a number between 1-12 (error message otherwise – use
try/catch to handle the error). Use a switch statement to output the month
name based on the number entered.

## Requirement 3 ##

User can enter a number between 1-12 ((error message otherwise – use
try/catch to handle the error). Use “Common Code and Fall-Through” to
display the following messages:

* 12, 1, 2: “Winter”
* 3, 4, 5: “Spring”
* 6, 7, 8: “Summer”
* 9, 10, 11: “Fall”

## Requirement 4 ##

Create a birthMonth object with the 12 month names for keys and person
names for the value of each month. For example, January: “Julia”. Use an
HTML element event to call a function you wrote named
`displayBirthMonth()` that uses a for/in loop to display the month and
person names.

## Requirement 5 ##

Create a month array which contains the names of all months. Use an HTML
element event to call a function you wrote named `displaySelectMonths()`
that uses a while loop and the month array to display month names
January, March, April, May, and December in an <h2> element.

## Requirement 6 ##

Use an HTML element event to call a function you wrote named `changejQueryMessage()` that uses a regular expression to replace a user entered string "JavaScript makes me cry" to "JavaScript makes me smile".  Display the modified string in an <h2> element with the font-weight set to bold and the color set to blue.

## Requirement 7 ##

Write and display an example that demonstrates Strict Mode.

## Requirement 8 ##

Create a JavaScript string containing JSON syntax. The array name within the string should be skiResorts and the keys should be: resortName and resortState. For example, Alta and Utah. There should be at least 3 key:value pairs in the array. Use `JSON.parse()` to convert the string into a JavaScript object. Use an HTML element event to call a function you wrote named `displaySkiResorts()` that uses a loop to display the contents name and state data of the JSON object.

## Requirement 9 ##

Use an object constructor to create a player object with the following data members: firstName, lastName, height, yearsInLeague. Use the keyword “this” to set the values. Include a function in the object to update the yearsInLeague data. Use an HTML element event to call a function you wrote named `initializePlayer()` that creates a new player instance and displays the new instance data.

## Requirement 10 ##

Use an HTML element event to call a function you wrote for the player object to update the yearInLeague data. Display the result (a confirmation of the update).

## Requirement 11 ##

Use the prototype property to add a new data member to the player prototype named team. Use the prototype property to add a function to the player prototype which changes the team data. Use an HTML element event to call that function and display the result (a confirmation of the update).

---------------------------------------------------------------------------

# **Program 4** #

## Requirement 1 ##

Use an HTML element event to call a function you wrote named `findAverage()` that uses the argument object to determine and display the average of numbers.

## Requirement 2 ##

Write a function named `selfInvoke()` that uses a self-invoking function to display "#2 Hello from selfInvoke".

## Requirement 3 ##

Use an HTML element event to call a function you wrote named `closureExample()` that uses a closure to append user-supplied names.  Update/display the name list after each addition.  For example, (first time: "Abe" is displayed, second time: "Abe Bill" is displayed, third time: "Abe Bill Charlie" is displayed, etc.).

## Requirement 4 ##

Use an HTML element event to call a function you wrote named `colorChange()` that changes the background-color of HTML elements with the CSS class changeMyColor.

## Requirement 5 ##

Use an HTML element event to call a function you wrote named `fontSizeChange()` that changes the font size of HTML elements based on their tag name.

## Requirement 6 ##

Demonstrate the `onmouseover` and `onmouseout` events by changing an image source to display a different image.

## Requirement 7 ##

Demonstrate the onmousedown and onmouseup events by changing the text and color of a <div> element.

## Requirement 8 ##

Add an `eventlistener` to a `<div>` element for the click event that produces an alert. The listener should call a function that you write named `handleDivClick()`. Use bubbling propagation.

## Requirement 9 ##

Use an HTML element event to call a function you wrote named `domContent()` that writes all of the HTML content to an alert.

## Requirement 10 ##

Use an HTML element event to call a function you wrote named `changeContent()` that gets the `firstChild.nodeValue` of a `<p>` element and uses it to reset the innerHTML of an `<h1>` element.

## Requirement 11 ##

Use an HTML element event to call a function you wrote named `createNode()` which creates a `<p>` element with the content “This is a new paragraph element” and append that `<p>` element to an existing `<div>` element.

## Requirement 12 ##

Use an HTML element event to call a function you wrote named `removeNode()` to reverse the operation of requirement 12 by removing the new `<p>` element.

## Requirement 13 ##

Use an HTML element event to call a function you wrote named `changeNodeList()` to change the background-color of all `<div>` elements in a node list.

-------------------------------------------------------------------------------------

# **Program 7** #

## Requirement 1 ##

Use the jQuery `hide()` method to hide all three colored <div> when a hide button is clicked. Use the jQuery `show()` method to show all three colored <div> when a show button is clicked. Set the `hide()` and show() to occur over 300 milliseconds.

## Requirement 2 ##

Use the jQuery `toggle()` method to hide/show the three <div> from item 1.  Set the toggle() to occur over 700 milliseconds.

## Requirement 3 ##

Include a table with at least 10 rows. Odd and even rows should be different colors. Include a button to toggle hide/show the odd rows and a button to toggle hide/show the even rows.
## Requirement 4 ##

Include an element that uses jQuery to toggle-fade a `<footer>` element on the page for 1000 milliseconds.

## Requirement 5 ##

Include an element that uses jQuery to fade a `<section>` from black to 20% of black to reveal the word “Hello”.

## Requirement 6 ##

Center two `<div>` elements on the page and use jQuery to toggle-slide the appearance of the lower by clicking the upper.

## Requirement 7 ##

Include two 100x100px `<div>` elements. Float one to the left (left-div) and the other to the right (right-div). Include a button “#7 Move Left-Div” which moves the left-div to the right 200px. Include a button “#7 Move Right-Div” which moves the right-div to the left 200px.

## Requirement 8 ##

Include the text “jQuery Growing” in a `<div>` element. Include a <button> that causes the text to animate slowly up to 5em.

## Requirement 9 ##

This is similar to item 7 but uses a callback and only one button. Include two 100x100px `<div>` elements. Float one to the left (left-div) and the other to the right (right-div). Include a button “#9 Demonstrate Callback” which moves the left-div to the right 200px and then invokes a callback to move the right-div to the left 200px.

## Requirement 10 ##

Start with a 100x100px `<div>`. Include a button which invokes animation to increase the height to 400px. Using chaining, hide the `<div>` over 3000 milliseconds.