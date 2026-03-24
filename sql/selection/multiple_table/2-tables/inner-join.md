# INNER JOIN

An **INNER JOIN** returns only the rows where there is a match in both tables.
This is the most common type of join.

---

## 📊 Example Schema

We continue with the same tables and sample data:

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

1. Use `INNER JOIN` to show all customers with their payments.
2. List customer names and payment amounts, sorted by amount **descending**.
3. Find all customers from **Colombo or Matara** who have made a payment.
4. Show only the customers who made **payments above 2000**.
5. Display all payments with the customer’s name, **excluding anonymous payments**.

---

## 📝 Example Queries (with answers)

(keep as you wrote: Q1 – Q5 ✅)

---

## 🔍 More Practice (Questions with Expected Output only)

6. Show each customer's name along with their payment **dates**.

   * Expected Output:

     | first\_name | payment\_date |
     | ----------- | ------------- |
     | Asma        | 2025-07-01    |
     | Asma        | 2025-07-15    |
     | Dilshan     | 2025-07-20    |
     | Tharusha    | 2025-07-22    |
     | Lochana     | 2025-07-23    |
     | Nimesh      | 2025-07-29    |

---

7. Retrieve customer names and payments where the **amount is below 2000**.

   * Expected Output:

     | first\_name | amount  |
     | ----------- | ------- |
     | Asma        | 1800.00 |
     | Dilshan     | 950.00  |
     | Nimesh      | 1450.00 |

---

8. Find the **total payments made by Asma**.

   * Expected Output:

     | first\_name | total\_amount |
     | ----------- | ------------- |
     | Asma        | 4300.00       |

---

9. Show customers and payments, but only for those living in **Negombo or Kurunegala**.

   * Expected Output:

     | first\_name | city       | amount  |
     | ----------- | ---------- | ------- |
     | Tharusha    | Negombo    | 2100.00 |
     | Lochana     | Kurunegala | 3000.00 |

---

10. List all customers with their **highest payment amount**.

* Expected Output:

  | first\_name | max\_amount |
  | ----------- | ----------- |
  | Asma        | 2500.00     |
  | Dilshan     | 950.00      |
  | Tharusha    | 2100.00     |
  | Lochana     | 3000.00     |
  | Nimesh      | 1450.00     |

---

11. Show customers who made **more than one payment**.

* Expected Output:

  | first\_name | payments\_count |
  | ----------- | --------------- |
  | Asma        | 2               |

---

12. Display all customers and their payments, **sorted by city then by payment\_date**.

* Expected Output:

  | first\_name | city         | payment\_date | amount  |
  | ----------- | ------------ | ------------- | ------- |
  | Nimesh      | Anuradhapura | 2025-07-29    | 1450.00 |
  | Asma        | Colombo      | 2025-07-01    | 2500.00 |
  | Asma        | Colombo      | 2025-07-15    | 1800.00 |
  | Dilshan     | Matara       | 2025-07-20    | 950.00  |
  | Tharusha    | Negombo      | 2025-07-22    | 2100.00 |
  | Lochana     | Kurunegala   | 2025-07-23    | 3000.00 |

---

13. Find customers who made **payments in July 2025 only**.

* Expected Output:

  | first\_name | payment\_date | amount  |
  | ----------- | ------------- | ------- |
  | Asma        | 2025-07-01    | 2500.00 |
  | Asma        | 2025-07-15    | 1800.00 |
  | Dilshan     | 2025-07-20    | 950.00  |
  | Tharusha    | 2025-07-22    | 2100.00 |
  | Lochana     | 2025-07-23    | 3000.00 |
  | Nimesh      | 2025-07-29    | 1450.00 |

---

14. Show each city with the **sum of all payments** made by customers in that city.

* Expected Output:

  | city         | total\_amount |
  | ------------ | ------------- |
  | Colombo      | 4300.00       |
  | Matara       | 950.00        |
  | Negombo      | 2100.00       |
  | Kurunegala   | 3000.00       |
  | Anuradhapura | 1450.00       |

---

15. Find the **largest single payment** and the customer who made it.

* Expected Output:

  | first\_name | amount  |
  | ----------- | ------- |
  | Lochana     | 3000.00 |

---

## 💡 Tips

* Always specify the join condition using `ON`.
* `INNER JOIN` filters out unmatched rows automatically (unlike `LEFT JOIN`).
* Use `WHERE` after the join for extra conditions (e.g., filtering by city or amount).

---

🚀 Next: [LEFT JOIN](./left-join.md)