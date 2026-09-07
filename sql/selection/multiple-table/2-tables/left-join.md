# LEFT JOIN

A **LEFT JOIN** returns all rows from the **left table** (`customers`), and the matched rows from the **right table** (`payments`).
If there is no match, the result shows **NULLs** for the right-side columns.

---

## 📊 Example Schema

We use the same data:

### `customers`

| customer\_id | first\_name | last\_name | city         |
| ------------ | ----------- | ---------- | ------------ |
| 1            | Asma        | NULL       | Colombo      |
| 2            | Dilshan     | NULL       | Matara       |
| 3            | Denuwan     | Gamage     | Jaffna       |
| 4            | Tharusha    | Akash      | Negombo      |
| 5            | Lochana     | Nadeesh    | Kurunegala   |
| 6            | Nimesh      | Alwis      | Anuradhapura |

### `payments`

| payment\_id | customer\_id | payment\_date | amount  |
| ----------- | ------------ | ------------- | ------- |
| 201         | 1            | 2025-07-01    | 2500.00 |
| 202         | 1            | 2025-07-15    | 1800.00 |
| 203         | 2            | 2025-07-20    | 950.00  |
| 204         | 4            | 2025-07-22    | 2100.00 |
| 205         | 5            | 2025-07-23    | 3000.00 |
| 206         | NULL         | 2025-07-24    | 750.00  |
| 207         | NULL         | 2025-07-25    | 1200.00 |
| 208         | 6            | 2025-07-29    | 1450.00 |

---

## ❓ Practice Questions

### ✅ With Answers

1. All Customers with Payments

```sql
SELECT c.first_name, c.city, p.payment_id, p.amount
FROM customers c
LEFT JOIN payments p
    ON c.customer_id = p.customer_id;
```

✅ Customers without payments appear with `NULL` in payment columns.

---

2. Customers Without Payments

```sql
SELECT c.first_name, c.city
FROM customers c
LEFT JOIN payments p
    ON c.customer_id = p.customer_id
WHERE p.payment_id IS NULL;
```

✅ Filters only those who have not made payments.

---

3. Replace NULL Amounts

```sql
SELECT c.first_name, ISNULL(p.amount, 0) AS payment_amount
FROM customers c
LEFT JOIN payments p
    ON c.customer_id = p.customer_id;
```

✅ Uses `ISNULL` (SQL Server) to show `0` instead of `NULL`.

---

4. Total Payments per Customer

```sql
SELECT c.first_name, SUM(ISNULL(p.amount, 0)) AS total_paid
FROM customers c
LEFT JOIN payments p
    ON c.customer_id = p.customer_id
GROUP BY c.first_name;
```

✅ Includes customers with 0 total.

---

5. Jaffna/Negombo Customers

```sql
SELECT c.first_name, c.city, p.amount
FROM customers c
LEFT JOIN payments p
    ON c.customer_id = p.customer_id
WHERE c.city IN ('Jaffna', 'Negombo');
```

✅ Shows city residents, even if no payments.


---

## 🔍 More Practice (Questions with Expected Output only)

6. Show each customer’s **total number of payments**, including customers with 0.

   * Expected Output:

     | first\_name | payment\_count |
     | ----------- | -------------- |
     | Asma        | 2              |
     | Dilshan     | 1              |
     | Denuwan     | 0              |
     | Tharusha    | 1              |
     | Lochana     | 1              |
     | Nimesh      | 1              |

---

7. Display **total payments per customer**, showing `0` for those who never paid.

   * Expected Output:

     | first\_name | total\_amount |
     | ----------- | ------------- |
     | Asma        | 4300.00       |
     | Dilshan     | 950.00        |
     | Denuwan     | 0.00          |
     | Tharusha    | 2100.00       |
     | Lochana     | 3000.00       |
     | Nimesh      | 1450.00       |

---

8. List all customers with their **average payment amount**, using `0` for those without payments.

   * Expected Output:

     | first\_name | avg\_payment |
     | ----------- | ------------ |
     | Asma        | 2150.00      |
     | Dilshan     | 950.00       |
     | Denuwan     | 0.00         |
     | Tharusha    | 2100.00      |
     | Lochana     | 3000.00      |
     | Nimesh      | 1450.00      |

---

9. Show customers along with **their highest payment**, `NULL` if no payment.

   * Expected Output:

     | first\_name | max\_payment |
     | ----------- | ------------ |
     | Asma        | 2500.00      |
     | Dilshan     | 950.00       |
     | Denuwan     | NULL         |
     | Tharusha    | 2100.00      |
     | Lochana     | 3000.00      |
     | Nimesh      | 1450.00      |

---

10. List customers who **paid more than 2000** at least once.

* Expected Output:

  | first\_name | amount  |
  | ----------- | ------- |
  | Asma        | 2500.00 |
  | Tharusha    | 2100.00 |
  | Lochana     | 3000.00 |

---

11. Show all customers with **payment count and total amount**, ordered by total amount descending.

* Expected Output:

  | first\_name | payment\_count | total\_amount |
  | ----------- | -------------- | ------------- |
  | Asma        | 2              | 4300.00       |
  | Lochana     | 1              | 3000.00       |
  | Tharusha    | 1              | 2100.00       |
  | Nimesh      | 1              | 1450.00       |
  | Dilshan     | 1              | 950.00        |
  | Denuwan     | 0              | 0.00          |

---

12. Find **customers from Colombo, Matara, or Jaffna** and their payment amounts.

* Expected Output:

  | first\_name | city    | amount  |
  | ----------- | ------- | ------- |
  | Asma        | Colombo | 2500.00 |
  | Asma        | Colombo | 1800.00 |
  | Dilshan     | Matara  | 950.00  |
  | Denuwan     | Jaffna  | NULL    |

---

13. Display **customers with payments in July 2025**, including those without payments.

* Expected Output:

  | first\_name | payment\_date | amount  |
  | ----------- | ------------- | ------- |
  | Asma        | 2025-07-01    | 2500.00 |
  | Asma        | 2025-07-15    | 1800.00 |
  | Dilshan     | 2025-07-20    | 950.00  |
  | Denuwan     | NULL          | NULL    |
  | Tharusha    | 2025-07-22    | 2100.00 |
  | Lochana     | 2025-07-23    | 3000.00 |
  | Nimesh      | 2025-07-29    | 1450.00 |

---

14. Show **customers and their payment amounts**, replacing `NULL` with `"No Payment"`.

* Expected Output:

  | first\_name | amount     |
  | ----------- | ---------- |
  | Asma        | 2500.00    |
  | Asma        | 1800.00    |
  | Dilshan     | 950.00     |
  | Denuwan     | No Payment |
  | Tharusha    | 2100.00    |
  | Lochana     | 3000.00    |
  | Nimesh      | 1450.00    |

---

15. Find **customers with the total of payments above 2000**.

* Expected Output:

  | first\_name | total\_amount |
  | ----------- | ------------- |
  | Asma        | 4300.00       |
  | Tharusha    | 2100.00       |
  | Lochana     | 3000.00       |

---

16. Display **all cities with the sum of payments made by customers in that city**.

* Expected Output:

  | city         | total\_amount |
  | ------------ | ------------- |
  | Colombo      | 4300.00       |
  | Matara       | 950.00        |
  | Jaffna       | 0.00          |
  | Negombo      | 2100.00       |
  | Kurunegala   | 3000.00       |
  | Anuradhapura | 1450.00       |

---

17. Show customers who have made **exactly one payment**.

* Expected Output:

  | first\_name | payment\_count |
  | ----------- | -------------- |
  | Dilshan     | 1              |
  | Tharusha    | 1              |
  | Lochana     | 1              |
  | Nimesh      | 1              |

---

18. List customers with **average payment amount above 1500**, including 0 for those with no payments.

* Expected Output:

  | first\_name | avg\_payment |
  | ----------- | ------------ |
  | Asma        | 2150.00      |
  | Tharusha    | 2100.00      |
  | Lochana     | 3000.00      |
  | Nimesh      | 1450.00      |
  | Dilshan     | 950.00       |
  | Denuwan     | 0.00         |

---

## 💡 Tips

* Use `LEFT JOIN` to find **who didn’t pay**.
* Always check `p.payment_id IS NULL` to find unmatched rows.
* Functions like `ISNULL` or `COALESCE` help replace `NULL` values.

---

🚀 Next: [RIGHT JOIN](./right-join.md)

