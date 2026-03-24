# `ArrayDeque` in Java

## Overview

The `ArrayDeque` class in Java is a part of the `java.util` package and implements the `Deque` interface. It provides a resizable array-based implementation of a double-ended queue, allowing elements to be added or removed from both ends efficiently.

---

## Characteristics of `ArrayDeque`

| **Feature**              | **Details**                                   |
|--------------------------|-----------------------------------------------|
| **Package**              | `java.util`                                  |
| **Allows Duplicates**    | Yes                                          |
| **Ordering**             | FIFO (First In, First Out) or LIFO (Last In, First Out) depending on usage |
| **Thread-Safe**          | No                                           |
| **Initial Capacity**     | 16 (default)                                 |

---

## Key Features of `ArrayDeque`

- **Double-Ended Queue**: Allows insertion and removal of elements from both ends of the queue.
- **Efficient Operations**: All operations (add, remove) are done in constant time (`O(1)`).
- **Resizable Array**: The underlying array dynamically grows or shrinks as needed.
- **Not Synchronized**: Unlike `LinkedList`, `ArrayDeque` is not thread-safe.
- **No Capacity Limitation**: The deque grows as needed, with no fixed size.

---

## How to Use `ArrayDeque`

### Importing `ArrayDeque`

```java
import java.util.ArrayDeque;
```

### Creating an `ArrayDeque`

```java
ArrayDeque<Type> arrayDeque = new ArrayDeque<>();
```

- Example
    
    ```java
    ArrayDeque<Integer> integerDeque = new ArrayDeque<>();
    ArrayDeque<String> stringDeque = new ArrayDeque<>();
    ```

---

## `ArrayDeque` Specific Methods
The `ArrayDeque` class provides additional methods beyond those in the `Queue` and `Deque` interfaces. Here are some commonly used ones:

| Method            | Description                                                                                  | Return Type | Example                                        |
|-------------------|----------------------------------------------------------------------------------------------|-------------|------------------------------------------------|
| addFirst()        | Inserts the specified element at the front of the deque.                                     | void        | `arrayDeque.addFirst(10);`                      |
| addLast()         | Inserts the specified element at the end of the deque.                                       | void        | `arrayDeque.addLast(20);`                       |
| offerFirst()      | Inserts the specified element at the front of the deque, returning true if successful.       | boolean     | `boolean added = arrayDeque.offerFirst(30);`    |
| offerLast()       | Inserts the specified element at the end of the deque, returning true if successful.        | boolean     | `boolean added = arrayDeque.offerLast(40);`     |
| peekFirst()       | Retrieves, but does not remove, the first element of the deque, or returns null if empty.    | Type        | `Type first = arrayDeque.peekFirst();`          |
| peekLast()        | Retrieves, but does not remove, the last element of the deque, or returns null if empty.     | Type        | `Type last = arrayDeque.peekLast();`            |
| pollFirst()       | Retrieves and removes the first element of the deque, or returns null if empty.             | Type        | `Type first = arrayDeque.pollFirst();`          |
| pollLast()        | Retrieves and removes the last element of the deque, or returns null if empty.              | Type        | `Type last = arrayDeque.pollLast();`            |
| removeFirst()     | Removes and returns the first element of the deque.                                          | Type        | `Type first = arrayDeque.removeFirst();`        |
| removeLast()      | Removes and returns the last element of the deque.                                           | Type        | `Type last = arrayDeque.removeLast();`          |

---

## Example Code

```java
import java.util.ArrayDeque;

public class ArrayDequeExample {
    public static void main(String[] args) {
        // Create an ArrayDeque
        ArrayDeque<Integer> arrayDeque = new ArrayDeque<>();

        // Add elements
        arrayDeque.addFirst(10);
        arrayDeque.addLast(20);
        arrayDeque.addFirst(30);

        // Peek at the first and last elements
        System.out.println("First element: " + arrayDeque.peekFirst());
        System.out.println("Last element: " + arrayDeque.peekLast());

        // Remove elements
        System.out.println("Removed first element: " + arrayDeque.pollFirst());
        System.out.println("Removed last element: " + arrayDeque.pollLast());

        // Display the remaining elements
        System.out.println("Remaining elements: " + arrayDeque);
    }
}
```

> **For more:** [`ArrayDequeDataStructure.java`](./ArrayDequeDataStructure.java)
