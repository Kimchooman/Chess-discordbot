
king_json_h = "king.json"
rook_json_h = "rook.json"
bishop_json_h = "bishop.json"
pawn_json_h = "pawn.json"
knight_json_h = "knight.json"

def blank_board_dict():

    letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
    dict_keys = {}

    for row in numbers:

        for col in letters:

            key = col + row

            temp = {key: []}

            dict_keys.update(temp)

    return dict_keys

