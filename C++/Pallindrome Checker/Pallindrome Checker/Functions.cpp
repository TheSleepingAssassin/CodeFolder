#pragma once

#include <iostream>
#include <string>

using namespace std;

string reverseStr(string& str)
{
	string swpS = str;

	int n = swpS.length();

	for (int i = 0; i < n / 2; i++)
		swap(swpS[i], swpS[n - i - 1]);

	return swpS;
}

void greet()
{
	cout << "Hello" << endl;
	cout << "This is a Pallindrome Checker" << endl;
	cout << "This will check of the word you type is a Pallindrome or not." << endl;
	cout << "A pallindrome is a word that is the same when reversed." << endl;
}