package com.App;

import javax.swing.JFrame;
import java.awt.Dimension;

public class Window {

	JFrame frame;

	public Window(App app) {
		frame = new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		app.setPreferredSize(new Dimension(App.WIDTH, App.HEIGHT));
		frame.add(app);
		frame.pack();

		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
		app.start();
	}

}
