# 📝 Worksheet – 10 Questions
### Memory Addressing Unit — Part 9 of 9

**← Previous:** [Practice Questions](./08-practice-questions.md) | **Index**

---

**Instructions:** Show all working. Circle your final answer. Assume word size = 1 byte unless stated otherwise.

---

**1. Forward Calculation**
A memory system has a **5-bit address** and word size = **1 byte**.
(a) How many memory locations does it have? ___________
(b) What is the total memory size? ___________

---

**2. Reverse Calculation**
Total memory size = **64 bytes**, Word size = **1 byte**.
(a) How many memory locations are there? ___________
(b) How many address bits are needed? ___________

---

**3. Finding Frame Size (Given Count)**
Total memory = **128 bytes**. The memory is divided equally into **16 frames**.
(a) What is the size of each frame? ___________
(b) How many offset bits do you need? ___________

---

**4. Finding Frame Count (Given Size)**
Total memory = **256 bytes**. The frame size is **8 bytes**.
(a) How many frames are there? ___________
(b) How many bits are needed for the frame number? ___________

---

**5. Address Splitting (Given Frame Size)**
A memory has an **8-bit address**. Frame size = **16 bytes**.
(a) How many offset bits are needed? ___________
(b) How many frame bits are left? ___________

---

**6. Address Splitting (Given Frame Count)**
A memory has a **10-bit address**. The memory is divided exactly into **8 frames**.
(a) How many bits are needed for the frame number? ___________
(b) How many offset bits are left? ___________

---

**7. Reverse Engineering Total Memory**
A system uses **4 frame bits** and **3 offset bits**.
(a) What is the total address width? ___________
(b) What is the total memory size? ___________

---

**8. Extracting Address (Given Frame Size)**
Physical Address = **10111** (binary). Frame size = **4 bytes**.
(a) How many offset bits? ___________
(b) How many frame bits? ___________
(c) Split the address and find the **Frame Number** (decimal): ___________
(d) Find the **Offset** (decimal): ___________

---

**9. Extracting Address (Given Frame Count)**
A memory has a **6-bit address** and is divided into **4 frames**. 
Physical Address = **110010** (binary).
(a) How many frame bits? ___________
(b) How many offset bits? ___________
(c) Split the address and find the **Frame Number** (decimal): ___________
(d) Find the **Offset** (decimal): ___________

---

**10. Real-World Challenge**
A system consists of **4 frames**. Each frame holds **8 bytes**.
(a) What is the total memory size? ___________
(b) How many bits are needed for the full address? ___________

---

### 📋 Worksheet Answer Key (Teacher Copy)

| Q  | Answers |
|----|---------|
| 1  | (a) 32 locations (b) 32 bytes |
| 2  | (a) 64 locations (b) 6 bits |
| 3  | (a) 8 bytes (128 ÷ 16) (b) 3 bits (2^3 = 8) |
| 4  | (a) 32 frames (256 ÷ 8) (b) 5 bits (2^5 = 32) |
| 5  | (a) 4 offset bits (2^4 = 16) (b) 4 frame bits (8 - 4) |
| 6  | (a) 3 frame bits (2^3 = 8 frames) (b) 7 offset bits (10 - 3) |
| 7  | (a) 7 bits (4 + 3) (b) 128 bytes (2^7) |
| 8  | (a) 2 offset bits (b) 3 frame bits (c) Address: 101 \| 11 → Frame 5 (d) Offset 3 |
| 9  | (a) 2 frame bits (2^2 = 4 frames) (b) 4 offset bits (6 - 2) (c) Address: 11 \| 0010 → Frame 3 (d) Offset 2 |
| 10 | (a) 32 bytes (4 frames × 8 bytes) (b) 5 bits (2^5 = 32) |
