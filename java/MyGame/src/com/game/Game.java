package com.game;

import java.awt.*;

public class Game extends Canvas implements Runnable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	Thread thread;
	boolean running = false;

	public synchronized void start() {
		thread = new Thread(this);
		thread.start();
		running = true;
	}

	public void run() {
		this.requestFocus();
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
				// System.out.println("FPS: " + frames);
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
}
