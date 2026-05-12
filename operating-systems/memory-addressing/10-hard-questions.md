# 🔥 Hard Questions — Memory Addressing & Frames
### Memory Addressing Unit — Part 10 of 9 (Extended Practice)

**← Previous:** [Worksheet](./09-worksheet.md) | **Index**

---

> **These questions are exam-level hard.**  
> Every question is purely about **bit counts**, **frame sizes**, **offsets**, and **total storage**.  
> No calculators — all values are powers of 2.

---

## 📋 Formula Reference (Quick Sheet)

```
Address bits (n)     →  Total locations = 2^n
Offset bits (k)      →  Frame size      = 2^k  locations  (× word size = frame bytes)
Frame bits (f)       →  Frame count     = 2^f
Total address bits   =  Frame bits  +  Offset bits
Total memory size    =  Frame count × Frame size   (in bytes, word size = 1 byte)
Total memory size    =  2^(total address bits) × word size
```

---

## ❓ Questions

---

### Q1 — Given: Total address bits + Frame size → Find everything

A system uses a **10-bit physical address**. The frame size is **64 bytes** (word size = 1 byte).

Find:
- (a) Number of offset bits
- (b) Number of frame bits
- (c) Total number of frames (frame count)
- (d) Total memory size (in bytes and KB)

---

### Q2 — Given: Frame count + Frame size → Find total size and bit counts

A physical memory has **512 frames**, and each frame is **128 bytes**.

Find:
- (a) Total memory size (in bytes and KB)
- (b) Number of frame bits (bits needed to represent all frames)
- (c) Number of offset bits (bits needed to address a byte within a frame)
- (d) Total physical address width (in bits)

---

### Q3 — Given: Total memory size + Frame size → Find bit counts

A memory system has a total capacity of **4 MB**. The frame size is **4 KB** (word size = 1 byte).

Find:
- (a) Total number of frames
- (b) Number of frame bits
- (c) Number of offset bits
- (d) Total address width in bits

---

### Q4 — Given: Total address bits + Frame count → Find frame size and offset bits

A memory system uses a **14-bit address**. The memory is divided into **64 frames**.

Find:
- (a) Number of frame bits
- (b) Number of offset bits
- (c) Frame size (in bytes)
- (d) Total memory size (in bytes and KB)

---

### Q5 — Given: Total address bits + Offset bits → Find frame info and sizes

A system has a **12-bit physical address**. The offset field takes up **5 bits**.

Find:
- (a) Number of frame bits
- (b) Total frame count
- (c) Frame size (in bytes)
- (d) Total memory size (in bytes and KB)

---

### Q6 — Given: Frame bits + Offset bits → Find total size (no address bits given directly)

A memory system is designed so that:
- **Frame bits = 8**
- **Offset bits = 6**

Find:
- (a) Total address width in bits
- (b) Total frame count
- (c) Frame size (in bytes)
- (d) Total memory size (in bytes, KB, and MB)

---

### Q7 — Given: Total memory + Frame count → Find frame size and bit counts (reverse chain)

A system has a total memory of **2 GB** and is divided into **524,288 frames** (= 2^19 frames).

Find:
- (a) Frame size (in bytes and KB)
- (b) Number of frame bits
- (c) Number of offset bits
- (d) Total physical address width in bits

---

### Q8 — Given: Address + Frame size → Decode the address (decode bits)

A memory system uses a **16-bit physical address**. The frame size is **256 bytes**.  
A process references physical address **`0xA3F5`** (hexadecimal).

Find:
- (a) Number of offset bits
- (b) Number of frame bits
- (c) Convert `0xA3F5` to binary
- (d) Extract the frame number and offset (in decimal)

---

### Q9 — Given: Frame size + Total memory → Find total address bits and verify split

A system's memory is **8 MB** total, and frames are **32 bytes** each (word size = 1 byte).

Find:
- (a) Total number of frames
- (b) Frame bits
- (c) Offset bits
- (d) Total address bits (verify: frame bits + offset bits should equal your total)
- (e) What physical address (in binary) points to **Frame 100, Offset 7**?

---

### Q10 — Full reverse: Given only total address bits and a decoded address → Recover all parameters

A memory system has a **16-bit** physical address.  
A specific address `1001 1100 0001 1010` (binary) is decoded as:
- Frame Number = `1001 1100 00` (first 10 bits)
- Offset = `01 1010` (last 6 bits)

From this, find:
- (a) Number of frame bits
- (b) Number of offset bits
- (c) Frame size (in bytes)
- (d) Total frame count
- (e) Total memory size (in bytes, KB, and MB)
- (f) What is the decimal value of that frame number and offset?

---

## ✅ Full Worked Answers

---

### A1 — 10-bit address, 64-byte frame

```
Frame size = 64 bytes = 2^6
  → Offset bits = 6

Frame bits = Total address bits − Offset bits
           = 10 − 6  =  4

Frame count = 2^4 = 16 frames

Total memory size = 2^10 × 1 byte = 1024 bytes = 1 KB
                 OR = 16 frames × 64 bytes = 1024 bytes = 1 KB ✓
```

| Part | Answer |
|------|--------|
| Offset bits | **6** |
| Frame bits | **4** |
| Frame count | **16** |
| Total memory | **1024 bytes = 1 KB** |

---

### A2 — 512 frames, 128-byte frame

```
Total memory = 512 × 128 = 65,536 bytes = 64 KB

Frame count = 512 = 2^9
  → Frame bits = 9

Frame size = 128 = 2^7
  → Offset bits = 7

Total address bits = 9 + 7 = 16 bits
```

| Part | Answer |
|------|--------|
| Total memory | **65,536 bytes = 64 KB** |
| Frame bits | **9** |
| Offset bits | **7** |
| Address width | **16 bits** |

---

### A3 — 4 MB total, 4 KB frame

```
Total memory = 4 MB = 4 × 1024 × 1024 = 2^22 bytes
Frame size   = 4 KB = 4 × 1024       = 2^12 bytes

Frame count  = 2^22 ÷ 2^12 = 2^10 = 1024 frames
  → Frame bits = 10

Offset bits  = log₂(4096) = 12  [since 2^12 = 4096 bytes per frame]

Total address bits = 10 + 12 = 22 bits
  (Verify: 2^22 bytes = 4 MB ✓)
```

| Part | Answer |
|------|--------|
| Frame count | **1024** |
| Frame bits | **10** |
| Offset bits | **12** |
| Address width | **22 bits** |

---

### A4 — 14-bit address, 64 frames

```
Frame count = 64 = 2^6
  → Frame bits = 6

Offset bits = Total bits − Frame bits = 14 − 6 = 8

Frame size = 2^8 = 256 bytes

Total memory = 2^14 × 1 byte = 16,384 bytes = 16 KB
           OR = 64 frames × 256 bytes = 16,384 bytes ✓
```

| Part | Answer |
|------|--------|
| Frame bits | **6** |
| Offset bits | **8** |
| Frame size | **256 bytes** |
| Total memory | **16,384 bytes = 16 KB** |

---

### A5 — 12-bit address, 5 offset bits

```
Offset bits = 5

Frame bits = 12 − 5 = 7

Frame count = 2^7 = 128 frames

Frame size = 2^5 = 32 bytes

Total memory = 2^12 bytes = 4096 bytes = 4 KB
           OR = 128 frames × 32 bytes = 4096 bytes ✓
```

| Part | Answer |
|------|--------|
| Frame bits | **7** |
| Frame count | **128** |
| Frame size | **32 bytes** |
| Total memory | **4096 bytes = 4 KB** |

---

### A6 — Frame bits = 8, Offset bits = 6

```
Total address bits = 8 + 6 = 14

Frame count = 2^8 = 256 frames

Frame size = 2^6 = 64 bytes

Total memory = 2^14 bytes = 16,384 bytes = 16 KB = 0.015625 MB
           OR = 256 frames × 64 bytes = 16,384 bytes ✓
```

| Part | Answer |
|------|--------|
| Address width | **14 bits** |
| Frame count | **256** |
| Frame size | **64 bytes** |
| Total memory | **16,384 bytes = 16 KB** |

---

### A7 — 2 GB total, 2^19 frames

```
Total memory = 2 GB = 2^31 bytes
Frame count  = 2^19
  → Frame bits = 19

Frame size = Total ÷ Frame count = 2^31 ÷ 2^19 = 2^12 bytes = 4096 bytes = 4 KB

Offset bits = 12  (since 2^12 = 4096)

Total address bits = 19 + 12 = 31 bits
  (Verify: 2^31 bytes = 2 GB ✓)
```

| Part | Answer |
|------|--------|
| Frame size | **4096 bytes = 4 KB** |
| Frame bits | **19** |
| Offset bits | **12** |
| Address width | **31 bits** |

---

### A8 — 16-bit address, 256-byte frame, address 0xA3F5

```
Frame size = 256 = 2^8
  → Offset bits = 8

Frame bits = 16 − 8 = 8

Convert 0xA3F5 to binary:
  A = 1010
  3 = 0011
  F = 1111
  5 = 0101
  → 1010 0011 1111 0101

Split (8 frame bits | 8 offset bits):
  Frame  = 1010 0011  = 163
  Offset = 1111 0101  = 245
```

| Part | Answer |
|------|--------|
| Offset bits | **8** |
| Frame bits | **8** |
| Binary of 0xA3F5 | **1010 0011 1111 0101** |
| Frame number | **163** |
| Offset | **245** |

---

### A9 — 8 MB total, 32-byte frame; encode an address

```
Total memory = 8 MB = 8 × 1024 × 1024 = 2^23 bytes

Frame size = 32 = 2^5
  → Offset bits = 5

Frame count = 2^23 ÷ 2^5 = 2^18
  → Frame bits = 18

Total address bits = 18 + 5 = 23 bits ✓

--- Encode Frame 100, Offset 7 ---
Frame 100 in binary (18 bits): 0000 0000 0000 0110 01   → 00 0000 0110 0100 = 100
  100 in binary = 1100100  → padded to 18 bits: 00 0000 0001 1001 00

Let's do it properly:
  100 (decimal) → binary: 64+32+4 = 1100100  (7 bits)
  Padded to 18 bits: 00 0000 0001 1001 00  ← pad 11 zeros on left
  = 000000001100100

Wait — 100 = 64+32+4 = 1100100 (7 bits), padded to 18: 000000000001100100

Offset 7 → binary (5 bits): 00111

Full address (23 bits): 000000000001100100 | 00111
                        ──────────────────   ─────
                          Frame (18 bits)   Offset (5 bits)
= 0000 0000 0001 1001 0000 111
```

| Part | Answer |
|------|--------|
| Frame count | **2^18 = 262,144** |
| Frame bits | **18** |
| Offset bits | **5** |
| Address width | **23 bits** |
| Address (Frame 100, Offset 7) | **`000000000001100100 00111`** |

---

### A10 — Full reverse from decoded address

```
Given split: 10 frame bits | 6 offset bits

(a) Frame bits  = 10
(b) Offset bits = 6

(c) Frame size  = 2^6 = 64 bytes

(d) Frame count = 2^10 = 1024

(e) Total memory = 1024 × 64 = 65,536 bytes = 64 KB

(f) Frame number = 1001 1100 00 (binary)
      = 512 + 128 + 64 + 32 + 8 + 4 + ... wait, let's extract:
      1001 1100 00
      = 1×2^9 + 0×2^8 + 0×2^7 + 1×2^6 + 1×2^5 + 1×2^4 + 0×2^3 + 0×2^2 + 0×2^1 + 0×2^0
      = 512 + 0 + 0 + 64 + 32 + 16 + 0 + 0 + 0 + 0
      = 624

    Offset = 01 1010 (binary)
      = 0×2^5 + 1×2^4 + 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0
      = 16 + 8 + 2
      = 26
```

| Part | Answer |
|------|--------|
| Frame bits | **10** |
| Offset bits | **6** |
| Frame size | **64 bytes** |
| Frame count | **1024** |
| Total memory | **65,536 bytes = 64 KB** |
| Frame number (decimal) | **624** |
| Offset (decimal) | **26** |

---

## 📊 Question Coverage Map

| Q  | Given | Find |
|----|-------|------|
| Q1 | Address bits + Frame size | Offset bits, Frame bits, Frame count, Total size |
| Q2 | Frame count + Frame size | Total size, Frame bits, Offset bits, Address width |
| Q3 | Total size + Frame size | Frame count, Frame bits, Offset bits, Address width |
| Q4 | Address bits + Frame count | Frame bits, Offset bits, Frame size, Total size |
| Q5 | Address bits + Offset bits | Frame bits, Frame count, Frame size, Total size |
| Q6 | Frame bits + Offset bits | Address width, Frame count, Frame size, Total size |
| Q7 | Total size + Frame count | Frame size, Frame bits, Offset bits, Address width |
| Q8 | Address bits + Frame size + hex address | Offset bits, Frame bits, Decode address → frame & offset |
| Q9 | Total size + Frame size | All bits + **encode** a given frame/offset into binary address |
| Q10 | Decoded binary address split | Recover all: frame bits, offset bits, frame size, count, total size, decimal values |

---

> 💡 **Tip:** Every question boils down to two core facts:  
> `Offset bits = log₂(frame size)` and `Frame bits = total bits − offset bits`  
> Everything else flows from those two.
