# 🖼️ Frames & Offsets
### Memory Addressing Unit — Part 7 of 9

**← Previous:** [Worked Examples – Reverse](./06-worked-examples-reverse.md) | **Index** | **Next →** [Practice Questions](./08-practice-questions.md)

---

Once you understand addresses, the next concept is splitting memory into **equal chunks called frames**.

## 1. What is a Frame?

A **frame** is a fixed-size block of consecutive memory locations.

```
  Word Size = 1 byte
  Frame Size = 4 bytes (This means 4 memory locations, each holding 1 byte)

  Address width = 3 bits
  Total memory locations = 2^3 = 8 locations
  Total memory size = 8 locations × 1 byte = 8 bytes

  Frame Count = Total memory size ÷ Frame size
              = 8 bytes ÷ 4 bytes
              = 2 frames
  
  Bits for frame number:
    2^n = 2 frames  →  n = 1 bit

  Bits needed for offset:
    Offset bits = Total address bits - Frame bits
                = 3 - 1
                = 2 bits

  // Another way to find offset bits:
  // Each frame has 4 memory locations. To define 4 unique offsets 
  // inside the frame, you need 2 bits (since 2^2 = 4).

  ┌───────────────────────────┐
  │ Frame 0                   │
  │  ├─ Offset 00: Addr 0 00  │
  │  ├─ Offset 01: Addr 0 01  │
  │  ├─ Offset 10: Addr 0 10  │
  │  └─ Offset 11: Addr 0 11  │
  ├───────────────────────────┤
  │ Frame 1                   │
  │  ├─ Offset 00: Addr 1 00  │
  │  ├─ Offset 01: Addr 1 01  │
  │  ├─ Offset 10: Addr 1 10  │
  │  └─ Offset 11: Addr 1 11  │
  └───────────────────────────┘
```

## 2. What is an Offset?

An **offset** is the position of a byte **inside** its frame.

```
  Address = (Frame Number × Frame Size) + Offset
```

## 3. Breaking an Address into Frame + Offset

Let's assume a **5-bit memory address** and a frame size of **4 bytes**.

Since each memory location holds 1 byte, a 4-byte frame has **4 locations**.
To uniquely point to 4 locations, you need **2 bits** (since 2^2 = 4).
This means the **offset is 2 bits**.

The remaining bits belong to the frame number:
`5 total bits - 2 offset bits = 3 frame bits.`

So, if we have an address `01101`:
```
  Address in binary:  0 1 1 | 0 1
                      ─────   ──
                      Frame   Offset

  Frame  = 011  (binary) = 3
  Offset = 01   (binary) = 1
```

## 4. Worked Example — Frame & Offset

> **Q:** Memory has a **6-bit address**. Frame size = **8 bytes**.  
> Address = **101011** (binary) = 43 (decimal).  
> Find: Frame number and Offset.

**Step 1 – Find offset bits:**
A frame has 8 locations. To represent 8 locations, we need 3 bits (since 2^3 = 8).
So, **offset = 3 bits**.

**Step 2 – Find frame bits:**
The total address is 6 bits.
`6 total bits - 3 offset bits = 3 frame bits.`

**Step 3 – Split the address:**
```
  Address:  1 0 1 | 0 1 1
            ─────   ─────
            Frame   Offset
             101     011
              5       3
```

---

> **Next:** [08 – Practice Questions →](./08-practice-questions.md)
