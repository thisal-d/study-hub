# `PriorityQueue` in Java

## Overview

The `PriorityQueue` class in Java is a part of the `java.util` package and implements the `Queue` interface. It provides an unbounded priority queue based on a priority heap.

---

## Characteristics of `PriorityQueue`

| **Feature**              | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | Yes                                          |
| **Ordering**              | Based on natural order or custom comparator  |
| **Thread-Safe**           | No                                           |
| **Initial Capacity**      | Not applicable (grows dynamically)            |

---

## Key Features of `PriorityQueue`

- **Priority Ordering**: Elements are ordered based on their priority, which is determined by either natural ordering or a custom comparator.
- **Insertion and Removal**: Supports efficient insertion (`O(log n)` time complexity) and removal of elements based on priority.
- **Not Indexed**: Unlike `ArrayList`, elements are not indexed; removal is based on priority.
- **Flexible Comparator**: Allows flexibility in defining how elements are prioritized.

---

## How to Use `PriorityQueue`

### Importing `PriorityQueue`

```java
import java.util.PriorityQueue;
```

### Creating a `PriorityQueue`

```java
PriorityQueue<Type> priorityQueue = new PriorityQueue<>();
```

- Example
    ```java
    PriorityQueue<Integer> integerPriorityQueue = new PriorityQueue<>();
    PriorityQueue<String> stringPriorityQueue = new PriorityQueue<>(Comparator.reverseOrder());
    ```

---

## `PriorityQueue` Specific Methods
The PriorityQueue class provides additional methods beyond those in the Queue interface. Here are some commonly used ones:

| Method            | Description                                                                                  | Return Type | Example                                       |
|-------------------|----------------------------------------------------------------------------------------------|-------------|-----------------------------------------------|
| peek()            | Retrieves, but does not remove, the head of the queue, or returns null if empty.              | Type        | `Type head = priorityQueue.peek();`            |
| poll()            | Retrieves and removes the head of the queue, or returns null if empty.                        | Type        | `Type removedElement = priorityQueue.poll();`   |
| offer(Type e)     | Inserts the specified element into the priority queue.                                         | boolean     | `boolean added = priorityQueue.offer(element);` |
| remove(Object o)  | Removes a single instance of the specified element from the queue, if present.                | boolean     | `boolean removed = priorityQueue.remove(element);` |

> **For more:** [`PriorityQueueDataStructure.java`](./PriorityQueueDataStructure.java)


---

## Example Code

```java
import java.util.PriorityQueue;

public class PriorityQueueExample {
    public static void main(String[] args) {
        // Create a PriorityQueue
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();

        // Add elements
        priorityQueue.offer(3);
        priorityQueue.offer(1);
        priorityQueue.offer(2);

        // Peek at the highest priority element
        System.out.println("Highest priority element: " + priorityQueue.peek());

        // Remove elements
        while (!priorityQueue.isEmpty()) {
            System.out.println("Removed element: " + priorityQueue.poll());
        }
    }
}
```

> **For more:** [`PriorityQueueDataStructure.java`](./PriorityQueueDataStructure.java)
