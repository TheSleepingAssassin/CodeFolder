class Button {
	constructor(pos, text, w, h)
	{
		this.pos = pos.copy();
		this.txt = text;
		this.w = w;
		this.h = h;
	}

	collides(other)
	{
		if ((other.pos.x > this.pos.x - this.w && (other.pos.y > this.pos.y - this.h || other.pos.y < this.pos.y + this.h)))
	}

	render()
	{
		push();
		fill(255);
		stroke(255);
		text(txt, this.pos.x, this.pos.y);
		noFill();
		rect(this.pos.x, this.pos.y, this.w * 2, this.h * 2);
		pop();
	}
}