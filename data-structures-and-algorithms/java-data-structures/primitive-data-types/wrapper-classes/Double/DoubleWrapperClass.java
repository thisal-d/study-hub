public class DoubleWrapperClass {

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

    // Method to demonstrate static methods of Double class
    private static void demonstrateStaticMethods() {
        System.out.println("Static Methods:\n" +
                "------------------------------");

        double doubleVal = 3.141592653589793;

        // Static Methods for Double
        System.out.println("Double.toHexString(3.141592653589793): " + Double.toHexString(doubleVal));
        System.out.println("Double.isNaN(Double.NaN): " + Double.isNaN(Double.NaN));
        System.out
                .println("Double.isInfinite(Double.POSITIVE_INFINITY): " + Double.isInfinite(Double.POSITIVE_INFINITY));
        System.out.println("Double.compare(3.141592653589793, 2.718281828459045): "
                + Double.compare(doubleVal, 2.718281828459045));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate instance methods of Double class
    private static void demonstrateInstanceMethods() {
        System.out.println("Instance Methods:\n" +
                "------------------------------");

        Double doubleObj = 3.141592653589793;

        // Instance Methods for Double
        System.out.println("doubleObj.compareTo(Double.valueOf(4.1)): " + doubleObj.compareTo(Double.valueOf(4.1)));
        System.out.println("doubleObj.equals(Double.valueOf(3.2)): " + doubleObj.equals(Double.valueOf(3.2)));
        System.out.println("doubleObj.isInfinite(): " + doubleObj.isInfinite());
        System.out.println("doubleObj.isNaN(): " + doubleObj.isNaN());
        System.out.println("doubleObj.toString(): " + doubleObj.toString());
        System.out.println("doubleObj.hashCode(): " + doubleObj.hashCode());
        System.out.println("doubleObj.byteValue(): " + doubleObj.byteValue());
        System.out.println("doubleObj.shortValue(): " + doubleObj.shortValue());
        System.out.println("doubleObj.intValue(): " + doubleObj.intValue());
        System.out.println("doubleObj.longValue(): " + doubleObj.longValue());
        System.out.println("doubleObj.doubleValue(): " + doubleObj.doubleValue());
        System.out.println("doubleObj.floatValue(): " + doubleObj.floatValue());

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations
    private static void demonstrateRelationalOperations() {
        System.out.println("Relational Operations:\n" +
                "------------------------------");

        Double doubleVal1 = 3.141592653589793;
        Double doubleVal2 = 2.718281828459045;

        // Relational Operators for Double
        System.out.println("Double: 3.141592653589793 > 2.718281828459045: " + (doubleVal1 > doubleVal2));
        System.out.println(
                "Double.compare(3.141592653589793, 2.718281828459045): " + Double.compare(doubleVal1, doubleVal2));
        System.out.println("doubleVal1 < doubleVal2: " + (doubleVal1 < doubleVal2));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate real-world use cases of Double class
    private static void demonstrateRealWorldUseCases() {
        System.out.println("Real-World Use Cases:\n" +
                "------------------------------");

        String[] values = { "3.141592653589793", "NaN", "Infinity", "-2.718281828459045", "5.0" };
        int nanCount = 0;
        int positiveInfinityCount = 0;
        double sum = 0;

        for (String value : values) {
            double num = Double.parseDouble(value);

            if (Double.isNaN(num)) {
                nanCount++;
            } else if (Double.isInfinite(num) && num > 0) {
                positiveInfinityCount++;
            } else {
                sum += num;
            }
        }

        System.out.println("Input Values: " + String.join(", ", values));
        System.out.println("Count of NaN: " + nanCount);
        System.out.println("Count of Positive Infinity: " + positiveInfinityCount);
        System.out.println("Sum of Valid Numbers: " + sum);

        System.out.println(); // Empty line for separation
    }
}
