# Double Types in Java

## Overview
In Java, the `double` type is used to store decimal numbers with double precision. It is particularly useful for mathematical calculations, scientific data, and when dealing with numbers that require more precision than the `float` type.

### Double Type in Java:
1. **`double`**: 64-bit double-precision floating-point number.

---

## Double Comparison Table

| **Type**   | **Size (bits)** | **Range**                              | **Default Value** |
|------------|-----------------|----------------------------------------|-------------------|
| `double`   | 64              | ~±4.9E-324 to ±1.8E308                 | 0.0               |

---

## Operations on Double Types

### **Arithmetic Operations**
| **Operation**  | **Symbol** | **Example**               |
|-----------------|------------|---------------------------|
| Addition        | `+`        | `doubleValue + doubleValue` |
| Subtraction     | `-`        | `doubleValue - doubleValue` |
| Multiplication  | `*`        | `doubleValue * doubleValue` |
| Division        | `/`        | `doubleValue / doubleValue` |
| Modulo          | `%`        | `doubleValue % doubleValue` |

### **Relational Operations**
| **Operation**       | **Symbol** | **Example**                 |
|----------------------|------------|-----------------------------|
| Equal to            | `==`       | `doubleValue == doubleValue` |
| Not equal to        | `!=`       | `doubleValue != doubleValue` |
| Greater than        | `>`        | `doubleValue > doubleValue`  |
| Less than           | `<`        | `doubleValue < doubleValue`  |
| Greater than or equal to | `>=` | `doubleValue >= doubleValue` |
| Less than or equal to   | `<=` | `doubleValue <= doubleValue` |

---

## Type Casting

### **Implicit Casting** (Widening)
- Automatically converts smaller types (e.g., `float`) to larger types (e.g., `double`).
    - Example:
        ```java
        float floatValue = 10.5f;
        double doubleValue = floatValue;  // No explicit cast needed
        ```

### **Explicit Casting** (Narrowing)
- Converts larger types (e.g., `double`) to smaller types (e.g., `float`) explicitly.
    - Example:
        ```java
        double doubleValue = 100.99;
        float floatValue = (float) doubleValue;  // May lead to precision loss
        ```

---

## Precision and Rounding Issues
Floating-point types may introduce rounding errors due to the way numbers are stored in memory. It’s important to consider precision when using these types.

---

## Example Code
```java
public class DoubleExamples {
    public static void main(String[] args) {
        // Initialize variable
        double doubleValue = 10.5;

        // Arithmetic Operations
        double sum = doubleValue + doubleValue;
        System.out.println("Sum: " + sum);

        // Relational Operations
        boolean isEqual = (doubleValue == doubleValue);
        System.out.println("Is Equal: " + isEqual);

        // Type Casting
        // Implicit casting (float to double)
        float floatValue = 10.5f;
        double implicitCast = floatValue;
        System.out.println("Implicit cast from float to double: " + implicitCast);

        // Explicit casting (double to float)
        double anotherDoubleValue = 100.99;
        float explicitCast = (float) anotherDoubleValue;
        System.out.println("Explicit cast from double to float: " + explicitCast);

        // Precision Issue Example
        double result = 0.1 + 0.2;
        System.out.println("0.1 + 0.2 == 0.3? " + (result == 0.3));  // Output: false
    }
}
```

> **For more:** [`DoubleDataType.java`](./DoubleDataType.java)
