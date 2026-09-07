[⬅️ Home](README.md) | [⬅️ Previous](01-basic-select.md) | [Next ➡️](03-order-by.md)


# 2. SELECT Specific Columns

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
````

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

1. Retrieve only the `name` column for all employees.
    - Expected Output:
  
        | name          |
        | ------------- |
        | Alice Johnson |
        | Bob Smith     |
        | Charlie Davis |
        | Diana Garcia  |
        | Ethan Brown   |
        | Fiona White   |
        | George Clark  |
        | Hannah Lee    |

2. Retrieve the `name` and `department` columns for all employees.\
    - Expected Output

        | name          | department |
        | ------------- | ---------- |
        | Alice Johnson | Sales      |
        | Bob Smith     | Marketing  |
        | Charlie Davis | Sales      |
        | Diana Garcia  | HR         |
        | Ethan Brown   | IT         |
        | Fiona White   | IT         |
        | George Clark  | Marketing  |
        | Hannah Lee    | Sales      |

3. Retrieve the `id`, `name`, and `salary` columns for all employees.
    - Exepected Ouput

        
        | id | name          | salary   |
        | -- | ------------- | -------- |
        | 1  | Alice Johnson | 55000.00 |
        | 2  | Bob Smith     | 62000.00 |
        | 3  | Charlie Davis | 47000.00 |
        | 4  | Diana Garcia  | 51000.00 |
        | 5  | Ethan Brown   | 72000.00 |
        | 6  | Fiona White   | 68000.00 |
        | 7  | George Clark  | 58000.00 |
        | 8  | Hannah Lee    | 54000.00 |


4. Retrieve the `name` and `salary` of all employees, but only show the first 5 rows. (Optional: combine with `TOP`)

5. Retrieve the `department` and `hire_date` columns for all employees.

---


## Common Mistakes & Explanations

| Mistake                                                             | Explanation                                                 |
| ------------------------------------------------------------------- | ----------------------------------------------------------- |
| Forgetting commas between columns                                   | When selecting multiple columns, separate them with commas. |
| Using column names that don't exist                                 | Always double-check column names match the schema.          |
| Using `SELECT name department` instead of `SELECT name, department` | Missing commas cause syntax errors.                         |

---

Keep practicing selecting specific columns to improve your SQL query precision!

---

[⬅️ Home](README.md) | [⬅️ Previous](01-basic-select.md) | [Next ➡️](03-order-by.md)