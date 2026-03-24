#include <stdio.h>

void print(int* x){
    printf("%d\n", *x);
}

int main(){
    int x = 10;

    print(&x);

    void* any_p;

    double sallary = 10000.0;
    int age = 19;

    any_p = &sallary;

    any_p = &age;

    int* age_p = (int*)any_p;

    printf("%d", *age_p);

    printf("%d", *((int *)any_p))
}