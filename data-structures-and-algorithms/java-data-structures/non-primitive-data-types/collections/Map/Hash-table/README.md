# `Hashtable` in Java

## Overview

The `Hashtable` class in Java is a part of the `java.util` package and implements the `Map` interface. It is similar to `HashMap`, but with two key differences: it is synchronized (making it thread-safe) and does not allow `null` keys or values. It stores data in key-value pairs and provides constant-time performance for basic operations, such as `get()` and `put()`.

---

## Characteristics of `Hashtable`

| **Feature**              | **Details**                                   |
|--------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | No (Allows duplicate values, but not keys)    |
| **Thread-Safe**           | Yes                                           |
| **Allows `null` Values**  | No (Does not allow `null` keys or values)     |
| **Initial Capacity**      | 11 (default)                                 |
| **Load Factor**           | 0.75 (default)                               |

---

## Key Features of `Hashtable`

- **Key-Value Pairs**: Stores data in key-value pairs.
- **Thread-Safe**: Ensures thread safety with synchronization, though it may be slower compared to other `Map` implementations.
- **Does Not Allow `null` Keys or Values**: Unlike `HashMap`, `Hashtable` does not allow `null` keys or values.
- **Fast Lookup**: Provides constant time complexity (`O(1)`) for `get()` and `put()` operations under ideal conditions.

---

## How to Use `Hashtable`

### Importing `Hashtable`

```java
import java.util.Hashtable;
```

### Creating a `Hashtable`

```java
Hashtable<KeyType, ValueType> hashtable = new Hashtable<>();
```

- Example:
    ```java
    Hashtable<String, String> hashtable = new Hashtable<>();
    Hashtable<Integer, String> hashtableWithIntegers = new Hashtable<>();
    ```

---

## `Hashtable` Specific Methods

The Hashtable class provides several methods beyond those in the Map interface. Here are some of the most commonly used:

| **Method**                           | **Description**                                                     | **Return Type**           | **Example**                                 |
|--------------------------------------|---------------------------------------------------------------------|---------------------------|---------------------------------------------|
| **put(K key, V value)**              | Associates the specified value with the specified key.              | V                         | `hashtable.put("Name", "Alice");`           |
| **get(Object key)**                  | Returns the value associated with the specified key.                | V                         | `hashtable.get("Name");`                    |
| **remove(Object key)**               | Removes the mapping for the specified key from the map.             | V                         | `hashtable.remove("Name");`                 |
| **containsKey(Object key)**          | Checks if the map contains a mapping for the specified key.        | boolean                   | `hashtable.containsKey("Name");`            |
| **containsValue(Object value)**      | Checks if the map contains the specified value.                     | boolean                   | `hashtable.containsValue("Alice");`         |
| **size()**                           | Returns the number of key-value mappings in the map.                | int                       | `hashtable.size();`                         |
| **clear()**                          | Removes all mappings from the map.                                  | void                      | `hashtable.clear();`                        |
| **isEmpty()**                        | Checks if the map is empty.                                        | boolean                   | `hashtable.isEmpty();`                      |
| **keySet()**                         | Returns a set view of the keys contained in the map.                | Set<K>                     | `hashtable.keySet();`                       |
| **values()**                         | Returns a collection view of the values contained in the map.       | Collection<V>             | `hashtable.values();`                       |
| **entrySet()**                       | Returns a set view of the mappings contained in the map.           | Set<Map.Entry<K, V>>      | `hashtable.entrySet();`                     |
| **putAll(Map<? extends K, ? extends V> m)** | Copies all of the mappings from the specified map to the current map. | void                      | `hashtable.putAll(anotherMap);`             |
| **equals(Object o)**                | Compares the specified object with this map for equality.           | boolean                   | `hashtable.equals(otherMap);`               |

---

## Example Code

```java
import java.util.Hashtable;

public class HashtableDataStructure {
    public static void main(String[] args) {
        // Create a Hashtable
        Hashtable<String, String> hashtable = new Hashtable<>();

        // Add key-value pairs
        hashtable.put("Name", "Alice");
        hashtable.put("Age", "25");
        hashtable.put("City", "New York");

        // Access value by key
        System.out.println("Value for 'Name': " + hashtable.get("Name"));

        // Check size
        System.out.println("Size of the hashtable: " + hashtable.size());

        // Check if a key exists
        System.out.println("Contains key 'Age': " + hashtable.containsKey("Age"));

        // Remove a key-value pair
        hashtable.remove("City");
        System.out.println("Hashtable after removal: " + hashtable);

        // Iterate over key-value pairs
        System.out.println("Iterating over hashtable:");
        for (Map.Entry<String, String> entry : hashtable.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Clear the hashtable
        hashtable.clear();
        System.out.println("Is hashtable empty? " + hashtable.isEmpty());
    }
}
```

> **For more:** [`HashtableDataStructure.java`](HashtableDataStructure.java)
