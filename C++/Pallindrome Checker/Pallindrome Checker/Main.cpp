#include <iostream>
#include <algorithm> 
#include <string>  
#include <functional>
#include <cctype>

#include "Functions.h"

using namespace std;

int main()
{
	greet();

	string word;

	while (true)
	{
		cout << "Enter the word: ";
		cin >> word;

		if (word == "quit")
		{
			break;
		}

		string swp = reverseStr(word);

		std::transform(word.begin(), word.end(), word.begin(), std::ptr_fun<int, int>(std::toupper));
		std::transform(swp.begin(), swp.end(), swp.begin(), std::ptr_fun<int, int>(std::toupper));

		if (swp == word)
		{
			cout << swp << " " << "is a Pallindrome." << endl;
		}
		else
		{
			cout << swp << " " << "is not a Pallindrome" << endl;
		}
	}


	return 0;
}
