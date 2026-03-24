public class FloatWrapperClass {

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

    // Method to demonstrate static methods of Float class
    private static void demonstrateStaticMethods() {
        System.out.println("Static Methods:\n" +
                "------------------------------");

        float floatVal = 3.141592653589793f;

        // Static Methods for Float
        System.out.println("Float.toHexString(3.141592653589793f): " + Float.toHexString(floatVal));
        System.out.println("Float.isNaN(Float.NaN): " + Float.isNaN(Float.NaN));
        System.out.println("Float.isInfinite(Float.POSITIVE_INFINITY): " + Float.isInfinite(Float.POSITIVE_INFINITY));
        System.out.println("Float.compare(3.141592653589793f, 2.718281828459045f): "
                + Float.compare(floatVal, 2.718281828459045f));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate instance methods of Float class
    private static void demonstrateInstanceMethods() {
        System.out.println("Instance Methods:\n" +
                "------------------------------");

        Float floatObj = 3.141592653589793f;

        // Instance Methods for Float
        System.out.println("floatObj.compareTo(Float.valueOf(4.1f)): " + floatObj.compareTo(Float.valueOf(4.1f)));
        System.out.println("floatObj.equals(Float.valueOf(3.2f)): " + floatObj.equals(Float.valueOf(3.2f)));
        System.out.println("floatObj.isInfinite(): " + floatObj.isInfinite());
        System.out.println("floatObj.isNaN(): " + floatObj.isNaN());
        System.out.println("floatObj.toString(): " + floatObj.toString());
        System.out.println("floatObj.hashCode(): " + floatObj.hashCode());
        System.out.println("floatObj.byteValue(): " + floatObj.byteValue());
        System.out.println("floatObj.shortValue(): " + floatObj.shortValue());
        System.out.println("floatObj.intValue(): " + floatObj.intValue());
        System.out.println("floatObj.longValue(): " + floatObj.longValue());
        System.out.println("floatObj.floatValue(): " + floatObj.floatValue());

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations
    private static void demonstrateRelationalOperations() {
        System.out.println("Relational Operations:\n" +
                "------------------------------");

        Float floatVal1 = 3.141592653589793f;
        Float floatVal2 = 2.718281828459045f;

        // Relational Operators for Float
        System.out.println("Float: 3.141592653589793f > 2.718281828459045f: " + (floatVal1 > floatVal2));
        System.out.println(
                "Float.compare(3.141592653589793f, 2.718281828459045f): " + Float.compare(floatVal1, floatVal2));
        System.out.println("floatVal1 < floatVal2: " + (floatVal1 < floatVal2));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate real-world use cases of Float class
    private static void demonstrateRealWorldUseCases() {
        System.out.println("Real-World Use Cases:\n" +
                "------------------------------");

        String[] values = { "3.141592653589793", "NaN", "Infinity", "-2.718281828459045", "5.0" };
        int nanCount = 0;
        int positiveInfinityCount = 0;
        float sum = 0;

        for (String value : values) {
            float num = Float.parseFloat(value);

            if (Float.isNaN(num)) {
                nanCount++;
            } else if (Float.isInfinite(num) && num > 0) {
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
