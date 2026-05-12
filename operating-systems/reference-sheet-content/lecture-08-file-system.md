# LECTURE 8 — File System Handling in Operating System

---

## 1. File System Concepts

| Term | Definition |
|------|-----------|
| **File** | Smallest unit of logical storage; collection of related information on secondary storage |
| **File System** | OS component managing how data is stored, organized, retrieved; abstraction over hardware |
| **FCB (File Control Block)** | OS-maintained data structure per file (inode in Unix) containing metadata |
| **Directory** | Special file storing info about other files; acts as index/table of contents |

---

## 2. File Attributes

| Attribute | Description |
|-----------|-------------|
| **Name** | Human-readable identifier |
| **Identifier** | Unique internal ID (inode number) |
| **Location** | Where file is stored on disk |
| **Size** | Current file size |
| **Protection** | Access permissions (r, w, x) |
| **Time & Date** | Creation, modification, access timestamps |

---

## 3. File Operations

Create → Open → Read/Write → Seek → Close → Delete

**Open-file table tracks:** File pointer (position), Access rights, File-open count, Disk location

---

## 4. File Types

| Type | Extension | Description |
|------|-----------|-------------|
| Executable | .exe, .com, .bin | Ready-to-run machine code |
| Object | .obj, .o | Compiled but not linked |
| Source | .c, .java, .py | Source code |
| Text | .txt, .doc | Textual data |
| Archive | .zip, .tar | Grouped/compressed files |
| Library | .dll, .so, .lib | Routines for programmers |

---

## 5. File Access Methods

| Method | Description | Best For |
|--------|-------------|----------|
| **Sequential Access** | Read/write in order from start; simple | Log files, text processing |
| **Direct (Random) Access** | Access any block directly using address/block number | Databases, large systems |

---

## 6. Directory Structures

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| **Single-Level** | One directory for all users | Simple | Naming conflicts; no grouping |
| **Two-Level** | Separate directory per user | Same filename for different users; efficient search | No grouping |
| **Tree-Structured** | Hierarchical (current modern standard) | Grouping; efficient | Path names needed |
| **Graph-Based** | Allows shared directories/files (links) | Flexible sharing | Cycles possible; complex deletion |

---

## 7. Unix File Permissions

Format: `[type][owner][group][public]`  
Example: `-rw-r--r--` = regular file, owner:rw, group:r, public:r

| Bit | Value |
|-----|-------|
| r (read) | 4 |
| w (write) | 2 |
| x (execute) | 1 |

`chmod 755 file` → Owner: rwx(7), Group: r-x(5), Public: r-x(5)

---

## 8. File Allocation Methods (★ EXAM ★)

### 8a. Contiguous Allocation

| Aspect | Detail |
|--------|--------|
| How | Each file stored in consecutive disk blocks |
| Directory entry | Start block + length |
| Access to block N | Direct → **1 I/O** |
| Read entire file (K blocks) | K I/Os |
| Advantages | Fast direct access; simple |
| Disadvantages | External fragmentation; must know file size; compaction needed |

### 8b. Linked Allocation

| Aspect | Detail |
|--------|--------|
| How | Each block has pointer to next; linked list |
| Directory entry | Start block only |
| Access to Nth block | Must traverse all N blocks → **N I/Os** |
| Read entire file (K blocks) | K I/Os |
| Advantages | No external fragmentation; no need to know file size |
| Disadvantages | No direct access; pointer overhead; reliability issues |

### 8c. Indexed Allocation

| Aspect | Detail |
|--------|--------|
| How | Index block holds pointers to all data blocks |
| Directory entry | Points to index block |
| Access to any block | Read index block + read data block → **2 I/Os** |
| (If index block in memory) | Only read data block → **1 I/O** |
| Read entire file (K blocks) | 1 + K I/Os |
| Advantages | Direct access; no external fragmentation |
| Disadvantages | Extra storage for index block |

### Comparison Table

| Method | Access Nth block | Read K-block file | Fragmentation |
|--------|-----------------|-------------------|---------------|
| **Contiguous** | 1 I/O | K I/Os | External (bad) |
| **Linked** | N I/Os | K I/Os | None |
| **Indexed** | 2 I/Os | K+1 I/Os | None |

> **Example:** 10-block file, access 7th block:
> - Contiguous: 1 I/O | Linked: 7 I/Os | Indexed: 2 I/Os

---

## 9. File Control Block (FCB / inode)

Contains: permissions, dates (create/access/write), owner/group/ACL, size, pointers to data blocks

---

## 10. Modern File Systems

| OS | File System |
|----|------------|
| Windows | **NTFS** |
| Linux | **ext4** |
| macOS | **APFS** |

---

## 11. File Allocation Table (FAT)

- Linked allocation variant where pointers stored in a separate table (FAT) in memory
- FAT resides in memory → faster access than traversing disk blocks
- Used by: FAT12, FAT16, FAT32 (Windows legacy)

---

## Lecture 8 — Exam Checklist

- [ ] Define file, file system, directory, FCB
- [ ] List key file attributes (name, id, location, size, protection, timestamps)
- [ ] List basic file operations (create, open, read, write, seek, close, delete)
- [ ] Distinguish sequential vs. direct access
- [ ] Describe 4 directory types (single, two-level, tree, graph)
- [ ] Compare 3 allocation methods: contiguous, linked, indexed
- [ ] Calculate I/O operations for each allocation method
- [ ] Know which allocation method modern OS uses (indexed/extent-based)
- [ ] Interpret Unix file permissions (chmod notation)
