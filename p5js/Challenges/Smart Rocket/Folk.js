class Folk {
  constructor(x, y) {
    this.rockets = [];
    this.folk = 10;
    for (let i = 0; i < this.folk; i++) {
      this.rockets[i] = new Rocket(x, y);
    }
  }

  update() {
    for (let r of this.rockets) {
      r.render();
      r.update();
      t.attract(r);
    }
    for (let i = 0; i < this.rockets.length; i++) {
      let r = this.rockets[i];
      if (r.pos.x > t.pos.x - t.w / 2 && r.pos.x < t.pos.x + t.w / 2 && r.pos.y > t.pos.y - t.h / 2 && r.pos.y < t.pos.y + t.h / 2) {
        this.rockets.splice(i, 1);
        console.log(this.rockets.length);
      }
    }
  }
}