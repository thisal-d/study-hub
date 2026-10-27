# Lecture 04: Introduction to Financial Accounting

**Module:** IT3120 – Modern Enterprise Management (නූතන ව්‍යවසාය කළමනාකරණය)  
**Main Topic:** Financial Statements, The Accounting Equation, Cash Flow Dynamics, and Ratio Analysis  
**Target Audience:** Computing and Information Technology Undergraduates

---

## 1. Introduction

Why do software engineers and technology leaders need to understand **Financial Accounting (මූල්‍ය ගිණුම්කරණය)**? Whether you are pitching an innovative SaaS product to venture capitalists, managing a cloud infrastructure budget, or evaluating the commercial viability of an enterprise software proposal, you must speak the universal language of business: **Finance**.

A software company can possess the most elegant code, the most brilliant engineers, and high paper profitability, yet still collapse into bankruptcy within weeks if its cash flow is mismanaged. Financial accounting provides the formal, standardized framework for measuring, interpreting, and communicating the economic reality of a commercial enterprise.

### Why This Topic Matters
- Technology startups fail most often because they exhaust their cash runway (මුදල් සංචිත අවසන් වීම), not because of code defects.
- IT Managers, Solutions Architects, and Project Managers must justify capital expenditures (CapEx) for server hardware against operational expenses (OpEx) for cloud subscriptions.
- Reading a **Balance Sheet (ශේෂ පත්‍රය)** and an **Income Statement (ආදායම් ප්‍රකාශය)** allows technical managers to evaluate whether potential enterprise clients or partner vendors are financially stable.

### Learning Objectives
After studying these notes, you will be able to:
1. Define financial accounting and distinguish between external reporting and internal management accounting.
2. Define and interconnect the eight core financial concepts.
3. Classify assets into **Current, Fixed, and Intangible Assets**, and liabilities into **Current and Long-Term Liabilities**.
4. Apply the fundamental accounting equation: $\mathbf{\text{Assets} = \text{Liabilities} + \text{Equity}}$ in diverse business scenarios.
5. Contrast the three core financial statements: **Balance Sheet**, **Income Statement (P&L)**, and **Cash Flow Statement**.
6. Calculate and differentiate the three stages of profitability: **Gross Profit**, **Operating Profit**, and **Net Profit**.
7. Analyze cash flows across **Operating, Investing, and Financing Activities**, and explain why "Profit is not Cash".
8. Calculate and interpret the four families of financial ratios: **Profitability, Liquidity, Efficiency, and Gearing**.
9. Conduct a comprehensive financial health assessment using the **Dialog Axiata PLC Case Study**.

---

## 2. Main Concepts

- **2.1 Understanding Financial Accounting & Primary Users**
- **2.2 The Eight Core Financial Concepts**
- **2.3 Asset and Liability Classifications**
- **2.4 Equity and the Fundamental Accounting Equation**
- **2.5 The Profit vs. Cash Reality (Cash Flow Dilemma)**
- **2.6 The Balance Sheet: Financial Position Snapshot**
- **2.7 The Income Statement: Performance and Profit Tiers**
- **2.8 The Cash Flow Statement: Three Core Activities**
- **2.9 Financial Ratio Analysis (Formulas & Interpretations)**
- **2.10 Comprehensive Worked Case Study: Dialog Axiata PLC**

---

## 3. Detailed Explanations

### 3.1 What Is Financial Accounting?

#### Formal Definition
> **Financial Accounting (මූල්‍ය ගිණුම්කරණය)** is the systematic process of **identifying, recording, classifying, summarizing, and reporting** the financial transactions of an enterprise to provide accurate, standardized information that supports economic decision-making.

```
[ Financial Transactions ] ──► [ Recording & Classification ] ──► [ Summarizing ] ──► [ Three Financial Statements ]
 (Invoices, Payroll, Sales)          (General Ledgers)              (Trial Balance)       (Balance Sheet, P&L, Cash Flow)
```

#### Internal vs. External Users of Financial Data
- **External Users (බාහිර පරිශීලකයින්):** Venture capitalists, bank loan officers, institutional investors, tax authorities (e.g., Inland Revenue Department), and suppliers. They rely on standardized financial statements to assess the company’s solvency, creditworthiness, and investment returns.
- **Internal Users (අභ්‍යන්තර පරිශීලකයින්):** CEOs, CTOs, Engineering Directors, and Project Managers. They use financial metrics to control project spending, calculate cost overruns, and approve hiring plans.

---

### 3.2 The Eight Core Financial Concepts

1. **Revenue / Sales (ආදායම):** The total monetary value earned from selling software licenses, digital services, or hardware **before** any operational expenses or taxes are deducted. Known as the **"Top Line" (ඉහළම අගය)**.
2. **Income (ශුද්ධ ආදායම):** What remains after subtracting business expenses from revenue. In financial statements, this is commonly referred to as profit or the **"Bottom Line" (පහළම අගය)**.
3. **Expenses (වියදම්):** The recurring operational costs incurred in running daily business activities (e.g., developer salaries, office rent, AWS hosting bills).
4. **Expenditure (පිරිවැය / මුදල් වැයවීම):** Any outflow of financial capital. Crucially, not all expenditure is an immediate expense. Purchasing an office building or servers is a capital expenditure (**Investment**), which becomes an Asset.
5. **Profit (ලාභය):** When total revenue exceeds total expenses ($Revenue > Expenses$). The enterprise operates **"In the Black"**.
6. **Loss (අලාභය):** When total expenses exceed total revenue ($Expenses > Revenue$). The enterprise operates **"In the Red"**.
7. **Assets (වත්කම්):** Economic resources and property **owned or controlled** by the business that generate future economic value.
8. **Liabilities (වගකීම්):** Financial obligations and debts **owed to outside third parties** that must be settled in the future.

$$\text{Core Profit Formula: } \mathbf{\text{Revenue} - \text{Expenses} = \text{Profit (or Loss if negative)}}$$

---

### 3.3 Classification of Assets and Liabilities

```
                 ┌── Current Assets (Convertible to cash < 1 year: Cash, Receivables, Inventory)
    Assets ──────┼── Fixed / Non-Current Assets (Tangible long-term: Buildings, Servers, PCs)
 (වත්කම්)        └── Intangible Assets (Non-physical value: Patents, Trademarks, Software IP)

                 ┌── Current Liabilities (Due within 1 year: Accounts Payable, Short-Term Loans)
  Liabilities ───┴── Long-Term Liabilities (Due beyond 1 year: Bank Mortgages, 5-Year Debentures)
  (වගකීම්)
```

#### Detailed Asset Types
- **Current Assets (කාලීන / කෙටිකාලීන වත්කම්):** Liquid resources expected to be converted into cash, sold, or consumed within **12 months**.  
  *Examples:* Physical cash in bank accounts, Accounts Receivable (unpaid client invoices), and stock inventory.
- **Fixed / Non-Current Assets (ස්ථාවර වත්කම්):** Tangible, physical capital used over multiple operating years to generate revenue.  
  *Examples:* Datacenter facilities, office buildings, server racks, company vehicles, and developer MacBooks.
- **Intangible Assets (අස්පර්ශනීය වත්කම්):** High-value, non-physical property rights that provide a powerful competitive advantage.  
  *Examples:* Proprietary software algorithms, registered patents, corporate trademarks, domain names, customer databases, and brand Goodwill (හිතසුවය).

#### Detailed Liability Types
- **Current Liabilities (කාලීන / කෙටිකාලීන වගකීම්):** Debts and operational bills that must legally be paid within **one year**.  
  *Examples:* Accounts Payable (unpaid cloud bills from AWS), accrued developer wages, short-term overdrafts, and corporate taxes due.
- **Long-Term Liabilities (දිගුකාලීන වගකීම්):** Long-term financial debts whose repayment schedules extend beyond **one year**.  
  *Examples:* 10-year bank mortgages, long-term infrastructure bonds, and equipment leasing obligations.

---

### 3.4 Equity & The Fundamental Accounting Equation

**Equity (හිමිකම / ශුද්ධ වත්කම්)** represents the owners' net financial stake in the business. It is what would theoretically remain for the shareholders if all company assets were liquidated and every single outside liability was paid off.

$$\mathbf{\text{Equity} = \text{Total Assets} - \text{Total Liabilities}}$$

#### What Equity Contains
1. **Contributed Capital (හිමිකරුගේ ආයෝජන):** Original cash or assets invested into the business by the founders or shareholders.
2. **Retained Earnings (ඉතිරි කරගත් ඉපැයීම්):** Cumulative historical net profits reinvested back into the company for growth rather than paid out as cash dividends.

---

#### The Fundamental Accounting Equation
Every double-entry bookkeeping transaction in the world must keep this equation in absolute mathematical balance:

$$\mathbf{\text{Assets} = \text{Liabilities} + \text{Equity}}$$

```
┌───────────────────────────────────────┬───────────────────────────────────────┐
│             ASSETS                    │       LIABILITIES  +  EQUITY          │
│   What the Company Owns ($100,000)    │    Creditor Claims  +  Owner Claims   │
│   (Cash, Hardware, Software IP)       │        ($30,000)         ($70,000)    │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

**Simple Example:**  
If a software startup holds **$100,000 in total assets** (cash and servers) and has **$30,000 in liabilities** (bank debt), the owner's **equity is exactly $70,000** ($100,000 - 30,000$).

---

### 3.5 The Crucial Reality: Profit Does Not Equal Cash!

One of the most dangerous traps for junior entrepreneurs is conflating **Accounting Profit** with **Liquid Cash**:

| Dimension | Positive Cash Flow (ධන මුදල් ප්‍රවාහය) | Negative Cash Flow (සෘණ මුදල් ප්‍රවාහය) |
|---|---|---|
| **What It Means** | More liquid cash is entering the bank account than leaving it. | More cash is exiting the bank account than entering it. |
| **Business Impact** | The company can comfortably pay developer salaries on time, pay vendor bills, and self-fund expansion. | Even if the company reports massive sales profits on paper, **it will go bankrupt if cash hits zero**. |

---

**Concept: Profit vs. Cash Discrepancy (ලාභය සහ මුදල් අතර වෙනස)**

**Meaning:** A company recognizes revenue and accounting profit the moment an invoice is issued, but it cannot spend that profit until the customer actually deposits real cash into its bank account.

**Simple IT Example:** In December, an enterprise software agency signs a contract to build a custom ERP system for LKR 10,000,000. It issues an invoice with a 90-day payment term.
- *Accounting Income Statement:* Shows LKR 10,000,000 revenue. After deducting LKR 6,000,000 developer expenses, the company reports a spectacular paper profit of **LKR 4,000,000**.
- *Cash Flow Reality:* The client has not paid yet. In January, the agency has **LKR 0 cash in the bank**. If it must pay LKR 2,000,000 in developer salaries and office rent on January 31st, **the agency will go bankrupt despite being "profitable" on paper**.

**Why It Matters:** Tech managers must aggressively monitor cash collection cycles (Accounts Receivable) to prevent profitable companies from collapsing due to cash starvation.

---

### 3.6 The Three Key Financial Statements

```
1. Balance Sheet (ශේෂ පත්‍රය)
   └─► Snapshot of Financial Position at an exact point in time (As of Dec 31st).
       Equation: Assets = Liabilities + Equity.

2. Income Statement / P&L (ආදායම් ප්‍රකාශය)
   └─► Video of Financial Performance over an elapsed period (Jan 1st to Dec 31st).
       Equation: Revenue − Expenses = Net Profit.

3. Cash Flow Statement (මුදල් ප්‍රවාහ ප්‍රකාශය)
   └─► Tracking Actual Liquid Cash Movements over an elapsed period.
       Three Activities: Operating + Investing + Financing = Net Change in Cash.
```

---

### 3.7 The Income Statement: The Three Profit Levels

The Income Statement structures profits hierarchically into three distinct levels, revealing exactly where money is earned or lost:

```
[ Gross Revenue / Sales (සමස්ත ආදායම) ]
         │
         ▼  (Minus: Cost of Sales / COGS - සෘජු නිෂ්පාදන පිරිවැය)
[ 1. Gross Profit (දළ ලාභය) ] ──► Measures manufacturing / core delivery efficiency.
         │
         ▼  (Minus: Operating Expenses / OpEx - ක්‍රියාකාරී වියදම්: R&D, Sales, Admin)
[ 2. Operating Profit / EBIT (ක්‍රියාකාරී ලාභය) ] ──► Measures core operational success.
         │
         ▼  (Minus: Finance Costs / Loan Interest & Corporate Taxes)
[ 3. Net Profit (ශුද්ධ ලාභය) ] ──► The true "Bottom Line" available to shareholders.
```

1. **Gross Profit (දළ ලාභය):**  
   $$\mathbf{\text{Gross Profit} = \text{Revenue} - \text{Cost of Sales (COGS)}}$$  
   *Cost of Sales (සෘජු පිරිවැය):* Direct costs required to deliver the software (cloud server hosting for client instances, direct developer billable hours).
2. **Operating Profit (ක්‍රියාකාරී ලාභය / EBIT):**  
   $$\mathbf{\text{Operating Profit} = \text{Gross Profit} - \text{Operating Expenses (OpEx)}}$$  
   *Operating Expenses (ක්‍රියාකාරී වියදම්):* General administrative overhead, marketing campaigns, executive salaries, and office rent. Shows if core operations make money before financial tricks and taxes.
3. **Net Profit (ශුද්ධ ලාභය):**  
   $$\mathbf{\text{Net Profit} = \text{Operating Profit} - \text{Finance Interest Costs} - \text{Taxes}}$$  
   The definitive final bottom line.

---

### 3.8 The Cash Flow Statement: Three Core Activities

The Cash Flow Statement categorizes all cash movements into three operational engines:

```
[ Cash Flow Statement ]
   ├── 1. Operating Activities ── (Core business operations: customer collections, salaries)
   ├── 2. Investing Activities ── (Capital assets: buying/selling servers, hardware, IP)
   └── 3. Financing Activities ── (Capital funding: bank loans, issuing equity, dividends)
```

1. **Cash Flow from Operating Activities - CFO (මෙහෙයුම් ක්‍රියාකාරකම්):**  
   Cash generated directly from core business trading.  
   - *Inflows:* Cash payments received from clients for software subscriptions and consulting fees.  
   - *Outflows:* Cash paid out for staff salaries, cloud hosting bills, office utilities, and supplier fees.  
   *Insight:* A healthy business must maintain **positive operating cash flow**.
2. **Cash Flow from Investing Activities - CFI (ආයෝජන ක්‍රියාකාරකම්):**  
   Cash spent on or gained from long-term capital assets.  
   - *Outflows:* Buying new high-performance AI GPU server clusters, purchasing office real estate, or acquiring a smaller startup.  
   - *Inflows:* Cash proceeds from selling depreciated computer equipment.  
   *Insight:* Growing tech firms typically have **negative investing cash flow** because they are heavily reinvesting capital into tech infrastructure for the future.
3. **Cash Flow from Financing Activities - CFF (මූල්‍යකරණ ක්‍රියාකාරකම්):**  
   Cash flows related to raising capital and repaying funders.  
   - *Inflows:* Receiving bank loans, securing venture capital equity investment.  
   - *Outflows:* Repaying bank loan principals, paying dividend cash distributions to shareholders.

$$\mathbf{\text{Net Increase in Cash} = \text{Operating Cash Flow} \pm \text{Investing Cash Flow} \pm \text{Financing Cash Flow}}$$

---

### 3.9 Financial Ratio Analysis

Financial ratios connect numbers across financial statements to reveal a company's underlying health, operational speed, and risk profile.

```
                           ┌── 1. Profitability Ratios (Gross Margin, Net Margin)
                           ├── 2. Liquidity Ratios (Current Ratio)
Financial Ratio Families ──┼── 3. Efficiency Ratios (Receivables & Payables Cycles)
                           └── 4. Gearing / Solvency Ratios (Debt-to-Equity Ratio)
```

#### 1. Profitability Ratios (ලාභදායීතා අනුපාත)
Measure how effectively the business converts revenue into real profit:
- **Gross Profit Margin (දළ ලාභ ආන්තිකය):**
  $$\text{Gross Profit Margin} = \frac{\text{Gross Profit}}{\text{Revenue}} \times 100$$
- **Net Profit Margin (ශුද්ධ ලාභ ආන්තිකය):**
  $$\text{Net Profit Margin} = \frac{\text{Net Profit}}{\text{Revenue}} \times 100$$

#### 2. Liquidity Ratios (ද්‍රවශීලතා අනුපාත)
Measure the firm’s ability to pay off immediate short-term debts due within one year using short-term liquid assets:
- **Current Ratio (කාලීන අනුපාතය):**
  $$\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}$$
  *Benchmark:* A ratio of **2:1** is traditionally considered strong and safe. If the ratio drops below **1:1**, the firm faces immediate danger of insolvency.

#### 3. Efficiency (Activity) Ratios (කාර්යක්ෂමතා අනුපාත)
Evaluate how swiftly the enterprise collects receivables from clients and converts resources into sales:
- Focuses on working capital turnover, cash conversion cycles, and receivables collection speed.

#### 4. Gearing / Leverage Ratios (ණයගැතිතා අනුපාත)
Measure the proportion of business capital funded through interest-bearing debt versus shareholders' equity:
- **Debt-to-Equity Ratio (ණය සහ හිමිකම් අනුපාතය):**
  $$\text{Debt-to-Equity Ratio} = \frac{\text{Total Borrowings / Debt}}{\text{Shareholders' Equity}}$$
  *Insight:* High gearing indicates heavy reliance on bank debt. This amplifies financial risk during recessions, but provides leverage to fund rapid infrastructure expansion.

---

### 3.10 Worked Master Case Study: Dialog Axiata PLC

Let us analyze the complete financial data of Sri Lanka’s premier telecommunications and digital services provider, **Dialog Axiata PLC**, from the lecture material:

#### 1. Income Statement (Performance over the Year)

| Financial Line Item | Amount in LKR Billions | Step-by-Step Calculation |
|---|---|---|
| **Revenue (ආදායම)** | **LKR 180 B** | Gross billings from mobile, broadband, and IT |
| Cost of Sales (COGS) | (LKR 90 B) | Direct network transmission and hardware cost |
| **Gross Profit (දළ ලාභය)** | **LKR 90 B** | $\text{Gross Profit} = 180 - 90 = \mathbf{90 \text{ B}}$ |
| Operating Expenses (OpEx) | (LKR 50 B) | Sales, marketing, corporate overhead |
| **Operating Profit (ක්‍රියාකාරී ලාභය)** | **LKR 40 B** | $\text{Operating Profit} = 90 - 50 = \mathbf{40 \text{ B}}$ |
| Finance Costs & Taxes | (LKR 20 B) | Loan interest and corporate income taxes |
| **Net Profit (ශුද්ධ ලාභය)** | **LKR 20 B** | $\text{Net Profit} = 40 - 20 = \mathbf{20 \text{ B}}$ |

---

#### 2. Balance Sheet (Financial Position Snapshot)

| Balance Sheet Item | Amount in LKR Billions | Accounting Verification |
|---|---|---|
| **Total Assets (වත්කම්)** | **LKR 286 B** | Cell towers, spectrum licenses, cash, receivables |
| **Total Liabilities (වගකීම්)** | **LKR 220 B** | Bank loans, vendor equipment payables |
| **Shareholders' Equity (හිමිකම)** | **LKR 66 B** | Share capital plus accumulated retained earnings |

$$\text{Check Fundamental Equation: } \mathbf{\text{Assets } (286) = \text{Liabilities } (220) + \text{Equity } (66)} \quad \checkmark \text{ Balanced!}$$

---

#### 3. Cash Flow Statement (Liquid Movements)

| Cash Flow Category | Amount in LKR Billions | Managerial Meaning |
|---|---|---|
| **Operating Cash Flow** | **+ LKR 49 B** | Highly lucrative cash generation from core operations |
| **Investing Cash Flow** | **(LKR 20 B)** | Outflow to purchase 5G network hardware and fiber optic cables |
| **Financing Cash Flow** | **(LKR 10 B)** | Outflow to pay bank loan interest and shareholder dividends |
| **Net Increase in Cash** | **+ LKR 19 B** | $\text{Net Cash Flow} = +49 - 20 - 10 = \mathbf{+19 \text{ B}}$ |

---

#### 4. Calculated Financial Ratios & Managerial Interpretations

1. **Gross Profit Margin:**
   $$\frac{\text{LKR } 90 \text{ B}}{\text{LKR } 180 \text{ B}} \times 100 = \mathbf{50\%}$$
   *Meaning:* Exactly half of total revenue is retained after direct production costs. Highly profitable delivery structure.
2. **Net Profit Margin:**
   $$\frac{\text{LKR } 20 \text{ B}}{\text{LKR } 180 \text{ B}} \times 100 = \mathbf{11.11\%}$$
   *Meaning:* For every 100 rupees of revenue collected, Dialog converts approximately 11 rupees into pure shareholder profit.
3. **Current Ratio:**
   $$\text{Current Ratio} = \mathbf{2 : 1}$$
   *Meaning:* Dialog holds 2 rupees of liquid current assets for every 1 rupee of current debt due. Strong liquidity with zero short-term bankruptcy risk.
4. **Efficiency (Activity) Profile:**
   - *Receivables Collection:* Extremely fast due to Dialog’s prepaid reload scratch card and automated mobile app billing model.
   - *Payables Period:* Moderate; Dialog holds strong bargaining power over telecom equipment vendors.
5. **Gearing (Debt-to-Equity Ratio):**
   $$\text{Debt-to-Equity} = \frac{\text{LKR } 220 \text{ B (Total Debt)}}{\text{LKR } 66 \text{ B (Equity)}} = \mathbf{3.33 : 1} \quad (\text{or 2.3 : 1 on long-term borrowings})$$
   *Meaning:* Dialog operates with high debt gearing. In capital-intensive infrastructure industries (telecommunications, cloud datacenters), high gearing is standard practice to finance massive upfront tower expansions without diluting shareholder equity.

---

## 4. Comparison Tables

### 4.1 Balance Sheet vs. Income Statement vs. Cash Flow Statement

| Feature | Balance Sheet (ශේෂ පත්‍රය) | Income Statement (P&L) | Cash Flow Statement |
|---|---|---|---|
| **Core Purpose** | Reports financial **Position** (Wealth). | Reports financial **Performance** (Profitability). | Reports financial **Liquidity** (Cash Movements). |
| **Time Horizon** | Snapshot at a **specific date** (e.g., Dec 31st). | Period of time **over an interval** (e.g., Year 2026). | Period of time **over an interval** (e.g., Year 2026). |
| **Core Equation** | $\text{Assets} = \text{Liabilities} + \text{Equity}$ | $\text{Revenue} - \text{Expenses} = \text{Profit}$ | $\text{Operating} \pm \text{Investing} \pm \text{Financing} = \Delta \text{Cash}$ |
| **Analogy** | A still photograph of bank and asset holdings. | A movie tracking operational score across the year. | A bank statement tracking physical cash in and out. |

### 4.2 Gross Profit vs. Operating Profit vs. Net Profit

| Level | Formula | What It Specifically Isolates | Primary Managerial User |
|---|---|---|---|
| **Gross Profit** | $\text{Revenue} - \text{COGS}$ | Direct manufacturing or service delivery efficiency. | Solutions Architects, Operations Managers. |
| **Operating Profit** | $\text{Gross Profit} - \text{OpEx}$ | Success of core business operations, excluding debt & tax. | Chief Operating Officer (COO), General Managers. |
| **Net Profit** | $\text{Operating Profit} - \text{Interest} - \text{Tax}$ | Final net return generated for shareholders. | Chief Financial Officer (CFO), Investors, Board. |

---

## 5. Processes and Workflows

### 5.1 Account Classification Decision Tree

When classifying an account entry, follow this logical flow:

```
                                  [ Financial Entry ]
                                           │
                    Is it an economic property, an obligation, or a transaction?
                                           │
             ┌─────────────────────────────┼─────────────────────────────┐
             ▼                             ▼                             ▼
       [ PROPERTY ]                   [ OBLIGATION ]              [ TRANSACTION ]
    Owned by the firm?            Owed to outside party?       Alters Wealth over time?
             │                             │                             │
             ▼                             ▼                             ▼
         [ ASSET ]                   [ LIABILITY ]            ┌──────────┴──────────┐
      Is it cashable              Due within 12 months?       ▼                     ▼
      within 1 year?                       │             [ REVENUE ]           [ EXPENSE ]
      ┌──────┴──────┐                ┌─────┴─────┐      Earned from Sales    Incurred running
      ▼             ▼                ▼           ▼      (e.g., SaaS fee)     the business
 [ CURRENT ]   [ NON-CURRENT ]  [ CURRENT ] [ LONG-TERM ]                    (e.g., Server rent)
 (Cash, AR)    (Servers, IP)    (Payables)  (Mortgage)
```

---

## 6. Comprehensive Formulas & Calculation Guide

```
1. Fundamental Equation:
   Assets = Liabilities + Equity
   Equity = Assets - Liabilities
   Liabilities = Assets - Equity

2. Profit Levels:
   Gross Profit = Revenue - Cost of Sales (COGS)
   Operating Profit = Gross Profit - Operating Expenses (OpEx)
   Net Profit = Operating Profit - Financing Interest - Taxes

3. Cash Flow:
   Net Cash Change = Cash from Operations (CFO) + Cash from Investing (CFI) + Cash from Financing (CFF)

4. Profitability Margins:
   Gross Profit Margin = (Gross Profit / Revenue) × 100
   Net Profit Margin = (Net Profit / Revenue) × 100

5. Liquidity:
   Current Ratio = Current Assets / Current Liabilities

6. Leverage / Gearing:
   Debt-to-Equity Ratio = Total Debt Borrowings / Shareholders' Equity
```

---

## 7. Advantages and Limitations of Financial Accounting

| Feature | Key Advantages (වාසි) | Limitations / Pitfalls (සීමාවන්) |
|---|---|---|
| **Standardized Financial Statements** | • Establishes universal transparency for outside investors.<br>• Enables easy benchmarking against industry competitors. | • **Historical Data:** Shows where the company was in the past, not guaranteed future performance.<br>• **Ignores Non-Financial Value:** Cannot quantify employee morale, clean code architecture, or technical debt. |
| **Accrual Accounting Method** | • Accurately matches expenses to the exact revenue they helped generate. | • Obscures real cash balances, potentially masking severe liquidity crises. |

---

## 8. Important Exam Points

> [!IMPORTANT]
> Keep these core exam principles ready for instant recall:
> 1. **Assets = Liabilities + Equity:** If Assets increase, either Liabilities or Equity must increase by the identical amount.
> 2. **Current vs. Long-Term Threshold:** The dividing line is strictly **12 months (1 year)**.
> 3. **Equipment Purchase Classification:** Buying servers or computers with cash is an **Investing Cash Outflow**, NOT an operating expense!
> 4. **Profit ≠ Cash:** A firm can report record net profits on its Income Statement while concurrently plunging into bankruptcy on its Cash Flow Statement due to unpaid receivables.
> 5. **Operating Profit (EBIT):** Measures core operating capability before bank interest and government taxes distort the picture.

---

## 9. Quick Revision Summary

- **Financial Accounting:** Recording and reporting economic performance for external stakeholders.
- **Accounting Equation:** $\text{Assets} = \text{Liabilities} + \text{Equity}$.
- **Assets:** Current (< 1 yr: cash, receivables), Fixed (long-term tangible: servers, buildings), and Intangible (patents, software IP).
- **Liabilities:** Current (< 1 yr: payables), Long-term (> 1 yr: bank loans).
- **Income Statement Flow:** Revenue $\to$ Gross Profit $\to$ Operating Profit $\to$ Net Profit.
- **Cash Flow Pillars:** Operating (daily core), Investing (fixed capital hardware), Financing (loans, equity, dividends).
- **Current Ratio:** Measures short-term liquidity safety ($\text{Current Assets} / \text{Current Liabilities}$). Target $\approx 2:1$.
- **Gearing:** $\text{Debt} / \text{Equity}$; highlights financial risk and debt-fueled growth.

---

## 10. Practice Questions & Answers

### Multiple-Choice Questions (MCQs)

**Q1:** A software firm receives a bank loan of LKR 5,000,000 in cash. What is the immediate effect on the fundamental accounting equation?  
A. Assets increase by LKR 5,000,000 and Equity increases by LKR 5,000,000  
B. Assets increase by LKR 5,000,000 and Liabilities increase by LKR 5,000,000  
C. Liabilities increase by LKR 5,000,000 and Equity decreases by LKR 5,000,000  
D. Assets decrease by LKR 5,000,000 and Liabilities decrease by LKR 5,000,000  
*Answer:* **B**  
*Explanation:* Cash (an Asset) increases by LKR 5,000,000, and bank loan debt (a Liability) increases by LKR 5,000,000. The equation stays balanced.

**Q2:** A company reports Revenue of LKR 500,000, Cost of Sales of LKR 300,000, and Operating Expenses of LKR 120,000. What is its Operating Profit?  
A. LKR 200,000  
B. LKR 80,000  
C. LKR 380,000  
D. LKR 180,000  
*Answer:* **B**  
*Explanation:* $\text{Gross Profit} = 500,000 - 300,000 = 200,000$.  
$\text{Operating Profit} = 200,000 - 120,000 = \text{LKR } 80,000$.

**Q3:** Which of the following cash flow events is classified under Investing Activities?  
A. Receiving LKR 2,000,000 from customers for software maintenance  
B. Paying LKR 1,500,000 in monthly developer wages  
C. Spending LKR 4,000,000 to purchase high-performance GPU server clusters  
D. Paying LKR 500,000 in loan interest to the bank  
*Answer:* **C**  
*Explanation:* Purchasing long-term capital physical assets (servers) is an Investing Activity. A and B are Operating; D is Financing.

---

### Short-Answer & Scenario-Based Questions

**Q4 (Explain-the-Difference):** Explain why Accounts Receivable is listed as an Asset on the Balance Sheet, whereas Accounts Payable is listed as a Liability.  
*Model Answer:*  
**Accounts Receivable (හිමිවිය යුතු ලැබීම්)** is classified as a Current Asset because it represents legally enforceable claims to cash owed *to* the business by customers who have received software services on credit. Conversely, **Accounts Payable (ගෙවිය යුතු ණය)** is a Current Liability because it represents debt obligations owed *by* the company to external suppliers (such as cloud hosting providers) that must be settled in cash within the year.

**Q5 (Comprehensive Numerical Calculation):**  
A cloud SaaS startup presents the following financial data for its fiscal year:
- Cash received from subscribers: LKR 12,000,000
- Cash paid for developer salaries & hosting: LKR 7,000,000
- Cash paid to purchase new backup servers: LKR 3,000,000
- Cash received from issuing new equity shares: LKR 5,000,000
- Cash paid for loan principal repayment: LKR 2,000,000
- Balance Sheet Current Assets: LKR 6,000,000; Current Liabilities: LKR 3,000,000.

Calculate:
1. Cash Flow from Operating Activities (CFO).
2. Cash Flow from Investing Activities (CFI).
3. Cash Flow from Financing Activities (CFF).
4. Net Increase in Cash for the year.
5. The Current Ratio, including a brief assessment of liquidity.

*Model Answer:*  
1. $\text{CFO} = 12,000,000 - 7,000,000 = \mathbf{+\text{LKR } 5,000,000}$.  
2. $\text{CFI} = \mathbf{-\text{LKR } 3,000,000}$ (outflow for backup servers).  
3. $\text{CFF} = +5,000,000 \text{ (equity)} - 2,000,000 \text{ (loan repayment)} = \mathbf{+\text{LKR } 3,000,000}$.  
4. $\text{Net Cash Increase} = +5,000,000 - 3,000,000 + 3,000,000 = \mathbf{+\text{LKR } 5,000,000}$.  
5. $\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}} = \frac{\text{LKR } 6,000,000}{\text{LKR } 3,000,000} = \mathbf{2 : 1}$.  
   *Assessment:* The startup holds exactly 2 rupees of short-term assets for every 1 rupee of short-term debt. This is an ideal, safe liquidity position with zero risk of immediate insolvency.
