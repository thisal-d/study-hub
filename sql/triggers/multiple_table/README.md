# Multi-Table Triggers

Multi-table triggers manage data integrity and business rules across related tables. They automatically propagate changes or enforce consistency when data in one table affects data in another.

## 📊 Example Schema

### `orders`
| order_id | customer_id | order_date | total_amount | status |
| -------- | ----------- | ---------- | ------------ | ------ |
| 1001     | 1           | 2023-05-01 | 250.00       | Pending |
| 1002     | 2           | 2023-05-05 | 180.00       | Shipped |
| 1003     | 1           | 2023-05-10 | 420.00       | Delivered |

### `inventory`
| product_id | warehouse_id | quantity | last_updated |
| ---------- | ------------ | -------- | ------------ |
| 101        | 1            | 50       | 2023-05-01   |
| 102        | 1            | 200      | 2023-05-01   |
| 103        | 2            | 75       | 2023-05-01   |

### `order_items`
| item_id | order_id | product_id | quantity |
| ------- | -------- | ---------- | -------- |
| 1       | 1001     | 101        | 2        |
| 2       | 1001     | 102        | 1        |
| 3       | 1002     | 103        | 3        |

## ❓ Practice Questions

### ✅ With Answers

1. Create a trigger to update inventory when order is shipped.

```sql
CREATE TRIGGER trg_UpdateInventoryOnShipment
ON orders
AFTER UPDATE
AS
BEGIN
    IF UPDATE(status)
    BEGIN
        -- Check if status changed to 'Shipped'
        IF EXISTS (
            SELECT 1 FROM inserted i
            JOIN deleted d ON i.order_id = d.order_id
            WHERE i.status = 'Shipped' AND d.status <> 'Shipped'
        )
        BEGIN
            -- Update inventory for shipped orders
            UPDATE inv
            SET inv.quantity = inv.quantity - oi.quantity,
                inv.last_updated = GETDATE()
            FROM inventory inv
            JOIN order_items oi ON inv.product_id = oi.product_id
            JOIN inserted i ON oi.order_id = i.order_id
            WHERE i.status = 'Shipped'
            
            -- Log inventory changes
            INSERT INTO inventory_log (product_id, quantity_change, operation_type, reference_id, operation_time)
            SELECT oi.product_id, -oi.quantity, 'ORDER_SHIPMENT', i.order_id, GETDATE()
            FROM order_items oi
            JOIN inserted i ON oi.order_id = i.order_id
            WHERE i.status = 'Shipped'
        END
    END
END;
```

2. Create a trigger to prevent order cancellation after shipment.

```sql
CREATE TRIGGER trg_PreventCancelAfterShipment
ON orders
INSTEAD OF UPDATE
AS
BEGIN
    IF UPDATE(status)
    BEGIN
        -- Check if trying to cancel a shipped order
        IF EXISTS (
            SELECT 1 FROM inserted i
            JOIN deleted d ON i.order_id = d.order_id
            WHERE i.status = 'Cancelled' AND d.status = 'Shipped'
        )
        BEGIN
            RAISERROR('Cannot cancel orders that have been shipped', 16, 1)
            RETURN
        END
        
        -- Allow other status changes
        UPDATE o
        SET o.status = i.status
        FROM orders o
        JOIN inserted i ON o.order_id = i.order_id
    END
END;
```

3. Create a trigger to maintain customer order statistics.

```sql
CREATE TRIGGER trg_UpdateCustomerOrderStats
ON orders
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    -- Handle new orders
    IF EXISTS (SELECT 1 FROM inserted)
    BEGIN
        UPDATE c
        SET c.order_count = c.order_count + 1,
            c.total_spent = c.total_spent + i.total_amount,
            c.last_order_date = i.order_date
        FROM customers c
        JOIN inserted i ON c.customer_id = i.customer_id
    END
    
    -- Handle order deletions
    IF EXISTS (SELECT 1 FROM deleted)
    BEGIN
        UPDATE c
        SET c.order_count = c.order_count - 1,
            c.total_spent = c.total_spent - d.total_amount
        FROM customers c
        JOIN deleted d ON c.customer_id = d.customer_id
    END
    
    -- Handle order updates (amount changes)
    IF EXISTS (SELECT 1 FROM inserted) AND EXISTS (SELECT 1 FROM deleted)
    BEGIN
        UPDATE c
        SET c.total_spent = c.total_spent + (i.total_amount - d.total_amount)
        FROM customers c
        JOIN inserted i ON c.customer_id = i.customer_id
        JOIN deleted d ON c.customer_id = d.customer_id
        WHERE i.total_amount <> d.total_amount
    END
END;
```

### 📝 More Practice (Expected Output Only)

4. Create a trigger to validate inventory before order placement.

*Expected Output:*
| Error Message |
| ------------- |
| Insufficient inventory for product 101 |

5. Create a trigger to cascade order status changes to related tables.

*Expected Output:*
| shipment_status | payment_status |
| --------------- | ------------- |
| Cancelled       | Refunded      |

6. Create a trigger to maintain product popularity metrics.

*Expected Output:*
| product_id | order_count | popularity_score |
| ---------- | ----------- | ---------------- |
| 101        | 15          | 85               |
| 102        | 8           | 45               |