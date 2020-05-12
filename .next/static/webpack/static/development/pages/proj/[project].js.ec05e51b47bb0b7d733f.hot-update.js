webpackHotUpdate("static/development/pages/proj/[project].js",{

/***/ "./database/projects.js":
/*!******************************!*\
  !*** ./database/projects.js ***!
  \******************************/
/*! exports provided: projects, otherProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherProjects", function() { return otherProjects; });
var projects = [{
  project: "Hsu Website",
  ongoing: true,
  quote: "Dynamically Rendered Portfolio Site & Blog",
  description: "Dynamically Rendered Front-End Website for Violist—Serena Hsu",
  links: [{
    text: "GitHub",
    src: "//github.com/wc356/Code-Card"
  }],
  technology: ["ReactJS", "JavaScript", "styled-jsx", "Git", "Markdown", "Responsive Design"],
  body: [{
    OVERVIEW: "The project was initially created for my personal need of a flash-card application with special markdown to properly render code. I wanted an app that would let me study code-related subjects—datastructures, algorithms, leetcode, etc.—on the computer and on mobile devices that supported code markdown. It allows the end user to make flashcard with the problem and the solution in code, with the user's selected coding language of choice."
  }, {
    APPROACH: ["Identify the Components of the App", "Case Studies of Exisiting Apps", "Identify Necessary Tools—React Markdown", "Styling and Implementation"]
  }, {
    CHALLENGES: ["Learning the syntax of React-Markdown"]
  }, {
    REFLECTIONS: ["Though the project is still ongoing, I would like to be able to implement a database and an authorization for all users to Add and Save their cards. As of now, the temporary placeholder for newly added cards is Local Storage, which is definitely not a viable solution to save the cards.", "It would be great to make the app a Progressive Web App so that users can access the app offline, and download the app on their devices."]
  }],
  pictures: [{
    path: "/images/01_codecards.gif",
    caption: "Mobile-First Design & Card Counter"
  }],
  cover: "/images/01_codecards.gif"
}, {
  project: "Code Cards",
  ongoing: true,
  quote: "Flashcard Study App For Developers",
  description: "Front-end flashcard application with built-in code block markdown",
  links: [{
    text: "GitHub",
    src: "//github.com/wc356/Code-Card"
  }],
  technology: ["ReactJS", "JavaScript", "styled-jsx", "Git", "Markdown", "Responsive Design"],
  body: [{
    OVERVIEW: "The project was initially created for my personal need of a flash-card application with special markdown to properly render code. I wanted an app that would let me study code-related subjects—datastructures, algorithms, leetcode, etc.—on the computer and on mobile devices that supported code markdown. It allows the end user to make flashcard with the problem and the solution in code, with the user's selected coding language of choice."
  }, {
    APPROACH: ["Identify the Components of the App", "Case Studies of Exisiting Apps", "Identify Necessary Tools—React Markdown", "Styling and Implementation"]
  }, {
    CHALLENGES: ["Learning the syntax of React-Markdown"]
  }, {
    REFLECTIONS: ["Though the project is still ongoing, I would like to be able to implement a database and an authorization for all users to Add and Save their cards. As of now, the temporary placeholder for newly added cards is Local Storage, which is definitely not a viable solution to save the cards.", "It would be great to make the app a Progressive Web App so that users can access the app offline, and download the app on their devices."]
  }],
  pictures: [{
    path: "/images/01_codecards.gif",
    caption: "Mobile-First Design & Card Counter"
  }],
  cover: "/images/01_codecards.gif"
}, {
  project: "Web-Portfolio",
  ongoing: true,
  quote: "Dynamic site with custom design & prototyping",
  description: "Front-end website built with React and Next",
  links: [{
    text: "GitHub",
    src: "//github.com/wc356/portfolio-website"
  }],
  technology: ["ReactJS", "NextJS", "JavaScript", "styled-jsx", "responsive-design", "dynamic pages | routing", "Adobe XD | prototyping", "Git"],
  body: [{
    OVERVIEW: "The website consists of two main parts—the portfolio page and the blog. The portfolio page is then broken down into five parts—landing, about me, selected projects, other projects, and contact. GitHub, LinkedIn, CodePen and the blog is located in the navigation bar located in the top right corner."
  }, {
    APPROACH: ["Design & Sketch", "Prototype with AdobeXD", "Implementation", "Styling", "Hosting"]
  }, {
    CHALLENGES: ["Learning a new Framework—NextJS", "Dynamic Routing, SSR, CSR", "Storing, managing and rendering data objects", "UI/UX"]
  }, {
    REFLECTIONS: ["I would take more time to study and outline my goals clearly to determine a better-suited tool for my needs. In retrospect, I would have been better off using GatsbyJS for this project as my purposes did not take much(if any) of the advantages NextJS's SSR offers. In choosing SSR, I was hard-stuck on hydration issues where the SSR did not match the CSR in the version of NextJS I have been working with (9.3.4). However, I am THOROUGHLY enjoying the sheer convenience in NextJS and Zeit's deployment system with automatic integration of Git repository. Using NextJS allowed me to be hassle-free in deployment and test out the production of my website on different platforms and devices.", "In the next phase of the project, I would consider making a CMS, as it would allow for better management and organization of content over time, and allows for better scaling as well.", "Bootstrapping would have been a great framework to implement and save time. However, I do think that not relying on such a framework like Bootstrap allowed the project to be light-weight and prevent any bloating.", "Through this project, I realized how important it is to plan ahead, and think about how to implement the overall structure—CSS, database, HOC—into an easy to manipulate and scalable network. For example, I would try and use 'em' and 'rem' units for the fonts, padding and margins to support scalability, accessibility, and responsive design. Use of such relative units would allow for modular components, even though they might also bring some complexity to the code. Another point I wish I had implemented is using a central index data point for easy manipulation/alteration of data."]
  }],
  pictures: [{
    path: "/images/01_portfolio.gif",
    caption: "AdobeXD Prototyping"
  }, {
    path: "/images/02_portfolio.gif",
    caption: "Landing Page"
  }, {
    path: "/images/03_portfolio.gif",
    caption: "Blog"
  }],
  cover: "/images/02_portfolio.gif"
}, {
  project: "Expensify",
  ongoing: false,
  quote: "Quickly Sort & Track your Expenses",
  description: "Full-stack web application built with React and Redux",
  links: [{
    text: "GitHub",
    src: "//github.com/wc356/react-expensify"
  }, {
    text: "Try Demo",
    src: "//react-expensify-woo.herokuapp.com/"
  }],
  technology: ["ReactJS", "Redux", "JavaScript", "react-router", "Webpack", "Babel", "Jest", "Enzyme", "Firebase", "Heroku", "Git", "SCSS | SASS", "auth"],
  body: [{
    OVERVIEW: "The project largely consists of four main parts—the login page, dashboard, add expense page, and lastly the edit expense page."
  }, {
    APPROACH: ["Watch and Read Instructions", "Complete Challenges", "Search for Necessary Dependencies"]
  }, {
    CHALLENGES: ["Learning/Implementing Redux", "Testing with Jest", "Setting up Authentication"]
  }, {
    REFLECTIONS: ["Rather than using Heroku, I would consider alternative deploy methods because of the long initial loading time.", "Having access to any users' data, this project made me rethink about data privacy.", "How might I alter the project to better scale overtime? Increase in traffic, data, and mobile support?"]
  }],
  pictures: [{
    path: "/images/01_expensify.gif",
    caption: "Authorization | Google Login API"
  }, {
    path: "/images/02_expensify.gif",
    caption: "Dashboard & Add Expense"
  }, {
    path: "/images/03_expensify.gif",
    caption: "Sort & Filter Expenses"
  }],
  cover: "/images/03_expensify.gif"
}, {
  project: "Specula",
  ongoing: true,
  quote: "Compare and Track Phone Specs",
  description: "Full-stack web application built with React",
  links: [{
    text: "GitHub",
    src: "//github.com/wc356/specula-v2"
  }, {
    text: "Try Demo",
    src: "//specula.now.sh"
  }],
  technology: ["ReactJS", "NextJS", "JavaScript", "HTML", "CSS | SASS", "Adobe Indesign", "hosting", "Git"],
  body: [{
    OVERVIEW: "The website consists of two main parts—the phones dashboard page and add phone page. In the dashboard page, one can view a list of phones with their specifications—release date, price, brand, etc. By using the drop-down menu, one can sort the phones in order of price, release date, or brand. The add phone page allows the user to create their own phone and set the specifications to see how a new phone would compare to the existing line-up."
  }, {
    APPROACH: ["Design & Sketch", "Prototype with Indesign", "Implementation", "Styling", "Hosting"]
  }, {
    CHALLENGES: ["Dynamic Routing, SSR, CSR, and Hydration", "State management with Redux (failed due to latest NextJS version update & hydration issue) vs Context API", "Storing, managing and rendering data objects", "UI/UX"]
  }, {
    REFLECTIONS: ["I would consider using Bootstrap to lessen the time needed for styling basic objects, and to quickly develop a responsive design.", "Would like to refactor the styling files to be more efficient—with a components library to be made and imported and reused repeatedly instead of having to rewrite repetitive code."]
  }],
  pictures: [{
    path: "/images/01_specula.png",
    caption: "Adobe Indesign | visual study"
  }, {
    path: "/images/01_specula.gif",
    caption: "Dashboard & SortBy"
  }, {
    path: "/images/02_specula.gif",
    caption: "Add Phone Page"
  }, {
    path: "/images/03_specula.gif",
    caption: "Remove Phone & save to Local Storage"
  }],
  cover: "/images/01_specula.gif"
}, {
  project: "React-Tetris",
  ongoing: false,
  quote: "The Classic Tetris Game",
  description: "Original Tetris game built with React",
  links: [{
    text: "GitHub",
    src: "//github.com/wc356/React-tetris"
  }, {
    text: "Try Demo",
    src: "//react-tetris-two.now.sh"
  }],
  technology: ["ReactJS", "JavaScript", "create-react-app", "SCSS | SASS", "Git"],
  body: [{
    OVERVIEW: "The project consists of a single dashboard page where one can play Tetris. Each cell was made with an array filled with default values, which were then compared to the player's tetromino value to check for collisions. Custom hooks were implemented to set player's default position, set game status, set interval, and to update the stage when leveled up."
  }, {
    APPROACH: ["Understand the Game", "Set the stage—empty cells with array values", "Add game functionalities", "Optimization—memo, UI/UX"]
  }, {
    CHALLENGES: ["Identifying the edge cases—tetromino rotation, re-render optimization, etc.", "Understanding Custom Hooks setup and Array fill methods.", "Game Development versus Web Development—understanding the differences."]
  }, {
    REFLECTIONS: ['In the next iteration, I would like to implement "ghost blocks" feature, the player can see the block outcome before the fall.']
  }],
  pictures: [{
    path: "/images/01_tetris.gif",
    caption: "Start Game"
  }, {
    path: "/images/02_tetris.gif",
    caption: "Clear Lines & Increase Level"
  }],
  cover: "/images/02_tetris.gif"
}, {
  project: "Indecision",
  ongoing: false,
  quote: "Get Things Done",
  description: "Front-end web application built with React",
  links: [{
    text: "GitHub",
    src: "//github.com/wc356/react-indecision"
  }, {
    text: "Try Demo",
    src: "//react-indecision.now.sh"
  }],
  technology: ["ReactJS", "JavaScript", "Babel", "SCSS | SASS", "Git", "Webpack"],
  body: [{
    OVERVIEW: "The project is a simple and intuitive web application that randomly allows the user to get started on any task of his or her entries of tasks. The dashbboard page shows the list of entered tasks, and the input at the bottom allows user to add an option."
  }, {
    APPROACH: ["Separate into Components and Styles folder", "Styles into compartments—Base and Components"]
  }, {
    CHALLENGES: ["While the application itself may be simple, I wanted to focus on organizing files, styling and structuring to recommended practices. It took a bit of time trying to figure out how to organize things into the organized structure at first."]
  }, {
    REFLECTIONS: ["The project is a quick exercise and was good for getting some more practice into the basic functionalities of React."]
  }],
  pictures: [{
    path: "/images/01_indecision.gif",
    caption: "Add and select Task"
  }],
  cover: "/images/01_indecision.gif"
}];
var otherProjects = [{
  project: "Ravenous 🍟",
  link: "//github.com/wc356/react-ravenous",
  description: ["ReactJS", "JavaScript", "SASS", "HTML"]
}, {
  project: "Chorebot 🤖",
  link: "//github.com/wc356/chorebot",
  description: ["JavaScript", "SASS", "HTML"]
}, {
  project: "Tech-Web 👩🏻‍💻",
  link: "//github.com/wc356/CSS-Tech-Web",
  description: ["HTML", "CSS"]
}];

/***/ })

})
//# sourceMappingURL=[project].js.ec05e51b47bb0b7d733f.hot-update.js.map