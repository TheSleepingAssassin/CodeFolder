package com.game;

import javax.swing.*;
import java.awt.Canvas;
import java.awt.Dimension;

public class Window extends Canvas {

	/**
	 *
	 */
	private static final long serialVersionUID = 1877720651231192133L;

	public Window(int width, int height, String title, Game game) {
		JFrame frame = new JFrame(title);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.add(game);
		game.setPreferredSize(new Dimension(width, height));
		frame.pack();

		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
		game.start();
	}

}
