<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506123521b0e442c21ea84227%2Fcrop_1_1778042134948.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GGdfZ7ct0pgeJWoSxyikSfrtrug%3D&Expires=1778646935' alt='OCR图片'/></div>

<div align="center">

# Faculty of Computing Year 2 Semester 2 (2026)

</div>

IT2130 - Operating Systems and System Administration

Lab Sheet 6

Objectives: In the end of this practical, the students will be able to understand UNIX POSIX Pthread management concepts using C language.

Pipes are known as the oldest communication mechanism under UNIX. To create a simple pipe with C, we make use of the pipe() system call. It takes a single argument, which is an array of two integers, and if successful, the array will contain two new file descriptors to be used for the pipeline.

A pipe is created by calling the pipe() function in the following way.

```c

int fd[2];

if (pipe(fd) < 0)

    printf("Error!\n");

```

When the pipe() function is invoked, it returns two valid file descriptors in the array given as the argument. The input of the first file descriptor (fd[0]) is the output of the second file descriptor (fd[1]).

Activity 1: Consider the below program and answer the questions.

```c

#include <stdio.h>

#include <unistd.h>

#include <string.h>

#include <sys/wait.h>

int main() {

    int fd[2];

    pid_t pid;

    char write_msg[] = "Hello!";

    char read_msg[100];

    pipe(fd);    Line A

    pid = fork();

```

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506123521b0e442c21ea84227%2Fcrop_2_1778042135004.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=my6nh%2FlTcVuj%2B2UaC1tOer5uolk%3D&Expires=1778646935' alt='OCR图片'/></div>

```c

if (pid > 0) {

    close(fd[0]);  Line B

    write(fd[1], write_msg, strlen(write_msg) + 1);  Line C

    close(fd[1]);

    wait(NULL);

} else {

    close(fd[1]);

    read(fd[0], read_msg, sizeof(read_msg));  Line D

    printf("Child received: %s\n", read_msg);

    close(fd[0]);

}

return 0;

}

```

a. What is the output you can see in the terminal?

b. Briefly describe what line A, line B, line C and line D do in the above program.

## Activity 2:

Modify the above C program to do the following

1. The child sends a message to the parent

2. The parent reads and displays it

## Activity 3:

Write a C program to create two pipes and do the following.

- Parent sends a number to child

- Child doubles the number

- Child sends result back to parent

- Parent prints result

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260506123521b0e442c21ea84227%2Fcrop_1_1778042135021.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=upGjl3VliPR8pBiyUdPl9zqr2Sw%3D&Expires=1778646935' alt='OCR图片'/></div>