package com.app;

import java.awt.Canvas;
import java.awt.Dimension;

import javax.swing.JFrame;

public class Window extends Canvas {

	/**
	 *
	 */
	private static final long serialVersionUID = -6925638366151893658L;

	public Window(int width, int height, String title, App app) {

		JFrame frame = new JFrame(title);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.add(app);
		app.setPreferredSize(new Dimension(width, height));
		frame.pack();

		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
		app.start();

	}

}
