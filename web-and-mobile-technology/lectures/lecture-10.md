<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033446.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Uf4Vg7Bx9JbQ7OSDJJBzQysNHxM%3D&Expires=1776881833' alt='OCR图片'/></div>

## SE2020-Web Technologies and Mobile Lecture 10

## NodeJS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_2_1776277033499.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kL1i3O%2BpqJbQnWykQ55Z%2Bfv0tuM%3D&Expires=1776881833' alt='OCR图片'/></div>

## Agenda

Asynchronous JavaScript

NodeJS - Introduction

Event loop

Use Cases

Advantages and Disadvantages

Package Manager

Core Modules & File System

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033505.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QGVCoj5hKhp3QlxA4BStfkuycZs%3D&Expires=1776881833' alt='OCR图片'/></div>

## Asynchronous JavaScript

- JS programs run using a single thread. Though there are ways to create new threads, it is considered as Single threaded language.

- It is considered asynchronous because it follows a Non-Blocking I/O (NIO) model.

- JavaScript is dynamically typed.

- JavaScript has an eventing system which manages it's asynchronous operations.

- What is Non-Blocking I/O (NIO) model?

O Non-Blocking I/O means that when JavaScript initiates an operation (like file reading, API requests, and timers), it does not wait for the operation to complete. Instead, it moves on to the next task while the operation executes in the background.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033533.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ir4a6RL8H11D%2BvzK2Rw5AtrapU4%3D&Expires=1776881833' alt='OCR图片'/></div>

## NIO Model - example

console.log("Start");

// Non-blocking I/O operation

setTimeout(() => {

    console.log("Data loaded");

}, 2000);

console.log("End");

Output:

Start

End

undefined

Data loaded

## Asynchronous Operation

```javascript

function fetchData() {

    setTimeout(() => {

        console.log("Data fetched!"); // Runs after 2 seconds

    }, 2000);

}

function processData() {

    console.log("Processing data...");

}

console.log("Starting fetch operation...");

fetchData();

processData();

Is everything look good??

```

Output: Starting fetch operation... Processing data...

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033544.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lPBIbH2l8bCqPGQLMSPKrKJSHzk%3D&Expires=1776881833' alt='OCR图片'/></div>

## Callback

A callback is a function passed as an argument to another function and is executed later usually after an asynchronous operation completes.

```javascript

function fetchData(callback) {

  setTimeout(() => {

    console.log("Data fetched!"); // Runs after 2 seconds callback();

  }, 2000);

}

function processData() {

  console.log("Processing data...");

}

console.log("Starting fetch operation...");

// Call fetchData first

fetchData(processData);

// Running other synchronous code while waiting

for (let i = 0; i < 5; i++) {

  console.log(`Executing synchronous task ${i + 1}`);

}

```

Output:

Starting fetch operation...

(Immediately executes the loop)

Executing synchronous task 1

Executing synchronous task 2

Executing synchronous task 3

Executing synchronous task 4

Executing synchronous task 5

(After 2 seconds delay)

Data fetched!

Processing data...

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033550.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kKCnDjk9P6OYDGI2ja%2FcDcK1Qqs%3D&Expires=1776881833' alt='OCR图片'/></div>

## Node JS

- NodeJs is a runtime environment that allows JavaScript to be executed on the server side.

- Created by Ryan Dahl to build fast and interactive web applications that need live updates (like chat apps using WebSockets)

- NodeJS is an open source, cross platform runtime environment for server-side and networking applications.

- Uses event-driven, non-blocking I/O model which makes NodeJS lightweight and efficient.

- Ideal for data-intensive real-time applications that run across distributed devices.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033555.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9zD6fXVuJlXiIztQjx4NWH3ouVw%3D&Expires=1776881833' alt='OCR图片'/></div>

## Event-Driven Model

- Flow of execution is determined by events, instead of following a sequential execution.

- How works?

O. The system listens for events and, when an event occurs, executes a callback function (event handler) without blocking execution, making event-driven systems more responsive and efficient

- Key components of event driven model:

Event emitter

Event listener

Call back function

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033562.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=78QZ69%2FZ8A%2Fl41mzzg387K6J2q4%3D&Expires=1776881833' alt='OCR图片'/></div>

## Event Loop

## Node.js (non-blocking) Event Loop

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033581.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FyRO2qJqEHgqbAQnmk8HnKmtJS0%3D&Expires=1776881833' alt='OCR图片'/></div>

The event loop is a core mechanism in Node.js that allows it to handle multiple operations without blocking execution, making it fast and efficient for real-time applications.

## Use Cases

- Not the best platform for CPU intensive heavy computational applications.

- Ideal for building fast and scalable network applications.

- NodeJS is capable of handling a huge number of simultaneous connections with high throughput.

- For each connection NodeJS does not spawn new Thread causing max out of memory instead handle all in single thread using non-blocking I/O model.

- NodeJS has achieved over 1 Million concurrent connections.

- Bubbling errors up to NodeJS core event loop will cause crashing the entire program.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033596.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=szN5JDcVUevxcSZXIA23LHN1JM4%3D&Expires=1776881833' alt='OCR图片'/></div>

## Use Cases - Activity

Discuss and write down a real-world success story of companies or projects that have effectively utilized Node.js?

PayPal: 35% Faster Response Time & 2x Requests per Second

Before:

PayPal's backend was built using Java.

The development was slow and required separate teams for frontend (JavaScript) and backend (Java). Java processes were heavy and slow for handling high-traffic payments.

After Switching to Node.js:

Unified frontend and backend teams, reducing development time.

Response time improved by 35%.

Node.js handled double the number of requests per second compared to Java.

33% fewer lines of code, making the system easier to maintain.

Lesson: Node.js improved performance and developer efficiency while handling large-scale transactions.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033602.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gUEN1yvmdc%2FEOsoQtWIF7FAuEx4%3D&Expires=1776881833' alt='OCR图片'/></div>

## Use Cases

- I/O bound applications.

- Data streaming applications.

- Data intensive real-time applications.

- JSON APIs based applications.

- Single page applications

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033607.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XpjEDig1Y1GA9Rc0b9Sh5Wucllo%3D&Expires=1776881833' alt='OCR图片'/></div>

## Advantages

- Ability to use single programming language from one end of the application to the other end.

- NodeJS applications are easy to scale both horizontally and vertically.

- Delivers improved performance since V8 engine compile the JS code into machine code directly.

- Performance increased via caching modules into memory after the first use.

- Easily extensible and support for common tools like unit testing.

- Well build 'npm' package manager and it's large number of reusable modules.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033612.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lCVanW2t9HuCDlOf%2BEFpElre5A8%3D&Expires=1776881833' alt='OCR图片'/></div>

## Disadvantages

- Even though there are number of libraries available,the actual number of robust libraries is comparatively low.

- Not suitable for computationally intensive tasks.

- Asynchronous programming model is complex than synchronous model.

## Exercise:

1. What are robust libraries?

2. What are the available robust libraries?

3. Why is the Number of Robust Libraries Low?

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033618.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=r5TMiH0fhVdFKBoFvaGCusUH4XQ%3D&Expires=1776881833' alt='OCR图片'/></div>

## Node Package Manager

- Reusable NodeJS components easily available through online repository.

- Build in dependency management, version and scripting mechanism.

- Global installations will be available throughout the system while local installations will only be available for that particular application.

- By default all the dependencies will get installed to 'node_modules' directory.

- 'package.json' contains all information related to the NodeJS application. The file be placed in the root directory of the application.

- 'package.json' will contain name, version, author, repository, required node version, scripts and dependencies etc.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033635.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LlLLn5lQ20X9%2BrXLKAq2JJp5lhI%3D&Expires=1776881833' alt='OCR图片'/></div>

## Node Package Manager... (cnt)

- To denote the compatible version numbers

<table border="1"><tr><td>Operator</td><td>Example</td><td>Meaning</td></tr><tr><td>&lt;=</td><td>“express”:“&lt;=4.18.2”</td><td>Installs version4.18.2or lower</td></tr><tr><td>&gt;=</td><td>“express”:“&gt;=4.18.2”</td><td>Installs version4.18.2or higher</td></tr><tr><td>~</td><td>“express”:“~4.18.2”</td><td>Allowsonly patch updates(4.18.xbut NOT4.19.0)</td></tr><tr><td>^</td><td>“express”:“^4.18.2”</td><td>Allowsminor&amp;patch updates(4.x.xbut NOT5.0.0)</td></tr><tr><td>$\cdot$</td><td>“express”:“$\cdot$”</td><td>Installsany available version(not recommended)</td></tr><tr><td>1.2.x</td><td>“express”:“1.2.x”</td><td>Installsany patch version(1.2.0,1.2.5,but NOT1.3.0)</td></tr><tr><td>latest</td><td>“express”:“latest”</td><td>Installs thelatest available versionfrom npm</td></tr></table>

- There are two types of dependencies,

- Dependencies: needed in runtime (e.g., express, mongoose)

- devDependencies: only for development (e.g., jest, nodemon)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033641.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=M7B2uzh%2F0nuv7RTb0vW8i0SNZls%3D&Expires=1776881833' alt='OCR图片'/></div>

## Core Modules

- A module is a reusable block of code. Each file in Node.js is treated as a separate module

- Three Types of Modules:

Core/Built-in Modules: Come with Node.js (fs, path, http, os)

Local Modules: Files you create yourself

Third-party Modules: Installed via npm (npm install chalk)

- Why Modules?

Reusability: Use the same code in multiple places

Avoid Conflicts: Each module has its own scope

Maintainability: Easier to find and fix bugs

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033646.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2LtMo%2BylqV3vykotpW%2B1koSW9xI%3D&Expires=1776881833' alt='OCR图片'/></div>

## Core Modules

## How Modules works

```javascript

const fs = require('fs');        // Core module

const myModule = require('./myModule'); // Local module

const chalk = require('chalk'); // npm module

```

## Create Local Modules

```javascript

JS greetings.js > ...

function sayHello(name) {

    return `Hello, ${name}!`;

}

function sayGoodbye(name) {

    return `Goodbye, ${name}!`;

}

// Export functions

module.exports = {

    sayHello: sayHello,

    sayGoodbye: sayGoodbye

};

```

## JS index.js > ...

1 `const greetings = require('./greetings');`

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033653.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qNrUvhHYHrwti1T9XZIBUZY6iBM%3D&Expires=1776881833' alt='OCR图片'/></div>

console.log(greetings.sayHello('Alice'));

console.log(greetings.sayGoodbye('Bob'));

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_2_1776277033658.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=atLfIZV1KGy41Cq%2FEdGR6Flb3x8%3D&Expires=1776881833' alt='OCR图片'/></div>

## File System (fs Module)

- The fs module is one of the most fundamental and widely-used modules in Node.js. It allows you to work with the file system.

Read files, Write files, Delete files, Create directories

- Data Persistence: When runs a Node.js program, all data stored in variables exists only in memory (RAM). When the program stops, all data is lost.

- Configuration Management: Every application needs settings that can be changed without modifying code.

- Logging and debugging: Track What Happens in Your Application.

- Files uploads and processing: Handle User-Generated Content.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033664.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=D%2FaanSP5arScsm%2BmpMRFWh4WCtQ%3D&Expires=1776881833' alt='OCR图片'/></div>

## Example:

1. Create Sample node project and inspect folder structure, package.json file and run sample hello world program.

JS index.js > ...

```javascript

//Import the chalk package

const chalk = require('chalk');

// Use it!

console.log(chalk.blue('Hello World!'));

console.log(chalk.red.bold('This is red and bold'));

console.log(chalk.green.underline('Success message'));

console.log(chalk.yellow.bgBlue('Warning!'));

// Combining styles

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

```

Output:

Hello World!

This is red and bold

Success message

Warning!

Hello World!

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033670.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vjfZhhgz9b0uklTQSCjgSPV57Y0%3D&Expires=1776881833' alt='OCR图片'/></div>

## What's the output ???

```javascript

fs.readFile(__filename, () => {

  console.log("this is readFile 1");

  setImmediate(() => console.log("this is setImmediate 1"));

});

process.nextTick(() => console.log("this is process.nextTick 1"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 2000000000; i++) {

  console.log(i);

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033681.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fkK0PbVE5jy1NWfXI8TbLFWGD0M%3D&Expires=1776881833' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_1_1776277033686.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3kvvacQYXUMSZatweTbM2uxauOo%3D&Expires=1776881833' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202604160216443c92ad5a5a044379%2Fcrop_2_1776277033692.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bDb63UUpgZEl%2BFYZXL4QmX88PYo%3D&Expires=1776881833' alt='OCR图片'/></div>