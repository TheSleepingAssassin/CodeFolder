class Cursor
{
	constructor(pos, r)
	{
		this.pos = pos.copy();
		this.r = r;
	}

	tick(pos)
	{
		this.pos = pos.copy();
		this.collide();
	}

	render()
	{
		push();
		noStroke();
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r * 2);
		pop();
	}

	collides(other) {
		if ((this.pos.x + this.r > other.pos.x - other.r
			&&
			(this.pos.y + this.r > other.pos.y - other.r
				||
				this.pos.y - this.r < other.pos.y + other.r))
			||
			(this.pos.x - this.r < other.pos.x + other.r
				&&
				(this.pos.y + this.r > other.pos.y - other.r
					||
					this.pos.y - this.r < other.pos.y + other.r)))
		{
			return true;
		}
	}

	collide()
	{
		if (this.pos.x > width - this.r)
		{
			this.pos.x = width - this.r;
		}
		else if (this.pos.x < 0 + this.r)
		{
			this.pos.x = 0 + this.r;
		}

		if (this.pos.y > height - this.r)
		{
			this.pos.y = height - this.r;
		}
		else if (this.pos.y < 0 + this.r)
		{
			this.pos.y = 0 + this.r;
		}
	}
}