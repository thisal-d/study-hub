#include <stdio.h>

void increment(int value){
    value++;
    printf("inside the function : %d\n", value);
}

void increment2(int* int_pointer){
    ++(*int_pointer);
}

void scanf2(int* int_pointer){
}

int main(){
    int number;
    scanf(&number);

    int my_val = 100;
    printf("inside the main before call the funct : %d\n", my_val);

    increment2(&my_val);
    printf("inside the main after call the funct : %d\n", my_val);

}