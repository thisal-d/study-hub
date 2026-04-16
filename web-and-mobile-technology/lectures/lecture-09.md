<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078523.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aoaCNQkD4eecbCoAsUStGMie8c0%3D&Expires=1776881878' alt='OCR图片'/></div>

## SE2020-Web Technologies and Mobile Lecture 09

## ReactJS Part 02

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_2_1776277078534.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TkopmgdQGFj7sQgd%2Fnof9VIRuNs%3D&Expires=1776881878' alt='OCR图片'/></div>

## Why Do We Need Advanced State Management?

## The Problem with Scaling React Apps

- As applications grow, state becomes more complex and harder to manage.

- Components begin to:

- Share state across many levels

- Pass too many props (prop-drilling)

- Re-render unnecessarily

- Local state (useState) becomes insufficient when:

- Multiple components depend on the same data

- Data updates frequently (API calls, authentication, UI themes, cart items)

- Global configuration is needed (language, dark mode, user role)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078541.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DZvolauwpgraRVQ5RwXyJQLyijk%3D&Expires=1776881878' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_2_1776277078547.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WL0nOMWYPjT4aMkfQP7%2Ftz%2FuzbE%3D&Expires=1776881878' alt='OCR图片'/></div>

## Why Do We Need Advanced State Management?

## Key Challenges

- Prop Drilling — Passing data through many nested components.

- Inconsistent State — Hard to synchronize changes across components.

- Repeated Logic — Same state handling code duplicated in many places.

- Performance Issues — Too many re-renders.

## What We Introduce in Part 2

Context API — Avoids prop drilling & provides simple global state.

Redux Toolkit — Scalable, predictable state container for large apps.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078554.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FxL17wS1Y8bg7Si3W%2FtF2yHHMEY%3D&Expires=1776881878' alt='OCR图片'/></div>

React 18 Features — Concurrent rendering, transitions.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_2_1776277078563.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6oMOZh2j4BP6jGBC3%2BGTtzJxxho%3D&Expires=1776881878' alt='OCR图片'/></div>

Suspense — Better async UI handling.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_3_1776277078568.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BS9Tw0GXzNSAK7zaDjq6WhQdWfw%3D&Expires=1776881878' alt='OCR图片'/></div>

## What is the Context API?

## A Built-in Solution for Global State

- The Context API allows React components to share data without passing props manually at every level.

- Helps solve the problem of prop drilling, especially in deeply nested component trees.

## How It Works (Conceptually)

## 1. Create Context

- A context acts like a "shared storage bucket".

## 2. Provide Context

- A Provider component makes the data available to all child components.

## 3. Consume Context

- Components access the shared data using:

- useContext() (Functional components)

- Context.Consumer (Legacy)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078575.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=r063UbjkbpNENa4wqv%2FV6CDglCk%3D&Expires=1776881878' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_2_1776277078584.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hRuKjVa7Ykc5teTuiiXMFhDBWm8%3D&Expires=1776881878' alt='OCR图片'/></div>

## What is the Context API?

## When to Use the Context API

Use it when the data is:

- Needed by many components

- Not expected to change extremely frequently

Example scenarios:

- User authentication data (User object)

- Theme settings (Dark/Light mode)

- Language/Localization

- App-wide configs

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078592.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wNK4DB1w4P1OeXRRZ85D2bwXGoM%3D&Expires=1776881878' alt='OCR图片'/></div>

## Why Do We Need the Context API?

## X Problem: Prop Drilling

- In React, data normally flows top -> down using props.

- When many components need the same data, props must be passed through multiple layers—even if intermediate components don't use it.

## This creates:

Unnecessary re-renders

Hard-to-maintain component trees

Complicated refactoring

Increased risk of bugs

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078600.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WvPTB6BUSjPlK2kt1IU6GwvWoEc%3D&Expires=1776881878' alt='OCR图片'/></div>

## Why Do We Need the Context API?

## How Context Solves It

- Context provides a global shared storage.

- Any component in the tree can access the data directly, without passing props through parents.

- Reduces UI wiring and simplifies complex component hierarchies.

## Example Comparison

Without Context (Prop Drilling)

With Context

App → Layout → Sidebar → UserMenu → UserAvatar

<App> <UserContext.Provider> ... entire app ... </UserContext.Provider> </App>

UserAvatar needs the username, but every parent must pass it as props.

UserAvatar can access username directly using useContext().

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078605.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=l0H%2FkliUSDfAcp7jb9CsQJ4I2mI%3D&Expires=1776881878' alt='OCR图片'/></div>

## How Does the Context API Work?

Context API Workflow (3 Steps)

## 1. Create a Context

A context object defines the shared "global space".

```javascript

import { createContext } from "react";

```

```javascript

export const ThemeContext = createContext();

```

This does not store data yet—just creates the structure.

## 3. Consume Data Using useContext()

Any component can now read the data without props.

```javascript

import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

const { theme, setTheme } = useContext(ThemeContext);

```

## 2. Wrap Your App With a Provider

The Provider makes values available to all nested components.

```html

<ThemeContext.Provider value={{ theme, setTheme }}>

  <App />

```

</ThemeContext.Provider>

- value contains the shared data.

## Key Outcome

- Any component inside <Provider> can access it.

- Context allows global reading & updating of shared state without prop drilling.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078612.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=peFs9ZI%2Bz02deFFESXCLjvlW2%2Fg%3D&Expires=1776881878' alt='OCR图片'/></div>

## Creating a Context (Step-by-Step Example)

## Step 1: Create the Context File

It's best practice to keep each context in its own file for clarity and reuse.

```javascript

// ThemeContext.js

import { createContext } from "react";

// Create the context object

export const ThemeContext = createContext();

```

This defines the type of context,

but does not store any data yet.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078617.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3Cvga56xvDXtHOztvsxPFKhDgdE%3D&Expires=1776881878' alt='OCR图片'/></div>

## Creating a Context (Step-by-Step Example)

## Step 2: Create a Provider Component

Providers wrap your app and supply the global value.

```javascript

// ThemeProvider.js

import { useState } from "react";

import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>

      {children}

    </ThemeContext.Provider>

  );

};

```

## What This Does

- Creates state (theme, setTheme)

- Shares it with the entire application using Provider

- Any person can read or update the theme

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078625.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=otEUVm2znHM178zh4ZJUYkWqaEU%3D&Expires=1776881878' alt='OCR图片'/></div>

## Creating a Context (Step-by-Step Example)

## Step 3: Wrap the Root App

In index.js (or main.jsx in Vite):

```javascript

import { ThemeProvider } from "./ThemeProvider";

root.render(

  <ThemeProvider>

    <App />

  </ThemeProvider>

);

```

You can create multiple providers:

- AuthProvider

- LanguageProvider

- SettingsProvider

Each one handles a separate global state.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078635.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jylBqgRQiUi2NnOyxj8cs8w%2BlPg%3D&Expires=1776881878' alt='OCR图片'/></div>

## Consuming Context Using useContext()

Once the Provider is set, any component can access the shared data using useContext()

This avoids passing props from parent $ \rightarrow $ child $ \rightarrow $ grandchild.

## Example: Reading Context Values

```javascript

import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

function Navbar() {

  const { theme } = useContext(ThemeContext);

  return (

    <nav className={theme === "light" ? "light-nav" : "dark-nav"}>

      Navbar - Current Theme: {theme}

    </nav>

  );

}

```

No props needed

Cleaner and less repetitive

Component automatically updates when context value changes

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078640.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cA%2FKlzdqzbdfVen%2BSdf67lMqn2o%3D&Expires=1776881878' alt='OCR图片'/></div>

## Consuming Context Using useContext()

## Example: Updating Context Values

```javascript

function ThemeToggleButton() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (

    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>

      Switch Theme

    </button>

  );

}

```

## Best Practice Reminder

Only use useContext() inside components wrapped by the Provider:

```html

<ThemeProvider>

    <App />    ← works

</ThemeProvider>

```

## What happens?

Outside the Provider $ \rightarrow $ useContext() will return undefined.

- All components using this context automatically re-render

- No prop drilling required

- The button updates global theme

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078645.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8EDQCZ%2FcHy5Q6DzB71rGsOhMHy0%3D&Expires=1776881878' alt='OCR图片'/></div>

## When Should You Use the Context API?

## Best Use Cases for Context API

Use Context when the data is:

## Needed by many components across the app

Examples:

- User profile

- Authentication status

- App settings

## UI-related global state

Examples:

- Dark / Light theme

- Font size settings

- Layout mode (grid/list)

- Toggle values (sidebar open/closed)

## Rarely-updated global data

Examples:

- App version

- Language (i18n)

- Currency

- Role-based UI configuration

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078650.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ys1kS9O3nVUptrpPT8yOEdOTSO4%3D&Expires=1776881878' alt='OCR图片'/></div>

## When Should You Use the Context API?

Ideal Scenarios

Context is perfect when:

- The state is simple

- The state does not change frequently

- The data is consumed by multiple sibling components

- You want to eliminate prop drilling

- You want to avoid external dependencies (simple apps)

## When NOT to Use Context

Avoid Context when:

- The state updates very frequently (e.g., typing text)

- You need complex state transitions

- Multiple contexts begin to nest deeply

- You need strong debugging tools

- You are working on a large-scale app with many global states

- In these situations, Redux Toolkit or Zustand is more suitable.

## Guiding Rule

Context API = good for simple global state.

Redux Toolkit = good for complex, scalable state.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078657.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7jn2ZjizcbcmIvm%2BmmpqKNdDKik%3D&Expires=1776881878' alt='OCR图片'/></div>

## Limitations of the Context API

Although Context helps eliminate prop drilling, it's not suitable for every situation.

Understanding its limitations ensures you choose the right state management tool.

## 1. Re-renders Can Become Expensive

- When the context value changes, all components that consume it re-render.

- Even components that use only part of the data will re-render.

- This can hurt performance in large applications.

## Example:

If a UserContext updates frequently $ \rightarrow $ entire UI may re-render.

## 2. Not Designed for Highly Dynamic or Complex State

Context is poor at handling:

- Rapidly changing values (ex: search input, counters, animation states)

- Complex business logic

- Multi-level async workflows

- Cached data from APIs

Redux Toolkit or Zustand is better suited.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078662.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c8TqafIqoDhIKXbpx01CcdRSFNA%3D&Expires=1776881878' alt='OCR图片'/></div>

## Limitations of the Context API

## 3. No Built-in Debugging or DevTools

Context lacks:

- Time-travel debugging

- Action logging

- State change tracing

Large applications need robust debugging $ \rightarrow $ Redux DevTools provides this.

## 4. Multiple Contexts $ \rightarrow $ Harder to Manage

If your app grows:

- AuthContext

- ThemeContext

- LanguageContext

- CartContext

- SettingsContext

You end up with Provider Hell, This becomes difficult to read and maintain.

## 5. Not Ideal for State That Requires Sharing Across Many Features

Context is not built for:

Large forms, API caching, Pagination, Global filters Notifications handling, Real-time updates

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078668.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oW6RNXADTwwsNZxQ6ixHgMoPUBI%3D&Expires=1776881878' alt='OCR图片'/></div>

## Introduction to Redux

## Redux is a predictable global state management library designed for large and complex React applications.

## What Problem Does Redux Solve?

When your app grows:

- Many components need access to the same data

- State updates become hard to track

- Direct component-to-component communication becomes messy

- Debugging becomes difficult

- Redux centralizes state into one single store for the entire app.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078673.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=q5rGybt2xIitUL06eKLhhc5x54A%3D&Expires=1776881878' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_2_1776277078678.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HD%2Bn3y91FUjwQ%2FzOqdAnrOTX5%2BI%3D&Expires=1776881878' alt='OCR图片'/></div>

## Introduction to Redux

## Core Principles of Redux

## Single Source of Truth

- One global store holds the entire application state.

- Easy to debug, log, and reason about.

## State is Read-Only

- Components cannot directly modify state.

- Updates happen through actions only.

## Changes Are Made With Pure Reducers

- Reducers are pure functions:

(state, action) $ \rightarrow $ newState

- Ensures predictable behavior every time.

## Why Redux is Popular

Great for medium to large-scale apps

Works consistently across all parts of your UI

Predictable state transitions

Excellent debugging tools (Redux DevTools)

Perfect for handling:

API calls

- Complex workflows

- Real-time updates

- Multi-feature state data

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078684.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0uEU4FzIVANNAc4r2GwovVQQXv0%3D&Expires=1776881878' alt='OCR图片'/></div>

## Introduction to Redux

## When to Use Redux

Use Redux when your application:

- Has lots of shared/global state

- Requires complex state logic

- Needs to scale over time

- Needs strong debugging tools

- Must handle frequent state updates efficiently

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078692.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FomMhQ68h1tp7zG2FTzKOmvJUKk%3D&Expires=1776881878' alt='OCR图片'/></div>

## Why Use React Redux?

React Redux is the official library that connects Redux with React.

It provides the most efficient way for React components to interact with the Redux store.

## 1. Automatic Performance Optimization

React Redux uses an optimized subscription system:

- Components re-render only when the specific state they use changes.

- Prevents unnecessary rendering.

- More efficient than manually subscribing to Redux.

## 2. Simple and Modern API Using Hooks

React Redux provides built-in hooks:

- useSelector()

Reads/selects specific state values from the store.

Automatically subscribes the component and triggers re-renders only when needed.

- useDispatch()

Allows the component to dispatch actions that update the Redux store.

These replace older methods like connect().

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078700.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xD%2F9xtPQAV0Rs%2FH%2Be0xmCZXpo%2F0%3D&Expires=1776881878' alt='OCR图片'/></div>

## Why Use React Redux?

## 3. Great Developer Experience

React Redux integrates seamlessly with:

- Redux DevTools

- Action logging

- Time-travel debugging

- State inspection

This makes debugging much easier in large applications.

## 4. Encourages Predictable UI Behavior

Because state comes from the centralized store:

- Components behave consistently

- Bugs are easier to track

## 5. Works Perfectly with Redux Toolkit

- UI stays in sync across the app

Redux + Redux Toolkit is the official recommended setup:

- Less boilerplate

- Cleaner reducer logic

- Built-in async support

- Better maintainability

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078706.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=h%2BZoNFK3StiX0OVVCu3uGIa2v%2F8%3D&Expires=1776881878' alt='OCR图片'/></div>

## Redux Toolkit: The Modern Way to Use Redux

Redux Toolkit (RTK) is the official, recommended approach for writing Redux logic.

It solves the biggest issues developers faced with classic Redux.

## Why Redux Toolkit? (Key Improvements)

## Eliminates Boilerplate Code

Traditional Redux required:

- Action types

- Action creators

- Switch-case reducers

- Manual immutability

RTK removes all of that.

## Built-In Immutability with Immer

- You can "mutate" state inside reducers.

- Immer converts it into an immutable update.

- This makes reducer logic simple & beginner-friendly.

Example:

state.value++

Previously this was not allowed in Redux RTK makes it safe.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078716.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NAzYqE2fT6xCAOITfZkRRmzuMcY%3D&Expires=1776881878' alt='OCR图片'/></div>

## Redux Toolkit: The Modern Way to Use Redux

## Built-In DevTools & Middleware

RTK automatically configures:

- Redux DevTools

- Thunk middleware (for async calls)

- Better default settings

No extra setup needed.

## Great for Async (API) Logic

RTK provides:

- createAsyncThunk() for async operations

## Slices Combine Logic Together

- RTK Query for API caching, fetching, invalidation

A "slice" includes:

This is much easier than classic Redux async patterns.

- Initial state

- Reducers

- Actions

- Case reducers

All in one file $ \rightarrow $ cleaner architecture.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078723.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MQjS0fy1o1zjKxO3pkfAFMYgxFo%3D&Expires=1776881878' alt='OCR图片'/></div>

## Installing Redux Toolkit & React Redux

## To start using Redux Toolkit in a React project, you need two packages:

## Redux Toolkit

Provides:

- configureStore

- createSlice

- createAsyncThunk

- Built-in middleware

- Immer for immutability

## React Redux

- DevTools support

The official binding between React and Redux:

- Provider

- useSelector

- useDispatch

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078742.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NDE3pkGSsfNvwbzfw%2B5zbRm7l%2B8%3D&Expires=1776881878' alt='OCR图片'/></div>

## Using Redux State Inside React Components

Once the store and slices are set up, you can interact with Redux from any component using:

- useSelector() -> Read state

- useDispatch() -> Update state

These hooks are provided by React Redux.

## Reading State with useSelector()

useSelector() lets a component subscribe to specific parts of the Redux state.

```javascript

import { useSelector } from "react-redux";

function CounterDisplay() {

  const value = useSelector((state) => state.counter.value);

  return <h1>Count: {value}</h1>;

}

√ Automatically re-renders when that part of the state changes

√ Efficient — only re-renders when necessary

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078749.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZSb%2FmPpYvLjilrQY311loqDevOY%3D&Expires=1776881878' alt='OCR图片'/></div>

## Using Redux State Inside React Components

## Dispatching Actions with useDispatch()

useDispatch() returns the dispatch function, used to trigger state updates.

```javascript

import { useDispatch } from "react-redux";

import { increment, decrement } from "./counterSlice";

function CounterButtons() {

  const dispatch = useDispatch();

  return (

    <>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

    </>

  );

}

√ Updates state predictably

√ Uses slice actions created automatically by Redux Tool

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078754.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LRbrK8gHI5kfS55NGQ40fZ6MMTU%3D&Expires=1776881878' alt='OCR图片'/></div>

## Using Redux State Inside React Components

Combined Example

```javascript

function Counter() {

  const value = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (

    <div>

      <h2>{value}</h2>

      <button onClick={() => dispatch(increment())}>Increase</button>

      <button onClick={() => dispatch(decrement())}>Decrease</button>

    </div>

  );

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078762.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FNcYqqXQnbkylqCPpqWzIrCtVnE%3D&Expires=1776881878' alt='OCR图片'/></div>

## Context API vs Redux Toolkit

Choosing the right state management tool depends on your application's size, complexity, and performance needs.

## When to Use Context API

Best for simple, UI-related global state.

## Ideal Scenarios:

- Theme switching (Light/Dark)

- User authentication info (current user)

- Language / Locale settings

- Layout preferences (sidebar open, grid/list view)

- Configuration settings that rarely change

## Strengths:

- Simple & built into React

- No extra dependencies

- Great for small-to-medium apps

## Limitations:

- Easy to understand and implement

- Re-renders all consumers when value changes

- Not suitable for complex logic

- No built-in debugging tools

- Hard to scale across many features

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078769.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1E6Xa6ixapFaxk9S9%2BaYqfT8zFQ%3D&Expires=1776881878' alt='OCR图片'/></div>

## Context API vs Redux Toolkit

## When to Use Redux Toolkit (RTK)

Best for large, multi-feature, complex applications.

## Ideal Scenarios:

- Multiple components depend on shared global data

- Data updated frequently (API responses, pagination)

- Complex logic: derived state, multiple reducers

- Real-time updates (chat, dashboards)

- Apps requiring robust debugging (DevTools)

- Predictable state transitions needed

## Strengths:

- Scalable & structured architecture

- Built-in tools for async logic (createAsyncThunk)

- Built-in DevTools -> action history & time-travel debugging

- Performance-optimized subscription model

- Centralized store improves consistency

## Limitations:

- Slightly more setup than Context

- Might be overkill for small app

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078774.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KTmF24RzrFlSdW8odcTT3JAcVtU%3D&Expires=1776881878' alt='OCR图片'/></div>

## Advance React

Concurrent Rendering

React Suspense

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078781.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0ltIvAXU0NTWleKFfXVLFfSvIKI%3D&Expires=1776881878' alt='OCR图片'/></div>

Server-Side Rendering (SSR)

## Concurrent Rendering

React 18 introduced a new rendering system called Concurrent Rendering.

It improves performance, responsiveness, and user experience — especially in large apps.

## What is Concurrent Rendering?

Concurrent Rendering allows React to:

Interrupt rendering work

React can pause a long update if something more urgent (like a user typing) happens.

## Work in the background

React prepares UI updates behind the scenes without blocking the main thread.

## Prioritize updates

Urgent updates (like typing) happen first.

Non-urgent updates (like filtering big lists) run as background tasks.

Avoid UI freezing

Heavy renders no longer lock the UI.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078789.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IYRxyfAjCvjPV20y1vPR%2FKcD%2BNY%3D&Expires=1776881878' alt='OCR图片'/></div>

## Concurrent Rendering

## Why Was This Needed?

Before React 18 (legacy rendering):

- UI could freeze while React processed updates

- Large state updates = slow interactions

- Browsers felt unresponsive in heavy apps

Concurrent Rendering solves all of these.

## Benefits for Developers

- Smoother UX

- Faster perceived performance

- Great for search bars, long lists, filtering, sorting

- Better on low-end devices

- Makes heavy UI workloads feel lightweight

## How to Use It?

Concurrent features are opt-in, meaning:

- You enable them when needed

- Normal rendering still works the same

Enabled through hooks like:

- useTransition()

- useDeferredValue()

- Suspense

React automatically handles scheduling and prioritizing.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078795.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SznAJJ50IA0fSZg0yZ72zKxmG8E%3D&Expires=1776881878' alt='OCR图片'/></div>

## useTransition: Prioritizing UI Updates (React 18)

useTransition allows you to separate urgent updates from non-urgent updates, making your UI feel smoother and more responsive.

## Why useTransition?

In large apps, certain operations are heavy:

## How useTransition Works

- Filtering long lists

It returns two values:

- Rendering large tables

const [isPending, startTransition] = useTransition();

- Searching through big datasets

- Loading large UI components

## These can cause:

- UI lag

## startTransition(callback)

- Input delay

Tells React to run the update as non-urgent.

- Frozen screens

## isPending

A boolean that indicates if the transition is ongoing

(useful for showing loading indicators).

useTransition fixes this by running heavy updates in the background.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078801.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WhldZLDskekNqM8Nw49xSoyVtXE%3D&Expires=1776881878' alt='OCR图片'/></div>

## useTransition: Prioritizing UI Updates (React 18)

Example: Filtering a Large List Smoothly

```javascript

import { useState, useTransition } from "react";

const items = [...Array(10000)].map((_, i) => `Item ${i}`);

function SearchList() {

  const [query, setQuery] = useState("");

  const [filtered, setFiltered] = useState(items);

  const [isPending, startTransition] = useTransition();

  const handleInput = (e) => {

    const value = e.target.value;

    setQuery(value);

    startTransition(() => {

      setFiltered(items.filter(item => item.includes(value)));

    });

  };

};

```

```javascript

return (

  <>

    <input value={query} onChange={handleInput} />

    {isPending && <p>Loading...</p>}

    <ul>

      {filtered.map(item => <li key={item}>{item}</li>)}

    </ul>

  </>

);

}

```

This ensures the input box stays responsive, heavy filtering runs in the background, the UI doesn't freeze, and users still receive immediate responses for urgent actions.

The key idea is that urgent UI interactions and non-urgent heavy computations run smoothly without blocking each other, thanks to useTransition.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078807.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=W2KD77NVXU8BoGl9D3z2o56ALgg%3D&Expires=1776881878' alt='OCR图片'/></div>

## useDeferredValue: Avoid Lag in Fast-Typing Scenarios

useDeferredValue allows you to delay updating a non-urgent value, improving UI responsiveness when the user is typing or interacting quickly.

It is very similar to useTransition, but easier to use for input-based UI updates.

## Why useDeferredValue?

In large applications:

- When users type into search boxes,

- When filtering large datasets,

- When typing triggers heavy recalculations,

You might see:

- Input lag

- Delayed keystrokes

- UI freezing

useDeferredValue prevents this by deferring heavy updates.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078812.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KKls5PFg7sQ%2BM8d0KbTDAeN0pZM%3D&Expires=1776881878' alt='OCR图片'/></div>

## useDeferredValue: Avoid Lag in Fast-Typing Scenarios

How It Works

You give React a value, and React returns a deferred version:

const deferredQuery = useDeferredValue(query);

query

Updates instantly  $ \rightarrow $ responsive typing

deferredQuery

Updates later $ \rightarrow $ used for heavy calculations

(e.g., filtering, sorting, rendering big lists)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078819.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ogq2bx7GBL9ZyM%2BOtNL68mU2Qms%3D&Expires=1776881878' alt='OCR图片'/></div>

## useDeferredValue: Avoid Lag in Fast-Typing Scenarios

Example: Smooth Search (with Heavy List Rendering)

```javascript

import { useState, useDeferredValue } from "react";

const items = [...Array(10000)].map((_, i) => `Item ${i}`);

function SearchList() {

  const [query, setQuery] = useState("");

  // Deferred version of query for expensive operations

  const deferredQuery = useDeferredValue(query);

  const filtered = items.filter(item =>

    item.includes(deferredQuery)

  );

```

```javascript

return (

  <>

    <input

      value={query}

      onChange={e => setQuery(e.target.value)}

      placeholder="Type to search..."

    />

    <ul>

      {filtered.map(item => <li key={item}>{item}</li>)}

    </ul>

  </>

);

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078830.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pczhyg6NLqH3EhlbpsQdcuMU%2BbQ%3D&Expires=1776881878' alt='OCR图片'/></div>

## useDeferredValue: Avoid Lag in Fast-Typing Scenarios

## What This Achieves

Immediate response to user typing

Heavy list filtering happens AFTER the user finishes typing

UI does not freeze

Great for search bars, dropdown filters, dashboards

## When to Use useDeferredValue

Use it for situations like:

- Search filters

- Auto-suggestions

- Live data display

- Pagination UI

- Large tables or lists

- Any component with heavy updates triggered by typing

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078838.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QX5gMh2mzwvSK9JA8BxUadbUeiw%3D&Expires=1776881878' alt='OCR图片'/></div>

## React Suspense

Suspense is a React feature that lets you pause rendering while waiting for something (like data or code) and show a fallback UI in the meantime.

It makes loading states clean, declarative, and automatic.

## What Suspense Does

Instead of manually managing loading states like:

if (loading) return <Spinner />;

Suspense allows you to wrap components and let React:

- Wait for async resources

- Show a fallback loader

- Resume rendering when ready

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078844.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eOc4BgdY5DTauP1V77ETyBIQbak%3D&Expires=1776881878' alt='OCR图片'/></div>

## React Suspense

## Key Use Cases of Suspense

## 1. Lazy Loading Components

Load components only when needed $ \rightarrow $ improves performance.

## 2. Server Components & Streaming (React 18 / Next.js 13+)

Suspense works with async server rendering.

## 3. Data Fetching (with frameworks/libraries)

Suspense integrates with:

- React Server Components (RSC)

- React Query (experimental)

- Relay

- Next.js App Router

## 4. Graceful fallback UI

Loading screens, skeletons, spinners, placeholders.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078853.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lrtArYwvipanYoFpaZq9a28mVz0%3D&Expires=1776881878' alt='OCR图片'/></div>

## React Suspense

## Lazy Loading Example Using Suspense

```javascript

import { Suspense, lazy } from "react";

const Profile = lazy(() => import("./Profile"));

function App() {

  return (

    <Suspense fallback={<h2>Loading Profile...</h2>}>

      <Profile />

    </Suspense>

  );

}

```

lazy() loads the component only when needed

Suspense shows fallback UI until it loads

## Why Suspense is Important

- Cleaner loading logic

- Consistent UX across the app

- Helps split your app into smaller chunks (code-splitting)

- Makes the UI more responsive

- Integrates deeply with server-side rendering

## Summary

Suspense = declarative loading handling that improves

performance and user experience.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078868.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vigw7wTl73kH7Tgji%2Bjc7%2Ftipb8%3D&Expires=1776881878' alt='OCR图片'/></div>

## Server-Side Rendering (SSR) in React

Server-Side Rendering (SSR) means rendering React components on the server instead of the browser.

The server sends fully rendered HTML to the client, improving performance and SEO.

## How SSR Works (Step-by-Step)

1. User requests a page (URL) The browser sends a request to the server.

## 2. Server runs React components

React executes on the server, fetches data, and generates HTML.

## 3. Server sends pre-rendered HTML to the browser

The browser instantly displays meaningful content fast first paint.

## 4. JavaScript loads and hydrates the page

This attaches event listeners and makes the page interactive.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078877.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oxd%2FjatWRMxlw%2BbLuXBWwmHT9o4%3D&Expires=1776881878' alt='OCR图片'/></div>

## Server-Side Rendering (SSR) in React

Why SSR Is Useful?

## Better SEO

Search engines can fully index rendered HTML.

Ideal for blogs, e-commerce, landing pages.

## Faster First Load

Users see the UI immediately instead of waiting for JavaScript to load.

## Better Performance on Slow Devices

Heavy computations run on the server, not the user's device.

## Great for Dynamic Content

Data-driven pages load faster when rendered on the server.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078883.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xW%2BN%2FnFPEhhWk0HC71XLfcORQxo%3D&Expires=1776881878' alt='OCR图片'/></div>

## Server-Side Rendering (SSR) in React

Where Is SSR Used in React?

SSR is NOT done using plain React.

Instead, frameworks like Next.js provide SSR support out of the box.

Next.js Features for SSR:

- getServerSideProps()

- Dynamic server-side rendering

- Streaming SSR

- Server Components (React 18)

Next.js is currently the officially recommended React framework.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078891.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=miWfYCCK7POTiTf58S5qDNZ%2FaEM%3D&Expires=1776881878' alt='OCR图片'/></div>

## Server-Side Rendering (SSR) in React

## When Should You Use SSR?

Use SSR when your app needs:

- Search engine visibility

- Dynamic content with fast initial load

- Public-facing pages

- Strong performance on low-power devices

- Improved perceived performance

## Examples:

- E-commerce product pages

- Blogs & news websites

- Marketing landing pages

- Portfolio websites

Summary :- SSR = faster first load + better SEO + server-powered rendering recommended for content-heavy and public-facing sites.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078896.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vJwWcxA%2BfFa6%2FaFNRQouWHyOeVs%3D&Expires=1776881878' alt='OCR图片'/></div>

## Client-Side Rendering (CSR) in React

Client-Side Rendering (CSR) means the browser is responsible for rendering the UI after downloading JavaScript.

This is the most common rendering strategy used by React apps created with Vite, CRA, or Next.js (client components).

## How CSR Works (Step-by-Step)

- Browser loads a minimal HTML file

Usually contains just:

```html

<div id="root"></div>

```

## JavaScript bundle downloads

React code is loaded into the browser.

## React builds the UI on the client

All components render using browser CPU.

- Data is fetched from APIs (client-side)

The UI appears only after data + JS loading.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078901.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CVcRoVQLLIkfUaArJfupk7ynCSw%3D&Expires=1776881878' alt='OCR图片'/></div>

## Client-Side Rendering (CSR) in React

## Advantages of CSR

## Excellent Interactivity

Perfect for apps with dynamic UI states, frequent updates, and complex user workflows.

Faster navigation between pages Once loaded, the app behaves like a desktop application.

Simpler architecture No need for server-based rendering logic.

Lower server load

Backend serves static files $ \rightarrow $ minimal processing cost.

Works offline (with Service Workers) CSR apps can be turned into PWAs.

## Disadvantages of CSR

## X Slow First Page Load

The browser must download + parse + execute JS before showing the UI.

## X Poor SEO

Search engines struggle to index pages rendered purely in JS.

## X Heavy on low-power devices

Phones/laptops with weak CPU will struggle to hydrate large apps.

## X Not ideal for content-focused websites

Blogs, news sites, and landing pages suffer in CSR.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078907.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3w5GOyntxSPQiMQq1eCbE%2BwgoMY%3D&Expires=1776881878' alt='OCR图片'/></div>

## Client-Side Rendering (CSR) in React

Where CSR is Ideal

Dashboards

Analytics dashboards, admin panels.

Social Media & Messaging Apps

Facebook Web, Twitter, Instagram, Slack, Discord.

SaaS Tools

Notion-like apps, project management tools, code editors.

Internal or Auth-Gated Applications

SEO is irrelevant inside private systems.

## Common Tools for CSR

- React + Vite (recommended for modern projects)

- Create React App (deprecated)

- Next.js Client Components

- Parcel / Webpack apps

Summary :- CSR = interactive, dynamic, fast-after-load, but weak for SEO and slow initial rendering. Best for apps, not content pages.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078913.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iAwJipHm05kZmg0ZuYh0iDo%2BPKQ%3D&Expires=1776881878' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_1_1776277078919.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nNER8eoF1UICeB0Cu3LyiU4i0ZY%3D&Expires=1776881878' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260416021725d9d927a328fa44d5%2Fcrop_2_1776277078925.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9vfOIah5%2Fw5si8n0zWBuiE5V%2FPM%3D&Expires=1776881878' alt='OCR图片'/></div>