from PIL import Image
import sys
import os

ROW_LENGTH = 8
COL_LENGTH = 8

argv_list = (sys.argv[1]).split("|")

board_array = []

for row in range(ROW_LENGTH): # Adding argv elements to formated 2d list

    board_array.append([])

    for col in range(COL_LENGTH):

        board_array[row].append(argv_list.pop(0))

margin = 0
square_size = 47

board_image = Image.open("images/grey_board.png")

white_pawn = Image.open("images/white_pawn.png")
white_rook = Image.open("images/white_rook.png")
white_bishop = Image.open("images/white_bishop.png")
white_knight = Image.open("images/white_knight.png")
white_queen = Image.open("images/white_queen.png")
white_king = Image.open("images/white_king.png")
black_pawn = Image.open("images/black_pawn.png")
black_rook = Image.open("images/black_rook.png")
black_bishop = Image.open("images/black_bishop.png")
black_knight = Image.open("images/black_knight.png")
black_queen = Image.open("images/black_queen.png")
black_king = Image.open("images/black_king.png")

r_count = 1
c_count = 1

for row in board_array:

    if r_count > ROW_LENGTH:
        r_count = 1

    for piece in row:

        if c_count > COL_LENGTH:
            c_count = 1

        pos_x = margin + (c_count * square_size)
        pos_y = margin + (r_count * square_size)

        if piece == "  ":
            pass

        elif piece == "wP":
            board_image.paste(white_pawn, (pos_x, pos_y))

        elif piece == "wR":
            board_image.paste(white_rook, (pos_x, pos_y))

        elif piece == "wH":
            board_image.paste(white_knight, (pos_x, pos_y))

        elif piece == "wB":
            board_image.paste(white_bishop, (pos_x, pos_y))

        elif piece == "wQ":
            board_image.paste(white_queen, (pos_x, pos_y))

        elif piece == "wK":
            board_image.paste(white_king, (pos_x, pos_y))

        elif piece == "bP":
            board_image.paste(black_pawn, (pos_x, pos_y))

        elif piece == "bR":
            board_image.paste(black_rook, (pos_x, pos_y))

        elif piece == "bH":
            board_image.paste(black_knight, (pos_x, pos_y))

        elif piece == "bB":
            board_image.paste(black_bishop, (pos_x, pos_y))

        elif piece == "bQ":
            board_image.paste(black_queen, (pos_x, pos_y))

        elif piece == "bK":
            board_image.paste(black_king, (pos_x, pos_y))

        c_count += 1 

    r_count += 1

new_file_handle = "game.png"
print("games/{}".format(new_file_handle))

board_image.save("games/{}".format(new_file_handle))
