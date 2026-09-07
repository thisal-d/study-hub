
# WHERE with Multiple Tables

After producing a Cartesian product, we usually add a **`WHERE` clause** to filter rows and create meaningful relationships between tables.
This is the foundation of **joining tables**.

---

## 📊 Example Schema

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

1. Show all customers **and their payments** by matching `customers.customer_id = payments.customer_id`.

   ```sql
   SELECT c.first_name, c.city, p.payment_id, p.amount
   FROM customers c, payments p
   WHERE c.customer_id = p.customer_id;
   ```

---

2. Display each payment along with the **customer’s first name and city**.

   ```sql
   SELECT c.first_name, c.city, p.payment_date, p.amount
   FROM customers c, payments p
   WHERE c.customer_id = p.customer_id;
   ```

---

3. Find all **payments greater than 2000** with customer details.

   ```sql
   SELECT c.first_name, c.city, p.payment_id, p.amount
   FROM customers c, payments p
   WHERE c.customer_id = p.customer_id
     AND p.amount > 2000;
   ```

---

4. List the **anonymous payments** (where `customer_id IS NULL`).

   ```sql
   SELECT p.payment_id, p.payment_date, p.amount
   FROM payments p
   WHERE p.customer_id IS NULL;
   ```

---

### 📝 Extra Questions (No SQL Code, Only Expected Output)

5. Retrieve each customer and their **total payment amount**.

   *Expected Output:*

   | first\_name | total\_amount |
   | ----------- | ------------- |
   | Asma        | 4300.00       |
   | Dilshan     | 950.00        |
   | Tharusha    | 2100.00       |
   | Lochana     | 3000.00       |
   | Nimesh      | 1450.00       |

---

6. Find customers who made **more than one payment**.

   *Expected Output:*

   | first\_name | num\_payments |
   | ----------- | ------------- |
   | Asma        | 2             |

---

7. Show the **highest, lowest, and average payment** per customer.

   *Expected Output:*

   | first\_name | max\_amount | min\_amount | avg\_amount |
   | ----------- | ----------- | ----------- | ----------- |
   | Asma        | 2500.00     | 1800.00     | 2150.00     |
   | Dilshan     | 950.00      | 950.00      | 950.00      |
   | Tharusha    | 2100.00     | 2100.00     | 2100.00     |
   | Lochana     | 3000.00     | 3000.00     | 3000.00     |
   | Nimesh      | 1450.00     | 1450.00     | 1450.00     |

---

8. List all customers and order them by **total payment amount (descending)**.

   *Expected Output:*

   | first\_name | total\_amount |
   | ----------- | ------------- |
   | Asma        | 4300.00       |
   | Lochana     | 3000.00       |
   | Tharusha    | 2100.00       |
   | Nimesh      | 1450.00       |
   | Dilshan     | 950.00        |


---

9. Show payments made **in July 2025 only**, with customer names.

*Expected Output:*

| first\_name | payment\_id | amount  |
| ----------- | ----------- | ------- |
| Asma        | 201         | 2500.00 |
| Asma        | 202         | 1800.00 |
| Dilshan     | 203         | 950.00  |
| Tharusha    | 204         | 2100.00 |
| Lochana     | 205         | 3000.00 |
| Nimesh      | 208         | 1450.00 |

---

1.  Display customers with payments **less than 2000**.

*Expected Output:*

| first\_name | amount  |
| ----------- | ------- |
| Asma        | 1800.00 |
| Dilshan     | 950.00  |
| Nimesh      | 1450.00 |

---

11. List the **customers and their first payment date**.

*Expected Output:*

| first\_name | first\_payment\_date |
| ----------- | -------------------- |
| Asma        | 2025-07-01           |
| Dilshan     | 2025-07-20           |
| Tharusha    | 2025-07-22           |
| Lochana     | 2025-07-23           |
| Nimesh      | 2025-07-29           |

---

12. Show the **city with the highest total payment**.

*Expected Output:*

| city    | total\_amount |
| ------- | ------------- |
| Colombo | 4300.00       |

---

13. Find the **largest single payment overall** and the customer who made it.

*Expected Output:*

| first\_name | amount  |
| ----------- | ------- |
| Lochana     | 3000.00 |

---

14. Find all customers who **have not made any payments**.

   *Expected Output:*

   | first\_name | city   |
   | ----------- | ------ |
   | Denuwan     | Jaffna |

---

## 💡 Tips

* Always use `WHERE` to avoid a meaningless **Cartesian product**.
* `GROUP BY` helps to aggregate per customer or city.
* Use `HAVING` when filtering aggregated results.
* Ordering results makes comparisons easier.

---

🚀 Next: [INNER JOIN](./inner-join.md)

