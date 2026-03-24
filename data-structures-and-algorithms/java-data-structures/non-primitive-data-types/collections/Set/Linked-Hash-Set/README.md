# `LinkedHashSet` in Java

## Overview

The `LinkedHashSet` class in Java is part of the `java.util` package and implements the `Set` interface. It combines the characteristics of both `HashSet` and `LinkedList` by maintaining the insertion order of elements while ensuring no duplicates.

---

## Characteristics of `LinkedHashSet`

| **Feature**                 | **Details**                                    |
|-----------------------------|------------------------------------------------|
| **Package**                 | `java.util`                                    |
| **Allows Duplicates**       | No                                             |
| **Maintains Insertion Order** | Yes                                           |
| **Thread-Safe**             | No                                             |
| **Allows Null Element**     | Yes                                            |

---

## Key Features of `LinkedHashSet`

- **No Duplicates**: Ensures that duplicate elements are not allowed.
- **Maintains Insertion Order**: The order of elements is preserved based on their insertion.
- **Fast Access**: Offers constant time performance for basic operations like add, remove, and contains (`O(1)` average time complexity).
- **Hash-Based Storage**: Internally backed by a `HashMap` and a doubly-linked list to maintain insertion order.

---

## How to Use `LinkedHashSet`

### Importing `LinkedHashSet`

```java
import java.util.LinkedHashSet;
```

### Creating a `LinkedHashSet`

```java
LinkedHashSet<Type> linkedHashSet = new LinkedHashSet<>();
```

- Example
    ```java
    LinkedHashSet<String> stringSet = new LinkedHashSet<>();
    LinkedHashSet<Integer> integerSet = new LinkedHashSet<>();
    ```

---

## LinkedHashSet Specific Methods

The LinkedHashSet class provides several methods for efficient set operations. Below are some commonly used methods:

| **Method**            | **Description**                                                        | **Return Type**       | **Example**                                |
|-----------------------|------------------------------------------------------------------------|-----------------------|--------------------------------------------|
| **add(E e)**          | Adds the specified element to the set if it is not already present.    | boolean               | `linkedHashSet.add("Apple");`              |
| **contains(Object o)**| Returns true if the set contains the specified element.                | boolean               | `linkedHashSet.contains("Banana");`        |
| **remove(Object o)**  | Removes the specified element from the set if it is present.           | boolean               | `linkedHashSet.remove("Apple");`           |
| **clear()**           | Removes all elements from the set.                                    | void                  | `linkedHashSet.clear();`                   |
| **isEmpty()**         | Checks if the set is empty.                                           | boolean               | `linkedHashSet.isEmpty();`                 |
| **size()**            | Returns the number of elements in the set.                           | int                   | `linkedHashSet.size();`                    |
| **toArray()**         | Converts the set to an array.                                         | Object[]              | `Object[] array = linkedHashSet.toArray();`|

---

## Example Code

```java
import java.util.*;
public class LinkedHashSetExample {
    public static void main(String[] args) {
        // Create a LinkedHashSet
        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>();

        // Add elements
        linkedHashSet.add("Apple");
        linkedHashSet.add("Banana");
        linkedHashSet.add("Cherry");

        // Check size
        System.out.println("Size of the LinkedHashSet: " + linkedHashSet.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + linkedHashSet.contains("Banana"));

        // Remove an element
        linkedHashSet.remove("Banana");
        System.out.println("LinkedHashSet after removal: " + linkedHashSet);

        // Iterate over elements
        System.out.println("LinkedHashSet elements:");
        for (String fruit : linkedHashSet) {
            System.out.println(fruit);
        }

        // Convert to array
        Object[] array = linkedHashSet.toArray();
        System.out.println("Array from LinkedHashSet: " + Arrays.toString(array));

        // Clear the LinkedHashSet
        linkedHashSet.clear();
        System.out.println("Is LinkedHashSet empty? " + linkedHashSet.isEmpty());
    }
}
```

> **For more:** [`LinkedHashSetDataStructure.java`](./LinkedHashSetDataStructure.java)
