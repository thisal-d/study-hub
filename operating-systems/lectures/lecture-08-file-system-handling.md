<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027110.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6CxL7Z5Tlfo0dyIRx5Uv0iYZn4o%3D&Expires=1778572827' alt='OCR图片'/></div>

## Sri Lanka Institute of Information Technology Faculty of Computing

<div align="center">

# Dr.Sanvitha Kasthuriarachchi

</div>

IT2130 - Operating Systems and System Administration

Year 02 and Semester 02

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027162.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xmDez6U%2BDiuiWl%2F7kicP1upOaog%3D&Expires=1778572827' alt='OCR图片'/></div>

## Lecture 08

File System Handling in Operating System

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027167.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=P5OfQXByWNaIz8pda33ACgLrNiI%3D&Expires=1778572827' alt='OCR图片'/></div>

## Outline

- UNIX File Concept

- File Access Methods

- Disk and Directory Structure

- File Allocation Methods

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027173.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=r8mxkud2Wg2edVGwFYWyhdk%2FF4Q%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Concept

- A file system is a fundamental component of an operating system that manages how data is stored, organized, and retrieved from storage devices.

It provides an abstraction layer between the user and the hardware, allowing users to interact with files without worrying about physical storage details.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027201.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dqVh82TfVVHD0omzlh7yLGNIaw4%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Concept

- A file is the smallest unit of logical storage in an operating system.

It represents a collection of related information stored on secondary storage.

Files can contain:

- Text (documents)

- Numbers (data files)

- Binary data (images, videos)

- Executable programs

Each file is defined by its creator and has a specific purpose. The operating system treats all files as a sequence of bytes or records.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027207.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fsvryuy7JIB2Rh08gTUsvcZltuk%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Attributes

Each file has associated metadata known as attributes. These help the operating system manage and control files effectively.

- Key attributes include:

- Name: Human-readable identifier

- Identifier: Unique internal ID

- Location: Where the file is stored

- Size: Current file size

- Protection: Access permissions

- Time & Date: Creation and modification timestamps

- These attributes are essential for security, tracking, and file organization.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027213.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kqwNMgYQWaHl%2BqyNgci4oNzONC0%3D&Expires=1778572827' alt='OCR图片'/></div>

## Directory Structure

- A directory is a special type of file that stores information about other files. It acts like an index or table of contents.

- Functions of directories:

- Organize files logically

- Store file metadata

- Enable efficient searching

- Directories make file management easier and more structured.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027218.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2F6QlXOI1u5G9jU%2FtZfrgtASWIWk%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Operations

- The operating system provides several operations to manipulate files:

- Create: Generate a new file

- Open: Prepare file for access

- Read: Retrieve data

- Write: Modify or add data

- Seek: Move within the file

- Close: Finish operations

- Delete: Remove file

- These operations are implemented using system calls.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027222.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CozSsoZ2BZ0Ii2QPr3cEBQMv380%3D&Expires=1778572827' alt='OCR图片'/></div>

## Open Files

Several pieces of data are needed to manage open files:

- Open-file table: tracks open files

- File pointer: pointer to last read/write location, per process that has the file open

- File-open count: counter of number of times a file is open - to allow removal of data from open-file table when last processes closes it

- Disk location of the file: cache of data access information

- Access rights: per-process access mode information

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027227.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xrl5m1YNFfQvm4Jpv6InMZ6WIr0%3D&Expires=1778572827' alt='OCR图片'/></div>

## Open Files

- When a file is opened, the OS maintains information in an open-file table.

This includes:

- File pointer (current position)

- Access rights

- Number of processes using the file

- This mechanism improves performance by avoiding repeated disk access and supports multi-user environments.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027233.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Fs%2Fh20mrzDnIHNnh8uR5rDT3W8M%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Types-Name, Extension

<table border="1"><tr><td>file type</td><td>usual extension</td><td>function</td></tr><tr><td>executable</td><td>exe, com, bin or none</td><td>ready-to-run machine-language program</td></tr><tr><td>object</td><td>obj, o</td><td>compiled, machine language, not linked</td></tr><tr><td>source code</td><td>c, cc, java, pas, asm, a</td><td>source code in various languages</td></tr><tr><td>batch</td><td>bat, sh</td><td>commands to the command interpreter</td></tr><tr><td>text</td><td>txt, doc</td><td>textual data, documents</td></tr><tr><td>word processor</td><td>wp, tex, rtf, doc</td><td>various word-processor formats</td></tr><tr><td>library</td><td>lib, a, so, dll</td><td>libraries of routines for programmers</td></tr><tr><td>print or view</td><td>ps, pdf, jpg</td><td>ASCII or binary file in a format for printing or viewing</td></tr><tr><td>archive</td><td>arc, zip, tar</td><td>related files grouped into one file, sometimes compressed, for archiving or storage</td></tr><tr><td>multimedia</td><td>mpeg, mov, rm, mp3, avi</td><td>binary file containing audio or A/V information</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027238.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xsVAZrZa9Um6pFDsZf%2F206vq1mk%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Access Methods

- File access methods define how data inside a file is accessed.

- Main types:

- Sequential Access - data is accessed in order

- Direct Access - data can be accessed randomly

The choice depends on application requirements.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027244.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Pcw1IcAB1PnQYEMzSR1RgFmjuxo%3D&Expires=1778572827' alt='OCR图片'/></div>

## Sequential Access

- In sequential access, data is read or written in order, from beginning to end.

- The characteristics are:

- Simple to implement

- Efficient for linear data processing

- Not suitable for random access

- Example: Reading a log file line by line.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027262.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CD%2B%2Fb37Vabo3asADOxssz2%2Bq2no%3D&Expires=1778572827' alt='OCR图片'/></div>

## Direct Access

- Direct access allows reading or writing at any location in the file.

- The characteristics are:

- Fast and flexible

- Requires addressing mechanism

- Used in databases and large systems

Example:

Accessing record number 100 directly.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027268.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=25e9moynd7y%2FbjifF2K61qzSCdM%3D&Expires=1778572827' alt='OCR图片'/></div>

## Operations Performed on Directory

Search for a file

Create a file

- Delete a file

- List a directory

- Rename a file

- Traverse the file system

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027273.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fHI11a47vsaPBbylET2h3zox634%3D&Expires=1778572827' alt='OCR图片'/></div>

## Types of Directories

- Different directory structures are used to organize files:

- Single-level directory

- Two-level directory

- Tree-structured directory

- Graph-based directory

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027292.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FWGyQsMU%2FyVUBm5BsRJY%2BrCGWGY%3D&Expires=1778572827' alt='OCR图片'/></div>

## Single-Level Directory

## A single directory for all users

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027297.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=d%2BwG8hJMOPIpmJT92cwIuxUvdDU%3D&Expires=1778572827' alt='OCR图片'/></div>

Naming problem

Grouping problem

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027302.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jxXYmFAkfdr9fE%2B00rom1nQc6Ro%3D&Expires=1778572827' alt='OCR图片'/></div>

## Two-Level Directory

## Separate directory for each user

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027312.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MATvNhsoTwBv40xPdX2XP2IDCw4%3D&Expires=1778572827' alt='OCR图片'/></div>

Path name

Can have the same file name for different user

Efficient searching

No grouping capability

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027321.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CnKG6d7gDeGJTgjbifG3UN1qGhc%3D&Expires=1778572827' alt='OCR图片'/></div>

## Tree-Structured Directories

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027326.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gF6h7TGkBRkHAqcZZunl8Ta3oB8%3D&Expires=1778572827' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027340.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9m47LIhNmyujICFBhJxqk4YYIOI%3D&Expires=1778572827' alt='OCR图片'/></div>

## General Graph Directory

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027344.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Q%2BYr5lOosLQLTgOzdOfe6xwkUBI%3D&Expires=1778572827' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027354.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=spkCKYTKgfD3n19rgketLozrlFs%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Protection

- File protection ensures that only authorized users can access files.

- Types of access:

- Read

- Write

- Execute

Protection mechanisms are critical in multi-user systems.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027358.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pR0JzUZh%2FLpiAT8BySX43oJ0zX0%3D&Expires=1778572827' alt='OCR图片'/></div>

## Access Lists and Groups in Unix

Mode of access: read, write, execute

- Three classes of users on Unix / Linux

<table border="1"><tr><td></td><td></td><td></td><td>RWX</td></tr><tr><td>a) owner access</td><td>7</td><td>$\Rightarrow$</td><td>111RWX</td></tr><tr><td>b) group access</td><td>6</td><td>$\Rightarrow$</td><td>110RWX</td></tr><tr><td>c) public access</td><td>1</td><td>$\Rightarrow$</td><td>001</td></tr></table>

- Ask manager to create a group (unique name), say G, and add some users to the group.

- For a file (say game) or subdirectory, define an appropriate access.

owner group public

chmod 761 game

- Attach a group to a file

chgrp G game

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027364.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=g9x6ptWaQL36XZIXx32KRR3dHso%3D&Expires=1778572827' alt='OCR图片'/></div>

## A Sample UNIX Directory Listing

<table border="1"><tr><td>-rw-rw-r--</td><td>1 pbg</td><td>staff</td><td>31200</td><td>Sep 3 08:30</td><td>intro.ps</td></tr><tr><td>drwx----</td><td>5 pbg</td><td>staff</td><td>512</td><td>Jul 8 09.33</td><td>private/</td></tr><tr><td>drwxrwxr-x</td><td>2 pbg</td><td>staff</td><td>512</td><td>Jul 8 09:35</td><td>doc/</td></tr><tr><td>drwxrwx---</td><td>2 pbg</td><td>student</td><td>512</td><td>Aug 3 14:13</td><td>student-proj/</td></tr><tr><td>-rw-r--r--</td><td>1 pbg</td><td>staff</td><td>9423</td><td>Feb 24 2003</td><td>program.c</td></tr><tr><td>-rwxr-xr-x</td><td>1 pbg</td><td>staff</td><td>20471</td><td>Feb 24 2003</td><td>program</td></tr><tr><td>drwx--x--x</td><td>4 pbg</td><td>faculty</td><td>512</td><td>Jul 31 10:31</td><td>lib/</td></tr><tr><td>drwx----</td><td>3 pbg</td><td>staff</td><td>1024</td><td>Aug 29 06:52</td><td>mail/</td></tr><tr><td>drwxrwxrwx</td><td>3 pbg</td><td>staff</td><td>512</td><td>Jul 8 09:35</td><td>test/</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027370.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pZA9VwoM5r6cRHNcWNaID4CVGy4%3D&Expires=1778572827' alt='OCR图片'/></div>

## File-System Structure

- A file system is organized in layers:

- Application layer

- Logical file system

- Physical file system

- Device drivers

- This layered design improves modularity and efficiency.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027376.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kyG3oCzQ0RZ%2Fsm0tptwreFc1vE0%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Control Block (FCB)

- OS maintains FCB per file, which contains many details about the file

- Typically, inode number, permissions, size, dates

- Example

<table border="1"><tr><td>file permissions</td></tr><tr><td>file dates (create, access, write)</td></tr><tr><td>file owner, group, ACL</td></tr><tr><td>file size</td></tr><tr><td>file data blocks or pointers to file data blocks</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027387.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7YsYXbLkV95%2BbCc4rzFAbq0FL9I%3D&Expires=1778572827' alt='OCR图片'/></div>

## File Allocation Method

- An allocation method refers to how disk blocks are allocated for files:

- Contiguous

- Linked

- File Allocation Table (FAT)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027392.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CZ5HyTyQ%2FmmygFEZ6%2FDj3llNhw8%3D&Expires=1778572827' alt='OCR图片'/></div>

## Contiguous Allocation Method

- An allocation method refers to how disk blocks are allocated for files:

Each file occupies set of contiguous blocks

- Best performance in most cases

- Simple - only starting location (block #) and length (number of blocks) are required

- Problems include:

Finding space on the disk for a file,

Knowing file size,

- External fragmentation, need for compaction off-line (downtime) or on-line

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027397.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7t%2FC1qZnpYAKsxnMG8K9TmZ7ue0%3D&Expires=1778572827' alt='OCR图片'/></div>

## Contiguous Allocation (Cont.)

- Mapping from logical to physical (block size =512 bytes)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027402.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pyPYSg0sEPK1ch1VckDNhpwImY8%3D&Expires=1778572827' alt='OCR图片'/></div>

- Block to be accessed = starting address + Q

Displacement into block = R

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027406.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UhH8sF7BWZ060tBxZiFihdnq1H0%3D&Expires=1778572827' alt='OCR图片'/></div>

<div align="center">

directory

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_3_1777968027412.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=a7foEhUiGFnRFJlUxAadp4Usz1Y%3D&Expires=1778572827' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_4_1777968027417.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=L1GThStCt0TyQVXdvyIIsoCKU%2Bc%3D&Expires=1778572827' alt='OCR图片'/></div>

## Contiguous Allocation

- In contiguous allocation, as Blocks are stored sequentially and Address is calculated directly 1 I/O operation is required to allocate a single data block.

- A file is stored using contiguous allocation. How many I/O operations are required to access the 8th block? Direct access $ \rightarrow $ 1 I/O

- A file contains 12 blocks. How many I/O operations are required to read the entire file? Read 12 blocks $ \rightarrow $ 12 I/O

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027423.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VAMN%2Fnheuoah%2BbLdRyPEQxCBsOU%3D&Expires=1778572827' alt='OCR图片'/></div>

## Extent-Based Systems

- Many newer file systems (i.e., Veritas File System) use a modified contiguous allocation scheme

Extent-based file systems allocate disk blocks in extents

An extent is a contiguous block of disks

- Extents are allocated for file allocation

- A file consists of one or more extents

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027435.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=utOOxzaDyW1lbA1XtfAYEMQdiyg%3D&Expires=1778572827' alt='OCR图片'/></div>

## Linked Allocation

Each file is a linked list of blocks

- File ends at nil pointer

- No external fragmentation

- Each block contains pointer to next block

- No compaction, external fragmentation

- Free space management system called when new block needed

- Improve efficiency by clustering blocks into groups but increases internal fragmentation

- Reliability can be a problem

Locating a block can take many I/Os and disk seeks

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027441.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mi%2FByCFltwH5%2BR06d8uaY4uqqpg%3D&Expires=1778572827' alt='OCR图片'/></div>

## Linked Allocation Example

Each file is a linked list of disk blocks: blocks may be scattered anywhere on the disk

Scheme

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027462.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pxFlFQ0O0SrrKYjAKpFDoJOuCKE%3D&Expires=1778572827' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027483.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oAilDrUHN8H27l1itXaMJIwFezE%3D&Expires=1778572827' alt='OCR图片'/></div>

## Linked Allocation

A file has 10 blocks stored using linked allocation. How many I/O operations are needed to access the 6th block? Must traverse first 6 blocks $ \rightarrow $ 6 I/O

- How many I/O operations are required to read the entire file of 8 blocks? $ \rightarrow $ 8 I/O

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027487.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PY7F%2BVURM4KJdyPzZosw7vZDrPk%3D&Expires=1778572827' alt='OCR图片'/></div>

## File-Allocation Table

<div align="center">

directory entry

</div>

start block

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027493.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BHYx%2FPEFno8hfci5%2BZ1IFHojc8Y%3D&Expires=1778572827' alt='OCR图片'/></div>

number of disk blocks

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027498.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=goRryIE34yJBhA9e712uS7dPq7o%3D&Expires=1778572827' alt='OCR图片'/></div>

## Indexed Allocation Method

Each file has an index block containing pointers.

Advantages:

- Supports direct access

- Efficient for large files

## Disadvantages:

- Extra storage overhead

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027513.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JG%2B6GqfYU6iqVsTcleFTJd1h25s%3D&Expires=1778572827' alt='OCR图片'/></div>

## Example of Indexed Allocation

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027521.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=z2Vq4girLwDWlE%2FGE75gj4fSqIo%3D&Expires=1778572827' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_2_1777968027530.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xFVKMJOjBdhZCJM%2BaGIqSkEo4zs%3D&Expires=1778572827' alt='OCR图片'/></div>

## Index Allocation

Step 1 -> Read index block

Step 2 -> Read data block

- A file uses indexed allocation. How many I/O operations are required to access the 4th block?

- Read Index block $ \rightarrow $ 1 I/O

- Read Data block $ \rightarrow $ 1 I/O

## 2 I/Os

- If the index block is already in memory, how many I/O operations are needed? Only data block access $ \rightarrow $ 1 I/O

- A file has 10 blocks. How many I/O operations are required to read the entire file?

- Read Index block $ \rightarrow $ 1 I/O

- Read Data blocks $ \rightarrow $ 10 I/Os 10+1=11 I/Os

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027537.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fL3%2F2Uhs%2BzrxMgjKG%2Fqr6i1AAs0%3D&Expires=1778572827' alt='OCR图片'/></div>

## Example

- A file contains 10 blocks. Calculate I/O operations required to access the 7th block in:

- Contiguous allocation

- Linked allocation

- Indexed allocation

## Answer

- Contiguous: 1 I/O

- Linked: 7 I/Os

- Indexed: 2 I/Os

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027542.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RswEebVzzaC7D2svC0nTs2hpGHo%3D&Expires=1778572827' alt='OCR图片'/></div>

## Modern File Systems

- Modern File Systems are highly reliable and support for large storages.

- Examples include:

- NTFS (Windows)

- ext4 (Linux)

- APFS (macOS)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027546.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YrohDuCsvHuarqSRAoDY62kWS1w%3D&Expires=1778572827' alt='OCR图片'/></div>

## File System Performance

Performance depends on:

- Disk speed

- Allocation method

- Caching mechanisms

- Modern systems use buffer caches to improve efficiency.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027581.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rNuCoH4MDN7hUK0yIYRz9UYjoHA%3D&Expires=1778572827' alt='OCR图片'/></div>

## End of Lecture 8

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027587.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=sYASkY2vK6sXteimyT8cShT6nX0%3D&Expires=1778572827' alt='OCR图片'/></div>

## Weekly plan

Practical : File Management in UNIX

Workshop:

- Summary - File management

- Discussion of Tutorial 8

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027592.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YAs8lWrAzEJe6kWkc76h7W7mgw4%3D&Expires=1778572827' alt='OCR图片'/></div>

Thank You!

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051559547ed93ba1200e4d46%2Fcrop_1_1777968027597.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=U5AO8K%2BLPOVG3e4kIC9MKNG3J2E%3D&Expires=1778572827' alt='OCR图片'/></div>