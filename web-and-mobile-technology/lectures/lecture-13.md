Introduction to

## React Native with Expo

Build cross-platform mobile apps for Android & iOS

## What We'll Cover Today

1

Mobile Dev Intro

Web vs native, cross-platform concepts

2

React Native Basics

Core components, JSX, Flexbox

3

Expo Setup

Dev environment, first app

4

Components & State

Props, useState, events, forms

5 Navigation

Expo Router file-based routing

6 Context API

Global state without prop drilling

7 TanStack Query

Data fetching, caching, mutations

8 Bug Report App

Full CRUD project bringing it all together

## Introduction to Mobile Development

Web apps vs mobile apps·Native vs cross-platform

## Web Apps vs Mobile Apps

<table border="1"><tr><td>Web Apps</td></tr><tr><td>Run in browser</td></tr><tr><td>URL-based routing</td></tr><tr><td>HTML/CSS/JS</td></tr><tr><td>Limited device access</td></tr><tr><td>No app store</td></tr></table>

<table border="1"><tr><td>Mobile Apps</td></tr><tr><td>Run on device OS</td></tr><tr><td>Installed locally</td></tr><tr><td>Full hardware access</td></tr><tr><td>App Store/Play Store</td></tr><tr><td>Offline capable</td></tr></table>

## Native vs Cross-Platform Development

<table border="1"><tr><td>Platform</td><td>Language</td><td>Code Sharing</td><td>Performance</td><td>Dev Speed</td></tr><tr><td>Native Android</td><td>Kotlin/Java</td><td>None(Android only)</td><td>Excellent</td><td>Slower(2 codebases)</td></tr><tr><td>Native iOS</td><td>Swift/ObjC</td><td>None(iOS only)</td><td>Excellent</td><td>Slower(2 codebases)</td></tr><tr><td>React Native</td><td>JavaScript/JSX</td><td>~90% shared code</td><td>Very Good</td><td>Faster</td></tr><tr><td>Flutter</td><td>Dart</td><td>~95% shared code</td><td>Very Good</td><td>Fast</td></tr></table>

## One Codebase Two Platforms

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044408831.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CVwpVkeaux7TWifq8Lj2icHRTlQ%3D&Expires=1778649208' alt='OCR图片'/></div>

~90% code shared between platforms

## What is React Native?

Native UI components · JSX · Built on React

## What is React Native?

## Created by Meta (2015)

Open source framework for building native mobile apps using JavaScript and React

## Not a web view

Renders real native UI components not a browser embedded in your app

## Same React mental model

Components, props, useState, useEffect all the same concepts you already know

## Large ecosystem

Access to thousands of community libraries and Expo SDK packages

## React vs React Native

<table border="1"><tr><td>Concept</td><td>React(Web)</td><td>React Native</td></tr><tr><td>Renders to</td><td>HTML DOM</td><td>Native UI Components</td></tr><tr><td>Root element</td><td>&lt;div&gt;</td><td>&lt;View&gt;</td></tr><tr><td>Text</td><td>&lt;p&gt;，&lt;span&gt;</td><td>&lt;Text&gt;</td></tr><tr><td>Styling</td><td>CSS/className</td><td>StyleSheet/inline objects</td></tr><tr><td>Navigation</td><td>React Router</td><td>Expo Router</td></tr><tr><td>Clicks</td><td>onClick</td><td>onPress</td></tr></table>

## HTML Elements React Native Components

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044408917.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZJy17VyAStbezRVOBfowIzCTgf0%3D&Expires=1778649209' alt='OCR图片'/></div>

## JSX in React Native

JSX + StyleSheet Example

```javascript

import { View, Text, StyleSheet } from 'react-native';

export default function HelloScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>

        Hello, React Native!

      </Text>

      <Text>Welcome to mobile development</Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: { flex: 1, justifyContent: 'center',

alignItems: 'center' },

  heading: { fontSize: 24, fontWeight: 'bold', color:

 '#2563EB' },

});

```

## No HTML tags

Use View, Text, Image instead of div, p, img

## style prop

Pass a JS object, not a CSS class string

## StyleSheet.create

Validates styles and improves performance

## Why Use Expo?

Simplify native development·Expo Go·Faster workflow

## What is Expo?

Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409140.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XmWiB4FKPSDPbCSNw8dabV1ppG0%3D&Expires=1778649209' alt='OCR图片'/></div>

## Zero Native Config

No need to touch Xcode or Android Studio for basic apps

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409147.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6yiaWYM4zPVjrqFKhiQvPlRmZN0%3D&Expires=1778649209' alt='OCR图片'/></div>

## Expo Go App

Test on real devices instantly just scan a QR code

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_3_1778044409153.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XYm%2Bya%2FImTIND6D8%2BjrNUVL2W18%3D&Expires=1778649209' alt='OCR图片'/></div>

## Expo SDK

Pre-built modules for camera, location, notifications and more

## EAS Build

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_4_1778044409161.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ghwCj5xeDCWs9pkgv2cq4%2Fk2btA%3D&Expires=1778649209' alt='OCR图片'/></div>

Cloud builds for Android APK and iOS IPA without a Mac

## Expo vs React Native CLI

<table border="1"><tr><td>Feature</td><td>Expo</td><td>React Native CLI</td></tr><tr><td>Setup time</td><td>Minutes</td><td>Hours</td></tr><tr><td>Native code</td><td>Managed</td><td>Manual</td></tr><tr><td>Xcode required</td><td>No(EAS build)</td><td>Yes(macOS)</td></tr><tr><td>Custom modules</td><td>Limited</td><td>Full control</td></tr><tr><td>Recommended for</td><td>Most apps</td><td>Advanced native use</td></tr><tr><td>Expo Go testing</td><td>Yes</td><td>No</td></tr></table>

## Expo Go - Test on Real Devices

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409166.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2F28gdoHA6tgMSgbs97QSol7%2Bt6M%3D&Expires=1778649209' alt='OCR图片'/></div>

[Insert screenshot of Expo Go QR scan on phone]

## Setting Up the Dev Environment

Node.js·VS Code·Android Emulator·Expo CLI

## Required Tools

## Node.js

nodejs.org

JavaScript runtime required for npm and Expo CLI

Required

## VS Code

code.visualstudio.com

Code editor with React Native extensions

Required

## Expo Go App

App Store / Play Store

Install on your phone for live testing

Required

## Android Studio

For Android emulator (optional)

developer.android.com

Optional

## Xcode

iOS simulator — macOS only

Mac App Store

macOS only

## Getting Started - Terminal Commands

Terminal / Shell

# Step 1: Verify Node.js is installed

node --version

npm --version

# Step 2: Create a new Expo app

npx create-expo-app my-first-app

# Step 3: Navigate into the project

cd my-first-app

# Step 4: Start the development server

npm start

# or: npx expo start

## npx vs npm

npx runs packages without global install. No need to install expo-cli globally anymore.

## QR Code

After npm start, a QR code appears. Scan with Expo Go app on your phone.

## Hot Reload

Save any file and the app updates instantly no rebuild needed.

## Testing Options

## Physical Device

Install Expo Go

> Open Expo Go app

> Scan QR from terminal

> App loads instantly

Easiest method

## Android Emulator

Requires Android Studio

Install Android Studio

→ Create AVD (emulator)

Press 'a' in terminal

[Screenshot placeholder]

## iOS Simulator

macOS only

→ Install Xcode

Press 'i' in terminal

Simulator launches

[macOS users only]

## Creating Your First Expo App

Project structure·app directory·Expo Router

## create-expo-app

## Terminal

# Create a new app with the default template

npx create-expo-app my-first-app

# Navigate into your project folder

cd my-first-app

# Start the dev server

npm start

## Folder structure

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409174.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zB9GfDEgqNxJUU%2Ba67qsYUDlaJQ%3D&Expires=1778649209' alt='OCR图片'/></div>

## app.json

App name, version, icon, splash screen configuration

## package.json

Dependencies and npm scripts

## app/_layout.tsx

Root layout — wraps all screens with providers

## Project Folder Structure

my-first-app/

app/

__layout.tsx

(tabs)

__layout.tsx

index.tsx

explore.tsx

assets/

images/

Root layout wraps entire app

components/

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409190.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jlhfUwXP12tbyYpcBmHbzRPrrbg%3D&Expires=1778649209' alt='OCR图片'/></div>

... Root app directory — all files become routes

Tab group with tab bar navigation

constants/

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409199.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Va5vW61pUOL8LuP%2B5PAbcd2h7r0%3D&Expires=1778649209' alt='OCR图片'/></div>

package.json

app.json

Home screen (index = '/')

Second tab screen

Static assets: icons, splash, fonts

Shared UI components

## Running Your App

Terminal output

npm start

# Terminal output:

> Metro waiting on exp://192.168.1.5:8081

> Scan the QR code above with Expo Go (Android)

> or the Camera app (iOS)

> Press a open Android

> Press i open iOS simulator

> Press w open web

> Press r | reload app

> Press j open debugger

## Fast Refresh

Changes appear instantly without losing app state

## Shake to Debug

Shake device to open the Expo dev menu

## Network Tab

Inspector shows API calls and performance

## React Native Basics

Core components · Flexbox layout · View · Text · Image

## Core Components

## <View>

Container element — like a <div> Used for layout and grouping

## <Text>

Displays text — REQUIRED for all text Supports styling and nesting

## <Image>

Display local or remote images Requires source prop

## <ScrollView>

Scrollable container Wraps content that overflows

## <TextInput>

Text input field Use value + onChangeText

## <Pressable>

Touchable element — use instead of Button for custom styling

## Flexbox Layout in React Native

Flexbox Example

```html

<View style={{ flex: 1, flexDirection: 'column',

justifyContent: 'center',

alignItems: 'center' }}>

```

```html

<Text>I am centered!</Text>

</View>

```

// flexDirection: 'row' → horizontal layout

```javascript

// justifyContent: 'space-between' | 'flex-start'

'center'

```

// alignItems: 'stretch' | 'flex-start' | 'center'

flexDirection: 'row'

A

B

C

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409205.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zhAS4wmD2ZpBxukMpdavQyzf2ec%3D&Expires=1778649209' alt='OCR图片'/></div>

## ScrollView & Image

```javascript

ScrollView + Image

import { ScrollView, Image, Text, View } from 'react-native';

```

```css

style={{ width: 100, height: 100, borderRadius: 50 }}

```

<Text>John Doe</Text>

<Text>Software Engineer</Text>

{/* More content... */}

</ScrollView>

## TextInput & Pressable

TextInput + Pressable

```javascript

const [name, setName] = useState('');

// Controlled TextInput

<TextInput

  value={name}

  onChangeText={setName}

  placeholder="Enter your name"

  style={{ borderWidth: 1, padding: 10 }}

}

// Pressable with feedback

<Pressable

  onPress={() => console.log('Pressed!')}

  style={{ pressed }} => ({

    backgroundColor: pressed ? '#1D4ED8' : '#2563EB',

    padding: 12,

    borderRadius: 8,

  })}

>

  <Text style={{ color: 'white' }}>Submit</Text>

</Pressable>

```

## Controlled Input

Always use value + onChangeText together. Never let the input control itself.

## Pressable style fn

The style prop can be a function receiving { pressed } to create feedback effects.

## KeyboardAvoidingView

Wrap forms in KeyboardAvoidingView to prevent the keyboard from hiding inputs.

## Styling in React Native

StyleSheet.create·Inline styles·Reusable styles

## Inline Styles vs StyleSheet.create

Inline vs StyleSheet

```html

// X Inline style - works but messy

<View style={{ flex: 1, backgroundColor: '#F3F4F6',

    padding: 20, borderRadius: 8 }}>

  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>

    Hello

  </Text>

</View>

```

```html

// ✅ StyleSheet.create — recommended

<View style={styles.container}>

  <Text style={styles.heading}>Hello</Text>

</View>

```

```javascript

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F3F4F6',

    padding: 20,

    borderRadius: 8,

  },

  heading: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#111827',

  },

});

```

## Performance

StyleSheet styles are validated once at startup, not on every render

## Autocomplete

TypeScript and IDEs provide better hints with StyleSheet.create

## Reusability

Style objects can be referenced multiple times across components

## Common Style Properties

## Layout

flex, flexDirection, justifyContent, alignItems, padding, margin width, height

## Colors

backgroundColor, color (text only), borderColor

## Text

fontSize, fontWeight, fontFamily, textAlign, letterSpacing lineHeight

## Shadows

## Borders

borderWidth, borderRadius, borderStyle, borderColor

shadowColor, shadowOffset, shadowOpacity, shadowRadius (iOS) elevation (Android)

## Position

position: 'absolute' | 'relative', top, left, right, bottom, zIndex

## Styling in Practice Before & After

## Unstyled

Login button not working

Open

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409211.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iFHasdHLMvPn0EovTyZwf1Ax1YE%3D&Expires=1778649209' alt='OCR图片'/></div>

## Styled

## Login button not working

Open

Reported 2h ago

## BugCard styles

```javascript

const styles = StyleSheet.create({

  card: {

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    padding: 16,

    marginBottom: 12,

    shadowColor: '#000',

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.08,

    shadowRadius: 8,

    elevation: 3,        // Android shadow

  }

}

```

```json

title: { fontSize: 16, fontWeight: '600', color: '#111827' },

```

badge: { backgroundColor: '#2563EB', borderRadius: 12,

paddingHorizontal: 10, paddingVertical: 3 },

## Components and Props

Functional components·Reusability·Props

## Functional Components

Functional Component

```javascript

// A simple functional component

function Greeting({ name }) {

  return (

    <View style={styles.container}>

      <Text style={styles.text}>Hello, {name}!</Text>

    </View>

  );

}

// Usage

<Greeting name="Rusiru" />

<Greeting name="Alice" />

<Greeting name="Bob" />

```

## Props

Props (properties) are how you pass data into a component. They are read-only a component cannot modify its own props.

## Default Export

Screens must use export default. Reusable components can use named exports.

## TypeScript

Define prop types with interfaces for better autocomplete and error detection.

## Building a Reusable BugCard Component

```javascript

function BugCard({ title, status, description }) {

  const badgeColor = status === 'Open' ? '#2563EB'

    : status === 'In Progress' ? '#D97706' : '#16A34A';

```

## return (

```html

<View style={styles.card}>

  <View style={styles.header}>

    <Text style={styles.title}{title}</Text>

    <View style={[styles.badge, { backgroundColor: badgeColor }]}>

      <Text style={styles.badgeText}{status}</Text>

    </View>

```

```html

</View>

<Text style={styles.description}>{description}</Text>

</View>

```

```html

// Usage

<BugCard

  title="Login button not working"

  status="Open"

```

description="Clicking login does nothing"

## Working with Props

Props + Callbacks

```javascript

// Parent component passes data and callbacks

function BugListScreen() {

    const handlePress = (id) => {

        router.push(`/bugs/${id}`);

    };

    return (

        <View>

            <BugCard

                title="Login issue"

                status="Open"

                onPress={() => handlePress('1')} // callback

prop

            />

        </View>

    );

}

// Child receives and calls the callback

function BugCard({ title, status, onPress }) {

    return (

```

## Unidirectional

Data flows down. Callbacks flow up. Never mutate props directly.

<Pressable onPress=[onPress]>

## Destructuring

Use { title, status } in function params instead of props.title

## Default Props

Set defaults: function Card({ color = 'blue' }) to handle missing props

## State and Events

useState·onPress·Controlled inputs·Conditional rendering

## useState Hook

```javascript

import { useState } from 'react';

import { View, Text, Pressable } from 'react-native';

```

```javascript

export default function CounterScreen() {

  // [currentValue, setterFunction] =

useState(initialValue)

  const [count, setCount] = useState(0);

  const [name, setName] = useState('');

  const [isLoading, setIsLoading] = useState(false);

```

## return (

```html

<View>

  <Text>Count: {count}</Text>

  <Pressable onPress={() => setCount(count + 1)}>

    <Text>Increment</Text>

```

```html

</Pressable>

<Pressable onPress={() => setCount(0)}>

  <Text>Reset</Text>

</Pressable>

```

## Rule 1

Always call hooks at the top level — never inside loops or conditions

## Rule 2

State updates are asynchronous don't read state immediately after setting

## Rule 3

Use functional updates when new state depends on old: setCount(prev => prev + 1)

## Handling Events & Controlled Inputs

Form with State

```javascript

export default function AddBugForm() {

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const handleSave = () => {

    if (!title.trim()) {

      alert('Title is required!');

      return;

    }

    console.log({ title, description });

  };

  return (

    <View style={styles.form}>

      <TextInput

        value={title}

        onChangeText={setTitle}        // ← fires on every

keystroke

        placeholder="Bug title"

        style={styles.input}

      />

```

## onChangeText

Receives the new string value automatically no event.target.value needed

## multiline

Set multiline={true} and numberOfLines for textarea-like behavior

## Validation

Always validate before saving - check for empty strings, length limits

<Text Input

## Conditional Rendering

Conditional Rendering Patterns

```javascript

const [isLoading, setIsLoading] = useState(true);

const [bugs, setBugs] = useState([]);

// Pattern 1: Ternary operator

{isLoading ? (

  <ActivityIndicator size="large" color="#2563EB" />

) : (

  <BugList bugs={bugs} />

)}

// Pattern 2: Short circuit (&&)

{bugs.length === 0 && (

  <Text>No bugs reported yet! </Text>

)}

// Pattern 3: Variable

let content;

if (isLoading) content = <ActivityIndicator />;

else if (bugs.length === 0) content = <EmptyState />;

else content = <BugList bugs={bugs} />;

```

```javascript

return <View>{content}</View>;

```

## Lists and Forms

FlatList·Key extractor·Forms·Validation

## FlatList - Performant Lists

FlatList Example

```javascript

const bugs = [

  { id: '1', title: 'Login issue', status: 'Open' },

  { id: '2', title: 'Dark mode crash', status: 'In Progress' },

  { id: '3', title: 'Slow load', status: 'Closed' },

];

<FlatList

  data={bugs}                        // ← array of items

  keyExtractor={(item) => item.id}    // ← unique key for each item

  renderItem={({ item }) => (        // ← renders each item

    <BugCard

      title={item.title}

      status={item.status}

    />

  )}

  ItemSeparatorComponent={() => (        // ← separator between items

    <View style={{ height: 8 }} />

  )}

  ListEmptyComponent={() => (        // ← shown when data is empty

    <Text>No bugs found!</Text>

  )}

```

```javascript

contentContainerStyle={{ padding: 16 }}

```

## ScrollView vs FlatList — When to Use Which

<table border="1"><tr><td>Feature</td><td>ScrollView</td><td>FlatList</td></tr><tr><td>Virtualization</td><td>No — renders all</td><td>Yes — renders visible only</td></tr><tr><td>Performance</td><td>Poor with many items</td><td>Excellent</td></tr><tr><td>Item separator</td><td>Manual</td><td>ItemSeparatorComponent</td></tr><tr><td>Empty state</td><td>Manual conditional</td><td>ListEmptyComponent</td></tr><tr><td>Pull to refresh</td><td>Manual</td><td>onRefresh+refreshing</td></tr><tr><td>Best for</td><td>&lt;20 static items</td><td>Dynamic lists, API data</td></tr></table>

## Building Forms with Validation

Form Validation

```javascript

export default function CreateBugScreen() {

  const [title, setTitle] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {

    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Title is

required';

    if (title.length > 100) newErrors.title = 'Max 100

characters';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = () => {

    if (!validate()) return;

    // proceed with save...

  };

  return (

    <View>

```

## Validate on Submit

Run validation when user presses submit, not on every keystroke

## Show Errors Inline

Display error messages directly below the field that has the error

## Disable Button

Add disabled prop to Pressable while submitting to prevent double-submit

```xml

<TextInput value={title} onChangeText={setTitle}

```

## Navigation with Expo Router

File-based routing·Screens·Dynamic routes·Params

## What is Expo Router?

Every file inside the app/ directory automatically becomes a route. No configuration needed.

## File-based routing

Create app/settings.tsx $ \rightarrow $ route /settings is live instantly

## Dynamic routes

Use [id].tsx for dynamic segments: app/bugs/[id].tsx $ \rightarrow $ /bugs/123

## Deep linking

Expo Router automatically handles deep links from URLs and notifications

## Nested navigation

Create folders to create nested routes: app/bugs/index.tsx $ \rightarrow $ /bugs

## Layouts

_layout.tsx files wrap all sibling routes with shared UI (header, tab bar)

## Web support

The same code works on web with proper URL routing

## File Structure Routes

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409215.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2pqrQpiGRCuC6vq67FqKGfrxR8k%3D&Expires=1778649209' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409242.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=N1VLe1huVgHuAXxmf7kCfP50rcw%3D&Expires=1778649209' alt='OCR图片'/></div>

## Navigating Between Screens

## Navigation Methods

```javascript

import { router, Link } from 'expo-router';

```

```javascript

// Method 1: Imperative — use in event handlers

const handleCreate = async () => {

  await saveBug(formData);

  router.push('/bugs');                // navigate to /bugs

  router.replace('/bugs');              // replace (no back button)

  router.back();                      // go back

```

```html

// Method 2: Declarative — use in JSX

<Link href="/bugs" style={styles.link}>

  <Text>View All Bugs</Text>

</Link>

```

```javascript

// Navigate with params

router.push(`/bugs/${bug.id}`);

```

```javascript

// Or as object

router.push({

  pathname: '/bugs/[id]',

  params: { id: bug.id }

});

```

## router.push()

Adds screen to stack. User can press back to return.

## router.replace()

Replaces current screen. No back navigation. Use after login.

## router.back()

Goes back to previous screen in the stack.

## Dynamic Routes & URL Parameters

```javascript

app/bugs/[id].tsx

// File: app/bugs/[id].tsx

import { useLocalSearchParams } from 'expo-router';

```

```javascript

export default function BugDetailScreen() {

  // Reads the [id] from the URL: /bugs/42 → id = '42'

  const { id } = useLocalSearchParams();

```

```javascript

// Use id to fetch the specific bug

const { data: bug, isLoading } = useQuery({

  queryKey: ['bug', id],

  queryFn: () => fetchBugById(id),

});

```

if (isLoading) return <LoadingSpinner />;

```javascript

return (

  <View>

    <Text>{bug.title}</Text>

    <Text>{bug.description}</Text>

  </View>

);

```

## Route Flow

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409249.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tegEqpwFSX8Buxk5TSn23RzDK2I%3D&Expires=1778649209' alt='OCR图片'/></div>

SECTION

## Context API

Global state · Avoid prop drilling · useContext

## The Problem: Prop Drilling

## Problems with prop drilling:

- BugsScreen and BugList don't need bugs they just pass it along

- Adding new props requires changing every layer

- Hard to maintain as the app grows

- Tight coupling between unrelated components

App (has bugs state)

passes bugs as prop

BugsScreen

passes bugs as prop

BugList

passes bugs as prop

BugCard (needs bugs!)

## Context API — The Solution

## BugProvider (wraps entire app)

BugsScreen useContext(BugContext)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409254.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cdn2GRPKFDK5eU1p9TTOs4oiFOs%3D&Expires=1778649209' alt='OCR图片'/></div>

HomeScreen useContext(BugContext)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409259.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XoOXE19CkaTir3iDPRKUhWLgD6o%3D&Expires=1778649209' alt='OCR图片'/></div>

BugCard useContext(BugContext)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_3_1778044409279.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FV0d%2BztFdnBtM1v%2Fo9r6bOIpL%2Fw%3D&Expires=1778649209' alt='OCR图片'/></div>

CreateForm

useContext(BugContext)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_4_1778044409283.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=E%2FTKIUOQ2mSu3RxPsyBgcNbP1pY%3D&Expires=1778649209' alt='OCR图片'/></div>

EditModal useContext(BugContext)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_5_1778044409288.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=K7yt18qg1jX1cifPhj%2Fi0g0KWrc%3D&Expires=1778649209' alt='OCR图片'/></div>

Settings useContext(BugContext)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_6_1778044409294.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=F%2F%2FdCjxT0bzfmsr2%2BNKSzEV8RJA%3D&Expires=1778649209' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_7_1778044409302.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1rg0wRYUioWv6HsrmZPxUNmorCA%3D&Expires=1778649209' alt='OCR图片'/></div>

Any component directly accesses context no prop drilling!

## Creating BugContext

```javascript

// context/BugContext.jsx

import { createContext, useContext, useState } from 'react';

```

```javascript

// 1. Create the context

const BugContext = createContext(null);

```

// 2. Create the Provider component

export function BugProvider({ children }) {

  const [bugs, setBugs] = useState([]);

}

```javascript

const addBug = (newBug) => {

  setBugs(prev => [...prev, { ...newBug, id: Date.now().toString() }]);

};

```

```javascript

const deleteBug = (id) => {

  setBugs(prev => prev.filter(bug => bug.id !== id));

}

```

```javascript

return (

  <BugContext.Provider value={{ bugs, addBug, deleteBug }}>

    {children}

  </BugContext.Provider>

);

```

// 3. Custom hook for easy consumption

export function useBugs() {

  return useContext(BugContext);

}

## Step 1

createContext() creates the context object with a default value

## Step 2

Provider component holds the state and exposes it via value prop

## Step 3

Custom hook wraps useContext for a clean API: useBugs()

## Using Context in Components

Using Context

```javascript

// app/_layout.tsx - Wrap app with Provider

import { BugProvider } from '../context/BugContext';

```

```javascript

export default function RootLayout() {

  return (

    <BugProvider>

      <Slot />

    </BugProvider>

  );

}

```

```javascript

// app/bugs/index.jsx - Consume context

import { useBugs } from '../../context/BugContext';

```

```javascript

export default function BugListScreen() {

  const { bugs, deleteBug } = useBugs();

```

```javascript

return (

  <FlatList

    data={bugs}

    renderItem={({ item }) => (

```

## TanStack Query

Data fetching·Caching·useQuery·useMutation

## What is TanStack Query?

"TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations."

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409306.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=S4HQYlA0s0PTLwvzv7Xf8%2BTvU3o%3D&Expires=1778649209' alt='OCR图片'/></div>

## Automatic Caching

Results are cached automatically. Navigating back to a screen shows cached data instantly.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409311.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uUYWSozPPkRv70WXzZsP6g1IyeU%3D&Expires=1778649209' alt='OCR图片'/></div>

## Loading States

isLoading, isFetching, isError states available out of the box no manual tracking.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_3_1778044409316.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2l85SISlXMWtEGuAd70TRuqFUGA%3D&Expires=1778649209' alt='OCR图片'/></div>

## Background Refetch

Data auto-refreshes when the window is focused or network reconnects.

## Query Invalidation

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_4_1778044409324.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UDIefUQrZ0R1y3ldPMKj2bWPYzw%3D&Expires=1778649209' alt='OCR图片'/></div>

Automatically refetch related queries after a mutation (e.g., refresh list after adding item).

## Mutations

useMutation handles POST/PUT/DELETE with optimistic updates and error handling.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_5_1778044409352.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zNzGSG2WHQuqK4WjLfp5YdJTI%2Bo%3D&Expires=1778649209' alt='OCR图片'/></div>

## React Native Ready

Works seamlessly in React Native apps with no extra configuration.

## Why Not Just Use useEffect?

useEffect vs useQuery

```javascript

// ✡ useEffect approach — lots of boilerplate

const [bugs, setBugs] = useState([]);

const [isLoading, setIsLoading] = useState(true);

const [error, setError] = useState(null);

useEffect(() => {

  setIsLoading(true);

  fetch('/api/bugs')

    .then(r => r.json())

    .then(data => { setBugs(data); setIsLoading(false); })

    .catch(err => { setError(err); setIsLoading(false); });

}, []); // No caching, no refetch, no deduplication!

// ✅ TanStack Query – clean and powerful

const { data: bugs, isLoading, error } = useQuery({

  queryKey: ['bugs'],

  queryFn: () => fetch('/api/bugs').then(r => r.json()),

  // Automatically: caches, refetches, deduplicates,

  handles errors

}

```

## No Caching

useEffect re-fetches every time the component mounts even if data is fresh

## Race Conditions

Multiple rapid requests can arrive out of order showing stale data

## No Deduplication

Multiple components calling useEffect for the same data = multiple requests

## Setting Up TanStack Query

Terminal

# Install TanStack Query

npm install @tanstack/react-query

## app/_layout.tsx

```javascript

// app/_layout.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { BugProvider } from '../context/BugContext';

```

```javascript

const queryClient = new QueryClient({

  defaultOptions: {

    queries: {

      staleTime: 1000 * 60 * 5,    // 5 minutes

      retry: 2,                    // retry failed requests twice

    },

  },

});

```

```javascript

export default function RootLayout() {

  return (

    <QueryClientProvider client={queryClient}>

      <BugProvider>

        <Slot />

      </BugProvider>

    </QueryClientProvider>

  );

}

```

## useQuery — Fetching Data

## useQuery

```javascript

import { useQuery } from '@tanstack/react-query';

```

```javascript

// services/bugService.js

export const fetchBugs = async () => {

  const response = await fetch('https://api.example.com/bugs');

  if (!response.ok) throw new Error('Failed to fetch bugs');

  return response.json();

}

```

## ```javascript

// In your screen component

export default function BugListScreen() {

```

## const

data: bugs = [],

// the fetched data

isLoading,

isFetching,

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409372.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BSJNypecQ5DfSFzucjAy9DZQyRM%3D&Expires=1778649209' alt='OCR图片'/></div>

// true on first load

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409376.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=f5KRHUNEcE7csaeZXNtsvLuKtJE%3D&Expires=1778649209' alt='OCR图片'/></div>

```javascript

// true on background refetch

```

error,

refetch,

// Error object if failed

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_3_1778044409383.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gGtq%2BgBmFx%2FZIRSONZVVolt%2BAnQ%3D&Expires=1778649209' alt='OCR图片'/></div>

// manually trigger refetch

```javascript

} = useQuery({

  queryKey: ['bugs'],    // unique cache key

  queryFn: fetchBugs,    // async function

});

```

```javascript

if (isLoading) return <ActivityIndicator />;

if (error) return <Text>Error: {error.message}</Text>;

```

```javascript

return <FlatList data={bugs} ... />;

```

## useMutation — Creating & Updating Data

useMutation

import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function CreateBugScreen() {

  const queryClient = useQueryClient();

  const createMutation = useMutation({

    mutationFn: (newBug) =>

      fetch('/api/bugs', {

        method: 'POST',

        body: JSON.stringify(newBug),

        headers: { 'Content-Type': 'application/json' },

      }).then(r => r.json()),

    onSuccess: () => {

      // Refetch the bugs list after creating

      queryClient.invalidateQueries({ queryKey: ['bugs'] });

      router.back();

    },

    onError: (error) => {

      alert(`Failed: ${error.message}`);

    }

  );

}

## TanStack Query — Data Flow

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409407.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=x5okK5sl0mw1COLeH9weYrZqGls%3D&Expires=1778649209' alt='OCR图片'/></div>

## Bug Report App - Project

Full CRUD App · Expo Router · Context · TanStack Query

## Project: Bug Report App

<div align="center">

Tech Stack: Expo Router + Context API + TanStack Query + Mock API

</div>

<table border="1"><tr><td colspan="2">Tech Stack: Expo Router+Context API+TanStack Query+Mock API</td></tr><tr><td>View Bugs</td><td>FlatList of all reported bugs with status badges</td></tr><tr><td>Create Bug</td><td>Form with title, description,and status picker</td></tr><tr><td>Edit Bug</td><td>Pre-filled form to update existing bug details</td></tr><tr><td>Delete Bug</td><td>Swipe or button to delete with confirmation</td></tr><tr><td>Bug Detail</td><td>Full detail screen with all bug information</td></tr></table>

## Data Model - Bug Object

Bug Data Model

// The Bug data model

id: "1",

identifier

// Unique

title: "Login button not working", // Bug title

(required)

description: "When clicking the description

// Detailed

login button, nothing happens.

No error shown to user."

status: "Open"

Progress" | "Closed"

// "Open" | "In

// Status options

```javascript

const STATUS_OPTIONS = ['Open', 'In Progress', 'Closed'];

```

// Status colors for badges

```c

const STATUS_COLORS = {

```

'Open': ' #2563EB', // Blue

'In Progress' : '#D97706' // Amber

'Closed': '#16A34A', // Green

## Bug

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409417.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YVzn8H9i5h49mNjF9a7EU2Wj%2FuM%3D&Expires=1778649209' alt='OCR图片'/></div>

## App Architecture

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409433.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rmQlmR8UBtXVx97JAJ%2B3lk7CzVY%3D&Expires=1778649209' alt='OCR图片'/></div>

fetchBugs() | createBug() | updateBug() | deleteBug()

## Project Folder Structure

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409443.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=L3uYHqGWs%2Fl0iHIha9KrZQ51ges%3D&Expires=1778649209' alt='OCR图片'/></div>

## bug-report-app/

app/

__layout.tsx

index.tsx

bugs/

```css

__layout.tsx

```

index.tsx

create.tsx

[id].tsx

context/

BugContext.jsx

services/

bugService.js

components/

BugCard.jsx

StatusBadge.jsx

- Root layout — wraps app with providers

- Home screen / entry point

Bug section screens

Bug section layout

Bug list screen

Create bug form

Bug detail screen

Global state management

BugContext + useBugs hook

API service functions

Mock API: CRUD functions

Reusable UI components

## Screen Navigation Flow

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409459.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rKif%2BDql99BgwwDfO1Wm7ACcnRU%3D&Expires=1778649209' alt='OCR图片'/></div>

## Setting Up Providers

## app/_layout.tsx

```javascript

// app/_layout.tsx

import { Stack } from 'expo-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { BugProvider } from '../context/BugContext';

```

```javascript

const queryClient = new QueryClient();

```

```javascript

export default function RootLayout() {

  return (

    <QueryClientProvider client={queryClient}>

      <BugProvider>

        <Stack>

          <Stack.Screen

            name="index"

            options={{ title: 'Bug Reporter' }}

          />

```

```html

<Stack.Screen

  name="bugs/index"

  options={{ title: 'All Bugs' }}

```

name="bugs/create"

## services/bugService.js — Mock Data Layer

```javascript

services/bugService.js

// services/bugService.js

// Simulates an API with in-memory data

let bugs = [

  { id: '1', title: 'Login button broken', description: 'Nothing happens on click', status:

'Open' },

  { id: '2', title: 'Dark mode crash', description: 'App crashes when switching theme', status:

'In Progress' },

];

export const fetchBugs = async () => {

  await delay(500); // simulate network latency

  return [...bugs];

};

export const fetchBugById = async (id) => {

  await delay(300);

  return bugs.find(b => b.id === id);

};

export const createBug = async (bugData) => {

```

## Bug List Screen

```javascript

// app/bugs/index.jsx

import { FlatList, Pressable, View, Text } from 'react-native';

import { router } from 'expo-router';

import { useQuery } from '@tanstack/react-query';

import { fetchBugs } from '../../services/bugService';

import BugCard from '../../components/BugCard';

```

```javascript

export default function BugListScreen() {

  const { data: bugs = [], isLoading, error } = useQuery({

    queryKey: ['bugs'],

    queryFn: fetchBugs,

  });

```

if (isLoading) return <ActivityIndicator size="large" />;

if (error) return <Text>Failed to load bugs</Text>;

```javascript

return (

  <View style={styles.container}>

    <FlatList

      data={bugs}

      keyExtractor={(item) => item.id}

```

## Create & Edit Bug Screens

```javascript

app/bugs/create.jsx

// app/bugs/create.jsx

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createBug } from '../../services/bugService';

export default function CreateBugScreen() {

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({

    mutationFn: createBug,

    onSuccess: () => {

      queryClient.invalidateQueries({ queryKey: ['bugs'] });

      router.back();

    },

  });

  return (

    <View style={styles.container}>

      <TextInput value={title} onChangeText={setTitle}

        placeholder="Bug title" style={styles.input} />

```

## Bug Detail Screen & Delete Flow

```javascript

app/bugs/[id].jsx

// app/bugs/[id].jsx

export default function BugDetailScreen() {

  const { id } = useLocalSearchParams();

  const queryClient = useQueryClient();

  const { data: bug, isLoading } = useQuery({

    queryKey: ['bug', id],

    queryFn: () => fetchBugById(id),

  });

  const deleteMutation = useMutation({

    mutationFn: () => deleteBug(id),

    onSuccess: () => {

      queryClient.invalidateQueries({ queryKey: ['bugs'] });

      router.replace('/bugs');

    },

  });

  const handleDelete = () => {

    Alert.alert('Delete Bug', 'Are you sure?', [

      { text: 'Cancel', style: 'cancel' }

    ]);

  }

}

```

## CRUD Lifecycle

## CREATE

useMutation(createBug)

→ onSuccess:

invalidateQueries( [

'bugs']

router.back()

## READ

useQuery(['bugs'])

useQuery(['bug',

id])

→ Automatic caching

& background

refresh

## UPDATE

useMutation(updateBug)

→ onSuccess:

invalidateQueries( ['bugs'] )

invalidateQueries( ['bug', id])

## DELETE

useMutation(deleteBug)

→ onSuccess:

invalidateQueries([ 'bugs'])

router.replace('/bugs')

Key pattern: Every write operation ends with queryClient.invalidateQueries() to keep UI in sync

## Project Recap — What We Built

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409466.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QbfEaswazan8g0dtz9GeDiVhwAE%3D&Expires=1778649209' alt='OCR图片'/></div>

Students can now build a complete CRUD mobile app

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409476.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0PFmUUwep0sV3oqkh8LhrN42ESs%3D&Expires=1778649209' alt='OCR图片'/></div>

Expo Router with file-based navigation and dynamic routes

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_3_1778044409481.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IHOHl1g97xO1BJmskXuDcthzVeU%3D&Expires=1778649209' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_4_1778044409487.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tbnu6p5b9n1y6hxZre%2B3KIdpF1c%3D&Expires=1778649209' alt='OCR图片'/></div>

Context API for global state management (BugProvider)

TanStack Query for data fetching, caching, and mutations

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_5_1778044409492.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BLLN%2FLf%2BLQ3QLa0B7ce80OolOg0%3D&Expires=1778649209' alt='OCR图片'/></div>

FlatList with real data and empty/loading states

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_6_1778044409496.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=o0lfK0WzBMKnS9kvtwva8Hz4O1s%3D&Expires=1778649209' alt='OCR图片'/></div>

Create, Read, Update, Delete operations with confirmation dialogs

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_7_1778044409501.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CxhPHIaNWF2edTi9jy0J7Mb5gb8%3D&Expires=1778649209' alt='OCR图片'/></div>

Form validation with error messages

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_8_1778044409506.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iZOviGSguvwSE72W1SAY3pNnoM4%3D&Expires=1778649209' alt='OCR图片'/></div>

Navigation patterns: push, back, replace

## Summary & Q&A

Key takeaways·Next steps·Q&A

## Key Concepts Learned Today

## React Native

Native mobile apps with React — same components, no HTML

## Core Components

View, Text, Image, TextInput, Pressable, FlatList

## Navigation

Expo Router — file-based routes, dynamic [id] params

## TanStack Query

Professional data fetching - caching, mutations, loading states

## Expo

Simplified setup, Expo Go for instant testing, EAS for builds

## Styling

StyleSheet.create with Flexbox — no CSS, all JavaScript

## Context API

Global state without prop drilling - BugProvider pattern

## CRUD App

Complete bug reporter with Create, Read, Update, Delete

## What to Learn Next

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_1_1778044409511.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=elLfeMSSYdW9COp3%2Fk7NcLSDGd0%3D&Expires=1778649209' alt='OCR图片'/></div>

## AsyncStorage

Persist data locally on device — bug list survives app restarts

## Authentication

Expo Auth Session, Clerk, Supabase Auth add login to your app

## Camera & Media

expo-camera, expo-image-picker capture photos in your app

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506131246365be1c02b2349ea%2Fcrop_2_1778044409516.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LTxTOxJ4PdcuZybDVrGpxeFxhAE%3D&Expires=1778649209' alt='OCR图片'/></div>

## Push Notifications

expo-notifications alert users to new bugs or updates

## Supabase / Firebase

Replace mock API with real database and real-time updates

## EAS Build

Build and publish to App Store and Google Play Store

## ?

## Questions & Answers

Keep building. Keep shipping.

## Appendix — Useful Commands

Terminal Commands

# Project setup

npx create-expo-app my-app

cd my-app && npm start

# Install packages

npm install @tanstack/react-query

npm install expo-router (included by default)

# Run on specific platform

npx expo start --android

npx expo start --ios

# Build for production (EAS)

npx eas build --platform android

npx eas build --platform ios

# Clear cache

npx expo start --clear

# Check Expo doctor

npx expo-doctor

## Useful Links

## Expo Docs

docs.expo.dev

Expo Router

docs.expo.dev/router/introduction

## TanStack Query

tanstack.com/query/v5/docs

## React Native

reactnative.dev

## Expo Icons

icons.expo.fyi