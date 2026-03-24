# Multi-Table Data Selection

This section contains SQL practice questions that involve retrieving data from **two or more related tables**.
You’ll learn step by step how to combine datasets using different types of joins and filters.

---

## 🛠 SQL Server Setup Script

Use the following script to generate the sample data:

```sql
-- Drop tables if they already exist
IF OBJECT_ID('payments', 'U') IS NOT NULL DROP TABLE payments;
IF OBJECT_ID('customers', 'U') IS NOT NULL DROP TABLE customers;

-- Create Customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name  VARCHAR(50),
    last_name   VARCHAR(50),
    city        VARCHAR(50)
);

-- Create Payments table
CREATE TABLE payments (
    payment_id   INT PRIMARY KEY,
    customer_id  INT NULL,
    payment_date DATE,
    amount       DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert Customers
INSERT INTO customers (customer_id, first_name, last_name, city) VALUES
(1, 'Asma', NULL, 'Colombo'),
(2, 'Dilshan', NULL, 'Matara'),
(3, 'Denuwan', 'Gamage', 'Jaffna'),
(4, 'Tharusha', 'Akash', 'Negombo'),
(5, 'Lochana', 'Nadeesh', 'Kurunegala'),
(6, 'Nimesh', 'Alwis', 'Anuradhapura');

-- Insert Payments
INSERT INTO payments (payment_id, customer_id, payment_date, amount) VALUES
(201, 1, '2025-07-01', 2500.00),
(202, 1, '2025-07-15', 1800.00),
(203, 2, '2025-07-20', 950.00),
(204, 4, '2025-07-22', 2100.00),
(205, 5, '2025-07-23', 3000.00),
(206, NULL, '2025-07-24', 750.00),   -- Anonymous
(207, NULL, '2025-07-25', 1200.00),  -- Anonymous
(208, 6, '2025-07-29', 1450.00);
```

## 📊 Example Schema

We’ll use the following schema for all exercises:

### `customers`

| customer\_id | first\_name | last\_name  | city         |
| ------------ | ----------- | ----------- | ------------ |
| 1            | Asma        | NULL      | Colombo      |
| 2            | Dilshan     | NULL | Matara       |
| 3            | Denuwan     | Gamage  | Jaffna       |
| 4            | Tharusha    | Akash  | Negombo      |
| 5            | Lochana     | Nadeesh  | Kurunegala   |
| 6            | Nimesh      | Alwis  | Anuradhapura |

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
> **Note:** Some customers (e.g., **Denuwan**) haven’t made any payments yet.
> Some payments are **anonymous** (`NULL customer_id`).

---

## 📂 Sections

Each concept has its own README with examples and practice questions:

1. [Cartesian Product](./cartesian-product.md) – Start with the raw cross join of two tables
2. [WHERE with Multiple Tables](./where.md) – Apply filtering after combining tables
3. [INNER JOIN](./inner-join.md) – Matching rows in both tables
4. [LEFT JOIN](./left-join.md) – All rows from left table, plus matches from right
5. [RIGHT JOIN](./right-join.md) – All rows from right table, plus matches from left

---

## 💡 Tips 

* Start with `INNER JOIN` to understand matching rows
* Use `LEFT JOIN` to include unmatched rows from the first table
* Use `IS NULL` to filter for anonymous payments
* Always qualify column names (`table.column`) when working with multiple tables to avoid ambiguity

