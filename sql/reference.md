# 📘 SQL Reference Cheatsheet

**Based on lecture notes (Lectures 02 & 03) – with improved examples, explanations, and structure.**

---

## 1. Introduction

SQL (Structured Query Language) is how we interact with relational databases.  
It helps you **define tables**, **insert data**, **query and update information**.

### Main Parts of SQL

- **DDL (Data Definition Language):** Create, modify, and remove tables & structures.
- **DML (Data Manipulation Language):** Insert, update, delete, and query data.

---

## 2. Data Definition Language (DDL)

### 2.1. CREATE – Creating Tables

**Syntax (SQL Server):**

```sql
CREATE TABLE table_name (
    column_name datatype [constraint],
    ...
);
```

**Example:**

```sql
CREATE TABLE Employee (
    empId INT PRIMARY KEY,
    empName NVARCHAR(50) NOT NULL,
    dob DATE,
    salary DECIMAL(10,2) CHECK (salary > 0),
    deptId INT,
    CONSTRAINT emp_dept_fk FOREIGN KEY (deptId)
        REFERENCES Department(deptId)
        ON DELETE SET NULL
);
```
> Note: SQL Server supports `ON DELETE SET NULL` only if the foreign key column allows NULLs.

**Explanation:**

- `PRIMARY KEY` – Uniquely identifies each record.
- `NOT NULL` – Column must have a value.
- `CHECK` – Restricts values (e.g., salary must be positive).
- `FOREIGN KEY` – Ensures valid references to another table.

---

### 2.2. ALTER – Modifying Tables

**Add a column:**

```sql
ALTER TABLE Employee ADD hireDate DATE;
```

**Add a constraint:**

```sql
ALTER TABLE Employee
ADD CONSTRAINT chk_salary CHECK (salary < 500000);
```

**Remove a column:**

```sql
ALTER TABLE Employee DROP COLUMN hireDate;
```

**Rename a column (SQL Server syntax):**

```sql
EXEC sp_rename 'Employee.empName', 'name', 'COLUMN';
```

---

### 2.3. DROP – Deleting Tables

```sql
DROP TABLE Employee;
```

**Deletes the table and all its data permanently!**

---

## 3. Data Manipulation Language (DML)

### 3.1. INSERT – Adding Data

**Insert full row:**

```sql
INSERT INTO Department VALUES (1, 'IT', 'Colombo');
```

**Insert specific columns:**

```sql
INSERT INTO Department(deptId, deptName)
VALUES (2, 'Finance');
```

**Insert multiple rows (SQL Server 2008+):**

```sql
INSERT INTO Department (deptId, deptName, location)
VALUES
    (3, 'HR', 'Kandy'),
    (4, 'R&D', 'Matara');
```

---

### 3.2. DELETE – Removing Data

**Delete specific row(s):**

```sql
DELETE FROM Department WHERE deptId = 2;
```

**Delete all rows:**

```sql
DELETE FROM Department;
```

---

### 3.3. UPDATE – Changing Data

```sql
UPDATE Department
SET location = 'Negombo'
WHERE deptId = 3;
```

**Update multiple columns:**

```sql
UPDATE Employee
SET salary = salary * 1.10, dob = '1990-01-01'
WHERE empId = 5;
```

---

## 4. SELECT – Querying Data

### 4.1. Basic SELECT

```sql
SELECT empName, salary
FROM Employee;
```

**Output:**

| empName  | salary   |
|----------|----------|
| John     | 75000.00 |
| Lisa     | 90000.00 |

---

### 4.2. Filtering with WHERE

```sql
SELECT empName
FROM Employee
WHERE salary > 80000;
```

**Output:**

| empName |
|---------|
| Lisa    |
| Amal    |

---

### 4.3. Pattern Matching with LIKE

```sql
SELECT empName
FROM Employee
WHERE empName LIKE 'L%';
```

- `%` = any number of characters
- `_` = exactly one character

**Output:**

| empName |
|---------|
| Lisa    |
| Leon    |

---

### 4.4. IS [NOT] NULL

```sql
SELECT empName
FROM Employee
WHERE dob IS NULL;
```

**Output:**

| empName |
|---------|
| Amal    |

---

### 4.5. DISTINCT – Unique Values

```sql
SELECT DISTINCT location
FROM Department;
```

**Output:**

| location |
|----------|
| Colombo  |
| Kandy    |
| Matara   |
| Negombo  |

---

### 4.6. BETWEEN – Range

```sql
SELECT empName, salary
FROM Employee
WHERE salary BETWEEN 70000 AND 100000;
```

**Output:**

| empName | salary   |
|---------|----------|
| John    | 75000.00 |
| Lisa    | 90000.00 |

---

### 4.7. IN – Multiple Options

```sql
SELECT empName
FROM Employee
WHERE deptId IN (1, 3);
```

**Output:**

| empName |
|---------|
| John    |
| Amal    |

---

### 4.8. ORDER BY – Sorting

```sql
SELECT empName, salary
FROM Employee
ORDER BY salary DESC;
```

**Output:**

| empName | salary   |
|---------|----------|
| Lisa    | 90000.00 |
| John    | 75000.00 |

---

## 5. Aggregation Functions

- `SUM(column)` – total of column values
- `AVG(column)` – average value
- `MIN(column)` – smallest value
- `MAX(column)` – largest value
- `COUNT(*)` – number of rows

**Example:**

```sql
SELECT COUNT(*) AS Total, AVG(salary) AS AvgSalary, MAX(salary) AS MaxSalary
FROM Employee;
```

**Output:**

| Total | AvgSalary | MaxSalary |
|-------|-----------|-----------|
| 5     | 82000.00  | 90000.00  |

---

## 6. GROUP BY & HAVING

### 6.1. GROUP BY – Aggregate per group

```sql
SELECT deptId, COUNT(empId) AS num_employees
FROM Employee
GROUP BY deptId;
```

**Output:**

| deptId | num_employees |
|--------|---------------|
| 1      | 2             |
| 3      | 1             |
| 4      | 2             |

---

### 6.2. HAVING – Filter Groups After Aggregation

```sql
SELECT deptId, COUNT(empId) AS num_employees
FROM Employee
GROUP BY deptId
HAVING COUNT(empId) > 1;
```

**Output:**

| deptId | num_employees |
|--------|---------------|
| 1      | 2             |
| 4      | 2             |

---

## 7. Joins

### 7.1. INNER JOIN – Matching Rows in Both Tables

```sql
SELECT e.empName, d.deptName
FROM Employee e
INNER JOIN Department d
ON e.deptId = d.deptId;
```

**Output:**

| empName | deptName |
|---------|----------|
| Lisa    | IT       |
| Amal    | HR       |

---

### 7.2. LEFT OUTER JOIN – All Left Table Rows, Matched or Not

```sql
SELECT e.empName, d.deptName
FROM Employee e
LEFT OUTER JOIN Department d
ON e.deptId = d.deptId;
```

**Output:**

| empName | deptName |
|---------|----------|
| John    | IT       |
| Lisa    | IT       |
| Amal    | HR       |
| Surani  | NULL     |

---

### 7.3. RIGHT OUTER JOIN – All Right Table Rows, Matched or Not

```sql
SELECT e.empName, d.deptName
FROM Employee e
RIGHT OUTER JOIN Department d
ON e.deptId = d.deptId;
```

**Output:**

| empName | deptName |
|---------|----------|
| John    | IT       |
| Lisa    | IT       |
| Amal    | HR       |
| NULL    | Finance  |

---

### 7.4. FULL OUTER JOIN – All Rows from Both Tables

```sql
SELECT e.empName, d.deptName
FROM Employee e
FULL OUTER JOIN Department d
ON e.deptId = d.deptId;
```

**Output:**

| empName | deptName |
|---------|----------|
| John    | IT       |
| Lisa    | IT       |
| Amal    | HR       |
| NULL    | Finance  |
| Surani  | NULL     |

---

## 8. SQL Operators

- `=`   : Equal
- `<>`  : Not equal
- `>`   : Greater than
- `<`   : Less than
- `>=`  : Greater or equal
- `<=`  : Less or equal
- `AND` : Both conditions true
- `OR`  : Either condition true
- `NOT` : Negate condition

**Example:**

```sql
SELECT empName
FROM Employee
WHERE salary > 80000 AND deptId = 1;
```

---

## 9. Comments (SQL Server)

- Single line: `-- This is a comment`
- Multi-line: `/* This is a comment */`

---

## 10. Extra Tips

- Always end SQL statements with a semicolon (`;`).
- Use `TOP` to restrict rows (e.g., `SELECT TOP 5 * FROM Employee;`).
- Test queries on sample data for best learning.

---

## 11. Example Table Structures (for Practice)

```sql
CREATE TABLE Department (
    deptId INT PRIMARY KEY,
    deptName NVARCHAR(50) NOT NULL,
    location NVARCHAR(30)
);

CREATE TABLE Employee (
    empId INT PRIMARY KEY,
    empName NVARCHAR(50),
    dob DATE,
    salary DECIMAL(10,2),
    deptId INT,
    FOREIGN KEY (deptId) REFERENCES Department(deptId)
);
```

---

## 12. Further Learning

- Explore constraints: `UNIQUE`, `DEFAULT`, `CHECK`.
- Learn about `VIEW`, `INDEX`, and `TRANSACTION` controls.
- Experiment with different join types and subqueries.
