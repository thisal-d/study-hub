# LECTURE 7 — Process Synchronization

---

## 1. Key Terms

| Term | Definition | Key Point |
|------|-----------|-----------|
| **Race Condition** | Multiple processes access/manipulate shared data concurrently; outcome depends on execution order | Prevents data consistency — must synchronize |
| **Critical Section (CS)** | Segment of code where shared data is changed (variables, buffers, files, tables) | Only ONE process allowed in CS at a time |
| **Entry Section** | Code requesting permission to enter CS | Must ask before entering |
| **Exit Section** | Code signaling CS is vacated | Must release after exiting |
| **Mutual Exclusion** | If Pi is in CS, no other process can be in CS | Core requirement #1 |
| **Progress** | If CS is free & some want to enter, selection cannot be postponed indefinitely | No deadlock when CS is free — requirement #2 |
| **Bounded Waiting** | Bound on number of times others enter CS after a request is made and before it is granted | No starvation — requirement #3 |
| **Busy Waiting** | Continuously testing a variable waiting for value to appear (spin-lock) | Wastes CPU cycles |

---

## 2. Three Requirements for CS Solution (★ EXAM CRITICAL ★)

1. **Mutual Exclusion** — Only one process in CS at any time
2. **Progress** — No unnecessary blocking when CS is free
3. **Bounded Waiting** — Every process gets its turn (no starvation)

---

## 3. Solutions Overview

| Category | Solution | Processes | Notes |
|----------|---------|-----------|-------|
| **Software** | Algorithm 1 (turn variable) | 2 | Mutual exclusion ✓, Progress ✗ |
| **Software** | Algorithm 2 (flag array) | 2 | Mutual exclusion ✓, Progress ✗ |
| **Software** | **Peterson's Solution** | 2 | Uses both turn + flag; satisfies all 3 requirements |
| **Software** | **Bakery Algorithm** | n | Ticket-based; smallest number enters CS |
| **Hardware** | **Test-and-Set** | n | Atomic instruction; lock variable |
| **Hardware** | **Swap** | n | Atomic swap of lock and key |

---

## 4. Peterson's Solution (★ EXAM — Know the code ★)

**Shared variables:** `flag[2]` (boolean), `turn` (int)

```
Process Pi:                      Process Pj:
  flag[i] = true;                  flag[j] = true;
  turn = j;                        turn = i;
  while (flag[j] && turn==j)       while (flag[i] && turn==i)
    no-op;                           no-op;
  // Critical Section              // Critical Section
  flag[i] = false;                 flag[j] = false;
  // Remainder Section             // Remainder Section
```
- **flag[i]=true** → Pi WANTS to enter
- **turn=j** → Pi gives priority to Pj
- Satisfies all 3 CS requirements ✓

---

## 5. Hardware: Atomic Instructions (★ Two Atomic Instructions ★)

| Instruction | What it does | Key Property |
|------------|-------------|--------------|
| **Test-and-Set** | Returns old value of target, sets target=true | Atomic read-then-write |
| **Swap** | Atomically swaps two boolean variables | Cannot be interrupted |

**Test-and-Set usage:**
```
lock = false (initially)
while Test-and-Set(lock) do no-op;
  // Critical Section
lock = false;
```

---

## 6. Semaphore (★ EXAM CRITICAL ★)

| Aspect | Detail |
|--------|--------|
| **Definition** | Integer variable S accessed only via atomic wait() and signal() |
| **wait(S)** | While S≤0 → busy wait; then S-- (decrements S) |
| **signal(S)** | S++ (increments S) |
| **Counting Semaphore** | S ranges over unrestricted domain (0 to n) |
| **Binary Semaphore** | S is 0 or 1 only — equivalent to mutex lock |
| **Spinlock** | Implementation using busy waiting |
| **Block & Wakeup** | Better implementation: block process; add to semaphore wait list |

**Semaphore for ordering (S1 before S2):**
```
synch = 0 (initially)
P1: S1; signal(synch);
P2: wait(synch); S2;
```

---

## 7. Classical Synchronization Problems

### 7a. Bounded-Buffer Problem
**Semaphores:** `mutex=1`, `full=0`, `empty=n`

```
Producer:                    Consumer:
  wait(empty);                 wait(full);
  wait(mutex);                 wait(mutex);
  // add to buffer             // remove from buffer
  signal(mutex);               signal(mutex);
  signal(full);                signal(empty);
```

### 7b. Readers-Writers Problem
- Many readers can read simultaneously
- Only ONE writer at a time; no readers while writing
- **Semaphores:** `rw_mutex=1`, `mutex=1`, `read_count=0`

```
Writer:                      Reader:
  wait(rw_mutex);              wait(mutex);
  // write                     read_count++;
  signal(rw_mutex);            if(read_count==1) wait(rw_mutex);
                               signal(mutex);
                               // read
                               wait(mutex);
                               read_count--;
                               if(read_count==0) signal(rw_mutex);
                               signal(mutex);
```

### 7c. Dining-Philosophers Problem
- 5 philosophers, 5 chopsticks; need 2 chopsticks to eat
- **Deadlock possible** if all pick left at the same time
- **Solution:** Treat chopsticks as semaphores
```
wait(chopstick[i]);
wait(chopstick[(i+1)%5]);
// eat
signal(chopstick[i]);
signal(chopstick[(i+1)%5]);
```

---

## 8. Common Semaphore Errors (Pitfalls)

| Error | Effect |
|-------|--------|
| `signal(mutex)…wait(mutex)` | Mutual exclusion violated |
| `wait(mutex)…wait(mutex)` | Deadlock |
| Omitting `wait(mutex)` | Race condition |
| Omitting `signal(mutex)` | Deadlock |

---

## 9. Monitors

- **High-level synchronization** abstraction (abstract data type)
- Internal variables accessible only through procedures
- **Only ONE process active in the monitor at a time** (auto mutual exclusion)
- Simpler to use than semaphores — less prone to errors
- Use `condition` variables: `x.wait()` suspends calling process; `x.signal()` resumes one suspended process

---

## Quick Comparison: Disable Interrupts vs. Semaphore vs. Monitor

| Feature | Disable Interrupts | Semaphore | Monitor |
|---------|-------------------|-----------|---------|
| Level | Low-level | Mid-level | High-level |
| Usage | Kernel only | All | All |
| Error risk | High | Medium | Low |
| Auto exclusion | No | No | Yes |

---

## Lecture 7 — Exam Checklist

- [ ] Define Critical Section and Race Condition
- [ ] List 3 CS requirements (Mutual Exclusion, Progress, Bounded Waiting)
- [ ] Know Peterson's Solution code
- [ ] Name 2 atomic hardware instructions (Test-and-Set, Swap)
- [ ] Define Semaphore, wait(), signal()
- [ ] Distinguish Binary vs. Counting Semaphore
- [ ] Solve Bounded-Buffer using semaphores
- [ ] Understand Dining-Philosophers deadlock risk
