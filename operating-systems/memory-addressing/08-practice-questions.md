# 🏋️ Practice Questions (with Hints)
### Memory Addressing Unit — Part 8 of 9

**← Previous:** [Frames & Offsets](./07-frames-and-offsets.md) | **Index** | **Next →** [Worksheet](./09-worksheet.md)

---

### Section A – Forward Calculations

**Q1.** A memory has an **8-bit address**. Word size = 1 byte.  
Find the number of locations and total memory size.  
> 💡 Hint: 2^8 = ?

**Q2.** A memory has a **6-bit address**. Word size = 2 bytes.  
Find the number of locations and total memory size.  
> 💡 Hint: 2^6 = 64

**Q3.** A memory has a **12-bit address**. Word size = 8 bytes.  
Find the total memory size in KB.  
> 💡 Hint: 2^12 = 4096. 1 KB = 1024 bytes.

---

### Section B – Reverse Calculations

**Q4.** Total memory = **128 bytes**, Word size = 1 byte.  
Find number of locations and address width.  
> 💡 Hint: How many times do you double 2 to reach 128?

**Q5.** Total memory = **512 bytes**, Word size = **2 bytes**.  
Find number of locations and address width.

**Q6.** Total memory = **1 KB**, Word size = **4 bytes**.  
Find number of locations and address width.  
> 💡 Hint: Convert 1 KB to bytes first.

---

### Section C – Frames & Offsets

**Q7.** Memory has **6-bit addresses**. Frame size = **8 bytes**.  
Address = **101011**.  
Find: offset bits, frame bits, frame number, offset.

**Q8.** Memory has **8-bit addresses**. Frame size = **16 bytes**.  
Address = 200 (decimal, convert to binary first).  
Find: frame number, offset.

---

### ✅ Answers

| Q  | Answer |
|----|--------|
| Q1 | 256 locations, 256 bytes |
| Q2 | 64 locations, 128 bytes |
| Q3 | 4096 locations, 32768 bytes = 32 KB |
| Q4 | 128 locations, 7 bits |
| Q5 | 256 locations, 8 bits |
| Q6 | 256 locations, 8 bits |
| Q7 | 3 offset bits, 3 frame bits; address=101 011 → Frame 5, Offset 3 |
| Q8 | 200=11001000; 4 offset bits, 4 frame bits → Frame 12, Offset 8 |

---

> **Next:** [09 – Worksheet →](./09-worksheet.md)
