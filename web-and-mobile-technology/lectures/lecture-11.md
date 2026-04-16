<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995853.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=w8RcIFTCQhUMVqssmSjWP7XKMao%3D&Expires=1776881795' alt='OCR图片'/></div>

## SE2020-Web Technologies and Mobile

Lecture 11

## RESTful Web Services and Express JS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276995866.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FeMDTenEnK2DxkVg6%2BIRx67r8RY%3D&Expires=1776881795' alt='OCR图片'/></div>

## Agenda

Introduction

3-Tier Architecture

Application Layer

MVC Architecture

REST Service

Express JS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995873.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IzQnE9m3bmHlGMmxjEWJYgv14kw%3D&Expires=1776881795' alt='OCR图片'/></div>

## Introduction

- As applications grow, we need to separate responsibilities for easier maintenance, testing, and scalability.

- Modern applications follow architectural patterns that help achieve this structure.

- Today, we'll connect four key ideas:

3-Tier Architecture-the overall system design

MVC-the internal organization (architectural) pattern

REST-the communication style

Express.js - the implementation framework

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995881.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UUFLtjP08PMHJIEIn1%2BdSPNJOCU%3D&Expires=1776881795' alt='OCR图片'/></div>

## Three Tier Architecture

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995887.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wgE5OTBHqoKgV8%2BxkXEUnYk%2F%2BGw%3D&Expires=1776881795' alt='OCR图片'/></div>

## Why 3-Tier architecture for Web and Mobile apps?

- Independent Infrastructure - Each layer (Presentation, Application, and Data) runs on its own infrastructure, ensuring better performance and maintainability.

- Parallel Development - Different teams can develop each tier independently, improving efficiency and speeding up the development process.

- Scalability - You can scale up or down each layer separately, without affecting the other tiers, making resource management more flexible.

- Enhanced Security - Unlike two-tier architecture, this model provides better security by isolating data and logic from the frontend, reducing vulnerabilities.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995896.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RWtxBo4sQ2tdIAIOvD86VLmfEzo%3D&Expires=1776881795' alt='OCR图片'/></div>

## Presentation Layer

- The Presentation Layer, also called the client-side or frontend, is responsible for interacting with users.

- It is the visible part of the application where users input data and receive outputs.

- The main goal of this layer is to ensure a smooth user experience (UX) with responsive and accessible interfaces.

- Modern Frontend Frameworks and Libraries:

React.js, Angular, Vue.js.

- Legacy Frontend Technologies:

O jQuery, AJAX (Asynchronous JavaScript and XML).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995905.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MywkZotfv6LTOdFE%2BfFfjepzo9I%3D&Expires=1776881795' alt='OCR图片'/></div>

## Application Layer

- The Application Layer, also called the server-side or backend, is responsible for processing business logic, handling requests, and managing data.

- It acts as an intermediary between the Presentation Layer (frontend) and the Database Layer.

- Technologies used to implement include but not limited to,

Java - Spring, Spring Boot

Node.js - Express.js, Koa

Python - Django, Flask

PHP - Laravel, Symfony

.NET-ASP.NET Core

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995911.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JJeakjG1GdQL4Hpf4F0JRFDq4Jk%3D&Expires=1776881795' alt='OCR图片'/></div>

## MVC Architecture in 3-Tier

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995923.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KPI368%2FJohr5Y%2Ft38vKqBiEOGfU%3D&Expires=1776881795' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276995941.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FbBUvGX2SBBPJdniOr%2BE%2FOStykk%3D&Expires=1776881795' alt='OCR图片'/></div>

## MVC Architecture

MVC (Model-View-Controller) is a software design pattern used to organize code in applications. It separates the application into three interconnected components, each

with specific responsibilities.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995968.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HX7MVDIr%2BPSYY%2FuF9P%2Fy6bNaJ4c%3D&Expires=1776881795' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276995980.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xy%2FWkgaeM7KUd%2FpHZcXyjf66SBU%3D&Expires=1776881795' alt='OCR图片'/></div>

## MVC Architecture

<table border="1"><tr><td>Model</td><td>Controller</td><td>View</td></tr><tr><td>Business logic</td><td>Send &amp; Receive HTTP requests</td><td>Format data for presentation</td></tr><tr><td>Data validation</td><td>Validate request data</td><td>Structure API responses</td></tr><tr><td>Database operations</td><td>Call Model methods</td><td>Hide sensitive data</td></tr><tr><td>Business rules enforcement</td><td>Call View to format response</td><td>Create consistent response format</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995986.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6JtFfHt5eZITQzwZwLasYMkOZ7s%3D&Expires=1776881795' alt='OCR图片'/></div>

## Presentation Layer <=> Application Layer

How does the Backend and the frontend communicate?

## (REST API Communication Scenario)

- User Action-A user submits a form on the frontend (e.g., signing up).

- Frontend Request - The frontend sends a POST request to the backend with the form data.

- Backend Processing - The backend validates the data, updates the database, and processes business logic.

- Backend Response - The backend sends a success/failure response back to the frontend.

- Frontend Update - The frontend updates the UI dynamically based on the response (e.g., "Registration Successful!").

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276995992.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iM27rStQ7aaiCDJm%2Bn2P%2BmiL8no%3D&Expires=1776881795' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276996000.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Uv72b5IDjfD2551VWejmR49T6k8%3D&Expires=1776881796' alt='OCR图片'/></div>

## Application Layer : APIs

What is an API?

- API (Application Programming Interface) is a software interface that allows two or more applications to communicate with each other.

- It acts as a bridge between different software components, enabling seamless integration.

- APIs abstract away complexities, allowing developers to interact with services without knowing the internal implementation.

- It defines a contract of services, specifying how applications should request and exchange data

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996007.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NLqFPy5lUgLuc4CNnSW%2FSiKC5kg%3D&Expires=1776881796' alt='OCR图片'/></div>

## Application Layer : APIs

## Benefits of API

## Standardized Communication

Uses standard protocols like HTTP/HTTPS, WebSockets, gRPC.

- Responses are typically in JSON or XML format.

## Encapsulation & Abstraction

O Hides complex implementation details, exposing only necessary functions and data..

Developers don't need to understand database queries or backend logic.

## Reusability & Efficiency

O APIs allow applications to reuse functionality, reducing redundant code.

O Example: A payment gateway API (like Stripe) can be integrated into multiple applications without writing new payment logic.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996040.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2mcPBAYZvQ582%2Be0npcKz01ZN%2Fs%3D&Expires=1776881796' alt='OCR图片'/></div>

## Application Layer : APIs

## Different Types of APIs

- REST API (Representational State Transfer)

Uses HTTP methods (GET, POST, PUT, DELETE) for communication.

O Stateless and follows resource-based architecture.

Responses are typically in JSON or XML.

O Commonly Used For: Web and mobile applications, cloud services.

- SOAP API

- RPC (Remote Procedure Call)

- WebSockets API

- GraphQL API

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996046.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aFIQiLwJED4WWu1stZG9GnyCGdU%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST

- REST (Representational State Transfer) is an architectural style for building web services.

O. A web service is a way for applications to exchange data and interact with each other, machine-to-machine communication over the web.

- It defines a set of constraints for how clients and servers should communicate over the web, using HTTP as the communication protocol.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996052.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HFxdH4wNo0Atj8K7wvO1mTG%2FdFs%3D&Expires=1776881796' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276996065.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7TXmDM%2BRUskWx1IJiTlNMWTddgs%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-Resources

- In REST, everything is treated as a resource (e.g., user, product, order).

- Each resource is identified by a unique URI (e.g., /api/users/123).

- Clients use HTTP methods to perform operations on resources

GET -> Retrieve data (GET /api/users)

O POST -> Create a new resource (POST /api/users)

PUT $ \to $ Update an existing resource (PUT /api/users/123)

O DELETE -> Remove a resource (DELETE /api/users/123)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996079.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tZvKSjGluAqWGO77hcTkumMy%2BF8%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP Request and Response

Request Message

Response Message

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996088.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7Wbmnnw3dSLnK9%2Fy2DFFAw9fjDc%3D&Expires=1776881796' alt='OCR图片'/></div>

<table border="1"><tr><td>&lt;HTTP Version&gt;</td><td>&lt;Response Code&gt;</td></tr><tr><td colspan="2">&lt;Response Header&gt;</td></tr><tr><td colspan="2">&lt;Response Body&gt;</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276996095.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wHBc44d6SU2B51AC5UxR%2B3YeRZ4%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP Request and Response

Example:

Let's say you have a Student Management REST API running at: https: // api.school.com/students. Write API exposes endpoints to Create, Read, Update and Delete student records.

## 1. Create student

<table border="1"><tr><td>&lt;VERB&gt;
POST</td><td>&lt;URI&gt;
/api/students</td><td>&lt;HTTP Version&gt;
HTTP/1.1</td></tr><tr><td colspan="3">&lt;Request Header&gt;
contains metadata such as Host, content-type etc.</td></tr><tr><td>&lt;Request Body&gt;</td><td colspan="2">{&quot;name&quot;:&quot;Sanduni&quot;,
&quot;age&quot;:23,
&quot;course&quot;:&quot;Software
Engineering&quot;
}</td></tr></table>

<table border="1"><tr><td>&lt;HTTP Version&gt;HTTP/1.1</td><td>&lt;Response Code&gt;201 Created</td></tr><tr><td colspan="2">&lt;Response Header&gt;includes metadata such as content-type and data</td></tr><tr><td>&lt;Response Body&gt;</td><td>{&quot;message&quot;:&quot;Student added successfully&quot;,
&quot;student&quot;:{&quot;id&quot;:101,
&quot;name&quot;:&quot;Sanduni&quot;,
&quot;age&quot;:23,
&quot;course&quot;:&quot;Software Engineering&quot;
}}</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996107.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aDdF7q0QwYJiO4rBWHynVEbKVzU%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP Request and Response

## 2. Get all students

Get all students

Request: GET https://api.school.com/students

Response:

[

{ "id": 101, "name": "Sanduni", "age": 23 },

{ "id": 123, "name": "Perera", "age": 26 }

]

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996114.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JXLKgWhrYa1fqW6SHQZuAgTLUmc%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP Request and Response

3. Update All

Update All

Request: PUT https://api.school.com/students/123

Body: { "name": "Kasun Perera", "age": 26 }

Response:

[

  "message": "Student updated successfully",

  "student": { "id": 123, "name": "Kasun Perera", "age": 26 }

]

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996120.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BUu%2B0OUm6lfB%2F3KHqygyh12Fs%2FQ%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP Request and Response

4. Update - Partial

Request: PATCH https: //api.school.com/students/123

Body: { "age": 27 }

Response:

[

    "message": "Student age updated successfully",

    "student": { "id": 123, "name": "Kasun Perera", "age": 27 }

]

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996134.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1lfWQvM4QZX9E93kABRgfzL7agU%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP Request and Response

5. Delete Data

Request: DELETE https: //api.school.com/students/123

Response: { "message": "Student age updated successfully" }

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996150.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LQ4Abm169XmKFH47GWXflL2lvO0%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP codes

- HTTP status codes are 3-digit numbers that indicate the status of a client's request to a server.

- The first digit defines the class of response.

1xx Informational

2xx Success

3xx Redirection

4xx Client Error

5xx Server Error

- The last two digits provide specific details about the response.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996156.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BSrpUuiPckUib%2FEkMPKrhlaZlUI%3D&Expires=1776881796' alt='OCR图片'/></div>

## REST-HTTP codes

## Commonly used HTTP codes

- 200 OK (Success)

- 201 Created

- 202 Accepted

- 204 No content

- 301 Moved Permanently (Redirection)

- 400 Bad request

- 404 Not Found (Client Error)

- 500 Internal Server Error (Server Error)

- 502 Bad gateway

- 503 Service unavailable

## Express JS

CONCEPTS (What you're building)

- 3-Tier Architecture -> WHERE things are deployed

- MVC Pattern

- REST Principles

- HOW code is organized

- HOW systems communicate

IMPLEMENTATION TOOL

- Express.js

THE FRAMEWORK that implements all the above

- A web application framework for Node.js

- Provides tools to build web servers and APIs

- Minimal and flexible

- Think of Express.js as

The construction kit you use to build your application

The toolbox that has everything you need

o The foundation on which you implement 3-Tier,

MVC, and REST.

## Express JS in 3-Tier and MVC

- Express.js operates in Tier 2 (Application Tier) and connects to both Tier 1 and Tier 3.

- It provides,

HTTP server functionality (listens for requests from Tier 1)

Middleware for processing requests

Database connection capabilities (connects to Tier 3)

- Response handling (sends data back to Tier 1)

- Express.js provides the building blocks to implement MVC.

express.Router() $ \rightarrow $ Maps to CONTROLLER

JavaScript Classes -> Maps to MODEL

res.json() -> Maps to VIEW

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996189.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JSdD203l%2Bfdi71DuE%2FF8RfKeO1U%3D&Expires=1776881796' alt='OCR图片'/></div>

## Express JS-Routing

Routing in Express.js is the mechanism that determines how an application responds to client requests for specific URLs (endpoints) and HTTP methods (GET, POST, PUT, DELETE). Simple Analogy:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996205.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=49K%2BflN8RfC0Wg0bNcJtNlQcDT0%3D&Expires=1776881796' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276996215.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gxFqaUl3UhGmqFulaf7sfdMN4EY%3D&Expires=1776881796' alt='OCR图片'/></div>

## Express JS - Basic Routing Syntax

app.METHOD(PATH, HANDLER)

- app = Express application instance

- METHOD = HTTP method (get, post, put, delete, etc.)

- PATH = URL path (route)

- HANDLER = Function that executes when route is matched

Example:

app.get('/about', (req, res) => {

res.send('This is the about page');

});

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996220.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QY54Bq3xsogw29d0NsXTtrXS2sc%3D&Expires=1776881796' alt='OCR图片'/></div>

## Express JS-Middleware

Middleware is a function that runs between the client request and the server response. It can modify the request, response, or terminate the request cycle.

- Express JS has built-in middleware functions for handling requests, parsing data, and serving static files.

- You can use third-party middleware functions for tasks like logging, authentication, and caching.

- You can create your own (custom) middleware functions to handle specific tasks or modify the request/response as needed.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996226.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=H6nlOhF0%2F7csEi2Vx05B8ZXGs3s%3D&Expires=1776881796' alt='OCR图片'/></div>

## Express JS-Working with database

- Express JS can work with different types of databases, including SQL databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB).

- You can connect to a database using a database driver or an ORM (ObjectRelational Mapping) library like Sequelize or Mongoose.

- Querying the database is done using SQL or a database-specific query language (e.g., MongoDB query syntax).

- ORM libraries provide a higher-level interface for working with databases and can simplify the code for common tasks like creating, reading, updating, and deleting records.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996233.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lsOE72P6WSotDEOBkNbn3Wo3acs%3D&Expires=1776881796' alt='OCR图片'/></div>

## Express JS-REST APIs

- Express JS is well-suited for building RESTful APIs because of its routing and middleware capabilities.

- To create a RESTful API, you define routes that correspond to the different HTTP methods (GET, POST, PUT, DELETE) and the resources you want to expose.

- You can use middleware functions to handle tasks like input validation, authentication, and rate limiting.

- RESTful APIs should follow certain principles, such as using HTTP status codes to indicate success or failure, using meaningful URIs to identify resources, and providing a consistent interface for interacting with the API.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996239.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jSbOKk4Y5JJJhZN5BmntS4MnQJg%3D&Expires=1776881796' alt='OCR图片'/></div>

## Tutorial - Let's build a simple Express JS backend

## Case study: Student Management System

Create a backend API that allows you to:

Add a new student

Get all students

O Get a student by ID

Update student info

Delete a student

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996249.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MVY2RRdr6DK7BOaUG3Gpiu0QBAc%3D&Expires=1776881796' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_1_1776276996261.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lY3H%2FyKRfoHirYjSlKXwU1DURMA%3D&Expires=1776881796' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021607354cd9d6af2c41ab%2Fcrop_2_1776276996287.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mdxoaN7bQQgS0CJOgxhEV5I72to%3D&Expires=1776881796' alt='OCR图片'/></div>