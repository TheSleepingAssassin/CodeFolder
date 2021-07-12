#include <iostream>

using namespace std;

int main()
{
  int age;
  string name;
  cout << "Enter your name: ";
  getline(cin, name);
  cout << "Enter your age: ";
  cin >> age;
  cout << "Oh! Hi " << name << "." << endl;
  cout << "I hear you're " << age << " years of age.";
  return 0;
}
