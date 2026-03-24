import java.util.*;

public class TreeMapDataStructure {
    public static void main(String[] args) {
        // Create a TreeMap
        TreeMap<String, String> treeMap = new TreeMap<>();

        // Add elements
        treeMap.put("1", "Apple");
        treeMap.put("2", "Banana");
        treeMap.put("3", "Cherry");
        treeMap.put("4", "Date");
        treeMap.put("5", "Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(treeMap);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(treeMap);

        // Demonstrate TreeMap specific methods
        demonstrateTreeMapSpecificMethods(treeMap);
    }

    public static void demonstrateBasicOperations(TreeMap<String, String> treeMap) {
        System.out.println("Basic TreeMap Operations:");

        // Check size
        System.out.println("Size of the TreeMap: " + treeMap.size());

        // Access an element
        System.out.println("Value for key '3': " + treeMap.get("3"));

        // Check if a key exists
        System.out.println("Contains key '2': " + treeMap.containsKey("2"));

        // Check if a value exists
        System.out.println("Contains value 'Banana': " + treeMap.containsValue("Banana"));

        // Remove an element
        System.out.println("Removed value: " + treeMap.remove("3"));
        System.out.println("TreeMap after remove: " + treeMap);

        // Iterate over key-value pairs
        System.out.println("TreeMap elements:");
        for (Map.Entry<String, String> entry : treeMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Clear the TreeMap
        treeMap.clear();
        System.out.println("Is TreeMap empty? " + treeMap.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(TreeMap<String, String> treeMap) {
        System.out.println("Advanced TreeMap Operations:");

        // Add elements again for demonstration
        treeMap.put("1", "Apple");
        treeMap.put("2", "Banana");
        treeMap.put("3", "Cherry");
        treeMap.put("4", "Date");
        treeMap.put("5", "Elderberry");

        // Search for a value by key
        String value = treeMap.get("2");
        System.out.println("Value for key '2': " + value);

        // Replace a value
        treeMap.put("4", "Coconut");
        System.out.println("TreeMap after replacing value for key '4': " + treeMap);

        // Check if the map contains a specific key
        System.out.println("Contains key '5': " + treeMap.containsKey("5"));

        // Check if the map contains a specific value
        System.out.println("Contains value 'Banana': " + treeMap.containsValue("Banana"));

        // Iterate over keys
        System.out.println("TreeMap keys:");
        for (String key : treeMap.keySet()) {
            System.out.println(key);
        }

        // Iterate over values
        System.out.println("TreeMap values:");
        for (String val : treeMap.values()) {
            System.out.println(val);
        }
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateTreeMapSpecificMethods(TreeMap<String, String> treeMap) {
        System.out.println("TreeMap Specific Methods:");

        // Replace value for a key
        treeMap.put("2", "Blueberry");
        System.out.println("TreeMap after replacing value for key '2': " + treeMap);

        // Get a default value for a key (if not present)
        String defaultValue = treeMap.getOrDefault("6", "Default Fruit");
        System.out.println("Default value for key '6': " + defaultValue);

        // Compute a new value based on existing value
        treeMap.compute("5", (key, value) -> value + " Juice");
        System.out.println("TreeMap after compute method: " + treeMap);

        // Merge two values
        treeMap.merge("2", " Smoothie", (oldVal, newVal) -> oldVal + newVal);
        System.out.println("TreeMap after merge method: " + treeMap);

        System.out.println(); // Empty line for better readability
    }
}
