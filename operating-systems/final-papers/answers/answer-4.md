
<div style='text-align: center;'>

# IT2130 Operating Systems and System Administration Year 2, Semester 2

# Final Examination — Answer Sheet (Paper 4)

</div>

---

## Question 1

**a.**

**i. Critical Section** — A segment of code where a process accesses shared resources (e.g., shared variables, files). Only one process may execute in its critical section at a time to prevent data inconsistency.

**ii. Busy Waiting** — A synchronization technique where a process repeatedly checks a condition in a loop (spins) without relinquishing the CPU, waiting until the condition is true (e.g., a lock becomes free). Also called a spinlock. It wastes CPU cycles but avoids context-switch overhead for very short waits.

---

**b. Three requirements for a critical section solution:**

1. **Mutual Exclusion** — Only one process executes in its critical section at a time.
2. **Progress** — If no process is in its critical section, the selection of which process enters next cannot be postponed indefinitely.
3. **Bounded Waiting** — A bound must exist on how many times other processes can enter their critical sections before a waiting process is granted entry.

---

**c. Two atomic hardware instructions:**

1. Test-and-Set (`TestAndSet`)
2. Swap (`Swap` / Compare-and-Swap)

---

**d.**

**i. Critical Section of the grade management system:**

The critical section is the code that reads and writes to the shared `GradeRecordLog` file:

```
read student grade record from GradeRecordLog    ← start of CS
modify grade marks
write updated record to GradeRecordLog           ← end of CS
```

If two faculties update the same student's record simultaneously, one update may overwrite the other — a classic race condition.

**ii. Solution using a Semaphore:**

```
Semaphore mutex = 1;     // binary semaphore

Faculty_Process:
    // Entry Section
    wait(mutex);

    // Critical Section
    record = gradeDB.read(studentID);
    record.marks = new_marks;
    gradeDB.write(studentID, record);   // update GradeRecordLog

    // Exit Section
    signal(mutex);

    // Remainder Section
    ... (notify student portal, etc.)
```

Only one faculty system can update the grade database at a time.

---

## Question 2

**a.**

**i. Paging** — A memory management scheme that eliminates external fragmentation by dividing physical memory into fixed-sized blocks called **frames** and the logical memory of a process into same-sized blocks called **pages**. Pages of a process are loaded into any available frames (not necessarily contiguous). A page table maps each page to its frame.

**ii. Internal Fragmentation** — Wasted memory within an allocated partition. In paging, if a process's last page does not fill a complete frame, the remaining space in that frame is wasted. For example, if page size = 2KB and a process needs 5KB, it occupies 3 pages (6KB allocated), wasting 1KB of the last frame.

---

**b.**

Free segments: A=100KB, B=300KB, C=450KB, D=150KB. New process = 250KB.

**i. Two main problems in contiguous memory allocation:**

1. **External Fragmentation** — Free memory exists in scattered holes; no single hole is large enough even though total free space is sufficient.
2. **Internal Fragmentation** — Allocated block may be slightly larger than needed, wasting the excess.

**ii.**

**1. If compaction is used:**
The OS shifts all processes to one end, creating a single large free block of 100+300+450+150 = 1000KB. The 250KB process can then be allocated from this block. *(Requires relocation of all processes — high overhead.)*

**2. If paging is used:**
The 250KB process is divided into pages. Assuming page size = 50KB, the process needs 5 pages. The OS allocates any 5 free frames from available memory (non-contiguous). A page table maps the 5 logical pages to 5 physical frames.

**iii.** Modern OSes use **paging**. It avoids external fragmentation without requiring process relocation.

**iv.** A page table is needed because paging places pages in non-contiguous frames. The CPU generates a logical address as (page number, offset); the page table maps the page number to the corresponding frame number so the correct physical address is calculated.

---

**c.** Physical = 64MB = 2²⁶ bytes | Virtual = 512MB = 2²⁹ bytes | Page = 2KB = 2¹¹ bytes

**i. Number of pages** = 2²⁹ / 2¹¹ = **2¹⁸ = 262,144 pages**

**ii. Number of frames** = 2²⁶ / 2¹¹ = **2¹⁵ = 32,768 frames**

**iii. Bit allocations:**
- Offset = 11 bits
- Page number = 18 bits
- Frame number = 15 bits

**iv. Page table entries** = **262,144 entries**

---

## Question 3

**a. Four necessary conditions for deadlock:**

1. **Mutual Exclusion** — At least one resource is non-sharable; only one process at a time can use it.
2. **Hold and Wait** — A process holding resources is waiting to acquire more held by others.
3. **No Pre-emption** — Resources cannot be forcibly taken; released only voluntarily.
4. **Circular Wait** — A set {P₀…Pₙ} where each Pᵢ waits for a resource held by Pᵢ₊₁ and Pₙ waits for P₀.

---

**b. Two solutions to prevent deadlock by denying Hold and Wait:**

1. **Request all resources before starting** — A process must request and be allocated all required resources before beginning execution. If any resource is unavailable, the process waits without holding anything.
2. **Release before requesting more** — A process may request resources only when it holds none. If it needs more resources, it must release all current holdings first, then re-request everything needed.

---

**c.** Modern general-purpose OSes **ignore the deadlock problem** (Ostrich Algorithm). The overhead of prevention/avoidance is impractical. Deadlocks are rare and handled by user intervention (killing processes or rebooting).

---

**d.**

**i.** A RAG is drawn to represent and analyse the resource allocation state — showing which processes hold which resources and which are waiting. Used to detect deadlocks by checking for cycles.

**ii.** Based on the Paper 4 RAG (see `assets/paper-4/q3.png`):

The graph shows: R1 (1 instance) assigned to processes, P1 and P3 request R1; R2 (1 instance) assigned to processes, P3 and P1 request R2.

Cycle exists: **P1 → R1 (waiting) → and R2 assigned to P1, P3 waits for R2**

Due to all instances of both R1 and R2 being fully allocated with pending requests creating circular dependencies, **the system IS in deadlock** between the involved processes.

---

**e. Banker's Algorithm:**

Given: P(alloc=3, max=6), Q(alloc=1, max=5), R(alloc=4, max=8), S(alloc=2, max=4), Available=2

**i. Need Matrix:**

<table border="1"><tr><td>Process</td><td>Allocation</td><td>Maximum</td><td>Need</td><td>Available</td></tr><tr><td>P</td><td>3</td><td>6</td><td>3</td><td>2</td></tr><tr><td>Q</td><td>1</td><td>5</td><td>4</td><td></td></tr><tr><td>R</td><td>4</td><td>8</td><td>4</td><td></td></tr><tr><td>S</td><td>2</td><td>4</td><td>2</td><td></td></tr></table>

**ii. Safe State Check** (Available = 2):

- S: Need=2 ≤ 2 ✓ → Run S. Available = 2+2 = **4**
- P: Need=3 ≤ 4 ✓ → Run P. Available = 4+3 = **7**
- Q: Need=4 ≤ 7 ✓ → Run Q. Available = 7+1 = **8**
- R: Need=4 ≤ 8 ✓ → Run R. ✓

**Safe sequence: S → P → Q → R** ✓ The system IS in a safe state.

**iii. Process R requests 1 resource:**

- Step 1: Request(1) ≤ Need(R)=4 ✓
- Step 2: Request(1) ≤ Available=2 ✓
- Step 3: Tentative → R: alloc=5, need=3, Available=1
- Safety check (Available=1): S(2>1)✗, P(3>1)✗, Q(4>1)✗, R(3>1)✗ → **UNSAFE**

**The request from R for 1 resource CANNOT be granted. R must wait.**

---

## Question 4

**a.**

**i. Demand Paging** — Pages are loaded into memory only when demanded (accessed). The process starts with no pages in memory; pages are brought in on first reference, causing a page fault for each new page. Reduces initial load time and memory usage.

**ii. Valid / Invalid bit** — A flag in each page table entry. **Valid (1)** = the page is in physical memory and accessible. **Invalid (0)** = the page is not in memory (triggers a page fault on access) or the address is outside the process's address space.

---

**b. Steps on a page fault:**

1. Trap to the OS; save the process state.
2. Check if the reference is valid (legal address) or invalid. If invalid, terminate.
3. Find a free frame. If none available, select a victim frame using a replacement algorithm.
4. If the victim frame is dirty, write it back to disk (swap out).
5. Schedule disk I/O to load the required page into the (now free) frame.
6. Update the page table: set frame number and valid bit = 1.
7. Restart the instruction that caused the page fault.

---

**c. Virtual Address vs Physical Address:**

| | Virtual Address | Physical Address |
|---|---|---|
| Generated by | CPU / user process | MMU hardware |
| Also called | Logical address | Real address |
| Size range | Can exceed physical RAM | Limited to installed RAM |
| Visibility | Visible to process | Hidden from process |
| Translation | Via page table (MMU) | Direct RAM access |

---

**d. Two hardware resources needed for virtual memory:**

1. **MMU (Memory Management Unit)** — performs address translation from virtual to physical using the page table.
2. **Secondary Storage (Backing Store / Disk)** — holds pages not in RAM. A **TLB** (Translation Lookaside Buffer) is also required for fast address translation.

---

**e. Page Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5**

**i. LRU Replacement:**

| Ref | 1 | 2 | 3 | 4 | 1 | 2 | 5 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **4 frames** | F | F | F | F | H | H | F | H | H | F | F | F |
| **5 frames** | F | F | F | F | H | H | F | H | H | H | H | H |

- **LRU with 4 frames: 8 page faults**
- **LRU with 5 frames: 6 page faults**

**ii. FIFO Replacement:**

| Ref | 1 | 2 | 3 | 4 | 1 | 2 | 5 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **4 frames** | F | F | F | F | H | H | F | F | F | F | F | F |
| **5 frames** | F | F | F | F | H | H | F | H | H | H | H | H |

- **FIFO with 4 frames: 10 page faults**
- **FIFO with 5 frames: 6 page faults**
