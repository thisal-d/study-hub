public class IntDataTypes {
    public static void main(String[] args) {
        // Print ranges of integer types (Byte, Short, Int, Long)
        System.out.println("Byte range: " + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE);
        System.out.println("Short range: " + Short.MIN_VALUE + " to " + Short.MAX_VALUE);
        System.out.println("Int range: " + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE);
        System.out.println("Long range: " + Long.MIN_VALUE + " to " + Long.MAX_VALUE);
        System.out.println(); // Print an empty line for better readability

        // Initialize integer variables for different data types
        byte byteValue = 10; // A byte value
        short shortValue = 32500; // A short value
        int intValue = 2147483640; // An int value
        long longValue = 1234567890123456789L; // A long value with 'L' at the end to indicate it's a long literal

        // Demonstrate arithmetic operations
        demonstrateArithmeticOperations(intValue, byteValue, shortValue, longValue);

        // Demonstrate relational operations
        demonstrateRelationalOperations(intValue, longValue);

        // Demonstrate type casting
        demonstrateTypeCasting(byteValue, intValue);

        // Demonstrate overflow and underflow in byte type
        demonstrateOverflowAndUnderflow();
    }

    // Method to demonstrate arithmetic operations on integer types
    private static void demonstrateArithmeticOperations(int intValue, byte byteValue, short shortValue,
            long longValue) {
        System.out.println("Arithmetic Operations:");
        // Addition of intValue and byteValue
        System.out.println("Addition: " + (intValue + byteValue));

        // Subtraction of shortValue and byteValue
        System.out.println("Subtraction: " + (shortValue - byteValue));

        // Multiplication of intValue and shortValue
        System.out.println("Multiplication: " + (intValue * shortValue));

        // Division of longValue by intValue
        System.out.println("Division: " + (longValue / intValue));

        // Modulo operation (remainder of shortValue divided by byteValue)
        System.out.println("Modulo: " + (shortValue % byteValue));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations between int and long
    private static void demonstrateRelationalOperations(int intValue, long longValue) {
        System.out.println("Relational Operations:");
        // Check if intValue is equal to longValue
        System.out.println("Equal to: " + (intValue == longValue));

        // Check if intValue is not equal to longValue
        System.out.println("Not equal to: " + (intValue != longValue));

        // Check if intValue is greater than longValue
        System.out.println("Greater than: " + (intValue > longValue));

        // Check if intValue is less than longValue
        System.out.println("Less than: " + (intValue < longValue));

        // Check if intValue is greater than or equal to longValue
        System.out.println("Greater than or equal to: " + (intValue >= longValue));

        // Check if intValue is less than or equal to longValue
        System.out.println("Less than or equal to: " + (intValue <= longValue));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate type casting between byte and int
    private static void demonstrateTypeCasting(byte byteValue, int intValue) {
        System.out.println("Type Casting:");
        // Implicit casting (byte to int) is done automatically by Java
        int implicitCast = byteValue;
        System.out.println("Implicit cast from byte to int: " + implicitCast);

        // Explicit casting (int to byte) requires type casting because it may result in
        // data loss
        byte explicitCast = (byte) intValue;
        System.out.println("Explicit cast from int to byte: " + explicitCast);
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate overflow and underflow behavior in byte type
    private static void demonstrateOverflowAndUnderflow() {
        System.out.println("Overflow and Underflow:");
        // Overflow: Byte.MAX_VALUE + 1 causes an overflow, wrapping around to
        // Byte.MIN_VALUE
        byte overflowExample = (byte) (Byte.MAX_VALUE + 1);
        System.out.println("Overflow in byte (Byte.MAX_VALUE + 1): " + overflowExample);

        // Underflow: Byte.MIN_VALUE - 1 causes an underflow, wrapping around to
        // Byte.MAX_VALUE
        byte underflowExample = (byte) (Byte.MIN_VALUE - 1);
        System.out.println("Underflow in byte (Byte.MIN_VALUE - 1): " + underflowExample);
        System.out.println(); // Empty line for separation
    }
}
