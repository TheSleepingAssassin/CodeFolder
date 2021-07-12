#include <iostream>

using namespace std;

string calcDay(int dayNum)
{
    string day;
    bool inval = false;

    switch(dayNum)
    {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        inval = true;
        cout << "That is an Invalid day of the week.";
    }

    if (!inval)
    {
        return day;
    }
}

int main()
{
    int val;
    cout << "Enter a dayNumber of the week: ";
    cin >> val;

    string day = calcDay(val);
    cout << day;

    return 0;
}
