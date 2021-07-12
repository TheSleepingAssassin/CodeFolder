class Enemy
{
	constructor(pos, r)
	{
		this.pos = pos.copy();
		this.r = r;
	}

	render()
	{
		push();
		rect(pos.x, pos.y, this.r * 2, this.r * 2);
		pop();
	}
}