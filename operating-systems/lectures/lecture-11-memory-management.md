<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403365.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Gj%2BocmRefNer0rtopJxqJZrjGbA%3D&Expires=1778573203' alt='OCR图片'/></div>

## Sri Lanka Institute of Information Technology Faculty of Computing

<div align="center">

# Prof.Sanvitha Kasthuriarachchi IT2130 - Operating Systems and System Administration Year 02 and Semester 02

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403439.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GrPbxAfvYhKFhKb2M1FkzRZHx4w%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403447.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BaWF5VIwaFbJH1S%2BD3vjOqVIyoo%3D&Expires=1778573203' alt='OCR图片'/></div>

<div align="center">

# Main Memory and Virtual Memory Management in Operating System

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403454.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QLZ2xSXxRrdBk7j%2B%2FG2mX9hYkGY%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403468.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=poNOm25NXJCqzMIBSW5qhvlesMY%3D&Expires=1778573203' alt='OCR图片'/></div>

- Main memory concept

- Why main memory

- Address binding

- Contiguous Memory Allocation

- Fragmentation

- Paging

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403473.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ja0k%2FWCBtPdQan6jsucf%2BPAU5T4%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403478.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lKGlz5QhwlxUH8ubumOSQlGo15k%3D&Expires=1778573203' alt='OCR图片'/></div>

## Main Memory

- Memory is a large array of words or bytes, each with its own address.

- It is a repository of quickly accessible data shared by CPU and I/O devices.

- Memory and registers are the only storage that CPU can directly access.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403484.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gtN0Dr%2BpGh3LX4YBEhXHliQy59w%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403490.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tzQKggkmyEJafqdF3UrtTceQKcY%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403496.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zrNTgPR1gDntCxaaAHfZHL7aOFI%3D&Expires=1778573203' alt='OCR图片'/></div>

## Main Memory (Cont.)

- Main memory is a volatile storage device. It loses its contents in the case of system failure.

- A program must be mapped to absolute addresses and loaded into memory.

- Main memory is usually divided into two partitions:

- Kernel memory area: Resident operating system, PCBs, System calls usually held in low memory.

- User memory area: User processes are in here. It is the high memory.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403501.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=x3cgoMLB7gL3RGmWeyxuTYl%2F4Tw%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403514.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bYWdMAXMluHhmJWbz9UvxdfI4Zo%3D&Expires=1778573203' alt='OCR图片'/></div>

## Why Main Memory

- From the hard disk the programs must be taken into the main memory prior to beginning the execution.

CPU

RAM (Primary Memory)

Hard Disk Drive (Secondary Storage)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403518.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bRnGN8Xn8yE%2FgevGnCUSkECrjVU%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403527.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=JMr76wsKhpo9fqKDSdaTq7Rmgvk%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403532.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PyaM7SVkUjnbuTkSsHCxJa1BsJ8%3D&Expires=1778573203' alt='OCR图片'/></div>

## What OS Does for Memory Management

- The OS is responsible for the following activities:

- Keep track of which parts of memory are being used and by whom.

- Decide which processes to load next when memory space becomes available.

- Allocate and deallocate memory.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403541.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NtLYJhPdzmmrfxaKlCYuRwA75pc%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403546.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fjBt3Jy2Q9zDpx2VmbcWbdWHp5c%3D&Expires=1778573203' alt='OCR图片'/></div>

For n bits address, the memory capacity = 2 $ ^{n} $ bytes

0000 0000 0000 0000

0000 0000 0000 0001

0000 0000 0000 0010

0000 0000 0000 0011

0000 0000 0000 0100

0000 0000 0000 0101

0000 0000 0100 1001

0000 0000 0100 1010

0000 0000 0100 1011

0000

0001

0002

0003

0004

0005

0049

004A

004B

1111 1111 1111 1111 FFFF

Binary Hex

Address

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403551.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0Wnni937qWT%2BlsHJXVBtABaOvpU%3D&Expires=1778573203' alt='OCR图片'/></div>

Memory Bytes

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403556.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vS37NtMmhtcrTDwWPhZRmYXahXQ%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403563.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NuXJHaCsvX0SMuMAJZGVkhuTfCY%3D&Expires=1778573203' alt='OCR图片'/></div>

## Address Binding

- Address binding of instructions and data to memory addresses can happen at three different stages:

- Compile time: If the starting memory location is known beforehand, the program is compiled and an absolute code will be generated with fixed addresses.

- Load time: If address binding is not done at compile time, the compiler generates a relocatable code. The loader then adjusts addresses based on where the program is placed in memory.

- Execution time: Address binding occurs during program execution. The CPU generates logical (virtual) addresses, which are dynamically translated into physical addresses by the Memory Management Unit (MMU).

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403570.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=W4LSO1t1azjbocuxi2ncuTklBOE%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403577.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rBTW5SXgHDXaQucUNVn1sAdLx2Y%3D&Expires=1778573203' alt='OCR图片'/></div>

## Logical vs. Physical Address Space

- The concept of a logical address space that is bound to a separate physical address space is central to proper memory management

- Logical address - generated by the CPU; also referred to as virtual address.

- Physical address - address seen by the memory unit.

- Logical address space is the set of all logical addresses generated by a program.

- Physical address space is the set of all physical addresses generated by a program.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403584.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NGrzqGS4BUpLCLt8clVM0XVUj1U%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403592.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uBongsXJti9WxwIcpM3580jCElA%3D&Expires=1778573203' alt='OCR图片'/></div>

## Swapping

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403608.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=okbPDv2t1j6JrpDmWrCyclEKAg0%3D&Expires=1778573203' alt='OCR图片'/></div>

main memory

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403617.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=z74u02hwIw75bSE5hpTS%2Fh8DXjA%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403622.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fsuUWRgGpDnsU1K2IXQI7xYPdgc%3D&Expires=1778573203' alt='OCR图片'/></div>

## Contiguous Allocation

- A memory management technique in which each process is allocated a single continuous block of memory in RAM.

- When a process is loaded into memory, the OS finds a contiguous (adjacent) block large enough to hold it.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403630.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nTDa7TXwvkxQ6jx%2FUIPKCJRSwVc%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403635.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PBWCgKPZkbPW3JmCrVHyF9t1wkY%3D&Expires=1778573203' alt='OCR图片'/></div>

## Contiguous Allocation (Cont.)

- Two registers provide address protection between processes:

- Base register: smallest legal address space

- Limit register: size of the legal range

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403647.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5hThwxtzKkovZXqdYcGblxtVxAk%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403653.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BWIbOroU9hIC%2BRZecTDoIMZTBqU%3D&Expires=1778573203' alt='OCR图片'/></div>

## Multiple-Partition Allocation

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403684.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ExVBwB4bSpVFDTbGvCBVmbyJV84%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403692.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rwcwD2kqYuegP6tjN20i%2FnrW9Vo%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403700.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FOWWl5O%2BoCgMCrBm6JVPEjJG0k8%3D&Expires=1778573203' alt='OCR图片'/></div>

## Dynamic Storage-Allocation Problem

## How to satisfy a request of size n from a list of free holes?

- First-fit: Allocate the first hole that is big enough.

- Best-fit: Allocate the smallest hole that is big enough; must search entire list, unless ordered by size. Produces the smallest leftover hole.

- Worst-fit: Allocate the largest hole; must also search entire list. Produces the largest leftover hole.

First-fit and best-fit are better than worst-fit in terms of speed and storage utilization.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403706.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Jo6CU0YPZATOl52a8KS3ObyNWFI%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403712.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nKEDpwvthl9NKUwfGxs0StHidEU%3D&Expires=1778573203' alt='OCR图片'/></div>

## Fragmentation

- External Fragmentation - total memory space exists to satisfy a request, but it is not contiguous.

- Internal Fragmentation - allocated memory may be slightly larger than requested memory; this size difference is memory internal to a partition, but not being used.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403717.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hYTXiN6AOW3X9q6aPeTXFz%2Fg4d8%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403722.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Bpa1%2BJaFEn4pAG6p2WDAvma8I0o%3D&Expires=1778573203' alt='OCR图片'/></div>

## External Fragmentation and Compaction

- Reduce external fragmentation by compaction.

- Shuffle memory contents to place all free memory together in one large block.

- Compaction is possible only if relocation is dynamic, and is done at execution time.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403727.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fN2sdc33b1ssXSINZV5Azd%2BIEKw%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403734.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=I%2Bn%2F6m8NAORgL%2FhD5x3r7ZdCBRs%3D&Expires=1778573203' alt='OCR图片'/></div>

## External Fragmentation and Paging

<table border="1"><tr><td>page 0</td></tr><tr><td>page 1</td></tr><tr><td>page 2</td></tr><tr><td>page 3</td></tr><tr><td>logical memory</td></tr></table>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403743.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FVAsK5%2Fp8p3mdE6mugNnx75K7lo%3D&Expires=1778573203' alt='OCR图片'/></div>

page table

## frame number

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403748.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hlsJ6ChcOKq6NIT334jXnlfr5N0%3D&Expires=1778573203' alt='OCR图片'/></div>

physical memory

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403754.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9spehygG%2FwdNiFg6yqQDFx4pFZI%3D&Expires=1778573203' alt='OCR图片'/></div>

## External Fragmentation and Paging (Cont.)

- Divide physical memory into fixed-sized blocks called frames.

- Divide logical memory into blocks of same size called pages.

- Keep track of all free frames.

- Set up a page table to translate logical to physical addresses.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403760.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7FdGu5DeELwHBMnZ26CVH%2Bo02%2B0%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403765.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lDw2%2BTWJ16JU2sTZk6JSICqAbc0%3D&Expires=1778573203' alt='OCR图片'/></div>

## Address Translation Scheme

- Address generated by CPU is divided into:

- Page number (p) - used as an index into a page table which contains base address of each page in physical memory.

- Page offset (d) - combined with base address to define the physical memory address sent to the memory unit.

<table border="1"><tr><td>page number</td><td>page offset</td></tr><tr><td>p</td><td>d</td></tr><tr><td>m-n</td><td>n</td></tr></table>

- For given logical address space $ 2^{m} $ and page size $ 2^{n}. $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403770.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HzAP0%2BSudGeJ3vIxE7mSkz7B66s%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403776.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FP3g56hw6hwl%2FBll9665tiHJPQ8%3D&Expires=1778573203' alt='OCR图片'/></div>

## Paging Hardware

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403781.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7tinYeuevj5sXlGu0IkovCJ72wM%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403789.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nPCeEHwGPKrUcty9oD5nytCnA%2FI%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403796.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NVeEjDRmPqIx%2B6Lqr0b%2BjOa4wCQ%3D&Expires=1778573203' alt='OCR图片'/></div>

## Free Frames

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403802.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=er39UCN0COPvRTLm2gTKiWQQ%2BMY%3D&Expires=1778573203' alt='OCR图片'/></div>

Before allocation

After allocation

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403810.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VEPn9AUrVVgO55BeUgi1blF4zxk%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403814.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vac%2Fby14MvU8t8%2Bl62MCq8%2Bh6W4%3D&Expires=1778573203' alt='OCR图片'/></div>

## Paging Hardware With Associative Memory (TLB)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403820.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Bll9%2BT3xtupGZ%2Bzp0jIuT6nIzzk%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403826.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xF9hWJneAJ7%2BiUlNCP1TKNRsU%2F0%3D&Expires=1778573203' alt='OCR图片'/></div>

## Effective Access Time

- Associative Lookup $ = \epsilon $ time unit

- Can be < 10% of memory access time

- Hit ratio = $ \alpha $

- Hit ratio - Percentage of times that a page number is found in the associative registers

$$
E A T = (m a + \varepsilon) \cdot \infty + (2 m a + \varepsilon) \cdot (1 - \alpha)
$$

- Consider $ \alpha=80\% $ $ \epsilon=20 $ ns for TLB search, 100ns for memory access: $ \mathrm{E A T}=\left(1 0 0+2 0\right)\mathrm{x} 80\%+\left(2 0 0+2 0\right)\mathrm{x} 20\% $

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403832.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gadbeWKqvOetjQ78hraRt1X%2B3VM%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403837.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kiIrwXhN%2F3hOAw3bVVTPMDKEguQ%3D&Expires=1778573203' alt='OCR图片'/></div>

## Memory Protection

- Memory protection implemented by associating a protection bit with each frame to indicate if read-only or read-write access is allowed.

- Can also add more bits to indicate page execute-only, and so on.

## Valid-invalid bit attached to each entry in the page table:

- "valid" indicates that the associated page is in the process' logical address space, and is thus a legal page.

- "invalid" indicates that the page is not in the process' logical address space.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403843.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bLVY3em7aTtNITOmn3lsP0Tbc2k%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403853.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iz6ns%2Bu0EeiRoDMNra1UirmfBVE%3D&Expires=1778573203' alt='OCR图片'/></div>

## Valid (v) or Invalid (i) Bit In A Page Table

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403860.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=a2y2BPFaWbPNpCLIiuBoPhhkjOk%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403866.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c5CU62Dn0fRXGh9s3oxVA4%2B7JFU%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403877.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=k41VdUNJI5sOu4UpFMKhUNiZ4yo%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_4_1777968403888.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zef2kUUacDkCYE62IJ8CPk9wyLw%3D&Expires=1778573203' alt='OCR图片'/></div>

- Demand paging is a technique used in virtual memory where pages are loaded into RAM only when they are actually needed, rather than loading the entire program in advance.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403894.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aP%2BLwLWaG5Mnqh5JsgXlHhLzAV8%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403902.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zCweItwKLqvMmAmzpS3RZwDFppM%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403908.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7TvdFnTZ5Ujzk96SfsL3jKzf478%3D&Expires=1778573203' alt='OCR图片'/></div>

## Page Faults

- A program starts execution, but not all its pages are in memory.

- When the CPU tries to access a page that is not in RAM, a page fault occurs.

- The operating system finds the required page on the hard disk.

- Loads it into a free frame in RAM.

- The program continues execution.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403917.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QbIsgthJp4uUbVdJXlOJCRIJrm0%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403923.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=42VEuGDJqXkvIZ806HNBRvJgrSI%3D&Expires=1778573203' alt='OCR图片'/></div>

## Steps in Handling a Page Fault

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403957.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=w1ojShGbi4oKd2YIWXuht98px2o%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403964.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=e%2FpTGSpdLrHyheyjqZxf3SXXc68%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968403969.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bPMYo1dtqedbl4hM5Tj%2B1f7OY9g%3D&Expires=1778573203' alt='OCR图片'/></div>

## If No Free Frames in RAM

## 1 Find a free frame:

- If there is a free frame, use it.

- If there is no free frame, use a page replacement algorithm to select a victim frame.

- Write victim frame to disk if dirty.

2 Bring the desired page into the (newly) free frame; update the page and frame tables.

3. Continue the process by restarting the instruction that caused the trap.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403974.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WnrrRK11NnwCy2K1MtAi5VT1TW0%3D&Expires=1778573203' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968403980.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9lMl22qMu6sEKQaezzcUGHC0dwQ%3D&Expires=1778573203' alt='OCR图片'/></div>

## Page Replacement

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968403999.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TyoHnypCp9FT7zHi0w6YuZT%2BDAM%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404005.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qS5ECpOFgLD%2By%2BJZDO2ltEjvUaU%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968404010.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=T2wJ9I%2Bft4ciPv%2FRWKTnPnQmaQg%3D&Expires=1778573204' alt='OCR图片'/></div>

## Page-Replacement Algorithms

- There are many page replacement algorithms.

- We want an algorithm that results in the lowest page-fault rate.

- Evaluate algorithm by running it on a particular string of memory references (reference string) and compute the number of page faults on that string.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404015.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=wIUOeCOTi%2BGRITUsMw4hEVQ40og%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404020.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=W8CzAZkbWblS%2BUJ2Eph7FqzUx4M%3D&Expires=1778573204' alt='OCR图片'/></div>

## First-In-First-Out (FIFO) Algorithm

- Use FIFO queue: replace the page at the head of the queue, and insert a new page at the tail.

- 3 or 4 frames (3 or 4 pages can be in memory at a time per process)

- FIFO replacement suffers from Belady's anomaly - more frames can result in more page faults.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404025.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u6iXMsWPpemC%2Bf2qQdp8O1JE5iA%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404031.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=PBfBLlg4VRM3wTQGmf58I093kWQ%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404036.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dVLRAH83imxqRGJ3ealrwMYcTrI%3D&Expires=1778573204' alt='OCR图片'/></div>

<div align="center">

10 page faults

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404042.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=U3L%2BP148durKz11RIShGwIPdXOw%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968404047.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=OiFPe84JRDynh3bIrI5fssSBSI4%3D&Expires=1778573204' alt='OCR图片'/></div>

## Optimal Page Replacement Algorithm (OPT)

- OPT replaces the page that will not be used for the longest period of time.

- 4 frames example: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404052.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FXpy2W3Bedn16hKibee%2BRXwfXRc%3D&Expires=1778573204' alt='OCR图片'/></div>

6 page faults

- For a fixed number of frames, OPT has the lowest page fault rate of all algorithms. It also never suffers from Belady's anomaly.

- Problem: It is difficult to implement - it requires future knowledge of the reference string!

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404057.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c%2BndAvWaSzYugNJwalLFmEJl2pY%3D&Expires=1778573204' alt='OCR图片'/></div>

## Least Recently Used (LRU) Algorithm

- LRU replaces the page that has not been used for the longest period of time.

- Reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404063.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mJ8ABXRnbViwEJltCMGNjqsi0E8%3D&Expires=1778573204' alt='OCR图片'/></div>

8 page faults

- A class of algorithms that do not suffer from Belady's anomaly are called stack algorithms.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404069.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8ZRKL2ICAXIqKFO8kRgcE76qOFc%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_3_1777968404074.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yz251O29%2FAlMfU0zdBFoKmZKjCY%3D&Expires=1778573204' alt='OCR图片'/></div>

## Page-Buffering Algorithms

- Keep a pool of free frames, always.

- Then a frame is available when needed, not found at fault time.

- Read page into free frame and select victim to evict and add to free pool.

- When convenient, evict victim.

- Possibly, keep list of modified pages.

- When backing store is otherwise idle, write pages there and set to non-dirty.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404079.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=q6I%2BlyApGQecQvcRuuMHO5wHxXY%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404084.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DNKFeMOS5RYTUVV5jDR0Jxk9KZ4%3D&Expires=1778573204' alt='OCR图片'/></div>

## End of Lecture 11

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404089.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=B2xnd4M8ZaZmSxfjPtNpXAyFbrk%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404100.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u%2FKseHlT7AkJ8ZUYqUax6XYCnVY%3D&Expires=1778573204' alt='OCR图片'/></div>

## Thank You

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_1_1777968404109.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IqB8G5WYZpYj0xQ60DmIhQCq34o%3D&Expires=1778573204' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505160545ad331f75876441ee%2Fcrop_2_1777968404143.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2F1cmvMfQL1G9x%2BE8N%2BZdi0drIfM%3D&Expires=1778573204' alt='OCR图片'/></div>