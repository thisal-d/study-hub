# Double Wrapper Class in Java

## Overview
The `Double` class in Java is a wrapper class for the primitive `double` type. It provides utility methods to work with double-precision floating-point numbers and is part of the `java.lang` package.

---

## Key Features of the Double Wrapper Class

1. **Boxing and Unboxing**: Automatic conversion between primitive types and the `Double` wrapper class.
2. **Constants**: The class provides constants like `MAX_VALUE`, `MIN_VALUE`, `POSITIVE_INFINITY`, etc.
3. **Utility Methods**: Methods for parsing, converting, and performing mathematical operations on double values.

---

## Double Wrapper Class Operations

### **Arithmetic Operations**
| **Operation**  | **Symbol** | **Example**               |
|-----------------|------------|---------------------------|
| Addition        | `+`        | `doubleValue + doubleValue`  |
| Subtraction     | `-`        | `doubleValue - doubleValue`  |
| Multiplication  | `*`        | `doubleValue * doubleValue`  |
| Division        | `/`        | `doubleValue / doubleValue`  |
| Modulo          | `%`        | `doubleValue % doubleValue`  |

### **Relational Operations**
| **Operation**       | **Symbol** | **Example**                 |
|----------------------|------------|-----------------------------|
| Equal to            | `==`       | `doubleValue == doubleValue`  |
| Not equal to        | `!=`       | `doubleValue != doubleValue`  |
| Greater than        | `>`        | `doubleValue > doubleValue`   |
| Less than           | `<`        | `doubleValue < doubleValue`   |
| Greater than or equal to | `>=` | `doubleValue >= doubleValue`  |
| Less than or equal to   | `<=` | `doubleValue <= doubleValue`  |

---

## Static Methods

| **Method**| **Description**| **Example**|
|-----------|----------------|------------|
| `compare(double d1, double d2)`| Compares two `double` values.| `Double.compare(3.2, 4.1)` → Returns `-1`|
| `parseDouble(String s)`| Parses a `String` as a primitive `double`.| `Double.parseDouble("3.14")` → Returns `3.14`|
| `toHexString(double d)`| Converts a `double` to its hexadecimal string representation.| `Double.toHexString(3.14)` → Returns `"0x1.91eb86p1"`|
| `isNaN(double v)`| Checks if the value is "Not-a-Number" (NaN).| `Double.isNaN(Double.NaN)` → Returns `true`|
| `isInfinite(double v)`| Checks if the value is infinite.| `Double.isInfinite(Double.POSITIVE_INFINITY)` → Returns `true`|

---

## Instance Methods

| **Method**| **Description**| **Example**|
|-----------|----------------|------------|
| `compareTo(Double anotherDouble)`| Compares this `Double` object with another.| `Double.valueOf(3.2).compareTo(Double.valueOf(4.1))` → Returns `-1`|
| `equals(Object obj)`| Checks if this object is equal to another.| `Double.valueOf(3.2).equals(Double.valueOf(3.2))` → Returns `true`|
| `isInfinite()`| Checks if the value is infinite.| `Double.valueOf(Double.POSITIVE_INFINITY).isInfinite()` → Returns `true`|
| `isNaN()`| Checks if the value is "Not-a-Number" (NaN).| `Double.valueOf(Double.NaN).isNaN()` → Returns `true`|
| `toString()`| Returns a string representation of the value.| `Double.valueOf(3.14).toString()` → Returns `"3.14"`|
| `hashCode()`| Returns the hash code for the object.| `Double.valueOf(3.14).hashCode()`|
| `byteValue()`| Converts the `Double` value to a `byte`.| `Double.valueOf(3.2).byteValue()` → Returns `3`|
| `shortValue()`| Converts the `Double` value to a `short`.| `Double.valueOf(3.2).shortValue()` → Returns `3`|
| `intValue()`| Converts the `Double` value to an `int`.| `Double.valueOf(3.2).intValue()` → Returns `3`|
| `longValue()`| Converts the `Double` value to a `long`.| `Double.valueOf(3.2).longValue()` → Returns `3L`|
| `doubleValue()`| Returns the primitive `double` value of this `Double` object.| `Double.valueOf(3.2).doubleValue()` → Returns `3.2`|
| `floatValue()`| Converts the `Double` value to a `float`.| `Double.valueOf(3.2).floatValue()` → Returns `3.2f`|

---

### Relational Operators and Their Equivalent Methods

| **Operator** | **Operator Usage**                    | **Equivalent Method**   | **Usage**                                                     |
|--------------|---------------------------------------|--------------------------|---------------------------------------------------------------|
| `==`         | `value1 == value2; // false`          | `equals(Object)`         | `Double.valueOf(value1).equals(value2); // false`             |
| `!=`         | `value1 != value2; // true`           | `!equals(Object)`        | `!Double.valueOf(value1).equals(value2); // true`             |
| `<`          | `value1 < value2; // true`            | `compare(double, double)`| `Double.compare(value1, value2) < 0; // true`                 |
| `>`          | `value1 > value2; // false`           | `compare(double, double)`| `Double.compare(value1, value2) > 0; // false`                |
| `<=`         | `value1 <= value2; // true`           | `compare(double, double)`| `Double.compare(value1, value2) <= 0; // true`                |
| `>=`         | `value1 >= value2; // false`          | `compare(double, double)`| `Double.compare(value1, value2) >= 0; // false`               |
| `+`          | `double sum = value1 + value2;`      | N/A                      | Arithmetic operators are used directly; no equivalent method. |
| `-`          | `double diff = value1 - value2;`     | N/A                      | Arithmetic operators are used directly; no equivalent method. |
| `*`          | `double product = value1 * value2;`  | N/A                      | Arithmetic operators are used directly; no equivalent method. |
| `/`          | `double quotient = value1 / value2;` | N/A                      | Arithmetic operators are used directly; no equivalent method. |
| `%`          | `double remainder = value1 % value2;`| N/A                      | Arithmetic operators are used directly; no equivalent method. |

---

## Example Code for Double Wrapper Class

```java
public class DoubleWrapperExample {
    public static void main(String[] args) {
        // Double Examples
        Double doubleValue = Double.valueOf(3.14);
        System.out.println("Double as float: " + doubleValue.floatValue());
        System.out.println("Hexadecimal Representation (Double): " + Double.toHexString(3.14));

        // Comparing Doubles
        int compareResult = Double.compare(3.14, 2.5);
        System.out.println("Comparison Result (Double): " + compareResult);

        // Parsing Strings
        double parsedDouble = Double.parseDouble("2.71");
        System.out.println("Parsed Double: " + parsedDouble);

        // Converting Double to other types
        int intValue = doubleValue.intValue();
        System.out.println("Double as Int: " + intValue);
    }
}
```

> **For more:** [`DoubleWrapperClass.java`](./DoubleWrapperClass.java)
