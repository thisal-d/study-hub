# `Stack` in Java

## Overview

The `Stack` class in Java is a part of the `java.util` package and represents a last-in-first-out (LIFO) data structure. It extends the `Vector` class and provides methods for stack-specific operations like `push`, `pop`, `peek`, and more.

---

## Characteristics of `Stack`

| **Feature**               | **Details**                                   |
|----------------------------|-----------------------------------------------|
| **Package**                | `java.util`                                  |
| **Allows Duplicates**      | Yes                                          |
| **Maintains Insertion Order** | Yes                                      |
| **Thread-Safe**            | No                                           |
| **Implements**             | `List` (via `Vector`), `Cloneable`, `Serializable` |

---

## Key Features of `Stack`

- **LIFO Behavior**: Elements are added and removed from the top of the stack.
- **Extends `Vector`**: Inherits methods like `size`, `isEmpty`, and `clear` from the `Vector` class.
- **Dynamic Memory Allocation**: Adjusts size dynamically as elements are added or removed.

---

## How to Use `Stack`

### Importing `Stack`

```java
import java.util.Stack;
```

### Creating a `Stack`
```java
Stack<Type> stack = new Stack<>();
```

### Examples:
```java
Stack<String> stringStack = new Stack<>();
Stack<Integer> integerStack = new Stack<>();
Stack<Double> doubleStack = new Stack<>();
```

---

## Stack-Specific Methods
The Stack class provides several methods that are useful for stack operations. Here are the most commonly used:

| Method         | Description                                          | Return Type | Example                 |
|----------------|------------------------------------------------------|-------------|-------------------------|
| `push(E e)`    | Adds an element to the top of the stack.             | `E`         | `stack.push("Element");`|
| `pop()`        | Removes and returns the element at the top of the stack. | `E`     | `stack.pop();`          |
| `peek()`       | Returns the element at the top of the stack without removing it. | `E` | `stack.peek();`         |
| `empty()`      | Checks if the stack is empty.                        | `boolean`   | `stack.empty();`        |
| `search(Object o)` | Returns the 1-based position of the object in the stack, or `-1` if the object is not found. | `int` | `sta

---

## Example Code

```java
import java.util.Stack;

public class StackDataStructure {
    public static void main(String[] args) {
        // Create a Stack
        Stack<String> stack = new Stack<>();

        // Add elements
        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");

        // Access the top element without removing it
        System.out.println("Top element: " + stack.peek());

        // Remove the top element
        System.out.println("Popped element: " + stack.pop());

        // Check if the stack is empty
        System.out.println("Is the stack empty? " + stack.empty());

        // Add more elements
        stack.push("Date");
        stack.push("Elderberry");

        // Search for an element
        int position = stack.search("Banana");
        if (position != -1) {
            System.out.println("Banana is at position: " + position);
        } else {
            System.out.println("Banana is not in the stack.");
        }

        // Iterate over the stack
        System.out.println("Stack elements:");
        for (String fruit : stack) {
            System.out.println(fruit);
        }

        // Clear the stack
        stack.clear();
        System.out.println("Is the stack empty after clearing? " + stack.empty());
    }
}
```

> **For more:** [`StackDataStructure.java`](./StackDataStructure.java)
