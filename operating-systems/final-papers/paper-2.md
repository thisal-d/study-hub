
<div style='text-align: center;'>

# IT2130 Operating Systems and System Administration Year 2, Semester 2

# Final Examination

</div>

## Question 1

a. Briefly explain the following terms in relation to the process synchronization:

i. Race Condition

ii. Spinlock

b. List the three requirements that must be satisfied by solution to critical section problem.

c. List the names of two atomic instructions.

d. Consider the system which manages online seat reservations for a cinema complex with 5 booking counters and more than 200 customers. At each booking counter, a customer selects a seat and confirms a booking. Each confirmed booking will update a shared record named SeatReservationDB.

<div style='text-align: center;'><img src="./assets/paper-2/q1.png"/></div>

i. Find the critical section of the above booking system.

ii. Design a solution for the above critical section problem.

## Question 2

a. Briefly explain the following terms in relation to the memory management:

i. Load time address binding

ii. Limit register

b. Consider the following contiguous memory allocation system with the free memory segments of A, B, C, D with the size of 200KB, 500KB, 100KB and 400KB respectively.

i. List the main two problems in contiguous memory allocation.

ii. If a new process has introduced into the system with the size of 350KB, briefly explain how does the operating system allocates the memory

1. if the compaction is used

2. if the paging is used

Note: You can make any assumption in designing the paging solution

iii. Which solution (compaction or paging) is used by the modern operating systems?

iv. Why does a system need a page table in paging system?

c. A computer system has 512MB physical memory and 4GB virtual memory, if the operating system uses 8KB page in paging system.

i. Find the number of pages of the system.

ii. Find the number of frames of the system.

iii. How many bits are allocated to the page number, frame number and offset?

iv. How many entries are there in the page table?

<div style='text-align: center;'><img src="./assets/paper-2/q2.png"/></div>

## Question 3

a. List the four necessary conditions to have a deadlock in a system.

b. Propose two solutions to prevent the deadlock by deny the circular wait condition.

c. How does the modern general purpose operating system solve the deadlock problem?

d. Consider the following resource allocation graph for a system

i. Why do we draw the resource allocation graph?

ii. Does the system is in a deadlock situation? Justify your answer.

<div style='text-align: center;'><img src="./assets/paper-2/q3.png"/></div>

e. Consider the following snapshot of a system:

<table border="1"><tr><td>Process</td><td>Allocation</td><td>Maximum Needs</td><td>Available</td></tr><tr><td>P</td><td>2</td><td>7</td><td>2</td></tr><tr><td>Q</td><td>3</td><td>6</td><td></td></tr><tr><td>R</td><td>1</td><td>5</td><td></td></tr><tr><td>S</td><td>4</td><td>8</td><td></td></tr></table>

Answer the following questions using the banker's algorithm:

i. What is the content of the matrix Need?

ii. Is the system in a safe state?

iii. If a request from process Q arrives for 1 resource, can the request be granted immediately?

## Question 4

a. Briefly explain the following terms in relation to the virtual memory management:

i. Thrashing

ii. Page Buffering Algorithm

b. List all steps that must be taken by the operating system when there is a page fault.

c. Compare and contrast the virtual address and physical address.

d. List the two hardware resources needed for the implementation of virtual memory system.

e. Consider the following page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2

How many page faults would occur for the following replacement algorithms, assuming three, four frames? Remember all frames are initially empty, so your first unique pages will all cost one fault each.

i. LRU replacement

ii. FIFO replacement
