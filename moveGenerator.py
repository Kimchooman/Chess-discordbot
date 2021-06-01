import json
import math

king_json_h = "king.json"
rook_json_h = "rook.json"
bishop_json_h = "bishop.json"
black_pawn_json_h = "black_pawn.json"
white_pawn_json_h = "white_pawn.json"
knight_json_h = "knight.json"

file_path = "movements/"
letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]

class arrayPointer():

    def __init__(self, x, y):

        self.x = x 
        self.y = y 

def blank_board_dict():

    dict_keys = {}

    for row in numbers:

        for col in letters:

            key = col + row

            temp = {key: []}

            dict_keys.update(temp)

    return dict_keys

def in_range_list(ls, top, bottom):

    rtn_ls = []

    for obj in ls:

        if obj.x >= bottom and obj.x <= top:
            if obj.y >= bottom and obj.y <= top:
                rtn_ls.append(obj)

    return rtn_ls

# --------------------------------------------------------------------------

king_json = blank_board_dict()
king_keys = king_json.keys()

for key in king_keys:

    orig_letter_i = letters.index(key[0])
    orig_number_i = int(key[1]) - 1
    temp_ls = []

    for square in king_keys:
        target_letter_i = letters.index(square[0])
        target_number_i = int(square[1]) - 1

        delta_x = target_letter_i - orig_letter_i 
        delta_y = target_number_i - orig_number_i

        distance = math.sqrt(delta_x**2 + delta_y**2)

        if distance <= 1.5 and key != square: 
            temp_ls.append(square)

    king_json[key].extend(temp_ls)

path = file_path + king_json_h 
with open(path, "w") as fh:
    json.dump(king_json, fh)

# --------------------------------------------------------------------------

rook_json = blank_board_dict()
rook_keys = rook_json.keys()

for key in rook_keys:

    temp_ls = []

    for char in letters:
        if char != key[0]:
            temp_ls.append(char + key[1])

    for num in numbers:
        if num != key[1]:
            temp_ls.append(key[0] + num)

    rook_json[key].extend(temp_ls)

#json_object = json.dumps(rook_json, indent=4)

path = file_path + rook_json_h
with open(path, "w") as fh:
    json.dump(rook_json, fh)

# --------------------------------------------------------------------------

bishop_json = blank_board_dict()
bishop_keys = bishop_json.keys()

for key in bishop_keys:

    orig_letter_i = letters.index(key[0])
    orig_number_i = int(key[1]) - 1

    temp_ls = []

    for square in bishop_keys:

        target_letter_i = letters.index(square[0])
        target_number_i = int(square[1]) - 1

        delta_x = target_letter_i - orig_letter_i
        delta_y = target_number_i - orig_number_i

        if abs(delta_x) == abs(delta_y) and key != square:

            n = numbers[target_number_i]
            c = letters[target_letter_i]

            temp_ls.append(c + n)

    bishop_json[key].extend(temp_ls)

#json_object = json.dumps(bishop_json, indent=4)

path = file_path + bishop_json_h
with open(path, "w") as fh:
    json.dump(bishop_json, fh)

# --------------------------------------------------------------------------


# !!!
#       unlike normal pieces pawns movements vary based on color, thus 2 files are needed
# !!!

black_pawn_json = blank_board_dict()
black_pawn_keys = black_pawn_json.keys()

for key in black_pawn_keys:

    orig_letter_i = letters.index(key[0])
    orig_number_i = int(key[1]) - 1

    temp_ls = []

    if orig_number_i == 6:

        move1 = key[0] + numbers[orig_number_i - 1]
        move2 = key[0] + numbers[orig_number_i - 2]

        temp_ls.append(move1)
        temp_ls.append(move2)

    elif orig_number_i == 0:
        pass

    else:    

        temp_ls.append(key[0] + numbers[orig_number_i - 1])

    black_pawn_json[key].extend(temp_ls)

#json_object = json.dumps(black_pawn_json,indent=4)

path = file_path + black_pawn_json_h
with open(path, "w") as fh:
    json.dump(black_pawn_json, fh)

# --------------------------------------------------------------------------

white_pawn_json = blank_board_dict()
white_pawn_keys = white_pawn_json.keys()

for key in white_pawn_keys:

    orig_letter_i = letters.index(key[0])
    orig_number_i = int(key[1]) - 1

    temp_ls = []

    if orig_number_i == 1:

        move1 = key[0] + numbers[orig_number_i + 1]
        move2 = key[0] + numbers[orig_number_i + 2]

        temp_ls.append(move1)
        temp_ls.append(move2)

    elif orig_number_i == 7:
        pass

    else:    

        temp_ls.append(key[0] + numbers[orig_number_i - 1])

    white_pawn_json[key].extend(temp_ls)

#json_object = json.dumps(white_pawn_json,indent=4)

path = file_path + white_pawn_json_h
with open(path, "w") as fh:
    json.dump(white_pawn_json, fh)

# --------------------------------------------------------------------------
knight_json = blank_board_dict()
knight_keys = knight_json.keys()

for key in knight_keys:

    orig_letter_i = letters.index(key[0])
    orig_number_i = int(key[1]) - 1

    temp_ls = []

    top = 7
    bottom = 0

    move1 = arrayPointer(orig_letter_i - 1, orig_number_i + 2)
    move2 = arrayPointer(orig_letter_i + 1, orig_number_i + 2)
    move3 = arrayPointer(orig_letter_i + 2, orig_number_i + 1)
    move4 = arrayPointer(orig_letter_i - 2, orig_number_i + 1)
    move5 = arrayPointer(orig_letter_i - 2, orig_number_i - 1)
    move6 = arrayPointer(orig_letter_i + 2, orig_number_i - 1)
    move7 = arrayPointer(orig_letter_i + 1, orig_number_i -2)
    move8 = arrayPointer(orig_letter_i - 1, orig_number_i - 2)

    in_range_ls = in_range_list([move1, move2, move3, move4, move5, move6, move7, move8], top, bottom)

    for move in in_range_ls:

        c = letters[move.x]
        n = numbers[move.y]

        temp_ls.append(c+n)

    knight_json[key].extend(temp_ls)

#json_object = json.dumps(knight_json, indent=4)

path = file_path + knight_json_h
with open(path, "w") as fh:
    json.dump(knight_json, fh)


