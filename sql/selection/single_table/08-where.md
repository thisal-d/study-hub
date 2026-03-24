
[⬅️ Home](README.md) | [⬅️ Previous](07-aliases.md) | [Next ➡️](09-group-by.md)

# 8. WHERE

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

1. Retrieve all columns for employees in the Sales department.

   * Expected Output:

     | id | name          | department | salary   | hire\_date | is\_active |
     | -- | ------------- | ---------- | -------- | ---------- | ---------- |
     | 1  | Alice Johnson | Sales      | 55000.00 | 2018-03-15 | 1       |
     | 3  | Charlie Davis | Sales      | 47000.00 | 2020-01-20 | 0      |
     | 8  | Hannah Lee    | Sales      | 54000.00 | 2019-02-14 | 1       |

2. Retrieve all columns for employees with a salary greater than 60000.

   * Expected Output:

     | id | name        | department | salary   | hire\_date | is\_active |
     | -- | ----------- | ---------- | -------- | ---------- | ---------- |
     | 2  | Bob Smith   | Marketing  | 62000.00 | 2019-07-01 | 1       |
     | 5  | Ethan Brown | IT         | 72000.00 | 2016-05-30 | 1       |
     | 6  | Fiona White | IT         | 68000.00 | 2021-08-22 | 0      |

3. Retrieve all columns for employees who are currently active (`is_active = 1`).

   * Expected Output:

     | id | name          | department | salary   | hire\_date | is\_active |
     | -- | ------------- | ---------- | -------- | ---------- | ---------- |
     | 1  | Alice Johnson | Sales      | 55000.00 | 2018-03-15 | 1       |
     | 2  | Bob Smith     | Marketing  | 62000.00 | 2019-07-01 | 1       |
     | 4  | Diana Garcia  | HR         | 51000.00 | 2017-11-10 | 1       |
     | 5  | Ethan Brown   | IT         | 72000.00 | 2016-05-30 | 1       |
     | 7  | George Clark  | Marketing  | 58000.00 | 2020-10-12 | 1       |
     | 8  | Hannah Lee    | Sales      | 54000.00 | 2019-02-14 | 1       |

4. Retrieve all columns for employees hired before 2019-01-01.

   * Expected Output:

     | id | name          | department | salary   | hire\_date | is\_active |
     | -- | ------------- | ---------- | -------- | ---------- | ---------- |
     | 4  | Diana Garcia  | HR         | 51000.00 | 2017-11-10 | 1       |
     | 5  | Ethan Brown   | IT         | 72000.00 | 2016-05-30 | 1       |
     | 1  | Alice Johnson | Sales      | 55000.00 | 2018-03-15 | 1       |

5. Retrieve `name` and `salary` of active employees in the IT department.

   * Expected Output:

     | name        | salary   |
     | ----------- | -------- |
     | Ethan Brown | 72000.00 |

6. Retrieve the names of employees in Marketing or HR departments.

   * Expected Output:

     | name         |
     | ------------ |
     | Bob Smith    |
     | Diana Garcia |
     | George Clark |

7. Retrieve all columns for employees with salary between 50000 and 60000.

   * Expected Output:

     | id | name          | department | salary   | hire\_date | is\_active |
     | -- | ------------- | ---------- | -------- | ---------- | ---------- |
     | 1  | Alice Johnson | Sales      | 55000.00 | 2018-03-15 | 1       |
     | 4  | Diana Garcia  | HR         | 51000.00 | 2017-11-10 | 1       |
     | 7  | George Clark  | Marketing  | 58000.00 | 2020-10-12 | 1       |
     | 8  | Hannah Lee    | Sales      | 54000.00 | 2019-02-14 | 1       |

---

## Common Mistakes & Explanations

| Mistake                                          | Explanation                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| Using `=` instead of `LIKE` for pattern matching | `WHERE` with `=` checks exact matches; `LIKE` is for patterns.        |
| Forgetting to use quotes for string values       | String literals must be enclosed in quotes, e.g., `'Sales'`.          |
| Using `AND` vs `OR` incorrectly                  | `AND` requires all conditions true; `OR` requires any condition true. |
| Using `WHERE` on columns not present             | Check column names carefully before filtering.                        |

---

Filtering data is fundamental for querying exactly what you need!

---

[⬅️ Home](README.md) | [⬅️ Previous](07-aliases.md) | [Next ➡️](09-group-by.md)
