# `Queue` Interface in Java

## Overview
The `Queue` interface in Java represents a collection designed for holding elements prior to processing. It is part of the `java.util` package and extends the `Collection` interface. Elements are typically ordered in a FIFO (First-In-First-Out) manner.

---

## Characteristics of `Queue` Interface

| **Feature**              | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | Yes                                          |
| **Ordering**              | FIFO (First-In-First-Out)                    |
| **Subinterfaces**         | `Deque`, `BlockingQueue`, `TransferQueue`    |
| **Implementations**       | `LinkedList`, `PriorityQueue`, `ArrayDeque`  |

---

## Key Features of `Queue` Interface

- **FIFO Ordering**: Elements are processed in the order they are added, unless overridden by implementations like `PriorityQueue`.
- **Dynamic Size**: The size of a `Queue` can grow or shrink dynamically.
- **Specialized Methods**: Provides additional methods like `offer`, `poll`, and `peek` for queue operations.

---

## Initializing Different Types Using the Queue Interface

You can initialize a `Queue` using its implementations like `LinkedList`, `PriorityQueue`, and `ArrayDeque`. Here's how:

```java
Queue<Type> priorityQueue = new PriorityQueue<>();
Queue<Type> deque = new ArrayDeque<>();
Queue<Type> queue = new LinkedList<>();
```


- Using [**`PriorityQueue`**](./Priority-Queue/) [<sub>PriorityQueueDataStructure.java</sub>](./Priority-Queue/PriorityQueueDataStructure.java)

    ```java
    Queue<String> priorityQueue = new PriorityQueue<>();
    Queue<Integer> priorityIntegerQueue = new PriorityQueue<>();
    ```

- Using [**`ArrayDeque`**](../Deque/Array-Deque/) [<sub>ArrayDequeDataStructure.java</sub>](../Deque/Array-Deque/ArrayDequeDataStructure.java)

    ```java
    Queue<String> arrayDeque = new ArrayDeque<>();
    Queue<Integer> arrayIntegerDeque = new ArrayDeque<>();
    ```

- Using [**`LinkedList`**](../List/Linked-List/) [<sub>LinkedListDataStructure.java</sub>](../List/Linked-List/LinkedListDataStructure.java)

    ```java
    Queue<String> linkedQueue = new LinkedList<>();
    Queue<Integer> linkedIntegerQueue = new LinkedList<>();
    ```

---

## Use Cases for Queue Implementations

| Implementation | Use Case                                                                 |
|-----------------|-------------------------------------------------------------------------|
| LinkedList      | General-purpose queue. Example: Implementing a FIFO scheduler.         |
| PriorityQueue   | Maintaining a priority-based processing order. Example: Task scheduling.|
| ArrayDeque      | Faster than LinkedList for adding/removing elements at both ends.      |

---

## Commonly Used Methods

```java
Queue<Object> queue = new QueueType<>();
```

| **Method**           | **Description**                                                    | **Return Type** | **Example**                        |
|----------------------|--------------------------------------------------------------------|-----------------|------------------------------------|
| **add(E e)**         | Inserts the specified element into the queue, throwing an exception if the queue is full. | boolean         | `queue.add("Hello");`             |
| **offer(E e)**       | Inserts the specified element into the queue, returning false if the queue is full.        | boolean         | `queue.offer("Hello");`           |
| **remove()**         | Retrieves and removes the head of the queue, throwing an exception if the queue is empty.  | E               | `queue.remove();`                 |
| **poll()**           | Retrieves and removes the head of the queue, or returns null if the queue is empty.        | E               | `queue.poll();`                   |
| **element()**        | Retrieves, but does not remove, the head of the queue, throwing an exception if it is empty.| E               | `queue.element();`                |
| **peek()**           | Retrieves, but does not remove, the head of the queue, or returns null if it is empty.     | E               | `queue.peek();`                   |
| **isEmpty()**        | Checks if the queue is empty.                                        | boolean         | `queue.isEmpty();`                |
| **size()**           | Returns the number of elements in the queue.                        | int             | `queue.size();`                   |
| **contains(Object o)**| Checks if the queue contains the specified element.                 | boolean         | `queue.contains("Hello");`        |
| **clear()**          | Removes all elements from the queue.                                | void            | `queue.clear();`                  |
| **iterator()**       | Returns an iterator over the elements in the queue.                 | Iterator<E>     | `Iterator<String> iterator = queue.iterator();` |
| **toArray()**        | Converts the queue to an array.                                     | Object[]        | `Object[] arr = queue.toArray();` |

---

## Example Code


```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueInterface {
    public static void main(String[] args) {
        // Create a queue
        Queue<String> queue = new LinkedList<>();

        // Add elements
        queue.offer("Apple");
        queue.offer("Banana");
        queue.offer("Cherry");

        // Check the head of the queue
        System.out.println("Head of queue: " + queue.peek());

        // Remove an element
        System.out.println("Removed: " + queue.poll());
        System.out.println("Queue after removal: " + queue);

        // Check size
        System.out.println("Size of queue: " + queue.size());

        // Iterate over elements
        System.out.println("Queue elements:");
        for (String item : queue) {
            System.out.println(item);
        }

        // Clear the queue
        queue.clear();
        System.out.println("Is queue empty? " + queue.isEmpty());
    }
}
```

> **For more:** [`QueueInterface.java`](./QueueInterface.java)

---

## More to Queue Implementations : 

- [**`PriorityQueue`**](./Priority-Queue/) [<sub>PriorityQueueDataStructure.java</sub>](./Priority-Queue/PriorityQueueDataStructure.java)
 
- [**`ArrayDeque`**](../Deque/Array-Deque/) [<sub>ArrayDequeDataStructure.java</sub>](../Deque/Array-Deque/ArrayDequeDataStructure.java)
 
- Using [**`LinkedList`**](../List/Linked-List/) [<sub>LinkedListDataStructure.java</sub>](../List/Linked-List/LinkedListDataStructure.java)
