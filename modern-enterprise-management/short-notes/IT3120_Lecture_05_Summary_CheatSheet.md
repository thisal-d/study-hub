# ⚡ IT3120 Modern Enterprise Management — Summary Cheat-Sheet
### Lecture 5: Financial Accounting for Decision Makers (Core Revision Notes)

---

## 1. Essential Definitions

| Term | Quick Memory Hook | Key Distinction |
| :--- | :--- | :--- |
| **Financial Accounting** | Recording $\rightarrow$ Classifying $\rightarrow$ Summarizing $\rightarrow$ Reporting | General-purpose reporting for **external** users (investors, lenders). |
| **Revenue** | Top Line | Total money received from sales *before* expenses. |
| **Income / Net Profit** | Bottom Line | What remains *after* all expenses, interest, and taxes are paid. |
| **Expense** | Day-to-day operational cost | Consumed immediately (e.g., salaries, AWS bill, rent). |
| **Expenditure** | Any cash outflow | Includes CapEx (buying servers, which becomes an Asset). |
| **Cash Flow vs Profit** | Liquidity vs Accrual | A company can be profitable on paper but go bust without cash! |

---

## 2. The Big 3 Financial Statements

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│      BALANCE SHEET      │    INCOME STATEMENT     │   CASH FLOW STATEMENT   │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ • Snapshot (Point in    │ • Period (Duration:     │ • Period (Duration:     │
│   time)                 │   Year/Quarter)         │   Year/Quarter)         │
│ • Assets = Liabilities  │ • Revenue − Expenses =  │ • CFO + CFI + CFF = Net │
│   + Equity              │   Profit / Loss         │   Cash Flow             │
│ • Shows Position &      │ • Shows Operational     │ • Shows Liquidity &     │
│   Solvency              │   Performance           │   Cash Generation       │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

---

## 3. Key Balance Sheet Dimensions (Practical Decision-Making)

| Dimension | Core Question & Managerial Meaning |
| :--- | :--- |
| **1. Financial Position** | What the business **owns (assets)** and **owes (liabilities)** at a specific point in time. |
| **2. Liquidity** | Ability to meet short-term commitments by comparing **Current Assets** to **Current Liabilities** (Target: $\ge 2:1$). |
| **3. Financial Structure** | How the company is funded—through **debt (liabilities)** vs. **owners' funds (equity)**. |
| **4. Solvency & Risk** | Evaluates default risk—higher debt compared to equity increases financial vulnerability. |
| **5. Resource Allocation** | How effectively capital is invested across productive assets (e.g. servers, equipment) to support operations. |

---

## 4. Key Income Statement Insights

1. **Profitability:** Confirms whether the company generated a net profit or suffered a loss over the period.
2. **Revenue Generation:** Evaluates top-line commercial sales growth and earning power.
3. **Cost Control:** Highlights how efficiently operating costs and cost of sales are managed relative to revenue.
4. **Operational Performance:** Operating Profit (EBIT) isolates core IT business health from interest and taxes.
5. **Trends Over Time:** Comparing performance across quarters/years shows business growth or contraction.

---

## 5. Account Classification Matrix

```
┌──────────────────────────────────────┬──────────────────────────────────────┐
│               ASSETS                 │             LIABILITIES              │
│ (Resources owned by the business)    │ (Debts owed to outside parties)      │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ Current (< 1 yr):                    │ Current (< 1 yr):                    │
│ • Cash & Bank balances               │ • Accounts Payable (vendor bills)    │
│ • Accounts Receivable (client debts) │ • Short-term loans / Credit card     │
│ • Inventory / Supplies               │ • Accrued expenses                   │
│                                      │                                      │
│ Fixed / Long-Term (> 1 yr):          │ Long-Term (> 1 yr):                  │
│ • Computer & Server Hardware         │ • 5-Year Bank Term Loans             │
│ • Buildings & Infrastructure         │ • Mortgages & Bonds Payable          │
│                                      │                                      │
│ Intangibles:                         │                                      │
│ • Software Patents, Trademarks, IP   │                                      │
└──────────────────────────────────────┴──────────────────────────────────────┘
                                  EQUITY
                (Assets − Liabilities = Owner's Residual Value)
    • Founder / Owner Capital Contributions
    • Retained Earnings (Accumulated reinvested profits)
    • Shareholder Stock Capital
```

---

## 4. Income Statement Profit Tiers

$$\begin{aligned}
\text{Revenue} &- \text{Cost of Sales} &&= \mathbf{\text{Gross Profit}} \\
\text{Gross Profit} &- \text{Operating Expenses} &&= \mathbf{\text{Operating Profit (EBIT)}} \\
\text{Operating Profit} &- (\text{Finance Costs} + \text{Taxes}) &&= \mathbf{\text{Net Profit (Bottom Line)}}
\end{aligned}$$

---

## 5. The Three Cash Flow Buckets

1. **Operating Activities ($CFO$):** Core business operations (Customer receipts, employee wages, cloud hosting bills).
2. **Investing Activities ($CFI$):** Long-term asset investments (Buying hardware/servers [$-Outflow$], selling old equipment [$+Inflow$]).
3. **Financing Activities ($CFF$):** Funding structure (Bank loan received [$+Inflow$], loan repayments [$-Outflow$], dividend payouts [$-Outflow$]).

---

## 6. Financial Ratios Cheat-Sheet

| Category | Ratio | Formula | Healthy Benchmark |
| :--- | :--- | :--- | :--- |
| **Profitability** | Gross Profit Margin | $\frac{\text{Gross Profit}}{\text{Revenue}} \times 100$ | Higher is better (e.g., $50\%$) |
| **Profitability** | Net Profit Margin | $\frac{\text{Net Profit}}{\text{Revenue}} \times 100$ | Higher is better (e.g., $10\% - 20\%$) |
| **Liquidity** | Current Ratio | $\frac{\text{Current Assets}}{\text{Current Liabilities}}$ | $\ge 2.0 : 1$ |
| **Gearing / Risk** | Debt-to-Equity | $\frac{\text{Total Debt}}{\text{Shareholders' Equity}}$ | Higher in infrastructure ($> 2.0$) |

---

## 7. Telecom Case Study Takeaways (Dialog Axiata PLC)

- **High Gross Margin ($50\%$):** Highly scalable digital/data service model.
- **Strong Operating Cash ($+49\text{B}$):** Funds heavy CapEx ($-20\text{B}$) and debt repayments ($-10\text{B}$).
- **High Debt-to-Equity ($2.3:1$):** Common in telecom due to massive upfront fiber/tower infrastructure needs; safe because of steady monthly subscriber subscription cash inflows.

---

## ⬆️ [Back to Modern Enterprise Management](../README.md)
