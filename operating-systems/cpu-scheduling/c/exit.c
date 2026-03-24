#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdlib.h>

int main() {
    int id = fork();

    if (id == 0) {
        printf("Child process\n");
    }
    else if (id > 0) {
        printf("Parent process Start\n");
        
        wait(NULL);   // parent waits for child
        
        printf("Parent process End\n");
    }
    
    exit(0);
    
    printf("This will be not printed");
}