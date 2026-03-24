# CPU Scheduling: Practice Paper 2 🚀

Level: **Advanced**. Prepare to reverse-engineer these scheduling scenarios.

---

### **1. First-Come, First-Served (FCFS)**
**Challenge**: Average Waiting Time is 4.0 ms. Order is $P_1, P_2, P_3$ (all at $t=0$).

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 4 | ? | ? |
| $P_{2}$ | **?** | ? | ? |
| $P_{3}$ | 6 | ? | ? |

---

### **2. Shortest Job First (Non-Preemptive)**
All arrive at $t=0$.

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 9 | ? | ? |
| $P_{2}$ | 1 | ? | ? |
| $P_{3}$ | 4 | ? | ? |
| $P_{4}$ | 2 | ? | ? |

---

### **3. Priority Scheduling (Non-Preemptive)**
**Challenge**: All at $t=0$. Lower number = Higher Priority.
Wait time for $P_3$ is 5ms. If $P_1$ is highest priority, find the missing Priority.

| Process | Burst Time (ms) | Priority | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 5 | 1 | ? | ? |
| $P_{2}$ | 7 | **?** | ? | ? |
| $P_{3}$ | 7 | 3 | 12 | ? |

---

### **4. Round Robin (RR)**
**Time Quantum ($q$) = 4 ms**. All at $t=0$.

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 14 | ? | ? |
| $P_{2}$ | 5 | ? | ? |

---

### **5. Preemptive SJF (SRTF)**
**The Late Arrival**: $P_3$ arrives just as the others are finishing.

| Process | Arrival Time (ms) | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 12 | ? | ? |
| $P_{2}$ | 2 | 2 | ? | ? |
| $P_{3}$ | 10 | 1 | ? | ? |

---

[View Solutions](../../answers/papers/paper2_sol.md) | [Back to README](../../README.md)
