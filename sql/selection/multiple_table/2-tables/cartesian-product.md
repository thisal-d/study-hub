# Cartesian Product

The **Cartesian Product** (also called **CROSS JOIN**) returns **all possible combinations** of rows from two tables.
It’s usually the first step to understand how tables interact before applying conditions or joins.

---

## 📊 Example Schema

We’ll use the same schema and sample data throughout these exercises.

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

1. Show the **Cartesian product** of customers and payments.

   * How many rows do you get? (Hint: `6 customers × 8 payments = 48 rows`)

2. Display the **first 10 rows** of the Cartesian product to inspect the raw combinations.

3. What happens if you only select specific columns (e.g., `customers.first_name`, `payments.amount`)?

---

## 📝 Example Queries

### Q1: Full Cartesian Product

```sql
SELECT *
FROM customers, payments;
```

✅ This will return **48 rows** (every customer combined with every payment).

---

### Q2: Cartesian Product with Selected Columns

```sql
SELECT c.first_name, c.city, p.payment_id, p.amount
FROM customers c, payments p;
```

✅ Returns 48 rows but only shows the chosen columns, making the result easier to read.

---

### Q3: Limit Output (SQL Server with `TOP`)

```sql
SELECT TOP 10 c.first_name, p.payment_id, p.amount
FROM customers c, payments p;
```

✅ Displays just the **first 10 rows** of the Cartesian product.

---

## 💡 Tips

* The Cartesian Product is useful to **see raw combinations**, but not practical for real use.
* To make the results meaningful, you’ll usually add conditions (e.g., `WHERE`) or use proper joins.
* Keep this as a **foundation step** before moving to `INNER JOIN`, `LEFT JOIN`, etc.

---

🚀 Next: [WHERE with Multiple Tables](./where.md)

