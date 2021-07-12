package com.App;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.BasicStroke;
import java.util.Random;
import java.awt.Color;

public class Bubble extends GameObject {

	int r;
	Random rand;

	public Bubble(int x, int y, int r, ID id, Handler handler) {
		super(x, y, id, handler);

		rand = new Random();

		this.r = r;
	}

	public void tick() {
		// velX = rand.nextInt(2 - (-2)) + (-2);
		velX = (int) (Math.random() * (2 - (-2))) + (-2);
		velY = rand.nextInt(7 - 5) + 5;
		velY *= -1;

		x += velX;
		y += velY;

		this.loop();

	}

	public void render(Graphics g) {
		Graphics2D g2d = (Graphics2D) g;

		g2d.setColor(Color.WHITE);
		g2d.setStroke(new BasicStroke(2));
		g2d.drawOval(x - r, y - r, r * 2, r * 2);
	}

	void loop() {
		if (x > App.WIDTH + r) {
			x = -r;
		} else if (x < -r) {
			x = App.WIDTH + r;
		}

		if (y < -r) {
			y = App.HEIGHT + r;
		}
	}

}
