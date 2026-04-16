<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_1_1776318688439.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=f2OL%2B7joLyuy4BHA4kwdyI7LlfE%3D&Expires=1776923488' alt='OCR图片'/></div>

## Faculty of Computing

## BSc (Hons) in Software Engineering Year 2 Semester 2 (2026)

## SE2020 - Web and Mobile Technologies

Lab 10

## Advanced React Lab - User Preferences App

Step 01: Create React Project

1. Open terminal and run:

npm create vite@latest user-preferences-app

2. Choose:

- Framework: React

- Variant: JavaScript

3. Navigate to project folder:

cd user-preferences-app

npm install

npm run dev

4. Open the URL shown in terminal (usually http://localhost:5173/)

5. Verify that the Vite starter page is displayed

## Step 02: Start coding

1. Update src/App.jsx file

```javascript

function App() {

  return <h2>User Preferences App</h2>

}

```

export default App;

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_2_1776318688448.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dCrKeY%2BPxXBK3vC94fCDT0IIarQ%3D&Expires=1776923488' alt='OCR图片'/></div>

## 2. Update src/main.jsx file

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_1_1776318688457.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TSVTPESgtoxAlDuBFTyPVXNVTdg%3D&Expires=1776923488' alt='OCR图片'/></div>

## Step 03: Create Preferences Context

## 1. Create file src/context/PreferencesContext.jsx

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_2_1776318688467.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EqewHqHd%2FwqmSiYxxcdeJz%2Bt2AE%3D&Expires=1776923488' alt='OCR图片'/></div>

## Step 04: Wrap App with Provider

## 1. Update src/main.jsx file:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_3_1776318688477.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=N%2BbIJyPvJ5gcjxlCa6LG339JXUs%3D&Expires=1776923488' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_4_1776318688484.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4jEi%2BodsYbi%2BoW3w2RvL2Rd0aiA%3D&Expires=1776923488' alt='OCR图片'/></div>

## Step 05: Create Header Component

## 1. Create src/components/Header.jsx:

```javascript

import { useContext } from "react";

import { PreferencesContext } from "../context/PreferencesContext";

function Header() {

  const { theme, username } = useContext(PreferencesContext);

  return (

    <div>

      <h3>Welcome, {username}</h3>

      <p>Current Theme: {theme}</p>

    </div>

  );

}

export default Header;

```

## Step 06: Create Settings Component

## 1. Update src/components/Settings.jsx:

```javascript

import { useContext } from "react";

import { PreferencesContext } from "../context/PreferencesContext";

function Settings() {

  const { setTheme, setUsername } = useContext(PreferencesContext);

  return (

    <div>

      <input

        placeholder="Enter username"

        onChange={(e) => setUsername(e.target.value)}

      />

      <button onClick={() => setTheme("light")}>Light</button>

      <button onClick={() => setTheme("dark")}>Dark</button>

    </div>

  );

}

export default Settings;

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_1_1776318688491.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZTyXYrwAMGtBXHei%2FTLSbcTHawY%3D&Expires=1776923488' alt='OCR图片'/></div>

## Step 07: Connect Context to UI

## 1. Update App.jsx:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_1_1776318688496.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Viy80f46wLPkoZHVm0zvqxr8dLw%3D&Expires=1776923488' alt='OCR图片'/></div>

Step 08: Improving UI Performance with useTransition and useDeferredValue

- When React updates a large list, the UI may freeze, lag while typing and feel slow to respond.

- React Concurrent Rendering allows to:

- Prioritize important updates (like typing)

- Delay expensive updates (like filtering a large list)

- UseTransition: Allows React to mark certain state updates as low priority, keeping the UI responsive during expensive updates

- UseDeferredValue: Creates a delayed version of a state value, allowing React to update expensive UI parts later.

1. Create Item List Component

- Create a large list of items

- Add a search input

- Use useTransition to keep typing smooth

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_2_1776318688506.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xWs7J4dXG%2FiI%2BnyInThxYjLqYNI%3D&Expires=1776923488' alt='OCR图片'/></div>

Create file: src/components/ItemList.jsx

```javascript

import { useState, useMemo, useTransition, useDeferredValue } from "react";

function ItemList() {

  const [query, setQuery] = useState("");

  const [isPending, startTransition] = useTransition();

  // Create a large list of 1000 items

  const items = useMemo(() => Array.from({ length: 1000 }, (_, i) => `Item ${i+1}`), []);

  // Create a deferred version of the search text

  const deferredQuery = useDeferredValue(query);

  // Filter items using deferred value

  const filteredItems = items.filter((item) =>

    item.toLowerCase().includes(deferredQuery.toLowerCase())

  );

  return (

    <div>

      <input

        placeholder="Search items..."

        value={query}

        onChange={(e) =>

          startTransition(() => setQuery(e.target.value))

        }

      />

      <ul>

        {filteredItems.map((item) => (

          <li key={item}>{item}</li>

        ))}

      </ul>

      {isPending && <p>Updating list...</p>}

    </div>

  );

}

export default ItemList;

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_1_1776318688519.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Fa3%2BC24P525al6KJPvwSp7RQsYI%3D&Expires=1776923488' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_1_1776318688525.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3dSRZ0r%2F72zWOLveN6sYXr4o2Ic%3D&Expires=1776923488' alt='OCR图片'/></div>

## Step 09: Lazy Loading Components with React Suspense

- Large applications take longer to load and load unnecessary components immediately.

- Solution is to load components only when needed.

- React.lazy(): Loads a component only when it is rendered

- Suspense: Displays a fallback UI while the component loads

- Used commonly for Settings pages, Dashboards and Admin panels

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_2_1776318688536.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ByIMoEfFuNPlrWA196pRQ9Md7vQ%3D&Expires=1776923488' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_1_1776318688547.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hX0JehPd5fCJTpJSLMOT8hqTmpE%3D&Expires=1776923488' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026041613511005724e0d9b5a4e06%2Fcrop_2_1776318688555.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pTdmNFbJIbeUt3N0fB2jPcbCFTc%3D&Expires=1776923488' alt='OCR图片'/></div>