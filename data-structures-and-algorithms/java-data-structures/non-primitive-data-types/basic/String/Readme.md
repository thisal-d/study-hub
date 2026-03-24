# `String` Class in Java

## Overview
The `String` class in Java represents a sequence of characters. It is one of the most commonly used classes and is immutable, meaning once created, its value cannot be changed.

---

## Characteristics of `String` Class
| **Feature**         | **Details**                                  |
|----------------------|----------------------------------------------|
| **Package**          | `java.lang`                                 |
| **Immutable**        | Strings are immutable.                      |
| **Default Value**    | `null` for uninitialized string references. |

---

## Key Features of the `String` Class

- **Immutability**: Once created, the content of a `String` object cannot be changed.
- **Efficient Memory Management**: Strings are stored in a special memory area called the "string pool."
- **Supports Multiple Constructors**: Allows creating strings from character arrays, byte arrays, or directly using string literals.
- **Utility Methods**: Provides numerous methods for manipulating and examining strings.

---

## Operations on String Types

### **String Operations**

| **Operation**         | **Symbol** | **Example**                                      |
|-----------------------|------------|--------------------------------------------------|
| Concatenation         | `+`        | `str1 + str2`                                    |

---

# Static Methods

| **Method**                                   | **Description**                                                            | **Return Type**  | **Example**                                    |
|----------------------------------------------|----------------------------------------------------------------------------|------------------|------------------------------------------------|
| `valueOf(Object obj)`                        | Returns the string representation of the specified object.                 | `String`         | `String.valueOf(42); // "42"`                 |
| `format(String format, Object... args)`      | Returns a formatted string using the specified format and arguments.       | `String`         | `String.format("Hello, %s!", "World");`       |
| `join(CharSequence delimiter, CharSequence... elements)` | Joins the given elements with the specified delimiter.         | `String`         | `String.join("-", "2025", "01", "09");`       |
| `copyValueOf(char[] data)`                   | Returns a string that represents the sequence of characters in the array.  | `String`         | `String.copyValueOf(new char[] {'H', 'i'});`  |
| `copyValueOf(char[] data, int offset, int count)` | Returns a sub string that represents the sequence of characters in the array. | `String` | `String.copyValueOf(new char[] {'H', 'i'}, 1, 4);`  |

---

## Instance Methods

| **Method**                                   | **Description**                                                            | **Return Type**    | **Example**                                    |
|----------------------------------------------|----------------------------------------------------------------------------|--------------------|------------------------------------------------|
| `length()`                                   | Returns the length of the string.                                          | `int`              | `str.length();`                               |
| `charAt(int index)`                          | Returns the character at the specified index.                              | `char`             | `str.charAt(0);`                              |
| `substring(int beginIndex, int endIndex)`    | Returns a substring between the specified indices.                         | `String`           | `str.substring(0, 4);`                        |
| `equals(Object obj)`                         | Checks if two strings are equal.                                           | `boolean`          | `str.equals("Hello");`                        |
| `toLowerCase()`                              | Converts all characters in the string to lowercase.                        | `String`           | `str.toLowerCase();`                          |
| `toUpperCase()`                              | Converts all characters in the string to uppercase.                        | `String`           | `str.toUpperCase();`                          |
| `replace(char oldChar, char newChar)`        | Replaces all occurrences of a character with another character.            | `String`           | `str.replace('H', 'h');`                      |
| `indexOf(String str)`                        | Returns the index of the first occurrence of the specified substring.      | `int`              | `str.indexOf("H");`                           |
| `trim()`                                     | Removes leading and trailing whitespace from the string.                   | `String`           | `str.trim();`                                 |
| `split(String regex)`                        | Splits the string into an array of substrings based on the specified regex.| `String[]`         | `str.split(" ");`                             |
| `contains(CharSequence s)`                   | Checks if the string contains the specified sequence.                      | `boolean`          | `str.contains("ell");`                        |
| `replaceAll(String regex, String replacement)`| Replaces each substring matching the regular expression with the given replacement. | `String`       | `str.replaceAll("world", "everyone");`        |
| `isEmpty()`                                  | Checks if the string is empty.                                            | `boolean`          | `str.isEmpty();`                              |
| `matches(String regex)`                      | Checks if the string matches the specified regular expression.            | `boolean`          | `str.matches("\\d+");`                        |
| `concat(String str)`                         | Concatenates the specified string to the current string.                   | `String`           | `str.concat(" world");`                       |

> **For more:** [Comprehensive List of Instabce Methods](./instance-methods.md)

---

## Example Code

```java
public class StringExample {
    public static void main(String[] args) {
        // Create a string
        String str = "Hello, World!";

        // Get the length of the string
        System.out.println("Length: " + str.length());

        // Get a character at a specific index
        System.out.println("Character at index 0: " + str.charAt(0));

        // Get a substring
        System.out.println("Substring: " + str.substring(0, 5));

        // Check equality
        System.out.println("Equals 'Hello, World!': " + str.equals("Hello, World!"));

        // Convert to lowercase
        System.out.println("Lowercase: " + str.toLowerCase());

        // Replace a character
        System.out.println("Replace 'H' with 'h': " + str.replace('H', 'h'));

        // Split the string
        String[] words = str.split(", ");
        System.out.println("First word: " + words[0]);

        // Trim whitespace
        String padded = "   Hello   ";
        System.out.println("Trimmed: '" + padded.trim() + "'");
    }
}
```

> **For more:** [`StringDataType.java`](./StringDataType.java)
