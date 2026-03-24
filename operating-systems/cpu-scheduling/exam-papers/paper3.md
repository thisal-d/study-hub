# CPU Scheduling: Practice Paper 3 (SRTF Masterclass) 🎯

This paper focuses exclusively on **Shortest Remaining Time First (SRTF)**, also known as Preemptive SJF. It includes Completion Time (CT) calculations and reverse-engineering from Gantt Charts.

---

### **1. Standard Calculation**
Determine the Completion Time (CT), Turnaround Time (TAT), and Waiting Time (WT).

| Process | Arrival Time (AT) | Burst Time (BT) | CT | TAT | WT |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 8 | ? | ? | ? |
| $P_{2}$ | 1 | 4 | ? | ? | ? |
| $P_{3}$ | 2 | 9 | ? | ? | ? |
| $P_{4}$ | 3 | 5 | ? | ? | ? |

---

### **2. The Missing Burst Time**
**Challenge**: Work backwards! Find the missing Burst Time for $P_2$ given the Completion Times.

| Process | Arrival Time (AT) | Burst Time (BT) | Completion Time (CT) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 0 | 4 | ? |
| $P_{2}$ | 1 | **?** | 8 |
| $P_{3}$ | 2 | 1 | 3 |

---

### **3. Multiple Preemptions**
A high-intensity scenario with 5 processes. Calculate all timings.

| Process | Arrival Time (AT) | Burst Time (BT) | CT | WT |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 10 | ? | ? |
| $P_{2}$ | 1 | 2 | ? | ? |
| $P_{3}$ | 2 | 1 | ? | ? |
| $P_{4}$ | 4 | 3 | ? | ? |
| $P_{5}$ | 6 | 2 | ? | ? |

---

### **4. Reverse Engineering from Gantt Chart (A)**
Study the Gantt Chart below representing an SRTF schedule. 
**Scenario**: $P_1$ arrived at $t=0$, $P_2$ arrived at $t=1$.
Reconstruct the Arrival Time (AT), Burst Time (BT), and Waiting Time (WT).

**Gantt Chart:**
`| P1 (0-1) | P2 (1-4) | P1 (4-8) |`

| Process | Arrival Time (AT) | Burst Time (BT) | Waiting Time (WT) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 0 | ? | ? |
| $P_{2}$ | 1 | ? | ? |

---

### **5. Reverse Engineering from Gantt Chart (B)**
Study the Gantt Chart below. 
**Scenario**: $P_1$ arrived at $t=0$, $P_2$ arrived at $t=2$, $P_3$ arrived at $t=5$.
Fill the missing parameters.

**Gantt Chart:**
`| P1 (0-2) | P2 (2-6) | P3 (6-7) | P1 (7-12) |`

| Process | Arrival Time (AT) | Burst Time (BT) | CT | WT |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | ? | ? | ? |
| $P_{2}$ | 2 | ? | ? | ? |
| $P_{3}$ | 5 | ? | ? | ? |

---

[View Solutions](../../answers/papers/paper3_sol.md) | [Back to README](../../README.md)
