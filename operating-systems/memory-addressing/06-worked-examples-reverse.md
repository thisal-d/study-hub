# 📉 Worked Examples – Reverse
### Memory Addressing Unit — Part 6 of 9

**← Previous:** [Worked Examples – Forward](./05-worked-examples-forward.md) | **Index** | **Next →** [Frames & Offsets](./07-frames-and-offsets.md)

---

### Example D — Find Address Width from Total Size

> **Q:** Total memory = **64 bytes**, Word size = **1 byte**.  
> Find: (a) Number of locations, (b) Address width.

**Step 1 – Number of locations:**
```
  Locations = Total size ÷ Word size
            = 64 ÷ 1
            = 64 locations
```

**Step 2 – Address width:**
```
  2 ^ (address width) = Locations
  2 ^ (address width) = 64
  
  Since 2^6 = 64, address width = 6 bits
```

---

### Example E — Given Total Size + Word Size

> **Q:** Total memory = **256 bytes**, Word size = **4 bytes**.  
> Find: (a) Number of locations, (b) Address width.

**Step 1 – Locations:**
```
  Locations = 256 ÷ 4 = 64 locations
```

**Step 2 – Address width:**
```
  2 ^ (address width) = 64
  Address width = 6 bits    ← because 2^6 = 64
```

**Visualised:**
```
┌──────────────────────────────────────┐
│  Total Memory = 256 bytes            │
│  Word size    = 4 bytes              │
├──────────────────────────────────────┤
│  Locations    = 256 ÷ 4 = 64         │
│  2^n = 64  →  Address bits = 6       │
└──────────────────────────────────────┘
```

---

### Quick Powers of 2 Reference Table

| Locations (count) | Address bits (n) |
|-------------------|------------------|
| 2                 | 1 bit            |
| 4                 | 2 bits           |
| 8                 | 3 bits           |
| 16                | 4 bits           |
| 32                | 5 bits           |
| 64                | 6 bits           |
| 128               | 7 bits           |
| 256               | 8 bits           |
| 512               | 9 bits           |
| 1024              | 10 bits          |

> **Trick:** Keep doubling from 2. Count how many times you multiply. That count = address bits.

---

> **Next:** [07 – Frames & Offsets →](./07-frames-and-offsets.md)
