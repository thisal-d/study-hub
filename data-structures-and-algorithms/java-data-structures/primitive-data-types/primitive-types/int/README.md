# Integer Types in Java

## Overview
In Java, integer types are used to store whole numbers of varying sizes and ranges. These types are efficient for different needs, from small byte-sized values to large long-sized values.

### Integer Types in Java:
1. **`byte`**: 8-bit signed integer
2. **`short`**: 16-bit signed integer
3. **`int`**: 32-bit signed integer (default type for integers)
4. **`long`**: 64-bit signed integer

---

## Comparison Table

| **Type**   | **Size (bits)** | **Range**                               | **Default Value** |
|------------|-----------------|-----------------------------------------|-------------------|
| `byte`     | 8              | -128 to 127                             | 0                 |
| `short`    | 16             | -32,768 to 32,767                       | 0                 |
| `int`      | 32             | -2,147,483,648 to 2,147,483,647         | 0                 |
| `long`     | 64             | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 0L                |

---

## Operations on Integer Types

### **Arithmetic Operations**
| **Operation**  | **Symbol** | **Example**             |
|-----------------|------------|-------------------------|
| Addition        | `+`        | `intValue + byteValue` |
| Subtraction     | `-`        | `shortValue - byteValue` |
| Multiplication  | `*`        | `intValue * shortValue` |
| Division        | `/`        | `longValue / intValue` |
| Modulo          | `%`        | `shortValue % byteValue` |

### **Relational Operations**
| **Operation**       | **Symbol** | **Example**               |
|----------------------|------------|---------------------------|
| Equal to            | `==`       | `intValue == longValue`   |
| Not equal to        | `!=`       | `intValue != longValue`   |
| Greater than        | `>`        | `intValue > longValue`    |
| Less than           | `<`        | `intValue < longValue`    |
| Greater than or equal to | `>=` | `intValue >= longValue`   |
| Less than or equal to   | `<=` | `intValue <= longValue`   |

---

## Type Casting

### **Implicit Casting** (Widening)
- Automatically converts smaller types to larger types.
    - Example: 
        ```java
        byte byteValue = 10;
        int intValue = byteValue;  // No explicit cast needed
        ```
### **Explicit  Casting** (Narrowing)
- Converts larger types to smaller types explicitly.
    - Example: 
        ```java
        int intValue = 1000;
        byte byteValue = (byte) intValue;  // May lead to data loss
        ```

## Overflow and Underflow
When calculations exceed the range of the data type:

- **Overflow**: Value wraps around to the minimum value.
- **Underflow**: Value wraps around to the maximum value.

    - Example:
        ```java
        byte overflowExample = (byte) (Byte.MAX_VALUE + 1);
        System.out.println("Overflow: " + overflowExample);  // Output: -128

        byte underflowExample = (byte) (Byte.MIN_VALUE - 1);
        System.out.println("Underflow: " + underflowExample);  // Output: 127
        ``` 


## Example Code 
```java
public class IntExamples {
    public static void main(String[] args) {
        // Initialize variables
        int a = 100;
        long b = 100000L;

        // Arithmetic Operations
        long sum = a + b;
        System.out.println("Sum: " + sum);

        // Relational Operations
        boolean isEqual = (a == b);
        System.out.println("Is Equal: " + isEqual);

        // Type Casting
        // Implicit casting (int to long)
        long implicitCast = a;
        System.out.println("Implicit cast from int to long: " + implicitCast);

        // Explicit casting (long to int)
        int explicitCast = (int) b;
        System.out.println("Explicit cast from long to int: " + explicitCast);

        // Overflow Example
        byte maxByte = Byte.MAX_VALUE; // 127
        byte overflow = (byte) (maxByte + 1); // Overflow to -128
        System.out.println("Overflow Example (127 + 1): " + overflow);
    }
}
```

> **For more:** [`IntDataTypes.java`](./IntDataTypes.java)
