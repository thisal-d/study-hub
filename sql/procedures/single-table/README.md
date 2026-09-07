# Single Table Stored Procedures

Stored procedures that operate on a single table are fundamental building blocks for database applications. They encapsulate business logic for CRUD operations and data validation.

## 📊 Example Schema

### `products`
| product_id | product_name | category | price | stock_quantity | discontinued |
| ---------- | ------------ | -------- | ----- | -------------- | ------------ |
| 101        | Laptop       | Electronics | 999.99 | 50 | 0 |
| 102        | Mouse        | Electronics | 19.99 | 200 | 0 |
| 103        | Keyboard     | Electronics | 49.99 | 75 | 0 |
| 104        | Monitor      | Electronics | 299.99 | 30 | 0 |
| 105        | Desk Chair   | Furniture | 149.99 | 25 | 0 |

## ❓ Practice Questions

### ✅ With Answers

1. Create a procedure to add a new product with validation.

```sql
CREATE PROCEDURE sp_AddProduct
    @product_id INT,
    @product_name VARCHAR(100),
    @category VARCHAR(50),
    @price DECIMAL(10, 2),
    @stock_quantity INT
AS
BEGIN
    IF EXISTS (SELECT 1 FROM products WHERE product_id = @product_id)
    BEGIN
        RAISERROR('Product ID already exists', 16, 1)
        RETURN
    END
    
    IF @price <= 0
    BEGIN
        RAISERROR('Price must be greater than zero', 16, 1)
        RETURN
    END
    
    INSERT INTO products (product_id, product_name, category, price, stock_quantity, discontinued)
    VALUES (@product_id, @product_name, @category, @price, @stock_quantity, 0)
    
    SELECT 'Product added successfully' AS Result
END;
```

2. Create a procedure to update product stock with validation.

```sql
CREATE PROCEDURE sp_UpdateProductStock
    @product_id INT,
    @quantity_change INT
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM products WHERE product_id = @product_id)
    BEGIN
        RAISERROR('Product not found', 16, 1)
        RETURN
    END
    
    IF @quantity_change = 0
    BEGIN
        RAISERROR('Quantity change cannot be zero', 16, 1)
        RETURN
    END
    
    UPDATE products
    SET stock_quantity = stock_quantity + @quantity_change
    WHERE product_id = @product_id
    
    SELECT 'Stock updated successfully' AS Result
END;
```

### 📝 More Practice (Expected Output Only)

3. Create a procedure to discontinue a product.

*Expected Output:*
| Result |
| ------ |
| Product discontinued successfully |

4. Create a procedure to get products below a stock threshold.

*Expected Output:*
| product_id | product_name | stock_quantity |
| ---------- | ------------ | -------------- |
| 104        | Monitor      | 30             |
| 105        | Desk Chair   | 25             |

5. Create a procedure to calculate total inventory value.

*Expected Output:*
| total_value |
| ----------- |
| 125,000.00  |

