import java.util.*;

public class HashMapDataStructure {
    public static void main(String[] args) {
        // Create a HashMap
        HashMap<String, String> hashMap = new HashMap<>();

        // Add elements
        hashMap.put("1", "Apple");
        hashMap.put("2", "Banana");
        hashMap.put("3", "Cherry");
        hashMap.put("4", "Date");
        hashMap.put("5", "Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(hashMap);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(hashMap);

        // Demonstrate HashMap specific methods
        demonstrateHashMapSpecificMethods(hashMap);
    }

    public static void demonstrateBasicOperations(HashMap<String, String> hashMap) {
        System.out.println("Basic HashMap Operations:");

        // Check size
        System.out.println("Size of the HashMap: " + hashMap.size());

        // Access an element
        System.out.println("Value for key '3': " + hashMap.get("3"));

        // Check if a key exists
        System.out.println("Contains key '2': " + hashMap.containsKey("2"));

        // Check if a value exists
        System.out.println("Contains value 'Banana': " + hashMap.containsValue("Banana"));

        // Remove an element
        System.out.println("Removed value: " + hashMap.remove("3"));
        System.out.println("HashMap after remove: " + hashMap);

        // Iterate over key-value pairs
        System.out.println("HashMap elements:");
        for (Map.Entry<String, String> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Clear the HashMap
        hashMap.clear();
        System.out.println("Is HashMap empty? " + hashMap.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(HashMap<String, String> hashMap) {
        System.out.println("Advanced HashMap Operations:");

        // Add elements again for demonstration
        hashMap.put("1", "Apple");
        hashMap.put("2", "Banana");
        hashMap.put("3", "Cherry");
        hashMap.put("4", "Date");
        hashMap.put("5", "Elderberry");

        // Search for a value by key
        String value = hashMap.get("2");
        System.out.println("Value for key '2': " + value);

        // Replace a value
        hashMap.put("4", "Coconut");
        System.out.println("HashMap after replacing value for key '4': " + hashMap);

        // Check if the map contains a specific key
        System.out.println("Contains key '5': " + hashMap.containsKey("5"));

        // Check if the map contains a specific value
        System.out.println("Contains value 'Banana': " + hashMap.containsValue("Banana"));

        // Iterate over keys
        System.out.println("HashMap keys:");
        for (String key : hashMap.keySet()) {
            System.out.println(key);
        }

        // Iterate over values
        System.out.println("HashMap values:");
        for (String val : hashMap.values()) {
            System.out.println(val);
        }
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateHashMapSpecificMethods(HashMap<String, String> hashMap) {
        System.out.println("HashMap Specific Methods:");

        // Replace value for a key
        hashMap.put("2", "Blueberry");
        System.out.println("HashMap after replacing value for key '2': " + hashMap);

        // Get a default value for a key (if not present)
        String defaultValue = hashMap.getOrDefault("6", "Default Fruit");
        System.out.println("Default value for key '6': " + defaultValue);

        // Compute a new value based on existing value
        hashMap.compute("5", (key, value) -> value + " Juice");
        System.out.println("HashMap after compute method: " + hashMap);

        // Merge two values
        hashMap.merge("2", " Smoothie", (oldVal, newVal) -> oldVal + newVal);
        System.out.println("HashMap after merge method: " + hashMap);

        System.out.println(); // Empty line for better readability
    }
}
