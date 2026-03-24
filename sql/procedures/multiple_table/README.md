# Multi-Table Stored Procedures

Stored procedures that work with multiple tables enable complex business operations across related data. They're essential for maintaining data integrity across relationships.

## 📊 Example Schema

### `customers`
| customer_id | first_name | last_name | city | registration_date |
| ----------- | ---------- | --------- | ---- | ---------------- |
| 1           | John       | Smith     | NYC  | 2023-01-15       |
| 2           | Jane       | Doe       | LA   | 2023-02-20       |
| 3           | Robert     | Johnson   | Chicago | 2023-03-10    |

### `orders`
| order_id | customer_id | order_date | total_amount | status |
| -------- | ----------- | ---------- | ------------ | ------ |
| 1001     | 1           | 2023-05-01 | 250.00       | Completed |
| 1002     | 2           | 2023-05-05 | 180.00       | Completed |
| 1003     | 1           | 2023-05-10 | 420.00       | Processing |

### `order_items`
| item_id | order_id | product_id | quantity | unit_price |
| ------- | -------- | ---------- | -------- | ---------- |
| 1       | 1001     | 101        | 1        | 999.99     |
| 2       | 1001     | 102        | 2        | 19.99      |
| 3       | 1002     | 103        | 1        | 49.99      |

## ❓ Practice Questions

### ✅ With Answers

1. Create a procedure to place a new order with items.

```sql
CREATE PROCEDURE sp_PlaceOrder
    @customer_id INT,
    @items_list VARCHAR(MAX), -- Format: product_id:quantity,product_id:quantity
    @order_id INT OUTPUT
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION
        
        -- Create order header
        INSERT INTO orders (customer_id, order_date, total_amount, status)
        VALUES (@customer_id, GETDATE(), 0, 'Processing')
        
        SET @order_id = SCOPE_IDENTITY()
        
        -- Parse and insert order items
        DECLARE @total_amount DECIMAL(10, 2) = 0
        DECLARE @pos INT
        DECLARE @item VARCHAR(100)
        DECLARE @product_id INT
        DECLARE @quantity INT
        DECLARE @unit_price DECIMAL(10, 2)
        
        WHILE LEN(@items_list) > 0
        BEGIN
            SET @pos = CHARINDEX(',', @items_list)
            IF @pos = 0 SET @pos = LEN(@items_list) + 1
            
            SET @item = LEFT(@items_list, @pos - 1)
            SET @items_list = SUBSTRING(@items_list, @pos + 1, LEN(@items_list))
            
            -- Parse product_id and quantity
            SET @pos = CHARINDEX(':', @item)
            SET @product_id = CAST(LEFT(@item, @pos - 1) AS INT)
            SET @quantity = CAST(SUBSTRING(@item, @pos + 1, LEN(@item)) AS INT)
            
            -- Get unit price
            SELECT @unit_price = price FROM products WHERE product_id = @product_id
            
            -- Insert order item
            INSERT INTO order_items (order_id, product_id, quantity, unit_price)
            VALUES (@order_id, @product_id, @quantity, @unit_price)
            
            -- Update total
            SET @total_amount = @total_amount + (@quantity * @unit_price)
        END
        
        -- Update order total
        UPDATE orders
        SET total_amount = @total_amount
        WHERE order_id = @order_id
        
        COMMIT TRANSACTION
        
        SELECT 'Order placed successfully' AS Result
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION
            
        SELECT 
            ERROR_NUMBER() AS ErrorNumber,
            ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END;
```

2. Create a procedure to get customer order history.

```sql
CREATE PROCEDURE sp_GetCustomerOrderHistory
    @customer_id INT
AS
BEGIN
    SELECT 
        o.order_id,
        o.order_date,
        o.total_amount,
        o.status,
        COUNT(oi.item_id) AS item_count
    FROM orders o
    LEFT JOIN order_items oi ON o.order_id = oi.order_id
    WHERE o.customer_id = @customer_id
    GROUP BY o.order_id, o.order_date, o.total_amount, o.status
    ORDER BY o.order_date DESC
END;
```

### 📝 More Practice (Expected Output Only)

3. Create a procedure to update order status with validation.

*Expected Output:*
| Result |
| ------ |
| Order status updated successfully |

4. Create a procedure to get top spending customers.

*Expected Output:*
| customer_id | first_name | total_spent |
| ----------- | ---------- | ----------- |
| 1           | John       | 670.00      |
| 2           | Jane       | 180.00      |

5. Create a procedure to get product sales summary.

*Expected Output:*
| product_name | total_quantity_sold | revenue |
| ------------ | ------------------- | ------- |
| Laptop       | 1                   | 999.99  |
| Mouse        | 2                   | 39.98   |

## 💡 Tips
* Use transactions to maintain data integrity across tables
* Implement proper error handling for multi-table operations
* Consider using table-valued parameters for complex data input
* Optimize joins for performance
* Validate foreign key relationships explicitly