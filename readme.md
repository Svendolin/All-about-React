![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-about-Angular?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-about-Angular?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-about-Angular?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-about-Angular?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-about-Angular?color=yellow&style=for-the-badge)


***
<img align="left" alt="React" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" /> 



# &nbsp;- ALL ABOUT REACT - ✔

This "All about React"-repository catches up its focus on all the Projects and Excercises I've made with React through the coding years, which is a good way to keep track of my progress. I will also add some useful information about React and its usage.

_**What is REACT?**_

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.  Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.
        

<br />
<br />


***
## 0) Folder Directory
***

| Topic | Content  | 
|:--------------| :--------------|
| 01_TodoList |  Created a simple todo list with react to learn how it works |


<br />
<br />

***
## 1) Technologies and Installation ✅
***


**Node.js - INSTALLATION:** *(Used for runtime environment for Javascript, script performs directly on the computer and not just on a web browser)*
* https://nodejs.org/en/ (Recommend LTS = Long Term Support for an unbuggy / non-risky experience)
* Open a command line on your computer like BASH or CMD or POWERSHELL to check with "node --version" if you installed it correctly
* Node works via the command lines and is not executed via graphical components.
* Together with NODE we also get the tool "Node Package Manager" = NPM. NPM is used to install additional libraries and frameworks. You can check the version with "npm --version"
<br />

**VSC and CHROME** *(Code Editor and Webbrowser)*
* Chrome is recomended because of the close origin of Angular by Google
<br />

**VSC REACT EXTENSION** *(Some react snippets)*
* Look for: ES7+ React/Redux/React-Native snippets in the extensions tab of Visual Studio Code

* With those extensions you can use the following shortcuts to create a react component for example:
rafc = React Arrow Function Component
rafce = React Arrow Function Component with Export

**TAILWINDCSS with Create React App** *(Slightly deprecated)*
* Direct Link: https://tailwindcss.com/docs/guides/create-react-app
<br />

**TAILWINDCSS with VITE** *(Up to date!)*
* Direct Link: https://tailwindcss.com/docs/guides/vite
<br />
<br />
<br />




<!-- NODEMON - INSTALLATION:
* https://www.npmjs.com/package/nodemon 
* (Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected).
<br />
<br /> -->

***

<img align="left" alt="create react app" width="35px" src="https://cdn.worldvectorlogo.com/logos/create-react-app.svg" />

## &nbsp;TERMINAL COMMANDS with "CREATE REACT APP" (Slightly deprecated) to start a project ✅
***

| STEP | COMMAND | EFFECT  | 
|:--------------| :--------------| :-------------
|X| Open in integrated terminal | Opens the terminal in VSC |
|X| $ node --version | Checks the node.js version (None if you havent installed it) |
|X| $ npm --version | Checks the NPM Version (Node Package Manager) |
|X| $ npx create-react-app todoapp --use-npm | Initializes your Project with a PRE-DEFINED WORKSPACE which I've called "todoapp" |
|X| $ cd todoapp | Changes the directory to the "todoapp" folder to start |
|X| $ npm start | Starts the React App |
|X| ctrl + c | Stops the React App |

<br />
<br />

***

<img align="left" alt="vite" width="35px" src="https://vitejs.dev/logo-with-shadow.png" />

## &nbsp;TERMINAL COMMANDS with "VITE" to start a project ✅
***
``VITE`` = Is a faster way to install the package to start a project. Vite uses a native ES module based build pipeline that is significantly faster than traditional bundlers like Webpack or Parcel. The browser refreshes as you edit files, which means you can develop without waiting for a build to finish.


| STEP | COMMAND | EFFECT  | 
|:--------------| :--------------| :-------------
|1| Open in integrated terminal | Opens the terminal in VSC |
|2| $ node --version | Checks the node.js version (None if you havent installed it) |
|3| $ npm --version | Checks the NPM Version (Node Package Manager) |
|4| $ npm install -g vite | Installs Vite |
|5| $ npm create vite@latest | Asks for a project name. Choose a name and type in like for example "todoapp" > asks for a "selection of framework" > "react" > "Javascript" |
|6| $ cd todoapp | Changes the directory to the "todoapp" folder to start |
|7| $ npm install | Installs all the dependencies |
|8| $ npm run dev | Starts the React App |
|9| ctrl + Click on the localhost link | Given in the terminal, click on the link like "http:// localhost:5173/" to open a new window in the browser |
|0| ctrl + c | Stops the React App |


<br />
<br />

***
<img align="left" alt="React" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" /> 


## &nbsp;2) React - Useful Assistance after installation ✅
***
``DOM`` = The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

=> VITE will overwrite some folderstructure names, so don't be confused if it looks different than the general structre as shown down below!

<br />

_**FOLDERSTRUCTURE or a project with React:**_

* _node_modules_ = All additional external Libraries used for our React App which are installed and handeled via NPM. No need to touch this folder.
* _public_ = All the files which are public and can be accessed by everyone
  * _favicon.ico_ = Icon for our Webpage
  * _index.html_ = FIRST OPENING FILE and binds the ``<body>``-part from index.js. Everything will be integrated in this id="root" div down below this script. No further changes needed.
  * _manifest.json_ = Configuration for our Webapp (Name, Description, Icon, etc.)
  * _robots.txt_ = Configuration for Search Engines (What should be indexed and what not)
* _src_ = All the files which are private and can only be accessed by us (this is our workspace)
  * _App.css_ = Styling for our App.js
  * _App.js_ = Main Component which is called in index.js
  * _App.test.js_ = Testfile for our App.js
  * _index.css_ = Styling for our index.js
  * _index.js_ = ROOT COMPONENT: First opening file which binds the ``<body>``-part from index.html. Everything will be integrated in this id="root" div down below this script. No further changes needed.
  * _logo.svg_ = Logo for our Webpage
  * _reportWebVitals.js_ = Performance measurement for our Webpage
  * _setupTests.js_ = Testfile for our App.js


<br />
<hr>
<br />

_**What are COMPONENTS?**_

- (I would personally recommend to create a folder called "components" in the "src" folder and add all your components in there. This way you can keep your code clean and structured).

<img align="center" alt="Canvas Picture" src="https://dmitripavlutin.com/react-props/cover.png" /> <br>



- React is a component based framework which means that we can create components and use them in other components. This is the way how we can create a modular and reusable code.

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components. 

- Functional components are basically just JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

<br />

_**What is JSX?**_

- Combines HTML and JavaScript to get a a functionable appluication.
- Usually, React components are written in JavaScript. But, JSX is a syntax extension to JavaScript. It is a syntax that allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX is a preprocessor step that adds XML syntax to JavaScript. It is not necessary to use JSX, but it is recommended to use it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

- If you take a look at the components up there: app.js got such HTML content while App.css got the styling for it. Index.js imports the App.js and binds it to the id="root" div in index.html. This is the way how React works. 


<br />

_**How do we STYLE COMPONENTS? (with TailwindCSS for example)**_

- ...

<br />

_**How do COMPONENTS COMMUNICATE?**_

- ...

<br />

_**What are PROPS and STATES?**_

- ...

<br />

_**What are REACT HOOKS?**_

- ...

<br />





***

<img align="left" alt="Tailwindcss" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" /> 

## &nbsp;3) TERMINAL COMMANDS for the  project to move on if you want to use TAILWINDCSS  ✅
***

* Get the documentation [HERE](https://tailwindcss.com/docs/guides/vite)

| STEP | COMMAND | EFFECT  | 
|:--------------| :--------------| :--------------|
|1| $ npm install -D tailwindcss postcss autoprefixer | Install Tailwind CSS |
|2| $ npx tailwindcss init -p | Initialize Tailwind CSS with a post config file to configurate stuff |
|3| Copy and replace the following code into the tailwind.config.js file: | Down below: |

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
| STEP | COMMAND | EFFECT  | 
|:--------------| :--------------| :--------------|
|4| Copy and replace the following code into "src" > "index.css" | Down below: |

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

| STEP | COMMAND | EFFECT  | 
|:--------------| :--------------| :-------------
|5| Copy the h1-html code below into "src" > "App.jsx" | Down below: |

```JS
function App() {
  const [count, setCount] = useState(0);

 
  return (
    <div className="App">
    <!-- Over here we start using Tailwind’s utility classes to style our content -->
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
      <!-- Copy-END -->
    </div>
  );
}
```

| STEP | COMMAND | EFFECT  | 
|:--------------| :--------------| :-------------
|x| $ npm run start | Run the process with create react app OR: |
|6| $ npm run dev | Run the process with VITE | 

<br />
<br />

***
## Collaboration ✅
***
> Feel free to contact me if you've seen something wrong, found some errors or struggled on some mistakes! Always happy to have a clean sheet here! :)


<br />
<br />

***
## FAQs ✅
***
0 Questions have been asked, 0 answers have been given, 0 changes have been made.

| Questions | Anwers | Changes |
|:--------------|:-------------:|--------------:|
| 1 | 1 | 1 |

**_"How to fix Unknown at rule @tailwindcss (unknownAtRules) in VS Code?"_**

1) Go to the settings of VS Code ("File" > "Preferences" > "Settings")
2) Write "unkno" into the search bar for "unknownAtRules"
3) Change "warning" to "ignore" and save the changes at "CSS > Lint: Unknown at rules"-section

<hr>
