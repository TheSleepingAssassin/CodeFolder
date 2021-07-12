using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    class Wizard
    {
        string name, favSpell;
        public int maxSpells;
        public float xp;
        Random randomGen = new Random();

        public Wizard(string name, string favSpell)
        {
            this.name = name;
            this.favSpell = favSpell;
            maxSpells = randomGen.Next(1, 3);
            xp = 0;
        }

        public void fireSpell()
        {
            Console.WriteLine($"{name} casts {favSpell}");
            maxSpells--;
            xp += (float) 0.5;
            Console.WriteLine($"Spells left is {maxSpells} and xp is {xp}");
        }

        public void meditate()
        {
            Console.WriteLine($"{name} meditates to increase SpellCount");
            xp += (float) 0.1;
            maxSpells += 2;
        }

        public void dodge()
        {
            Console.WriteLine($"{name} dodges");
        }

        public void wins()
        {
            Console.WriteLine($"{name} wins");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Wizard hp = new Wizard("Harry Potter", "Expecto Patronum");
            Wizard voldy = new Wizard("Voldemort", "Avada Kedavra");

            while (true)
            {
                Console.ReadKey();
                Console.WriteLine("--- --- --- --- --- ---");
                if (hp.maxSpells <= 0)
                {
                    hp.meditate();
                }
                else if (voldy.maxSpells <= 0)
                {
                    voldy.meditate();
                }

                int highestXP = 7;
                if (hp.xp >= highestXP || voldy.maxSpells < -1)
                {
                    hp.wins();
                    break;
                } else if (voldy.xp >= highestXP || hp.maxSpells < -1)
                {
                    voldy.wins();
                    Console.WriteLine("The World Is Destroyed");
                    break;
                }

                if (hp.maxSpells != 0)
                {
                    hp.fireSpell();
                }

                if (voldy.maxSpells != 0)
                { 
                    voldy.fireSpell();
                }
                Console.WriteLine("--- --- --- --- --- ---");
            }


            Console.ReadKey();
        }
    }
}
