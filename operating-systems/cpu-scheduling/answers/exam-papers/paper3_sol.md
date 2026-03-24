# Solutions to Practice Paper 3 💡

### **1. Standard Calculation**
**Trace:**
- **t=0**: $P_1(8)$ starts.
- **t=1**: $P_2(4)$ arrives. $P_1$ rem=7. $4 < 7 \implies$ **Preempt $P_1$**.
- **t=5**: $P_2$ finishes. Queue: $P_4(5), P_1(7), P_3(9)$. Smallest is $P_4$.
- **t=10**: $P_4$ finishes. Queue: $P_1(7), P_3(9)$. Smallest is $P_1$.
- **t=17**: $P_1$ finishes. $P_3$ starts.
- **t=26**: $P_3$ finishes.

| Process | AT | BT | CT | TAT | WT |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 8 | 17 | 17 | 9 |
| $P_{2}$ | 1 | 4 | 5 | 4 | 0 |
| $P_{3}$ | 2 | 9 | 26 | 24 | 15 |
| $P_{4}$ | 3 | 5 | 10 | 7 | 2 |

---

### **2. The Missing Burst Time**
**How to Solve**:
1. Trace the knowns: $P_1(AT=0, BT=4)$, $P_3(AT=2, BT=1)$. $P_3$ finishes at $t=4$.
2. Between $t=0$ and $t=1$, $P_1$ runs (Remaining: 3).
3. At $t=1$, $P_2$ arrives. If $P_3(BT=1)$ finishes at $t=4$, it must have run from $t=3$ to $t=4$ (since it's the shortest possible job).
4. This means between $t=1$ and $t=3$, $P_2$ was running. 
5. At $t=2$, $P_3(1)$ arrived but didn't preempt $P_2$. This implies $P_2$ remaining time was $\le 1$.
6. Since $P_2$ ran from $t=1$ to $t=3$ (2 ms) and then finished at $t=8$ (running for another 5 ms), its **Total BT = 2 + 5 = 7 ms**.

| Process | AT | BT | CT |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 0 | 4 | 11 |
| $P_{2}$ | 1 | **7** | 8 |
| $P_{3}$ | 2 | 1 | 4 |

---

### **3. Multiple Preemptions**
**Gantt Chart**: `| P1(0-1) | P2(1-2) | P3(2-3) | P2(3-4) | P4(4-7) | P5(7-9) | P1(9-18) |`

| Process | AT | BT | CT | WT |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 10 | 18 | 8 |
| $P_{2}$ | 1 | 2 | 4 | 1 |
| $P_{3}$ | 2 | 1 | 3 | 0 |
| $P_{4}$ | 4 | 3 | 7 | 0 |
| $P_{5}$ | 6 | 2 | 9 | 1 |

---

### **4. Reverse Engineering from Gantt Chart (A)**
**Analysis**:
- $P_1$ runs from 0-1 (1ms) and 4-8 (4ms). **Total $BT_1 = 5$**.
- $P_2$ runs from 1-4. **Total $BT_2 = 3$**.
- $P_1$ waited while $P_2$ was running (from $t=1$ to $t=4$). **$WT_1 = 3$**.
- $P_2$ started immediately at $t=1$. **$WT_2 = 0$**.

| Process | AT | BT | WT |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 0 | 5 | 3 |
| $P_{2}$ | 1 | 3 | 0 |

---

### **5. Reverse Engineering from Gantt Chart (B)**
**Analysis**:
- $P_1$ runs 0-2 (2ms) and 7-12 (5ms). **$BT_1 = 7$**.
- $P_2$ runs 2-6 (4ms). **$BT_2 = 4$**.
- $P_3$ runs 6-7 (1ms). **$BT_3 = 1$**.

| Process | AT | BT | CT | WT |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 7 | 12 | 5 |
| $P_{2}$ | 2 | 4 | 6 | 0 |
| $P_{3}$ | 5 | 1 | 7 | 1 |

---

[Back to Paper](../../papers/paper3.md) | [Back to README](../../README.md)
