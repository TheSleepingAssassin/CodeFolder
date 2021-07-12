class Box {
	constructor(x, y, w, h, stats) {
		let options = {
			isStatic: stats
		};
		this.body = Bodies.rectangle(x, y, w, h, options);
		World.add(world, this.body);
		this.w = w;
		this.h = h;
	}

	render() {
		let pos = this.body.position;
		let a = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(a);
		fill(255);
		rect(0, 0, this.w, this.h);
		pop();
	}
}