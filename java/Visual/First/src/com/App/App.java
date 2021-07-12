package com.App;

import java.awt.Canvas;
import java.awt.Graphics;
import java.awt.image.BufferStrategy;
import java.util.Random;
import java.awt.Color;

public class App extends Canvas implements Runnable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    Thread thread;
    boolean running;
    public static final int WIDTH = 650, HEIGHT = 650;
    Handler handler;
    Random r;

    public App() {
        new Window(WIDTH, HEIGHT, "Visual", this);

        r = new Random();

        handler = new Handler();

        for (int i = 0; i < 100; i++) {
            new Bubble(r.nextInt(WIDTH), r.nextInt(HEIGHT), 20, ID.Bubble, handler);
        }
    }

    public static void main(String[] args) throws Exception {
        new App();
    }

    public synchronized void start() {
        thread = new Thread(this);
        thread.start();
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

    public void tick() {
        handler.tick();
    }

    public void render() {
        BufferStrategy bs = this.getBufferStrategy();
        if (bs == null) {
            this.createBufferStrategy(3);
            return;
        }

        Graphics g = bs.getDrawGraphics();

        g.setColor(new Color(0, 100, 255));
        g.fillRect(0, 0, WIDTH, HEIGHT);

        handler.render(g);

        g.dispose();
        bs.show();

    }

}
