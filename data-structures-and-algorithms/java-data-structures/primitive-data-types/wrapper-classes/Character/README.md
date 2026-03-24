# `Character` Wrapper Class in Java

## Overview
The `Character` wrapper class in Java allows the use of a `char` value as an object. It belongs to the `java.lang` package and is useful for working with methods that require objects or when performing utility operations on characters.

---

## Characteristics of `Character` Wrapper Class
| **Feature**       | **Details**                                |
|--------------------|--------------------------------------------|
| **Package**        | `java.lang`                               |
| **Default Value**  | `\u0000` (null character)                 |
| **Immutable**      | `Character` objects are immutable.        |

---

## Key Features of the `Character` Class

- **Immutability**: `Character` objects are immutable, meaning their value cannot be changed once created.
- **Utility Methods**: Includes static methods to classify, convert, and inspect characters.

---

## Static Methods

| **Method**                                  | **Description**                                                                                            | **Return Type**     | **Example**                                                                                       |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------|---------------------|---------------------------------------------------------------------------------------------------|
| `isDigit(char ch)`                          | Determines if the specified character is a digit.                                                          | `boolean`           | `Character.isDigit('5'); // true`                                                                |
| `isLetter(char ch)`                         | Determines if the specified character is a letter.                                                         | `boolean`           | `Character.isLetter('A'); // true`                                                               |
| `isLetterOrDigit(char ch)`                  | Determines if the specified character is a letter or digit.                                                | `boolean`           | `Character.isLetterOrDigit('9'); // true`                                                        |
| `isLowerCase(char ch)`                      | Determines if the specified character is lowercase.                                                        | `boolean`           | `Character.isLowerCase('a'); // true`                                                            |
| `isUpperCase(char ch)`                      | Determines if the specified character is uppercase.                                                        | `boolean`           | `Character.isUpperCase('Z'); // true`                                                            |
| `isWhitespace(char ch)`                     | Determines if the specified character is a whitespace character.                                           | `boolean`           | `Character.isWhitespace(' '); // true`                                                           |
| `isSpaceChar(char ch)`                      | Determines if the specified character is a space character.                                                | `boolean`           | `Character.isSpaceChar(' '); // true`                                                            |
| `toString(char c)`                          | Returns a `String` object representing the specified character.                                            | `String`            | `Character.toString('A'); // "A"`                                                                |
| `getNumericValue(char ch)`                  | Returns the numeric value of the specified character.                                                      | `int`               | `Character.getNumericValue('7'); // 7`                                                           |
| `getType(char ch)`                          | Returns the general category type of the specified character.                                              | `int`               | `Character.getType('A'); // 1`                                                                   |
| `forDigit(int digit, int radix)`            | Returns the character representation of the specified digit in the specified radix.                        | `char`              | `Character.forDigit(10, 16); // 'a'`                                                             |
| `isDefined(char ch)`                        | Determines if the specified character is defined in Unicode.                                               | `boolean`           | `Character.isDefined('©'); // true`                                                              |
| `isTitleCase(char ch)`                      | Determines if the specified character is a titlecase character.                                            | `boolean`           | `Character.isTitleCase('ǅ'); // true`                                                            |
| `toLowerCase(char ch)`                      | Converts the specified character to lowercase.                                                             | `char`              | `Character.toLowerCase('A'); // 'a'`                                                             |
| `toUpperCase(char ch)`                      | Converts the specified character to uppercase.                                                             | `char`              | `Character.toUpperCase('b'); // 'B'`                                                             |
| `toTitleCase(char ch)`                      | Converts the specified character to titlecase.                                                             | `char`              | `Character.toTitleCase('ǅ'); // 'ǅ'`                                                             |
| `toChars(int codePoint)`                    | Converts a Unicode code point to a char array.                                                             | `char[]`            | `Character.toChars(128512); // ['😀']`                                                           |

> **For more:** [Comprehensive List of Static Methods](./static-methods.md)

---

## Instance Methods

```java
Character value = 'A';
```

| **Method**              | **Description**                                                | **Return Type** | **Example**                  |
|--------------------------|---------------------------------------------------------------|-----------------|------------------------------|
| `charValue()`           | Returns the primitive `char` value of this `Character` object. | `char`          | `value.charValue();` |
| `toString()`            | Returns a `String` representation of this `Character`.         | `String`        | `value.toString();` |
| `equals(Object obj)`    | Compares this `Character` to another object.                   | `boolean`       | `value.equals('A');` |
| `hashCode()`            | Returns the hash code for this `Character` object.             | `int`           | `value.hashCode();` |

---

## Arithmetic Operations

Although `Character` stores characters, it can participate in arithmetic operations because it is internally stored as an integer representing the Unicode value.

| **Operation**  | **Symbol** | **Example**           |
|-----------------|------------|-----------------------|
| Increment       | `++`       | `charValue++`        |
| Decrement       | `--`       | `charValue--`        |
| Addition        | `+`        | `'A' + 1 → 'B'`      |
| Subtraction     | `-`        | `'C' - 1 → 'B'`      |

### **Relational Operations**
| **Operation**       | **Symbol** | **Example**          |
|----------------------|------------|----------------------|
| Equal to            | `==`       | `'A' == 'A'`         |
| Not equal to        | `!=`       | `'A' != 'B'`         |
| Greater than        | `>`        | `'B' > 'A'`          |
| Less than           | `<`        | `'A' < 'B'`          |
| Greater than or equal to | `>=` | `'B' >= 'A'`         |
| Less than or equal to   | `<=` | `'A' <= 'B'`         |

## Relational Operators and Their Equivalent Methods

```java
Character value1 = 'A';
Character value2 = 'B';
```

| **Operator** | **Operator Usage**                  | **Equivalent Method**          | **Usage**                                                                 |
|--------------|-------------------------------------|---------------------------------|---------------------------------------------------------------------------|
| `==`         | `value1 == value2; // false`             | `equals(Object)`               | `value1.equals(value2); // false`                                         |
| `!=`         | `value1 != value2; // true`              | `!equals(Object)`              | `!value1.equals(value2); // true`                                         |
| `+`          | `char sum = (char) (value1 + 1);`     | N/A                            | **Operator only**, but `char` arithmetic can be cast to maintain a range |
| `<`          | `value1 < value2; // true`               | `compare(char, char)`          | `Character.compare(value1, value2) < 0; // true`                                |
| `>`          | `value1 > value2; // false`              | `compare(char, char)`          | `Character.compare(value1, value2) > 0; // false`                               |
| `<=`         | `value1 <= value2; // true`              | `compare(char, char)`          | `Character.compare(value1, value2) <= 0; // true`                               |

## Example Code

```java
public class CharacterWrapperExample {
    public static void main(String[] args) {
        // Static Methods
        char c1 = 'A';
        char c2 = '5';

        // Check if a character is a digit
        boolean isDigit = Character.isDigit(c2); // true

        // Check if a character is a letter
        boolean isLetter = Character.isLetter(c1); // true

        // Convert a character to lowercase
        char lower = Character.toLowerCase(c1); // 'a'

        // Convert a character to uppercase
        char upper = Character.toUpperCase('b'); // 'B'

        // Check if a character is whitespace
        boolean isWhitespace = Character.isWhitespace(' '); // true

        // Get numeric value of a character
        int numericValue = Character.getNumericValue('7'); // 7

        // Instance Methods
        Character charObj = Character.valueOf('A');

        // Get primitive char value
        char primitiveChar = charObj.charValue(); // 'A'

        // Convert Character object to String
        String charAsString = charObj.toString(); // "A"

        // Compare Character objects
        boolean isEqual = charObj.equals('A'); // true
    }
}
```

> **For more:** [CharacterWrapperClass.java](./CharacterWrapperClass.java)
