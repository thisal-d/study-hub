public class StringDataType {
    public static void main(String[] args) {
        // Initialize String variables
        String str1 = "Hello"; // A string literal
        String str2 = "World"; // Another string literal
        String str3 = "HELLO"; // A string with different case
        String str4 = "  Java Programming  "; // String with leading/trailing spaces

        // Display string properties and methods
        displayStringProperties(str1, str2, str3, str4);

        // Demonstrate string comparison
        demonstrateStringComparison(str1, str3);

        // Demonstrate string concatenation
        demonstrateStringConcatenation(str1, str2);

        // Demonstrate string trimming
        demonstrateStringTrimming(str4);

        // Demonstrate string conversion to upper and lower case
        demonstrateStringCaseConversion(str1);

        // Demonstrate string replacement
        demonstrateStringReplacement(str1);

        // Demonstrate string splitting
        demonstrateStringSplitting(str4);

        // Demonstrate string substring
        demonstrateStringSubstring(str1);

        // Demonstrate string contains
        demonstrateStringContains(str2);

        // Demonstrate static methods
        demonstrateStaticMethods();
    }

    // Method to display string properties and various methods
    private static void displayStringProperties(String str1, String str2, String str3, String str4) {
        System.out.println("String Properties and Methods:");
        System.out.println("Length of str1: " + str1.length());
        System.out.println("Char at index 1 in str2: " + str2.charAt(1));
        System.out.println("Does str1 contain 'el': " + str1.contains("el"));
        System.out.println("Does str2 start with 'Wo': " + str2.startsWith("Wo"));
        System.out.println("Does str2 end with 'ld': " + str2.endsWith("ld"));
        System.out.println("Are str1 and str2 equal? " + str1.equals(str2));
        System.out.println("Are str1 and str3 equal ignoring case? " + str1.equalsIgnoreCase(str3));
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string comparison
    private static void demonstrateStringComparison(String str1, String str3) {
        System.out.println("String Comparison:");
        // Compare two strings lexicographically
        int comparisonResult = str1.compareTo(str3);
        if (comparisonResult < 0) {
            System.out.println(str1 + " is lexicographically less than " + str3);
        } else if (comparisonResult > 0) {
            System.out.println(str1 + " is lexicographically greater than " + str3);
        } else {
            System.out.println(str1 + " is lexicographically equal to " + str3);
        }
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string concatenation
    private static void demonstrateStringConcatenation(String str1, String str2) {
        System.out.println("String Concatenation:");
        // Concatenate two strings using + operator
        String concatenatedString = str1 + " " + str2;
        System.out.println("Concatenated string: " + concatenatedString);
        // Concatenate using StringBuilder for performance
        StringBuilder sb = new StringBuilder();
        sb.append(str1).append(" ").append(str2);
        System.out.println("Concatenated string using StringBuilder: " + sb.toString());
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string trimming
    private static void demonstrateStringTrimming(String str4) {
        System.out.println("String Trimming:");
        // Trim leading and trailing spaces
        String trimmedString = str4.trim();
        System.out.println("Original string: '" + str4 + "'");
        System.out.println("Trimmed string: '" + trimmedString + "'");
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string conversion to upper and lower case
    private static void demonstrateStringCaseConversion(String str1) {
        System.out.println("String Case Conversion:");
        // Convert string to uppercase
        String upperCaseString = str1.toUpperCase();
        System.out.println("Uppercase: " + upperCaseString);

        // Convert string to lowercase
        String lowerCaseString = str1.toLowerCase();
        System.out.println("Lowercase: " + lowerCaseString);
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string replacement
    private static void demonstrateStringReplacement(String str1) {
        System.out.println("String Replacement:");
        // Replace 'H' with 'h'
        String replacedString = str1.replace('H', 'h');
        System.out.println("Replaced string (H to h): " + replacedString);
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string splitting
    private static void demonstrateStringSplitting(String str4) {
        System.out.println("String Splitting:");
        // Split string by spaces
        String[] splitStrings = str4.split(" ");
        System.out.println("Split string by space:");
        for (String s : splitStrings) {
            System.out.println("'" + s + "'");
        }
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string substring
    private static void demonstrateStringSubstring(String str1) {
        System.out.println("String Substring:");
        // Extract a substring from the string
        String substring = str1.substring(1, 4); // Extract from index 1 to 4
        System.out.println("Substring (1, 4): " + substring);
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate string contains
    private static void demonstrateStringContains(String str2) {
        System.out.println("String Contains:");
        // Check if the string contains a specific substring
        boolean containsResult = str2.contains("orl");
        System.out.println("Does str2 contain 'orl'? " + containsResult);
        System.out.println(); // Empty line for separation
    }

    // Method to demonstrate static methods
    private static void demonstrateStaticMethods() {
        System.out.println("Static String Methods:");

        // Demonstrate valueOf method
        String strFromInt = String.valueOf(42); // Converts int to String
        System.out.println("String.valueOf(42): " + strFromInt);

        // Demonstrate format method
        String formattedString = String.format("Hello, %s!", "World"); // Format with placeholders
        System.out.println("String.format(\"Hello, %s!\", \"World\"): " + formattedString);

        // Demonstrate join method
        String joinedString = String.join("-", "2025", "01", "09"); // Join strings with a delimiter
        System.out.println("String.join(\"-\", \"2025\", \"01\", \"09\"): " + joinedString);

        // Demonstrate copyValueOf method
        String copyString = String.copyValueOf(new char[] { 'H', 'i' }); // Copy characters to a string
        System.out.println("String.copyValueOf(new char[] {'H', 'i'}): " + copyString);

        // Demonstrate copyValueOf with offset and count
        String copySubstring = String.copyValueOf(new char[] { 'H', 'e', 'l', 'l', 'o' }, 1, 3); // Copy a part of the
                                                                                                 // array
        System.out.println("String.copyValueOf(new char[] {'H', 'e', 'l', 'l', 'o'}, 1, 3): " + copySubstring);

        System.out.println(); // Empty line for separation
    }
}
