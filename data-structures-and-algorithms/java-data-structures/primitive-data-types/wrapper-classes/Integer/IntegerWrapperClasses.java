public class IntegerWrapperClasses {

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

    // Method to demonstrate static methods of Byte, Short, Integer, Long classes
    private static void demonstrateStaticMethods() {
        System.out.println("Static Methods:\n------------------------------");

        // Static Methods for Byte
        byte byteVal = 10;
        System.out.println("Byte.toString(10): " + Byte.toString(byteVal));
        System.out.println("Byte.parseByte(\"10\"): " + Byte.parseByte("10"));
        System.out.println("Byte.valueOf(\"10\"): " + Byte.valueOf("10"));
        System.out.println("Byte.compare(byteVal, (byte)5): " + Byte.compare(byteVal, (byte) 5));

        // Static Methods for Short
        short shortVal = 20;
        System.out.println("Short.toString(20): " + Short.toString(shortVal));
        System.out.println("Short.parseShort(\"20\"): " + Short.parseShort("20"));
        System.out.println("Short.valueOf(\"20\"): " + Short.valueOf("20"));
        System.out.println("Short.compare(shortVal, (short)15): " + Short.compare(shortVal, (short) 15));

        // Static Methods for Integer
        int intVal = 30;
        System.out.println("Integer.toString(30): " + Integer.toString(intVal));
        System.out.println("Integer.parseInt(\"30\"): " + Integer.parseInt("30"));
        System.out.println("Integer.valueOf(\"30\"): " + Integer.valueOf("30"));
        System.out.println("Integer.compare(intVal, 25): " + Integer.compare(intVal, 25));
        System.out.println("Integer.bitCount(30): " + Integer.bitCount(intVal));
        System.out.println("Integer.toBinaryString(30): " + Integer.toBinaryString(intVal));
        System.out.println("Integer.toHexString(30): " + Integer.toHexString(intVal));

        // Static Methods for Long
        long longVal = 40L;
        System.out.println("Long.toString(40L): " + Long.toString(longVal));
        System.out.println("Long.parseLong(\"40\"): " + Long.parseLong("40"));
        System.out.println("Long.valueOf(\"40\"): " + Long.valueOf("40"));
        System.out.println("Long.compare(longVal, 35L): " + Long.compare(longVal, 35L));
        System.out.println("Long.bitCount(40L): " + Long.bitCount(longVal));
        System.out.println("Long.toBinaryString(40L): " + Long.toBinaryString(longVal));
        System.out.println("Long.toHexString(40L): " + Long.toHexString(longVal));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate instance methods of Byte, Short, Integer, Long classes
    private static void demonstrateInstanceMethods() {
        System.out.println("Instance Methods:\n------------------------------");

        // Instance Methods for Byte
        Byte byteObj = 10;
        System.out.println("byteObj.byteValue(): " + byteObj.byteValue());
        System.out.println("byteObj.compareTo(Byte.valueOf((byte)5)): " + byteObj.compareTo((byte) 5));
        System.out.println("byteObj.equals(Byte.valueOf((byte)10)): " + byteObj.equals((byte) 10));
        System.out.println("byteObj.hashCode(): " + byteObj.hashCode());
        System.out.println("byteObj.toString(): " + byteObj.toString());

        // Instance Methods for Short
        Short shortObj = 20;
        System.out.println("shortObj.shortValue(): " + shortObj.shortValue());
        System.out.println("shortObj.compareTo(Short.valueOf((short)15)): " + shortObj.compareTo((short) 15));
        System.out.println("shortObj.equals(Short.valueOf((short)20)): " + shortObj.equals((short) 20));
        System.out.println("shortObj.hashCode(): " + shortObj.hashCode());
        System.out.println("shortObj.toString(): " + shortObj.toString());

        // Instance Methods for Integer
        Integer intObj = 30;
        System.out.println("intObj.intValue(): " + intObj.intValue());
        System.out.println("intObj.compareTo(Integer.valueOf(25)): " + intObj.compareTo(25));
        System.out.println("intObj.equals(Integer.valueOf(30)): " + intObj.equals(30));
        System.out.println("intObj.hashCode(): " + intObj.hashCode());
        System.out.println("intObj.toString(): " + intObj.toString());

        // Instance Methods for Long
        Long longObj = 40L;
        System.out.println("longObj.longValue(): " + longObj.longValue());
        System.out.println("longObj.compareTo(Long.valueOf(35L)): " + longObj.compareTo(35L));
        System.out.println("longObj.equals(Long.valueOf(40L)): " + longObj.equals(40L));
        System.out.println("longObj.hashCode(): " + longObj.hashCode());
        System.out.println("longObj.toString(): " + longObj.toString());

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate relational operations for Byte, Short, Integer, Long
    // classes
    private static void demonstrateRelationalOperations() {
        System.out.println("Relational Operations:\n------------------------------");

        // Relational Operations for Byte
        Byte byteVal1 = 10;
        Byte byteVal2 = 15;
        System.out.println("byteVal1 > byteVal2: " + (byteVal1 > byteVal2));
        System.out.println("Byte.compare(byteVal1, byteVal2): " + Byte.compare(byteVal1, byteVal2));
        System.out.println("byteVal1 < byteVal2: " + (byteVal1 < byteVal2));

        // Relational Operations for Short
        Short shortVal1 = 20;
        Short shortVal2 = 25;
        System.out.println("shortVal1 > shortVal2: " + (shortVal1 > shortVal2));
        System.out.println("Short.compare(shortVal1, shortVal2): " + Short.compare(shortVal1, shortVal2));
        System.out.println("shortVal1 < shortVal2: " + (shortVal1 < shortVal2));

        // Relational Operations for Integer
        Integer intVal1 = 30;
        Integer intVal2 = 35;
        System.out.println("intVal1 > intVal2: " + (intVal1 > intVal2));
        System.out.println("Integer.compare(intVal1, intVal2): " + Integer.compare(intVal1, intVal2));
        System.out.println("intVal1 < intVal2: " + (intVal1 < intVal2));

        // Relational Operations for Long
        Long longVal1 = 40L;
        Long longVal2 = 45L;
        System.out.println("longVal1 > longVal2: " + (longVal1 > longVal2));
        System.out.println("Long.compare(longVal1, longVal2): " + Long.compare(longVal1, longVal2));
        System.out.println("longVal1 < longVal2: " + (longVal1 < longVal2));

        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate real-world use cases of Byte, Short, Integer, Long
    // classes
    private static void demonstrateRealWorldUseCases() {
        System.out.println("Real-World Use Cases:\n------------------------------");

        String[] values = { "10", "NaN", "Infinity", "-20", "30" };
        int nanCount = 0;
        int positiveInfinityCount = 0;
        int sum = 0;

        for (String value : values) {
            try {
                int num = Integer.parseInt(value);

                if (value.equals("NaN")) {
                    nanCount++;
                } else if (value.equals("Infinity")) {
                    positiveInfinityCount++;
                } else {
                    sum += num;
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid number: " + value);
            }
        }

        System.out.println("Input Values: " + String.join(", ", values));
        System.out.println("Count of NaN: " + nanCount);
        System.out.println("Count of Positive Infinity: " + positiveInfinityCount);
        System.out.println("Sum of Valid Numbers: " + sum);

        System.out.println(); // Empty line for separation
    }
}
