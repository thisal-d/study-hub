<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506123605c624469d3b0f41a8%2Fcrop_1_1778042180366.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cYm1GS6f84%2FhiLAn4FoybpAbDwo%3D&Expires=1778646980' alt='OCR图片'/></div>

Faculty of Computing

<div align="center">

# Year 2 Semester 2 (2026)

</div>

<div align="center">

# IT2130 - Operating Systems and System Administration

</div>

## Practical sheet 8

Objective: This practical demonstrates the use of Shared memory in C language.

Activity 01: Consider the program below and explain the code line by line

```c

#include <stdio.h>

#include <sys/ipc.h>

#include <sys/shm.h>

#include <string.h>

int main() {

    key_t key = 1234;

    int shmid;

    char *ptr;

    shmid = shmget(key, 4096, 0666 | IPC_CREAT);

    ptr = (char *) shmat(shmid, NULL, 0);

    sprintf(ptr, "Hello from shared memory!");

    printf("Data written to shared memory\n");

    shmdt(ptr);

    return 0;

}

```

Activity 2: Consider the program below and explain the code line by line

```c

#include <stdio.h>

#include <sys/ipc.h>

#include <sys/shm.h>

int main() {

    key_t key = 1234;

    int shmid;

    char *ptr;

    shmid = shmget(key, 4096, 0666);

    ptr = (char *) shmat(shmid, NULL, 0);

    printf("Read from shared memory: %s\n", ptr);

    shmdt(ptr);

    shmctl(shmid, IPC_RMID, NULL);

    return 0;

}

```

Activity 3: Write a C program to implement a shared memory using system calls. Create a shared memory segment and write a message such as "Operating Systems Lab" into it. Then read the message from the shared memory and print it to the screen.

Message written to shared memory

Message read from shared memory: Operating Systems Lab