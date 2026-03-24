# `HashSet` in Java

## Overview

The `HashSet` class in Java is part of the `java.util` package and implements the `Set` interface. It uses a hash table for storage and does not allow duplicate elements.

---

## Characteristics of `HashSet`

| **Feature**                 | **Details**                                    |
|-----------------------------|------------------------------------------------|
| **Package**                 | `java.util`                                    |
| **Allows Duplicates**       | No                                             |
| **Maintains Insertion Order** | No                                           |
| **Thread-Safe**             | No                                             |
| **Allows Null Element**     | Yes                                            |

---

## Key Features of `HashSet`

- **No Duplicates**: Ensures that duplicate elements are not allowed.
- **Unordered**: The order of elements is not guaranteed.
- **Fast Access**: Offers constant time performance for basic operations like add, remove, and contains (`O(1)` average time complexity).
- **Hash-Based Storage**: Internally backed by a `HashMap`.

---

## How to Use `HashSet`

### Importing `HashSet`

```java
import java.util.HashSet;
```

### Creating a `HashSet`

```java
HashSet<Type> hashSet = new HashSet<>();
```

- **Example**
 
    ```java
    HashSet<String> stringSet = new HashSet<>();
    HashSet<Integer> integerSet = new HashSet<>();
    ```

---

## HashSet Specific Methods

The HashSet class provides several methods for efficient set operations. Below are some commonly used methods:

| **Method**            | **Description**                                                        | **Return Type**       | **Example**                                |
|-----------------------|------------------------------------------------------------------------|-----------------------|--------------------------------------------|
| **add(E e)**          | Adds the specified element to the set if it is not already present.    | boolean               | `hashSet.add("Apple");`                    |
| **contains(Object o)**| Returns true if the set contains the specified element.                | boolean               | `hashSet.contains("Banana");`              |
| **remove(Object o)**  | Removes the specified element from the set if it is present.           | boolean               | `hashSet.remove("Apple");`                 |
| **clear()**           | Removes all elements from the set.                                    | void                  | `hashSet.clear();`                         |
| **isEmpty()**         | Checks if the set is empty.                                           | boolean               | `hashSet.isEmpty();`                       |
| **size()**            | Returns the number of elements in the set.                           | int                   | `hashSet.size();`                          |
| **toArray()**         | Converts the set to an array.                                         | Object[]              | `Object[] array = hashSet.toArray();`      |

---

## Example Code

```java
import java.util.*;
public class HashSetExample {
    public static void main(String[] args) {
        // Create a HashSet
        HashSet<String> hashSet = new HashSet<>();

        // Add elements
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");

        // Check size
        System.out.println("Size of the HashSet: " + hashSet.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + hashSet.contains("Banana"));

        // Remove an element
        hashSet.remove("Banana");
        System.out.println("HashSet after removal: " + hashSet);

        // Iterate over elements
        System.out.println("HashSet elements:");
        for (String fruit : hashSet) {
            System.out.println(fruit);
        }

        // Convert to array
        Object[] array = hashSet.toArray();
        System.out.println("Array from HashSet: " + Arrays.toString(array));

        // Clear the HashSet
        hashSet.clear();
        System.out.println("Is HashSet empty? " + hashSet.isEmpty());
    }
}
```

> **For more:** [`HashSetDataStructure.java`](./HashSetDataStructure.java)
