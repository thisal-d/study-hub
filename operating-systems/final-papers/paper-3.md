
<div style='text-align: center;'>

# IT2130 Operating Systems and System Administration Year 2, Semester 2

# Final Examination

</div>

## Question 1

a. Briefly explain the following terms in relation to the process synchronization:

i. Mutex Lock

ii. Monitor

b. List the three requirements that must be satisfied by solution to critical section problem.

c. List the names of two atomic instructions.

d. Consider the system which manages blood inventory for a hospital with 8 wards and more than 300 patients. At each ward, nurses issue blood units to patients. Each blood unit issued will be recorded in a shared file named BloodInventoryLog.

<div style='text-align: center;'><img src="./assets/paper-3/q1.png"/></div>

i. Find the critical section of the above blood inventory system.

ii. Design a solution for the above critical section problem.

## Question 2

a. Briefly explain the following terms in relation to the memory management:

i. Execution time address binding

ii. Base register

b. Consider the following contiguous memory allocation system with the free memory segments of A, B, C, D with the size of 150KB, 400KB, 250KB and 200KB respectively.

i. List the main two problems in contiguous memory allocation.

ii. If a new process has introduced into the system with the size of 300KB, briefly explain how does the operating system allocates the memory

1. if the compaction is used

2. if the paging is used

Note: You can make any assumption in designing the paging solution

iii. Which solution (compaction or paging) is used by the modern operating systems?

iv. Why does a system need a page table in paging system?

c. A computer system has 128MB physical memory and 1GB virtual memory, if the operating system uses 4KB page in paging system.

i. Find the number of pages of the system.

ii. Find the number of frames of the system.

iii. How many bits are allocated to the page number, frame number and offset?

iv. How many entries are there in the page table?

<div style='text-align: center;'><img src="./assets/paper-3/q2.png"/></div>

## Question 3

a. List the four necessary conditions to have a deadlock in a system.

b. Propose two solutions to prevent the deadlock by deny the mutual exclusion condition.

c. How does the modern general purpose operating system solve the deadlock problem?

d. Consider the following resource allocation graph for a system

i. Why do we draw the resource allocation graph?

ii. Does the system is in a deadlock situation? Justify your answer.

<div style='text-align: center;'><img src="./assets/paper-3/q3.png"/></div>

e. Consider the following snapshot of a system:

<table border="1"><tr><td>Process</td><td>Allocation</td><td>Maximum Needs</td><td>Available</td></tr><tr><td>A</td><td>1</td><td>4</td><td>3</td></tr><tr><td>B</td><td>4</td><td>7</td><td></td></tr><tr><td>C</td><td>2</td><td>6</td><td></td></tr><tr><td>D</td><td>3</td><td>5</td><td></td></tr></table>

Answer the following questions using the banker's algorithm:

i. What is the content of the matrix Need?

ii. Is the system in a safe state?

iii. If a request from process B arrives for 2 resources, can the request be granted immediately?

## Question 4

a. Briefly explain the following terms in relation to the virtual memory management:

i. Demand Paging

ii. Page Fault

b. List all steps that must be taken by the operating system when there is a page fault.

c. Compare and contrast the virtual address and physical address.

d. List the two hardware resources needed for the implementation of virtual memory system.

e. Consider the following page reference string: 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

How many page faults would occur for the following replacement algorithms, assuming three, four frames? Remember all frames are initially empty, so your first unique pages will all cost one fault each.

i. LRU replacement

ii. FIFO replacement
