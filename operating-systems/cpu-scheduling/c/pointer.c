#include <stdio.h>


int main(){
    int x = 10;
    int* x_p = &x;
    int** x_p_p = &x_p;

    printf("%d\n", x);
    printf("%p\n", x_p);
    printf("%p\n", x_p_p);


    int x_s_value = *x_p;

    int x_s_value_2 = *(*x_p_p);


}