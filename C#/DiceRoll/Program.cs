using System;

namespace DiceRoll
{
	class Program
	{
		static void Main(string[] args)
		{
			Random randomGen = new Random();

			int roll = 0;
			int attempts = 0;

			while (roll != 6)
			{
				roll = randomGen.Next(1, 7);
				Console.WriteLine("Rolled: " + roll);
				attempts++;
			}

			Console.WriteLine($"It took {attempts} attempts to roll a 6");


			Console.ReadKey();
		}
	}
}
