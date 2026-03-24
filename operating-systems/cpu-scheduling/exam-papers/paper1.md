# CPU Scheduling: Practice Paper 1 📝

This paper covers all 5 major scheduling algorithms. Some fields are missing (marked with **?**) to test your understanding of the relationships between Burst Time, Waiting Time, and Turnaround Time.

---

### **1. First-Come, First-Served (FCFS)**
Three processes arrive at $t=0$ in the order $P_1, P_2, P_3$.

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 7 | ? | ? |
| $P_{2}$ | 3 | ? | ? |
| $P_{3}$ | 5 | ? | ? |

---

### **2. Shortest Job First (Non-Preemptive)**
**Challenge**: Work backwards! All processes arrive at $t=0$.
Processes are executed in SJF order. $P_1$ finishes at $t=14$.

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | **?** | ? | 14 |
| $P_{2}$ | 2 | ? | ? |
| $P_{3}$ | 4 | ? | ? |

---

### **3. Priority Scheduling (Non-Preemptive)**
All arrive at $t=0$. Smaller number = Higher Priority.

| Process | Burst Time (ms) | Priority | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 10 | 2 | ? | ? |
| $P_{2}$ | 2 | 1 | ? | ? |
| $P_{3}$ | 1 | 3 | ? | ? |

---

### **4. Round Robin (RR)**
**Time Quantum ($q$) = 3 ms**. All processes arrive at $t=0$.

| Process | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: |
| $P_{1}$ | 8 | ? | ? |
| $P_{2}$ | 4 | ? | ? |
| $P_{3}$ | 2 | ? | ? |

---

### **5. Preemptive SJF (Shortest Remaining Time First)**
**The Trick**: Watch the arrival times carefully!

| Process | Arrival Time (ms) | Burst Time (ms) | Waiting Time (ms) | Turnaround Time (ms) |
| :--- | :---: | :---: | :---: | :---: |
| $P_{1}$ | 0 | 10 | ? | ? |
| $P_{2}$ | 1 | 2 | ? | ? |
| $P_{3}$ | 2 | 1 | ? | ? |
| $P_{4}$ | 5 | 5 | ? | ? |

---

[View Solutions](../../answers/papers/paper1_sol.md) | [Back to README](../../README.md)
