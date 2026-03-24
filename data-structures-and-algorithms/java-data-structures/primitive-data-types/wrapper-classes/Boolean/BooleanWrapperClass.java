public class BooleanWrapperClass {
    public static void main(String[] args) {
        // Initialize Boolean objects (Wrapper class for boolean values)
        Boolean value1 = Boolean.TRUE; // Using Boolean.TRUE instead of primitive boolean
        Boolean value2 = Boolean.FALSE; // Using Boolean.FALSE instead of primitive boolean

        // Print initial values
        System.out.println("Initial Boolean Values:\n" + //
                "------------------------------");
        System.out.println("value1 " + value1);
        System.out.println("value2 " + value2);
        System.out.println(); // Print an empty line for better readability

        // Demonstrate logical operations with Boolean
        demonstrateLogicalOperations();

        // Demonstrate relational operations
        demonstrateRelationalOperations();

        // Demonstrate real-world use cases
        demonstrateUseCases();

        // Demonstrate static methods of Boolean
        demonstrateStaticMethods();

        // Demonstrate instance methods of Boolean
        demonstrateInstanceMethods();
    }

    // Method to demonstrate logical operations with Boolean values
    private static void demonstrateLogicalOperations() {
        System.out.println("Logical Operations:\n" + //
                "------------------------------");

        // Initialize Boolean objectS
        Boolean value1 = Boolean.FALSE;
        Boolean value2 = Boolean.TRUE;

        System.out.println("value1: " + value1);
        System.out.println("value2: " + value2);

        // Logical AND - using the `&` operator for Boolean objects
        System.out.println("Logical AND (value1 & value2): " + (value1 & value2));

        // Logical OR - using the `|` operator for Boolean objects
        System.out.println("Logical OR (value1 | value2): " + (value1 | value2));

        // Logical NOT - using the `!` operator for negating Boolean
        System.out.println("Logical NOT (!value1): " + (!value1));

        // Comparing using `equals` method from Boolean class
        System.out.println("Is value1 equal to value2? " + value1.equals(value2));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations that produce Boolean results
    private static void demonstrateRelationalOperations() {
        System.out.println("Relational Operations:\n" + //
                "------------------------------");

        // Initialize Boolean values
        Boolean value1 = Boolean.TRUE;
        Boolean value2 = Boolean.FALSE;

        System.out.println("value1: " + value1);
        System.out.println("value2: " + value2);

        // Using `equals` method to compare Boolean values
        System.out.println("value1 equals value2: " + value1.equals(value2));

        // Not equal to - comparing using `!` with `equals`
        System.out.println("value1 != value2: " + !value1.equals(value2));

        // Comparing using `compareTo` method
        System.out.println("value1.compareTo(value2): " + value1.compareTo(value2));
        System.out.println("value2.compareTo(value1): " + value2.compareTo(value1));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate real-world use cases of Boolean values
    private static void demonstrateUseCases() {
        System.out.println("Real-World Use Cases:\n" + //
                "------------------------------");

        // Example 1: Checking eligibility using Boolean object
        int age = 18;
        Boolean isEligibleToVote = age >= 18 ? Boolean.TRUE : Boolean.FALSE; // Assign Boolean value based on condition
        System.out.println("Is eligible to vote: " + isEligibleToVote);

        // Example 2: Toggle state using Boolean object (Note: using negation)
        Boolean isLightOn = Boolean.FALSE;
        isLightOn = Boolean.valueOf(!isLightOn); // Toggle the state with Boolean.valueOf
        System.out.println("Light status after toggle: " + (isLightOn ? "On" : "Off"));

        // Example 3: Decision-making in conditional statements
        if (isLightOn) {
            System.out.println("The light is ON.");
        } else {
            System.out.println("The light is OFF.");
        }

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate static methods of Boolean
    private static void demonstrateStaticMethods() {
        System.out.println("Static Methods:\n------------------------------");

        // valueOf(boolean)
        Boolean value1 = Boolean.valueOf(true);
        System.out.println("Boolean.valueOf(true): " + value1);

        // valueOf(String)
        Boolean value2 = Boolean.valueOf("false");
        System.out.println("Boolean.valueOf(\"false\"): " + value2);

        // parseBoolean(String)
        boolean parsedValue = Boolean.parseBoolean("true");
        System.out.println("Boolean.parseBoolean(\"true\"): " + parsedValue);

        // compare(boolean, boolean)
        int comparison = Boolean.compare(true, false);
        System.out.println("Boolean.compare(true, false): " + comparison);

        // logicalAnd(boolean, boolean)
        boolean andResult = Boolean.logicalAnd(true, false);
        System.out.println("Boolean.logicalAnd(true, false): " + andResult);

        // logicalOr(boolean, boolean)
        boolean orResult = Boolean.logicalOr(true, false);
        System.out.println("Boolean.logicalOr(true, false): " + orResult);

        // logicalXor(boolean, boolean)
        boolean xorResult = Boolean.logicalXor(true, false);
        System.out.println("Boolean.logicalXor(true, false): " + xorResult);

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate instance methods of Boolean
    private static void demonstrateInstanceMethods() {
        System.out.println("Instance Methods:\n" + //
                "------------------------------");

        // Initialize Boolean object
        Boolean value = Boolean.FALSE;
        System.out.println("value: " + value);

        // booleanValue()
        boolean primitiveValue = value.booleanValue();
        System.out.println("value.booleanValue(): " + primitiveValue);

        // toString()
        String stringValue = value.toString();
        System.out.println("value.toString(): " + stringValue);

        // equals(Object)
        Boolean anotherValue = Boolean.FALSE;
        System.out.println("value.equals(Boolean.FALSE): " + value.equals(anotherValue));

        // compareTo(Boolean)
        int comparisonResult = value.compareTo(Boolean.FALSE);
        System.out.println("value.compareTo(Boolean.FALSE): " + comparisonResult);

        // hashCode()
        int hash = value.hashCode();
        System.out.println("value.hashCode(): " + hash);

        System.out.println(); // Empty line for separation
    }
}
