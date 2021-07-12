print('Type help to see the list of commands.')
command = ""
started = False
while True:
    command = input('> ')
    if command == "start":
        if started:
            print('Car has already started!')
        else:
            started = True
            print('Car started.')
    elif command == "stop":
        if not started:
            print('Car has already stopped!')
        else:
            started = False
            print('Car stopped.')
    elif command == "help":
        print("""
start:- To start the car.
stop:- To stop the car.
help:- To display this page.
quit:- To quit.
    """)
    elif command == "quit":
        break
    else:
        print("Sorry I don't understand that.")
