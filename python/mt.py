__author__ = 'Ivo'


class MutltiplicationTable:
    def __init__(self, row_count=9):
        if row_count < 1 or row_count > 9:
            raise ValueError('arg should be between 1 to 9.')
        self.__row_count = row_count

    def __str__(self):
        return MutltiplicationTable.__table_str(self.__row_count)

    @staticmethod
    def __table_str(row_count):
        row_str_list = list(MutltiplicationTable.__table_generator(row_count))
        return '\r\n'.join(row_str_list)

    @staticmethod
    def __table_generator(row_count):
        for count in range(1, row_count + 1):
            yield MutltiplicationTable.__row_str(count)


    @staticmethod
    def __row_str(row_index):
        ele_list = list(MutltiplicationTable.__row_generator(row_index))
        return '\t'.join(ele_list)

    @staticmethod
    def __row_generator(row_index):
        for col in range(1, row_index + 1):
            yield str(col) + '*' + str(row_index) + '=' + str(col * row_index)
