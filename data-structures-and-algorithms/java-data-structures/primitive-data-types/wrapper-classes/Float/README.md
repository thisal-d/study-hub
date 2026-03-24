# Float Wrapper Class in Java

## Overview
The `Float` class in Java is a wrapper class for the primitive `float` type. It provides utility methods to work with single-precision floating-point numbers and is part of the `java.lang` package.

---

## Key Features of the Float Wrapper Class

1. **Boxing and Unboxing**: Automatic conversion between primitive types and the `Float` wrapper class.
2. **Constants**: The class provides constants like `MAX_VALUE`, `MIN_VALUE`, `POSITIVE_INFINITY`, etc.
3. **Utility Methods**: Methods for parsing, converting, and performing mathematical operations on float values.

---

## Float Wrapper Class Operations

### **Arithmetic Operations**
| **Operation**  | **Symbol** | **Example**               |
|-----------------|------------|---------------------------|
| Addition        | `+`        | `floatValue + floatValue`  |
| Subtraction     | `-`        | `floatValue - floatValue`  |
| Multiplication  | `*`        | `floatValue * floatValue`  |
| Division        | `/`        | `floatValue / floatValue`  |
| Modulo          | `%`        | `floatValue % floatValue`  |

### **Relational Operations**
| **Operation**       | **Symbol** | **Example**                 |
|----------------------|------------|-----------------------------|
| Equal to            | `==`       | `floatValue == floatValue`  |
| Not equal to        | `!=`       | `floatValue != floatValue`  |
| Greater than        | `>`        | `floatValue > floatValue`   |
| Less than           | `<`        | `floatValue < floatValue`   |
| Greater than or equal to | `>=` | `floatValue >= floatValue`  |
| Less than or equal to   | `<=` | `floatValue <= floatValue`  |

---

## Static Methods

| **Method**| **Description**| **Example**|
|-----------|----------------|------------|
| `compare(float f1, float f2)`| Compares two `float` values.| `Float.compare(3.2f, 4.1f)` → Returns `-1`|
| `parseFloat(String s)`| Parses a `String` as a primitive `float`.| `Float.parseFloat("3.14")` → Returns `3.14f`|
| `toHexString(float f)`| Converts a `float` to its hexadecimal string representation.| `Float.toHexString(3.14f)` → Returns `"0x1.91eb86p1"`|
| `isNaN(float v)`| Checks if the value is "Not-a-Number" (NaN).| `Float.isNaN(Float.NaN)` → Returns `true`|
| `isInfinite(float v)`| Checks if the value is infinite.| `Float.isInfinite(Float.POSITIVE_INFINITY)` → Returns `true`|

---

## Instance Methods

| **Method**| **Description**| **Example**|
|-----------|----------------|------------|
| `compareTo(Float anotherFloat)`| Compares this `Float` object with another.| `Float.valueOf(3.2f).compareTo(Float.valueOf(4.1f))` → Returns `-1`|
| `equals(Object obj)`| Checks if this object is equal to another.| `Float.valueOf(3.2f).equals(Float.valueOf(3.2f))` → Returns `true`|
| `isInfinite()`| Checks if the value is infinite.| `Float.valueOf(Float.POSITIVE_INFINITY).isInfinite()` → Returns `true`|
| `isNaN()`| Checks if the value is "Not-a-Number" (NaN).| `Float.valueOf(Float.NaN).isNaN()` → Returns `true`|
| `toString()`| Returns a string representation of the value.| `Float.valueOf(3.14f).toString()` → Returns `"3.14"`|
| `hashCode()`| Returns the hash code for the object.| `Float.valueOf(3.14f).hashCode()`|
| `byteValue()`| Converts the `Float` value to a `byte`.| `Float.valueOf(3.2f).byteValue()` → Returns `3`|
| `shortValue()`| Converts the `Float` value to a `short`.| `Float.valueOf(3.2f).shortValue()` → Returns `3`|
| `intValue()`| Converts the `Float` value to an `int`.| `Float.valueOf(3.2f).intValue()` → Returns `3`|
| `longValue()`| Converts the `Float` value to a `long`.| `Float.valueOf(3.2f).longValue()` → Returns `3L`|
| `floatValue()`| Returns the primitive `float` value of this `Float` object.| `Float.valueOf(3.2f).floatValue()` → Returns `3.2f`|

---

### Relational Operators and Their Equivalent Methods

| **Operator** | **Operator Usage**                    | **Equivalent Method**   | **Usage**                                                     |
|--------------|---------------------------------------|--------------------------|---------------------------------------------------------------|
| `==`         | `value1 == value2; // false`          | `equals(Object)`         | `Float.valueOf(value1).equals(value2); // false`              |
| `!=`         | `value1 != value2; // true`           | `!equals(Object)`        | `!Float.valueOf(value1).equals(value2); // true`              |
| `<`          | `value1 < value2; // true`            | `compare(float, float)`  | `Float.compare(value1, value2) < 0; // true`                  |
| `>`          | `value1 > value2; // false`           | `compare(float, float)`  | `Float.compare(value1, value2) > 0; // false`                 |
| `<=`         | `value1 <= value2; // true`           | `compare(float, float)`  | `Float.compare(value1, value2) <= 0; // true`                 |
| `>=`         | `value1 >= value2; // false`          | `compare(float, float)`  | `Float.compare(value1, value2) >= 0; // false`                |

---

## Example Code for Float Wrapper Class

```java
public class FloatWrapperExample {
    public static void main(String[] args) {
        // Float Examples
        Float floatValue = Float.valueOf(3.14f);
        System.out.println("Float as double: " + floatValue.doubleValue());
        System.out.println("Hexadecimal Representation (Float): " + Float.toHexString(3.14f));

        // Comparing Floats
        int compareResult = Float.compare(3.14f, 2.5f);
        System.out.println("Comparison Result (Float): " + compareResult);

        // Parsing Strings
        float parsedFloat = Float.parseFloat("2.71");
        System.out.println("Parsed Float: " + parsedFloat);

        // Converting Float to other types
        int intValue = floatValue.intValue();
        System.out.println("Float as Int: " + intValue);
    }
}
```

> **For more:** [`FloatWrapperClass.java`](./FloatWrapperClass.java)
