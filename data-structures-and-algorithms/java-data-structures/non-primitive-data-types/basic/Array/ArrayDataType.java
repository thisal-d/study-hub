import java.util.Arrays;
import java.util.stream.Stream;

public class ArrayDataType {
    public static void main(String[] args) {
        // Initialize arrays
        int[] intArray = { 1, 2, 3, 4, 5 };
        String[] strArray = { "Hello", "World", "Java", "Programming" };

        int[] emptyArray = new int[5];
        // Initialize empty array
        emptyArray[0] = 200;
        emptyArray[1] = 45;
        emptyArray[2] = 20450;
        emptyArray[3] = 12;
        emptyArray[4] = 45;

        // Display array characteristics
        displayArrayCharacteristics(intArray);

        // Demonstrate array operations
        demonstrateArrayOperations(intArray, strArray);

        // Demonstrate static methods
        demonstrateStaticMethods(intArray);

        // Demonstrate instance methods
        demonstrateInstanceMethods(intArray);
    }

    // Method to display characteristics of arrays
    private static void displayArrayCharacteristics(int[] array) {
        System.out.println("Array Characteristics:");
        System.out.println("Length of array: " + array.length);
        System.out.println("First element (index 0): " + array[0]);
        System.out.println("Default value of empty array: " + Arrays.toString(new int[5]));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate various array operations
    private static void demonstrateArrayOperations(int[] intArray, String[] strArray) {
        System.out.println("Array Operations:");

        // Accessing elements
        System.out.println("Element at index 2 in intArray: " + intArray[2]);

        // Iterating over arrays
        System.out.println("Iterating over intArray using for-each loop:");
        for (int num : intArray) {
            System.out.println(num);
        }

        // Initializing arrays
        System.out.println("Empty array: " + Arrays.toString(new int[5]));

        // Demonstrating multidimensional arrays
        int[][] multiArray = { { 1, 2 }, { 3, 4, 5 } };
        System.out.println("Multidimensional array representation: " + Arrays.deepToString(multiArray));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate static methods
    private static void demonstrateStaticMethods(int[] array) {
        System.out.println("Static Array Methods:");

        // Arrays.copyOf
        int[] copiedArray = Arrays.copyOf(array, 10);
        System.out.println("Copied array with length 10: " + Arrays.toString(copiedArray));

        // Arrays.fill
        Arrays.fill(copiedArray, 5);
        System.out.println("Array after filling with 5: " + Arrays.toString(copiedArray));

        // Arrays.sort
        Arrays.sort(array);
        System.out.println("Sorted array: " + Arrays.toString(array));

        // Arrays.binarySearch
        int searchIndex = Arrays.binarySearch(array, 3);
        System.out.println("Index of 3 in sorted array: " + searchIndex);

        // Arrays.stream
        Stream<Integer> arrayStream = Arrays.stream(array).boxed();
        System.out.println("Stream of array elements: ");
        arrayStream.forEach(System.out::println);

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate instance methods
    private static void demonstrateInstanceMethods(int[] array) {
        System.out.println("Instance Array Methods:");

        // Length of array
        System.out.println("Length of array: " + array.length);

        // Cloning an array
        int[] clonedArray = array.clone();
        System.out.println("Cloned array: " + Arrays.toString(clonedArray));

        // Hash code of the array
        System.out.println("Hash code of array: " + array.hashCode());

        System.out.println(); // Empty line for separation
    }
}
