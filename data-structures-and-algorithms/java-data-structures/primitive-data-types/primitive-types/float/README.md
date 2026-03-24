# Float Types in Java

## Overview
In Java, the `float` type is used to store decimal numbers with single precision. It is particularly useful for mathematical calculations, scientific data, and when dealing with numbers that require fractional components.

### Float Type in Java:
1. **`float`**: 32-bit single-precision floating-point number.

---

## Float Comparison Table

| **Type**   | **Size (bits)** | **Range**                              | **Default Value** |
|------------|-----------------|----------------------------------------|-------------------|
| `float`    | 32             | ~±1.4E-45 to ±3.4E38                   | 0.0f             |

---

## Operations on Float Types

### **Arithmetic Operations**
| **Operation**  | **Symbol** | **Example**               |
|-----------------|------------|---------------------------|
| Addition        | `+`        | `floatValue + floatValue` |
| Subtraction     | `-`        | `floatValue - floatValue` |
| Multiplication  | `*`        | `floatValue * floatValue` |
| Division        | `/`        | `floatValue / floatValue` |
| Modulo          | `%`        | `floatValue % floatValue` |

### **Relational Operations**
| **Operation**       | **Symbol** | **Example**                 |
|----------------------|------------|-----------------------------|
| Equal to            | `==`       | `floatValue == floatValue` |
| Not equal to        | `!=`       | `floatValue != floatValue` |
| Greater than        | `>`        | `floatValue > floatValue`  |
| Less than           | `<`        | `floatValue < floatValue`  |
| Greater than or equal to | `>=` | `floatValue >= floatValue` |
| Less than or equal to   | `<=` | `floatValue <= floatValue` |

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
public class FloatExamples {
    public static void main(String[] args) {
        // Initialize variable
        float floatValue = 10.5f;

        // Arithmetic Operations
        float sum = floatValue + floatValue;
        System.out.println("Sum: " + sum);

        // Relational Operations
        boolean isEqual = (floatValue == floatValue);
        System.out.println("Is Equal: " + isEqual);

        // Type Casting
        // Implicit casting (float to double)
        double implicitCast = floatValue;
        System.out.println("Implicit cast from float to double: " + implicitCast);

        // Explicit casting (double to float)
        double doubleValue = 100.99;
        float explicitCast = (float) doubleValue;
        System.out.println("Explicit cast from double to float: " + explicitCast);

        // Precision Issue Example
        float result = 0.1f + 0.2f;
        System.out.println("0.1 + 0.2 == 0.3? " + (result == 0.3f));  // Output: false
    }
}
```

> **For more:** [`FloatDataType.java`](./FloatDataType.java)
