# OS Reference Sheet — Master Layout Guide & A4 Cheat Sheet

## 📋 Recommended A4 Layout Strategy

### FRONT SIDE — Heavy Exam Topics (Most from paper-1)

```
┌────────────────────────────────────────────────────────────────┐
│  COLUMN 1                │  COLUMN 2                          │
│  Lecture 7: Process Sync │  Lecture 11: Memory Management     │
│  - CS Requirements       │  - Address Binding (3 types)       │
│  - Peterson's Solution   │  - Fragmentation (int/ext)         │
│  - Atomic Instructions   │  - Paging formulas                 │
│  - Semaphore wait/signal │  - Page fault steps (6 steps)      │
│  - Bounded-Buffer code   │  - FIFO vs LRU                     │
│  - Semaphore errors      │  - Banker's worked example         │
├────────────────────────────────────────────────────────────────│
│  Lecture 9: Deadlock                                           │
│  - 4 Conditions (ME, H&W, No-Preemption, Circ. Wait)          │
│  - Banker's Algorithm: Need = Max - Allocation                 │
│  - Safety sequence algorithm steps                             │
│  - RAG rules (no cycle=no DL; cycle+single=DL)                │
└────────────────────────────────────────────────────────────────┘
```

### BACK SIDE — Supporting Topics

```
┌────────────────────────────────────────────────────────────────┐
│  COLUMN 1                │  COLUMN 2                          │
│  Lecture 6: Security     │  Lecture 10: Disk Scheduling       │
│  - CIA Triad             │  - Seek+Rotational+Transfer        │
│  - 3 Auth methods        │  - FCFS/SSTF/SCAN/C-SCAN/LOOK      │
│  - 5 Program threats     │  - RAID 0,1,5,6,10 comparison      │
│  - Virus vs Worm         │                                    │
│  - Access Matrix         │  Lecture 8: File Systems           │
│  - DoS/DDoS/MITM         │  - 3 allocation methods + I/O      │
│                          │  - Directory structures            │
│                          │  - Unix permissions (chmod)        │
└────────────────────────────────────────────────────────────────┘
```

---

## 🔥 HIGHEST-YIELD TOPICS (From model paper analysis)

### Paper-1 Direct Mappings:

| Q | Topics | Lecture |
|---|--------|---------|
| Q1 | Critical Section, Semaphore, 3 CS requirements, 2 atomic instructions, CS design | **Lec 7** |
| Q2 | Address binding, Base register, Contiguous alloc problems, Compaction vs Paging, Page table need, Paging calculations | **Lec 11** |
| Q3 | 4 deadlock conditions, Deny hold-and-wait (2 solutions), Modern OS handling, RAG analysis, Banker's algorithm | **Lec 9** |
| Q4 | Demand Paging, Valid/Invalid bit, Page fault steps, Virtual vs Physical address, 2 hardware resources, FIFO & LRU calculation | **Lec 11** |

---

## 📝 CONDENSED KEY FACTS (Copy-ready for sheet)

### Lec 7 — 3 CS Requirements
**M**utual Exclusion · **P**rogress · **B**ounded Waiting  
Mnemonic: **"My Process Belongs"**

### Lec 7 — 2 Atomic Hardware Instructions
**Test-and-Set** | **Swap**

### Lec 7 — Semaphore
- `wait(S)`: while(S≤0) wait; S--   [DECREMENT — enter]
- `signal(S)`: S++   [INCREMENT — exit]
- Binary semaphore = mutex lock (0 or 1)
- Counting semaphore = general (0 to n)

### Lec 7 — Peterson's Solution Variables
`flag[i]` (wants to enter) + `turn` (whose turn) → satisfies all 3 CS requirements

### Lec 9 — 4 Deadlock Conditions
**M**utual Exclusion · **H**old & Wait · **N**o Preemption · **C**ircular Wait  
Mnemonic: **"My Hungry Nephew Cries"**

### Lec 9 — Banker's Formula
`Need = Max − Allocation`  
Grant request only if resulting state is SAFE

### Lec 9 — Handling Deadlock
Modern general-purpose OS → **Ostrich Algorithm** (ignore/pretend it doesn't occur)

### Lec 9 — Deny Hold & Wait (2 Solutions):
1. Acquire ALL resources before process starts
2. Release ALL resources before requesting more

### Lec 11 — Address Binding
- **Compile** → fixed (must know location)
- **Load** → relocatable code
- **Execution** → dynamic (MMU translates) ← **modern OS uses this**

### Lec 11 — Paging Key Formulas
```
Offset bits       = log₂(page size)
Page number bits  = logical address bits − offset bits
Frame number bits = physical address bits − offset bits
# Pages           = virtual memory / page size
# Frames          = physical memory / page size
# Page table entries = # Pages
Physical addr     = frame_number × page_size + offset
```

### Lec 11 — Page Fault Steps (6)
1. Check internal OS table → is reference valid?
2. Invalid → terminate; valid but not in RAM → bring in
3. Find free frame
4. Schedule disk I/O to load page into frame
5. Update page table → valid bit = 1
6. Restart faulting instruction

### Lec 11 — Page Replacement
- **FIFO**: oldest page out; suffers **Belady's Anomaly**
- **LRU**: least recently used; no Belady's (stack algorithm)
- **OPT**: farthest future use; theoretical best; needs future knowledge

### Lec 11 — Virtual vs Physical
- Virtual = CPU generated; what program sees
- Physical = RAM address; what hardware sees
- MMU translates logical → physical at **execution time**
- 2 hardware needed: **Page Table** + **TLB**

### Lec 6 — CIA Triad
**C**onfidentiality · **I**ntegrity · **A**vailability

### Lec 6 — Virus vs Worm
- **Virus**: needs host program; attaches and replicates when program runs
- **Worm**: self-replicating; NO host program; spreads via network

### Lec 8 — File Allocation I/O Comparison
```
                Contiguous  Linked   Indexed
Access Nth block:    1 I/O   N I/O     2 I/O
Read K-block file:   K I/O   K I/O   K+1 I/O
Fragmentation:    External    None      None
```
**Contiguous** = best performance, external fragmentation issue  
**Indexed** = direct access without fragmentation ← modern OS uses

### Lec 8 — Directory Types
Single (1 dir all users) → Two-level (1 dir/user) → Tree (hierarchical) → Graph (shared, links)

### Lec 10 — Disk Scheduling Order (by efficiency)
FCFS < SSTF < SCAN < C-SCAN < LOOK < **C-LOOK (best)**  
SSTF → starvation possible  
C-LOOK → most uniform wait time, commonly used

### Lec 10 — RAID
```
RAID 0: Striping    → Speed, NO fault tolerance
RAID 1: Mirror      → 1 disk fault, 50% overhead
RAID 5: Stripe+Par  → 1 disk fault, good balance
RAID 6: Stripe+2Par → 2 disk fault, more overhead
RAID 10: Stripe+Mir → 1/mirror fault, 50% overhead
```

---

## ⚡ FORMULA QUICK-REFERENCE

| Formula | Description |
|---------|-------------|
| `Need[i] = Max[i] - Allocation[i]` | Banker's algorithm need matrix |
| `#Pages = VirtualMem / PageSize` | Number of pages |
| `#Frames = PhysicalMem / PageSize` | Number of frames |
| `OffsetBits = log₂(PageSize)` | Bits for page offset |
| `PageBits = LogicalAddrBits - OffsetBits` | Page number bits |
| `PhysAddr = FrameNo × PageSize + Offset` | Physical address |
| `EAT = (ma+ε)×α + (2ma+ε)×(1-α)` | Effective Access Time with TLB |
| `Taccess = Tseek + Trotational + Ttransfer` | Disk access time |

---

## ✅ FINAL PRIORITY CHECKLIST

**MUST KNOW (Definite exam):**
- [ ] 3 CS requirements + Peterson's Solution code
- [ ] 2 atomic hardware instructions names
- [ ] Semaphore wait() and signal() definitions
- [ ] 4 deadlock conditions
- [ ] Banker's algorithm (Need=Max-Alloc, safety sequence)
- [ ] 6 steps of page fault handling
- [ ] Paging calculation formulas
- [ ] FIFO vs LRU page replacement calculation
- [ ] Virtual vs Physical address difference
- [ ] 2 hardware for virtual memory

**SHOULD KNOW:**
- [ ] CIA triad with examples
- [ ] Virus vs. Worm difference
- [ ] File allocation I/O comparison table
- [ ] RAID 0/1/5 characteristics
- [ ] Disk scheduling algorithms comparison

**GOOD TO KNOW:**
- [ ] Dining philosophers problem
- [ ] Readers-writers semaphore solution
- [ ] Directory structure types
- [ ] Unix chmod permissions
