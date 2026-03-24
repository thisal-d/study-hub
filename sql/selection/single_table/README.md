# Single Table

---

## 🚀 What You'll Learn

1. Basic `SELECT` — retrieve all columns
2. Selecting specific columns
3. Sorting results with `ORDER BY`
4. Counting rows using `COUNT()`
5. Summing values with `SUM()`
6. Calculating averages with `AVG()`
7. Renaming columns and tables with `AS` (aliases)
8. Filtering rows using `WHERE`
9. Grouping data with `GROUP BY`
10. Filtering grouped data with `HAVING`

---

## 🛠️ Setup: Create Sample Table & Insert Data

Run this SQL script on your local machine to create the `employees` table with sample data. It’s the foundation for all the exercises ahead.

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE,
    is_active BIT
);

INSERT INTO employees (id, name, department, salary, hire_date, is_active) VALUES
(1, 'Alice Johnson', 'Sales', 55000.00, '2018-03-15', 1),
(2, 'Bob Smith', 'Marketing', 62000.00, '2019-07-01', 1),
(3, 'Charlie Davis', 'Sales', 47000.00, '2020-01-20', 0),
(4, 'Diana Garcia', 'HR', 51000.00, '2017-11-10', 1),
(5, 'Ethan Brown', 'IT', 72000.00, '2016-05-30', 1),
(6, 'Fiona White', 'IT', 68000.00, '2021-08-22', 0),
(7, 'George Clark', 'Marketing', 58000.00, '2020-10-12', 1),
(8, 'Hannah Lee', 'Sales', 54000.00, '2019-02-14', 1);
```

---

## 📋 Table Schema & Sample Snapshot

| Column       | Type          | Description                    |
| ------------ | ------------- | ------------------------------ |
| `id`         | INT           | Unique employee identifier     |
| `name`       | VARCHAR(100)  | Employee's full name           |
| `department` | VARCHAR(50)   | Department employee belongs to |
| `salary`     | DECIMAL(10,2) | Employee salary                |
| `hire_date`  | DATE          | Date employee was hired        |
| `is_active`  | BIT       | Employee active status         |

### Sample Data Preview

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

## 🗂 Navigation — Your Learning Path

| Step | Concept                    | File                                         |
| ---- | -------------------------- | -------------------------------------------- |
| 1    | Basic SELECT (all columns) | [01-basic-select.md](01-basic-select.md)     |
| 2    | SELECT specific columns    | [02-select-columns.md](02-select-columns.md) |
| 3    | ORDER BY                   | [03-order-by.md](03-order-by.md)             |
| 4    | COUNT()                    | [04-count.md](04-count.md)                   |
| 5    | SUM()                      | [05-sum.md](05-sum.md)                       |
| 6    | AVG()                      | [06-avg.md](06-avg.md)                       |
| 7    | AS (aliases)               | [07-aliases.md](07-aliases.md)               |
| 8    | WHERE                      | [08-where.md](08-where.md)                   |
| 9    | GROUP BY                   | [09-group-by.md](09-group-by.md)             |
| 10   | HAVING                     | [10-having.md](10-having.md)                 |
| 11   | PRO (Advanced Concepts)    | [11-pro.md](11-pro.md)                       |

---

### Ready to begin?

[Start from the beginning →](01-basic-select.md)
