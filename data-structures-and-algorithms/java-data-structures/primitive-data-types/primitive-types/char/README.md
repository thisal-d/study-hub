# `char` Type in Java

## Overview
In Java, the `char` type is used to store a single 16-bit Unicode character. It can represent any character from the Unicode standard, making it suitable for international text handling and character-based operations.

### Key Features of `char`:
1. **Size**: 16 bits (2 bytes), allows representation of characters in the Unicode set.
2. **Default Value**: `'\u0000'` (null character).
3. **Range**: `'\u0000'` (0) to `'\uffff'` (65,535).

---

## Examples of Characters
| **Type**       | **Examples**               |
|-----------------|----------------------------|
| Letters         | `'A'`, `'z'`, `'k'`       |
| Digits          | `'1'`, `'9'`              |
| Special Symbols | `'#'`, `'%'`, `'@'`       |
| Unicode         | `'\u0041'` (A), `'\u03A9'` (Ω) |

---

## Common Operations on `char`

### **Arithmetic Operations**
Although `char` stores characters, it can participate in arithmetic operations because it is internally stored as an integer representing the Unicode value.

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

---

## Type Casting

### **Implicit Casting** (Widening)
- `char` can be implicitly cast to `int`.
    - Example:
        ```java
        char charValue = 'A';
        int intValue = charValue;  // Automatically converts 'A' to 65
        ```

### **Explicit Casting** (Narrowing)
- Converting `int` to `char` requires explicit casting.
    - Example:
        ```java
        int intValue = 66;
        char charValue = (char) intValue;  // Converts 66 to 'B'
        ```

---

## Unicode and Escape Sequences
- **Unicode Representation**: Use `\u` followed by a 4-digit hexadecimal code.
    - Example: `'\u0041'` represents `'A'`.
- **Escape Characters**:
    | **Escape Sequence** | **Description**    |
    |---------------------|--------------------|
    | `\n`                | New line          |
    | `\t`                | Tab               |
    | `\'`                | Single quote      |
    | `\"`                | Double quote      |
    | `\\`                | Backslash         |

---

## Example Code
```java
public class CharExamples {
    public static void main(String[] args) {
        // Initialize char variables
        char letter = 'A';
        char digit = '5';
        char symbol = '#';
        char unicodeChar = '\u03A9';  // Omega (Ω)

        // Print char values
        System.out.println("Letter: " + letter);
        System.out.println("Digit: " + digit);
        System.out.println("Symbol: " + symbol);
        System.out.println("Unicode Character: " + unicodeChar);

        // Arithmetic Operations
        char nextLetter = (char) (letter + 1);  // Increment to next character
        System.out.println("Next Letter: " + nextLetter);

        // Relational Operations
        System.out.println("Is 'A' equal to 'B'? " + (letter == 'B'));
        System.out.println("Is 'A' less than 'B'? " + (letter < 'B'));

        // Type Casting
        int unicodeValue = letter;  // Implicit cast to int
        System.out.println("Unicode value of 'A': " + unicodeValue);

        char fromInt = (char) 66;  // Explicit cast from int to char
        System.out.println("Character from 66: " + fromInt);
    }
}
```

> **For more:** [CharDataType.java](./CharDataType.java)