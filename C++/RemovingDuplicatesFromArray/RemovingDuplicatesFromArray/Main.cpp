#include <iostream>
#include <string>

using namespace std;

int main()
{
	// Actually this is removing duplicates from a string

	string str = "This is a duplicate string yes it is.";

	for (int i = 0; i < str.length(); i++)
	{
		cout << str[i] << endl;
	}


	return 0;
}