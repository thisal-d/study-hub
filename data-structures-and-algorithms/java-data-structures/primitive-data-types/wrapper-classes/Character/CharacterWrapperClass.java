public class CharacterWrapperClass {

    public static void main(String[] args) {
        // Demonstrating Static Methods
        demonstrateStaticMethods();

        // Demonstrating Instance Methods
        demonstrateInstanceMethods();

        // Demonstrating Relational Operators
        demonstrateRelationalOperations();

        // Real-World Use Cases
        demonstrateRealWorldUseCases();
    }

    // Method to demonstrate static methods of Character class
    private static void demonstrateStaticMethods() {
        System.out.println("Static Methods:\n" + //
                "------------------------------");

        char letter = 'A';
        char digit = '5';

        // isDigit()
        System.out.println("Character.isDigit('5'): " + Character.isDigit(digit));

        // isLetter()
        System.out.println("Character.isLetter('A'): " + Character.isLetter(letter));

        // isLetterOrDigit()
        System.out.println("Character.isLetterOrDigit('5'): " + Character.isLetterOrDigit(digit));

        // isLowerCase()
        System.out.println("Character.isLowerCase('a'): " + Character.isLowerCase('a'));

        // isUpperCase()
        System.out.println("Character.isUpperCase('A'): " + Character.isUpperCase(letter));

        // isWhitespace()
        System.out.println("Character.isWhitespace(' '): " + Character.isWhitespace(' '));

        // toLowerCase()
        System.out.println("Character.toLowerCase('A'): " + Character.toLowerCase(letter));

        // toUpperCase()
        System.out.println("Character.toUpperCase('b'): " + Character.toUpperCase('b'));

        // toString()
        System.out.println("Character.toString('C'): " + Character.toString('C'));

        // getNumericValue()
        System.out.println("Character.getNumericValue('7'): " + Character.getNumericValue('7'));

        // getType()
        System.out.println("Character.getType('A'): " + Character.getType(letter));

        // forDigit()
        System.out.println("Character.forDigit(9, 10): " + Character.forDigit(9, 10));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate instance methods of Character class
    private static void demonstrateInstanceMethods() {
        System.out.println("Instance Methods:\n" + //
                "------------------------------");

        Character charObj = 'A';

        // charValue()
        System.out.println("charObj.charValue(): " + charObj.charValue());

        // toString()
        System.out.println("charObj.toString(): " + charObj.toString());

        // equals()
        System.out.println("charObj.equals('A'): " + charObj.equals('A'));

        // hashCode()
        System.out.println("charObj.hashCode(): " + charObj.hashCode());

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations
    private static void demonstrateRelationalOperations() {
        System.out.println("Relational Operations:\n" + //
                "------------------------------");

        Character value1 = 'A';
        Character value2 = 'B';

        // Using relational operators
        System.out.println("== (Equal to): " + (value1 == value2)); // false
        System.out.println("!= (Not equal to): " + (value1 != value2)); // true
        System.out.println("> (Greater than): " + (value1 > value2)); // false
        System.out.println("< (Less than): " + (value1 < value2)); // true
        System.out.println(">= (Greater than or equal to): " + (value1 >= value2)); // false
        System.out.println("<= (Less than or equal to): " + (value1 <= value2)); // true

        // Using equivalent methods
        System.out.println("== (Equal to) using equals(): " + value1.equals(value2)); // false
        System.out.println("!= (Not equal to) using !equals(): " + !value1.equals(value2)); // true
        System.out.println("< (Less than) using compare(): " + (Character.compare(value1, value2) < 0)); // true
        System.out.println("> (Greater than) using compare(): " + (Character.compare(value1, value2) > 0)); // false
        System.out.println("<= (Less than or equal to) using compare(): " + (Character.compare(value1, value2) <= 0)); // true

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate real-world use cases of Character class
    private static void demonstrateRealWorldUseCases() {
        System.out.println("Real-World Use Cases:\n" + //
                "------------------------------");

        String input = "Hello 123!";
        int digitCount = 0;
        int letterCount = 0;

        for (char ch : input.toCharArray()) {
            if (Character.isDigit(ch)) {
                digitCount++;
            } else if (Character.isLetter(ch)) {
                letterCount++;
            }
        }

        System.out.println("Input String: " + input);
        System.out.println("Number of digits: " + digitCount);
        System.out.println("Number of letters: " + letterCount);

        System.out.println(); // Empty line for separation
    }
}
