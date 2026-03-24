# `Vector` in Java

## Overview

The `Vector` class in Java is a part of the `java.util` package and implements the `List` and `RandomAccess` interfaces. It provides a dynamic array that grows as needed.

---

## Characteristics of `Vector`

| **Feature**               | **Details**                                   |
|----------------------------|-----------------------------------------------|
| **Package**                | `java.util`                                  |
| **Allows Duplicates**      | Yes                                          |
| **Maintains Insertion Order** | Yes                                      |
| **Thread-Safe**            | Yes (synchronized methods)                   |
| **Implements**             | `List`, `RandomAccess`, `Cloneable`, `Serializable` |

---

## Key Features of `Vector`

- **Dynamic Array**: Automatically resizes itself to accommodate new elements.
- **Thread-Safety**: All methods are synchronized, making it thread-safe but slower compared to `ArrayList`.
- **Random Access**: Provides constant time access to elements by index.

---

## How to Use `Vector`

### Importing `Vector`

```java
import java.util.Vector;
```

### Creating a `Vector`

```java
Vector<Type> vector = new Vector<>();
```

### Examples:

```java
Vector<String> stringVector = new Vector<>();
Vector<Integer> integerVector = new Vector<>();
Vector<Double> doubleVector = new Vector<>();
```

---

## Vector-Specific Methods

The `Vector` class provides several methods for dynamic array management. Here are some of the most commonly used:

| Method                       | Description                                                                                     | Return Type      | Example                                |
|------------------------------|-------------------------------------------------------------------------------------------------|------------------|----------------------------------------|
| `firstElement()`             | Returns the first element in the vector.                                                       | `E`              | `vector.firstElement();`              |
| `lastElement()`              | Returns the last element in the vector.                                                        | `E`              | `vector.lastElement();`               |
| `ensureCapacity(int minCapacity)` | Ensures that the vector can hold at least the specified number of elements without resizing. | `void`           | `vector.ensureCapacity(20);`          |
| `capacity()`                 | Returns the current capacity of the vector.                                                    | `int`            | `vector.capacity();`                  |
| `trimToSize()`               | Trims the capacity of the vector to its current size.                                           | `void`           | `vector.trimToSize();`                |

---

```java
import java.util.Vector;

public class VectorDataStructure {
    public static void main(String[] args) {
        // Create a Vector
        Vector<String> vector = new Vector<>();

        // Add elements
        vector.add("Apple");
        vector.add("Banana");
        vector.add("Cherry");

        // Insert an element at a specific position
        vector.add(1, "Mango");

        // Access elements
        System.out.println("First Element: " + vector.firstElement());
        System.out.println("Last Element: " + vector.lastElement());
        System.out.println("Element at index 2: " + vector.get(2));

        // Replace an element
        vector.set(2, "Blueberry");

        // Remove elements
        vector.remove("Mango");
        vector.remove(2);

        // Iterate over elements
        System.out.println("Vector elements:");
        for (String fruit : vector) {
            System.out.println(fruit);
        }

        // Check size
        System.out.println("Size of the Vector: " + vector.size());

        // Clear the Vector
        vector.clear();
        System.out.println("Is Vector empty? " + vector.isEmpty());
    }
}
```

> **For more:** [`VectorDataStructure.java`](./VectorDataStructure.java)
