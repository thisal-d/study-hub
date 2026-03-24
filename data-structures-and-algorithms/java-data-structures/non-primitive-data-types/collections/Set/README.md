# `Set` Interface in Java

## Overview
The `Set` interface in Java represents a collection of unique elements. It is part of the `java.util` package and extends the `Collection` interface. Elements in a `Set` are unordered and do not allow duplicates.

---

## Characteristics of `Set` Interface

| **Feature**              | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | No                                           |
| **Maintains Insertion Order** | No (but `LinkedHashSet` maintains order)  |
| **Subinterfaces**         | `NavigableSet`                               |
| **Implementations**       | `HashSet`, `LinkedHashSet`, `TreeSet`        |

---

## Key Features of `Set` Interface

- **No Duplicates**: A `Set` does not allow duplicate elements. If you try to add a duplicate, it will not be inserted.
- **Unordered**: The elements in a `Set` are unordered (except for `LinkedHashSet` and `TreeSet`).
- **Dynamic Size**: The size of a `Set` can grow or shrink as needed.
- **Rich API**: Provides various methods for adding, removing, and checking elements.

---

## Initializing Different Types Using the Set Interface

You can initialize a `Set` with various data types using its implementations like `HashSet`, `LinkedHashSet`, etc. Here's how:

```java
Set<Type> stringSet = new HashSet<>();
Set<Type> stringSet = new LinkedHashSet<>();
Set<Type> stringSet = new TreeSet<>();
...
..
.
```

- Using [**`HashSet`**](./Hash-Set/) [<sub>HashSetDataStructure.java</sub>](./Hash-Set/HashSetDataStructure.java)

    ```java
    Set<String> stringSet = new HashSet<>();
    Set<Integer> integerSet = new HashSet<>();
    Set<Double> doubleSet = new HashSet<>();
    ```

- Using [**`LinkedHashSet`**](./Linked-Hash-Set/) [<sub>LinkedHashSetDataStructure.java</sub>](./Linked-Hash-Set/LinkedHashSetDataStructure.java)


    ```java
    Set<String> linkedStringSet = new LinkedHashSet<>();
    Set<Integer> linkedIntegerSet = new LinkedHashSet<>();
    ```

- Using [**`TreeSet`**](./Tree-Set/) [<sub>TreeSetDataStructure.java</sub>](./Tree-Set/TreeSetDataStructure.java)

    ```java
    Set<String> treeSet = new TreeSet<>();
    Set<Integer> treeIntegerSet = new TreeSet<>();
    ```

---

## Use Cases for Set Implementations

| **Implementation**    | **Use Case**                                                                 |
|-----------------------|-------------------------------------------------------------------------------|
| **HashSet**           | Best for storing unique elements with no concern for order. Example: Storing user IDs. |
| **LinkedHashSet**     | Maintains insertion order. Example: Storing elements and iterating them in the order they were added. |
| **TreeSet**           | Stores elements in sorted order. Example: Maintaining a sorted list of elements for quick lookups. |

---

### Commonly Used Methods

> Object : Integer, Boolean, String, etc (Every type of objects).

> SetType : HashSet, LinkedHashSet, TreeSet, etc (Every type of Set).

```java
Set<Object> set = new SetType<>();
```

| **Method**            | **Description**                                                     | **Return Type**       | **Example**                                  |
|-----------------------|---------------------------------------------------------------------|-----------------------|----------------------------------------------|
| **add(E e)**          | Adds the specified element to the set.                             | boolean               | `set.add("Hello");`                          |
| **remove(Object o)**  | Removes the specified element from the set.                        | boolean               | `set.remove("Hello");`                       |
| **size()**            | Returns the number of elements in the set.                         | int                   | `set.size();`                                |
| **contains(Object o)**| Checks if the set contains the specified element.                  | boolean               | `set.contains("Hello");`                     |
| **clear()**           | Removes all elements from the set.                                 | void                  | `set.clear();`                               |
| **isEmpty()**         | Checks if the set is empty.                                        | boolean               | `set.isEmpty();`                             |
| **iterator()**        | Returns an iterator over the elements in the set.                  | Iterator<E>           | `Iterator<String> iterator = set.iterator();`|
| **toArray()**         | Converts the set to an array.                                      | Object[]              | `Object[] arr = set.toArray();`             |
| **equals(Object o)**  | Compares the specified object with this set for equality.          | boolean               | `set.equals(obj);`                           |
| **hashCode()**        | Returns the hash code value for this set.                          | int                   | `set.hashCode();`                            |

--- 

## Example Code

```java                                 
import java.util.HashSet;
import java.util.Set;

public class SetInterface {
    public static void main(String[] args) {
        // Create a set
        Set<String> set = new HashSet<>();

        // Add elements
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");

        // Check if an element exists
        System.out.println("Contains 'Banana': " + set.contains("Banana"));

        // Remove an element
        set.remove("Banana");
        System.out.println("Set after removal: " + set);

        // Check size
        System.out.println("Size of the set: " + set.size());

        // Iterate over elements
        System.out.println("Set elements:");
        for (String fruit : set) {
            System.out.println(fruit);
        }

        // Clear the set
        set.clear();
        System.out.println("Is set empty? " + set.isEmpty());
    }
}
```

> **For more:** [`SetInterface.java`](./SetInterface.java)

---

## More to Set Implementations : 

- [**`HashSet`**](./Hash-Set/) [<sub>HashSetDataStructure.java</sub>](./Hash-Set/HashSetDataStructure.java) 
 
- [**`LinkedHashSet`**](./Linked-Hash-Set/) [<sub>LinkedHashSetDataStructure.java</sub>](./Linked-Hash-Set/HashSetDataStructure.java) 
 
- [**`TreeSet`**](./Tree-Set/) [<sub>TreeSetDataStructure.java</sub>](./Tree-Set/TreeSetDataStructure.java)


