#include <iostream>

using namespace std;

int main()
{
    string command = "";
    cout << "Type help to see the list of commands." << endl;
    while (true) {
        cout << "> ";
        cin >> command;
        bool started = false;
        if (command == "start")
        {
            if (started)
            {
                cout << "Car has already started!" << endl;
            }
            else
            {
                cout << "Car started" << endl;
            }
        }
        else if (command == "stop")
        {
            cout << "Car stopped" << endl;
        }
        else if (command == "help")
        {
            cout << "start:- To start the car." << endl;
            cout << "stop:- To stop the car." << endl;
            cout << "help:- To see this page." << endl;
            cout << "quit:- To quit." << endl;
        }
        else if (command == "quit")
        {
            break;
        }
    }
}
