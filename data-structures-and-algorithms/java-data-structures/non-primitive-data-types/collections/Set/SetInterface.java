import java.util.*;

public class SetInterface {
    public static void main(String[] args) {
        // Create a set
        Set<String> set = new HashSet<>();

        // Add elements
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");

        // Demonstrate basic operations
        demonstrateBasicOperations(set);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(set);
    }

    private static void demonstrateBasicOperations(Set<String> set) {
        System.out.println("Basic Set Operations:");

        // Check size
        System.out.println("Size of the set: " + set.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + set.contains("Banana"));

        // Remove an element
        set.remove("Banana");
        System.out.println("Set after removal: " + set);

        // Iterate over elements
        System.out.println("Set elements:");
        for (String fruit : set) {
            System.out.println(fruit);
        }

        // Clear the set
        set.clear();
        System.out.println("Is set empty? " + set.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(Set<String> set) {
        System.out.println("Advanced Set Operations:");

        // Add elements again for demonstration
        set.addAll(Arrays.asList("Apple", "Banana", "Cherry", "Date", "Elderberry"));

        // Check if the set contains all elements of another collection
        Set<String> subset = new HashSet<>(Arrays.asList("Banana", "Cherry"));
        System.out.println("Set contains all elements of subset: " + set.containsAll(subset));

        // Remove all elements in another collection
        set.removeAll(subset);
        System.out.println("Set after removing elements of subset: " + set);

        // Retain only elements in another collection
        Set<String> retainSet = new HashSet<>(Arrays.asList("Apple", "Date"));
        set.retainAll(retainSet);
        System.out.println("Set after retaining elements of retainSet: " + set);

        // Add elements back
        set.addAll(Arrays.asList("Banana", "Cherry", "Elderberry"));

        // Convert set to array
        Object[] array = set.toArray();
        System.out.println("Array from set: " + Arrays.toString(array));

        // Check equality with another set
        Set<String> anotherSet = new HashSet<>(Arrays.asList("Apple", "Banana", "Cherry", "Date", "Elderberry"));
        System.out.println("Sets are equal: " + set.equals(anotherSet));

        // Calculate hash code
        System.out.println("Set hash code: " + set.hashCode());

        // Iterate using Iterator
        System.out.println("Iterating with Iterator:");
        Iterator<String> iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        System.out.println(); // Empty line for better readability
    }
}
