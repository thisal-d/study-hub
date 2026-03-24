# `TreeSet` in Java

## Overview

The `TreeSet` class in Java is part of the `java.util` package and implements the `Set` interface. It is a NavigableSet, which means it provides methods for navigating and searching elements in a sorted order. The elements are sorted according to their natural ordering or by a comparator provided at the time of creation.

---

## Characteristics of `TreeSet`

| **Feature**                 | **Details**                                    |
|-----------------------------|------------------------------------------------|
| **Package**                 | `java.util`                                    |
| **Allows Duplicates**       | No                                             |
| **Maintains Insertion Order** | No (elements are sorted)                      |
| **Thread-Safe**             | No                                             |
| **Allows Null Element**     | No (throws `NullPointerException` if null is added) |
| **Sorting**                 | Sorts elements based on natural ordering or comparator |
| **Navigable**               | Yes (supports navigation methods like `lower()`, `ceiling()`, `higher()`, etc.) |

---

## Key Features of `TreeSet`

- **No Duplicates**: Ensures that duplicate elements are not allowed.
- **Sorted Order**: Elements are stored in sorted order either according to their natural order or using a comparator.
- **NavigableSet**: Provides methods for element navigation like `first()`, `last()`, `lower()`, `ceiling()`, etc.
- **Red-Black Tree**: Internally backed by a Red-Black Tree to maintain elements in a sorted manner.

---

## How to Use `TreeSet`

### Importing `TreeSet`

```java
import java.util.TreeSet;
```

### Creating a `TreeSet`

```java
TreeSet<Type> treeSet = new TreeSet<>();
```

- Example
    ```java
    TreeSet<String> stringSet = new TreeSet<>();
    TreeSet<Integer> integerSet = new TreeSet<>();
    ```

---

## TreeSet Specific Methods

The TreeSet class provides several methods for efficient set operations while maintaining sorting. Below are some commonly used methods:

| **Method**            | **Description**                                                        | **Return Type**       | **Example**                                |
|-----------------------|------------------------------------------------------------------------|-----------------------|--------------------------------------------|
| **add(E e)**          | Adds the specified element to the set if it is not already present.    | boolean               | `treeSet.add("Apple");`                    |
| **contains(Object o)**| Returns true if the set contains the specified element.                | boolean               | `treeSet.contains("Banana");`              |
| **remove(Object o)**  | Removes the specified element from the set if it is present.           | boolean               | `treeSet.remove("Apple");`                 |
| **clear()**           | Removes all elements from the set.                                    | void                  | `treeSet.clear();`                         |
| **isEmpty()**         | Checks if the set is empty.                                           | boolean               | `treeSet.isEmpty();`                       |
| **size()**            | Returns the number of elements in the set.                           | int                   | `treeSet.size();`                          |
| **toArray()**         | Converts the set to an array.                                         | Object[]              | `Object[] array = treeSet.toArray();`      |
| **first()**           | Returns the first (lowest) element in the set.                        | E                     | `treeSet.first();`                         |
| **last()**            | Returns the last (highest) element in the set.                        | E                     | `treeSet.last();`                          |
| **lower(E e)**        | Returns the greatest element strictly less than the specified element.| E                     | `treeSet.lower("Banana");`                 |
| **ceiling(E e)**      | Returns the least element greater than or equal to the specified element.| E                   | `treeSet.ceiling("Banana");`               |
| **pollFirst()**       | Retrieves and removes the first (lowest) element.                     | E                     | `treeSet.pollFirst();`                     |
| **pollLast()**        | Retrieves and removes the last (highest) element.                     | E                     | `treeSet.pollLast();`                      |

---

## Example Code

```java
import java.util.*;

public class TreeSetExample {
    public static void main(String[] args) {
        // Create a TreeSet
        TreeSet<String> treeSet = new TreeSet<>();

        // Add elements
        treeSet.add("Apple");
        treeSet.add("Banana");
        treeSet.add("Cherry");

        // Check size
        System.out.println("Size of the TreeSet: " + treeSet.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + treeSet.contains("Banana"));

        // Remove an element
        treeSet.remove("Banana");
        System.out.println("TreeSet after removal: " + treeSet);

        // Retrieve the first and last elements
        System.out.println("First element: " + treeSet.first());
        System.out.println("Last element: " + treeSet.last());

        // Iterate over elements (sorted order)
        System.out.println("TreeSet elements:");
        for (String fruit : treeSet) {
            System.out.println(fruit);
        }

        // Convert to array
        Object[] array = treeSet.toArray();
        System.out.println("Array from TreeSet: " + Arrays.toString(array));

        // Clear the TreeSet
        treeSet.clear();
        System.out.println("Is TreeSet empty? " + treeSet.isEmpty());
    }
}
```

> **For more:** [`TreeSetDataStructure.java`](./TreeSetDataStructure.java)
