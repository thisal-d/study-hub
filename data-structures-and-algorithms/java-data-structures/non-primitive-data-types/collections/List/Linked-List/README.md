# `LinkedList` in Java

## Overview

The `LinkedList` class in Java is a part of the `java.util` package and implements the `List`, `Deque`, and `Queue` interfaces. It provides a doubly-linked list implementation.

---

## Characteristics of `LinkedList`

| **Feature**               | **Details**                                   |
|----------------------------|-----------------------------------------------|
| **Package**                | `java.util`                                  |
| **Allows Duplicates**      | Yes                                          |
| **Maintains Insertion Order** | Yes                                      |
| **Thread-Safe**            | No                                           |
| **Implements**             | `List`, `Deque`, `Queue`                     |

---

## Key Features of `LinkedList`

- **Dynamic Memory Allocation**: The size of the `LinkedList` adjusts dynamically when elements are added or removed.
- **Efficient Insertions/Deletions**: Adding or removing elements at both ends is efficient (`O(1)` time complexity for head/tail operations).
- **Doubly-Linked Nodes**: Each element (node) contains references to the previous and next elements.

---

## How to Use `LinkedList`

### Importing `LinkedList`

```java
import java.util.LinkedList;
```

### Creating a `LinkedList`

```java
LinkedList<Type> linkedList = new LinkedList<>();
```

- **Examples:**

    ```java
    LinkedList<String> stringList = new LinkedList<>();
    LinkedList<Integer> integerList = new LinkedList<>();
    LinkedList<Double> doubleList = new LinkedList<>();
    ```

---

## LinkedList-Specific Methods

The `LinkedList` class provides several methods beyond those in the `List` and `Queue` interfaces. Here are some of the most commonly used:

| Method                     | Description                                                                                     | Return Type      | Example                                |
|----------------------------|-------------------------------------------------------------------------------------------------|------------------|----------------------------------------|
| `addFirst(E e)`            | Adds the specified element at the beginning of the list.                                       | `void`           | `linkedList.addFirst("First");`       |
| `addLast(E e)`             | Adds the specified element at the end of the list.                                             | `void`           | `linkedList.addLast("Last");`         |
| `getFirst()`               | Retrieves the first element of the list.                                                       | `E`              | `linkedList.getFirst();`              |
| `getLast()`                | Retrieves the last element of the list.                                                        | `E`              | `linkedList.getLast();`               |
| `removeFirst()`            | Removes and returns the first element of the list.                                             | `E`              | `linkedList.removeFirst();`           |
| `removeLast()`             | Removes and returns the last element of the list.                                              | `E`              | `linkedList.removeLast();`            |
| `offerFirst(E e)`          | Inserts the element at the beginning of the list.                                              | `boolean`        | `linkedList.offerFirst("Start");`     |
| `offerLast(E e)`           | Inserts the element at the end of the list.                                                    | `boolean`        | `linkedList.offerLast("End");`        |
| `pollFirst()`              | Retrieves and removes the first element, or returns `null` if the list is empty.               | `E`              | `linkedList.pollFirst();`             |
| `pollLast()`               | Retrieves and removes the last element, or returns `null` if the list is empty.                | `E`              | `linkedList.pollLast();`              |
| `peekFirst()`              | Retrieves the first element without removing it, or returns `null` if the list is empty.       | `E`              | `linkedList.peekFirst();`             |
| `peekLast()`               | Retrieves the last element without removing it, or returns `null` if the list is empty.        | `E`              | `linkedList.peekLast();`              |

---

## Example Code

```java
import java.util.LinkedList;

public class LinkedListDataStructure {
    public static void main(String[] args) {
        // Create a LinkedList
        LinkedList<String> linkedList = new LinkedList<>();

        // Add elements
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Cherry");

        // Add elements at specific positions
        linkedList.addFirst("First Element");
        linkedList.addLast("Last Element");

        // Access elements
        System.out.println("First Element: " + linkedList.getFirst());
        System.out.println("Last Element: " + linkedList.getLast());

        // Remove elements
        linkedList.removeFirst();
        linkedList.removeLast();

        // Iterate over elements
        System.out.println("LinkedList elements:");
        for (String fruit : linkedList) {
            System.out.println(fruit);
        }

        // Check size
        System.out.println("Size of the LinkedList: " + linkedList.size());

        // Clear the LinkedList
        linkedList.clear();
        System.out.println("Is LinkedList empty? " + linkedList.isEmpty());
    }
}
```

> **For more:** [`LinkedListDataStructure.java`](./LinkedListDataStructure.java)
