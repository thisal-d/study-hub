#include <stdio.h>

struct Car{
    int wheels = 4;
    int tires = 3;
};


int main(){


    Car car;

    car.wheels = 1;
    car.tires = 3;

    Car* car_p;
    
    car_p = &car;
    

    printf("%d\n", car_p->wheels);
}