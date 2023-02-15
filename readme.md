![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-about-Angular?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-about-Angular?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-about-Angular?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-about-Angular?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-about-Angular?color=yellow&style=for-the-badge)


***
<img align="left" alt="React" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" /> 



# &nbsp;- ALL ABOUT REACT - ✔

This "All about React"-repository catches up its focus on all the Projects and Excercises I've made with React through the coding years, which is a good way to keep track of my progress. I will also add some useful information about React and its usage.
        
* test [HERE](dfdf)


<br />
<br />


***
## Folder Directory
***

| Topic | Content  | 
|:--------------| :--------------|
| 01_Test |  test |


<br />
<br />

***
## Technologies and Installation ✅
***


**Node.js - INSTALLATION:** *(Used for runtime environment for Javascript, script performs directly on the computer and not just on a web browser)*
* https://nodejs.org/en/ (Recommend LTS = Long Term Support for an unbuggy / non-risky experience)
* Open BASH or CMD or POWERSHELL to check with node --version if you installed it correctly
* Node works via the command lines and is not executed via graphical components.
* Together with NODE we also get the tool "Node Package Manager" = software can be installed via the command line!
<br />

**Angular - INSTALLATION:** *(Our CLI: Command Line Interface)*
* https://angular.io/cli (npm install -g @angular/clie)
<br />

**VSC and CHROME** *(Code Editor and Webbrowser)*
* Chrome is recomended because of the close origin of Angular by Google
<br />



NODEMON - INSTALLATION:
* https://www.npmjs.com/package/nodemon 
* (Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected).
<br />
<br />

***
<img align="left" alt="Angular" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" /> 

<img align="left" alt="Typescript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" /> 


## &nbsp;Angular / Typescript - Useful Assistance ✅
***
``Angular`` = Javascript Framework ("vorprogrammiertes Programmiergerüst / Rahmenstruktur")

``Typescript`` = Javascript Extension "Erweiterung" (Superset)

<br />

_**WHY SHALL I USE ANGULAR?**_

- Provides components to effectively connect to the server or increase compatibility
- Scripts are already available (safe time) and here to simplify the programming process
- Other well-known Javascript frameworks are React and View
- Provides a variety of libraries (code libraries) -> **Material Design** for graphical components
- Built and used by Google = support is guaranteed

<br />

_**WHY DO WE USE TYPESCRIPT?**_

- This programming language is almost the same like Javascript, but it is an EXTENSION with some advantages
- Everything which can be written in Javascript is also possible with Typescript
- Old web browsers may not be able to read the constantly updated Javascript codes. Typescript remains at a rustic level, but at the same time we also write modernised Javascript

<br />

_**What's the difference between NULL and UNDEFINED?**_ (Table in GERMAN)

| NULL | UNDEFINED | 
|:--------------| :--------------|
|Bedeutung: Zuweisungswert = KEIN WERT! (var = no value) | Bedeutung: Variable wurde DEKLARIERT, aber noch nicht DEFINIERT / ZUGEWIESEN|
|In Javascript: Werte werden niemals auf null gesetzt | In Javascript: Als Standardwert festgelegt|
|In JSON: Gültiger Wert | In JSON: Ungültiger Wert |
|Element: Grundelement|Element: Grundelement|
|Typ: Objekt (Fehlen dessen Wertes) |Typ: Undefined (Globale Variable)|
|Prüfen: variable === null // true or false | Prüfen: variablenwert === undefined // true or false

<br />

_**What's the MEANING OF THE DEFAULT PACKAGING FOLDERS in ANGULAR?**_

* _node_modules_ = All additional external Libraries used for our Angular Project (Lots of default libraries)
* _src_ = Source for all the code we're typing over there (more folders will be added through the work)
  * _app_ = Components for the page (With Import and Export we generate dependencies and add only the content we need)
    * _app-routing.module.ts_ = All the URL of our page to call these later (Like /login or /register)
    * _app.component.html_ = HTML Code
    * _app.component.scss_ = SCSS Code
    * _app.component.ts_ = TTypescript / Javascript Code
    * _app.module.ts_ = Declared Components (out of our app-folder) and imported modules
  * _assets_ = Safe images, videos and sounds
  * _environment_ = Keep informations which may change: API keys, infos to our webapp like server URL changes
  * _index.html_ = FIRST OPENING FILE and binds the ``<body>``-part from app.component.html
  * _main.ts_ = Configurations (Imports the first module, the AppModule) - Dont have to be changed!
  * _polyfills.ts_ = Compability - Dont have to be changed!
  * _styles.scss_ = Basic styles for our application (INSERT CSS CODE HERE)
  * _test.ts_ = Configurations for TESTING our application - Dont have to be changed!
* _.browserlistrc_ = List of Webbrowser Output Support to show HTML, CSS and JS
* _.editorcofig_ = Configuration of our Code Editor VSC
* _.gitignore_ = All the data which shouldn't shown in .git
* _angular.json_ = Angular Project Configuration
* _karma.conf.js_ = Testrunner (To automatically test our Webapp)
* _package-lock.json_ = Overview of installed Libraries and Versions
* _package.json_ = Overview of the Package-libraries which have to be installed into node_modules
* _README.md_ = Basic instructions to initialize a project
* _tsconfig.json_ = Here to define which Javascript version we would like to convert our Typescript and typescript tests

<br />

(**IMPORTANT: src is the most used folder here, in general you keep the others unattached**)



***
## &nbsp;TERMINAL COMMANDS I USED HERE (FOR PRE-DEFINED WORKSPACE) ✅
***

| COMMAND | EFFECT  | 
|:--------------| :--------------|
| $ node --version | Checks the node.js version (None if you havent installed it) |
| $ npm --version | Checks the NPM Version (Node Package Manager) |
|$ npm install -g @angular/cli|Command to Install Angular CLI (Command Line Interface)|
|$ npm install -g typescript| Command to Install Typescript|
|$ ng --version | Checks the NG Version (Angular Version) |
|$ ng update | Shows which packages you could update to run the latest versions |
|$ ng update @angular/cli | BUT: First: Uninstall > Then: $npm cache verify command > Then: $npm install -g @angular/cli --- Updates the CLI-packages |
|$ ng update @angular/core | Updates the core-packages |
|tsc script.ts|TSC = Typescriptcompilation = Compiles the Typescript File script.ts to Javascript in script.js (only JS is readable for a browser)|
|(...move on...)| 1) Use Trick 17 to be in the right path = Right click of your desired file in your explorer > "OPEN IN INTEGRATED TERMINAL" > 2) Initialize Angular to the project with the NAME you want, for this example we use "my-first-project", the step next step will do this:|
|$ ng new my-first-project| Initializes your Project with a PRE DEFINED WORKSPACE  |
| (...move on...)| 3) y to accept routing for multiple subpages > 4) Choose Design language (like SCSS) > Installing small libraries (packages) > 5) Puts in all the packages to your "my-first-project"-folder (Component Architecture) > 6) OPEN in integrated folder (in this example at "my-first-project")|
|$ ng serve --open| Starts our project and opens at default port: localhost:4200 - The Content you see in your browser is from app component - ctrl + S to safe will activate auto load |
|(...move on...)| Open a NEW TERMINAL in the same folder, so it can run independetly and now add some MORE COMPONENTS (which work like INCLUDES in PHP)|
|$ ng g c header| Generates a new Angular component called "header" in the src > app-folder |
| ctrl + c | Stop Localhost|


<br />
<br />

***
## &nbsp;TERMINAL COMMANDS I USED HERE (FOR CUSTOM WORKSPACE) 🔧
***

* Test

| COMMAND | EFFECT  | 
|:--------------| :--------------|
| $ ng new my-first-project --create-application false --style scss | Initializes your Project with a CUSTOM WORKSPACE |

<br />
<br />

***
## Coding tips and tricks ✅
***

_**CONST vs LET vs VAR:**_
```js
/* ---- Notes ---- */

<script>
Test = "Hello World"; // Global Variable
</script>
```

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
| 0 | 0 | 0 |
