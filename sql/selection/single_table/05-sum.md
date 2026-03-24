[⬅️ Home](README.md) | [⬅️ Previous](04-count.md) | [Next ➡️](06-avg.md)

# 5. SUM()

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

1. Calculate the total sum of all employees' salaries.

   * Expected Output:

     | total\_salary |
     | ------------- |
     | 467000.00     |

2. Calculate the total salary of employees in the Sales department.

   * Expected Output:

     | total\_salary |
     | ------------- |
     | 156000.00     |

3. Calculate the total salary of active employees (`is_active = 1`).

   * Expected Output:

     | total\_salary |
     | ------------- |
     | 352000.00     |

4. Retrieve the department and total salary of employees in each department (combine with `GROUP BY`).

   * Expected Output:

     | department | total\_salary |
     | ---------- | ------------- |
     | Sales      | 156000.00     |
     | Marketing  | 120000.00     |
     | HR         | 51000.00      |
     | IT         | 140000.00     |

5. Calculate the total salary of employees hired after 2018-01-01 (combine with `WHERE`).

   * Expected Output:

     | total\_salary |
     | ------------- |
     | 344000.00     |

---

## Common Mistakes & Explanations

| Mistake                                              | Explanation                                                      |
| ---------------------------------------------------- | ---------------------------------------------------------------- |
| Forgetting `GROUP BY` when aggregating by department | When summing per department, you must use `GROUP BY department`. |
| Using `SUM()` on non-numeric columns                 | `SUM()` only works on numeric columns like `salary`.             |
| Forgetting to filter with `WHERE` before aggregation | `WHERE` filters rows before aggregation happens.                 |

---

Practice summing numeric values to understand how aggregate functions help with data analysis!

---

[⬅️ Home](README.md) | [⬅️ Previous](04-count.md) | [Next ➡️](06-avg.md)
