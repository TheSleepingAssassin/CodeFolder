package com.App;

import java.util.LinkedList;
import java.awt.Graphics;

public class Handler {

	LinkedList<GameObject> objects = new LinkedList<>();

	public void tick() {
		for (GameObject tempObj : objects) {
			tempObj.tick();
		}
	}

	public void render(Graphics g) {
		for (GameObject tempObj : objects) {
			tempObj.render(g);
		}
	}

	public void addObject(GameObject obj) {
		objects.add(obj);
	}

}
