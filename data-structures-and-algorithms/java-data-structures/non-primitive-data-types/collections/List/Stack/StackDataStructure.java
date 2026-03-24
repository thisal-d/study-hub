import java.util.*;

public class StackDataStructure {
    public static void main(String[] args) {
        // Create a stack
        Stack<String> stack = new Stack<>();

        // Add elements
        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");

        // Demonstrate basic operations
        demonstrateBasicOperations(stack);

        // Demonstrate advanced operations
        demonstrateAdvancedOperations(stack);

        // Demonstrate additional stack-specific methods
        demonstrateStackSpecificMethods(stack);
    }

    private static void demonstrateBasicOperations(Stack<String> stack) {
        System.out.println("Basic Stack Operations:");

        // Access the top element without removing it
        System.out.println("Top element: " + stack.peek());

        // Check size
        System.out.println("Size of the stack: " + stack.size());

        // Check if an element exists
        System.out.println("Contains 'Banana': " + stack.contains("Banana"));

        // Remove the top element
        System.out.println("Popped element: " + stack.pop());
        System.out.println("Stack after pop: " + stack);

        // Iterate over elements
        System.out.println("Stack elements:");
        for (String fruit : stack) {
            System.out.println(fruit);
        }

        // Clear the stack
        stack.clear();
        System.out.println("Is stack empty? " + stack.isEmpty());
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateAdvancedOperations(Stack<String> stack) {
        System.out.println("Advanced Stack Operations:");

        // Add elements again for demonstration
        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");
        stack.push("Date");
        stack.push("Elderberry");

        // Search for an element
        int position = stack.search("Cherry");
        if (position != -1) {
            System.out.println("Cherry is at position: " + position);
        } else {
            System.out.println("Cherry is not in the stack.");
        }

        // Replace an element
        stack.set(stack.size() - 2, "Coconut");
        System.out.println("Stack after replacing second-to-top element: " + stack);

        // Convert stack to array
        Object[] array = stack.toArray();
        System.out.println("Array from stack: " + Arrays.toString(array));

        // Check equality with another stack
        Stack<String> anotherStack = new Stack<>();
        anotherStack.addAll(Arrays.asList("Apple", "Banana", "Coconut", "Date", "Elderberry"));
        System.out.println("Stacks are equal: " + stack.equals(anotherStack));

        // Sort the stack (convert to list, sort, then push back)
        List<String> tempList = new ArrayList<>(stack);
        tempList.sort(Comparator.naturalOrder());
        stack.clear();
        stack.addAll(tempList);
        System.out.println("Sorted stack: " + stack);

        // Iterate using Iterator
        System.out.println("Iterating with Iterator:");
        Iterator<String> iterator = stack.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Iterate using ListIterator
        System.out.println("Iterating with ListIterator (reverse order):");
        ListIterator<String> listIterator = stack.listIterator(stack.size());
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }
        System.out.println(); // Empty line for better readability
    }

    private static void demonstrateStackSpecificMethods(Stack<String> stack) {
        System.out.println("Stack Specific Methods:");

        // Push operation (already demonstrated above)
        stack.push("Fig");
        System.out.println("Stack after push: " + stack);

        // Pop operation (removes the top element)
        String poppedElement = stack.pop();
        System.out.println("Popped element: " + poppedElement);
        System.out.println("Stack after pop: " + stack);

        // Peek operation (view top element without removal)
        String topElement = stack.peek();
        System.out.println("Top element (peek): " + topElement);

        // Empty operation (check if stack is empty)
        boolean isEmpty = stack.empty();
        System.out.println("Is stack empty? " + isEmpty);

        // Search operation (find position of an element in stack)
        int position = stack.search("Banana");
        System.out.println("Position of 'Banana': " + position);

        System.out.println(); // Empty line for better readability
    }
}
