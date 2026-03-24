# `Boolean` Wrapper Class in Java

## Overview
The `Boolean` wrapper class in Java provides a way to use a `boolean` value as an object. It belongs to the `java.lang` package and is useful when working with collections like `ArrayList` that require objects rather than primitives.

---

## Characteristics of `Boolean` Wrapper Class
| **Feature**       | **Details**                                |
|--------------------|--------------------------------------------|
| **Package**        | `java.lang`                               |
| **Default Value**  | `false`                                   |
| **Immutable**      | `Boolean` objects are immutable.          |
| **Constants**      | `Boolean.TRUE` and `Boolean.FALSE`<br><br> `Boolean value = Boolean.FALSE;` <br> `System.out.println(value); // false`|


---

## Static Methods
| **Method**               | **Description**                                         |Return Type| **Example**                                   |
|---------------------------|---------------------------------------------------------|----------|-----------------------------------------------|
| `valueOf(boolean)`| Returns a `Boolean` instance representing the specified `boolean` value. | **`Boolean`** | `Boolean.valueOf(true);`          |
| `valueOf(String)` | Returns a `Boolean` instance representing the value of the specified `String`. | **`Boolean`** | ` Boolean.valueOf("true");` |
| `parseBoolean(String)` | Parses the `String` argument as a `boolean`. | **`Boolean`**       | `Boolean.parseBoolean("true");`   |
| `compare(boolean, boolean)` | Compares two `boolean` values. | **`int`**            | `Boolean.compare(true, false);`  |
| `logicalAnd(boolean boolean)` | Performs a logical AND on two values. | **`boolean`**   | `rBoolean.logicalAnd(true, false);` |
| `logicalOr(boolean, boolean)` | Performs a logical OR on two values. | **`boolean`**    | `Boolean.logicalOr(true, false);` |
| `logicalXor(boolean, boolean)` | Performs a logical XOR on two values. | **`boolean`**   | `Boolean.logicalXor(true, false);` |
| `getBoolean(String)`  | Returns the value of the system property as a `Boolean`. | **`Boolean`** | `Boolean.getBoolean("propName");` |

---

## Instance Methods

```java
Boolean value = Boolean.TRUE // Using Boolean.TRUE instead of primitive boolean
```

| **Method**                | **Description**                                       |Return Type| **Example**                                   |
|----------------------------|-------------------------------------------------------|-----------|-----------------------------------------------|
| `booleanValue()`           | Returns the primitive `boolean` value of this `Boolean` object. | **`boolean`** | `value.booleanValue();`    |
| `toString()`               | Returns a `String` representation of this `Boolean`. | **`String`** | `value.toString();`         |
| `equals(Object)`       | Compares this `Boolean` to another object.            | **`Boolean`** | `value.equals(true);`         |
| `compareTo(Boolean)`     | Compares this `Boolean` object to another `Boolean`.  | **`int`** | `value.compareTo(false);` |
| `hashCode()`               | Returns the hash code for this `Boolean` object.      | **`int`** | `value.hashCode();`         |

---

## Boolean Operations

### **Logical Operators**
| **Operation**  | **Symbol** | **Description**                             | **Example**                    |
|-----------------|------------|---------------------------------------------|--------------------------------|
| AND            | `&&`       | Returns `true` if both operands are `true`. | `booleanValue1 && booleanValue2` |
| OR             | `\|\|`       | Returns `true` if at least one operand is `true`. | `booleanValue1 \|\| booleanValue2` |
| NOT            | `!`        | Reverses the value of the operand.          | `!booleanValue1`               |

### **Relational Operators**
| **Operation**       | **Symbol** | **Description**               | **Example**         |
|----------------------|------------|-------------------------------|---------------------|
| Equal to            | `==`       | Returns `true` if both values are equal. | `booleanValue1 == booleanValue2` |
| Not equal to        | `!=`       | Returns `true` if values are not equal. | `booleanValue1 != booleanValue2` |

---

## Boolean Operators and Their Equivalent Methods

```java
Boolean value1 = Boolean.TRUE // Using Boolean.TRUE instead of primitive boolean
Boolean value2 = Boolean.TRUE // Using Boolean.TRUE instead of primitive boolean
```

| **Operator** | operator usage                | **Equivalent Method**  | **usage**                           |
|--------------|-------------------------------|------------------------|-------------------------------------|
| `==`         | `value1 == value2; // true`   | `equals(Object)`       | `value1.equals(value2); // true`    |
| `!=`         | `value1 != value2; // false`  | `!equals(Object)`      | `!value1.equals(value2); // false`  |
| `||`         | `value1 \|\| value2; // true`  | `logicalOr(boolean, boolean)` | `logicalOr(value1, value2) // true`  |
| `&&`         | `value1 && value2; // false`  | `logicalAnd(boolean, boolean)` | `logicalAnd(value1, value2) // false`  |
| ~~XOR~~     | `(!value1 && value2) \|\| (value1 && !value2); // false`  | `logicalXor(boolean, boolean)` | `logicalXor(value1, value2) // false`  |


---

## Key Features of the `Boolean` Class

- **Immutability**: `Boolean` objects are immutable, meaning their value cannot be changed once created.

---

## Example Code
```java
public class BooleanWrapperExample {
    public static void main(String[] args) {
        // Static Methods
        
        // Returns a Boolean object, true
        Boolean b1 = Boolean.valueOf(true); 
        // Converts the string "true" to the primitive boolean type, which is true
        boolean b2 = Boolean.parseBoolean("true"); 
        // Compares two boolean values; returns 1 (since true is greater than false)
        int compareResult = Boolean.compare(true, false); 
        // Returns the result of logical AND operation; false (since one operand is false)
        boolean andResult = Boolean.logicalAnd(true, false); 
        // Returns the result of logical OR operation; true (since one operand is true)
        boolean orResult = Boolean.logicalOr(true, false); 
        // Returns the result of logical XOR operation; true (since operands are different)
        boolean xorResult = Boolean.logicalXor(true, false); 
        
        // Instance Methods
        
        // Converts the Boolean object to a primitive boolean; true
        boolean primitiveValue = b1.booleanValue(); 
        // Converts the Boolean object to a String; "true"
        String stringValue = b1.toString(); 
        // Compares the Boolean object with Boolean.FALSE; false (b1 is true, not false)
        boolean isEqual = b1.equals(Boolean.FALSE); 
        // Compares the Boolean objects; returns 1 (since true > false)
        int compareToResult = b1.compareTo(Boolean.FALSE); 
        // Returns the hash code for the Boolean object; 1231 for true
        int hashCode = b1.hashCode(); 
    }
}

```

> **For more:** [BooleanWrapperClass.java](./BooleanWrapperClass.java)
