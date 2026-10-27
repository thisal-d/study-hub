# ⚡ Lecture 10: Scope & Cost Management — Short Note

> **🎯 In 15 Seconds:** Scope Management defines and controls what is and is not included in the project deliverables, while Cost Management estimates, budgets, and monitors project expenditures to complete work within approved financial constraints.

---

### 📊 1. Project Scope vs. Product Scope

| Dimension | Product Scope (නිෂ්පාදන විෂයපථය) | Project Scope (ව්‍යාපෘති විෂයපථය) |
| :--- | :--- | :--- |
| **Focus** | Features and functions of the deliverable. | All the work required to deliver that product. |
| **Evaluation** | Measured against product requirements. | Measured against the project management plan. |
| **Example** | 2FA login, checkout button, dark mode UI. | Sprint planning, QA testing, server deployment, training. |

---

### 📊 2. Scope Baseline & The WBS 100% Rule

- **The Scope Baseline consists of:**
  1. Approved **Project Scope Statement**
  2. **Work Breakdown Structure (WBS - කාර්ය විභේදක ව්‍යුහය)**
  3. **WBS Dictionary** (detailed descriptions of every work package)
- **The WBS 100% Rule:** The total work at child levels must equal exactly $100\%$ of the parent deliverable—nothing more, nothing less.
- **Validate Scope vs. Control Quality:**
  - **Control Quality (Internal):** QC testers verify correctness against technical standards.
  - **Validate Scope (External):** Customer/sponsor formally accepts completed deliverables.

---

### 📊 3. Earned Value Management (EVM) Core Formulas Reference

| Metric | Formula | Interpretation Benchmark |
| :--- | :--- | :--- |
| **Cost Variance (CV)** | $EV - AC$ | Positive = Under budget; Negative = Over budget |
| **Schedule Variance (SV)** | $EV - PV$ | Positive = Ahead of schedule; Negative = Behind schedule |
| **Cost Performance Index (CPI)** | $\frac{EV}{AC}$ | $> 1.0 =$ Cost efficient; $< 1.0 =$ Cost overrun |
| **Schedule Performance Index (SPI)** | $\frac{EV}{PV}$ | $> 1.0 =$ Ahead of schedule; $< 1.0 =$ Schedule delay |
| **Estimate at Completion (EAC)** | $\frac{BAC}{CPI}$ | Forecasted final total cost based on current efficiency |

---

### 📊 4. Contingency Reserve vs. Management Reserve

| Reserve Type | Intended Purpose | Controlled By | Part of Cost Baseline? |
| :--- | :--- | :--- | :--- |
| **Contingency Reserve** | Covers **"Known-Unknowns"** (identified risks in Risk Register). | Project Manager | **YES** |
| **Management Reserve** | Covers **"Unknown-Unknowns"** (unforeseen catastrophic events). | Senior Management | **NO** (Added to Cost Baseline to get Project Budget) |

$$\textbf{Cost Baseline} = \text{Work Package Estimates} + \text{Contingency Reserves}$$
$$\textbf{Total Project Budget} = \text{Cost Baseline} + \text{Management Reserve}$$

---

### 📚 5. Jargon Buster

| Difficult Term | Plain English Meaning | Sinhala Term |
| :--- | :--- | :--- |
| **Scope Creep** | Uncontrolled expansion of project scope without adjustments to time, cost, and resources. | විෂයපථය අනවශ්‍ය ලෙස ප්‍රසාරණය වීම |
| **Work Package** | The lowest decomposed level of a WBS that can be scheduled, cost-estimated, and monitored. | කාර්ය පැකේජය |
| **Planned Value (PV)** | The authorized budget assigned to scheduled work. | සැලසුම් කළ අගය |
| **Earned Value (EV)** | The measure of work actually performed expressed in terms of authorized budget. | උපයාගත් අගය |
| **Actual Cost (AC)** | The realized cost incurred for the work performed on an activity during a specific timeframe. | සත්‍ය පිරිවැය |

---

### ⚠️ Common Exam Traps

> [!CAUTION]
> 1. **CPI and SPI interpretations:** Remember that $> 1.0$ is **good** (efficient/ahead), and $< 1.0$ is **bad** (over budget/delayed).
> 2. **Gold Plating is NOT good quality:** Adding extra free features not requested by the client is called "Gold Plating" and is strictly prohibited in project management.

---

### 🎯 Active Recall Self-Test

<details>
<summary><b>1. A project has $PV = \$100,000$, $EV = \$90,000$, and $AC = \$120,000$. Calculate CV and CPI.</b></summary>

$$CV = EV - AC = 90,000 - 120,000 = -\mathbf{\$30,000} \quad (\text{Over budget})$$
$$CPI = \frac{EV}{AC} = \frac{90,000}{120,000} = \mathbf{0.75} \quad (\text{Only 75 cents of value delivered per dollar spent})$$
</details>

<details>
<summary><b>2. Who controls the Contingency Reserve, and what does it cover?</b></summary>

Controlled directly by the **Project Manager** to address **"Known-Unknowns"** (identified risks documented in the Risk Register).
</details>
