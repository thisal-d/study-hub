[⬅️ Home](README.md) | [Next ➡️](02-select-columns.md)


# 1. Basic SELECT (All Columns)

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


1. Retrieve all columns for all employees.

   - Expected Output:

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


2. Retrieve all columns but limit the number of rows returned to 5. (Note: This introduces `TOP`, optional)

    - Expected Output

        | id | name          | department | salary   | hire\_date | is\_active |
        | -- | ------------- | ---------- | -------- | ---------- | ---------- |
        | 1  | Alice Johnson | Sales      | 55000.00 | 2018-03-15 | 1       |
        | 2  | Bob Smith     | Marketing  | 62000.00 | 2019-07-01 | 1       |
        | 3  | Charlie Davis | Sales      | 47000.00 | 2020-01-20 | 0      |
        | 4  | Diana Garcia  | HR         | 51000.00 | 2017-11-10 | 1       |
        | 5  | Ethan Brown   | IT         | 72000.00 | 2016-05-30 | 1       |

---

## Common Mistakes & Explanations

| Mistake                                           | Explanation                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| Forgetting `SELECT` keyword                       | All SQL queries to retrieve data must begin with `SELECT`.         |
| Using `SELECT` without specifying columns or `*`  | You must specify what to select, e.g., `SELECT *` for all columns. 
---

Keep practicing to get comfortable with retrieving all data from a table! When you're ready, move on to selecting specific columns.

---

[⬅️ Home](README.md) | [Next ➡️](02-select-columns.md)
