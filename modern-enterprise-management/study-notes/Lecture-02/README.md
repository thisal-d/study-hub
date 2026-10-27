# Lecture 02: Introduction to Economics

**Module:** IT3120 – Modern Enterprise Management (නූතන ව්‍යවසාය කළමනාකරණය)  
**Main Topic:** Demand and Supply Dynamics, Cost of Production, Market Equilibrium, and Economic Surplus  
**Target Audience:** Computing and Information Technology Undergraduates

---

## 1. Introduction

Why do software engineers and technology professionals need to study **Economics (ආර්ථික විද්‍යාව)**? Every digital product, cloud architecture, and software project operates under the fundamental economic reality of **Scarcity (හිඟකම)**. Computing resources, developer hours, server budgets, and client capital are strictly finite, while human desires for digital features and business transformations are virtually infinite.

### Why This Topic Matters
- Building technically advanced software is futile if the market demand does not support its cost of production.
- Cloud computing costs (AWS, Azure, Google Cloud) follow economic production functions: understanding fixed costs, variable costs, and marginal costs prevents cloud bill blowouts.
- Setting software prices (SaaS subscriptions, freemium tiers) requires an understanding of **Price Elasticity (මිල නම්‍යතාව)**, **Consumer Surplus (පාරිභෝගික අතිරික්තය)**, and the forces of market equilibrium.

### Learning Objectives
After studying these notes, you will be able to:
1. Distinguish between basic human **Needs (අවශ්‍යතා)** and expanded **Wants (උවමනා)**.
2. Define economics from a resource-management perspective and explain the three fundamental economic questions.
3. Formulate the core economic problem using the trio: Finite Resources, Infinite Wants, and **Opportunity Cost (අවස්ථා පිරිවැය)**.
4. Analyze the **Neoclassical Market Model** and trace real and monetary loops through the **Circular Flow Diagram (චක්‍රීය ප්‍රවාහ සටහන)**.
5. Contrast a **Movement Along the Demand Curve (ඉල්ලුම් වක්‍රය දිගේ චලනය වීම)** with a **Shift of the Demand Curve (ඉල්ලුම් වක්‍රයේ විතැන්වීම)**.
6. Determine market equilibrium and explain the self-correcting mechanisms of **Surplus (අතිරික්තය)** and **Shortage (හිඟය)**.
7. Calculate all short-run cost measures: **Fixed Cost (FC)**, **Variable Cost (VC)**, **Average Fixed Cost (AFC)**, **Average Variable Cost (AVC)**, **Average Total Cost (ATC)**, and **Marginal Cost (MC)**.
8. Explain the mathematical and economic reasons why the ATC curve is U-shaped and why the MC curve intersects ATC at its absolute minimum.
9. Quantify **Consumer Surplus**, **Producer Surplus**, and Total Economic Benefit.
10. Explore how Artificial Intelligence (AI) optimizes cost calculations in modern enterprises.

---

## 2. Main Concepts

- **2.1 Needs vs. Wants & The Definition of Economics**
- **2.2 Scarcity and the Fundamental Economic Problem**
- **2.3 The Neoclassical Market and Rational Actor Assumptions**
- **2.4 The Circular Flow of Economic Activity**
- **2.5 The Law of Demand & Demand Shifters**
- **2.6 The Law of Supply & Supply Shifters**
- **2.7 Market Equilibrium, Surpluses, and Shortages**
- **2.8 Price Elasticity of Demand**
- **2.9 Short-Run Costs of Production & Formulas**
- **2.10 The Geometry of Cost Curves & Diminishing Marginal Returns**
- **2.11 Economic Surplus: Consumer, Producer, and Total Welfare**
- **2.12 AI in Cost Modeling and Optimization**

---

## 3. Detailed Explanations

### 3.1 Needs vs. Wants & What Is Economics?

- **Needs (අවශ්‍යතා):** Biological and physical essentials required for human survival (food, clean water, basic shelter, primary healthcare).
- **Wants (උවමනා):** Desires that enhance personal comfort, social status, or quality of life, but are not essential for biological survival (smartphones, gaming consoles, holiday trips).

#### Academic Definition of Economics
> **"Economics is the study of how society manages its scarce resources."**

Breaking down the definition:
- **Society (සමාජය):** Individuals, private enterprises, technology firms, and governmental bodies.
- **Manages (කළමනාකරණය කරයි):** Making calculated trade-offs concerning **production, distribution, and consumption**.
- **Scarce Resources (හිඟ සම්පත්):** Land, developer labor, financial capital, time, and physical computing hardware.

Because resources are limited, every society and every enterprise must answer three foundational questions:
1. **What (කුමක්):** What digital products or services should be created? (e.g., Should we build an AI chatbot or an ERP system?)
2. **How (කෙසේද):** How should they be produced? (e.g., Should we build it using local in-house developers or outsource it offshore?)
3. **For Whom (කා සඳහාද):** Who will consume or receive the final output? (e.g., Enterprise corporations or low-income mobile users?)

---

### 3.2 Scarcity and Opportunity Cost

The entire discipline of economics rests on a triangular dilemma:

```
[ Finite Resources (සීමිත සම්පත්) ] ──┬── [ Infinite Wants (අසීමිත උවමනා) ]
                                     │
                                     ▼
                            [ Scarcity (හිඟකම) ]
                                     │
                                     ▼
                         [ Choices (තේරීම් කිරීම) ]
                                     │
                                     ▼
                      [ Opportunity Cost (අවස්ථා පිරිවැය) ]
```

1. **Finite Resources (සීමිත සම්පත්):** The physical inputs of production cannot be multiplied infinitely overnight.
2. **Infinite Wants (අසීමිත උවමනා):** Human desires have no upper bound. Once an organization deploys a 100 Mbps network, it immediately desires a 1 Gbps network.
3. **Opportunity Cost (අවස්ථා පිරිවැය):** Because resources are scarce, choosing one option forces us to abandon the next best alternative.

---

**Concept: Opportunity Cost (අවස්ථා පිරිවැය)**

**Meaning:** The value, benefits, or profits of the **next-best alternative forgone** when making a decision.

**Simple IT Example:** A software company has a team of 5 senior cloud engineers. The company must choose between two lucrative projects:
- **Project A:** Build a new proprietary Mobile Payment App expected to generate LKR 10,000,000 profit.
- **Project B:** Upgrade their existing enterprise SaaS platform to retain existing corporate clients, expected to protect LKR 8,000,000 profit.

If management selects Project A, the **Opportunity Cost** of building the Mobile Payment App is the **forgone LKR 8,000,000 benefit** that would have been earned from upgrading the existing SaaS platform.

**Why It Matters:** Rational economic decision-makers evaluate not only the accounting cost of an option, but also what potential revenue they give up by not picking the alternative.

---

### 3.3 The Neoclassical Market Model

A **Market (වෙළඳපොළ)** is any physical location (e.g., Pettah wholesale market) or virtual platform (e.g., Amazon, eBay, App Store) where buyers and sellers congregate to exchange goods, services, and money.

The **Neoclassical Economic Model** rests on four foundational assumptions:
1. **Supply and Demand Drive Value (සැපයුම සහ ඉල්ලුම):** The economic value of a digital service stems from its perceived utility (ප්‍රයෝජ්‍යතාව) to the consumer, rather than purely the cost of developer hours used to build it.
2. **Rational Behavior (තාර්කික හැසිරීම):** Buyers seek to maximize personal satisfaction (utility), while sellers seek to maximize financial profit. Both parties act logically and consistently.
3. **Perfect Competition (පූර්ණ තරඟකාරිත්වය):** Countless buyers and sellers trade identical products. No individual player possesses the market power to dictate prices independently.
4. **Market Clearing Equilibrium (වෙළඳපොළ තුල්‍යතාව):** Natural price adjustments automatically balance surpluses and shortages until quantity supplied equals quantity demanded.

---

### 3.4 The Circular Flow Diagram

The circular flow diagram models how households and business firms interact across two distinct market environments:

```
                      [ Product Markets (භාණ්ඩ හා සේවා වෙළඳපොළ) ]
                    ▲                                            │
        Payments for│Goods & Services                            │Finished Goods & Services
                    │                                            ▼
           [ Households (පවුල් ඒකක) ]                    [ Firms (ව්‍යාපාරික ආයතන) ]
                    │                                            ▲
         Land, Labor│& Capital                                   │Wages, Rent, Interest & Profit
                    ▼                                            │
                      [ Factor Markets (නිෂ්පාදන සාධක වෙළඳපොළ) ]
```

- **Factor Markets (නිෂ්පාදන සාධක වෙළඳපොළ):** Households own the factors of production (Land, Labor, Capital, Entrepreneurship) and sell their labor/services to business firms. In return, firms pay households wages, rent, interest, and profits (Money Flow).
- **Product Markets (භාණ්ඩ හා සේවා වෙළඳපොළ):** Firms use those factors to manufacture software, computers, and services, selling them back to households. In return, households make consumer payments to firms (Money Flow).
- **Two Intertwined Loops:**
  1. **Real Flow (යථාර්ථවාදී ප්‍රවාහය):** Flow of labor and resources into firms, and finished products out to households.
  2. **Money Flow (මුදල් ප්‍රවාහය):** Counter-clockwise flow of payments, wages, and income.

---

### 3.5 The Law of Demand & Demand Curves

> **The Law of Demand (ඉල්ලුම් නීතිය):**  
> *Ceteris paribus* (all other factors held constant), as the price of a good **rises**, the quantity demanded **falls**; conversely, as the price **falls**, the quantity demanded **rises**. (Inverse relationship: $P \uparrow \implies Q_d \downarrow$).

- **Demand Curve (ඉල්ලුම් වක්‍රය):** Downward-sloping line plotting price ($P$) on the vertical axis against quantity demanded ($Q$) on the horizontal axis.
- **Reservation Price (වෙන්කළ උපරිම මිල):** The maximum dollar amount a consumer is willing to sacrifice to acquire a specific unit of a good.

#### Critical Distinction: Movement Along vs. Shift of Demand

```
Movement Along the Curve:                     Shift of the Entire Curve:
        Price                                          Price
          │  \                                           │   \     \
       P1 ┼───►•                                         │    \     \
          │     \                                        │     \     \ D2 (Shift Right)
       P2 ┼──────►•                                      │      \
          │        \  D                                  │       \ D1
          └──────────── Quantity                         └──────────── Quantity
       (Caused by OWN PRICE change)                   (Caused by NON-PRICE factors)
```

- **Movement Along the Demand Curve (වක්‍රය දිගේ චලනය වීම):**  
  Occurs **only** when the product's **own price changes**.  
  *Example:* Netflix drops its subscription from $15 to $10; more people subscribe. This is a movement down the existing demand curve (Expansion of Demand).
- **Shift of the Entire Demand Curve (ඉල්ලුම් වක්‍රයේ විතැන්වීම):**  
  Occurs when a **non-price determinant** alters demand at *every single price level*.
  - **Shift Right ($D_1 \to D_2$):** Demand expands due to rising consumer income, positive viral advertising, or a price spike in substitute goods.
  - **Shift Left ($D_1 \to D_0$):** Demand collapses due to economic recession, changing consumer tastes, or cheaper substitutes.

#### Non-Price Determinants of Demand (ඉල්ලුම විතැන් කරන සාධක)
1. **Consumer Incomes (පාරිභෝගික ආදායම):** Higher disposable income enables consumers to buy more software subscriptions.
2. **Prices of Related Goods (සබැඳි භාණ්ඩවල මිල):**
   - **Substitutes (ආදේශක භාණ්ඩ):** Goods used in place of each other (e.g., Coffee vs. Tea; Zoom vs. Google Meet).  
     *Real Example:* When Starbucks raised coffee prices by 10% in 2022, tea demand shifted rightward at every price level.
   - **Complements (අනුපූරක භාණ්ඩ):** Goods used together (e.g., Gaming PC and Video Games; Smartphone and Mobile Apps). If gaming PC prices skyrocket, demand for video games shifts leftward.
3. **Consumer Tastes and Preferences (පාරිභෝගික රුචිකත්වය):** Shift toward remote work increased demand for cloud collaboration software.
4. **Future Expectations (අනාගත අපේක්ෂාවන්):** Expecting future price hikes prompts consumers to purchase now.

---

### 3.6 The Law of Supply & Supply Curves

> **The Law of Supply (සැපයුම් නීතිය):**  
> *Ceteris paribus*, as the market price of a good **rises**, producers increase the quantity supplied ($P \uparrow \implies Q_s \uparrow$). Higher prices offer greater profit margins, attracting more production.

- **Supply Curve (සැපයුම් වක්‍රය):** Upward-sloping curve reflecting the firm’s **Marginal Cost of Production**.
- **Supply Shifters:** Changes in input costs (server rental prices, programmer wages), technological breakthroughs (AI automated coding reducing build costs), changes in seller counts, or government taxation/subsidies.

---

### 3.7 Market Equilibrium: Balancing Supply and Demand

**Market Equilibrium (වෙළඳපොළ තුල්‍යතාව)** occurs at the exact price point where **Quantity Supplied equals Quantity Demanded ($Q_s = Q_d$)**. The market naturally clears with zero unsold waste.

```
       Price
         │        Supply
     P1  ┼─── Surplus ───     (Price falls toward Pe)
         │   \       /
     Pe  ┼────\─────/────     (Equilibrium: Qs = Qd)
         │     \   /
     P2  ┼─── Shortage ──     (Price rises toward Pe)
         │       /   \
         └──────/─────\───── Quantity
                      Demand
```

#### Worked Numerical Example: The Colombo Coffee / IT Café Market

| Price per Cup (LKR) | Quantity Demanded ($Q_d$) | Quantity Supplied ($Q_s$) | Market Condition | Pressure on Price |
|---|---|---|---|---|
| LKR 140 | 200 cups | 600 cups | **Surplus (අතිරික්තය) of 400 cups** | Prices fall downward |
| LKR 120 | 300 cups | 500 cups | **Surplus of 200 cups** | Prices fall downward |
| **LKR 100** | **400 cups** | **400 cups** | **Equilibrium Point (E)** | **Stable Equilibrium Price** |
| LKR 80 | 550 cups | 250 cups | **Shortage (හිඟය) of 300 cups** | Prices pushed upward |
| LKR 60 | 700 cups | 100 cups | **Shortage of 600 cups** | Prices pushed upward |

- **Mechanism of Surplus:** At LKR 140, sellers produce 600 cups but buyers only want 200. Coffee sits unsold. Sellers drop prices to clear inventory, driving price down to LKR 100.
- **Mechanism of Shortage:** At LKR 80, 550 customers demand coffee, but cafés only brew 250 cups. Long queues form. Eager buyers bid up prices, and cafés ramp up production until price reaches LKR 100.

---

### 3.8 Price Elasticity of Demand

**Price Elasticity of Demand (ඉල්ලුමේ මිල නම්‍යතාව)** measures how sensitive consumer demand is to a change in the product’s price.

$$\text{Elasticity } (E_d) = \frac{\% \text{ Change in Quantity Demanded}}{\% \text{ Change in Price}}$$

- **Elastic Demand ($|E_d| > 1$):** Consumers are highly price-sensitive. A small price hike causes demand to drop sharply. Common for luxury items and software with many free alternatives.
- **Inelastic Demand ($|E_d| < 1$):** Consumers are insensitive to price fluctuations. Demand remains steady because the item is essential or lacks substitutes (e.g., life-saving medicine, essential electricity, proprietary enterprise software like SAP).

---

### 3.9 Short-Run Costs of Production & Formulas

**Production Costs (නිෂ්පාදන පිරිවැය)** encompass every direct and indirect expense a business incurs to build a product or deliver an IT service.

#### The Three Core Cost Types
1. **Fixed Costs (FC - ස්ථාවර පිරිවැය):** Costs that remain constant regardless of whether production volume is zero or 1,000,000 units.  
   *Examples:* Office lease, dedicated server hardware depreciation, annual software developer salaries, liability insurance.
2. **Variable Costs (VC - විචල්‍ය පිරිවැය):** Costs that expand directly as output expands, and contract to zero when production stops.  
   *Examples:* Cloud bandwidth consumption fees (AWS data egress), payment processing commissions (Stripe fees), hourly contractor wages.
3. **Marginal Cost (MC - ආන්තික පිරිවැය):** The additional expenditure required to manufacture exactly **one additional unit of output**.

#### Summary of Cost Formulas

| Measure | Formula | Explanation |
|---|---|---|
| **Total Cost (TC)** | $TC = FC + VC$ | Sum of all fixed and variable expenses. |
| **Average Fixed Cost (AFC)** | $AFC = \frac{FC}{Q}$ | Fixed overhead allocated per unit produced. Always declines as $Q$ expands. |
| **Average Variable Cost (AVC)** | $AVC = \frac{VC}{Q}$ | Variable expense incurred per unit produced. |
| **Average Total Cost (ATC)** | $ATC = \frac{TC}{Q} = AFC + AVC$ | Total cost incurred per unit of finished output. |
| **Marginal Cost (MC)** | $MC = \frac{\Delta TC}{\Delta Q}$ | Incremental change in total cost resulting from producing $\Delta Q$ more units. |

---

### 3.10 Worked Master Cost Table: Conrad’s Coffee / Cloud Service

Let us inspect the complete cost table from the lecture slides:

| Output ($Q$) | Total Cost ($TC$) | Fixed Cost ($FC$) | Variable Cost ($VC$) | $AFC = \frac{FC}{Q}$ | $AVC = \frac{VC}{Q}$ | $ATC = \frac{TC}{Q}$ | $MC = \frac{\Delta TC}{\Delta Q}$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **0** | $3.00 | $3.00 | $0.00 | — | — | — | — |
| **1** | $3.30 | $3.00 | $0.30 | $3.00 | $0.30 | $3.30 | $0.30 |
| **2** | $3.80 | $3.00 | $0.80 | $1.50 | $0.40 | $1.90 | $0.50 |
| **3** | $4.50 | $3.00 | $1.50 | $1.00 | $0.50 | $1.50 | $0.70 |
| **4** | $5.40 | $3.00 | $2.40 | $0.75 | $0.60 | $1.35 | $0.90 |
| **5** | $6.50 | $3.00 | $3.50 | $0.60 | $0.70 | **$1.30** | $1.10 |
| **6** | $7.80 | $3.00 | $4.80 | $0.50 | $0.80 | **$1.30** | **$1.30** |
| **7** | $9.30 | $3.00 | $6.30 | $0.43 | $0.90 | $1.33 | $1.50 |
| **8** | $11.00 | $3.00 | $8.00 | $0.38 | $1.00 | $1.38 | $1.70 |
| **9** | $12.90 | $3.00 | $9.90 | $0.33 | $1.10 | $1.43 | $1.90 |
| **10** | $15.00 | $3.00 | $12.00 | $0.30 | $1.20 | $1.50 | $2.10 |

---

### 3.11 The Geometry of Cost Curves & Diminishing Marginal Returns

The short-run cost curve diagrams display three essential geometric properties:

```
    Cost ($)
       │                        MC
       │                       /
       │        \             /   ATC
       │         \   _ _ _   /
       │          \_/     \_/ ◄── Minimum of ATC (MC crosses ATC here)
       │             \   /
       │              \_/ ◄────── AVC
       │               
       │               \  
       │                `--.._ ── AFC (always declines toward zero)
       └───────────────────────────── Output (Quantity)
```

1. **Why does Marginal Cost (MC) rise as output expands?**  
   Due to the **Law of Diminishing Marginal Product (ක්ෂයවන ආන්තික ඵලදායිතා නීතිය)**. When a firm adds variable inputs (e.g., workers) to fixed capital (e.g., a single physical server room or kitchen), each extra worker eventually adds less extra output than the previous worker. Consequently, producing each extra unit becomes increasingly expensive.
2. **Why is the Average Total Cost (ATC) curve U-shaped?**  
   The shape of ATC reflects the battle between AFC and AVC:
   - At low output levels, **AFC drops dramatically** as fixed costs ($3.00) are spread over more units ("spreading the overhead"). This pulls ATC downward.
   - At high output levels, **AVC rises steeply** due to diminishing marginal productivity. This eventually overpowers AFC and pulls ATC upward.
   - The turning point forms the base of the "U"—the **Efficient Scale (කාර්යක්ෂම පරිමාණය)** of the firm.
3. **The Golden Intersection Rule:**  
   > **The Marginal Cost (MC) curve ALWAYS intersects the Average Total Cost (ATC) curve at its absolute minimum point!**
   - When $MC < ATC \implies$ The cost of the next unit is less than the average, so $ATC$ is **falling**.
   - When $MC > ATC \implies$ The cost of the next unit is greater than the average, so $ATC$ is **rising**.
   - At the exact point where $MC = ATC$, $ATC$ is neither rising nor falling; it is at its **minimum** ($Q = 6$, where $ATC = MC = \$1.30$).

---

### 3.12 Economic Surplus: Consumer & Producer Welfare

**Economic Surplus (ආර්ථික අතිරික්තය)** measures the net welfare or economic gains realized by consumers and producers participating in a market.

```
       Price
         │  \
         │   \  Consumer Surplus (CS)
         │    \ [Area above Price, below Demand]
      Pe ┼─────•─────────────────────────── Market Price
         │    / [Area below Price, above Supply]
         │   /  Producer Surplus (PS)
         │  /
         └────────────────────────────────── Quantity
```

#### Formulas
- **Consumer Surplus (පාරිභෝගික අතිරික්තය):**  
  $$\text{Consumer Surplus} = \text{Willingness to Pay (Reservation Price)} - \text{Actual Price Paid}$$
- **Producer Surplus (නිෂ්පාදක අතිරික්තය):**  
  $$\text{Producer Surplus} = \text{Actual Price Received} - \text{Minimum Cost of Production}$$
- **Total Economic Benefit (සමස්ත ආර්ථික සුභසාධනය):**  
  $$\text{Total Benefit} = \text{Consumer Surplus} + \text{Producer Surplus}$$

#### Worked Numerical Example
- A university student is willing to pay **$50** for a student license of an IDE software suite. The software vendor sells it at a discounted market price of **$30**.  
  $$\text{Consumer Surplus} = \$50 - \$30 = \mathbf{\$20}$$
- The software company incurs a cloud hosting and licensing delivery cost of **$20** per student copy, selling it for **$30**.  
  $$\text{Producer Surplus} = \$30 - \$20 = \mathbf{\$10}$$
- **Total Economic Benefit generated for society:**  
  $$\text{Total Benefit} = \$20 + \$10 = \mathbf{\$30}$$

---

### 3.13 The Role of AI in Enterprise Cost Calculations

Modern tech firms utilize Machine Learning (ML) and Artificial Intelligence to automate and optimize cost accounting:
- **Total Cost Prediction:** AI engines ingest infrastructure logs, staff hours, and supplier prices to project end-to-end software release costs.
- **Fixed Cost Allocation:** Machine learning models analyze project utilization to allocate corporate overhead (datacenter leases, executive salaries) across microservices.
- **Variable Cost Auto-Scaling:** Systems like AWS Cost Optimizer forecast cloud compute spikes and dynamically adjust container resources to keep variable costs minimal.
- **Real-Time Marginal Cost Tracking:** AI calculates the exact marginal cost of adding 1,000 extra concurrent users to a streaming app, assisting managers in setting optimal tier pricing.

---

## 4. Comparison Tables

### 4.1 Shift of Demand vs. Movement Along Demand

| Feature | Movement Along Demand Curve | Shift of Demand Curve |
|---|---|---|
| **Trigger Factor** | Change in the good's **own price only** | Change in **non-price determinants** (Income, Tastes, Substitute Prices) |
| **Graphic Effect** | Moves to a different $(P, Q)$ coordinate on the identical line | The entire demand line migrates leftward or rightward |
| **Terminology** | Expansion or Contraction of Quantity Demanded | Increase or Decrease in Demand |
| **IT Example** | Apple cuts iPad prices by 20%, causing iPad unit sales to rise | Rising popularity of remote software engineering causes demand for iPads to jump at all price points |

### 4.2 Elastic Demand vs. Inelastic Demand

| Attribute | Elastic Demand ($|E_d| > 1$) | Inelastic Demand ($|E_d| < 1$) |
|---|---|---|
| **Consumer Price Sensitivity** | Very high sensitivity | Very low sensitivity |
| **Substitutes Availability** | Abundant substitute alternatives available | Few or no practical alternatives |
| **Necessity Level** | Luxury items or non-essential tools | Critical necessities or proprietary software |
| **Impact of Price Increase** | Total revenue drops (customers abandon product) | Total revenue rises (customers forced to pay) |
| **Example** | Mobile casual gaming subscription | Mission-critical ERP platform holding all corporate data |

---

## 5. Processes and Workflows

### 5.1 Market Price Restoration Process (Handling a Shortage)

```
1. Market Imbalance Occurs
   └─► Current market price ($P_2 = \text{LKR } 80$) is set below equilibrium.
         │
         ▼
2. Quantity Divergence
   └─► Demand expands to 550 units; Producers supply only 250 units.
         │
         ▼
3. Shortage Manifests
   └─► Deficit of 300 units causes buyer stockouts and long waitlists.
         │
         ▼
4. Price Bidding Mechanism
   └─► Unsatisfied buyers offer higher payments; Sellers recognize strong demand.
         │
         ▼
5. Output Expansion & Demand Dampening
   └─► Rising prices incentivize suppliers to allocate more resources, while curbing excess demand.
         │
         ▼
6. Stable Equilibrium Achieved
   └─► Price settles at $P_e = \text{LKR } 100$ where $Q_s = Q_d = 400$ units.
```

---

## 6. Formulas and Calculations Reference Sheet

```
1. Total Cost:
   TC = FC + VC

2. Average Fixed Cost:
   AFC = FC / Q

3. Average Variable Cost:
   AVC = VC / Q

4. Average Total Cost:
   ATC = TC / Q  =  AFC + AVC

5. Marginal Cost:
   MC = ΔTC / ΔQ  =  (TC₂ - TC₁) / (Q₂ - Q₁)

6. Consumer Surplus:
   CS = Maximum Willingness to Pay - Actual Price Paid

7. Producer Surplus:
   PS = Actual Price Received - Minimum Production Cost

8. Total Economic Surplus:
   Total Surplus = CS + PS
```

---

## 7. Advantages and Limitations of the Neoclassical Market Model

| Dimension | Key Strengths / Insights (වාසි) | Real-World Limitations (සීමාවන්) |
|---|---|---|
| **Neoclassical Market Theory** | • Provides an elegant mathematical model to forecast how prices and quantities adjust.<br>• Clearly demonstrates how competitive forces maximize social welfare and reduce waste. | • **Assumes Perfect Information:** Real software consumers rarely know all competing alternatives.<br>• **Assumes Pure Rationality:** Real humans act on impulse, brand loyalties, and cognitive biases.<br>• **Ignores Monopolies:** Big tech monopolies (e.g., operating systems) dictate prices without perfect competition. |

---

## 8. Important Exam Points

> [!IMPORTANT]
> Watch out for these common examination questions and pitfalls:
> 1. **Opportunity Cost:** Always identify the **next-best alternative that was given up**, not every discarded option.
> 2. **Movement vs. Shift:** If the prompt mentions a change in the product's *own price*, it is a **movement along** the curve. If it mentions *income, tastes, or competitor prices*, it is a **shift**.
> 3. **The Minimum Point of ATC:** The MC curve **always** passes through the lowest point of the ATC curve.
> 4. **Fixed Cost Property:** As output $Q$ increases, total $FC$ stays constant, but **Average Fixed Cost ($AFC$) continuously drops toward zero**.
> 5. **Surplus and Shortage:** Surplus means $Q_s > Q_d$ (drives prices down); Shortage means $Q_d > Q_s$ (drives prices up).

---

## 9. Quick Revision Summary

- **Economics:** Managing scarce resources to fulfill infinite societal wants; deciding what, how, and for whom to produce.
- **Scarcity:** Limited inputs force economic actors to make trade-offs, incurring opportunity cost.
- **Circular Flow:** Real flows (goods and labor) move in opposite direction to monetary flows (consumer payments and wages) across product and factor markets.
- **Demand:** Inversely related to price. Shifts right for income gains, substitute price spikes, or favorable taste shifts.
- **Supply:** Positively related to price. Driven by marginal costs.
- **Equilibrium:** Market clearing price where $Q_s = Q_d$.
- **Cost Metrics:** $TC = FC + VC$; $ATC = TC/Q$; $MC = \Delta TC/\Delta Q$.
- **U-Shaped ATC:** Driven by falling $AFC$ initially, followed by rising $AVC$ caused by diminishing marginal productivity.

---

## 10. Practice Questions & Answers

### Multiple-Choice Questions (MCQs)

**Q1:** A software engineering firm invests LKR 2,000,000 in developing an automated testing platform instead of upgrading its cloud cybersecurity firewall. What is the opportunity cost of this decision?  
A. The LKR 2,000,000 development expense  
B. The protection and reduced risk that the upgraded cybersecurity firewall would have provided  
C. The future sales revenue of the automated testing platform  
D. The salary of the testing engineers  
*Answer:* **B**  
*Explanation:* Opportunity cost is the lost benefit of the next-best alternative forgone—in this case, the improved protection of the firewall.

**Q2:** If the price of cloud database hosting drops significantly, what will happen to the market for web development services that rely on cloud databases?  
A. The supply curve for web development services will shift rightward  
B. The demand curve for web development services will shift leftward  
C. The supply curve for web development services will shift leftward  
D. There will be a movement upward along the supply curve  
*Answer:* **A**  
*Explanation:* Cloud databases are a key input. Lower input costs make producing web development services cheaper and more profitable, shifting the market supply curve to the right.

**Q3:** When a firm produces 5 units of output, its Total Cost is $65. When it produces 6 units of output, its Total Cost rises to $78. What is the Marginal Cost of the 6th unit?  
A. $11.00  
B. $13.00  
C. $14.30  
D. $78.00  
*Answer:* **B**  
*Explanation:* $MC = \frac{\Delta TC}{\Delta Q} = \frac{78 - 65}{6 - 5} = \frac{13}{1} = \$13.00$.

---

### Short-Answer & Scenario-Based Questions

**Q4 (Explain-the-Difference):** Why does the Average Fixed Cost (AFC) continually decrease as software production increases, whereas Average Variable Cost (AVC) eventually increases?  
*Model Answer:*  
Average Fixed Cost ($AFC = \frac{FC}{Q}$) constantly declines because a fixed sum of money (such as server leases or development tool licenses) is divided across an increasingly large volume of units, diluting the per-unit cost toward zero. Conversely, Average Variable Cost ($AVC = \frac{VC}{Q}$) eventually rises due to the **Law of Diminishing Marginal Product**; adding variable inputs to fixed facilities causes congestion and bottlenecks, making each additional unit more expensive to build.

**Q5 (Worked Numerical Problem):**  
A technology startup sells an automated code security auditing tool.
- Fixed development and office cost = $1,200.
- When producing 100 client licenses, total variable cost = $800.
- When producing 101 client licenses, total cost rises to $2,025.
Calculate:
1. Average Fixed Cost (AFC) at 100 units.
2. Average Total Cost (ATC) at 100 units.
3. Marginal Cost (MC) of the 101st license.  
*Model Answer:*  
1. $AFC = \frac{FC}{Q} = \frac{\$1,200}{100} = \mathbf{\$12.00 \text{ per license}}$.  
2. At 100 units, $TC = FC + VC = \$1,200 + \$800 = \$2,000$.  
   $ATC = \frac{TC}{Q} = \frac{\$2,000}{100} = \mathbf{\$20.00 \text{ per license}}$.  
3. $MC = \frac{\Delta TC}{\Delta Q} = \frac{\$2,025 - \$2,000}{101 - 100} = \frac{\$25}{1} = \mathbf{\$25.00}$.
