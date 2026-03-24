import java.util.*;

public class LinkedHashMapDataStructure {
    public static void main(String[] args) {
        // Create a LinkedHashMap
        LinkedHashMap<String, String> linkedHashMap = new LinkedHashMap<>();

        // Add elements
        linkedHashMap.put("1", "Apple");
        linkedHashMap.put("2", "Banana");
        linkedHashMap.put("3", "Cherry");
        linkedHashMap.put("4", "Date");
        linkedHashMap.put("5", "Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(linkedHashMap);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(linkedHashMap);

        // Demonstrate LinkedHashMap specific methods
        demonstrateLinkedHashMapSpecificMethods(linkedHashMap);
    }

    public static void demonstrateBasicOperations(LinkedHashMap<String, String> linkedHashMap) {
        System.out.println("Basic LinkedHashMap Operations:");

        // Check size
        System.out.println("Size of the LinkedHashMap: " + linkedHashMap.size());

        // Access an element
        System.out.println("Value for key '3': " + linkedHashMap.get("3"));

        // Check if a key exists
        System.out.println("Contains key '2': " + linkedHashMap.containsKey("2"));

        // Check if a value exists
        System.out.println("Contains value 'Banana': " + linkedHashMap.containsValue("Banana"));

        // Remove an element
        System.out.println("Removed value: " + linkedHashMap.remove("3"));
        System.out.println("LinkedHashMap after remove: " + linkedHashMap);

        // Iterate over key-value pairs
        System.out.println("LinkedHashMap elements:");
        for (Map.Entry<String, String> entry : linkedHashMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Clear the LinkedHashMap
        linkedHashMap.clear();
        System.out.println("Is LinkedHashMap empty? " + linkedHashMap.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(LinkedHashMap<String, String> linkedHashMap) {
        System.out.println("Advanced LinkedHashMap Operations:");

        // Add elements again for demonstration
        linkedHashMap.put("1", "Apple");
        linkedHashMap.put("2", "Banana");
        linkedHashMap.put("3", "Cherry");
        linkedHashMap.put("4", "Date");
        linkedHashMap.put("5", "Elderberry");

        // Search for a value by key
        String value = linkedHashMap.get("2");
        System.out.println("Value for key '2': " + value);

        // Replace a value
        linkedHashMap.put("4", "Coconut");
        System.out.println("LinkedHashMap after replacing value for key '4': " + linkedHashMap);

        // Check if the map contains a specific key
        System.out.println("Contains key '5': " + linkedHashMap.containsKey("5"));

        // Check if the map contains a specific value
        System.out.println("Contains value 'Banana': " + linkedHashMap.containsValue("Banana"));

        // Iterate over keys
        System.out.println("LinkedHashMap keys:");
        for (String key : linkedHashMap.keySet()) {
            System.out.println(key);
        }

        // Iterate over values
        System.out.println("LinkedHashMap values:");
        for (String val : linkedHashMap.values()) {
            System.out.println(val);
        }
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateLinkedHashMapSpecificMethods(LinkedHashMap<String, String> linkedHashMap) {
        System.out.println("LinkedHashMap Specific Methods:");

        // Replace value for a key
        linkedHashMap.put("2", "Blueberry");
        System.out.println("LinkedHashMap after replacing value for key '2': " + linkedHashMap);

        // Get a default value for a key (if not present)
        String defaultValue = linkedHashMap.getOrDefault("6", "Default Fruit");
        System.out.println("Default value for key '6': " + defaultValue);

        // Compute a new value based on existing value
        linkedHashMap.compute("5", (key, value) -> value + " Juice");
        System.out.println("LinkedHashMap after compute method: " + linkedHashMap);

        // Merge two values
        linkedHashMap.merge("2", " Smoothie", (oldVal, newVal) -> oldVal + newVal);
        System.out.println("LinkedHashMap after merge method: " + linkedHashMap);

        System.out.println(); // Empty line for better readability
    }
}
