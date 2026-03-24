public class CharDataType {
    public static void main(String[] args) {
        // Print ranges of char type
        System.out.println("Char range: " + (int) Character.MIN_VALUE + " to " + (int) Character.MAX_VALUE);
        System.out.println(); // Print an empty line for better readability

        // Initialize char variables
        char charValue1 = 'A'; // A character literal
        char charValue2 = 'z'; // Another character literal
        char charValue3 = 65; // Unicode value for 'A'

        // Display char values and their Unicode codes
        displayCharValues(charValue1, charValue2, charValue3);

        // Demonstrate arithmetic operations
        demonstrateArithmeticOperations(charValue1, charValue2);

        // Demonstrate relational operations
        demonstrateRelationalOperations(charValue1, charValue2);

        // Demonstrate type casting
        demonstrateTypeCasting(charValue1);
    }

    // Method to display char values and their corresponding Unicode codes
    private static void displayCharValues(char charValue1, char charValue2, char charValue3) {
        System.out.println("Character Values and Unicode Codes:");
        System.out.println("charValue1: " + charValue1 + " (Unicode: " + (int) charValue1 + ")");
        System.out.println("charValue2: " + charValue2 + " (Unicode: " + (int) charValue2 + ")");
        System.out.println("charValue3: " + charValue3 + " (Initialized with Unicode 65)");
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate arithmetic operations on char types
    private static void demonstrateArithmeticOperations(char charValue1, char charValue2) {
        System.out.println("Arithmetic Operations:");
        // Addition of two characters
        System.out.println("Addition (charValue1 + charValue2): " + (charValue1 + charValue2));

        // Subtraction of two characters
        System.out.println("Subtraction (charValue2 - charValue1): " + (charValue2 - charValue1));

        // Increment a char value
        char incrementedValue = (char) (charValue1 + 1);
        System.out.println("Increment charValue1: " + incrementedValue);

        // Decrement a char value
        char decrementedValue = (char) (charValue2 - 1);
        System.out.println("Decrement charValue2: " + decrementedValue);
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations between char values
    private static void demonstrateRelationalOperations(char charValue1, char charValue2) {
        System.out.println("Relational Operations:");
        // Check if charValue1 is equal to charValue2
        System.out.println("Equal to: " + (charValue1 == charValue2));

        // Check if charValue1 is not equal to charValue2
        System.out.println("Not equal to: " + (charValue1 != charValue2));

        // Check if charValue1 is greater than charValue2
        System.out.println("Greater than: " + (charValue1 > charValue2));

        // Check if charValue1 is less than charValue2
        System.out.println("Less than: " + (charValue1 < charValue2));

        // Check if charValue1 is greater than or equal to charValue2
        System.out.println("Greater than or equal to: " + (charValue1 >= charValue2));

        // Check if charValue1 is less than or equal to charValue2
        System.out.println("Less than or equal to: " + (charValue1 <= charValue2));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate type casting between char and int
    private static void demonstrateTypeCasting(char charValue) {
        System.out.println("Type Casting:");
        // Implicit casting (char to int) is done automatically by Java
        int implicitCast = charValue;
        System.out.println("Implicit cast from char to int (Unicode value): " + implicitCast);

        // Explicit casting (int to char) requires type casting
        int unicodeValue = 66; // Unicode for 'B'
        char explicitCast = (char) unicodeValue;
        System.out.println("Explicit cast from int to char: " + explicitCast);
        System.out.println(); // Empty line for separation
    }
}
