# Wrapper Classes for Integer Types in Java

## Overview

The wrapper classes for primitive integer types in Java are `Byte`, `Short`, `Integer`, and `Long`. These classes provide utility methods for working with their respective types and are part of the `java.lang` package. They also offer boxing and unboxing functionalities for converting between primitive types and objects.

---

## Key Features of Integer Wrapper Classes

1. **Boxing and Unboxing**: Automatic conversion between primitive types and wrapper classes.
2. **Constants**: Constants like `MAX_VALUE`, `MIN_VALUE`, `POSITIVE_INFINITY`, etc., for each type.
3. **Utility Methods**: Methods for parsing, converting, and performing operations on numeric values.

---

## Byte, Short, Integer, and Long Wrapper Class Operations

### **Arithmetic Operations**
| **Operation**  | **Symbol** | **Example**               |
|-----------------|------------|---------------------------|
| Addition        | `+`        | `value + value`      |
| Subtraction     | `-`        | `value - value`      |
| Multiplication  | `*`        | `value * value`      |
| Division        | `/`        | `value / value`      |
| Modulo          | `%`        | `value % value`      |

### **Relational Operations**
| **Operation**       | **Symbol** | **Example**                 |
|----------------------|------------|-----------------------------|
| Equal to            | `==`       | `value == value`      |
| Not equal to        | `!=`       | `value != value`      |
| Greater than        | `>`        | `value > value`       |
| Less than           | `<`        | `value < value`       |
| Greater than or equal to | `>=` | `value >= value`      |
| Less than or equal to   | `<=` | `value <= value`      |

## Static Methods

### **Common Static Methods for Byte, Short, Integer, and Long**

| **Method**                | **Description**                                                        | **Example**                               |
|---------------------------|------------------------------------------------------------------------|-------------------------------------------|
| `compare(T, T)`        | Compares two values of the type `T`                                     | `Integer.compare(5, 10)` → Returns `-1`   |
| `parse<Type>(String)`    | Parses a `String` as a primitive value of type `Type`                  | `Integer.parseInt("42")` → Returns `42`  |
| `toString()`               | Converts the value to its string representation                        | `Integer.toString(42)` → Returns `"42"`   |
| `valueOf(String)`        | Returns the corresponding wrapper class instance from a string value  | `Integer.valueOf("42")` → Returns `42`   |
| `bitCount()`               | Returns the number of one-bits in the binary representation of the value. | `Integer.bitCount(5)` → Returns `2` |
| `highestOneBit()`         | Returns the value of the highest one-bit in the binary representation.  | `Integer.highestOneBit(5)` → Returns `4`|
| `lowestOneBit()`          | Returns the value of the lowest one-bit in the binary representation.   | `Integer.lowestOneBit(5)` → Returns `1`|
| `numberOfLeadingZeros()`  | Returns the number of leading zeros in the binary representation.      | `Integer.numberOfLeadingZeros(5)` → Returns `29`|
| `numberOfTrailingZeros()` | Returns the number of trailing zeros in the binary representation.     | `Integer.numberOfTrailingZeros(5)` → Returns `0`|
| `reverse()`               | Reverses the bits of the number.                                       | `Integer.reverse(5)` → Returns `268435456`|
| `rotateLeft()`            | Rotates the bits left by a specified number of positions.               | `Integer.rotateLeft(5, 1)` → Returns `10`|
| `rotateRight()`           | Rotates the bits right by a specified number of positions.              | `Integer.rotateRight(5, 1)` → Returns `2`|
| `toOctalString()`         | Converts an `int` to an octal string                                    | `Integer.toOctalString(10)` → Returns `"12"` |
| `toBinaryString()`        | Converts an `int` to a binary string                                   | `Integer.toBinaryString(10)` → Returns `"1010"` |

---

### **Static Methods for Byte**

| **Method**             | **Description**                            | **Example**                                |
|------------------------|--------------------------------------------|--------------------------------------------|
| `parseByte(String)`   | Parses a `String` to a `byte` value        | `Byte.parseByte("10")` → Returns `10`     |
| `toString(byte)`      | Converts a `byte` to its string representation | `Byte.toString((byte)10)` → Returns `"10"` |


---

### **Static Methods for Short**

| **Method**             | **Description**                            | **Example**                                |
|------------------------|--------------------------------------------|--------------------------------------------|
| `parseShort(String)`  | Parses a `String` to a `short` value       | `Short.parseShort("20")` → Returns `20`   |
| `toString(short)`     | Converts a `short` to its string representation | `Short.toString((short)5)` → Returns `"5"` |

---

### **Static Methods for Integer**

| **Method**             | **Description**                            | **Example**                                |
|------------------------|--------------------------------------------|--------------------------------------------|
| `parseInt(String)`    | Parses a `String` to an `int` value        | `Integer.parseInt("42")` → Returns `42`    |
| `toHexString(int)`    | Converts an `int` to a hexadecimal string  | `Integer.toHexString(255)` → Returns `"ff"`|
| `toBinaryString(int)`      | Converts an `int` to a binary string       | `Integer.toBinaryString(10)` → Returns `"1010"` |

---

### **Static Methods for Long**

| **Method**             | **Description**                            | **Example**                                |
|------------------------|--------------------------------------------|--------------------------------------------|
| `parseLong(String s)`   | Parses a `String` to a `long` value        | `Long.parseLong("10000000000")` → Returns `10000000000` |
| `toBinaryString(long l)`| Converts a `long` to a binary string       | `Long.toBinaryString(10)` → Returns `"1010"`|

---

## Instance Methods

### **Common Instance Methods for Byte, Short, Integer, and Long**

| **Method**                | **Description**                                                            | **Example**                                |
|---------------------------|----------------------------------------------------------------------------|--------------------------------------------|
| `compareTo(T other)`       | Compares this object with the specified object.                            | `Integer.valueOf(42).compareTo(10)` → Returns `1` |
| `equals(Object obj)`       | Compares this object to the specified object.                              | `Integer.valueOf(42).equals(42)` → Returns `true`|
| `byteValue()`              | Returns the value as a `byte`.                                             | `Integer.valueOf(42).byteValue()` → Returns `42`|
| `shortValue()`             | Returns the value as a `short`.                                            | `Integer.valueOf(42).shortValue()` → Returns `42`|
| `intValue()`               | Returns the value as an `int`.                                             | `Integer.valueOf(42).intValue()` → Returns `42`|
| `longValue()`              | Returns the value as a `long`.                                            | `Integer.valueOf(42).longValue()` → Returns `42`|
| `floatValue()`             | Returns the value as a `float`.                                           | `Integer.valueOf(42).floatValue()` → Returns `42.0f`|
| `doubleValue()`            | Returns the value as a `double`.                                          | `Integer.valueOf(42).doubleValue()` → Returns `42.0`|

---

### **Instance Methods for Byte**

| **Method**                | **Description**                          | **Example**                               |
|---------------------------|------------------------------------------|-------------------------------------------|
| `byteValue()`              | Returns the value as a `byte`.          | `Byte.valueOf((byte) 10).byteValue()` → Returns `10` |
| `compareTo(Byte)`    | Compares this `Byte` with another `Byte`.     | `Byte.valueOf((byte) 10).compareTo(Byte.valueOf((byte) 5))` → Returns `1` |
| `longValue()`           | Converts the `byte` to a `long` value      | `Byte.valueOf((byte) 10).longValue()` → Returns `10L` |
| `doubleValue()`         | Converts the `byte` to a `double` value    | `Byte.valueOf((byte) 10).doubleValue()` → Returns `10.0` |
| `floatValue()`          | Converts the `byte` to a `float` value     | `Byte.valueOf((byte) 10).floatValue()` → Returns `10.0f` |
---

### **Instance Methods for Short**

| **Method**                | **Description**                          | **Example**                               |
|---------------------------|------------------------------------------|-------------------------------------------|
| `shortValue()`             | Returns the value as a `short`.         | `Short.valueOf((short) 5).shortValue()` → Returns `5` |
| `compareTo(Short)`   | Compares this `Short` with another `Short`.   | `Short.valueOf((short) 10).compareTo(Short.valueOf((short) 5))` → Returns `1` |
| `longValue()`           | Converts the `short` to a `long` value     | `Short.valueOf((short) 10).longValue()` → Returns `10L` |
| `doubleValue()`         | Converts the `short` to a `double` value   | `Short.valueOf((short) 10).doubleValue()` → Returns `10.0` |
| `floatValue()`          | Converts the `short` to a `float` value    | `Short.valueOf((short) 10).floatValue()` → Returns `10.0f` |
---

### **Instance Methods for Integer**

| **Method**                | **Description**                              | **Example**                               |
|---------------------------|----------------------------------------------|----------------------------------------------|
| `intValue()`               | Returns the value as an `int`.              | `Integer.valueOf(42).intValue()` → Returns `42`|
| `compareTo(Integer)` | Compares this `Integer` with another `Integer`.   | `Integer.valueOf(42).compareTo(Integer.valueOf(10))` → Returns `1` |

---

### **Instance Methods for Long**

| **Method**| **Description**| **Example**|
|-----------|----------------|------------|
| `longValue()`| Returns the value as a `long`.| `Long.valueOf(42L).longValue()` → Returns `42L`|
| `compareTo(Long)`| Compares this `Long` with another `Long`.| `Long.valueOf(42L).compareTo(Long.valueOf(10L))` → Returns `1` |

---

### Relational Operators and Their Equivalent Methods

```java
Integer value1 = 100; // Can be `Bute`, `Short`, `Integer`, `Long`.
Integer value2 = 200; // Can be `Bute`, `Short`, `Integer`, `Long`.
```

| **Operator** | **Operator Usage**                    | **Equivalent Method**   | **Usage**                                                     |
|--------------|---------------------------------------|--------------------------|---------------------------------------------------------------|
| `==`         | `value1 == value2; // false`          | `equals(Object)`         | `val.equals(value2); // false`            |
| `!=`         | `value1 != value2; // true`           | `!equals(Object)`        | `!val.equals(value2); // true`            |
| `<`          | `value1 < value2; // true`            | `compare(int, int)`      | `Integer.compare(value1, value2) < 0; // true`                |
| `>`          | `value1 > value2; // false`           | `compare(int, int)`      | `Integer.compare(value1, value2) > 0; // false`               |
| `<=`         | `value1 <= value2; // true`           | `compare(int, int)`      | `Integer.compare(value1, value2) <= 0; // true`               |
| `>=`         | `value1 >= value2; // false`          | `compare(int, int)`      | `Integer.compare(value1, value2) >= 0; // false`              |

---

```java
public class IntegerWrapperExample {
    public static void main(String[] args) {
        // Integer Examples
        Byte byteValue = Byte.valueOf((byte) 3);
        Short shortValue = Short.valueOf((short) 5);
        Integer intValue = Integer.valueOf(10);
        Long longValue = Long.valueOf(100L);

        // Converting Integer to other types
        System.out.println("Byte as int: " + byteValue.intValue());
        System.out.println("Short as int: " + shortValue.intValue());
        System.out.println("Integer as long: " + intValue.longValue());
        System.out.println("Long as int: " + longValue.intValue());

        // Comparing Integer Types
        int byteCompare = Byte.compare(byteValue, (byte) 4);
        int shortCompare = Short.compare(shortValue, (short) 7);
        int intCompare = Integer.compare(intValue, 12);
        int longCompare = Long.compare(longValue, 200L);

        System.out.println("Byte Comparison Result: " + byteCompare);
        System.out.println("Short Comparison Result: " + shortCompare);
        System.out.println("Integer Comparison Result: " + intCompare);
        System.out.println("Long Comparison Result: " + longCompare);

        // Parsing Strings
        byte parsedByte = Byte.parseByte("10");
        short parsedShort = Short.parseShort("20");
        int parsedInt = Integer.parseInt("30");
        long parsedLong = Long.parseLong("40");

        System.out.println("Parsed Byte: " + parsedByte);
        System.out.println("Parsed Short: " + parsedShort);
        System.out.println("Parsed Integer: " + parsedInt);
        System.out.println("Parsed Long: " + parsedLong);
    }
}
```

> **For more:** [`IntegerWrapperClasses.java`](./IntegerWrapperClasses.java)
