<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968122855.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1x6T%2BwDPGcr5r%2B0%2BN7u2C9PSUys%3D&Expires=1778572922' alt='OCR图片'/></div>

## Sri Lanka Institute of Information Technology Faculty of Computing

<div align="center">

# Prof.Sanvitha Kasthuriarachchi IT2130 - Operating Systems and System Administration Year 02 and Semester 02

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968122922.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZGie6Z74OlGwxtTN7DLyS8b14JE%3D&Expires=1778572922' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968122927.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=j73LYo%2BGxEG%2FNmLWw4OgQ2PQXbs%3D&Expires=1778572922' alt='OCR图片'/></div>

Lecture 09

## Introduction to Deadlock

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968122934.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cmHCFkp4UTglIsuySL%2B1MazSOXs%3D&Expires=1778572922' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968122938.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WQbs5UILWVMBqQY5gazb%2FUsRQC0%3D&Expires=1778572922' alt='OCR图片'/></div>

- Several processes may compete for a finite number of resources, and some of them may wait for the resources forever because the resources are held by other waiting processes.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968122944.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7OFyd45plIf9vy4P2ucCiCtcTg8%3D&Expires=1778572922' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968122968.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mi90LZhZBzX3dhTASoN25qrwTtM%3D&Expires=1778572922' alt='OCR图片'/></div>

## System Model

- Resources are partitioned into several types, each consists of some number of identical instances.

- Identical: allocation of any instance of the type will satisfy process's request.

- Resources may be physical resources (printers, tape drives, CPU cycles), or logical resources (files, semaphores, and monitors).

- A pre-emptible resource is one that can be taken away from a process with no ill effect to the process; e.g., memory.

- A non-preemptible resource is one that cannot be taken away from its user since it will make the user fails; e.g., printers.

- In general, potential deadlocks involve this resource type.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968122973.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1aVHMCfDCzc81cCcu%2BtxotG2toI%3D&Expires=1778572922' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968122986.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=k5HCvrdc4qfuq3SGl4S4sOwfYvA%3D&Expires=1778572922' alt='OCR图片'/></div>

- Each process uses a resource as follows:

- Request the resource; a process must wait if the resource is being used by another process.

- Use the resource; e.g., the process can print on the printer.

- Release the resource.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968122991.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zcvmVieDPebNzZ9HmsuVc0aVAJM%3D&Expires=1778572922' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968122996.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2bmYN4eacNGNPy8W0pHVM%2B%2BSQZg%3D&Expires=1778572923' alt='OCR图片'/></div>

## Necessary Conditions for Deadlock

Four conditions must hold for a deadlock to occur:

Mutual exclusion condition. Only one process at a time can use the resource.

2 Hold and wait condition. A process holding at least one resource is waiting to acquire additional resources held by other processes.

No pre-emption condition. A resource can be released only voluntarily by the process holding it after that process has completed its task.

Circular wait condition. There exists a set $ \{P_{0}, P_{1}, \dots, P_{n}\} $ of waiting processes such that $ P_{0} $ is waiting for a resource held by $ P_{1}, P_{1} $ for one held by $ P_{2}, \dots $ , and $ P_{n} $ is waiting for a resource held by $ P_{0}. $

Note: the four conditions are not completely independent, e.g., the circular-wait condition implies the hold-and-wait condition.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123002.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hfWhoqrEzAzx3DLciZ85rz3y2tQ%3D&Expires=1778572923' alt='OCR图片'/></div>

## Deadlock Modelling

- Deadlocks can be described more precisely in terms of a directed graph $ G (V, E) $ . This is called System resource-allocation graph.

- $ V $ is partitioned into two types:

- Set of processes in the system: $ P=\{P_{1}, P_{2}, \dots, P_{n}\} $

- Set of all resource types in the system: $ R=\{R_{1},R_{2},\ldots,R_{n}\} $

- Request edge - directed edge $ P_{i} \rightarrow R_{j} $

- Process $ P_{i} $ requests an instance of resource $ R_{j} $

- Assignment edge - directed edge $ R_{j}\rightarrow P_{i} $

- An instance of resource $ R_{j} $ has been allocated to process $ P_{i} $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123008.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5wFWxsL9wz5KXf7F6xvOAskOI4Y%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123014.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3fPkuOi8ir%2FtBKIysILSAiB2RJA%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123025.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JJ4CEbDliSY41rwDEnIwd8O2PGE%3D&Expires=1778572923' alt='OCR图片'/></div>

## Model Symbols

- Process: O

Resource type with 4 instances:

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123032.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zTxjOgJg5pN8MX4yZijpgnL4z08%3D&Expires=1778572923' alt='OCR图片'/></div>

- $ P_{i} $ requests $ R_{j} $ :

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123038.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=m8%2BP2R%2FsR2LqcSP5FX%2FbQ1iPYuw%3D&Expires=1778572923' alt='OCR图片'/></div>

$ P_{i} $ uses $ R_{j} $ :

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123043.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=C5jyfoXlMbzkx3t3pVYBO%2FIjm8I%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_4_1777968123048.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Hbmr70An5RbTLRxiLSMyvxQBH4s%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_5_1777968123055.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Z%2B5zGzG5WKKdPYV30lnxbImXkKk%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_6_1777968123062.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=11zhgUGTM7R46vXApodpLxWHo%2Fg%3D&Expires=1778572923' alt='OCR图片'/></div>

## Resource Allocation Graphs and Deadlocks

- If the graph contains no cycles, no process in the system is deadlocked.

- If the graph contains a cycle, deadlock may exist:

- If each resource type has one instance, cycle means deadlock.

- If each resource type has several instances, cycle is necessary but not sufficient condition for deadlock.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123066.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4TWuvleJ%2BHIxSCBKxZ68qNOF7Ko%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123080.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RjEeKuWsArAdgqjYPr9nFHwX%2F8A%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123086.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bNtQfVODn35gMGf8dCqIoR18Ro4%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123091.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TQFGonI583s1zKjyM1KIbLjIJjw%3D&Expires=1778572923' alt='OCR图片'/></div>

- A resource allocation graph with no cycles. Therefore, no deadlocks.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123103.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YSqG31FFlnWDZy5IY4%2FDp0qtAWA%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123126.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CohDENVbPqmW%2BYU4pWnhWQRaNUU%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123131.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pYRHUWUk41SuMssc3whHkyM3R%2BI%3D&Expires=1778572923' alt='OCR图片'/></div>

- A resource allocation graph with a cycle and a deadlock.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123136.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=U6KC1dEmrW4DjOQF6jvJrc2MNSg%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123142.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pIdmF%2F1IrVE3UbGFuwrivmgmXHA%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123146.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Y5Bflx9haQnEoOHYPUHqemZ3ef8%3D&Expires=1778572923' alt='OCR图片'/></div>

- A resource allocation graph with a cycle but no deadlock.

- $ P_{4} $ can release $ R_{2} $ which gets allocated to $ P_{3} $ , breaking the cycle.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123152.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=I%2F3R3LK5AJsTd8H3wqPQyTzd3WM%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123157.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c6kbNSo%2BFXlJ6LGnGZF3v%2Fc7%2Fes%3D&Expires=1778572923' alt='OCR图片'/></div>

## Three Methods for Handling Deadlock

- Use a protocol to ensure that the system will never reach deadlock

- Using deadlock prevention and/or deadlock avoidance techniques

- Allow the system to enter a deadlock state and then recover

- Needs deadlock detection and deadlock recovery algorithms

- Ignore the problem and pretend that deadlocks never occur in the system

- Used by most OSs, including UNIX

- Also called the ostrich algorithm

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123164.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=v%2F0%2Brzy4mUNdAz3mtV7sjm2WEWg%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123182.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NL8h%2F%2Frm3OezPdPJ4lVdplOzEto%3D&Expires=1778572923' alt='OCR图片'/></div>

## Deadlock Prevention

Use a set of methods to ensure that any one of the four deadlock conditions cannot hold:

## 1 Deny mutual exclusion

- Processes are sharing the resources.

## 2 Deny hold and wait

- Must guarantee that whenever a process requests a resource, it does not hold any other resources.

- Each process is granted all resources before it starts.

- If a process needs more resources, release all resources before requesting new ones.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123186.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eFzsJsjGV44CU%2FSYzmDYniDBsSY%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123191.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=W9OrNQUYai54v8Ng4sHjRhp9Dio%3D&Expires=1778572923' alt='OCR图片'/></div>

## $\textcircled{3}$ Prevent no pre-emption (i.e., allow pre-emption)

- When a process holding some resources requests other resources that cannot be immediately allocated, it must release all resources currently being held.

## 4 Deny circular wait

- All resource types are ordered, e.g.,

- F (card reader) = 1 F (disk drive) = 5

- F(tape drive) = 7 F(printer) = 12

- Each process must request resources in increasing order.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123196.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ALXqljlVBjSIGZQb1Ta806XF%2Fi0%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123201.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AbdJQs0HlNXF3KN8GSxetha%2BWrQ%3D&Expires=1778572923' alt='OCR图片'/></div>

- The deadlock-avoidance algorithm dynamically examines the resource-allocation state to ensure that there can never be a circular-wait condition.

- A resource-allocation state is defined by:

- The number of available and allocated resources, and

- The maximum demands of the processes.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123206.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xpEeJ1fiKReGmzziDa75fnJqJvU%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123213.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=02A59yFxLcK2ZJww%2FcROQoseHaU%3D&Expires=1778572923' alt='OCR图片'/></div>

## Safe State

- When a process requests an available resource, the system checks if its allocation keeps the system in safe state.

- The system is in safe state if there exists a safe sequence of all processes.

- A sequence $ \langle P_{1}, P_{2}, \dots , P_{n} \rangle $ is safe if, for each $ P_{i} $ , the resources requested by $ P_{i} $ can be allocated from the currently available resources + resources held by all $ P_{j} $ , with j<i.

- If $ P_{i} $ 's resource needs are not immediately available, $ P_{i} $ waits until all $ P_{j} $ have finished.

- When all $ P_{j} $ are finished, $ P_{i} $ obtains the needed resources, executes, returns the allocated resources, and terminates.

- When $ P_{i} $ terminates, $ P_{i+1} $ can obtain its needed resources, and so on.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123222.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UT7Agnp5bTCgZ47AcSA2WASxw98%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123234.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RwW8AK37eKldu8zV2vPPJzze7wE%3D&Expires=1778572923' alt='OCR图片'/></div>

## Example

Consider a system with 12 resources of the same type, and 3 processes:

<table border="1"><tr><td></td><td>Maximum needs</td><td>Allocation</td><td>Current need</td></tr><tr><td>$P_{0}$</td><td>10</td><td>5</td><td>5</td></tr><tr><td>$P_{1}$</td><td>4</td><td>2</td><td>2</td></tr><tr><td>$P_{2}$</td><td>9</td><td>2</td><td>7</td></tr></table>

- At time $ t_{0} $ , available resource $ = 3 $ , and the system is in safe state.

- There is a safe sequence $ \langle P_{1}, P_{0}, P_{2} \rangle. $

- What if at $ t_{1} $ one more resource is allocated to process $ P_{2} $ ?

- The system is in unsafe state

- deadlock can occur.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123239.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pVIRQKYOS4MDrv1S9zCeAgdZrrs%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123243.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aFiuwmnMNjr7gTcqb6YQkQ20%2FC8%3D&Expires=1778572923' alt='OCR图片'/></div>

## Resource-Allocation Graph Algorithm

- Claim edge $ P_{i}\rightarrow R_{j} $ indicates that process $ P_{i} $ may request resource $ R_{j} $ . It is represented by a dashed line.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123249.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3pzzxJgRcO0mOXStlvnApGgbxVM%3D&Expires=1778572923' alt='OCR图片'/></div>

- Claim edge converts to a request edge when a process requests a resource.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123254.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5Li4j%2Fs6TVzYgVAx5Mx3cpQFUxw%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123258.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=G0GU2YqdKTurpMMCmu%2BQUzx93Vw%3D&Expires=1778572923' alt='OCR图片'/></div>

## Example

- When a resource is released by a process, assignment edge converts to a claim edge

- Resources must be claimed a priori in the system

- Need a cycle detection algorithm.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123264.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZuXEvIsUgaHSBe2YycLG7U%2FUfbk%3D&Expires=1778572923' alt='OCR图片'/></div>

- This algorithm can only be used for systems comprising resource types with single instance.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123269.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RMvth73C%2BkdmTjxe5J7rHBt%2FlVw%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123286.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mRyu4jEg2hVQx3uitblaAlVJvFo%3D&Expires=1778572923' alt='OCR图片'/></div>

## Banker's Algorithm

- The algorithm for a system comprising resource types with multiple instances.

- Each process must a priori claim maximum number of instances of each resource type that it may need.

- When a process requests a resource:

- It may have to wait (if resource allocation may lead to unsafe state) until some other process releases enough resources.

- When a process gets all its resources:

- It must return them in a finite amount of time.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123299.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wQ7HTJfLxthqXu%2F%2FMACFH5jpezQ%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123305.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=L96wlgSz85IKtv9Ld8y88q%2FYoPs%3D&Expires=1778572923' alt='OCR图片'/></div>

## Example of Banker's Algorithm

- 5 processes $ P_{0} $ through $ P_{4} $; 3 resource types A (10 instances), B (5 instances), and C (7 instances).

- Snapshot at time $ T_{0} $:

$$
\begin{array}{c c c c c c c c c c c c c c c c c c c c c c c c c c c} & \text {A} & \text {B} & \text {C} & \text {A} & \text {B} & \text {C} & \text {A} & \text {B} & \text {C} & \text {A} & \text {B} & \text {C} & \text {A} & \text {B} & \text {C} \\ P _ {0} & 0 & 1 & 0 & 7 & 5 & 3 & 3 & 3 & 2 & 7 & 4 & 3 \\ P _ {1} & 2 & 0 & 0 & 3 & 2 & 2 & & & & 1 & 2 & 2 \\ P _ {2} & 3 & 0 & 2 & 9 & 0 & 2 & & & & 6 & 0 & 0 \\ P _ {3} & 2 & 1 & 1 & 2 & 2 & 2 & & & & 0 & 1 & 1 \\ P _ {4} & 0 & 0 & 2 & 4 & 3 & 3 & & & & 4 & 3 & 1 \end{array}
$$

- The content of matrix Need is defined to be Max - Allocation.

- The system is in a safe state since the sequence $ \langle P_{1}, P_{3}, P_{4}, P_{2}, P_{0} \rangle $ satisfies the safety criteria.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123310.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IfyqnnTmtYkkkOzJXMZlCeJYUE4%3D&Expires=1778572923' alt='OCR图片'/></div>

## Example ( $ P_{1} $ requests (1,0,2))

- Check that request $ \leq $ need (that is, $ (1,0,2)\leq(1,2,2))\rightarrow $ true

- Check that request $ \leq $ available (that is, $ (1,0,2)\leq(3,3,2))\rightarrow $ true

Before Adjustment

<table border="1"><tr><td></td><td colspan="3">Allocation</td></tr><tr><td></td><td>A</td><td>B</td><td>C</td></tr><tr><td>$P_{0}$</td><td>0</td><td>1</td><td>0</td></tr><tr><td>$P_{1}$</td><td>2</td><td>0</td><td>0</td></tr><tr><td>$P_{2}$</td><td>3</td><td>0</td><td>2</td></tr><tr><td>$P_{3}$</td><td>2</td><td>1</td><td>1</td></tr><tr><td>$P_{4}$</td><td>0</td><td>0</td><td>2</td></tr></table>

<div align="center">

After Adjustment

</div>

<table border="1"><tr><td></td><td colspan="3">Alloc.</td><td colspan="3">Need</td><td colspan="3">Avail.</td></tr><tr><td></td><td>A</td><td>B</td><td>C</td><td>A</td><td>B</td><td>C</td><td>A</td><td>B</td><td>C</td></tr><tr><td>$P_{0}$</td><td>0</td><td>1</td><td>0</td><td>7</td><td>4</td><td>3</td><td>2</td><td>3</td><td>0</td></tr><tr><td>$P_{1}$</td><td>3</td><td>0</td><td>2</td><td>0</td><td>2</td><td>0</td><td></td><td></td><td></td></tr><tr><td>$P_{2}$</td><td>3</td><td>0</td><td>2</td><td>6</td><td>0</td><td>0</td><td></td><td></td><td></td></tr><tr><td>$P_{3}$</td><td>2</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td></td><td></td><td></td></tr><tr><td>$P_{4}$</td><td>0</td><td>0</td><td>2</td><td>4</td><td>3</td><td>1</td><td></td><td></td><td></td></tr></table>

- $ \langle P_{1}, P_{3}, P_{4}, P_{0}, P_{2} \rangle $ or $ \langle P_{1}, P_{4}, P_{3}, P_{0}, P_{2} \rangle $ satisfies safety requirement.

- Can request for (3,3,0) by $ P_{4} $ be granted? (0,2,0) by $ P_{0} $ ?

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123315.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GO6CVFTOQL9yHlSLUGV6Sb5PSjU%3D&Expires=1778572923' alt='OCR图片'/></div>

## Deadlock Detection

- If a system does not employ either a deadlock-prevention or a deadlock-avoidance algorithm, then a deadlock situation may occur.

- Need a deadlock detection algorithm that examines the state of the system to determine whether a deadlock has occurred.

- Need a recovery algorithm to recover from deadlock.

Deadlock detection for single instance of each resource type:

- Maintain a wait-for graph.

- Periodically invoke an algorithm that searches for a cycle in the graph.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123320.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5IgrmqkZgLoOZs8pRKeVMnZ7nw0%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123326.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9V1KOC9lWnFc9GDJJkbbwOYmJWQ%3D&Expires=1778572923' alt='OCR图片'/></div>

## Resource Allocation Graph

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123364.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=sHTw2QVWYtsD%2BdzTvXJCaDjjKDE%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123370.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BTKsFGK1LBrPVECh7%2FLRpAqAKbs%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_3_1777968123375.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dvrnAhY9SRv%2FoSbycvlFQoIe30s%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_4_1777968123383.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Fn%2BIlKMmvZ6rk5ieab7bZs9Wlfg%3D&Expires=1778572923' alt='OCR图片'/></div>

## Deadlock Recovery

## 1) Terminate processes

- Kill (abort) all deadlocked processes.

- Kill one process at a time until deadlock cycle is eliminated.

- In which order should we choose a process to abort?

- The process with lowest priority

- How long the process has computed, and how much longer to completion

- Resources the process has used

- Resources the process needs to complete

- How many processes will need to be terminated

- Is process interactive or batch?

- Problem: what if the process is in the middle of updating a file? Aborting the process may lead to incorrect file.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123396.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LNir%2FTwkovqEAoQjn7k57wJSrvU%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123409.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TTkuwum1QaqeMdYyO9W9YcLRLHE%3D&Expires=1778572923' alt='OCR图片'/></div>

## Deadlock Recovery

## 2) Pre-empt a resource from a process

- How to select a victim (process) to minimize cost?

- Roll back the process to some safe state and restart from there.

- How do we find a safe state?

- Easiest way: destroy the process and restart.

- Use checkpoints during execution.

- Starvation - same process may always be picked as victim.

- How do we ensure no starvation?

- Include number of rollbacks in cost factor.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123413.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1lNNoP2L6BT%2FooZdmv%2BnvjrzpL8%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123426.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=M4dJ9EJxOIEUMl26qH%2B7AP8q4No%3D&Expires=1778572923' alt='OCR图片'/></div>

## End of Lecture 9

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123440.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7py0XbQkn1UEOmTGcugrQfonN3I%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123450.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WmhNTHLFDZqVFPUhIMH8Udq%2B0Tw%3D&Expires=1778572923' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_1_1777968123458.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FaPJ2hWh60VAQCtkZ8xX4pT8G%2Bs%3D&Expires=1778572923' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605051601400d058d4868a14230%2Fcrop_2_1777968123470.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=UP71M533oWDGPFSMb2WecesE1p0%3D&Expires=1778572923' alt='OCR图片'/></div>