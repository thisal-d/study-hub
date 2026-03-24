#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void* print_message (void* arg) {
    printf ("Hello from the print_message thread!\n");
    pthread_exit(NULL);
}

void print_message2 () {
    printf ("Hello from the print_message funct!\n");
}

void* nimesh(void *arg){
    printf("nimesh + lochana\n");
    pthread_exit(NULL);
}

int main () {
    
    print_message2();
    
    //Car car1            = new Car();
    pthread_t thread_id ; //= new pthread_t();

    
    if (pthread_create(&thread_id, NULL, print_message, NULL) == 0){
        printf("Thread created successfull");
    }
    else {
        printf("Thread created failed");
    }
    
    pthread_join(thread_id, NULL);
    
    
    pthread_t nimesh_thread;
    
    pthread_create(&nimesh_thread, NULL, nimesh, NULL);
    
    pthread_join(nimesh_thread, NULL);
    
    
    printf("Hello from main thread..!\n");
    
}