import java.util.*;

public class LinkedHashSetDataStructure {
    public static void main(String[] args) {
        // Create a LinkedHashSet
        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>();

        // Add elements
        linkedHashSet.add("Apple");
        linkedHashSet.add("Banana");
        linkedHashSet.add("Cherry");
        linkedHashSet.add("Date");
        linkedHashSet.add("Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(linkedHashSet);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(linkedHashSet);

        // Demonstrate LinkedHashSet specific methods
        demonstrateLinkedHashSetSpecificMethods(linkedHashSet);
    }

    public static void demonstrateBasicOperations(LinkedHashSet<String> linkedHashSet) {
        System.out.println("Basic LinkedHashSet Operations:");

        // Check size
        System.out.println("Size of the LinkedHashSet: " + linkedHashSet.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + linkedHashSet.contains("Banana"));

        // Remove an element
        System.out.println("Removed element 'Cherry': " + linkedHashSet.remove("Cherry"));
        System.out.println("LinkedHashSet after removal: " + linkedHashSet);

        // Iterate over elements (in insertion order)
        System.out.println("LinkedHashSet elements:");
        for (String fruit : linkedHashSet) {
            System.out.println(fruit);
        }

        // Clear the LinkedHashSet
        linkedHashSet.clear();
        System.out.println("Is LinkedHashSet empty? " + linkedHashSet.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(LinkedHashSet<String> linkedHashSet) {
        System.out.println("Advanced LinkedHashSet Operations:");

        // Add elements again for demonstration
        linkedHashSet.add("Apple");
        linkedHashSet.add("Banana");
        linkedHashSet.add("Cherry");
        linkedHashSet.add("Date");
        linkedHashSet.add("Elderberry");

        // Check if the LinkedHashSet contains all elements of another collection
        Set<String> subset = new LinkedHashSet<>(Arrays.asList("Banana", "Cherry"));
        System.out.println("LinkedHashSet contains all elements of subset: " + linkedHashSet.containsAll(subset));

        // Remove all elements in another collection
        linkedHashSet.removeAll(subset);
        System.out.println("LinkedHashSet after removing elements of subset: " + linkedHashSet);

        // Retain only elements in another collection
        Set<String> retainSet = new LinkedHashSet<>(Arrays.asList("Apple", "Date"));
        linkedHashSet.retainAll(retainSet);
        System.out.println("LinkedHashSet after retaining elements of retainSet: " + linkedHashSet);

        // Convert LinkedHashSet to array
        Object[] array = linkedHashSet.toArray();
        System.out.println("Array from LinkedHashSet: " + Arrays.toString(array));

        // Check equality with another LinkedHashSet
        Set<String> anotherLinkedHashSet = new LinkedHashSet<>(Arrays.asList("Apple", "Date"));
        System.out.println("LinkedHashSets are equal: " + linkedHashSet.equals(anotherLinkedHashSet));

        // Iterate using Iterator
        System.out.println("Iterating with Iterator:");
        Iterator<String> iterator = linkedHashSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateLinkedHashSetSpecificMethods(LinkedHashSet<String> linkedHashSet) {
        System.out.println("LinkedHashSet Specific Methods:");

        // Add element and observe behavior
        boolean isAdded = linkedHashSet.add("Apple"); // "Apple" already exists
        System.out.println("Is 'Apple' added again? " + isAdded);

        // Calculate hash code of the LinkedHashSet
        System.out.println("LinkedHashSet hash code: " + linkedHashSet.hashCode());

        // Size of the LinkedHashSet after operations
        System.out.println("Final size of the LinkedHashSet: " + linkedHashSet.size());
        System.out.println(); // Empty line for better readability
    }
}
