# Solutions to Practice Paper 1 💡

### **1. First-Come, First-Served (FCFS)**
**Gantt Chart**: `| P1 (0-7) | P2 (7-10) | P3 (10-15) |`

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 7 | 0 | 7 |
| $P_{2}$ | 3 | 7 | 10 |
| $P_{3}$ | 5 | 10 | 15 |
| **Average** | **-** | **5.67 ms** | **10.67 ms** |

---

### **2. Shortest Job First (Non-Preemptive)**
**How to Solve**: 
1. SJF order for $P_2(2), P_3(4)$ is $P_2 \to P_3$.
2. They take $2 + 4 = 6$ ms.
3. If $P_1$ finishes at $t=14$ and is the last process, its burst is $14 - 6 = 8$ ms.

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | **8** | 6 | 14 |
| $P_{2}$ | 2 | 0 | 2 |
| $P_{3}$ | 4 | 2 | 6 |
| **Average** | **-** | **2.67 ms** | **7.33 ms** |

---

### **3. Priority Scheduling (Non-Preemptive)**
**Order**: $P_2 (Pr=1) \to P_1 (Pr=2) \to P_3 (Pr=3)$

| Process | Burst Time (ms) | Priority | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 10 | 2 | 2 | 12 |
| $P_{2}$ | 2 | 1 | 0 | 2 |
| $P_{3}$ | 1 | 3 | 12 | 13 |
| **Average** | **-** | **-** | **4.67 ms** | **9.00 ms** |

---

### **4. Round Robin (RR)**
**How to Solve**: $q=3$.
1. t0-3: $P_1$ (rem 5)
2. t3-6: $P_2$ (rem 1)
3. t6-8: $P_3$ (0) **Fin**
4. t8-11: $P_1$ (rem 2)
5. t11-12: $P_2$ (0) **Fin**
6. t12-14: $P_1$ (0) **Fin**

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 8 | 6 | 14 |
| $P_{2}$ | 4 | 8 | 12 |
| $P_{3}$ | 2 | 6 | 8 |
| **Average** | **-** | **6.67 ms** | **11.33 ms** |

---

### **5. Preemptive SJF (SRTF)**
**How to Solve**:
- **t=1**: $P_2(2)$ arrivals. $P_1$ rem is 9. $2 < 9$. **Preempt $P_1$**.
- **t=2**: $P_3(1)$ arrives. $P_2$ rem is 1. $1=1$. (Tie-break: continue $P_2$).
- **t=3**: $P_2$ finishes. $P_3$ runs.
- **t=4**: $P_3$ finishes. $P_1$ rem 9 resumes.
- **t=5**: $P_4(5)$ arrives. $P_1$ rem 8. $5 < 8$. **Preempt $P_1$**.
- **t=10**: $P_4$ finishes. $P_1$ resumes.

| Process | Arrival Time (ms) | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 10 | 8 | 18 |
| $P_{2}$ | 1 | 2 | 0 | 2 |
| $P_{3}$ | 2 | 1 | 1 | 2 |
| $P_{4}$ | 5 | 5 | 0 | 5 |

---

[Back to Paper](../../papers/paper1.md) | [Back to README](../../README.md)
