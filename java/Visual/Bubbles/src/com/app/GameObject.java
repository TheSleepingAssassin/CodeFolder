package com.app;

import java.awt.Graphics;
import java.awt.geom.*;

public abstract class GameObject {

	protected Point2D pos, vel;
	protected ID id;

	public GameObject(Point2D pos, ID id) {

		this.pos = pos;
		this.id = id;

	}

	public abstract void tick();

	public abstract void render(Graphics g);

	// GET SET METHODS

	public void setPos(Point2D pos) {
		this.pos = pos;
	}

	public Point2D getPos() {
		return pos;
	}

	public void setID(ID id) {
		this.id = id;
	}

	public ID getID() {
		return id;
	}

	public void setVel(Point2D vel) {
		this.vel = vel;
	}

}
