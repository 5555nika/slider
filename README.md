# Image Slider 
A lightweight and simple image slider built with vanilla JavaScript. It allows users to cycle through a collection of slide items using a navigation system.

##Features
- Dinamic Navigation: Smoothly swithes between slides based on index.
- Circular Looping: Automatically wraps around to the first slide after the last one, and vice versa.
- State Management: Uses a currentIndex variable to track the active slide and toggle visibility classes.

  ## How it works

   The slider uses a show(index) function to manage the active state.
  - It hides the current slide by adding a 'hidden' CSS class.
  - It updates the current index,ensuring it stays within the bounds of the slideItem array.
  - It reveals the new slide by removing the 'hidden' class.
