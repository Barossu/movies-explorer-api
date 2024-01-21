const DB_CONN_DEV = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const WRONG_DATA_MESSAGE = 'Неправильные почта или пароль';
const CONFLICTERROR_MESSAGE = 'Пользователь с такой почтой уже существует';
const ACCESSDENIEDERROR_MESSAGE = 'Недостаточно прав';
const NOTFOUNDERROR_MESSAGE = 'Не найдено';
const UNAUTHORIZEDERROR_MESSAGE = 'Необходима авторизация';
const VALIDATIONERROR_MESSAGE = 'Переданы некорректные данные';

module.exports = {
  DB_CONN_DEV,
  WRONG_DATA_MESSAGE,
  CONFLICTERROR_MESSAGE,
  ACCESSDENIEDERROR_MESSAGE,
  NOTFOUNDERROR_MESSAGE,
  UNAUTHORIZEDERROR_MESSAGE,
  VALIDATIONERROR_MESSAGE,
};
