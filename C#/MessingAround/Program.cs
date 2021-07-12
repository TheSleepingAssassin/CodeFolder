using System;

namespace MessingAround
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("This is a Calculator.");
			Console.WriteLine("Enter your problem.");

			while (true)
			{
				Console.Write("~> ");
				string problem = Console.ReadLine();

				if (problem == "quit")
				{
					break;
				}

				string[] problems = problem.Split();
				float a = (float)Convert.ToDouble(problems[0]);
				char op = Convert.ToChar(problems[1]);
				float b = (float)Convert.ToDouble(problems[2]);

				Console.WriteLine(operate(a, b, op));
			}
		}

		static float operate(float a, float b, char op)
		{
			if (op == '/')
			{
				return a / b;
			}
			else if (op == '*')
			{
				return a * b;
			}
			else if (op == '+')
			{
				return a + b;
			}
			else if (op == '-')
			{
				return a - b;
			}
			else
			{
				return 0;
			}
		}
	}
}
