import java.util.*;

public class MapInterface {
    public static void main(String[] args) {
        // Create a map
        Map<String, String> map = new HashMap<>();

        // Add entries
        map.put("A", "Apple");
        map.put("B", "Banana");
        map.put("C", "Cherry");

        // Demonstrate basic operations
        demonstrateBasicOperations(map);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(map);
    }

    private static void demonstrateBasicOperations(Map<String, String> map) {
        System.out.println("Basic Map Operations:");

        // Access elements
        System.out.println("Value for key 'B': " + map.get("B"));

        // Check size
        System.out.println("Size of the map: " + map.size());

        // Check if a key exists
        System.out.println("Contains key 'A': " + map.containsKey("A"));
        System.out.println("Contains value 'Banana': " + map.containsValue("Banana"));

        // Remove an entry
        map.remove("B");
        System.out.println("Map after removal of key 'B': " + map);

        // Iterate over key-value pairs
        System.out.println("Map entries:");
        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        // Clear the map
        map.clear();
        System.out.println("Is map empty? " + map.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(Map<String, String> map) {
        System.out.println("Advanced Map Operations:");

        // Add entries again for demonstration
        map.put("A", "Apple");
        map.put("B", "Banana");
        map.put("C", "Cherry");
        map.put("D", "Date");

        // Get a set of keys
        Set<String> keys = map.keySet();
        System.out.println("Keys in the map: " + keys);

        // Get a collection of values
        Collection<String> values = map.values();
        System.out.println("Values in the map: " + values);

        // Check if the map contains a specific value
        System.out.println("Map contains value 'Date': " + map.containsValue("Date"));

        // Replace a value for a key
        map.replace("C", "Coconut");
        System.out.println("Map after replacing value for key 'C': " + map);

        // Get a view of the map's entry set
        Set<Map.Entry<String, String>> entrySet = map.entrySet();
        System.out.println("Entry set view: " + entrySet);

        // Iterate over map using keySet
        System.out.println("Iterating over map using keySet:");
        for (String key : map.keySet()) {
            System.out.println(key + " -> " + map.get(key));
        }

        // Iterate using entrySet
        System.out.println("Iterating over map using entrySet:");
        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        // Get a value or default if not found
        System.out.println("Value for key 'B' (or default if not found): " + map.getOrDefault("B", "Not Found"));

        // Replace value only if the key is present
        map.replace("A", "Apple", "Apricot");
        System.out.println("Map after replace if key 'A' exists: " + map);

        // Perform an action for each entry
        map.forEach((key, value) -> System.out.println(key + " -> " + value));

        // Sort the map by keys (if using TreeMap)
        Map<String, String> sortedMap = new TreeMap<>(map);
        System.out.println("Sorted map by keys: " + sortedMap);
        System.out.println(); // Empty line for better readability
    }
}
