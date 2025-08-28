

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

* **getElementById()** Finds **one element** by its unique ID. If not found, returns **null**.
* **getElementsByClassName()** Finds **all elements** with the same class. Returns a live list (updates if DOM changes).
* **querySelector()** Finds the **first element** that matches a CSS selector. Returns **null** if no match.
* **querySelectorAll()** Finds **all elements** that match a CSS selector. Returns a fixed list (does not update after DOM changes).




## How do you create and insert a new element into the DOM?


```javascript
// Create element
const div = document.createElement('div');
div.textContent = 'Hello';

// Add it to the page
document.body.appendChild(div);
```



## What is Event Bubbling and how does it work?

Event bubbling means the event starts on the **clicked element** and goes **up** to its parents, then to the document.



## What is Event Delegation in JavaScript? Why is it useful?


Event delegation is when you add **one event listener** to a parent element instead of many listeners on each child. It is useful because:

* Uses **less memory**
* **Faster** (fewer listeners)
* Works for **new elements** added later



## What is the difference between preventDefault() and stopPropagation() methods?

* **preventDefault()** → Stops the default action (form submit, link click, etc.).
* **stopPropagation()** → Stops the event from going up to parent elements.