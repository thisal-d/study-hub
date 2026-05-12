# LECTURE 10 — Hard Disk Scheduling

---

## 1. Hard Disk Structure

| Component | Description |
|-----------|-------------|
| **Platter** | Circular disk storing data magnetically |
| **Track** | Concentric circle on a platter |
| **Sector** | Smallest storage unit on a track |
| **Cylinder** | Same track number across all platters |
| **Read/Write Head** | Reads and writes data |
| **Actuator Arm** | Moves the R/W head across platters |

---

## 2. Disk Access Time Components

| Component | Definition |
|-----------|-----------|
| **Seek Time** | Time for disk head to move to the required track |
| **Rotational Latency** | Time for required sector to rotate under R/W head |
| **Transfer Time** | Time to read/write data once positioned |

**Formula:**
$$T_{access} = T_{seek} + T_{rotational\_latency} + T_{transfer}$$

> **Goal of disk scheduling:** Minimize seek time (largest factor)

---

## 3. Disk Scheduling Algorithms (★ EXAM ★)

**Reference queue:** 98, 183, 37, 122, 14, 124, 65, 67 | Head starts at **53**

| Algorithm | Description | Head Movement | Notes |
|-----------|-------------|---------------|-------|
| **FCFS** | Service in arrival order | 53→98→183→37→122→14→124→65→67 = **640 cylinders** | Simple but poor; wild swings |
| **SSTF** | Shortest Seek Time First — closest request next | 53→65→67→37→14→98→122→124→183 = **236 cylinders** | May cause starvation |
| **SCAN (Elevator)** | Move in one direction, service all; reverse at end | 53→37→14→0→65→67→98→122→124→183 = **208 cylinders** | Biased toward middle |
| **C-SCAN** | Like SCAN but only services one direction; jump to beginning | 53→65→67→98→122→124→183→199→0→14→37 = **~382** | More uniform wait times |
| **LOOK** | Like SCAN but reverses at last request (not disk end) | No need to go to physical end | Better than SCAN |
| **C-LOOK** | Like C-SCAN but jumps to first request, not physical start | No need to go to 0 or 199 | Better than C-SCAN |

### Summary Comparison

| Algorithm | Throughput | Fairness | Starvation | Modern Use |
|-----------|-----------|----------|-----------|------------|
| FCFS | Low | High | No | Simple systems |
| SSTF | High | Low | **Yes** | Not recommended |
| SCAN | Good | Good | Rare | Elevators/HDD |
| C-SCAN | Good | **Best** | Rare | **Common in OS** |
| LOOK | Best | Good | Rare | Modern OS |
| C-LOOK | Best | **Best** | Rare | **Most modern OS** |

---

## 4. RAID (Redundant Array of Independent Disks)

| RAID Level | Technique | Fault Tolerance | Performance | Storage Overhead | Notes |
|-----------|-----------|----------------|-------------|-----------------|-------|
| **RAID 0** | Striping | **None** | Very High R/W | None (0%) | One disk fails → ALL data lost |
| **RAID 1** | Mirroring | 1 disk | High Read | 50% | Exact copy; easy recovery |
| **RAID 5** | Striping + Distributed Parity | 1 disk | Good R, Slower W | ~1 disk | Best balance; distributed parity |
| **RAID 6** | Striping + Double Parity | **2 disks** | Slower W | ~2 disks | Large systems needing high reliability |
| **RAID 10 (1+0)** | Mirror then Stripe | 1 disk/mirror set | Very High | 50% | Best performance + fault tolerance; expensive |

### RAID Key Terms
- **Striping** — Data split across multiple disks for speed
- **Mirroring** — Exact copy of data on another disk for redundancy
- **Parity** — XOR-based error correction to reconstruct lost data

---

## 5. Quick Facts

- Disk scheduling manages the **order** of I/O requests in the queue
- **Main goal:** Minimize total head movement (= minimize seek time)
- SSTF is like SJF scheduling — **starvation possible**
- SCAN/LOOK = **elevator algorithm**
- C-SCAN/C-LOOK provide **more uniform wait time** than SCAN/LOOK

---

## Lecture 10 — Exam Checklist

- [ ] Name components of a hard disk (platter, track, sector, cylinder, head, arm)
- [ ] Calculate total disk access time = seek + rotational latency + transfer
- [ ] Trace each scheduling algorithm and calculate total head movement
- [ ] Identify which algorithm minimizes head movement
- [ ] Explain Belady's anomaly (applies to FIFO page replacement, not disk scheduling)
- [ ] Compare RAID 0, 1, 5, 6, 10 — fault tolerance and use case
- [ ] SSTF can cause starvation
- [ ] C-LOOK is commonly used in modern OS
