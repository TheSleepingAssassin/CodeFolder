#include "Vector.h"

Vector::Vector(int x, int y)
{
	mX = x;
	mY = y;
}

void Vector::set(int x, int y)
{
	mX = x;
	mY = y;
}

void Vector::set(int n)
{
	mX = n;
	mY = n;
}

void Vector::add(int x, int y)
{
	mX += x;
	mY += y;
}

void Vector::add(int n)
{
	mX += n;
	mY += n;
}

void Vector::sub(int x, int y)
{
	mX -= x;
	mY -= y;
}

void Vector::Vector::sub(int n)
{
	mX -= n;
	mY -= n;
}

void Vector::mult(int x, int y)
{
	mX *= x;
	mY *= y;
}

void Vector::mult(int n)
{
	mX *= n;
	mY *= n;
}

void Vector::div(int x, int y)
{
	mX /= x;
	mY /= y;
}

void Vector::div(int n)
{
	mX /= n;
	mY /= n;
}