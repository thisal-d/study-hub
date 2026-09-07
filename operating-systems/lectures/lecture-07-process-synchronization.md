<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923270.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5RDbCLzBjFUeWh6zJDRyuKer6go%3D&Expires=1778572723' alt='OCR图片'/></div>

## Sri Lanka Institute of Information Technology Faculty of Computing

<div align="center">

# Dr.Sanvitha Kasthuriarachchi IT2130 - Operating Systems and System Administration Year 02 and Semester 02

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923325.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zATFvlNO2eynRui1F9c2rjl1X1M%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_3_1777967923331.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lfm0%2B0ijReuy2Toq1iz62OR9ZkE%3D&Expires=1778572723' alt='OCR图片'/></div>

Lecture 07

## Process Synchronization

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923337.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mXHdt%2B9HfR4%2F3IPGzypMXO3eH9c%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923342.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6WpbaJ2VvVMKR%2FlidMW%2F6cAsL%2FI%3D&Expires=1778572723' alt='OCR图片'/></div>

## Outline

- Introduction to Synchronization

- The Critical-Section Problem

- Semaphores

- Classical Problems of Synchronization

- Problems with Semaphores

- Monitors

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923347.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=d76rVj8BW3IAJ8cWFefjqGB0sSQ%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923352.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=od%2FhTFzcazz56eSVSbhMNGSYTRs%3D&Expires=1778572723' alt='OCR图片'/></div>

- Processes are executing concurrently while interrupting the executions of other processes.

- The concurrent access to shared data may result in data inconsistencies.

- Maintaining data consistency requires mechanisms to ensure the orderly execution of cooperating processes.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923357.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=j5Rz2QNTq%2B69iUc6cnGdELut%2Brs%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923363.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0vYW0hnVuz9f3Ja3AkySRg5Lv1w%3D&Expires=1778572723' alt='OCR图片'/></div>

## Data Inconsistency due to Concurrency

## Illustration of the problem:

Suppose that we wanted to provide a solution to the consumer-producer problem that fills all the buffers. We can do so by having an integer counter that keeps track of the number of full buffers. Initially, counter is set to 0. It is incremented by the producer after it produces a new buffer and is decremented by the consumer after it consumes a buffer.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923369.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7Pi2Y3mHQgmpUZeGR9WNpBhbRhU%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923374.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u0IiYX32FkX%2FbCNXtlfLyAkgX8E%3D&Expires=1778572723' alt='OCR图片'/></div>

## Producer - Consumer Illustration

Producer

while (true)

{

    while (counter == BUFFER_SIZE) ;

        /* do nothing */

        buffer[in] = next_produced;

        in = (in + 1) % BUFFER_SIZE;

        counter++;

}

Consumer

while (true)

{

    while (counter == 0) ;

        /* do nothing */

        next_consumed = buffer[out];

        out = (out + 1) % BUFFER_SIZE;

        counter--;

}

counter++ could be implemented as

    register1 = counter

    register1 = register1 + 1

    counter = register1

counter-- could be implemented as

    register2 = counter

    register2 = register2 - 1

    counter = register2

▯ ▯ ▯ ▯ ▯ ▯ ▯

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923380.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=J6GHNsNj21f6O46i0MDxnuztUv8%3D&Expires=1778572723' alt='OCR图片'/></div>

## Producer - Consumer Illustration

- Assume the initial value of count is 5 and producer starts the execution. The producer increments count in its local copy and before the count is updated, the consumer starts. Then the consumer reads an incorrect value to proceed.

- This can be happened in the other way as well. Then the count may have a different value.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923391.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2k3AbFwQtcJLUASVCGsOhAhpnzM%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923397.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tmqZOERqGTFquBwSWl%2FqMfAWcuE%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_3_1777967923403.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wiKXXYQcBGMdvFyJ2oCmbH3jM2U%3D&Expires=1778572723' alt='OCR图片'/></div>

## Race Condition

- This is a situation where several processes access and manipulate the shared data concurrently. Then the outcome of the execution depends on the order in which the access takes place.

- In order to prevent the race condition, it must ensure that only one process at a time can be manipulating the shared data.

- Then the process synchronization applies.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923411.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZXmNbMQUKNBpSXC4RaNsdYPRFOw%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923416.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=T3JFSAHTrb9PrKI9WoUlDweG0%2B4%3D&Expires=1778572723' alt='OCR图片'/></div>

## Critical Section of a Process

- The critical section of a process is a segment of code which the shared data is getting changed.

- The shared data includes common variables, shared buffers shared tables, shared files etc.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923422.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nNcjQY8W0VsCktfefXERNH%2BPIzI%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923427.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rpctE9%2Fmk7YiujiThijOM8rDv9s%3D&Expires=1778572723' alt='OCR图片'/></div>

## Critical Section Problem

- Each process must ask permission to enter critical section in entry section, may follow critical section with exit section, thenremainder section

- General structure of process $ P_{1} $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923433.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zvQp0O7wBafih7Zgs6P4RAxEm7o%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923440.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8KafSfwTniSKAMLa0iCucpj4OqM%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_3_1777967923446.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Wfn9FASRD3U3t9iAKcXumOXgixM%3D&Expires=1778572723' alt='OCR图片'/></div>

## Critical Section Problem

- Consider a system with n processes $ \{P_{0}, P_{1}, \dots, P_{n-1}\} $ , where each process has a critical section.

- If more than one process executes its critical section at the same time, they may concurrently access and modify shared data. This situation is known as the critical section problem.

- If the critical section problem is not handled properly, it can lead to data inconsistency.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923453.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6D%2F80Qx6E33tGiq4RaDFb6ibk0w%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923458.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=71kacwEGo%2BXiw0wPdKRunixa%2FZ0%3D&Expires=1778572723' alt='OCR图片'/></div>

## Solution to Critical-Section Problem

Mutual Exclusion - If process $ P_{i} $ is executing in its critical section, then no other processes can be executing in their critical sections.

2 Progress- If no process is executing in its critical section and there exist some processes that wish to enter their critical section, then the selection of the processes that will enter the critical section next cannot be postponed indefinitely.

3 Bounded Waiting - A bound must exist on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923463.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Hyi%2FrOw7oFSAp9FuFMCy93mbs6I%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923469.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kIbBJDjwXwptbtuw00z%2FhE4fPOs%3D&Expires=1778572723' alt='OCR图片'/></div>

## How the Critical Section Problem can be Avoided

## Simplest solution:

Each process disables all interrupts just after entering its critical section and re-enables them just before leaving it. However, enabling/disabling interrupts is a privileged instruction.

## Solution in kernel mode:

- Preemptive kernel: a process can be preempted while running in kernel mode. More responsive and suitable for real-time systems.

- Otherwise, the kernel is non-preemptive kernel: allows the process to run until it exits kernel mode, blocks, or voluntarily yields CPU. Non-preemptive kernel is free from race conditions.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923474.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=q1kjeNmBG0AaZ1zFvVpbvT%2FWmps%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923479.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BTyZlKhK63KkS2vADKe32HUHluY%3D&Expires=1778572723' alt='OCR图片'/></div>

## Solutions for Critical Section Problem

- There are three software-based solutions and two hardware-based solutions.

<table border="1"><tr><td>Software based solutions</td><td>Hardware based solutions</td></tr><tr><td>Algorithm1- for two processes</td><td>Test and Set Solution</td></tr><tr><td>Algorithm2- for two processes</td><td>Swap Solution</td></tr><tr><td>Algorithm3-Peterson&#x27;s solution(for two processes):Combination of Algorithms1 and2</td><td></td></tr><tr><td>Bakery Algorithm- for multiple processes</td><td></td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923485.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nYwvqLA1mu%2B0ZbHE8vIjfmxxIgE%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923490.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Nfg7j7O2FOMtrsnOYqNReIz1ni4%3D&Expires=1778572723' alt='OCR图片'/></div>

## ALGORITHM 1: Software-based Solution for two processes

var turn: (i, j); // Initially turn = i; turn = i means Pi can enter its CS

<table border="1"><tr><td>Process $P_{i}$</td><td>Process $P_{j}$</td></tr><tr><td>repeat</td><td>repeat</td></tr><tr><td>while turn≠i do no-op;</td><td>while turn≠j do no-op;</td></tr><tr><td>Critical Section</td><td>Critical Section</td></tr><tr><td>turn=j;</td><td>turn=i;</td></tr><tr><td>Remainder Section</td><td>Remainder Section</td></tr><tr><td>until false;</td><td>until false;</td></tr></table>

The Busy waiting condition occurs

- Busy waiting: continuously testing a variable waiting for some value to appear

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923497.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DYfx5apZ3f4z0o9dCyAAEfUVn0I%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923502.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6OmsL4hNrUa4hVYRt%2B7D8aMoChc%3D&Expires=1778572723' alt='OCR图片'/></div>

## ALGORITHM 2: Software-based Solution for two processes

## Initially $flag[i] = flag[j] = false; \quad flag[i] = true$ means $P_{i}$ wants to enter its CS

Initially flag[i] = flag[j] = false; flag[i] = true means $ P_{i} $ wants to enter its CS

Process $ P_{i} $

repeat

flag[i] = true;

while flag[j] do no-op;

Critical Section

flag[i] = false;

Remainder Section

until false;

Process $ P_{j} $

repeat

flag[j] = true;

while flag[i] do no-op;

Critical Section

flag[j] = false;

Remainder Section

until false;

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923507.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Wy5ejCvvsk2Zkqp7xHrdSI68qDA%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923515.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Nu3hk9l7LM6BNi2BHHgDmoiUku0%3D&Expires=1778572723' alt='OCR图片'/></div>

## ALGORITHM 3: Software-based Solution for two processes

## Peterson's solution: Combine shared variables of Algorithms 1 and 2

Process $ P_{i} $

repeat

flag[i] = true;

turn = j;

while flag[j] and turn = j do no-op;

Critical Section

flag[i] = false;

Remainder Section

until false;

Process $ P_{j} $

repeat

flag[j] = true;

turn = i;

while flag[i] and turn = i do no-op;

Critical Section

flag[j] = false;

Remainder Section

until false;

▯ ▯ ▯ ▯ ▯ ▯

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923521.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3PMBL8EdzTQRObqNcfBwPY0JAr0%3D&Expires=1778572723' alt='OCR图片'/></div>

## Bakery Algorithm - Software solution for n processes

Process $ P_{i} $

repeat

choosing[i] = true;

number[i] = max (number[0], number[1], ..., number[n-1]) +1;

choosing[i] = false;

for $ j=0 $ to $ n-1 $ do

begin

while choosing[j] do no-op;

while number[j] $ \neq 0 $ and (number[j], j) $ < $ (number[i], i) do no-op;

end;

critical section

number[i] = 0;

remainder section

until false

- Before entering the critical section, each process receives a number.

- The holder of the smallest number enters the critical section.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923527.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0sR1TDkNfCWh50dkT45ogy873PE%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923533.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RuMvbOqZ2IGiA%2BxkJmzezOOaHas%3D&Expires=1778572723' alt='OCR图片'/></div>

## Synchronization Hardware

- Use special hardware instructions.

- Test-and-set

- Swap

- These are atomic instruction - They cannot be interrupted until it completes its execution

// Test and set the content of a word atomically

function Test-and-Set (var boolean: target)

begin

Test-and-Set = target;

target = true;

end;

// Swapping instruction atomically

procedure Swap (var boolean: a, b)

var boolean: temp;

begin

temp = a;

a = b;

b = temp;

end;

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923538.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dl1sQpKlXl61gXHgXgLkT9sD9%2FA%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923544.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EXIrmCTd%2Fxt9vzif8MRDZPR6u6A%3D&Expires=1778572723' alt='OCR图片'/></div>

## Test-and-Set

var boolean: lock; lock is a shared variable, initially set to false.

Repeat // Process $ P_{i} $

while Test-and-Set (lock) do no-op;

Critical Section

lock = false;

Remainder Section

until false;

Repeat // Process $ P_{j} $

while Test-and-Set (lock) do no-op;

Critical Section

lock = false;

Remainder Section

until false;

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923549.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1N5YyywnPCiAgouXr%2BUI%2FSCGO%2FU%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923555.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WMaYJu6%2FxgWgLS4ncu00pTMRBfE%3D&Expires=1778572723' alt='OCR图片'/></div>

## Synchronization Hardware

Swap

Repeat // Process $ P_{i} $

key = true;

repeat

Swap (lock, key);

until key = false;

Critical section

lock = false;

Remainder section

until false;

Repeat // Process $ P_{j} $

key = true;

repeat

Swap (lock, key);

until key = false;

Critical section

lock = false;

Remainder section

until false;

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923560.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FSKRMonrri8a0aUvIFDGJHZOxbI%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923565.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=f8TJefic3x%2BExoSnPuapaS51Ss8%3D&Expires=1778572723' alt='OCR图片'/></div>

## Semaphore

- This is a synchronization tool that provides more sophisticated way for process to synchronize their activities.

- Semaphore is an integer variable (S)

- Can only be accessed via two indivisible (atomic) operations

- wait()

- signal()

- Definition of the wait() operation Definition of the signal() operation

wait(S) {

while (S <= 0)

; // busy wait

S--;

}

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923586.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EnGINWYfwHIo5XDpC8PvMO0QSLk%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923591.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xNbmzMAekXGho1vi45Nt61RXhcA%3D&Expires=1778572723' alt='OCR图片'/></div>

## Semaphore Usage

- Counting semaphore - integer value can range over an unrestricted domain

- Binary semaphore - integer value can range only between 0 and 1 (Same as a mutex lock)

- Consider P1 and P2 that require S1 to happen before S2

- Create a semaphore "synch" initialized to 0

P1:

$ S_{1} $ ;

signal (synch) ;

P2:

wait(synch);

S2;

- Can implement a counting semaphore S as a binary semaphore

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923596.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XMzdX%2Be2pKyvT1OSLIifMAZwpLY%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923601.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1DhTRzd0z9WKbGUvHlWnCd6I%2FOg%3D&Expires=1778572723' alt='OCR图片'/></div>

## Semaphore Implementation

- Must guarantee that no two processes can execute the wait() and signal() on the same semaphore at the same time.

- Semaphores are implemented in two methods.

- Spinlock - uses busy waiting

- Block and wakeup - block the execution and wait in a semaphore list. wait.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923607.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=76KBuKduDqxU%2Bbi%2FWe%2BBIJkCIYo%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923612.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eruE8YvF%2Fty%2FOuuIeaTMq%2F1zXGw%3D&Expires=1778572723' alt='OCR图片'/></div>

## Classical Problems of Synchronization

- Classical problems used to test newly-proposed synchronization schemes:

- Bounded-Buffer Problem

- Readers and Writers Problem

- Dining-Philosophers Problem

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923619.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BvQhocjDVQPtuzEDQGxeGrNguGU%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923625.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HYpn4v5%2FedD7HomkbwIrzI3FAxU%3D&Expires=1778572723' alt='OCR图片'/></div>

## Bounded-Buffer Problem

- n buffers, each can hold one item.

- Semaphore mutex initialized to the value 1.

- Semaphore full initialized to the value 0.

- Semaphore empty initialized to the value n.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923631.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uigvjVQYBXeK2PUFrTIfDPdhskc%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923636.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8zdLNEi9eVpDOhB9xFwZb79loyg%3D&Expires=1778572723' alt='OCR图片'/></div>

## Bounded Buffer Problem (Cont.)

- The structure of the producer process

```c

do {

    ...

    /* produce an item in next_produced */

    ...

    wait(empty);

    wait(mutex);

    ...

    /* add next produced to the buffer */

    ...

    signal(mutex);

    signal(full);

} while (true);

```

□ ▲ ▲ ▲ ▲

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923642.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SJlXNYl%2B%2BdGHPUHyknxOVfyVc50%3D&Expires=1778572723' alt='OCR图片'/></div>

## Bounded Buffer Problem (Cont.)

- The structure of the consumer process

Do {

    wait(full);

    wait(mutex);

    ...

    /* remove an item from buffer to next_consumed */

    ...

    signal(mutex);

    signal(empty);

    ...

    /* consume the item in next consumed */

    ...

} while (true);

▯ ▯ ▯ ▯ ▯ ▯ ▯

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923647.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NkRwa4oiitds6vqkAwYwamiHMaM%3D&Expires=1778572723' alt='OCR图片'/></div>

## Readers-Writers Problem

- Multiple readers want to read shared data and multiple writers want to write (modify) the same shared data.

- Many readers can read at the same time.

- Only one writer can write at a time.

- When a writer is writing, no reader can read.

- Two writers cannot write at the same time.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923653.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=G9SwYbWrS9jqyQRN942EkkMuBCY%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923660.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dr9V0D2OtcttXEhkdGtS0wRkK9w%3D&Expires=1778572723' alt='OCR图片'/></div>

## Readers-Writers Problem (Cont.)

## Shared Data

- Data set

- Semaphore `rw_mutex` initialized to 1

- Semaphore `mutex` initialized to 1

- Integer **read_count** initialized to 0

- The structure of a writer process

```c

do {

    wait(rw_mutex);

    ...

    /* writing is performed */

    ...

    signal(rw_mutex);

} while (true);

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923668.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rn%2FonUNajXq6sLMDRMYDaqSyPuI%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923687.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zsfm%2BV5bXryS%2F4nM1oRVlSlpmD4%3D&Expires=1778572723' alt='OCR图片'/></div>

## Readers-Writers Problem (Cont.)

- The structure of a reader process

```c

do {

    wait(mutex);

    read count++;

    if (read_count == 1)

        wait(rw_mutex);

    signal(mutex);

    ...

    /* reading is performed */

    ...

    wait(mutex);

    read count--;

    if (read_count == 0)

        signal(rw_mutex);

    signal(mutex);

} while (true);

```

▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923692.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rTFMH8d20PIi5brF4hO6%2B3gD21M%3D&Expires=1778572723' alt='OCR图片'/></div>

## Dining-Philosophers Problem

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923698.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QyPj3s3cySLt%2B7k0aSJB%2FejeI6E%3D&Expires=1778572723' alt='OCR图片'/></div>

- Philosophers spend their lives alternating thinking and eating

- All philosophers pick up their left fork at the same time.

- Each philosopher waits for the right fork, which is already held by their neighbor.

- No philosopher can eat

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923703.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uccd5zVRFaZivUNKW9woPhpkE%2BI%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_3_1777967923708.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=B43ARFfNO3FbbGS%2FjH09UtOJjU8%3D&Expires=1778572723' alt='OCR图片'/></div>

## Dining-Philosophers Problem Algorithm

- The structure of Philosopher i:

```c

do {

    wait (chopstick[i] );

    wait (chopStick[ (i + 1) % 5] );

```

// eat

```c

signal (chopstick[i] );

signal (chopstick[ (i + 1) % 5] );

```

// think

} while (TRUE);

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923714.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Gsg7Sw0VSNfO702JsW0nampqcCs%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923724.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=U2D7NbSE1XQKUKznufFP5JPzlUs%3D&Expires=1778572723' alt='OCR图片'/></div>

## Problems with Semaphores

- Incorrect use of semaphore operations:

- signal(mutex) ...wait(mutex)

- wait(mutex) ...wait(mutex)

- Omitting of wait(mutex) or signal(mutex) (or both)

- Deadlock and starvation are possible.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923730.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Gry4BqiqDQL3U9i9wKoa3FdAo3U%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923736.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=J%2FRjcFvqARxP4f9jYF5vv7wKPXk%3D&Expires=1778572723' alt='OCR图片'/></div>

## Monitors

- A high-level abstraction that provides a convenient and effective mechanism for process synchronization

- Abstract data type, internal variables only accessible by code within the procedure

- Only one process may be active within the monitor at a time

- But not powerful enough to model some synchronization schemes

```javascript

monitor monitor-name

{

  // shared variable declarations

  procedure P1 (...) { ... }

  procedure Pn (...) {...}

  Initialization code (...) { ... }

}

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923742.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BsQK8PhTlggZdkJWYL0cEPxpyTk%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923748.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=p9v%2F7HE8QVXJqtLWJjEJbqKmr%2Fc%3D&Expires=1778572723' alt='OCR图片'/></div>

## End of Lecture 7

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923753.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6vqCkLcXvqKpsdWDOBpFSDFFVK4%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923760.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=w29Ijz4S%2Bc293u%2F2GqfL1SdXRTI%3D&Expires=1778572723' alt='OCR图片'/></div>

- Practical: Shared Memory implementation in C

- Workshop:

- Summary - Process Synchronization in OS

- Discussion of Tutorial 7

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923771.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tON7l70OND7tlO0%2FPjrk297kj8w%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923776.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hlfWPzZVTXzy1EzAbpMbVQWVK5A%3D&Expires=1778572723' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_1_1777967923781.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ziFq41WeDjadmQuxQzfRs4pNctw%3D&Expires=1778572723' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155820d73a3dc714cd483c%2Fcrop_2_1777967923786.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Pf4SFLGlL%2BUNjVzOqLpxcvqDa3w%3D&Expires=1778572723' alt='OCR图片'/></div>