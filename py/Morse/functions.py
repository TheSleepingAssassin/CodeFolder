from dictionary import *


def encrypt(message):
    cipher = ''
    for letter in message:
        if letter != ' ':
            cipher += code[letter] + ' '
        else:
            cipher += ' '
    return cipher


def decrypt(message):
    message += ' '

    decipher = ''
    citext = ''
    for letter in message:
        if letter != ' ':
            i = 0
            citext += letter
        else:
            i += 1
            if i == 2:
                decipher += ' '
            else:
                decipher += list(code.keys()
                                 )[list(code.values()).index(citext)]
                citext = ''
    return decipher
