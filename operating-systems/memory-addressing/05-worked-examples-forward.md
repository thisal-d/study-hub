# 📈 Worked Examples – Forward
### Memory Addressing Unit — Part 5 of 9

**← Previous:** [The Key Formula](./04-key-formula.md) | **Index** | **Next →** [Worked Examples – Reverse](./06-worked-examples-reverse.md)

---

### Example A — Basic (Word Size = 1 byte)

> **Q:** A memory has a **4-bit address**. Word size = 1 byte.  
> Find: (a) Number of locations, (b) Total memory size.

**Step 1 – Number of locations:**
```
  Locations = 2^(address width)
            = 2^4
            = 16 locations
```

**Step 2 – Total memory size:**
```
  Total size = Locations × Word size
             = 16 × 1 byte
             = 16 bytes
```

---

### Example B — With Larger Word Size

> **Q:** A memory has a **4-bit address**. Word size = **5 bytes**.  
> Find: (a) Number of locations, (b) Total memory size.

**Step 1 – Number of locations:** (same as above)
```
  Locations = 2^4 = 16 locations
```

**Step 2 – Total memory size:**
```
  Total size = 16 × 5 bytes = 80 bytes
```

---

### Example C — Larger Address Width

> **Q:** A memory has a **10-bit address**. Word size = 4 bytes.

```
  Locations = 2^10 = 1024 locations
  Total size = 1024 × 4 bytes = 4096 bytes = 4 KB
```

---

> **Next:** [06 – Worked Examples: Reverse →](./06-worked-examples-reverse.md)
