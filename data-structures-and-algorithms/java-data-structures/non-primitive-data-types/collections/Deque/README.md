# `Deque` Interface in Java

## Overview
The `Deque` interface in Java represents a collection designed for holding elements in a double-ended queue. It extends the `Queue` interface and allows elements to be added or removed from both ends of the queue. The `Deque` interface provides a more versatile queue compared to the basic `Queue` interface.

---

## Characteristics of `Deque` Interface

| **Feature**              | **Details**                                   |
|--------------------------|-----------------------------------------------|
| **Package**              | `java.util`                                  |
| **Allows Duplicates**    | Yes                                          |
| **Ordering**             | FIFO (First-In-First-Out) for regular operations but allows insertion and removal at both ends. |
| **Subinterfaces**        | None                                         |
| **Implementations**      | `ArrayDeque`, `LinkedList`                   |

---

## Key Features of `Deque` Interface

- **Double-Ended**: Allows insertion and removal of elements from both ends (front and rear) of the deque.
- **FIFO or LIFO**: Depending on whether you're adding/removing elements from the front or rear, the behavior can follow FIFO (First-In-First-Out) or LIFO (Last-In-First-Out).
- **Dynamic Size**: The size of a `Deque` can grow or shrink dynamically as elements are added or removed.
- **Specialized Methods**: Provides additional methods like `addFirst`, `addLast`, `removeFirst`, `removeLast`, etc., for more flexible operations.

---

## Initializing Different Types Using the Deque Interface

You can initialize a `Deque` using its implementations like `LinkedList` and `ArrayDeque`. Here's how:

```java
Deque<Type> arrayDeque = new ArrayDeque<>();
Deque<Type> linkedListDeque = new LinkedList<>();
```

```java
Queue<Type> priorityQueue = new PriorityQueue<>();
Queue<Type> deque = new ArrayDeque<>();
Queue<Type> queue = new LinkedList<>();
```

- Using [**`ArrayDeque`**](./Array-Deque/) [<sub>ArrayDequeDataStructure.java</sub>](./Array-Deque/ArrayDequeDataStructure.java)

    ```java
    Deque<String> arrayDeque = new ArrayDeque<>();
    Deque<Integer> arrayIntegerDeque = new ArrayDeque<>();
    ```

- Using [**`LinkedList`**](./Linked-List/) [<sub>LinkedListDataStructure.java</sub>](./Hash-Set/HashSetDataStructure.java)

    ```java
    Deque<String> linkedDeque = new LinkedList<>();
    Deque<Integer> linkedIntegerDeque = new LinkedList<>();
    ```
    
---

## Use Cases for Deque Implementations

| Implementation | Use Case                                                                  |
|----------------|---------------------------------------------------------------------------|
| LinkedList     | General-purpose deque. Example: Implementing a deque-based cache system. |
| ArrayDeque     | Optimized for adding/removing elements at both ends of the deque. Example: Task scheduling. |

---

## Commonly Used Methods

```java
Deque<Object> deque = new DequeType<>();
```

| Method              | Description                                                                                   | Return Type      | Example                                           |
|---------------------|-----------------------------------------------------------------------------------------------|------------------|---------------------------------------------------|
| addFirst(E e)       | Inserts the specified element at the front of the deque.                                      | void             | `deque.addFirst("Hello");`                        |
| addLast(E e)        | Inserts the specified element at the end of the deque.                                        | void             | `deque.addLast("World");`                         |
| offerFirst(E e)     | Inserts the specified element at the front of the deque, returning false if full.             | boolean          | `deque.offerFirst("Hello");`                      |
| offerLast(E e)      | Inserts the specified element at the end of the deque, returning false if full.               | boolean          | `deque.offerLast("World");`                       |
| removeFirst()       | Removes and returns the first element of the deque. Throws exception if empty.                | E                | `deque.removeFirst();`                            |
| removeLast()        | Removes and returns the last element of the deque. Throws exception if empty.                 | E                | `deque.removeLast();`                             |
| pollFirst()         | Retrieves and removes the first element of the deque, or null if empty.                       | E                | `deque.pollFirst();`                              |
| pollLast()          | Retrieves and removes the last element of the deque, or null if empty.                        | E                | `deque.pollLast();`                               |
| getFirst()          | Retrieves, but does not remove, the first element of the deque. Throws exception if empty.    | E                | `deque.getFirst();`                               |
| getLast()           | Retrieves, but does not remove, the last element of the deque. Throws exception if empty.     | E                | `deque.getLast();`                                |
| peekFirst()         | Retrieves, but does not remove, the first element of the deque, or null if empty.             | E                | `deque.peekFirst();`                              |
| peekLast()          | Retrieves, but does not remove, the last element of the deque, or null if empty.              | E                | `deque.peekLast();`                               |
| isEmpty()           | Checks if the deque is empty.                                                                 | boolean          | `deque.isEmpty();`                                |
| size()              | Returns the number of elements in the deque.                                                  | int              | `deque.size();`                                   |
| clear()             | Removes all elements from the deque.                                                          | void             | `deque.clear();`                                  |
| iterator()          | Returns an iterator over the elements in the deque.                                           | Iterator<E>      | `Iterator<String> iterator = deque.iterator();`   |

---

## Example Code

```java
import java.util.Deque;
import java.util.ArrayDeque;

public class DequeInterface {
    public static void main(String[] args) {
        // Create a deque
        Deque<String> deque = new ArrayDeque<>();

        // Add elements
        deque.addFirst("Apple");
        deque.addLast("Banana");

        // Check the first and last elements
        System.out.println("First: " + deque.getFirst());
        System.out.println("Last: " + deque.getLast());

        // Remove elements
        System.out.println("Removed First: " + deque.removeFirst());
        System.out.println("Removed Last: " + deque.removeLast());

        // Add more elements
        deque.offerFirst("Cherry");
        deque.offerLast("Date");

        // Iterate over elements
        System.out.println("Deque elements:");
        for (String item : deque) {
            System.out.println(item);
        }

        // Clear the deque
        deque.clear();
        System.out.println("Is deque empty? " + deque.isEmpty());
    }
}
```

> **For more:** [`DequeInterface.java`](./DequeInterface.java)

---

## More to Queue Implementations : 

- [**`ArrayDeque`**](./Array-Deque/) [<sub>ArrayDequeDataStructure.java</sub>](./Array-Deque/ArrayDequeDataStructure.java)
 
- [**`LinkedList`**](../List/Linked-List/) [<sub>LinkedListDataStructure.java</sub>](../List/Linked-List/LinkedListDataStructure.java)
