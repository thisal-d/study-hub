# RIGHT JOIN

A **RIGHT JOIN** returns all rows from the **right table** (`payments`), and the matched rows from the **left table** (`customers`).
If there is no match, the result shows **NULLs** for the left-side columns.

---

## 📊 Example Schema

We continue with the same data:

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


1. All Payments with Customer Info

```sql
SELECT p.payment_id, p.amount, c.first_name, c.city
FROM customers c
RIGHT JOIN payments p
    ON c.customer_id = p.customer_id;
```

✅ Shows every payment. Anonymous payments appear with `NULL` customer details.

---

2. Anonymous Payments

```sql
SELECT p.payment_id, p.amount
FROM customers c
RIGHT JOIN payments p
    ON c.customer_id = p.customer_id
WHERE c.customer_id IS NULL;
```

✅ Filters out payments that have no linked customer.

---

3. Replace NULL Names

```sql
SELECT p.payment_id, 
       ISNULL(c.first_name, 'Unknown') AS customer_name, 
       p.amount
FROM customers c
RIGHT JOIN payments p
    ON c.customer_id = p.customer_id;
```

✅ Anonymous payments are marked as `Unknown`.

---

4. High Value Payments

```sql
SELECT p.payment_id, p.amount, c.first_name
FROM customers c
RIGHT JOIN payments p
    ON c.customer_id = p.customer_id
WHERE p.amount > 2000;
```

✅ Includes both known and anonymous payers.

---

5. Count Anonymous Payments

```sql
SELECT COUNT(*) AS anonymous_count
FROM customers c
RIGHT JOIN payments p
    ON c.customer_id = p.customer_id
WHERE c.customer_id IS NULL;
```

✅ Counts how many anonymous transactions exist.

---

## 🔍 More Practice (Questions with Expected Output only)

6. Show each payment with **customer name**, and indicate the **city**.

   * Expected Output:

     | payment\_id | customer\_name | city         | amount  |
     | ----------- | -------------- | ------------ | ------- |
     | 201         | Asma           | Colombo      | 2500.00 |
     | 202         | Asma           | Colombo      | 1800.00 |
     | 203         | Dilshan        | Matara       | 950.00  |
     | 204         | Tharusha       | Negombo      | 2100.00 |
     | 205         | Lochana        | Kurunegala   | 3000.00 |
     | 206         | NULL           | NULL         | 750.00  |
     | 207         | NULL           | NULL         | 1200.00 |
     | 208         | Nimesh         | Anuradhapura | 1450.00 |

---

7. Count the number of payments for each customer.
   
   * Expected Output:

     | customer\_name | payment\_count |
     | -------------- | -------------- |
     | Asma           | 2              |
     | Dilshan        | 1              |
     | Denuwan        | 0              |
     | Tharusha       | 1              |
     | Lochana        | 1              |
     | Nimesh         | 1              |
     | NULL           | 2              |

---

8. Calculate the **total amount of payments per customer**.

   * Expected Output:

     | customer\_name | total\_amount |
     | -------------- | ------------- |
     | Asma           | 4300.00       |
     | Dilshan        | 950.00        |
     | Denuwan        | 0.00          |
     | Tharusha       | 2100.00       |
     | Lochana        | 3000.00       |
     | Nimesh         | 1450.00       |
     | NULL           | 1950.00       |

---

9. List all payments **over 2000** and include customer names.
   
   * Expected Output:

     | payment\_id | customer\_name | amount  |
     | ----------- | -------------- | ------- |
     | 201         | Asma           | 2500.00 |
     | 204         | Tharusha       | 2100.00 |
     | 205         | Lochana        | 3000.00 |

---

10.  Display **average payment amount per customer**, showing 0 for those without payments.

* Expected Output:

  | customer\_name | avg\_amount |
  | -------------- | ----------- |
  | Asma           | 2150.00     |
  | Dilshan        | 950.00      |
  | Denuwan        | NULL        |
  | Tharusha       | 2100.00     |
  | Lochana        | 3000.00     |
  | Nimesh         | 1450.00     |
  | NULL           | 975.00      |

---

11.  Show **payments made in July 2025**, including customer info .

* Expected Output:

  | payment\_id | customer\_name | payment\_date | amount  |
  | ----------- | -------------- | ------------- | ------- |
  | 201         | Asma           | 2025-07-01    | 2500.00 |
  | 202         | Asma           | 2025-07-15    | 1800.00 |
  | 203         | Dilshan        | 2025-07-20    | 950.00  |
  | 204         | Tharusha       | 2025-07-22    | 2100.00 |
  | 205         | Lochana        | 2025-07-23    | 3000.00 |
  | 206         | NULL           | 2025-07-24    | 750.00  |
  | 207         | NULL           | 2025-07-25    | 1200.00 |
  | 208         | Nimesh         | 2025-07-29    | 1450.00 |

---

12.  Count how many payments each city received.

* Expected Output:

  | city         | payment\_count |
  | ------------ | -------------- |
  | Colombo      | 2              |
  | Matara       | 1              |
  | Jaffna       | 0              |
  | Negombo      | 1              |
  | Kurunegala   | 1              |
  | Anuradhapura | 1              |
  | NULL         | 2              |

---

13.  Show **total payments per city**.

* Expected Output:

  | city         | total\_amount |
  | ------------ | ------------- |
  | Colombo      | 4300.00       |
  | Matara       | 950.00        |
  | Jaffna       | 0.00          |
  | Negombo      | 2100.00       |
  | Kurunegala   | 3000.00       |
  | Anuradhapura | 1450.00       |
  | NULL         | 1950.00       |

---

14. List **customers with exactly one payment**, include `NULL`.

* Expected Output:

  | customer\_name | payment\_count |
  | -------------- | -------------- |
  | Dilshan        | 1              |
  | Tharusha       | 1              |
  | Lochana        | 1              |
  | Nimesh         | 1              |
  | NULL           | 2              |

---

15.  Show all payments sorted by **amount descending**, include NULL customer names.

* Expected Output:

  | payment\_id | customer\_name | amount  |
  | ----------- | -------------- | ------- |
  | 205         | Lochana        | 3000.00 |
  | 201         | Asma           | 2500.00 |
  | 204         | Tharusha       | 2100.00 |
  | 202         | Asma           | 1800.00 |
  | 208         | Nimesh         | 1450.00 |
  | 207         | NULL           | 1200.00 |
  | 206         | NULL           |  750.00 |
  | 203         | Dilshan        | 950.00  |

---

16.  Display payments and customer names, **including NULL**, only for payments **less than 1000**.

* Expected Output:

  | payment\_id | customer\_name | amount |
  | ----------- | -------------- | ------ |
  | 203         | Dilshan        | 950.00 |
  | 206         | NULL           | 750.00 |

---

17.  Show **sum of payments grouped by customer**, including `NULL`.

* Expected Output:

  | customer\_name | total\_amount |
  | -------------- | ------------- |
  | Asma           | 4300.00       |
  | Dilshan        | 950.00        |
  | Denuwan        | 0.00          |
  | Tharusha       | 2100.00       |
  | Lochana        | 3000.00       |
  | Nimesh         | 1450.00       |
  | NULL           | 1950.00       |

---

## 💡 Tips

* `RIGHT JOIN` is just the reverse of `LEFT JOIN`.
* Use it mainly when you want to keep **all rows of the right-hand table**.
* Great for checking if payments exist without customer info.
