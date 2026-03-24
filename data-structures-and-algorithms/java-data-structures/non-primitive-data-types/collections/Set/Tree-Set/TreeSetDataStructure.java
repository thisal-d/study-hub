import java.util.*;

public class TreeSetDataStructure {
    public static void main(String[] args) {
        // Create a TreeSet
        TreeSet<String> treeSet = new TreeSet<>();

        // Add elements
        treeSet.add("Apple");
        treeSet.add("Banana");
        treeSet.add("Cherry");
        treeSet.add("Date");
        treeSet.add("Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(treeSet);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(treeSet);

        // Demonstrate TreeSet specific methods
        demonstrateTreeSetSpecificMethods(treeSet);
    }

    public static void demonstrateBasicOperations(TreeSet<String> treeSet) {
        System.out.println("Basic TreeSet Operations:");

        // Check size
        System.out.println("Size of the TreeSet: " + treeSet.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + treeSet.contains("Banana"));

        // Remove an element
        System.out.println("Removed element 'Cherry': " + treeSet.remove("Cherry"));
        System.out.println("TreeSet after removal: " + treeSet);

        // Iterate over elements (in sorted order)
        System.out.println("TreeSet elements:");
        for (String fruit : treeSet) {
            System.out.println(fruit);
        }

        // Clear the TreeSet
        treeSet.clear();
        System.out.println("Is TreeSet empty? " + treeSet.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(TreeSet<String> treeSet) {
        System.out.println("Advanced TreeSet Operations:");

        // Add elements again for demonstration
        treeSet.add("Apple");
        treeSet.add("Banana");
        treeSet.add("Cherry");
        treeSet.add("Date");
        treeSet.add("Elderberry");

        // Check if the TreeSet contains all elements of another collection
        Set<String> subset = new TreeSet<>(Arrays.asList("Banana", "Cherry"));
        System.out.println("TreeSet contains all elements of subset: " + treeSet.containsAll(subset));

        // Remove all elements in another collection
        treeSet.removeAll(subset);
        System.out.println("TreeSet after removing elements of subset: " + treeSet);

        // Retain only elements in another collection
        Set<String> retainSet = new TreeSet<>(Arrays.asList("Apple", "Date"));
        treeSet.retainAll(retainSet);
        System.out.println("TreeSet after retaining elements of retainSet: " + treeSet);

        // Convert TreeSet to array
        Object[] array = treeSet.toArray();
        System.out.println("Array from TreeSet: " + Arrays.toString(array));

        // Check equality with another TreeSet
        Set<String> anotherTreeSet = new TreeSet<>(Arrays.asList("Apple", "Date"));
        System.out.println("TreeSets are equal: " + treeSet.equals(anotherTreeSet));

        // Iterate using Iterator
        System.out.println("Iterating with Iterator:");
        Iterator<String> iterator = treeSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateTreeSetSpecificMethods(TreeSet<String> treeSet) {
        System.out.println("TreeSet Specific Methods:");

        // Add element and observe behavior
        boolean isAdded = treeSet.add("Apple"); // "Apple" already exists
        System.out.println("Is 'Apple' added again? " + isAdded);

        // Calculate hash code of the TreeSet
        System.out.println("TreeSet hash code: " + treeSet.hashCode());

        // Size of the TreeSet after operations
        System.out.println("Final size of the TreeSet: " + treeSet.size());

        // First (lowest) element in the TreeSet
        System.out.println("First element: " + treeSet.first());

        // Last (highest) element in the TreeSet
        System.out.println("Last element: " + treeSet.last());

        // Element strictly less than "Banana"
        System.out.println("Element strictly less than 'Banana': " + treeSet.lower("Banana"));

        // Least element greater than or equal to "Banana"
        System.out.println("Least element greater than or equal to 'Banana': " + treeSet.ceiling("Banana"));

        // Poll the first (lowest) element
        System.out.println("Poll first element: " + treeSet.pollFirst());

        // Poll the last (highest) element
        System.out.println("Poll last element: " + treeSet.pollLast());

        System.out.println(); // Empty line for better readability
    }
}
