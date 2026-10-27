# ⚡ Lecture 11: Procurement, Resource & Schedule Management — Short Note

> **🎯 In 15 Seconds:** This triple discipline handles purchasing external vendor services, optimizing human and physical developer resources, and calculating the Critical Path to ensure timely delivery of software systems.

---

### 📊 1. Make-or-Buy Analysis & Procurement Documents

- **Make-or-Buy Decision:** Compares internal development cost vs. external vendor acquisition cost.
- **Key Procurement Documents:**
  - **RFP (Request for Proposal):** Used when requirements are complex and you want vendors to propose solutions.
  - **RFQ (Request for Quotation):** Used for standard commodities where price is the primary decision factor.
  - **SOW (Statement of Work):** Narrative description of products, services, or results to be supplied by the vendor.

---

### 📊 2. The 4 Precedence Relationships in Scheduling

| Relationship | Meaning | Everyday Software Development Example |
| :--- | :--- | :--- |
| **Finish-to-Start (FS)** | Activity B cannot start until Activity A finishes. *(Most common)* | System Testing cannot start until Coding finishes. |
| **Start-to-Start (SS)** | Activity B cannot start until Activity A starts. | Writing Documentation can start as soon as Coding starts. |
| **Finish-to-Finish (FF)**| Activity B cannot finish until Activity A finishes. | User Acceptance Testing cannot finish until Bug Fixing finishes. |
| **Start-to-Finish (SF)**| Activity B cannot finish until Activity A starts. *(Rare)* | Old Legacy Server cannot shut down until New Cloud Server boots up. |

---

### 📊 3. Three-Point Estimating (PERT) & Critical Path Method (CPM)

#### PERT Weighted Average Formula
$$\mathbf{T_e} = \frac{O + 4M + P}{6} \qquad \boldsymbol{\sigma} = \frac{P - O}{6}$$
*(Where $O = \text{Optimistic}$, $M = \text{Most Likely}$, $P = \text{Pessimistic}$ duration)*

#### Critical Path Method (CPM) Core Principles
- **Critical Path (අර්බුදකාරී මාර්ගය):** The longest continuous sequence of activities from start to finish that dictates the **shortest possible total project duration**.
- **Float / Slack (ලිහිල් කාලය):** The amount of time an activity can be delayed without delaying the project finish date.
  $$\textbf{Total Float} = LS - ES = LF - EF$$
- **Critical Activities Rule:** All activities on the Critical Path have **Zero Float ($\text{Slack} = 0$)**! Any delay on a critical activity causes an immediate, equal delay to the entire project.

---

### 📚 4. Jargon Buster

| Difficult Term | Plain English Meaning | Sinhala Term |
| :--- | :--- | :--- |
| **Forward Pass** | Calculating Early Start (ES) and Early Finish (EF) by moving from start to end. | ඉදිරි ගමන |
| **Backward Pass** | Calculating Late Start (LS) and Late Finish (LF) by moving from end to start. | පසුපස ගමන |
| **Fast Tracking** | Doing activities in parallel that were originally planned in sequence (adds risk). | කටයුතු සමාන්තරව ධාවනය කිරීම |
| **Crashing** | Adding extra resources to critical activities to compress schedule (adds cost). | සම්පත් යොදවා කාලය කෙටි කිරීම |

---

### ⚠️ Common Exam Traps

> [!CAUTION]
> 1. **Critical Path is the LONGEST path, but represents the SHORTEST project time:** The path with the maximum duration represents the minimum time required to complete all dependencies.
> 2. **Float formula calculation:** Remember that Total Float is $LS - ES$ (or $LF - EF$). Never mix Late Start with Early Finish!

---

### 🎯 Active Recall Self-Test

<details>
<summary><b>1. If an activity has $O = 4$ days, $M = 7$ days, and $P = 16$ days, calculate its PERT duration ($T_e$).</b></summary>

$$T_e = \frac{4 + 4(7) + 16}{6} = \frac{4 + 28 + 16}{6} = \frac{48}{6} = \mathbf{8\ \text{days}}.$$
</details>

<details>
<summary><b>2. What is the Total Float of an activity on the Critical Path?</b></summary>

**Zero ($\text{Float} = 0$)**. Any delay to this activity will immediately delay the entire project completion date.
</details>
