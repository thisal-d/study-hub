import java.util.*;

public class PriorityQueueDataStructure {
    public static void main(String[] args) {
        // Create a PriorityQueue
        PriorityQueue<String> priorityQueue = new PriorityQueue<>();

        // Add elements
        priorityQueue.offer("Apple");
        priorityQueue.offer("Banana");
        priorityQueue.offer("Cherry");
        priorityQueue.offer("Date");
        priorityQueue.offer("Elderberry");

        // Demonstrate basic operations
        demonstrateBasicOperations(priorityQueue);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(priorityQueue);

        // Demonstrate PriorityQueue specific methods
        demonstratePriorityQueueSpecificMethods(priorityQueue);
    }

    public static void demonstrateBasicOperations(PriorityQueue<String> priorityQueue) {
        System.out.println("Basic PriorityQueue Operations:");

        // Check size
        System.out.println("Size of the PriorityQueue: " + priorityQueue.size());

        // Access and remove elements (PriorityQueue does not allow direct access by
        // index)
        System.out.println("Poll the top element (highest priority): " + priorityQueue.poll());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + priorityQueue.contains("Banana"));

        // Iterate over elements
        System.out.println("PriorityQueue elements:");
        for (String fruit : priorityQueue) {
            System.out.println(fruit);
        }

        // Clear the PriorityQueue
        priorityQueue.clear();
        System.out.println("Is PriorityQueue empty? " + priorityQueue.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    public static void demonstrateAdvancedOperations(PriorityQueue<String> priorityQueue) {
        System.out.println("Advanced PriorityQueue Operations:");

        // Add elements again for demonstration
        priorityQueue.offer("Apple");
        priorityQueue.offer("Banana");
        priorityQueue.offer("Cherry");
        priorityQueue.offer("Date");
        priorityQueue.offer("Elderberry");

        // Peek the top element (highest priority)
        System.out.println("Top element (highest priority): " + priorityQueue.peek());

        // Remove specific element
        priorityQueue.remove("Banana");
        System.out.println("PriorityQueue after removing 'Banana': " + priorityQueue);

        // Convert PriorityQueue to array
        Object[] array = priorityQueue.toArray();
        System.out.println("Array from PriorityQueue: " + Arrays.toString(array));

        // Check equality with another PriorityQueue
        PriorityQueue<String> anotherPriorityQueue = new PriorityQueue<>(
                Arrays.asList("Apple", "Cherry", "Date", "Elderberry"));
        System.out.println("PriorityQueues are equal: " + priorityQueue.equals(anotherPriorityQueue));

        // Reverse the PriorityQueue (not directly supported, but can be done manually)
        List<String> list = new ArrayList<>(priorityQueue);
        Collections.reverse(list);
        System.out.println("Reversed PriorityQueue (using List): " + list);

        // Iterate using a custom comparator (in reverse order)
        System.out.println("Iterating with custom comparator (reverse order):");
        PriorityQueue<String> reversePriorityQueue = new PriorityQueue<>(Collections.reverseOrder());
        reversePriorityQueue.addAll(priorityQueue);
        while (!reversePriorityQueue.isEmpty()) {
            System.out.println(reversePriorityQueue.poll());
        }
        System.out.println(); // Empty line for better readability
    }

    public static void demonstratePriorityQueueSpecificMethods(PriorityQueue<String> priorityQueue) {
        System.out.println("PriorityQueue Specific Methods:");

        // Ensure capacity (not directly available in PriorityQueue)
        // PriorityQueue does not have a method like ensureCapacity() in ArrayList
        System.out.println("Ensure capacity is not directly supported by PriorityQueue.");

        // Add another element for demonstration
        priorityQueue.offer("Fig");
        System.out.println("PriorityQueue after adding 'Fig': " + priorityQueue);
        System.out.println(); // Empty line for better readability
    }
}
