package com.Game;

import java.util.Random;

public class Screen {

	public int[] pixels;
	int width, height;
	int sc = 8;

	public int[] tiles = new int[sc * sc];

	Random rand = new Random();

	public Screen(int width, int height) {
		this.width = width;
		this.height = height;
		pixels = new int[width * height];

		for (int i = 0; i < tiles.length; i++) {
			tiles[i] = rand.nextInt(0xffffff);
			tiles[0] = 0;
		}
	}

	public void clear() {
		for (int i = 0; i < pixels.length; i++) {
			pixels[i] = 0;
		}
	}

	public void render(int xOffset, int yOffset) {
		for (int y = 0; y < height; y++) {
			int yy = y + yOffset;
			for (int x = 0; x < width; x++) {
				int xx = x + xOffset;
				int tileIndex = ((xx >> 4) & 7) + ((yy >> 4) & 7) * 8;
				pixels[x + y * width] = tiles[tileIndex];
			}
		}
	}

}
