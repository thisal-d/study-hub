<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026051520341254a6a0dcc8d94662%2Fcrop_1_1778848478620.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eF5ZGX5wGMs5xIP78PbjNDwiapE%3D&Expires=1779453278' alt='OCR图片'/></div>

<div align="center">

# Sri Lanka Institute of Information Technology B.Sc. Honours Degree in Information Technology Specialized in Information Technology

</div>

Model Paper Year 2, Semester 2 (2026)

SE2020 - Web and Mobile Technology

Duration: 2 Hours

May/June 2026

Instructions to Candidates:

- This paper is preceded by 10 minutes reading period. The supervisor will indicate when answering may commence.

- This paper has 4 questions.

- Answer all questions in the separate booklet given.

- The total mark for the paper is 100.

- This paper contains 8 pages, including the cover page.

- Electronic devices capable of storing and retrieving text, including calculators and mobile phones are not allowed.

a) Describe the HTTP request-response cycle in web communication. Explain the difference between the GET and POST HTTP methods and give ONE practical example of when each would be used in a web application.

b) Write a JavaScript function that uses getElementsByTagName to Select all <p>elements in a page and change the text color of all paragraphs to blue when a button is clicked

c) A software company needs a pricing section for their website. Using HTML and CSS, design a three-column pricing table with columns labeled "Basic", "Pro", and "Enterprise". Each column must display a plan name, monthly price, a list of three features, and a "Choose Plan" button. Apply CSS styling including column borders, highlighted middle column (different background), and hover effect on buttons.

d) Explain what semantic HTML is and why it is important for web accessibility and search engine optimization (SEO). Give FOUR examples of semantic HTML5 elements and describe the role of each.

e) You are tasked with improving the user interface of a job search web application that will be used on both desktop and mobile devices. Identify four (04) CSS techniques or properties that can be used to make a web page layout adapt to different screen sizes. Provide a brief explanation of each technique.

f) A user test reveals that new visitors struggle to find the search bar on the homepage. Identify two (02) UI/UX design strategies you would apply to make the search bar more discoverable.

MediCare Clinic is building a Patient Records System using MongoDB. Patient data is stored in a collection called patients. Each patient is saved as a document.

Example document:

{"name": "Shenal", "age": 35, "bloodType": "O+", "condition": "Diabetes"} Explain the difference between relational database and non-relational database.

(5 marks)

b) Explain what a Mongoose virtual field is and how it differs from a regular schema field stored in the database. In your answer, describe TWO Mongoose schema features

(4 marks)

c) Based on the case study above Write a MongoDB query to insert the following new patient document into the patient's collection:

{ "name": "Tina", "age": 28, "bloodType": "A+", "condition": "Asthma" } (3 marks)

d) Write a MongoDB query to find all patients who are older than 30 years.

(2 marks)

e) Write a MongoDB query to add a new field "ward" with the value "General" to all existing patient documents.

(2 marks)

f) Design a Mongoose schema for an Appointment model for the MediCare system. The schema must capture: the patient's name and doctor name (both required), appointment date and time (required), appointment type (consultation / follow-up / emergency), a list of prescribed medications (each with medicine name and dosage), and appointment status (scheduled / completed / cancelled). Present your schema as a clearly annotated diagram or code. (You do not need to write 100% correct executable code.)

(9 marks)

a) Explain what middleware is in the context of Express.js. Describe the difference between application level middleware and router level middleware, and give ONE example of a real-world use case for each.

(4 marks)

b) Define the following terms in the context of Node.js asynchronous programming:

Promises

async / await

Non-blocking I/O

(6 marks)

c) Consider the code segment below.

```javascript

console.log("Start");

fetch("https://api.example.com/data")

  .then(res => res.json())

  .then(data => {

    console.log("Data received");

  });

new Promise((resolve) => {

  resolve();

}).then(() => {

  console.log("Promise resolved");

});

console.log("End");

```

Draw a labelled diagram showing how the JavaScript runtime processes this code, clearly indicating:

Call Stack

Web APIs

Callback Queue

Microtask Queue

Event Loop

(6 Marks)

d) Based on the code segment in part (c), write the expected console output

(5 Marks)

e) A university is building a Course Registration System backend using Node.js and Express.js. Design TWO Express.js API endpoints one for enrolling a student in a course and one for dropping a course. For each endpoint include:

HTTP method

URL with appropriate route parameters

Brief description of the endpoint behavior

(4 Marks)

## Question 4

a) Explain the three phases of a React component lifecycle (Mounting, Updating, Unmounting). For each phase, state what happens and name ONE React Hook that is associated with managing behavior in that phase.

b) Explain the difference between props and state in React. Describe TWO key differences between them and give a practical example of when you would use props and when you would use state in a web application component.

(4 marks)

c) Study the following React component carefully and answer the questions below.

```javascript

import React, { useState, useEffect } from 'react';

function ShoppingCart({ taxRate }) {

  const [items, setItems] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);

    console.log('Cart updated. Items:', items.length);

    setTotal(subtotal + subtotal * taxRate);

  }, [items]);

  const addItem = (name, price) => {

    setItems([...items, { name, price }]);

  };

  return (

    <div>

      <p>Total: {total}</p>

      <button onClick={() => addItem("Book", 500)}>Add Book</button>

    </div>

  );

}

// Rendered as:

// <ShoppingCart taxRate={0.1} />

```

i. What are the initial values of items and total when the component first renders?

ii. Explain why the useEffect hook runs after the first render and what it does at that point.

(2 marks)

iii. The user clicks the "Add Book" button once. Write down:

(a) the new value of items

(b) the value of total after the effect runs (assume taxRate=0.1)

(c) what is printed to the console

(3 marks)

d) Fill in the blanks with the correct term. (One word or short phrase per blank. Only write the correct answer on your answer sheet.)

In React Native, the component used to render a scrollable list of items with high performance is ___.

The StyleSheet.create() method in React Native is used to

In React Native, to navigate between screens you typically use a library called

The prop used to handle touch events on a TouchableOpacity component is ___.

(4 marks)

e) The following React Native code has three (03) blanks. Fill in the blanks to complete the login screen correctly. (Only write the answers in your booklet.)

(6 marks)

```javascript

import React, {___ from 'react';             // Blank 1

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function LoginScreen() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log(___);                        // Blank 2

  (log email value)

  };

  return (

    <View>

      <TextInput value={email} onChangeText={setEmail}

            placeholder='Email' />

      <TextInput value={password} onChangeText={setPassword}

            secureTextEntry={___} />              // Blank 3

      <TouchableOpacity onPress={handleLogin}>

        <Text>Login</Text>

      </TouchableOpacity>

    </View>

  );

}

```

--- End of the paper ---