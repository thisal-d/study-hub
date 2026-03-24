import java.util.*;

public class VectorDataStructure {
    public static void main(String[] args) {
        // Create a Vector
        Vector<String> vector = new Vector<>();

        // Add elements
        vector.add("Apple");
        vector.add("Banana");
        vector.add("Cherry");

        // Demonstrate basic operations
        demonstrateBasicOperations(vector);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(vector);

        // Demonstrate additional Vector-specific methods
        demonstrateVectorSpecificMethods(vector);
    }

    private static void demonstrateBasicOperations(Vector<String> vector) {
        System.out.println("Basic Vector Operations:");

        // Access the first element
        System.out.println("First element: " + vector.firstElement());

        // Access the last element
        System.out.println("Last element: " + vector.lastElement());

        // Check size
        System.out.println("Size of the vector: " + vector.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + vector.contains("Banana"));

        // Remove an element
        System.out.println("Removed element: " + vector.remove("Cherry"));
        System.out.println("Vector after remove: " + vector);

        // Iterate over elements
        System.out.println("Vector elements:");
        for (String fruit : vector) {
            System.out.println(fruit);
        }

        // Clear the vector
        vector.clear();
        System.out.println("Is vector empty? " + vector.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(Vector<String> vector) {
        System.out.println("Advanced Vector Operations:");

        // Add elements again for demonstration
        vector.add("Apple");
        vector.add("Banana");
        vector.add("Cherry");
        vector.add("Date");
        vector.add("Elderberry");

        // Search for an element (index of element)
        int position = vector.indexOf("Cherry");
        if (position != -1) {
            System.out.println("Cherry is at position: " + position);
        } else {
            System.out.println("Cherry is not in the vector.");
        }

        // Replace an element (set method)
        vector.set(vector.size() - 2, "Coconut");
        System.out.println("Vector after replacing second-to-last element: " + vector);

        // Convert Vector to array
        Object[] array = vector.toArray();
        System.out.println("Array from Vector: " + Arrays.toString(array));

        // Check equality with another vector
        Vector<String> anotherVector = new Vector<>(Arrays.asList("Apple", "Banana", "Coconut", "Date", "Elderberry"));
        System.out.println("Vectors are equal: " + vector.equals(anotherVector));

        // Reverse the Vector
        Collections.reverse(vector);
        System.out.println("Reversed Vector: " + vector);

        // Iterate using ListIterator
        System.out.println("Iterating with ListIterator (reverse order):");
        ListIterator<String> listIterator = vector.listIterator(vector.size());
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateVectorSpecificMethods(Vector<String> vector) {
        System.out.println("Vector Specific Methods:");

        // Ensure capacity
        vector.ensureCapacity(20);
        System.out.println("Capacity after ensuring space for 20 elements: " + vector.capacity());

        // Trim to size
        vector.trimToSize();
        System.out.println("Capacity after trimming to size: " + vector.capacity());

        // Add another element for demonstration
        vector.add("Fig");
        System.out.println("Vector after adding 'Fig': " + vector);

        // Access first element
        String firstElement = vector.firstElement();
        System.out.println("First element (firstElement): " + firstElement);

        // Access last element
        String lastElement = vector.lastElement();
        System.out.println("Last element (lastElement): " + lastElement);

        // Check capacity
        int capacity = vector.capacity();
        System.out.println("Current capacity: " + capacity);

        System.out.println(); // Empty line for better readability
    }
}
