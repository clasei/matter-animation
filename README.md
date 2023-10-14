# matterAnimation
A simple and accessible way to create animations with Matter.js

## Table of Contents
- [Overview](#overview)
- [How to Use](#how-to-use)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Customize the Animation](#customize-the-animation)
  - [Ball Creation & Properties](#ball-creation--properties)
  - [Animation Area](#animation-area)
  - [Running Your Changes](#running-your-changes)
- [Contributing & Support](#contributing--support)
- [License](#license)

## Overview

"matterAnimation" provides a straightforward, ready-to-run setup of an animated bouncing ball using Matter.js. Simply put, it's energy transformed into a digital, interactive form - a small tribute to the transformative potential of matter and energy.

## How to Use

Want to utilize this animation setup or adapt it to your own ideas? Here’s a quick guide to get you bouncing around!

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- A text editor and a browser for testing.

### Installation & Setup

**Clone/Download this Repository**
   
   Feel free to clone this repo or download the files.

   `git clone https://github.com/clasei/matter-animation.git`


## Customize the Animation

### Ball Creation & Properties
In `animationMatter.js` find the `initAnimation` function. The `ball` object is created and defined within. Feel free to modify the properties.

    ball = Bodies.circle(150, 0, 25, {
        density: 0.03,
        frictionAir: 0.003,
        restitution: 0.9,
        friction: 0.01,
        render: {
            fillStyle: 'pink',
            strokeStyle: 'pink',
            lineWidth: 7
        }
    });

### Animation Area
To modify the animation's stage, locate the rendering settings in `animationMatter.js`.

        render = Render.create({
        element: document.getElementById('animation'),
        engine: engine,
        options: {
            width: 300,
            height: 380,
            wireframes: false
        }
    });

### Running Your Changes
Save your changes and open `index.html` in your browser. Enjoy the playful bounce of your custom ball in the interactive canvas!

## Contributing & Support
Feel free to fork, modify, and utilize matterAnimation in your projects. For queries, issues, or contributions, kindly [open an issue](https://github.com/clasei/matter-animation/issues/new) and let’s keep the ball rolling.

## License
This project is open source, under the [Creative Commons License](https://creativecommons.org/publicdomain/zero/1.0/deed). The Matter.js library created by [liabru](https://github.com/liabru/matter-js) utilized in the project is under the [MIT License](https://github.com/liabru/matter-js/blob/master/LICENSE).
