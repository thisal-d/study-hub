import java.util.*;

public class HashtableDataStructure {
    public static void main(String[] args) {
        // Create a Hashtable
        Hashtable<String, String> hashtable = new Hashtable<>();

        // Add elements
        hashtable.put("1", "Apple");
        hashtable.put("2", "Banana");
        hashtable.put("3", "Cherry");
        hashtable.put("4", "Date");
        hashtable.put("5", "Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(hashtable);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(hashtable);

        // Demonstrate Hashtable specific methods
        demonstrateHashtableSpecificMethods(hashtable);
    }

    public static void demonstrateBasicOperations(Hashtable<String, String> hashtable) {
        System.out.println("Basic Hashtable Operations:");

        // Check size
        System.out.println("Size of the Hashtable: " + hashtable.size());

        // Access an element
        System.out.println("Value for key '3': " + hashtable.get("3"));

        // Check if a key exists
        System.out.println("Contains key '2': " + hashtable.containsKey("2"));

        // Check if a value exists
        System.out.println("Contains value 'Banana': " + hashtable.containsValue("Banana"));

        // Remove an element
        System.out.println("Removed value: " + hashtable.remove("3"));
        System.out.println("Hashtable after remove: " + hashtable);

        // Iterate over key-value pairs
        System.out.println("Hashtable elements:");
        for (Map.Entry<String, String> entry : hashtable.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Clear the Hashtable
        hashtable.clear();
        System.out.println("Is Hashtable empty? " + hashtable.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(Hashtable<String, String> hashtable) {
        System.out.println("Advanced Hashtable Operations:");

        // Add elements again for demonstration
        hashtable.put("1", "Apple");
        hashtable.put("2", "Banana");
        hashtable.put("3", "Cherry");
        hashtable.put("4", "Date");
        hashtable.put("5", "Elderberry");

        // Search for a value by key
        String value = hashtable.get("2");
        System.out.println("Value for key '2': " + value);

        // Replace a value
        hashtable.put("4", "Coconut");
        System.out.println("Hashtable after replacing value for key '4': " + hashtable);

        // Check if the map contains a specific key
        System.out.println("Contains key '5': " + hashtable.containsKey("5"));

        // Check if the map contains a specific value
        System.out.println("Contains value 'Banana': " + hashtable.containsValue("Banana"));

        // Iterate over keys
        System.out.println("Hashtable keys:");
        for (String key : hashtable.keySet()) {
            System.out.println(key);
        }

        // Iterate over values
        System.out.println("Hashtable values:");
        for (String val : hashtable.values()) {
            System.out.println(val);
        }
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateHashtableSpecificMethods(Hashtable<String, String> hashtable) {
        System.out.println("Hashtable Specific Methods:");

        // Replace value for a key
        hashtable.put("2", "Blueberry");
        System.out.println("Hashtable after replacing value for key '2': " + hashtable);

        // Get a default value for a key (if not present)
        String defaultValue = hashtable.getOrDefault("6", "Default Fruit");
        System.out.println("Default value for key '6': " + defaultValue);

        // Compute a new value based on existing value
        hashtable.compute("5", (key, value) -> value + " Juice");
        System.out.println("Hashtable after compute method: " + hashtable);

        // Merge two values
        hashtable.merge("2", " Smoothie", (oldVal, newVal) -> oldVal + newVal);
        System.out.println("Hashtable after merge method: " + hashtable);

        System.out.println(); // Empty line for better readability
    }
}
