[⬅️ Home](README.md) | [⬅️ Previous](03-order-by.md) | [Next ➡️](05-sum.md)

# 4. COUNT()

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

1. Count the total number of employees.

   * Expected Output:

     | count |
     | ----- |
     | 8     |

2. Count how many employees are currently active (`is_active = 1`).

   * Expected Output:

     | count |
     | ----- |
     | 6     |

3. Count the number of distinct departments.

   * Expected Output:

     | count |
     | ----- |
     | 4     |

4. Retrieve the department and count of employees in each department (combine with `GROUP BY`).

   * Expected Output:

     | department | count |
     | ---------- | ----- |
     | Sales      | 3     |
     | Marketing  | 2     |
     | HR         | 1     |
     | IT         | 2     |

5. Count the number of employees hired after 2018-01-01 (combine with `WHERE`).

   * Expected Output:

     | count |
     | ----- |
     | 4     |

---

## Common Mistakes & Explanations

| Mistake                                                 | Explanation                                                                                     |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Using `COUNT(column_name)` and expecting to count NULLs | `COUNT(column_name)` counts only non-null values. Use `COUNT(*)` to count all rows.             |
| Forgetting to use `GROUP BY` when aggregating by column | When counting per group, `GROUP BY` is required to avoid errors.                                |
| Using `WHERE` after aggregation functions               | Filtering with `WHERE` applies before aggregation; use `HAVING` for post-aggregation filtering. |

---

Try counting different subsets of data to better understand aggregate functions!

---

[⬅️ Home](README.md) | [⬅️ Previous](03-order-by.md) | [Next ➡️](05-sum.md)
