#pragma once
class Vector
{
public:
	int mX, mY;
public:
	Vector(int x, int y);
public:
	void set(int x, int y);
	void set(int n);
	void add(int x, int y);
	void add(int n);
	void sub(int x, int y);
	void sub(int n);
	void mult(int x, int y);
	void mult(int n);
	void div(int x, int y);
	void div(int n);
};

