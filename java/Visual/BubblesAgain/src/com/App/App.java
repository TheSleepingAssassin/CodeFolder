package com.App;

import java.awt.Canvas;

public class App extends Canvas implements Runnable {

	/**
	 *
	 */
	private static final long serialVersionUID = -9055870954366205178L;

	public static final int WIDTH = 600, HEIGHT = 600;

	Thread thread;
	boolean running = false;

	public App() {
	}

	public synchronized void start() {
		thread = new Thread();
		running = true;
		thread.start();
	}

	@Override
	public void run() {
		long lastTime = System.nanoTime();
	}

	public synchronized void stop() {
		try {
			thread.join();
			running = false;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		new App();
	}

}
