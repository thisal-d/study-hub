# 🏁 Common Pitfalls (The "Wall of Shame")

In a closed-book exam, you won't have Google. If your code isn't compiling or is crashing, check this list first.

> [!CAUTION]
> **"You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential." — David Goggins**

### 1. 🛑 "Undefined reference to 'pthread_create'"
**The Reason:** You forgot to link the thread library.
**The Fix:** Add `-lpthread` at the very end of your compile command.
```bash
gcc program.c -o program -lpthread
```

### 2. 💣 "Segmentation Fault (core dumped)"
**The Reason:** You're trying to access memory that doesn't belong to you.
- **Check pointers:** Did you initialize your pointer before dereferencing? (`ptr = &var`)
- **Check arrays:** Are you accessing an index like `arr[5]` for an array of size 5? (Maximum index is 4!)
- **Check scanf:** Did you forget the `&` for integers? `scanf("%d", &var);`

### 3. 👻 "Implicit declaration of function..."
**The Reason:** You used a function but didn't include its header.
**The Fix Check:**
- `fork`, `pipe`, `read`, `write`, `sleep`, `execl` -> **`<unistd.h>`**
- `wait` -> **`<sys/wait.h>`**
- `pthread_create`, `pthread_join` -> **`<pthread.h>`**
- `exit`, `system` -> **`<stdlib.h>`**
- `strlen` -> **`<string.h>`**

### 4. 🧟 Zombie Processes
**The Reason:** You forked a child, but the Parent didn't "reap" it.
**The Fix:** Ensure the Parent calls `wait(NULL);`.

### 5. ♾️ Infinite Fork Loop
**The Reason:** You put `fork()` inside a loop without careful logic.
**The Fix:** If your terminal hangs, try `Ctrl+C` to kill the process.

---
[🏠 Back to Home](../README.md)
