# 🧠 The Ultimate "Brain Dump" Cheat Sheet

> [!CAUTION]
> **"Don't study until you get it right. Study until you can't get it wrong."**
> Use this single sheet to memorize the precise syntax and logic for your exam.

---

## 1. 🧱 Memory & Pointers

| Concept | The Logic to Memorize | Simple Code Example |
| :--- | :--- | :--- |
| **Get a Pointer (Address)** | `&` means "Address of". Used to find where a variable lives in memory. | `int x = 10;`<br>`int *ptr = &x;` |
| **Get Value from Pointer** | `*` means "Value at address" (Dereferencing). | `int value = *ptr; // Gets 10`<br>`*ptr = 20; // Changes x to 20` |
| **Void Pointer Casting** | Threads pass `void*` (generic pointer). You **must** convert it back to its original type before using it. | `void* arg;`<br>`int* p = (int*)arg;`<br>`int val = *p;` |
| **Struct Casting** | Pass structs to threads using `void*`. Then cast back to a struct pointer. | `Data* d = (Data*)arg;`<br>`int val = d->x;` |
| **Arrays to Functions** | Arrays decay into pointers. No `&` is needed when passing them. | `calculateSum(arr, size);` |
| **Strings & Inputs** | Strings are char arrays. The array name is the address. **NO `&` in scanf!** | `char name[50];`<br>`scanf("%s", name);` |

---

## 2. 🔀 Process Management (`fork`, `exec`, `wait`)

| Concept | The Logic to Memorize | Simple Code Example |
| :--- | :--- | :--- |
| **Process IDs** | `getpid()` = Who am I?<br>`getppid()` = Who is my parent? | `printf("I am %d\n", getpid());` |
| **fork() Magic** | Clones the process. Returns `0` to child, and `PID>0` to parent. | `pid_t pid = fork();`<br>`if (pid == 0) { /* Child */ }`<br>`else if (pid > 0) { /* Parent */ }` |
| **wait()** | Parent must wait for child to finish to prevent "Zombies". | `if (pid > 0) { wait(NULL); }` |
| **sleep()** | Pauses the process for a given number of seconds. | `sleep(2); // Pause 2 secs` |
| **execl() Replacement** | Replaces current process entirely. Code written below successful `execl` dies! | `execl("/bin/date", "date", NULL);` |
| **system()** | Runs command in new shell, then comes back to your code. | `system("date");`<br>`printf("I survived!");` |

---

## 3. 🧵 Multithreading (`pthread`)

*Compile with `-lpthread`!*

| Concept | The Logic to Memorize | Simple Code Example |
| :--- | :--- | :--- |
| **The Strict Signature** | Thread functions *must* return `void*` and accept exactly one `void*` argument. | `void* myFunc(void* arg) {`<br>`  return NULL;`<br>`}` |
| **Creating a Thread** | `pthread_create(ID, NULL, Func, Data)`. Data must be passed by address `&`. | `pthread_t tid;`<br>`int data = 5;`<br>`pthread_create(&tid, NULL, myFunc, &data);` |
| **Waiting for a Thread** | `pthread_join(ID, NULL)`. Similar to `wait()`, but for threads. | `pthread_join(tid, NULL);` |

---

## 4. 🚰 Pipes (IPC - Inter-Process Communication)

| Concept | The Logic to Memorize | Simple Code Example |
| :--- | :--- | :--- |
| **Creating a Pipe** | Requires an array of 2 integers. `fd[0]` is **Read** (OUT). `fd[1]` is **Write** (IN). | `int fd[2];`<br>`pipe(fd); // DO BEFORE FORK!` |
| **The Parent Writer** | Close Read `[0]`. Write to `[1]`. Write requires `sizeof` the data block. | `close(fd[0]);`<br>`int num = 100;`<br>`write(fd[1], &num, sizeof(int));` |
| **The Child Reader** | Close Write `[1]`. Read from `[0]`. Needs variable to dump data into. | `close(fd[1]);`<br>`int recv;`<br>`read(fd[0], &recv, sizeof(int));` |
| **Bi-directional Pipes** | Pipes are 1-way. For 2-way talk, make 2 pipes: `P1(P->C)` and `P2(C->P)`. | `pipe(fd1); pipe(fd2); fork();` |

---

## 5. 🛠️ Critical Built-in Basics

| Concept | The Logic to Memorize | Simple Code Example |
| :--- | :--- | :--- |
| **Division Trap** | `int / int` drops decimals. Make one number a float (`1.0`) to get fractions. | `float ans = 50 / (100 * 1.0); // 0.5` |
| **Header Includes** | Miss a header, fail the compile. Know what goes where! | Process: `<unistd.h>`, `<sys/wait.h>`<br>Threads: `<pthread.h>`<br>Standard: `<stdio.h>`, `<stdlib.h>` |
| **Switch-Case** | Don't forget `break` or it executes all cases below it! | `switch(x) { case 1: break; }` |
