# Boolean Type in Java

## Overview
In Java, the **boolean** type is used to represent one of two values: **true** or **false**. It is commonly used in decision-making statements and control flow, such as `if`, `while`, and `for` loops.

---

## Characteristics of Boolean Type

| **Type**   | **Size** | **Values**          | **Default Value** |
|------------|----------|---------------------|-------------------|
| `boolean`  | 1-bit    | `true` or `false`   | `false`           |

---

## Boolean Operations

```java
boolean value1 = true; // primitive boolean
boolean value2 = false; // primitive boolean
```

### **Logical Operators**
| **Operation**  | **Symbol** | **Description**                             | **Example**                    |
|-----------------|------------|---------------------------------------------|--------------------------------|
| AND            | `&&`       | Returns `true` if both operands are `true`. | `value1 && value2` |
| OR             | `\|\|`       | Returns `true` if at least one operand is `true`. | `value1 \|\| value2` |
| NOT            | `!`        | Reverses the value of the operand.          | `!value1`               |

### **Relational Operators**
| **Operation**       | **Symbol** | **Description**               | **Example**         |
|----------------------|------------|-------------------------------|---------------------|
| Equal to            | `==`       | Returns `true` if both values are equal. | `value1 == value2` |
| Not equal to        | `!=`       | Returns `true` if values are not equal. | `value1 != value2` |

---

## Example Code
```java
public class BooleanExamples {
    public static void main(String[] args) {
        // Initialize boolean variables
        boolean isJavaFun = true;
        boolean isFishTasty = false;

        // Print boolean values
        System.out.println("Is Java fun? " + isJavaFun);
        System.out.println("Is fish tasty? " + isFishTasty);

        // Logical AND
        boolean resultAnd = isJavaFun && isFishTasty;
        System.out.println("Logical AND: " + resultAnd);

        // Logical OR
        boolean resultOr = isJavaFun || isFishTasty;
        System.out.println("Logical OR: " + resultOr);

        // Logical NOT
        System.out.println("Logical NOT (isJavaFun): " + !isJavaFun);

        // Relational Operations
        System.out.println("Is isJavaFun equal to isFishTasty? " + (isJavaFun == isFishTasty));
        System.out.println("Is isJavaFun not equal to isFishTasty? " + (isJavaFun != isFishTasty));
    }
}
```

> **For more:** [`BooleanDataType.java`](./BooleanDataType.java)
