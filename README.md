![Frontend Mentor logo](docs/images/screenshots/logo-frontend-mentor.png)

# Sunnyside agency landing page

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Developer](#developer)
- [Notice](#notice)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

![Responsively App scrollable device mockups](docs/images/screenshots/responsively-sunnyside-agency-landing-page-solution.gif)

### Links

- [GitHub repository](https://github.com/loosenthedark/frontend-mentor_sunnyside-agency-landing-page)
- [Live site](https://loosenthedark.github.io/frontend-mentor_sunnyside-agency-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript event handling
- Mobile-first workflow
- Responsive web design

### What I learned

- I wanted to have a bit of fun by flipping one of the site's ['Services' `section`](https://loosenthedark.github.io/frontend-mentor_sunnyside-agency-landing-page/#services)'s background images on its head. To achieve this, I had to leverage an absolutely-positioned [`::before` pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::before). This pseudo-element's `transform` property was then used to perform the desired rotation:

![](docs/images/screenshots/background-image-rotation-css-snippet.png)

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- ['Fixed page header overlaps in-page anchors'](https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors) (Stack Overflow) was used to find a pure CSS workaround for this persistent issue caused by the site's `nav.fixed-top` covering the top portion of each anchor link area
- ['Hey, what about the figure element?'](https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/#hey-what-about-the-figure-element) from [this CSS Tricks article](https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/) was used as a reference in an effort to follow semantic HTML5 best practices when coding the site's ['Client Testimonials' `section`](https://loosenthedark.github.io/frontend-mentor_sunnyside-agency-landing-page/#clients)
- ['How to Apply CSS3 Transforms to Background Images'](https://www.sitepoint.com/css3-transform-background-image/) (SitePoint) was used to rotate one of the background images featured in the site's ['Services' `section`](https://loosenthedark.github.io/frontend-mentor_sunnyside-agency-landing-page/#services) 180 degrees on tablet and desktop ([see above](#what-i-learned))
- [W3Schools HTML Colour Picker](https://www.w3schools.com/colors/colors_picker.asp) was used for generating on-the-fly colour pairings and modifications (lightening, darkening etc. of core project colours)
- [Box Shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html) was used to gauge the correct amount of `box-shadow` for the site's off-canvas `navbar-nav` menu on mobile
- [PicResize (online image editing tool)](https://picresize.com/) was used to crop and resize images
- [TinyJPG (online image compression tool)](https://tinyjpg.com/) was used for image compression
- [Responsively App](https://responsively.app/) was used to capture video of scrollable device emulators showcasing this solution's responsive mobile-first layout
- [Ezgif](https://ezgif.com/) was then used to convert this video to the `gif` format for inclusion in the [Screenshots](#screenshots) section of this Markdown file
- [Ray.so:](https://ray.so/) was used to create the code block images featured in this Markdown file

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Developer

- [Website](https://loosenthedark.tech/)
- [LinkedIn](https://www.linkedin.com/in/paulharrington05/)
- [GitHub](https://github.com/loosenthedark)
- [Frontend Mentor](https://www.frontendmentor.io/profile/loosenthedark)
- [Twitter](https://twitter.com/loosenthedark)

## Notice

This site has been created for development purposes only.