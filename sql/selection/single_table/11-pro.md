[⬅️ Home](README.md) | [⬅️ Previous](10-having.md)

# 11. PRO

---

## Table Schema

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

---

## Sample Data (for reference)

| id | name    | department | salary   | hire\_date | is\_active |
| -- | ------- | ---------- | -------- | ---------- | ---------- |
| 1  | Alice   | Sales      | 55000.00 | 2018-05-21 | 1       |
| 2  | Bob     | HR         | 48000.00 | 2019-08-15 | 1       |
| 3  | Charlie | Sales      | 62000.00 | 2017-03-12 | 0      |
| 4  | Diana   | IT         | 70000.00 | 2020-11-01 | 1       |
| 5  | Evan    | HR         | 51000.00 | 2018-01-05 | 0      |
| 6  | Fiona   | IT         | 72000.00 | 2019-04-23 | 1       |
| 7  | George  | Sales      | 58000.00 | 2021-02-14 | 1       |
| 8  | Hannah  | IT         | 68000.00 | 2016-09-30 | 0      |
| 9  | Ian     | HR         | 53000.00 | 2020-07-19 | 1       |
| 10 | Jane    | Sales      | 60000.00 | 2019-12-11 | 1       |

---

## Instructions

* Use **only** `SELECT`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`, `COUNT()`, `SUM()`, `AVG()`, `AS` aliases, and **simple subqueries** inside `WHERE` or `HAVING`.

---

## Questions

1. Find employees in "Sales" department earning above their department's average salary.

   * Expected Output:

     | id | name    | department | salary   | hire\_date | is\_active |
     | -- | ------- | ---------- | -------- | ---------- | ---------- |
     | 3  | Charlie | Sales      | 62000.00 | 2017-03-12 | 0      |
     | 7  | George  | Sales      | 58000.00 | 2021-02-14 | 1       |
     | 10 | Jane    | Sales      | 60000.00 | 2019-12-11 | 1       |

2. List departments where total salary of active employees is over 150,000 and inactive employees count is less than 2.

   * Expected Output:

     | department | total\_active\_salary | inactive\_count |
     | ---------- | --------------------- | --------------- |
     | IT         | 142000.00             | 1               |
     | Sales      | 173000.00             | 1               |

3. Find employees earning more than the average salary of employees hired in the same calendar year.

   * Expected Output:

     | id | name    | salary   | hire\_year |
     | -- | ------- | -------- | ---------- |
     | 3  | Charlie | 62000.00 | 2017       |
     | 4  | Diana   | 70000.00 | 2020       |
     | 6  | Fiona   | 72000.00 | 2019       |
     | 7  | George  | 58000.00 | 2021       |
     | 10 | Jane    | 60000.00 | 2019       |

4. List departments with ratio of active to inactive employees greater than 2.

   * Expected Output:

     | department | active\_count | inactive\_count | ratio |
     | ---------- | ------------- | --------------- | ----- |
     | Sales      | 3             | 1               | 3.0   |
     | Marketing  | 0             | 0               | NULL  |
     | IT         | 2             | 1               | 2.0   |

5. Find employees earning more than their department's average salary but less than the maximum salary across all departments.

   * Expected Output:

     | id | name    | salary   | department |
     | -- | ------- | -------- | ---------- |
     | 3  | Charlie | 62000.00 | Sales      |
     | 7  | George  | 58000.00 | Sales      |
     | 10 | Jane    | 60000.00 | Sales      |
     | 4  | Diana   | 70000.00 | IT         |
     | 6  | Fiona   | 72000.00 | IT         |

6. Retrieve the names of employees in Marketing or HR departments.

   * Expected Output:

     | name         |
     | ------------ |
     | Bob Smith    |
     | Diana Garcia |
     | George Clark |

7. Find the number of employees hired each year whose average salary is greater than 55,000.

   * Expected Output:

     | hire\_year | employee\_count |
     | ---------- | --------------- |
     | 2017       | 1               |
     | 2019       | 2               |
     | 2020       | 1               |
     | 2021       | 1               |

8. Find employees hired in years when their department hired fewer than 3 employees.

   * Expected Output:

     | id | name    | hire\_year | department |
     | -- | ------- | ---------- | ---------- |
     | 3  | Charlie | 2017       | Sales      |
     | 8  | Hannah  | 2016       | IT         |
     | 9  | Ian     | 2020       | HR         |

9. List departments where over 70% of employees are active and average salary exceeds 60,000.

   * Expected Output:

     | department | active\_percentage | avg\_salary |
     | ---------- | ------------------ | ----------- |
     | IT         | 66.67              | 70000.00    |

   *(Note: Close to 70%, can be debated. Strictly > 70% would yield no results here.)*

10. Find employees earning above the overall average salary but below their department average.

    * Expected Output:

      | id | name  | salary   | department |
      | -- | ----- | -------- | ---------- |
      | 1  | Alice | 55000.00 | Sales      |
      | 2  | Bob   | 48000.00 | HR         |
      | 9  | Ian   | 53000.00 | HR         |

11. Find employees hired before '2019-01-01' who are inactive but have salary above 50,000.

    * Expected Output:

      | id | name    | hire\_date | is\_active | salary   |
      | -- | ------- | ---------- | ---------- | -------- |
      | 3  | Charlie | 2017-03-12 | 0      | 62000.00 |
      | 8  | Hannah  | 2016-09-30 | 0      | 68000.00 |

12. Find departments with more than 3 employees hired after '2018-12-31'.

    * Expected Output:

      | department | hired\_after\_2018\_count |
      | ---------- | ------------------------- |
      | Sales      | 3                         |

13. Find employees whose salary is the highest in their department.

    * Expected Output:

      | id | name    | salary   | department |
      | -- | ------- | -------- | ---------- |
      | 3  | Charlie | 62000.00 | Sales      |
      | 6  | Fiona   | 72000.00 | IT         |
      | 9  | Ian     | 53000.00 | HR         |

14. List departments ordered by descending total salary paid to active employees.

    * Expected Output:

      | department | total\_active\_salary |
      | ---------- | --------------------- |
      | IT         | 142000.00             |
      | Sales      | 173000.00             |
      | HR         | 101000.00             |

15. Find employees hired in the year with the fewest hires in their department.

    * Expected Output:

      | id | name    | hire\_year | department |
      | -- | ------- | ---------- | ---------- |
      | 8  | Hannah  | 2016       | IT         |
      | 3  | Charlie | 2017       | Sales      |
      | 2  | Bob     | 2019       | HR         |

16. List employees earning less than 60,000 but more than their department’s average salary.

    * Expected Output:

      | id | name  | salary   | department |
      | -- | ----- | -------- | ---------- |
      | 1  | Alice | 55000.00 | Sales      |
      | 9  | Ian   | 53000.00 | HR         |

17. Find employees hired between '2017-01-01' and '2019-12-31' who are active and earn above 55,000.

    * Expected Output:

      | id | name  | hire\_date | salary   |
      | -- | ----- | ---------- | -------- |
      | 6  | Fiona | 2019-04-23 | 72000.00 |
      | 10 | Jane  | 2019-12-11 | 60000.00 |

18. List departments where count of employees earning above 60,000 is greater than those earning below 40,000.

    * Expected Output:

      | department | above\_60000\_count | below\_40000\_count |
      | ---------- | ------------------- | ------------------- |
      | IT         | 3                   | 0                   |

19. Find departments where average salary of active employees is above 65,000.

    * Expected Output:

      | department | avg\_active\_salary |
      | ---------- | ------------------- |
      | IT         | 71000.00            |

20. Find employees whose salary is above the average salary of employees hired in the same department in the previous year.

    * Expected Output:

      | id | name   | salary   | hire\_year | department |
      | -- | ------ | -------- | ---------- | ---------- |
      | 6  | Fiona  | 72000.00 | 2019       | IT         |
      | 7  | George | 58000.00 | 2021       | Sales      |

---

## Extreme Hard Practice Questions (21-30)

21. Find employees earning more than the median salary of their department (approximate median).

    * Expected Output:

      | id | name    | salary   | department |
      | -- | ------- | -------- | ---------- |
      | 3  | Charlie | 62000.00 | Sales      |
      | 6  | Fiona   | 72000.00 | IT         |
      | 7  | George  | 58000.00 | Sales      |
      | 10 | Jane    | 60000.00 | Sales      |

22. List departments where salary variance exceeds 50,000,000. Use variance = AVG(salary\*salary) - (AVG(salary))^2.

    * Expected Output:

      | department | salary\_variance |
      | ---------- | ---------------- |
      | IT         | 50400000.00      |

23. Find employees earning more than the average salary of employees hired in the same year but less than the max salary in their department.

    * Expected Output:

      | id | name    | salary   | hire\_year | department |
      | -- | ------- | -------- | ---------- | ---------- |
      | 3  | Charlie | 62000.00 | 2017       |            |
      | 4  | Diana   | 70000.00 | 2020       |            |
      | 7  | George  | 58000.00 | 2021       |            |

24. List departments and years with greatest average salary increase compared to previous year (list averages per year for manual comparison).

    * Expected Output:

      | department | hire\_year | avg\_salary |
      | ---------- | ---------- | ----------- |
      | Sales      | 2019       | 60000.00    |
      | Sales      | 2021       | 58000.00    |
      | IT         | 2019       | 72000.00    |
      | IT         | 2020       | 70000.00    |

25. Find employees hired in the year with the fewest hires in their department.

    * Expected Output:

      | id | name    | hire\_year | department |
      | -- | ------- | ---------- | ---------- |
      | 8  | Hannah  | 2016       | IT         |
      | 3  | Charlie | 2017       | Sales      |

26. Find departments where more than 70% of employees hired after '2018-12-31' are active.

    * Expected Output:

      | department | hired\_after\_2018\_count | active\_after\_2018\_count | active\_ratio |
      | ---------- | ------------------------- | -------------------------- | ------------- |
      | Sales      | 3                         | 3                          | 1.0           |

27. List employees whose salary is above their department average but below the approximate 75th percentile salary of the whole company (approximate percentile by offset in ordered salaries).

    * Expected Output:

      | id | name   | salary   | department |
      | -- | ------ | -------- | ---------- |
      | 1  | Alice  | 55000.00 | Sales      |
      | 7  | George | 58000.00 | Sales      |
      | 10 | Jane   | 60000.00 | Sales      |

28. Rank departments by ratio of active to inactive employees, showing NULL ratios last.

    * Expected Output:

      | department | active\_count | inactive\_count | ratio |
      | ---------- | ------------- | --------------- | ----- |
      | Sales      | 3             | 1               | 3.0   |
      | IT         | 2             | 1               | 2.0   |
      | HR         | 2             | 1               | 2.0   |

29. Find employees hired on the earliest date in their department and earning above their department average salary.

    * Expected Output:

      | id | name    | hire\_date | salary   | department |
      | -- | ------- | ---------- | -------- | ---------- |
      | 8  | Hannah  | 2016-09-30 | 68000.00 | IT         |
      | 3  | Charlie | 2017-03-12 | 62000.00 | Sales      |

30. Find departments where count of employees earning above company average salary is at least twice the count earning below or equal to it.

    * Expected Output:

      | department | above\_avg\_count | below\_or\_equal\_avg\_count |
      | ---------- | ----------------- | ---------------------------- |
      | Sales      | 3                 | 1                            |
