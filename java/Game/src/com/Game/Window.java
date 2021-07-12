package com.Game;

import java.awt.Dimension;
import javax.swing.JFrame;

public class Window {

	JFrame frame;

	public Window(Dimension size, App game) {
		frame = new JFrame();
		frame.setResizable(false);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.add(game);
		game.setPreferredSize(size);
		frame.pack();

		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
		game.start();
	}

	public void changeTitle(String title) {
		frame.setTitle(title);
	}

}
