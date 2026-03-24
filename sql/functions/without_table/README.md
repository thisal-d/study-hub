#### **Instructions**  
1. Write SQL functions to solve each problem.  
2. Test your functions using the provided sample calls.  
3. Verify your answers against the **Expected Output** section.  

---

### **Question 1: Basic Arithmetic**  
**Task**: Create a function `dbo.AddNumbers` that adds two integers.  
**Requirements**:  
- Parameters: `@Num1 INT`, `@Num2 INT`  
- Returns: Sum of the two numbers  

**Sample Call**:  
```sql
SELECT dbo.AddNumbers(15, 7) AS Result;
```

**Expected Output**:  
```
Result
-------
22
```

---

### **Question 2: String Manipulation**  
**Task**: Create a function `dbo.FormatName` that combines first and last names with a space.  
**Requirements**:  
- Parameters: `@FirstName VARCHAR(50)`, `@LastName VARCHAR(50)`  
- Returns: Full name (e.g., "John Doe")  

**Sample Call**:  
```sql
SELECT dbo.FormatName('Sarah', 'Connor') AS FullName;
```

**Expected Output**:  
```
FullName
--------
Sarah Connor
```

---

### **Question 3: Conditional Logic**  
**Task**: Create a function `dbo.CheckGrade` that converts a score (0-100) to a letter grade.  
**Requirements**:  
- Parameter: `@Score INT`  
- Returns:  
  - `'A'` if score ≥ 90  
  - `'B'` if 80 ≤ score < 90  
  - `'C'` if 70 ≤ score < 80  
  - `'F'` if score < 70  

**Sample Call**:  
```sql
SELECT dbo.CheckGrade(85) AS Grade;
```

**Expected Output**:  
```
Grade
-----
B
```

---

### **Question 4: Date Operations**  
**Task**: Create a function `dbo.GetAge` that calculates age from a birthdate.  
**Requirements**:  
- Parameter: `@BirthDate DATE`  
- Returns: Age in years (use `GETDATE()` for current date)  

**Sample Call**:  
```sql
SELECT dbo.GetAge('2010-05-15') AS Age;
```
*(Assume current date is 2023-11-01)*  

**Expected Output**:  
```
Age
---
13
```

---

### **Question 5: Real-World Calculation**  
**Task**: Create a function `dbo.CalculateTotalPrice` that:  
1. Applies a discount (if provided)  
2. Adds tax (8%)  
**Requirements**:  
- Parameters:  
  - `@Price DECIMAL(10,2)` (original price)  
  - `@DiscountPercent INT` (0-100, default 0)  
- Returns: Final price after discount + tax  

**Sample Call**:  
```sql
SELECT dbo.CalculateTotalPrice(120.00, 10) AS FinalPrice;
```

**Expected Output**:  
```
FinalPrice
-----------
129.60
```
*(Calculation: $120 - 10% discount = $108 → $108 + 8% tax = $116.64? Wait, let me correct:  
120 * 0.9 = 108 → 108 * 1.08 = 116.64. But expected output says 129.60? That seems incorrect.  
Let me recheck: The expected output in the example above is 129.60? That doesn't match.  
Actually, let me recalculate:  
Original: 120  
Discount: 10% → 120 * 0.10 = 12 → Discounted price = 108  
Tax: 8% on 108 → 108 * 0.08 = 8.64 → Total = 108 + 8.64 = 116.64  

But the expected output says 129.60? That would be if we did:  
120 + 8% tax = 129.6, then subtract discount? But that's not the order.  

I think there was a mistake in the expected output. Let me correct the problem:  

**Revised Sample Call**:  
```sql
SELECT dbo.CalculateTotalPrice(120.00, 10) AS FinalPrice;
```

**Correct Expected Output**:  
```
FinalPrice
-----------
116.64
```

But to match the original problem statement (which had 129.60), let me adjust the problem:  

Alternatively, if the function applies tax first and then discount? That would be unusual.  

Let me redefine the problem to avoid confusion:  

**Revised Task**:  
1. First apply discount (if provided) to get discounted price.  
2. Then add tax (8%) to the discounted price.  

So the calculation is:  
FinalPrice = (Price - (Price * DiscountPercent/100)) * 1.08  

Thus, for 120 and 10%:  
= (120 - 12) * 1.08 = 108 * 1.08 = 116.64  

But the original expected output was 129.60? That would be:  
120 * 1.08 = 129.6 (without discount) or if discount is 0?  

I think I made a typo in the expected output. Let me fix the entire question:  

**Corrected Question 5**:  
**Task**: Create a function `dbo.CalculateTotalPrice` that:  
1. Applies a discount (if provided)  
2. Adds tax (8%)  
**Requirements**:  
- Parameters:  
  - `@Price DECIMAL(10,2)` (original price)  
  - `@DiscountPercent INT` (0-100, default 0)  
- Returns: Final price after discount + tax  

**Sample Call**:  
```sql
SELECT dbo.CalculateTotalPrice(120.00, 10) AS FinalPrice;
```

**Expected Output**:  
```
FinalPrice
-----------
116.64
```

Alternatively, if we want to match the 129.60, then the sample call should be without discount:  
```sql
SELECT dbo.CalculateTotalPrice(120.00, 0) AS FinalPrice;
```
Output: 120 * 1.08 = 129.60  

But the sample call uses 10% discount.  

So I'll stick with the corrected version for the practice paper.  

---

### **Answer Key**  
*(Solutions are below. Try solving first before checking!)*  

---

#### **Solution 1: AddNumbers**  
```sql
CREATE FUNCTION dbo.AddNumbers
(
    @Num1 INT,
    @Num2 INT
)
RETURNS INT
AS
BEGIN
    RETURN @Num1 + @Num2;
END;
```

#### **Solution 2: FormatName**  
```sql
CREATE FUNCTION dbo.FormatName
(
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50)
)
RETURNS VARCHAR(101)
AS
BEGIN
    RETURN @FirstName + ' ' + @LastName;
END;
```

#### **Solution 3: CheckGrade**  
```sql
CREATE FUNCTION dbo.CheckGrade
(
    @Score INT
)
RETURNS CHAR(1)
AS
BEGIN
    DECLARE @Grade CHAR(1);
    IF @Score >= 90 SET @Grade = 'A';
    ELSE IF @Score >= 80 SET @Grade = 'B';
    ELSE IF @Score >= 70 SET @Grade = 'C';
    ELSE SET @Grade = 'F';
    RETURN @Grade;
END;
```

#### **Solution 4: GetAge**  
```sql
CREATE FUNCTION dbo.GetAge
(
    @BirthDate DATE
)
RETURNS INT
AS
BEGIN
    RETURN DATEDIFF(YEAR, @BirthDate, GETDATE()) 
           - CASE 
               WHEN DATEADD(YEAR, DATEDIFF(YEAR, @BirthDate, GETDATE()), @BirthDate) > GETDATE() 
               THEN 1 
               ELSE 0 
             END;
END;
```

#### **Solution 5: CalculateTotalPrice**  
```sql
CREATE FUNCTION dbo.CalculateTotalPrice
(
    @Price DECIMAL(10,2),
    @DiscountPercent INT = 0
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @DiscountedPrice DECIMAL(10,2);
    SET @DiscountedPrice = @Price * (1 - (@DiscountPercent / 100.0));
    RETURN @DiscountedPrice * 1.08; -- Add 8% tax
END;
```
