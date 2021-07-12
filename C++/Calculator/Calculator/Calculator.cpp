// Calculator.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
using namespace std;

void operate(float a, float b, char op);
void greet();
void instructions();

int main()
{
	return 0;
}

void greet()
{
	cout << "Greetings User!";
	cout << "I have bad news.";
	cout << "Actually, there is no game.";
	cout << "But there is a CALCULATOR.";
	cout << "Welcome to Stinky Calculator.";
	cout << "Where..... DAMn I forgot the slogan.";
	cout << "ANy way.";
}

void instructions()
{
	cout << "Instructions: \nType a problem like 2 + 2 (spaces between them are necessary)\n It will give you the answer";
}

void operate(float a, float b, char op) {
	switch (op) {
	case '/':
		cout << a / b;
		break;
	case '*':
		cout << a * b;
		break;
	case '+':
		cout << a + b;
		break;
	case '-':
		cout << a - b;
		break;
	default:
		cout << "Not Valid";
	}
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
