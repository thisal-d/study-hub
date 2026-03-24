import java.util.*;

public class DequeInterface {
    public static void main(String[] args) {
        // Create a deque
        Deque<String> deque = new LinkedList<>();

        // Demonstrate basic operations
        demonstrateBasicOperations(deque);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(deque);

        // Demonstrate additional operations
        demonstrateAllMethods(deque);
    }

    private static void demonstrateBasicOperations(Deque<String> deque) {
        System.out.println("Basic Deque Operations:");

        // Add elements at the end
        deque.offerLast("Apple");
        deque.offerLast("Banana");
        deque.offerLast("Cherry");

        // Peek at the front element
        System.out.println("Front element (peekFirst): " + deque.peekFirst());

        // Peek at the last element
        System.out.println("Last element (peekLast): " + deque.peekLast());

        // Check size
        System.out.println("Size of the deque: " + deque.size());

        // Remove an element from the front
        System.out.println("Removed element (pollFirst): " + deque.pollFirst());

        // Remove an element from the end
        System.out.println("Removed element (pollLast): " + deque.pollLast());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + deque.contains("Banana"));

        // Iterate over elements
        System.out.println("Deque elements:");
        for (String fruit : deque) {
            System.out.println(fruit);
        }

        // Clear the deque
        deque.clear();
        System.out.println("Is deque empty? " + deque.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(Deque<String> deque) {
        System.out.println("Advanced Deque Operations:");

        // Add elements again for demonstration
        deque.offerLast("Apple");
        deque.offerLast("Banana");
        deque.offerLast("Cherry");
        deque.offerLast("Date");

        // Using forEach to iterate
        System.out.println("Deque elements (using forEach):");
        deque.forEach(System.out::println);

        // Using an iterator
        System.out.println("Deque elements (using iterator):");
        Iterator<String> iterator = deque.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Using descending iterator
        System.out.println("Deque elements (using descending iterator):");
        Iterator<String> descendingIterator = deque.descendingIterator();
        while (descendingIterator.hasNext()) {
            System.out.println(descendingIterator.next());
        }

        // Access head and tail without removal
        System.out.println("Head element (getFirst): " + deque.getFirst());
        System.out.println("Tail element (getLast): " + deque.getLast());

        // Remove elements using removeFirst and removeLast
        try {
            while (!deque.isEmpty()) {
                System.out.println("Removed from front (removeFirst): " + deque.removeFirst());
                if (!deque.isEmpty()) {
                    System.out.println("Removed from end (removeLast): " + deque.removeLast());
                }
            }
        } catch (NoSuchElementException e) {
            System.out.println("Deque is empty!");
        }

        System.out.println("Is deque empty after removing all elements? " + deque.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAllMethods(Deque<String> deque) {
        System.out.println("Demonstrating All Methods:");

        // Add elements at both ends
        deque.addFirst("Mango");
        deque.addLast("Pineapple");

        // Convert to array
        Object[] array = deque.toArray();
        System.out.println("Deque as array: " + Arrays.toString(array));

        // Remove specific elements
        deque.remove("Mango");
        System.out.println("After removing 'Mango': " + deque);

        // Clear and check isEmpty
        deque.clear();
        System.out.println("Cleared deque. Is empty? " + deque.isEmpty());
        System.out.println(); // Empty line for better readability
    }
}
