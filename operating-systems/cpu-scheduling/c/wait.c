#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    int id = fork();

    if (id == 0) {
        printf("Child process\n");
    }
    else if (id > 0) {
        printf("Parent process Start\n");
        
        wait(NULL);   
        
        printf("Parent process End\n");
    }
}e