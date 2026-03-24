import java.util.*;

public class LinkedListDataStructure {
    public static void main(String[] args) {
        // Create a LinkedList
        LinkedList<String> linkedList = new LinkedList<>();

        // Add elements
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Cherry");

        // Demonstrate basic operations
        demonstrateBasicOperations(linkedList);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(linkedList);

        // Demonstrate additional LinkedList-specific methods
        demonstrateLinkedListSpecificMethods(linkedList);
    }

    private static void demonstrateBasicOperations(LinkedList<String> linkedList) {
        System.out.println("Basic LinkedList Operations:");

        // Access the first element without removing it
        System.out.println("First element: " + linkedList.getFirst());

        // Access the last element without removing it
        System.out.println("Last element: " + linkedList.getLast());

        // Check size
        System.out.println("Size of the list: " + linkedList.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + linkedList.contains("Banana"));

        // Remove the first element
        System.out.println("Removed first element: " + linkedList.removeFirst());
        System.out.println("List after removeFirst: " + linkedList);

        // Remove the last element
        System.out.println("Removed last element: " + linkedList.removeLast());
        System.out.println("List after removeLast: " + linkedList);

        // Iterate over elements
        System.out.println("LinkedList elements:");
        for (String fruit : linkedList) {
            System.out.println(fruit);
        }

        // Clear the list
        linkedList.clear();
        System.out.println("Is list empty? " + linkedList.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(LinkedList<String> linkedList) {
        System.out.println("Advanced LinkedList Operations:");

        // Add elements again for demonstration
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Cherry");
        linkedList.add("Date");
        linkedList.add("Elderberry");

        // Search for an element (index of element)
        int position = linkedList.indexOf("Cherry");
        if (position != -1) {
            System.out.println("Cherry is at position: " + position);
        } else {
            System.out.println("Cherry is not in the list.");
        }

        // Replace an element (set method)
        linkedList.set(linkedList.size() - 2, "Coconut");
        System.out.println("List after replacing second-to-last element: " + linkedList);

        // Convert LinkedList to array
        Object[] array = linkedList.toArray();
        System.out.println("Array from LinkedList: " + Arrays.toString(array));

        // Check equality with another LinkedList
        LinkedList<String> anotherList = new LinkedList<>(
                Arrays.asList("Apple", "Banana", "Coconut", "Date", "Elderberry"));
        System.out.println("Lists are equal: " + linkedList.equals(anotherList));

        // Reverse the LinkedList
        Collections.reverse(linkedList);
        System.out.println("Reversed LinkedList: " + linkedList);

        // Iterate using ListIterator
        System.out.println("Iterating with ListIterator (reverse order):");
        ListIterator<String> listIterator = linkedList.listIterator(linkedList.size());
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateLinkedListSpecificMethods(LinkedList<String> linkedList) {
        System.out.println("LinkedList Specific Methods:");

        // Add element at the first position
        linkedList.addFirst("Fig");
        System.out.println("List after addFirst: " + linkedList);

        // Add element at the last position
        linkedList.addLast("Grapes");
        System.out.println("List after addLast: " + linkedList);

        // Remove first element (returns and removes)
        String removedFirst = linkedList.removeFirst();
        System.out.println("Removed first element: " + removedFirst);
        System.out.println("List after removeFirst: " + linkedList);

        // Remove last element (returns and removes)
        String removedLast = linkedList.removeLast();
        System.out.println("Removed last element: " + removedLast);
        System.out.println("List after removeLast: " + linkedList);

        // Peek first element (does not remove)
        String peekFirst = linkedList.peekFirst();
        System.out.println("First element (peekFirst): " + peekFirst);

        // Peek last element (does not remove)
        String peekLast = linkedList.peekLast();
        System.out.println("Last element (peekLast): " + peekLast);

        // Poll first element (removes and returns null if empty)
        String polledFirst = linkedList.pollFirst();
        System.out.println("Polled first element: " + polledFirst);
        System.out.println("List after pollFirst: " + linkedList);

        // Poll last element (removes and returns null if empty)
        String polledLast = linkedList.pollLast();
        System.out.println("Polled last element: " + polledLast);
        System.out.println("List after pollLast: " + linkedList);

        // Check if list is empty
        boolean isEmpty = linkedList.isEmpty();
        System.out.println("Is the list empty? " + isEmpty);

        System.out.println(); // Empty line for better readability
    }
}
