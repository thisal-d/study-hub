# `LinkedHashMap` in Java

## Overview

The `LinkedHashMap` class in Java is a part of the `java.util` package and extends `HashMap`. It maintains the insertion order of elements and is generally used when you need the benefits of `HashMap` (such as constant time complexity for `get()` and `put()`) while also maintaining the order of the entries.

---

## Characteristics of `LinkedHashMap`

| **Feature**              | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | No (Allows duplicate values, but not keys)    |
| **Maintains Insertion Order** | Yes (Order of insertion is preserved)     |
| **Thread-Safe**           | No                                           |
| **Initial Capacity**      | 16 (default)                                 |
| **Access Order**          | Optional (Can be set to access order instead of insertion order) |

---

## Key Features of `LinkedHashMap`

- **Key-Value Pairs**: Stores data in key-value pairs.
- **Preserves Order**: Maintains the order of insertion or access order.
- **Fast Lookup**: Provides constant time complexity (`O(1)`) for `get()` and `put()` operations under ideal conditions.
- **Allows `null` values**: Allows one `null` key and multiple `null` values.

---

## How to Use `LinkedHashMap`

### Importing `LinkedHashMap`

```java
import java.util.LinkedHashMap;
```

### Creating a `LinkedHashMap`

```java
LinkedHashMap<KeyType, ValueType> linkedHashMap = new LinkedHashMap<>();
```

- Example:
    ```java
    LinkedHashMap<String, String> map = new LinkedHashMap<>();
    LinkedHashMap<Integer, String> mapWithIntegers = new LinkedHashMap<>();
    ```

---

## LinkedHashMap Specific Methods

The `LinkedHashMap` class provides several methods beyond those in the `Map` interface. Here are some of the most commonly used:

| **Method**                           | **Description**                                                     | **Return Type**           | **Example**                                 |
|--------------------------------------|---------------------------------------------------------------------|---------------------------|---------------------------------------------|
| **put(K key, V value)**              | Associates the specified value with the specified key.              | V                         | `map.put("Name", "Alice");`                 |
| **get(Object key)**                  | Returns the value associated with the specified key.                | V                         | `map.get("Name");`                          |
| **remove(Object key)**               | Removes the mapping for the specified key from the map.             | V                         | `map.remove("Name");`                       |
| **containsKey(Object key)**          | Checks if the map contains a mapping for the specified key.        | boolean                   | `map.containsKey("Name");`                  |
| **containsValue(Object value)**      | Checks if the map contains the specified value.                     | boolean                   | `map.containsValue("Alice");`               |
| **size()**                           | Returns the number of key-value mappings in the map.                | int                       | `map.size();`                               |
| **clear()**                          | Removes all mappings from the map.                                  | void                      | `map.clear();`                              |
| **isEmpty()**                        | Checks if the map is empty.                                        | boolean                   | `map.isEmpty();`                            |
| **keySet()**                         | Returns a set view of the keys contained in the map.                | Set<K>                     | `map.keySet();`                             |
| **values()**                         | Returns a collection view of the values contained in the map.       | Collection<V>             | `map.values();`                             |
| **entrySet()**                       | Returns a set view of the mappings contained in the map.           | Set<Map.Entry<K, V>>      | `map.entrySet();`                           |
| **putAll(Map<? extends K, ? extends V> m)** | Copies all of the mappings from the specified map to the current map. | void                      | `map.putAll(anotherMap);`                   |
| **equals(Object o)**                | Compares the specified object with this map for equality.           | boolean                   | `map.equals(otherMap);`                     |
| **removeEldestEntry(Map.Entry<K, V> eldest)** | Removes the eldest entry if it exceeds a specified threshold (used for cache-like behavior). | boolean               | `map.removeEldestEntry(eldestEntry);`       |

---

## Example Code

```java
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapDataStructure {
    public static void main(String[] args) {
        // Create a LinkedHashMap
        LinkedHashMap<String, String> map = new LinkedHashMap<>();

        // Add key-value pairs
        map.put("Name", "Alice");
        map.put("Age", "25");
        map.put("City", "New York");

        // Access value by key
        System.out.println("Value for 'Name': " + map.get("Name"));

        // Check size
        System.out.println("Size of the map: " + map.size());

        // Check if a key exists
        System.out.println("Contains key 'Age': " + map.containsKey("Age"));

        // Remove a key-value pair
        map.remove("City");
        System.out.println("Map after removal: " + map);

        // Iterate over key-value pairs
        System.out.println("Iterating over map:");
        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Clear the map
        map.clear();
        System.out.println("Is map empty? " + map.isEmpty());
    }
}
```

> **For more:** [`LinkedHashMapDataStructure.java`](./LinkedHashMapDataStructure.java)
