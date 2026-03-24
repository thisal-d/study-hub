# `Array` in Java

## Overview
An array in Java is a data structure that can hold multiple values of the same type. Arrays in Java are zero-indexed, meaning the first element is accessed at index `0`. Once the size of an array is defined, it cannot be changed.

---

## Characteristics of Arrays

| **Feature**          | **Details**                                           |
|----------------------|-------------------------------------------------------|
| **Package**          | `java.lang`                                           |
| **Fixed Size**       | The size of an array is fixed once initialized.       |
| **Indexed**          | Elements are accessed using an index.                 |
| **Default Values**   | Numeric types default to `0`, boolean defaults to `false`, and object references to `null`. |

---

## Key Features of Arrays

- **Fixed Size**: Once an array is initialized, its size cannot be changed.
- **Zero-Indexing**: Arrays are zero-indexed, meaning the first element is accessed at index `0`.
- **Homogeneous Elements**: All elements in an array are of the same data type.
- **Memory Efficiency**: Arrays are efficient in terms of memory storage for large amounts of data.

---

## Operations on Array Types

### **Array Operations**

| **Operation**         | **Symbol**    | **Example**                                      |
|-----------------------|---------------|--------------------------------------------------|
| Accessing Elements    | `[]`          | `arr[0]`                                         |
| Length of Array       | `.length`     | `arr.length`                                     |
| Initializing Array    | `new`          | `type[] arr = new type[5];`<br> &nbsp; &nbsp; eg:- <br> &nbsp; &nbsp; &nbsp; &nbsp; `int`[] arr = new `int`[5];<br> &nbsp; &nbsp; &nbsp; &nbsp; `double`[] arr = new `double`[5]; <br> &nbsp; &nbsp; &nbsp; &nbsp; `String`[] arr = new `String`[5];                      |
| Iterating over Array  | `for-each`    | for (`int` num : arr) { <br> &nbsp; &nbsp; &nbsp; System.out.println(num); <br> } |

---

## Static Methods

```java
int arr[] = {20, 41, 3, 23}; // Use this as an example

int arr_2[] = new int[3]; // Empty array
```

| **Method**                                  | **Description**                                                            | **Return Type**    | **Example**                                     |
|---------------------------------------------|----------------------------------------------------------------------------|--------------------|-------------------------------------------------|
| `copyOf(int[] original, int newLength)`     | Copies the specified array, truncating or padding with `0` or `null`.       | `int[]`            | `Arrays.copyOf(arr, 2);`                       |
| `fill(int[] array, int val)`                | Fills the array with the specified value.                                   | `void`             | `Arrays.fill(arr, 5);`                         |
| `equals(int[] a, int[] b)`                  | Compares two arrays for equality.                                           | `boolean`          | `Arrays.equals(arr1, arr2);`                   |
| `sort(int[] a)`                             | Sorts the specified array in ascending order.                              | `void`             | `Arrays.sort(arr);`                            |
| `binarySearch(int[] a, int key)`            | Searches for a value in a sorted array. Returns the index of the search key, or a negative value if not found. | `int`              | `Arrays.binarySearch(arr, 5);`                 |
| `deepToString(Object[] arr)`                | Returns a string representation of a multidimensional array.                | `String`           | `Arrays.deepToString(arr);`                    |
| `toString(Object[] arr)`                    | Returns a string representation of the array, using `Arrays.toString()` to format the array as a string. | `String`           | `Arrays.toString(arr);`                        |
| `copyOfRange(T[] arr, int from, int to)`    | Copies a specified range from the array to a new array.                     | `T[]`              | `Arrays.copyOfRange(arr, 2, 5);`               |
| `compare(T[] arr1, T[] arr2)`               | Compares two arrays lexicographically. Returns a negative value if the first array is less than the second, positive if greater, or 0 if equal. | `int`              | `Arrays.compare(arr1, arr2);`                  |
| `stream(T[] arr)`                           | Converts the array into a stream, enabling operations like filtering, mapping, and reducing. | `Stream<T>`        | `Arrays.stream(arr1);`     | `T Stream`          | `Arrays.stream(arr1)` |

---

## Instance Methods

```java
int arr[] = {20, 41, 3, 23}; // Use this as an example
```

| **Method**  | **Description**                          | **Return Type**    | **Example**                                  | **Retuwn Value** |
|-------------|------------------------------------------|--------------------|----------------------------------------------|------------------|
| `length`    | Returns the length of the array.         | `int`              | `arr.length;`                                |`4` (Length of the array)|
| `clone()`   | Creates a copy of the array.             | `Object`           | `arr.clone();`                               |`{20, 41, 3, 23}` (A new array)|
| `hashCode()`| Returns a hash code value for the array. | `int`              | `arr.hashCode();`                            | An integer (e.g : `12345678`)|

---

## Example Code

```java
import java.util.Arrays;

public class ArrayExample {
    public static void main(String[] args) {
        // Create an array
        int[] arr = {5, 2, 9, 1, 5, 6};

        // Get the length of the array
        System.out.println("Array length: " + arr.length);

        // Access elements
        System.out.println("Element at index 0: " + arr[0]);

        // Sort the array
        Arrays.sort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));

        // Search for an element
        int index = Arrays.binarySearch(arr, 5);
        System.out.println("Index of 5: " + index);

        // Fill the array with a specific value
        Arrays.fill(arr, 0);
        System.out.println("Filled array: " + Arrays.toString(arr));

        // Clone the array
        int[] clonedArray = arr.clone();
        System.out.println("Cloned array: " + Arrays.toString(clonedArray));
    }
}
```

> **For more:** [`ArrayDataType.java`](./ArrayDataType.java)
