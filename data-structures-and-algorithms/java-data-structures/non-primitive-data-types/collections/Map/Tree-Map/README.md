# `TreeMap` in Java

## Overview

The `TreeMap` class in Java is a part of the `java.util` package and implements the `NavigableMap` interface, which extends `Map`. It maintains the keys in **sorted order** according to their natural ordering or by a custom comparator provided at the time of map creation. It is generally used when you need the features of a `Map` along with automatic sorting of keys.

---

## Characteristics of `TreeMap`

| **Feature**              | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | No (Allows duplicate values, but not keys)    |
| **Maintains Sorted Order** | Yes (Keys are sorted in ascending order by default) |
| **Thread-Safe**           | No                                           |
| **Initial Capacity**      | 16 (default)                                 |
| **Null Keys/Values**      | No (Does not allow null keys or values)      |

---

## Key Features of `TreeMap`

- **Key-Value Pairs**: Stores data in key-value pairs.
- **Sorted Keys**: Automatically sorts the keys in ascending order (or based on a custom comparator).
- **NavigableMap Interface**: Provides methods for navigating the map, such as `lowerKey()`, `higherKey()`, `ceilingKey()`, and `floorKey()`.
- **Allows `null` values**: Allows multiple `null` values but no `null` keys.

---

## How to Use `TreeMap`

### Importing `TreeMap`

```java
import java.util.TreeMap;
```

### Creating a `TreeMap`

```java
TreeMap<KeyType, ValueType> treeMap = new TreeMap<>();
```

- Example
    ```java
    TreeMap<String, String> map = new TreeMap<>();
    TreeMap<Integer, String> mapWithIntegers = new TreeMap<>();
    ```

---

## `TreeMap` Specific Methods
The `TreeMap` class provides several methods beyond those in the `Map` interface. Here are some of the most commonly used:

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
| **firstKey()**                       | Returns the first (lowest) key currently in the map.                | K                         | `map.firstKey();`                           |
| **lastKey()**                        | Returns the last (highest) key currently in the map.                | K                         | `map.lastKey();`                            |

## Example Code

```java
import java.util.TreeMap;
import java.util.Map;

public class TreeMapDataStructure {
    public static void main(String[] args) {
        // Create a TreeMap
        TreeMap<String, String> map = new TreeMap<>();

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

        // Get the first and last keys
        System.out.println("First Key: " + map.firstKey());
        System.out.println("Last Key: " + map.lastKey());

        // Clear the map
        map.clear();
        System.out.println("Is map empty? " + map.isEmpty());
    }
}
```
> **For more:** [`TreeMapDataStructure.java`](./TreeMapDataStructure.java)
