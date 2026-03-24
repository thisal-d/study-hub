]\

### **Question 1: Product Pricing Function**  
**Scenario**: You have a `Products` table. Create a function that calculates the final price (after discount + tax) for a product.  

#### **Table Schema**  
```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    BasePrice DECIMAL(10,2),
    DiscountPercent INT  -- 0-100
);
```

#### **Sample Data**  
```sql
INSERT INTO Products VALUES 
(1, 'Laptop', 999.99, 15),  -- 15% discount
(2, 'Mouse', 25.00, 0),     -- no discount
(3, 'Keyboard', 75.50, 10); -- 10% discount
```

#### **Task**  
Create function `dbo.CalculateFinalPrice` that:  
1. Takes `@ProductID` as input  
2. Returns final price after:  
   - Applying product-specific discount  
   - Adding 8% sales tax  
3. Returns `NULL` if product doesn't exist  

#### **Sample Call**  
```sql
SELECT dbo.CalculateFinalPrice(1) AS FinalPrice;
```

#### **Expected Output**  
```
FinalPrice
-----------
911.99
```
*(Calculation: $999.99 - 15% = $849.99 → $849.99 + 8% tax = $911.99)*

---

### **Question 2: Customer Age Classification**  
**Scenario**: You have a `Customers` table. Create a function that classifies customers into age groups.  

#### **Table Schema**  
```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FullName VARCHAR(100),
    BirthDate DATE
);
```

#### **Sample Data**  
```sql
INSERT INTO Customers VALUES 
(1, 'John Smith', '1995-03-12'),  -- Age 28
(2, 'Emma Davis', '2010-07-22'),  -- Age 13
(3, 'Robert Brown', '1945-11-30'); -- Age 78
```

#### **Task**  
Create function `dbo.GetAgeGroup` that:  
1. Takes `@CustomerID` as input  
2. Returns age group based on current age:  
   - `'Child'` if age < 13  
   - `'Teen'` if 13 ≤ age < 18  
   - `'Adult'` if 18 ≤ age < 65  
   - `'Senior'` if age ≥ 65  
3. Returns `'Unknown'` if customer doesn't exist  

#### **Sample Call**  
```sql
SELECT 
    c.FullName,
    dbo.GetAgeGroup(c.CustomerID) AS AgeGroup
FROM Customers c
WHERE c.CustomerID IN (1, 2, 3);
```

#### **Expected Output**  
```
FullName        AgeGroup
--------------- ---------
John Smith      Adult
Emma Davis      Teen
Robert Brown    Senior
```

---

### **Question 3: Order Summary Function**  
**Scenario**: You have `Orders` and `OrderItems` tables. Create a function that returns the total value of an order.  

#### **Table Schema**  
```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    CustomerID INT
);

CREATE TABLE OrderItems (
    ItemID INT PRIMARY KEY,
    OrderID INT,
    ProductName VARCHAR(50),
    Quantity INT,
    UnitPrice DECIMAL(10,2)
);
```

#### **Sample Data**  
```sql
-- Orders
INSERT INTO Orders VALUES 
(101, '2023-10-15', 1),
(102, '2023-10-16', 2);

-- OrderItems
INSERT INTO OrderItems VALUES 
(1001, 101, 'Laptop', 1, 999.99),
(1002, 101, 'Mouse', 2, 25.00),
(1003, 102, 'Keyboard', 3, 75.50);
```

#### **Task**  
Create function `dbo.GetOrderTotal` that:  
1. Takes `@OrderID` as input  
2. Returns total order value (SUM(Quantity × UnitPrice))  
3. Returns `0` if order has no items  

#### **Sample Call**  
```sql
SELECT 
    o.OrderID,
    dbo.GetOrderTotal(o.OrderID) AS OrderTotal
FROM Orders o
WHERE o.OrderID IN (101, 102);
```

#### **Expected Output**  
```
OrderID OrderTotal
-------- ----------
101     1049.99
102     226.50
```
*(Calculations:  
Order 101: (1×999.99) + (2×25.00) = 999.99 + 50.00 = 1049.99  
Order 102: (3×75.50) = 226.50)*

---

### **Answer Key**  
*(Try solving first before checking!)*  

#### **Solution 1: CalculateFinalPrice**  
```sql
CREATE FUNCTION dbo.CalculateFinalPrice
(
    @ProductID INT
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @FinalPrice DECIMAL(10,2);
    
    SELECT @FinalPrice = (BasePrice * (1 - (DiscountPercent / 100.0))) * 1.08
    FROM Products
    WHERE ProductID = @ProductID;
    
    RETURN @FinalPrice;
END;
```

#### **Solution 2: GetAgeGroup**  
```sql
CREATE FUNCTION dbo.GetAgeGroup
(
    @CustomerID INT
)
RETURNS VARCHAR(10)
AS
BEGIN
    DECLARE @Age INT, @AgeGroup VARCHAR(10);
    
    SELECT @Age = DATEDIFF(YEAR, BirthDate, GETDATE()) 
             - CASE 
                 WHEN DATEADD(YEAR, DATEDIFF(YEAR, BirthDate, GETDATE()), BirthDate) > GETDATE() 
                 THEN 1 
                 ELSE 0 
               END
    FROM Customers
    WHERE CustomerID = @CustomerID;
    
    IF @Age IS NULL RETURN 'Unknown';
    
    IF @Age < 13 SET @AgeGroup = 'Child';
    ELSE IF @Age < 18 SET @AgeGroup = 'Teen';
    ELSE IF @Age < 65 SET @AgeGroup = 'Adult';
    ELSE SET @AgeGroup = 'Senior';
    
    RETURN @AgeGroup;
END;
```

#### **Solution 3: GetOrderTotal**  
```sql
CREATE FUNCTION dbo.GetOrderTotal
(
    @OrderID INT
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @Total DECIMAL(10,2);
    
    SELECT @Total = SUM(Quantity * UnitPrice)
    FROM OrderItems
    WHERE OrderID = @OrderID;
    
    RETURN ISNULL(@Total, 0);
END;
```