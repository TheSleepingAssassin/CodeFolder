using System;

namespace Calculator
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("This is a Calculator");
			Console.WriteLine("Example:- 2 + 2");

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
				float b = (float)Convert.ToDouble(problems[2]);
				char op = Convert.ToChar(problems[1]);

				Console.WriteLine(operate(a, b, op));
			}


			Console.ReadKey();
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
			return 0;
		}
	}
}
