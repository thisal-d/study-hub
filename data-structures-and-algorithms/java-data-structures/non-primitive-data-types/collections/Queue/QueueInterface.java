import java.util.*;

public class QueueInterface {
    public static void main(String[] args) {
        // Create a queue
        Queue<String> queue = new LinkedList<>();

        // Demonstrate basic operations
        demonstrateBasicOperations(queue);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(queue);

        // Demonstrate additional operations
        demonstrateAllMethods(queue);
    }

    private static void demonstrateBasicOperations(Queue<String> queue) {
        System.out.println("Basic Queue Operations:");

        // Add elements
        queue.offer("Apple");
        queue.offer("Banana");
        queue.offer("Cherry");

        // Peek at the front element
        System.out.println("Front element (peek): " + queue.peek());

        // Check size
        System.out.println("Size of the queue: " + queue.size());

        // Remove an element
        System.out.println("Removed element (poll): " + queue.poll());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + queue.contains("Banana"));

        // Iterate over elements
        System.out.println("Queue elements:");
        for (String fruit : queue) {
            System.out.println(fruit);
        }

        // Clear the queue
        queue.clear();
        System.out.println("Is queue empty? " + queue.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(Queue<String> queue) {
        System.out.println("Advanced Queue Operations:");

        // Add elements again for demonstration
        queue.offer("Apple");
        queue.offer("Banana");
        queue.offer("Cherry");
        queue.offer("Date");

        // Using forEach to iterate
        System.out.println("Queue elements (using forEach):");
        queue.forEach(System.out::println);

        // Using an iterator
        System.out.println("Queue elements (using iterator):");
        Iterator<String> iterator = queue.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Check the head element without removing
        System.out.println("Head element (element method): " + queue.element());

        // Remove elements using remove()
        try {
            while (true) {
                System.out.println("Removed (using remove): " + queue.remove());
            }
        } catch (NoSuchElementException e) {
            System.out.println("Queue is empty!");
        }

        System.out.println("Is queue empty after removing all elements? " + queue.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAllMethods(Queue<String> queue) {
        System.out.println("Demonstrating All Methods:");

        // Add elements using add() (throws exception on failure)
        queue.add("Mango");
        queue.add("Pineapple");

        // Convert to array
        Object[] array = queue.toArray();
        System.out.println("Queue as array: " + Arrays.toString(array));

        // Clear and check isEmpty
        queue.clear();
        System.out.println("Cleared queue. Is empty? " + queue.isEmpty());
        System.out.println(); // Empty line for better readability
    }
}
