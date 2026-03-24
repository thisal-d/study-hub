import java.util.*;

public class HashSetDataStructure {
    public static void main(String[] args) {
        // Create a HashSet
        HashSet<String> hashSet = new HashSet<>();

        // Add elements
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");
        hashSet.add("Date");
        hashSet.add("Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(hashSet);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(hashSet);

        // Demonstrate HashSet specific methods
        demonstrateHashSetSpecificMethods(hashSet);
    }

    public static void demonstrateBasicOperations(HashSet<String> hashSet) {
        System.out.println("Basic HashSet Operations:");

        // Check size
        System.out.println("Size of the HashSet: " + hashSet.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + hashSet.contains("Banana"));

        // Remove an element
        System.out.println("Removed element 'Cherry': " + hashSet.remove("Cherry"));
        System.out.println("HashSet after removal: " + hashSet);

        // Iterate over elements
        System.out.println("HashSet elements:");
        for (String fruit : hashSet) {
            System.out.println(fruit);
        }

        // Clear the HashSet
        hashSet.clear();
        System.out.println("Is HashSet empty? " + hashSet.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(HashSet<String> hashSet) {
        System.out.println("Advanced HashSet Operations:");

        // Add elements again for demonstration
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");
        hashSet.add("Date");
        hashSet.add("Elderberry");

        // Check if the HashSet contains all elements of another collection
        Set<String> subset = new HashSet<>(Arrays.asList("Banana", "Cherry"));
        System.out.println("HashSet contains all elements of subset: " + hashSet.containsAll(subset));

        // Remove all elements in another collection
        hashSet.removeAll(subset);
        System.out.println("HashSet after removing elements of subset: " + hashSet);

        // Retain only elements in another collection
        Set<String> retainSet = new HashSet<>(Arrays.asList("Apple", "Date"));
        hashSet.retainAll(retainSet);
        System.out.println("HashSet after retaining elements of retainSet: " + hashSet);

        // Convert HashSet to array
        Object[] array = hashSet.toArray();
        System.out.println("Array from HashSet: " + Arrays.toString(array));

        // Check equality with another HashSet
        Set<String> anotherHashSet = new HashSet<>(Arrays.asList("Apple", "Date"));
        System.out.println("HashSets are equal: " + hashSet.equals(anotherHashSet));

        // Iterate using Iterator
        System.out.println("Iterating with Iterator:");
        Iterator<String> iterator = hashSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateHashSetSpecificMethods(HashSet<String> hashSet) {
        System.out.println("HashSet Specific Methods:");

        // Add element and observe behavior
        boolean isAdded = hashSet.add("Apple"); // "Apple" already exists
        System.out.println("Is 'Apple' added again? " + isAdded);

        // Calculate hash code of the HashSet
        System.out.println("HashSet hash code: " + hashSet.hashCode());

        // Size of the HashSet after operations
        System.out.println("Final size of the HashSet: " + hashSet.size());
        System.out.println(); // Empty line for better readability
    }
}
