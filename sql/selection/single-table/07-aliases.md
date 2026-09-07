[⬅️ Home](README.md) | [⬅️ Previous](06-avg.md) | [Next ➡️](08-where.md)

# 7. AS (aliases)

---

## Table Schema & Sample Data

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE,
    is_active BIT
);
```

| id | name          | department | salary   | hire\_date | is\_active |
| -- | ------------- | ---------- | -------- | ---------- | ---------- |
| 1  | Alice Johnson | Sales      | 55000.00 | 2018-03-15 | 1       |
| 2  | Bob Smith     | Marketing  | 62000.00 | 2019-07-01 | 1       |
| 3  | Charlie Davis | Sales      | 47000.00 | 2020-01-20 | 0      |
| 4  | Diana Garcia  | HR         | 51000.00 | 2017-11-10 | 1       |
| 5  | Ethan Brown   | IT         | 72000.00 | 2016-05-30 | 1       |
| 6  | Fiona White   | IT         | 68000.00 | 2021-08-22 | 0      |
| 7  | George Clark  | Marketing  | 58000.00 | 2020-10-12 | 1       |
| 8  | Hannah Lee    | Sales      | 54000.00 | 2019-02-14 | 1       |

---

## Questions

1. Select the `name` column and alias it as `employee_name`.

   * Expected Output:

     | employee\_name |
     | -------------- |
     | Alice Johnson  |
     | Bob Smith      |
     | Charlie Davis  |
     | Diana Garcia   |
     | Ethan Brown    |
     | Fiona White    |
     | George Clark   |
     | Hannah Lee     |

2. Select the `salary` column and alias it as `annual_salary`.

   * Expected Output:

     | annual\_salary |
     | -------------- |
     | 55000.00       |
     | 62000.00       |
     | 47000.00       |
     | 51000.00       |
     | 72000.00       |
     | 68000.00       |
     | 58000.00       |
     | 54000.00       |

3. Select the `department` column and alias it as `dept`.

   * Expected Output:

     | dept      |
     | --------- |
     | Sales     |
     | Marketing |
     | Sales     |
     | HR        |
     | IT        |
     | IT        |
     | Marketing |
     | Sales     |

4. Select the `name` and `salary` columns, aliasing them as `employee_name` and `annual_salary`, ordered by `annual_salary` descending.

   * Expected Output (partial):

     | employee\_name | annual\_salary |
     | -------------- | -------------- |
     | Ethan Brown    | 72000.00       |
     | Fiona White    | 68000.00       |
     | Bob Smith      | 62000.00       |
     | George Clark   | 58000.00       |
     | Alice Johnson  | 55000.00       |
     | Hannah Lee     | 54000.00       |
     | Diana Garcia   | 51000.00       |
     | Charlie Davis  | 47000.00       |

5. Calculate the average salary and alias the result as `avg_salary`.

   * Expected Output:

     | avg\_salary  |
     | ------------ |
     | 58375.000000 |

---

## Common Mistakes & Explanations

| Mistake                                          | Explanation                                                                      |
| ------------------------------------------------ | -------------------------------------------------------------------------------- |
| Forgetting to use `AS` keyword                   | While `AS` is optional in some SQL dialects, it's clearer to use it for aliases. |
| Using invalid alias names                        | Aliases should not contain spaces or reserved keywords unless quoted.            |
| Aliasing aggregate functions without column name | Always alias aggregate results for readability.                                  |

---

Using aliases improves query readability and result presentation!

---

[⬅️ Home](README.md) | [⬅️ Previous](06-avg.md) | [Next ➡️](08-where.md)
