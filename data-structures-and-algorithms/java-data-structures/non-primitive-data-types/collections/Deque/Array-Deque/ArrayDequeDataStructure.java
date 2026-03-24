import java.util.*;

public class ArrayDequeDataStructure {
    public static void main(String[] args) {
        // Create an ArrayDeque
        ArrayDeque<String> arrayDeque = new ArrayDeque<>();

        // Add elements
        arrayDeque.offer("Apple");
        arrayDeque.offer("Banana");
        arrayDeque.offer("Cherry");
        arrayDeque.offer("Date");
        arrayDeque.offer("Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(arrayDeque);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(arrayDeque);

        // Demonstrate ArrayDeque specific methods
        demonstrateArrayDequeSpecificMethods(arrayDeque);
    }

    public static void demonstrateBasicOperations(ArrayDeque<String> arrayDeque) {
        System.out.println("Basic ArrayDeque Operations:");

        // Check size
        System.out.println("Size of the ArrayDeque: " + arrayDeque.size());

        // Access and remove elements (ArrayDeque does not allow direct access by index)
        System.out.println("Poll the first element: " + arrayDeque.pollFirst());
        System.out.println("Poll the last element: " + arrayDeque.pollLast());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + arrayDeque.contains("Banana"));

        // Iterate over elements
        System.out.println("ArrayDeque elements:");
        for (String fruit : arrayDeque) {
            System.out.println(fruit);
        }

        // Clear the ArrayDeque
        arrayDeque.clear();
        System.out.println("Is ArrayDeque empty? " + arrayDeque.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(ArrayDeque<String> arrayDeque) {
        System.out.println("Advanced ArrayDeque Operations:");

        // Add elements again for demonstration
        arrayDeque.offer("Apple");
        arrayDeque.offer("Banana");
        arrayDeque.offer("Cherry");
        arrayDeque.offer("Date");
        arrayDeque.offer("Elderberry");

        // Peek the first and last elements
        System.out.println("First element: " + arrayDeque.peekFirst());
        System.out.println("Last element: " + arrayDeque.peekLast());

        // Remove specific element
        arrayDeque.remove("Banana");
        System.out.println("ArrayDeque after removing 'Banana': " + arrayDeque);

        // Convert ArrayDeque to array
        Object[] array = arrayDeque.toArray();
        System.out.println("Array from ArrayDeque: " + Arrays.toString(array));

        // Reverse the ArrayDeque (not directly supported, but can be done manually)
        List<String> list = new ArrayList<>(arrayDeque);
        Collections.reverse(list);
        System.out.println("Reversed ArrayDeque (using List): " + list);

        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateArrayDequeSpecificMethods(ArrayDeque<String> arrayDeque) {
        System.out.println("ArrayDeque Specific Methods:");

        // Add elements again for demonstration
        arrayDeque.offer("Fig");

        // Use the addFirst() and addLast() methods
        arrayDeque.addFirst("Grapes");
        arrayDeque.addLast("Honeydew");

        System.out.println("ArrayDeque after addFirst() and addLast(): " + arrayDeque);

        // Use the offerFirst() and offerLast() methods
        arrayDeque.offerFirst("Indian Fig");
        arrayDeque.offerLast("Jackfruit");

        System.out.println("ArrayDeque after offerFirst() and offerLast(): " + arrayDeque);

        // Peek the first and last elements using peekFirst() and peekLast()
        System.out.println("First element using peekFirst(): " + arrayDeque.peekFirst());
        System.out.println("Last element using peekLast(): " + arrayDeque.peekLast());

        // Remove the first and last elements using removeFirst() and removeLast()
        System.out.println("Removed first element using removeFirst(): " + arrayDeque.removeFirst());
        System.out.println("Removed last element using removeLast(): " + arrayDeque.removeLast());

        System.out.println("ArrayDeque after removing first and last elements: " + arrayDeque);
        System.out.println(); // Empty line for better readability
    }
}
