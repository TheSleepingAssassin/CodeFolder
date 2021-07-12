using System;
using System.Collections.Generic;

namespace Arrays_and_Lists
{
	class Program
	{
		static void Main(string[] args)
		{
			List<float> floats = new List<float>();

			for (int i = 0; i < 10; i++)
			{
				floats.Add(i + 1);
			}

			for (int i = 0; i < floats.Count; i++)
			{
				Console.WriteLine(floats[i]);
			}


			Console.ReadKey();
		}
	}
}
