# LECTURE 9 — Introduction to Deadlock

---

## 1. Key Terms

| Term | Definition | Key Point |
|------|-----------|-----------|
| **Deadlock** | Set of processes blocked forever, each waiting for a resource held by another | None can proceed |
| **Preemptible Resource** | Can be taken from a process with no ill effect (e.g., memory) | Not deadlock-prone |
| **Non-preemptible Resource** | Cannot be taken away (e.g., printer, mutex lock) | **Deadlock-prone** |
| **Safe State** | There exists a safe sequence where all processes can finish | System won't deadlock |
| **Unsafe State** | No safe sequence exists — deadlock may occur | Not guaranteed deadlock |
| **Safe Sequence** | Order ⟨P1,P2,...,Pn⟩ where each Pi can get resources from available + resources held by Pj (j<i) | Banker's algorithm output |

---

## 2. Four Necessary Conditions for Deadlock (★ EXAM CRITICAL ★)

| # | Condition | Description | Prevention Strategy |
|---|-----------|-------------|---------------------|
| 1 | **Mutual Exclusion** | Resource held by only one process | Make resources sharable (not always possible) |
| 2 | **Hold and Wait** | Process holds ≥1 resource while waiting for more | Acquire all resources at start OR release all before requesting more |
| 3 | **No Preemption** | Resource released only voluntarily when done | Force preemption — roll back process |
| 4 | **Circular Wait** | P0 waits for P1, P1 waits for P2, ..., Pn waits for P0 | Order resources numerically; request in order |

> **All four must hold simultaneously for deadlock to occur.**

---

## 3. Resource Allocation Graph (RAG)

| Symbol | Meaning |
|--------|---------|
| Circle (○) | Process |
| Rectangle (□) | Resource type (dots inside = instances) |
| Arrow Pi → Rj | **Request edge**: Pi is requesting resource Rj |
| Arrow Rj → Pi | **Assignment edge**: Rj is allocated to Pi |
| Dashed Pi → Rj | **Claim edge** (Banker's): Pi may request Rj in future |

**RAG Rules:**
- **No cycle** → No deadlock
- **Cycle + single instance per resource** → **Deadlock** ✓
- **Cycle + multiple instances** → Deadlock **possible but not certain** (check if any process can release)

---

## 4. Three Methods for Handling Deadlock

| Method | Approach | Used By |
|--------|---------|---------|
| **Prevention/Avoidance** | Ensure system never enters deadlock state | Research/theory |
| **Detection + Recovery** | Allow deadlock, detect and recover | Some RDBMS |
| **Ignore (Ostrich Algorithm)** | Pretend deadlock never occurs | **Most OS (UNIX, Windows)** |

---

## 5. Deadlock Prevention (Deny One of the 4 Conditions)

| Condition Denied | Method |
|-----------------|--------|
| Deny Mutual Exclusion | Share resources (not always feasible) |
| **Deny Hold & Wait** | ①Get all resources before start, OR ②Release all before requesting more |
| Deny No-Preemption | Force resource release; roll back |
| **Deny Circular Wait** | Order resources numerically (F-values); always request in increasing order |

---

## 6. Deadlock Avoidance: Banker's Algorithm (★ EXAM CRITICAL ★)

**Data Structures:**
- `Available[j]` — number of free instances of resource j
- `Max[i][j]` — max demand of process i for resource j
- `Allocation[i][j]` — currently allocated to process i
- `Need[i][j] = Max[i][j] - Allocation[i][j]` — remaining need

**Safety Algorithm:**
1. Work = Available; Finish[i] = false for all i
2. Find i where Finish[i]=false AND Need[i] ≤ Work
3. Work = Work + Allocation[i]; Finish[i] = true
4. Repeat until all Finish[i]=true → **SAFE** | or no such i found → **UNSAFE**

**Resource Request Algorithm:**
1. If Request[i] > Need[i] → Error
2. If Request[i] > Available → Wait
3. Pretend to allocate: Available -= Request[i]; Allocation[i] += Request[i]; Need[i] -= Request[i]
4. Run Safety Algorithm → if SAFE, grant; if UNSAFE, rollback and wait

---

## 7. Banker's Algorithm — Worked Example (from lecture)

**5 processes (P0–P4), 3 resources A(10), B(5), C(7)**

| Process | Alloc (A,B,C) | Max (A,B,C) | Need (A,B,C) |
|---------|---------------|-------------|--------------|
| P0 | 0,1,0 | 7,5,3 | **7,4,3** |
| P1 | 2,0,0 | 3,2,2 | **1,2,2** |
| P2 | 3,0,2 | 9,0,2 | **6,0,0** |
| P3 | 2,1,1 | 2,2,2 | **0,1,1** |
| P4 | 0,0,2 | 4,3,3 | **4,3,1** |

Available = (3,3,2) → Safe Sequence: **⟨P1, P3, P4, P2, P0⟩** ✓

---

## 8. Deadlock Detection

| Resource Type | Method |
|--------------|--------|
| Single instance per type | **Wait-for graph** (remove resource nodes from RAG); cycle = deadlock |
| Multiple instances per type | Similar to Banker's algorithm; run detection algorithm periodically |

---

## 9. Deadlock Recovery

| Recovery Method | How | Issue |
|----------------|-----|-------|
| **Terminate all deadlocked processes** | Kill all | Expensive; work lost |
| **Terminate one at a time** | Kill until cycle broken | Overhead of detection each time |
| **Preempt resources** | Take resources from victim, roll back | Choose victim by: priority, time used, resources held, # of rollbacks |
| **Rollback to checkpoint** | Restart process from safe state | Need checkpointing support |

**Starvation risk:** Same process always chosen as victim → include rollback count in cost.

---

## Lecture 9 — Exam Checklist

- [ ] List 4 necessary conditions for deadlock (ME, H&W, No-Preemption, Circular Wait)
- [ ] Draw/interpret Resource Allocation Graph
- [ ] Know when cycle = deadlock (single instance) vs. possible deadlock (multiple instances)
- [ ] List 3 handling methods (prevention, detection/recovery, ostrich)
- [ ] 2 solutions to deny Hold & Wait condition
- [ ] Calculate Need matrix: Need = Max − Allocation
- [ ] Apply Banker's safety algorithm to find safe sequence
- [ ] Apply Banker's resource request algorithm
- [ ] Modern general-purpose OS → **Ostrich Algorithm (ignore deadlock)**
