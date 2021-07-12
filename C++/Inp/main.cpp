#include <iostream>

using namespace std;

int main()
{
    string name;
    int age;

    cout << "Enter your name:> ";
    cin >> name;
    cout << "Enter your age:> ";
    cin >> age;

    cout << "Hi " << name << endl;
    cout << "I hear you are " << age << " years old." << endl;

    return 0;
}
