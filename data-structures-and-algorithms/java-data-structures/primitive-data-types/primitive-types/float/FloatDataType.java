public class FloatDataType {
    public static void main(String[] args) {
        // Print range of float type
        System.out.println("Float range: " + Float.MIN_VALUE + " to " + Float.MAX_VALUE);
        System.out.println(); // Print an empty line for better readability

        // Initialize a float value
        float floatValue = 3.14f; // A float value

        // Demonstrate arithmetic operations
        demonstrateArithmeticOperations(floatValue);

        // Demonstrate relational operations
        demonstrateRelationalOperations(floatValue);

        // Demonstrate type casting
        demonstrateTypeCasting(floatValue);

        // Demonstrate precision and rounding issues
        demonstratePrecisionIssues();
    }

    // Method to demonstrate arithmetic operations on float type
    private static void demonstrateArithmeticOperations(float floatValue) {
        System.out.println("Arithmetic Operations:");
        // Addition of floatValue and itself
        System.out.println("Addition: " + (floatValue + floatValue));

        // Subtraction of floatValue from itself
        System.out.println("Subtraction: " + (floatValue - floatValue));

        // Multiplication of floatValue and itself
        System.out.println("Multiplication: " + (floatValue * floatValue));

        // Division of floatValue by itself
        System.out.println("Division: " + (floatValue / floatValue));

        // Modulo operation (remainder of floatValue divided by itself)
        System.out.println("Modulo: " + (floatValue % floatValue));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations on float
    private static void demonstrateRelationalOperations(float floatValue) {
        System.out.println("Relational Operations:");
        // Check if floatValue is equal to itself
        System.out.println("Equal to: " + (floatValue == floatValue));

        // Check if floatValue is not equal to itself
        System.out.println("Not equal to: " + (floatValue != floatValue));

        // Check if floatValue is greater than itself
        System.out.println("Greater than: " + (floatValue > floatValue));

        // Check if floatValue is less than itself
        System.out.println("Less than: " + (floatValue < floatValue));

        // Check if floatValue is greater than or equal to itself
        System.out.println("Greater than or equal to: " + (floatValue >= floatValue));

        // Check if floatValue is less than or equal to itself
        System.out.println("Less than or equal to: " + (floatValue <= floatValue));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate type casting for float
    private static void demonstrateTypeCasting(float floatValue) {
        System.out.println("Type Casting:");
        // Implicit casting (float to double) is done automatically by Java
        double implicitCast = floatValue;
        System.out.println("Implicit cast from float to double: " + implicitCast);

        // Explicit casting (double to float) requires type casting because it may
        // result in precision loss
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate precision and rounding issues in floating-point types
    private static void demonstratePrecisionIssues() {
        System.out.println("Precision and Rounding Issues:");
        // Precision issue example
        float result = 0.1f + 0.2f;
        System.out.println("0.1 + 0.2 == 0.3? " + (result == 0.3f)); // Output: false due to precision issues

        // Rounding example
        float largeValue = 12345.6789f;
        System.out.println("Original large value: " + largeValue);
        System.out.println("Rounded value to 2 decimal places: " + Math.round(largeValue * 100) / 100.0f);
        System.out.println(); // Empty line for separation
    }
}
