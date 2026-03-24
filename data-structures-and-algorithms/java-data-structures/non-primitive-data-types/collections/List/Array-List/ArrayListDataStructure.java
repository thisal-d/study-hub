import java.util.*;

public class ArrayListDataStructure {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> arrayList = new ArrayList<>();

        // Add elements
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        arrayList.add("Date");
        arrayList.add("Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(arrayList);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(arrayList);

        // Demonstrate ArrayList specific methods
        demonstrateArrayListSpecificMethods(arrayList);
    }

    public static void demonstrateBasicOperations(ArrayList<String> arrayList) {
        System.out.println("Basic ArrayList Operations:");

        // Check size
        System.out.println("Size of the ArrayList: " + arrayList.size());

        // Access an element
        System.out.println("Element at index 2: " + arrayList.get(2));

        // Check if an element exists
        System.out.println("Contains 'Banana': " + arrayList.contains("Banana"));

        // Remove an element
        System.out.println("Removed element: " + arrayList.remove("Cherry"));
        System.out.println("ArrayList after remove: " + arrayList);

        // Iterate over elements
        System.out.println("ArrayList elements:");
        for (String fruit : arrayList) {
            System.out.println(fruit);
        }

        // Clear the ArrayList
        arrayList.clear();
        System.out.println("Is ArrayList empty? " + arrayList.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(ArrayList<String> arrayList) {
        System.out.println("Advanced ArrayList Operations:");

        // Add elements again for demonstration
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        arrayList.add("Date");
        arrayList.add("Elderberry");

        // Search for an element
        int position = arrayList.indexOf("Banana");
        if (position != -1) {
            System.out.println("Banana is at position: " + position);
        } else {
            System.out.println("Banana is not in the ArrayList.");
        }

        // Replace an element
        arrayList.set(arrayList.size() - 2, "Coconut");
        System.out.println("ArrayList after replacing second-to-last element: " + arrayList);

        // Convert ArrayList to array
        Object[] array = arrayList.toArray();
        System.out.println("Array from ArrayList: " + Arrays.toString(array));

        // Check equality with another ArrayList
        ArrayList<String> anotherArrayList = new ArrayList<>(
                Arrays.asList("Apple", "Banana", "Coconut", "Date", "Elderberry"));
        System.out.println("ArrayLists are equal: " + arrayList.equals(anotherArrayList));

        // Reverse the ArrayList
        Collections.reverse(arrayList);
        System.out.println("Reversed ArrayList: " + arrayList);

        // Iterate using ListIterator
        System.out.println("Iterating with ListIterator (reverse order):");
        ListIterator<String> listIterator = arrayList.listIterator(arrayList.size());
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateArrayListSpecificMethods(ArrayList<String> arrayList) {
        System.out.println("ArrayList Specific Methods:");

        // Ensure capacity
        arrayList.ensureCapacity(50);
        System.out.println("Capacity after ensuring space for 50 elements: " + arrayList.size());

        // Trim to size
        arrayList.trimToSize();
        System.out.println("Capacity after trimming to size: " + arrayList.size());

        // Add another element for demonstration
        arrayList.add("Fig");
        System.out.println("ArrayList after adding 'Fig': " + arrayList);
        System.out.println(); // Empty line for better readability
    }
}
