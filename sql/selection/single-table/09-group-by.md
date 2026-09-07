[⬅️ Home](README.md) | [⬅️ Previous](08-where.md) | [Next ➡️](10-having.md)

# 9. GROUP BY

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

1. Retrieve each department and the count of employees in that department.

   * Expected Output:

     | department | count |
     | ---------- | ----- |
     | Sales      | 3     |
     | Marketing  | 2     |
     | HR         | 1     |
     | IT         | 2     |

2. Retrieve each department and the total salary of employees in that department.

   * Expected Output:

     | department | total\_salary |
     | ---------- | ------------- |
     | Sales      | 156000.00     |
     | Marketing  | 120000.00     |
     | HR         | 51000.00      |
     | IT         | 140000.00     |

3. Retrieve each department and the average salary of employees in that department.

   * Expected Output:

     | department | avg\_salary |
     | ---------- | ----------- |
     | Sales      | 52000.00    |
     | Marketing  | 60000.00    |
     | HR         | 51000.00    |
     | IT         | 70000.00    |

4. Retrieve each department and the count of active employees in that department (`is_active = 1`).

   * Expected Output:

     | department | active\_count |
     | ---------- | ------------- |
     | Sales      | 2             |
     | Marketing  | 2             |
     | HR         | 1             |
     | IT         | 1             |

5. Retrieve each department and the average salary of employees hired after 2017-01-01.

   * Expected Output:

     | department | avg\_salary |
     | ---------- | ----------- |
     | Sales      | 52000.00    |
     | Marketing  | 60000.00    |
     | HR         | 51000.00    |
     | IT         | 68000.00    |

---

## Common Mistakes & Explanations

| Mistake                                                                             | Explanation                                                            |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Selecting non-aggregated columns without `GROUP BY`                                 | All selected columns must be either aggregated or in `GROUP BY`.       |
| Using aggregate functions without `GROUP BY` when expecting grouped results         | Without `GROUP BY`, aggregate functions apply to entire table.         |
| Forgetting to use conditions with `HAVING` instead of `WHERE` when filtering groups | `WHERE` filters rows before grouping; `HAVING` filters after grouping. |

---

Grouping data is essential for summary and analysis of categorized data!

---

[⬅️ Home](README.md) | [⬅️ Previous](08-where.md) | [Next ➡️](10-having.md)
