# `Map` Interface in Java

## Overview
The `Map` interface in Java represents a collection of key-value pairs. It is part of the `java.util` package and does not extend the `Collection` interface. A `Map` is not a true collection since it does not directly implement the `Collection` interface. It allows mapping a key to a value.

---

## Characteristics of `Map` Interface

| **Feature**               | **Details**                                   |
|---------------------------|-----------------------------------------------|
| **Package**               | `java.util`                                  |
| **Allows Duplicates**     | No (keys must be unique)                     |
| **Maintains Insertion Order** | Depends on implementation                  |
| **Subinterfaces**         | `SortedMap`, `NavigableMap`                   |
| **Implementations**       | `HashMap`, `LinkedHashMap`, `TreeMap`, `Hashtable` |

---

## Key Features of `Map` Interface

- **Key-Value Pairing**: Each element in a `Map` is stored as a key-value pair.
- **No Duplicate Keys**: A `Map` does not allow duplicate keys.
- **Efficient Lookups**: Provides efficient methods to access values based on keys.

---

## Initializing Different Types Using the Map Interface

You can initialize a `Map` with various data types using its implementations like `HashMap`, `LinkedHashMap`, etc. Here's how:

```java
Map<TypeKey, TypeValue> map = new HashMap<>();
Map<TypeKey, TypeValue> map = new LinkedHashMap<>();
...
..
.
```

- Using [**`HashMap`**](./Hash-Map/) [<sub>HashMapDataStructure.java</sub>](./Hash-Map/HashMapDataStructure.java)


    ```java
    Map<String, String> hashMap = new HashMap<>();
    Map<Integer, Double> integerDoubleMap = new HashMap<>();
    ```

- Using [**`LinkedHashMap`**](./Linked-Hash-Map/) [<sub>LinkedHashMapDataStructure.java</sub>](./Linked-Hash-Map/LinkedHashMapDataStructure.java)

    ```java
    Map<String, String> linkedHashMap = new LinkedHashMap<>();
    ```

- Using [**`TreeMap`**](./Tree-Map/) [<sub>TreeMapDataStructure.java</sub>](./Tree-Map/TreeMapDataStructure.java)

    ```java
    Map<String, Integer> treeMap = new TreeMap<>();
    ```  

- Using [**`Hashtable`**](./Hash-Table/) [<sub>HashTableDataStructure.java</sub>](./Hash-Table/HashTableDataStructure.java)

    ```java
    Map<String, String> hashtable = new Hashtable<>();
    ```

- Immutable Maps (from Java 9 onwards):
    ```java
    Map<String, String> immutableMap = Map.of("Key1", "Value1", "Key2", "Value2");
    ```

---

## Use Cases for `Map` Implementations

| Implementation   | Use Case                                                                 |
|------------------|--------------------------------------------------------------------------|
| HashMap          | Best for fast lookups and when order doesn't matter. Example: Storing user information by ID. |
| LinkedHashMap    | Preserves insertion order. Example: Maintaining a cache where order of insertion is important. |
| TreeMap          | Ideal for sorted maps based on keys. Example: Implementing a dictionary with sorted keys. |
| Hashtable        | Legacy implementation, use only when thread safety is required. |

---

## Commonly Used Methods

> Object : Integer, Boolean, String, etc (Every type of objects).

> MapType : HashMap, LinkedHashMap, TreeMap, Hashtable, etc (Every type of Map).


```java
Map<Object, Object> map = new MapType<>();
```

| Method                                                      | Description                                                                  | Return Type                           | Example                                      |
|-------------------------------------------------------------|------------------------------------------------------------------------------|---------------------------------------|----------------------------------------------|
| put(K key, V value)                                          | Associates the specified value with the specified key.                        | V                                     | map.put("Name", "Alice");                    |
| get(Object key)                                              | Returns the value associated with the specified key.                          | V                                     | map.get("Name");                            |
| remove(Object key)                                           | Removes the mapping for the specified key from the map.                       | V                                     | map.remove("Name");                         |
| containsKey(Object key)                                      | Checks if the map contains a mapping for the specified key.                  | boolean                               | map.containsKey("Name");                    |
| containsValue(Object value)                                  | Checks if the map contains the specified value.                               | boolean                               | map.containsValue("Alice");                 |
| size()                                                       | Returns the number of key-value mappings in the map.                          | int                                   | map.size();                                 |
| clear()                                                      | Removes all mappings from the map.                                           | void                                  | map.clear();                                |
| isEmpty()                                                    | Checks if the map is empty.                                                  | boolean                               | map.isEmpty();                              |
| keySet()                                                     | Returns a set view of the keys contained in the map.                         | Set<K>                                | map.keySet();                               |
| values()                                                     | Returns a collection view of the values contained in the map.                | Collection<V>                         | map.values();                               |
| entrySet()                                                   | Returns a set view of the mappings contained in the map.                     | Set<Map.Entry<K, V>>                  | map.entrySet();                             |
| putAll(Map<? extends K, ? extends V> m)                      | Copies all of the mappings from the specified map to the current map.        | void                                  | map.putAll(anotherMap);                     |
| equals(Object o)                                             | Compares the specified object with this map for equality.                    | boolean                               | map.equals(otherMap);                       |

---

## Example Code

```java
import java.util.HashMap;
import java.util.Map;

public class MapInterface {
    public static void main(String[] args) {
        // Create a map
        Map<String, String> map = new HashMap<>();

        // Add elements
        map.put("Name", "Alice");
        map.put("Country", "USA");
        map.put("City", "New York");

        // Access elements
        System.out.println("Country: " + map.get("Country"));

        // Check size
        System.out.println("Size of the map: " + map.size());

        // Check if a key exists
        System.out.println("Contains key 'City': " + map.containsKey("City"));

        // Remove an element
        map.remove("City");
        System.out.println("Map after removal: " + map);

        // Iterate over entries
        System.out.println("Map entries:");
        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Clear the map
        map.clear();
        System.out.println("Is map empty? " + map.isEmpty());
    }
}
```

> **For more:** [`MapInterface.java`](./MapInterface.java)

---

## More to List Implementations : 

- [**`HashMap`**](./Hash-Map/) [<sub>HashMapDataStructure.java</sub>](./Hash-Map/HashMapDataStructure.java)

- [**`LinkedHashMap`**](./Linked-Hash-Map/) [<sub>LinkedHashMapDataStructure.java</sub>](./Linked-Hash-Map/LinkedHashMapDataStructure.java)
 
- [**`TreeMap`**](./Tree-Map/) [<sub>TreeMapDataStructure.java</sub>](./Tree-Map/TreeMapDataStructure.java)

- [**`Hashtable`**](./Hash-Table/) [<sub>HashTableDataStructure.java</sub>](./Hash-Table/HashTableDataStructure.java)