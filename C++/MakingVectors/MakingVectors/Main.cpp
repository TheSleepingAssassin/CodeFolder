#include <iostream>
#include "Vector.h"

using namespace std;

int main()
{
	Vector v = Vector(2, 2);

	v.set(200, 200);
	cout << v.mX << ", " << v.mY << endl;

	v.add(100);
	cout << v.mX << ", " << v.mY << endl;

	v.sub(200);
	cout << v.mX << ", " << v.mY << endl;

	v.mult(3);
	cout << v.mX << ", " << v.mY << endl;

	v.div(150);
	cout << v.mX << ", " << v.mY << endl;
}