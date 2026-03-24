public class DoubleDataType {
    public static void main(String[] args) {
        // Print range of double type
        System.out.println("Double range: " + Double.MIN_VALUE + " to " + Double.MAX_VALUE);
        System.out.println(); // Print an empty line for better readability

        // Initialize a double value
        double doubleValue = 3.14; // A double value

        // Demonstrate arithmetic operations
        demonstrateArithmeticOperations(doubleValue);

        // Demonstrate relational operations
        demonstrateRelationalOperations(doubleValue);

        // Demonstrate type casting
        demonstrateTypeCasting(doubleValue);

        // Demonstrate precision and rounding issues
        demonstratePrecisionIssues();
    }

    // Method to demonstrate arithmetic operations on double type
    private static void demonstrateArithmeticOperations(double doubleValue) {
        System.out.println("Arithmetic Operations:");
        // Addition of doubleValue and itself
        System.out.println("Addition: " + (doubleValue + doubleValue));

        // Subtraction of doubleValue from itself
        System.out.println("Subtraction: " + (doubleValue - doubleValue));

        // Multiplication of doubleValue and itself
        System.out.println("Multiplication: " + (doubleValue * doubleValue));

        // Division of doubleValue by itself
        System.out.println("Division: " + (doubleValue / doubleValue));

        // Modulo operation (remainder of doubleValue divided by itself)
        System.out.println("Modulo: " + (doubleValue % doubleValue));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations on double
    private static void demonstrateRelationalOperations(double doubleValue) {
        System.out.println("Relational Operations:");
        // Check if doubleValue is equal to itself
        System.out.println("Equal to: " + (doubleValue == doubleValue));

        // Check if doubleValue is not equal to itself
        System.out.println("Not equal to: " + (doubleValue != doubleValue));

        // Check if doubleValue is greater than itself
        System.out.println("Greater than: " + (doubleValue > doubleValue));

        // Check if doubleValue is less than itself
        System.out.println("Less than: " + (doubleValue < doubleValue));

        // Check if doubleValue is greater than or equal to itself
        System.out.println("Greater than or equal to: " + (doubleValue >= doubleValue));

        // Check if doubleValue is less than or equal to itself
        System.out.println("Less than or equal to: " + (doubleValue <= doubleValue));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate type casting for double
    private static void demonstrateTypeCasting(double doubleValue) {
        System.out.println("Type Casting:");
        // Implicit casting (double to float) is done automatically by Java
        float implicitCast = (float) doubleValue;
        System.out.println("Implicit cast from double to float: " + implicitCast);

        // Explicit casting (float to double) requires no special syntax as double has
        // higher precision
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate precision and rounding issues in floating-point types
    private static void demonstratePrecisionIssues() {
        System.out.println("Precision and Rounding Issues:");
        // Precision issue example
        double result = 0.1 + 0.2;
        System.out.println("0.1 + 0.2 == 0.3? " + (result == 0.3)); // Output: false due to precision issues

        // Rounding example
        double largeValue = 12345.6789;
        System.out.println("Original large value: " + largeValue);
        System.out.println("Rounded value to 2 decimal places: " + Math.round(largeValue * 100) / 100.0);
        System.out.println(); // Empty line for separation
    }
}
