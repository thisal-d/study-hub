#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

struct Car{
    int wheels = 4;
    int tires = 3;
}

void* print_num(void* arg) {
    int * p = (*int)arg;
    int value = *p;
    printf("%d", value);
    pthread_exit(NULL);
}


int main () {
   
   pthread_t lochana_thead;
   
   int x = 100;
   void* void_pointer = &x;
   
   pthread_create(&lochana_thead, NULL, print_num, void_pointer);
   
   pthread_join(lochana_thead, NULL );
    
}