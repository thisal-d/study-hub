# `ArrayList` in Java

## Overview

The `ArrayList` class in Java is a part of the `java.util` package and implements the `List` interface. It provides a dynamic array that can grow as needed.

---

## Characteristics of `ArrayList`

| **Feature**              | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | Yes                                          |
| **Maintains Insertion Order** | Yes                                      |
| **Thread-Safe**           | No                                           |
| **Initial Capacity**      | 10                                           |

---

## Key Features of `ArrayList`

- **Dynamic Resizing**: The size of an `ArrayList` increases automatically when elements are added.
- **Fast Random Access**: Accessing elements by index is fast (`O(1)` time complexity).
- **Iterative Operations**: Supports iteration using loops and iterators.
- **Flexible Type Handling**: Can store objects of any type (generic support).

---

## How to Use `ArrayList`

### Importing `ArrayList`

```java
import java.util.ArrayList;
```

### Creating an `ArrayList`

```java
ArrayList<Type> arrayList = new ArrayList<>();
```

- Example
    ```java
    ArrayList<String> stringList = new ArrayList<>();
    ArrayList<Integer> integerList = new ArrayList<>();
    ArrayList<Double> doubleList = new ArrayList<>();
    ```

---

## ArrayList Specific Methods

The ArrayList class provides several methods beyond those in the List interface. Here are some of the most commonly used:

| Method                      | Description                                                                 | Return Type                | Example                                       |
|-----------------------------|-----------------------------------------------------------------------------|----------------------------|-----------------------------------------------|
| `ensureCapacity(int minCapacity)` | Increases the capacity of the ArrayList to ensure it can hold at least the number of elements specified by `minCapacity`. | `void`                     | `arrayList.ensureCapacity(50);`              |
| `trimToSize()`              | Trims the capacity of the ArrayList to be the list's current size.          | `void`                     | `arrayList.trimToSize();`                    |
| `clone()`                   | Returns a shallow copy of the ArrayList.                                    | `Object`                   | `ArrayList<String> copy = (ArrayList<String>) arrayList.clone();` |
| `removeRange(int fromIndex, int toIndex)` | Removes all elements within the specified range.                                | `void`                     | `arrayList.removeRange(2, 5);`               |

---

## Example Code

```java
import java.util.ArrayList;

public class ArrayListDataStructure {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> arrayList = new ArrayList<>();

        // Add elements
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");

        // Access elements
        System.out.println("Element at index 1: " + arrayList.get(1));

        // Check size
        System.out.println("Size of the ArrayList: " + arrayList.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + arrayList.contains("Banana"));

        // Remove an element
        arrayList.remove("Banana");
        System.out.println("ArrayList after removal: " + arrayList);

        // Trim to size
        arrayList.trimToSize();

        // Iterate over elements
        System.out.println("ArrayList elements:");
        for (String fruit : arrayList) {
            System.out.println(fruit);
        }

        // Clear the ArrayList
        arrayList.clear();
        System.out.println("Is ArrayList empty? " + arrayList.isEmpty());
    }
}
```

> **For more:** [`ArrayListDataStructure.java`](./ArrayListDataStructure.java)
