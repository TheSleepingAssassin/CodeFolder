command = ""
started = False
print(f"Type 'help' to see the list of commands")
while True:
    command = input('> ').lower()
    if command == "start":
        if started:
            print('The car has already started!')
        else:
            started = True
            print("Car is started")
    elif command == "stop":
        if not started:
            print('Car is already stopped!')
        else:
            started = False
            print("Car is stopped")
    elif command == "help":
        print("""
start:- To start the car.
stop:- To stop the car.
help:- To see this page.
quit:- To terminate the program.
        """)
    elif command == "quit":
        break
    else:
        print("I don't understand that type help to see the list of commands that are valid.")
