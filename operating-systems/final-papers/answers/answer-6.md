
<div style='text-align: center;'>

# IT2130 Operating Systems and System Administration Year 2, Semester 2

# Final Examination — Answer Sheet (Paper 6)

</div>

---

## Question 1

**a.**

**i. Counting Semaphore** — A semaphore whose integer value can range over an unrestricted domain (not just 0 and 1). Used to control access to a resource that has multiple instances. The value represents the number of available instances. `wait()` decrements the count; `signal()` increments it. If the count reaches 0, the next `wait()` blocks the process.

**ii. Wait Operation** — The `wait()` operation (also called P or down) atomically decrements the semaphore value by 1. If the resulting value is negative, the process is blocked and added to the semaphore's waiting queue. It is used to acquire a resource or enter a critical section.

---

**b. Three requirements for a critical section solution:**

1. **Mutual Exclusion** — Only one process may execute in its critical section at a time.
2. **Progress** — If no process is in the critical section, the selection of who enters next cannot be postponed indefinitely.
3. **Bounded Waiting** — A bound must exist on the number of times other processes enter before a waiting process is granted access.

---

**c. Two atomic hardware instructions:**

1. Test-and-Set (`TestAndSet`)
2. Swap (`Swap` / Compare-and-Swap)

---

**d.**

**i. Critical Section of the railway ticketing system:**

The critical section is the code that reads and modifies the shared `seat_count` and writes to `TicketReservationLog`:

```
read seat_count                     ← start of critical section
if (seat_count > 0):
    seat_count = seat_count - 1
    issue_ticket()
    write record to TicketReservationLog  ← end of critical section
```

Without synchronization, two stations could simultaneously read the same `seat_count`, both decrement it locally, and both issue tickets for the same seat — a race condition.

**ii. Solution using a Semaphore:**

```
Semaphore mutex = 1;     // binary semaphore

Station_Process:
    // Entry Section
    wait(mutex);

    // Critical Section
    local = seat_count;
    if (local > 0):
        seat_count = local - 1;
        issue_ticket();               // write to TicketReservationLog

    // Exit Section
    signal(mutex);

    // Remainder Section
    ... (print ticket, update display, etc.)
```

Only one station counter can update `seat_count` at a time, preventing duplicate seat allocation.

---

## Question 2

**a.**

**i. Execution time address binding** — Address binding is performed at runtime. Processes can be moved between different memory locations during execution. The CPU generates logical addresses; the MMU (using base and limit registers) converts them to physical addresses at each memory access. Requires hardware support.

**ii. Limit register** — A hardware register that stores the size (length) of a process's memory partition. The CPU checks every logical address against the limit register. If the logical address ≥ limit value, a trap (memory access violation) is raised. This protects other processes' memory from illegal access.

---

**b.**

Free segments: A=450KB, B=200KB, C=350KB, D=100KB. New process = 300KB.

**i. Two main problems in contiguous memory allocation:**

1. **External Fragmentation** — Total free memory (450+200+350+100=1100KB) may be large enough but scattered into non-contiguous holes.
2. **Internal Fragmentation** — Allocated block may be slightly larger than needed, wasting the unused portion within the block.

**ii.**

**1. If compaction is used:**
The OS relocates all processes to one end of memory, combining all free holes into one block of 1100KB. The 300KB process is allocated. *(Relocation of all running processes — significant overhead.)*

**2. If paging is used:**
The 300KB process is split into pages. Assuming page size = 50KB, the process needs 6 pages. Any 6 free frames anywhere in memory are allocated. A page table maps the 6 logical pages to their respective physical frames.

**iii.** Modern OSes use **paging** — it avoids external fragmentation without the costly relocation of running processes.

**iv.** The page table is needed to translate logical (page number, offset) addresses to physical (frame number, offset) addresses, since paging does not place pages contiguously in memory.

---

**c.** Physical = 512MB = 2²⁹ bytes | Virtual = 8GB = 2³³ bytes | Page = 16KB = 2¹⁴ bytes

**i. Number of pages** = 2³³ / 2¹⁴ = **2¹⁹ = 524,288 pages**

**ii. Number of frames** = 2²⁹ / 2¹⁴ = **2¹⁵ = 32,768 frames**

**iii. Bit allocations:**
- Offset = 14 bits
- Page number = 19 bits
- Frame number = 15 bits

**iv. Page table entries** = **524,288 entries**

---

## Question 3

**a. Four necessary conditions for deadlock:**

1. **Mutual Exclusion** — At least one resource must be held in a non-sharable mode.
2. **Hold and Wait** — A process holds at least one resource and waits to acquire more.
3. **No Pre-emption** — Resources cannot be forcibly taken from a holding process.
4. **Circular Wait** — A circular chain {P₀, P₁, …, Pₙ} where each Pᵢ waits for a resource held by Pᵢ₊₁ and Pₙ waits for P₀.

---

**b. Two solutions to prevent deadlock by denying Hold and Wait:**

1. **Request all resources at once** — A process must request and be allocated all resources it will ever need before it starts execution. If any resource is unavailable, the process waits without holding any.
2. **Release all before requesting more** — A process holding resources must release all of them before requesting additional resources. It may then re-request all required resources together.

---

**c.** Modern general-purpose OSes **ignore the deadlock problem** (Ostrich Algorithm). Prevention and avoidance impose too much performance overhead and reduce resource utilisation. Deadlocks occur rarely and are resolved by user intervention (killing a hung process or restarting).

---

**d.**

**i.** The RAG is used to represent and analyse the state of resource allocation in a system. It shows which processes hold which resources (assignment edges) and which processes are requesting which resources (request edges). It is the primary tool for **deadlock detection** — a cycle in the RAG indicates potential or actual deadlock.

**ii.** Based on the Paper 6 RAG (see `assets/paper-6/q3.png`):

The graph contains a clear cycle: **P1 → R2 → P2 → R3 → P3 → R1 → P1**

- R1 (1 instance) assigned to P1; P3 requests R1 — P3 waits for P1.
- R2 (1 instance) assigned to P2; P1 requests R2 — P1 waits for P2.
- R3 (1 instance) assigned to P3; P2 requests R3 — P2 waits for P3.

All three processes are in a circular wait chain, and each resource has only 1 instance. **The system IS in deadlock.** All three processes (P1, P2, P3) are deadlocked.

---

**e. Banker's Algorithm:**

Given: A(alloc=3, max=8), B(alloc=2, max=6), C(alloc=1, max=5), D(alloc=4, max=7), Available=2

**i. Need Matrix:**

<table border="1"><tr><td>Process</td><td>Allocation</td><td>Maximum</td><td>Need</td><td>Available</td></tr><tr><td>A</td><td>3</td><td>8</td><td>5</td><td>2</td></tr><tr><td>B</td><td>2</td><td>6</td><td>4</td><td></td></tr><tr><td>C</td><td>1</td><td>5</td><td>4</td><td></td></tr><tr><td>D</td><td>4</td><td>7</td><td>3</td><td></td></tr></table>

**ii. Safe State Check** (Available = 2):

- A: Need=5 > 2 ✗ | B: Need=4 > 2 ✗ | C: Need=4 > 2 ✗ | D: Need=3 > 2 ✗

No process can proceed with Available=2. **The system is NOT in a safe state.** No safe sequence exists.

**iii. Process A requests 1 resource:**

- Step 1: Request(1) ≤ Need(A)=5 ✓
- Step 2: Request(1) ≤ Available=2 ✓
- Step 3: Tentative → A: alloc=4, need=4, Available=1
- Safety check (Available=1): A(4>1)✗, B(4>1)✗, C(4>1)✗, D(3>1)✗ → **UNSAFE**

**The request from A for 1 resource CANNOT be granted. A must wait.**

---

## Question 4

**a.**

**i. Demand Paging** — Pages are loaded into physical memory only on demand (when first accessed), rather than loading the entire process at startup. Enables large programs to run with limited physical memory by keeping only active pages in RAM.

**ii. Valid / Invalid bit** — A bit in each page table entry. **Valid (1)** = the page resides in physical memory and is accessible. **Invalid (0)** = the page is not in memory (on disk), causing a page fault on access, or the address is outside the process's legal address space.

---

**b. Steps on a page fault:**

1. Trap to OS; save the current process state (registers, program counter).
2. Verify the memory reference: check if the address is a valid (legal) access. If not, terminate.
3. Find a free frame. If no free frame exists, select a victim page using a replacement algorithm (e.g., LRU, FIFO).
4. If the victim page has been modified (dirty bit = 1), write it back to the backing store (disk).
5. Schedule disk I/O to read the required page from disk into the free frame.
6. Update the page table entry: record the frame number and set valid bit = 1.
7. Restart the instruction that triggered the page fault.

---

**c. Virtual Address vs Physical Address:**

| | Virtual Address | Physical Address |
|---|---|---|
| Generated by | CPU / user process | MMU hardware |
| Also called | Logical address | Real address |
| Space size | Can exceed physical RAM | Limited to installed RAM |
| Visibility | Visible to the process | Hidden from process/user |
| Translation | Converted by MMU using page table | Used directly to access RAM |

---

**d. Two hardware resources needed for virtual memory:**

1. **MMU (Memory Management Unit)** — hardware that automatically translates virtual addresses to physical addresses on every memory access using the page table.
2. **Secondary Storage (Backing Store / Disk)** — stores pages not currently in physical memory. A **TLB** (Translation Lookaside Buffer) caches recent page table lookups for fast translation.

---

**e. Page Reference String: 0, 1, 2, 3, 0, 1, 4, 0, 1, 2, 3, 4**

**i. LRU Replacement:**

| Ref | 0 | 1 | 2 | 3 | 0 | 1 | 4 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **3 frames** | F | F | F | F | F | F | F | H | H | F | F | F |
| **4 frames** | F | F | F | F | H | H | F | H | H | F | F | F |

- **LRU with 3 frames: 10 page faults**
- **LRU with 4 frames: 8 page faults**

**ii. FIFO Replacement:**

| Ref | 0 | 1 | 2 | 3 | 0 | 1 | 4 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **3 frames** | F | F | F | F | F | F | F | H | H | F | F | H |
| **4 frames** | F | F | F | F | H | H | F | F | F | F | F | F |

- **FIFO with 3 frames: 9 page faults**
- **FIFO with 4 frames: 10 page faults**

> Note: FIFO with 4 frames produces **more faults** (10) than with 3 frames (9) — this is an example of **Belady's Anomaly**.
