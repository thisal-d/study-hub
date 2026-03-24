
# Summary

## 📚 Table of Contents
1.  [Introduction](#introduction)
2.  [Standard Boilerplate Code](#standard-boilerplate-code)
3.  [Control Flow Snippets](#control-flow-snippets)
4.  [Arrays & Loops](#arrays--loops)
5.  [Pointers & Functions](#pointers--functions)
6.  [Process Management (`fork`)](#process-management-fork)
7.  [Threads (`pthread`)](#threads-pthread)
8.  [Pipes (`pipe`)](#pipes-pipe)
9.  [Navigation](#navigation)

---

## Introduction
Memorize these patterns. In the exam, if you remember the structure (e.g., "Create pipe -> Fork -> Close unused ends"), the syntax will follow naturally.

---

## Standard Boilerplate Code

**Header to Function Mapping (Memorize this!):**
In a closed-book exam, forgetting an `#include` can break your build. Here is what you need to memorize:

| Header File | Common Functions/System Calls Used |
| :--- | :--- |
| `<stdio.h>` | `printf()`, `scanf()`, `perror()` |
| `<stdlib.h>` | `exit()`, `system()` |
| `<unistd.h>` | `fork()`, `pipe()`, `getpid()`, `getppid()`, `sleep()`, `execl()`, `read()`, `write()` |
| `<pthread.h>` | `pthread_create()`, `pthread_join()`, `pthread_exit()` |
| `<sys/wait.h>` | `wait()` |
| `<string.h>` | `strlen()` |

**Main Function Template:**
```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>
#include <pthread.h>
#include <string.h>

int main() {
    // Your code here
    return 0;
}
```

---

## Control Flow Snippets

**If-Else:**
```c
if (mark > 50) {
    // pass
} else {
    // fail
}
```

**For Loop (0 to n-1):**
```c
for (int i = 0; i < n; i++) {
    // loop body
}
```

---

## Arrays & Loops

**Declaration:**
`int arr[5];`

**Input with Loop:**
```c
for (int i = 0; i < 5; i++) {
    scanf("%d", &arr[i]);
}
```

**Pass to Function:**
`myFunction(arr, 5);` (No `&` needed for arrays).

---

## Pointers & Functions

**Pointer Declaration & Assignment:**
```c
int x = 10;
int *ptr = &x;
```

**Void Pointer Casting (Crucial for Threads):**
```c
void *func(void *arg) {
    int *p = (int*) arg;
    int val = *p;
}
```

---

## Process Management (`fork`)

**The Template:**
```c
pid_t pid = fork();

if (pid == 0) {
    // Child Process Code
    // Use execl() here if needed
} else if (pid > 0) {
    // Parent Process Code
    wait(NULL); // Important!
} else {
    // Error
}
```

**`execl` Syntax:**
`execl("/bin/ls", "ls", NULL);`

---

## Threads (`pthread`)

**The Function Signature:**
`void* functionName(void* arg) { ... return NULL; }`

**Creating & Joining:**
```c
pthread_t tid;
pthread_create(&tid, NULL, functionName, &argument);
pthread_join(tid, NULL);
```

**Passing a Struct:**
1.  Define struct: `typedef struct { int a; } Data;`
2.  Cast in thread: `Data *d = (Data*) arg;`
3.  Access: `d->a`

---

## Pipes (`pipe`)

**The Template (Parent -> Child):**
```c
int fd[2];
pipe(fd); // Create pipe FIRST
pid_t pid = fork();

if (pid > 0) {
    // Parent (Writer)
    close(fd[0]); // Close Read end
    write(fd[1], &data, sizeof(data));
    close(fd[1]);
} else {
    // Child (Reader)
    close(fd[1]); // Close Write end
    read(fd[0], &buffer, sizeof(buffer));
    close(fd[0]);
}
```

---

## Navigation

*   **Previous:** [README 7: Pipes (IPC)](7.md)
*   **Next:** Series Complete. Good luck on your exam!

---
## 📚 Table of Contents
1.  [C Basics (Current)](1.md)
2.  [Control Flow (If/Else & Loops)](2.md)
3.  [Functions & Arrays](3.md)
4.  [Pointers & Memory (The Missing Link)](4.md)
5.  [Process Management (fork, exec)](5.md)
6.  [Threads (pthread)](6.md)
7.  [Pipes (IPC)](7.md)
8.  [Summary](last.md)
