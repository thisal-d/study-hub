# Solutions to Practice Paper 2 💡

### **1. First-Come, First-Served (FCFS)**
**How to Solve**:
1. $WT_1 = 0$.
2. $WT_2 = BT_1 = 4$.
3. $WT_3 = BT_1 + BT_2 = 4 + BT_2$.
4. Avg WT = $\frac{0 + 4 + (4 + BT_2)}{3} = 4.0$
5. $8 + BT_2 = 12 \implies BT_2 = 4$.

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 4 | 0 | 4 |
| $P_{2}$ | **4** | 4 | 8 |
| $P_{3}$ | 6 | 8 | 14 |
| **Average** | **-** | **4.00 ms** | **8.67 ms** |

---

### **2. Shortest Job First (Non-Preemptive)**
**How to Solve**:
1. All processes arrive at $t=0$, so the CPU simply picks the process with the shortest burst time.
2. Order of execution: $P_2 (1) \to P_4 (2) \to P_3 (4) \to P_1 (9)$.
3. Waiting Time is the sum of the burst times of all preceding processes.

**Gantt Chart**:
`| P2 (0-1) | P4 (1-3) | P3 (3-7) | P1 (7-16) |`

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 9 | 7 | 16 |
| $P_{2}$ | 1 | 0 | 1 |
| $P_{3}$ | 4 | 3 | 7 |
| $P_{4}$ | 2 | 1 | 3 |
| **Average** | **-** | **2.75 ms** | **6.75 ms** |


---

### **3. Priority Scheduling (Non-Preemptive)**
**How to Solve**:
1. $P_1$ is highest priority ($Pr=1$), so it runs first ($WT_1=0$).
2. $P_3$ wait time is 12ms. This means $P_1(5 \text{ ms}) + P_2(\text{Burst}_2) = 12 \text{ ms}$.
3. $\text{Burst}_2 = 12 - 5 = 7$ ms.
4. For $P_2$ to run before $P_3$ but after $P_1$, its priority must be 2.

| Process | Burst Time (ms) | Priority | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 5 | 1 | 0 | 5 |
| $P_{2}$ | **7** | **2** | 5 | 12 |
| $P_{3}$ | 7 | 3 | 12 | 19 |

---

### **4. Round Robin (RR)**
**How to Solve**: $q=4$.
1. t0-4: $P_1$ (rem 10)
2. t4-8: $P_2$ (rem 1)
3. t8-12: $P_1$ (rem 6)
4. t12-13: $P_2$ (0) **Fin**
5. t13-17: $P_1$ (rem 2)
6. t17-19: $P_1$ (0) **Fin**

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 14 | 5 | 19 |
| $P_{2}$ | 5 | 8 | 13 |

---

### **5. Preemptive SJF (SRTF)**
**How to Solve**:
- **t=2**: $P_2(2)$ arrives. $P_1$ rem is 10. $2 < 10$. **Preempt $P_1$**.
- **t=4**: $P_2$ Fin. $P_1$ rem 10 resumes.
- **t=10**: $P_3(1)$ arrives. $P_1$ has run for 6ms since $t=4$, so rem is $10-6=4$. $1 < 4$. **Preempt $P_1$**.
- **t=11**: $P_3$ Fin. $P_1$ resumes.

| Process | Arrival Time (ms) | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 12 | 3 | 15 |
| $P_{2}$ | 2 | 2 | 0 | 2 |
| $P_{3}$ | 10 | 1 | 0 | 1 |

---

[Back to Paper](../../papers/paper2.md) | [Back to README](../../README.md)
