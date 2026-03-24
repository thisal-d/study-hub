#include <stdio.h>
#include <unistd.h>


int main() {
    int id =;
    
    if (id == 0){
        printf("Hello i'm child\n");
        printf("%d\n", getpid()); // 101
        printf("%d\n", getppid()); // 100
    }
    else if (id > 0){
        printf("Hello i'm parent\n");
        printf("%d\n", getpid()); // 100
    }
    else {
        printf("Fork is failed\n");
    }
}