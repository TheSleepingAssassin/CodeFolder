#include <stdio.h>
#include <stdlib.h>

int main()
{
    int age;
    char name[20];
    printf("Enter your name: ");
    scanf("%s", name);
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("Hello %s" "/n", name);
    printf("I hear you are %d years old", age);
    return 0;
}
