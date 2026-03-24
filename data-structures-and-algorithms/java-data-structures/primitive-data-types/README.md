# Primitive Data Types in Java

This folder contains a structured guide to **primitive data types** and their **wrapper classes** in Java. It is divided into two sections:

1. **Primitive Types**: The foundational data types in Java.
2. **Wrapper Classes**: Object representations of primitive types.

---

## Folder Structure

### 1. **Primitive Types**
The `primitive-types/` folder contains detailed explanations and examples of Java's primitive data types.

| **Primitive Type** | **Description**                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| [`boolean`](./primitive-types/boolean/)           | Represents true/false values.                                                  |
| [`char`](./primitive-types/char/)            | Represents a single character.                                                |
| [`int`](./primitive-types/int/)                | Represents 32-bit integers.                                                   |
| [`float`](./primitive-types/float/)            | Represents 32-bit floating-point numbers.                                     |
| [`double`](./primitive-types/double/)            | Represents 64-bit floating-point numbers with higher precision.               |

### 2. **Wrapper Classes**
The `wrapper-classes/` folder contains files explaining Java's wrapper classes, which provide object-based representations of primitive data types.

| **Wrapper Class** | **Primitive Type** | **Description**                          |
|--------------------|--------------------|------------------------------------------|
| [`Boolean`](./wrapper-classes/Boolean/)       | `boolean`         | Wraps a boolean value into an object.    |
| [`Character`](./wrapper-classes/Character/)        | `char`            | Wraps a character value into an object.  |
| [`Integer`](./wrapper-classes/Integer/)          | `int`             | Wraps an int value into an object.       |
| [`Float`](./wrapper-classes/Float/)            | `float`           | Wraps a float value into an object.      |
| [`Double`](./wrapper-classes/Double/)           | `double`          | Wraps a double value into an object.     |

---

## Example Usage

### Primitive Types

```java
// Example: Using primitive types
boolean isJavaFun = true;
char grade = 'A';
int age = 25;
float price = 10.99f;
double pi = 3.14159;

System.out.println("Is Java fun? " + isJavaFun);
System.out.println("Grade: " + grade);
System.out.println("Age: " + age);
System.out.println("Price: " + price);
System.out.println("Pi: " + pi);
```

### Wrapper Classes

```java
// Example: Using wrapper classes
Boolean isJavaFun = Boolean.valueOf(true);
Character grade = Character.valueOf('A');
Integer age = Integer.valueOf(25);
Float price = Float.valueOf(10.99f);
Double pi = Double.valueOf(3.14159);

System.out.println("Is Java fun? " + isJavaFun);
System.out.println("Grade: " + grade);
System.out.println("Age: " + age);
System.out.println("Price: " + price);
System.out.println("Pi: " + pi);
```


## Why Use Wrapper Classes?
- **Object Manipulation**: Wrapper classes allow primitive values to be treated as objects.
- **Utility Methods**: Provide utility methods for parsing, conversion, and manipulation.
- **Collections Support**: Enables storing primitive values in data structures like ArrayList and HashMap.
