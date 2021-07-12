package com.app;

import java.awt.Canvas;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.geom.Point2D;
import java.awt.image.BufferStrategy;
import java.util.ArrayList;
import java.util.Random;

public class App extends Canvas implements Runnable {

	/**
	 *
	 */
	private static final long serialVersionUID = -680822544224811522L;

	Thread thread;
	boolean running;

	public static int WIDTH = 650, HEIGHT = 650;
	ArrayList<Bubble> bubbles = new ArrayList<>();
	Random rand;

	public App() {

		new Window(WIDTH, HEIGHT, "App", this);

		rand = new Random();

	}

	public synchronized void start() {
		thread = new Thread(this);
		running = true;
	}

	public void run() {
		long lastTime = System.nanoTime();
		double amtOfTicks = 60.0;
		double ns = 1000000000 / amtOfTicks;
		double delta = 0;
		long timer = System.currentTimeMillis();
		int frames = 0;
		while (running) {
			long now = System.nanoTime();
			delta += (now - lastTime) / ns;
			lastTime = now;
			while (delta >= 1) {
				tick();
				delta--;
			}

			if (running) {
				render();
			}
			frames++;

			if (System.currentTimeMillis() - timer > 1000) {
				timer += 1000;
				System.out.println("FPS: " + frames);
				frames = 0;
			}
		}
		stop();
	}

	public synchronized void stop() {
		try {
			thread.join();
			running = false;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void tick() {

		if (bubbles.size() < 250) {
			bubbles.add(new Bubble(
					new Point2D.Double(rand.nextInt(WIDTH), (rand.nextInt((HEIGHT + 200) + (HEIGHT + 100))) - (HEIGHT + 100)), 20,
					ID.Bubble));
		}

		for (Bubble b : bubbles) {
			b.tick();
		}

	}

	public void render() {

		BufferStrategy bs = this.getBufferStrategy();
		if (bs == null) {
			this.createBufferStrategy(3);
			return;
		}

		Graphics g = bs.getDrawGraphics();

		g.setColor(Color.BLACK);
		g.fillRect(0, 0, WIDTH, HEIGHT);

		for (Bubble b : bubbles) {
			b.render(g);
		}

		g.dispose();
		bs.show();

	}

	public static void main(String[] args) {
		new App();
	}

}
