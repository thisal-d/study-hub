import java.util.*;

public class ListInterface {
    public static void main(String[] args) {
        // Create a list
        List<String> list = new ArrayList<>();

        // Add elements
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        // Demonstrate basic operations
        demonstrateBasicOperations(list);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(list);
    }

    private static void demonstrateBasicOperations(List<String> list) {
        System.out.println("Basic List Operations:");

        // Access elements
        System.out.println("Element at index 1: " + list.get(1));

        // Check size
        System.out.println("Size of the list: " + list.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + list.contains("Banana"));

        // Remove an element
        list.remove("Banana");
        System.out.println("List after removal: " + list);

        // Iterate over elements
        System.out.println("List elements:");
        for (String fruit : list) {
            System.out.println(fruit);
        }

        // Clear the list
        list.clear();
        System.out.println("Is list empty? " + list.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(List<String> list) {
        System.out.println("Advanced List Operations:");

        // Add elements again for demonstration
        list.addAll(Arrays.asList("Apple", "Banana", "Cherry", "Date", "Elderberry"));

        // Get sublist
        List<String> sublist = list.subList(1, 4);
        System.out.println("Sublist (index 1 to 3): " + sublist);

        // Replace an element
        list.set(2, "Coconut");
        System.out.println("List after replacing element at index 2: " + list);

        // Find index of an element
        System.out.println("Index of 'Coconut': " + list.indexOf("Coconut"));
        System.out.println("Last index of 'Apple': " + list.lastIndexOf("Apple"));

        // Convert list to array
        Object[] array = list.toArray();
        System.out.println("Array from list: " + Arrays.toString(array));

        // Check equality with another list
        List<String> anotherList = Arrays.asList("Apple", "Banana", "Coconut", "Date", "Elderberry");
        System.out.println("Lists are equal: " + list.equals(anotherList));

        // Calculate hash code
        System.out.println("List hash code: " + list.hashCode());

        // Sort the list
        list.sort(Comparator.naturalOrder());
        System.out.println("Sorted list: " + list);

        // Remove elements by condition
        list.removeIf(s -> s.startsWith("A"));
        System.out.println("List after removing elements starting with 'A': " + list);

        // Iterate using Iterator
        System.out.println("Iterating with Iterator:");
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Iterate using ListIterator
        System.out.println("Iterating with ListIterator (reverse order):");
        ListIterator<String> listIterator = list.listIterator(list.size());
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }
        System.out.println(); // Empty line for better readability
    }
}
