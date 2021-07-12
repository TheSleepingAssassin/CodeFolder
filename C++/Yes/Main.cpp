#include <iostream>

float operate(float a, float b, char op);

int main()
{
  float a, b;
  char op;
  std::string command;

  std::cout << "Type Help for the list of commands." << std::endl;

  while (true)
  {
    std::cout << "Command: ";
    std::cin >> command;

    if (command == "help")
    {
      std::cout << "\nType 'start' to start the calculator" << std::endl;
      std::cout << "Type 'quit' to quit" << std::endl;
      std::cout << "Type 'help' for this page\n" << std::endl;
      continue;
    }
    else if (command == "quit")
    {
      // return 1 if need to
      break;
    }
    else if (command == "start")
    {
      // Start
    }
    else
    {
      std::cout << "That is not a valid command" << std::endl;
      std::cout << "Try again" << std::endl;
      continue;
    }

    // Number A
    std::cout << "Enter a number: ";
    try
    {
      std::cin >> a;
      std::string a_ = std::to_string(a);
      throw (a_);
    }
    catch (std::string a)
    {
      std::cout << a << " " << "is invalid" << std::endl;
      continue;
    }
    // Number A End

    // Number B
    std::cout << "Enter the second number: ";
    try
    {
      std::cin >> b;
      std::string b_ = std::to_string(b);
      throw (b_);
    }
    catch (std::string b)
    {
      std::cout << b << " " << "is invalid" << std::endl;
      continue;
    }
    // Number B End

    // Operator OP
    std::cout << "Enter the operator: ";
    try
    {
      std::cin >> op;
      throw (op);
    }
    catch (char op)
    {
      std::cout << op << " " << "is invalid" << std::endl;
      continue;
    }
    // Operator OP End

    // Operate
    std::cout << operate(a, b, op) << std::endl;
    // Operate End
  }

  return 0;
}

float operate(float a, float b, char op)
{
  switch (op)
  {
    case '/':
      return a / b;
      break;
    case '*':
      return a * b;
      break;
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    default:
      break;
  }
}
