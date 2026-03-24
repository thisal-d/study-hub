# Comprehensive List of Instance Methods in the `String` Class

| **Method**                                   | **Description**                                                            | **Return Type**    | **Example**                                    |
|----------------------------------------------|----------------------------------------------------------------------------|--------------------|------------------------------------------------|
| `length()`                                   | Returns the length of the string.                                          | `int`              | `str.length();`                               |
| `charAt(int index)`                          | Returns the character at the specified index.                              | `char`             | `str.charAt(0);`                              |
| `substring(int beginIndex, int endIndex)`    | Returns a substring between the specified indices.                         | `String`           | `str.substring(0, 4);`                        |
| `equals(Object obj)`                         | Checks if two strings are equal.                                           | `boolean`          | `str.equals("Hello");`                        |
| `equalsIgnoreCase(String anotherString)`     | Compares two strings, ignoring case differences.                           | `boolean`          | `str.equalsIgnoreCase("hello");`              |
| `indexOf(String str)`                        | Returns the index of the first occurrence of the specified substring.      | `int`              | `str.indexOf("H");`                           |
| `lastIndexOf(String str)`                    | Returns the index of the last occurrence of the specified substring.       | `int`              | `str.lastIndexOf("o");`                       |
| `contains(CharSequence s)`                   | Checks if the string contains the specified sequence.                      | `boolean`          | `str.contains("ell");`                        |
| `toLowerCase()`                              | Converts all characters in the string to lowercase.                        | `String`           | `str.toLowerCase();`                          |
| `toUpperCase()`                              | Converts all characters in the string to uppercase.                        | `String`           | `str.toUpperCase();`                          |
| `replace(char oldChar, char newChar)`        | Replaces all occurrences of a character with another character.            | `String`           | `str.replace('H', 'h');`                      |
| `split(String regex)`                        | Splits the string into an array of substrings based on the specified regex.| `String[]`         | `str.split(" ");`                             |
| `trim()`                                     | Removes leading and trailing whitespace from the string.                   | `String`           | `str.trim();`                                 |
| `translateEscapes()`                         | Returns a string whose value is this string, with escape sequences translated as if in a string literal. | `String` | `str.translateEscapes();` |
| `chars()`                                    | Returns a stream of int zero-extending the char values from this sequence. | `IntStream`        | `str.chars();`                                 |
| `compareTo(String anotherString)`            | Compares two strings lexicographically.                                    | `int`              | `str.compareTo("Hello");`                     |
| `compareToIgnoreCase(String anotherString)`  | Compares two strings lexicographically, ignoring case differences.         | `int`              | `str.compareToIgnoreCase("hello");`           |
| `concat(String str)`                         | Concatenates the specified string to the current string.                   | `String`           | `str.concat(" world");`                       |
| `formatted(Object... args)`                  | Returns a formatted string using the specified arguments.                  | `String`           | `str.formatted("Hello %s", "world");`        |
| `contentEquals(CharSequence seq)`            | Compares the string to the specified sequence of characters.               | `boolean`          | `str.contentEquals("Hello");`                 |
| `contentEquals(StringBuffer sb)`             | Compares the string to the specified StringBuffer.                         | `boolean`          | `str.contentEquals(new StringBuffer("Hello"));`|
| `describeConstable()`                        | Describes the string constant, if any.                                     | `Optional<String>` | `str.describeConstable();`                    |
| `endsWith(String suffix)`                    | Checks if the string ends with the specified suffix.                       | `boolean`          | `str.endsWith("world");`                      |
| `getBytes()`                                 | Encodes the string into a byte array.                                      | `byte[]`           | `str.getBytes();`                             |
| `getClass()`                                 | Returns the runtime class of the string.                                   | `Class<?>`         | `str.getClass();`                             |
| `getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)` | Copies characters from the string into a destination array.              | `void`             | `str.getChars(0, 5, dest, 0);`                |
| `hashCode()`                                 | Returns the hash code of the string.                                       | `int`              | `str.hashCode();`                             |
| `indent(int n)`                              | Indents the string with the specified number of spaces.                    | `String`           | `str.indent(4);`                              |
| `indexOf(String str)`                        | Returns the index of the first occurrence of the substring.               | `int`              | `str.indexOf("world");`                       |
| `indexOf(String str, int fromIndex)`         | Returns the index of the first occurrence of the substring from the specified index. | `int`           | `str.indexOf("world", 5);`                    |
| `indexOf(int ch)`                            | Returns the index of the first occurrence of the character.               | `int`              | `str.indexOf('H');`                           |
| `indexOf(int ch, int fromIndex)`             | Returns the index of the first occurrence of the character from the specified index. | `int`            | `str.indexOf('H', 2);`                        |
| `lines()`                                    | Returns a stream of lines from the string.                                 | `Stream<String>`   | `str.lines();`                                |
| `replace(char oldChar, char newChar)`        | Replaces all occurrences of a character with another character.           | `String`           | `str.replace('H', 'h');`                      |
| `replaceAll(String regex, String replacement)`| Replaces each substring matching the regular expression with the given replacement. | `String`       | `str.replaceAll("world", "everyone");`        |
| `replaceFirst(String regex, String replacement)`| Replaces the first substring matching the regular expression with the given replacement. | `String` | `str.replaceFirst("world", "everyone");`     |
| `repeat(int count)`                          | Returns a string that is a repeated concatenation of the string.           | `String`           | `str.repeat(3);`                              |
| `intern()`                                   | Returns a canonical representation for the string.                        | `String`           | `str.intern();`                               |
| `isBlank()`                                  | Checks if the string is empty or contains only white space.               | `boolean`          | `str.isBlank();`                              |
| `isEmpty()`                                  | Checks if the string is empty.                                            | `boolean`          | `str.isEmpty();`                              |
| `matches(String regex)`                      | Checks if the string matches the specified regular expression.            | `boolean`          | `str.matches("\\d+");`                        |
| `stripIndent()`                              | Removes the indentation from the string.                                  | `String`           | `str.stripIndent();`                          |
| `stripLeading()`                             | Removes leading white space from the string.                              | `String`           | `str.stripLeading();`                         |
| `toCharArray()`                              | Converts the string into a character array.                                | `char[]`           | `str.toCharArray();`                          |
| `toString()`                                 | Returns the string itself.                                                | `String`           | `str.toString();`                             |
