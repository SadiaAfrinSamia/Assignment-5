1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
>>>>
getElementById selects a single element by its unique ID. getElementsByClassName selects all elements with a certain class and gives a live collection. querySelector selects the first element that matches a CSS selector, while querySelectorAll selects all elements that match and gives a static list.


2.How do you create and insert a new element into the DOM?
>>>>
To add a new element, we first create it, give it content or attributes, and then insert it into the DOM at the desired place, like inside a div or the body.


3.What is Event Bubbling and how does it work?
>>>>
Event bubbling is when an event on an element, like a click, first happens on that element and then moves up to its parent, grandparent, and so on, until it reaches the document.


4.What is Event Delegation in JavaScript? Why is it useful?
>>>>
Event delegation is a technique where you add one event listener to a parent element instead of many child elements. It checks which child triggered the event, making it faster and useful for dynamic content.


5.What is the difference between preventDefault() and stopPropagation() methods?
>>>>
preventDefault() stops the browser’s default action, like opening a link or submitting a form. stopPropagation() stops the event from moving up to parent elements, preventing bubbling.
