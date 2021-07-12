using System;

namespace FirstAwesomeProgram
{
	class Program
	{
		static void Main(string[] args)
		{
			for (int i = 0; i < 10; i++)
			{
				int result = Convert.ToInt32(Math.Pow(2, i + 1));
				Console.WriteLine(result);
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
			else
			{
				return 0;
			}
		}
	}
}
