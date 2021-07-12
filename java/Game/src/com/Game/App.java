package com.Game;

import java.awt.Canvas;
// import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.image.BufferStrategy;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferInt;

public class App extends Canvas implements Runnable {

	/**
	 *
	 */
	private static final long serialVersionUID = 9122542397075329916L;

	public static int width = 600;
	public static int height = 600;
	// public static int scale = 3;

	Window window;
	Screen screen;
	Thread thread;
	boolean running = false;
	String name = "Game";

	BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
	int[] pixels = ((DataBufferInt) image.getRaster().getDataBuffer()).getData();

	public App() {
		Dimension size = new Dimension(width, height);
		window = new Window(size, this);
		screen = new Screen(width, height);
	}

	public synchronized void start() {
		thread = new Thread(this, "Game");
		thread.start();
		running = true;
	}

	public void run() {
		long lastTime = System.nanoTime();
		long timer = System.currentTimeMillis();
		final double ns = 1000000000 / 60.0;
		int frames = 0;
		int updates = 0;
		double delta = 0;
		while (running) {
			long now = System.nanoTime();
			delta += (now - lastTime) / ns;
			lastTime = now;

			while (delta >= 1) {
				update();
				updates++;
				delta--;
			}

			render();
			frames++;

			if (System.currentTimeMillis() - timer > 1000) {
				timer += 1000;
				// System.out.println("frames: " + frames + ", " + "Updates: " + updates);
				window.changeTitle(name + " | " + "frames: " + frames + ", " + "Updates: " + updates);
				frames = 0;
				updates = 0;
			}
		}
		stop();
	}

	public synchronized void stop() {
		try {
			thread.join();
			running = false;
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		new App();
	}

	void update() {
	}

	void render() {
		BufferStrategy bs = this.getBufferStrategy();
		if (bs == null) {
			this.createBufferStrategy(3);
			return;
		}

		screen.clear();
		screen.render(0, 0);

		for (int i = 0; i < pixels.length; i++) {
			pixels[i] = screen.pixels[i];
		}

		Graphics g = bs.getDrawGraphics();

		// g.setColor(Color.BLACK);
		// g.fillRect(0, 0, getWidth(), getHeight());

		g.drawImage(image, 0, 0, getWidth(), getHeight(), null);

		g.dispose();
		bs.show();
	}

}
