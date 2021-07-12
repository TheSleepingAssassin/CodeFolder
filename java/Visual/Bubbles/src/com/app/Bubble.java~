package com.app;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.BasicStroke;
import java.awt.geom.*;

public class Bubble extends GameObject {

	int r;

	public Bubble(Point2D pos, int r, ID id) {
		super(pos, id);

		this.r = r;
	}

	public void tick() {

		double posX = pos.getX();
		double posY = pos.getY();

		posX = posX + vel.getX();
		posY = posY + vel.getY();

	}

	public void render(Graphics g) {

		Graphics2D g2d = (Graphics2D) g;

		g2d.setStroke(new BasicStroke(2));
		g2d.drawOval((int) (pos.getX() - r), (int) (pos.getY()) - r, r * 2, r * 2);

	}

}
