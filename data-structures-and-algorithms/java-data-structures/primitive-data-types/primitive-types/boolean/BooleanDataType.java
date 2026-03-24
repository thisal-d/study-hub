public class BooleanDataType {
    public static void main(String[] args) {
        // Initialize boolean variables
        boolean isJavaFun = true;
        boolean isFishTasty = false;

        // Print initial values
        System.out.println("Initial Boolean Values:");
        System.out.println("Is Java fun? " + isJavaFun);
        System.out.println("Is fish tasty? " + isFishTasty);
        System.out.println(); // Print an empty line for better readability

        // Demonstrate logical operations
        demonstrateLogicalOperations(isJavaFun, isFishTasty);

        // Demonstrate relational operations
        demonstrateRelationalOperations();

        // Demonstrate real-world use cases
        demonstrateUseCases();
    }

    // Method to demonstrate logical operations with boolean values
    private static void demonstrateLogicalOperations(boolean value1, boolean value2) {
        System.out.println("Logical Operations:");
        // Logical AND
        System.out.println("Logical AND (value1 && value2): " + (value1 && value2));

        // Logical OR
        System.out.println("Logical OR (value1 || value2): " + (value1 || value2));

        // Logical NOT
        System.out.println("Logical NOT (!value1): " + (!value1));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations that produce boolean results
    private static void demonstrateRelationalOperations() {
        System.out.println("Relational Operations:");
        int number1 = 10;
        int number2 = 20;

        // Equal to
        System.out.println("number1 == number2: " + (number1 == number2));

        // Not equal to
        System.out.println("number1 != number2: " + (number1 != number2));

        // Greater than
        System.out.println("number1 > number2: " + (number1 > number2));

        // Less than
        System.out.println("number1 < number2: " + (number1 < number2));

        // Greater than or equal to
        System.out.println("number1 >= number2: " + (number1 >= number2));

        // Less than or equal to
        System.out.println("number1 <= number2: " + (number1 <= number2));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate real-world use cases of boolean values
    private static void demonstrateUseCases() {
        System.out.println("Real-World Use Cases:");

        // Example 1: Checking eligibility
        int age = 18;
        boolean isEligibleToVote = age >= 18;
        System.out.println("Is eligible to vote: " + isEligibleToVote);

        // Example 2: Toggle state
        boolean isLightOn = false;
        isLightOn = !isLightOn; // Toggle the state
        System.out.println("Light status after toggle: " + (isLightOn ? "On" : "Off"));

        // Example 3: Decision-making in conditional statements
        if (isLightOn) {
            System.out.println("The light is ON.");
        } else {
            System.out.println("The light is OFF.");
        }

        System.out.println(); // Empty line for separation
    }
}