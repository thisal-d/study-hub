# Single Table Triggers

Single table triggers automatically execute in response to data changes (INSERT, UPDATE, DELETE) on a single table. They're essential for enforcing business rules and maintaining data integrity.

## 📊 Example Schema

### `employees`
| employee_id | first_name | last_name | salary | department_id | hire_date |
| ----------- | ---------- | --------- | ------ | ------------- | --------- |
| 101         | John       | Smith     | 75000  | 1             | 2020-01-15 |
| 102         | Jane       | Doe       | 65000  | 2             | 2021-03-22 |
| 103         | Robert     | Johnson   | 80000  | 1             | 2019-07-10 |

### `audit_log`
| log_id | table_name | operation | record_id | operation_time | user_name |
| ------ | ---------- | --------- | --------- | -------------- | --------- |
| 1      | employees  | UPDATE    | 101       | 2023-05-01 10:30 | admin |

## ❓ Practice Questions

### ✅ With Answers

1. Create a trigger to prevent salary decreases.

```sql
CREATE TRIGGER trg_PreventSalaryDecrease
ON employees
AFTER UPDATE
AS
BEGIN
    IF EXISTS (
        SELECT 1 FROM inserted i
        JOIN deleted d ON i.employee_id = d.employee_id
        WHERE i.salary < d.salary
    )
    BEGIN
        RAISERROR('Salary cannot be decreased', 16, 1)
        ROLLBACK TRANSACTION
    END
END;
```

2. Create a trigger to log all employee changes.

```sql
CREATE TRIGGER trg_LogEmployeeChanges
ON employees
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    DECLARE @operation VARCHAR(10)
    
    IF EXISTS (SELECT 1 FROM inserted) AND EXISTS (SELECT 1 FROM deleted)
        SET @operation = 'UPDATE'
    ELSE IF EXISTS (SELECT 1 FROM inserted)
        SET @operation = 'INSERT'
    ELSE
        SET @operation = 'DELETE'
    
    IF @operation = 'INSERT'
    BEGIN
        INSERT INTO audit_log (table_name, operation, record_id, operation_time, user_name)
        SELECT 'employees', @operation, employee_id, GETDATE(), SUSER_SNAME()
        FROM inserted
    END
    ELSE IF @operation = 'DELETE'
    BEGIN
        INSERT INTO audit_log (table_name, operation, record_id, operation_time, user_name)
        SELECT 'employees', @operation, employee_id, GETDATE(), SUSER_SNAME()
        FROM deleted
    END
    ELSE -- UPDATE
    BEGIN
        INSERT INTO audit_log (table_name, operation, record_id, operation_time, user_name)
        SELECT 'employees', @operation, employee_id, GETDATE(), SUSER_SNAME()
        FROM inserted
    END
END;
```

3. Create a trigger to auto-set hire date for new employees.

```sql
CREATE TRIGGER trg_SetHireDate
ON employees
AFTER INSERT
AS
BEGIN
    UPDATE e
    SET hire_date = COALESCE(i.hire_date, GETDATE())
    FROM employees e
    JOIN inserted i ON e.employee_id = i.employee_id
    WHERE e.hire_date IS NULL
END;
```

### 📝 More Practice (Expected Output Only)

4. Create a trigger to prevent deleting employees with less than 1 year tenure.

*Expected Output:*
| Error Message |
| ------------- |
| Cannot delete employees with less than 1 year tenure |

5. Create a trigger to validate department assignments.

*Expected Output:*
| Error Message |
| ------------- |
| Invalid department ID specified |

6. Create a trigger to maintain last modified timestamp.

*Expected Output:*
| employee_id | last_modified |
| ----------- | ------------- |
| 101         | 2023-05-01 10:30:15 |
