#pragma once

class Box
{
public:
	Box(int x, int y, int r);
	~Box();

public:
	int x, y, r;

public:
	void render();
	void update();
	void makeBody();
}
