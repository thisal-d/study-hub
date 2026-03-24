# `List` Interface in Java

## Overview
The `List` interface in Java represents an ordered collection of elements. It is part of the `java.util` package and extends the `Collection` interface. Elements in a `List` are ordered and may contain duplicates.

---

## Characteristics of `List` Interface

| **Feature**              | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | Yes                                          |
| **Maintains Insertion Order** | Yes                                      |
| **Subinterfaces**         | `Queue`, `Deque`, `Set`                      |
| **Implementations**       | `ArrayList`, `LinkedList`, `Vector`, `Stack` |

---

## Key Features of `List` Interface

- **Index-Based Access**: Elements can be accessed directly by their index.
- **Dynamic Size**: The size of a `List` can grow or shrink as needed.
- **Versatile Implementations**: Multiple implementations cater to different use cases (e.g., `ArrayList` for fast access, `LinkedList` for frequent insertions and deletions).
- **Rich API**: Provides a wide range of methods for adding, removing, and manipulating elements.

---

## Initializing Different Types Using the List Interface

You can initialize a `List` with various data types using its implementations like `ArrayList`, `LinkedList`, etc. Here's how:

```java
List<Type> stringList = new ArrayList<>();
List<Type> stringList = new LinkedList<>();
...
..
.
```

- Using [**`ArrayList`**](./Array-List/) [<sub>ArrayListDataStructure.java</sub>](./Array-List/ArrayListDataStructure.java) 
 
    ```java
    List<String> stringList = new ArrayList<>();
    List<Integer> integerList = new ArrayList<>();
    List<Double> doubleList = new ArrayList<>();
    ```

- Using [**`LinkedList`**](./Linked-List/) [<sub>LinkedListDataStructure.java</sub>](./Linked-List/LinkedListDataStructure.java) 
 
    ```java
    List<String> linkedStringList = new LinkedList<>();
    List<Integer> linkedIntegerList = new LinkedList<>();
    ```

- Using [**`Vector`**](./Vector/) [<sub>VectorDataStructure.java</sub>](./Vector/VectorDataStructure.java) 
 
    ```java
    List<String> vectorList = new Vector<>();
    List<Character> charList = new Vector<>();
    ```

- Using [**`Stack`**](./Stack/) [<sub>StackDataStructure.java</sub>](./Stack/StackDataStructure.java) 
 
    ```java
    List<String> stackList = new Stack<>();
    List<Boolean> booleanList = new Stack<>();
    ```

- Using Arrays as a Fixed-Size List
    If you need a fixed-size List, you can use `Arrays.asList()`:

    ```java
    List<String> fixedList = Arrays.asList("Apple", "Banana", "Cherry");
    List<Integer> fixedList = Arrays.asList(1, 2, 3);
    ```

- Immutable Lists (from Java 9 onwards):

    ```java
    List<String> immutableList = List.of("Apple", "Banana", "Cherry");
    List<Integer> immutableList = List.of(1, 2, 3);
    ```

- CopyOnWriteArrayList (for thread safety):

    ```java
    List<String> threadSafeList = new CopyOnWriteArrayList<>();
    ```
---

## **Use Cases for `List` Implementations**

| **Implementation** | **Use Case**                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------|
| `ArrayList`         | Best for frequent read operations and occasional writes. Example: Maintaining a list of items.  |
| `LinkedList`        | Ideal for applications requiring frequent insertions or deletions. Example: Implementing a queue. |
| `Vector`            | Legacy implementation, use only when thread safety is required without external synchronization. |
| `Stack`             | Use for LIFO (Last In, First Out) operations. Example: Undo/Redo functionality in an editor.    |

---

## Commonly Used Methods

> Object : Integer, Boolean, String, etc (Every type of objects).

> ListType : ArrayList, LinkedList, Vector, Stack, etc (Every type of List).

```java
List<Object> list = new ListType<>();
```

| **Method**                               | **Description**                                            | **Return Type** | **Example**                                |
|------------------------------------------|------------------------------------------------------------|-----------------|--------------------------------------------|
| `add(E e)`                               | Adds the specified element to the end of the list.         | `boolean`       | `list.add("Hello");`                       |
| `add(int index, E element)`              | Inserts the element at the specified position.             | `void`          | `list.add(1, "World");`                    |
| `get(int index)`                         | Returns the element at the specified index.                | `E`             | `list.get(0);`                             |
| `remove(int index)`                      | Removes the element at the specified index.                | `E`             | `list.remove(2);`                          |
| `remove(Object o)`                       | Removes the first occurrence of the specified element.     | `boolean`       | `list.remove("Hello");`                    |
| `size()`                                 | Returns the number of elements in the list.                | `int`           | `list.size();`                             |
| `contains(Object o)`                     | Checks if the list contains the specified element.         | `boolean`       | `list.contains("Hello");`                  |
| `indexOf(Object o)`                      | Returns the index of the first occurrence of the element.  | `int`           | `list.indexOf("Hello");`                   |
| `lastIndexOf(Object o)`|Returns the index of the last occurrence of the specified element in this list| `int`           | `list.lastIndexOf("Hello");`               |
| `clear()`                                | Removes all elements from the list.                        | `void`          | `list.clear();`                            |
| `isEmpty()`                              | Checks if the list is empty.                               | `boolean`       | `list.isEmpty();`                          |
| `set(int index, E element)`              | Replaces the element at the specified position.            | `E`             | `list.set(0, "New Value");`                |
| `toArray()`                              | Converts the list to an array.                             | `Object[]`      | `Object[] arr = list.toArray();`           |
| `subList(int fromIndex, int toIndex)`    | Returns a view of a portion of the list.                   | `List<E>`       | `list.subList(1, 3);`                      |
| `equals(Object o)`                       | Compares the specified object with this list for equality  |  boolean        | `list.equals(obj)`                         |
| `hashCode()`                             | Returns the hash code value for this list                  |  int            | `list.hasCode()`                           |

---

## Example Code

```java
import java.util.ArrayList;
import java.util.List;

public class ListInterface {
    public static void main(String[] args) {
        // Create a list
        List<String> list = new ArrayList<>();

        // Add elements
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        // Access elements
        System.out.println("Element at index 1: " + list.get(1));

        // Check size
        System.out.println("Size of the list: " + list.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + list.contains("Banana"));

        // Remove an element
        list.remove("Banana");
        System.out.println("List after removal: " + list);

        // Iterate over elements
        System.out.println("List elements:");
        for (String fruit : list) {
            System.out.println(fruit);
        }

        // Clear the list
        list.clear();
        System.out.println("Is list empty? " + list.isEmpty());
    }
}
```

> **For more:** [`ListInterface.java`](./ListInterface.java)

---

## More to List Implementations : 

- [**`ArrayList`**](./Array-List/) [<sub>ArrayListDataStructure.java</sub>](./Array-List/ArrayListDataStructure.java) 

- [**`LinkedList`**](./Linked-List/) [<sub>LinkedListDataStructure.java</sub>](./Linked-List/LinkedListDataStructure.java) 

- [**`Vector`**](./Vector/) [<sub>VectorDataStructure.java</sub>](./Vector/VectorDataStructure.java) 

- [**`Stack`**](./Stack/) [<sub>StackDataStructure.java</sub>](./Stack/StackDataStructure.java) 
