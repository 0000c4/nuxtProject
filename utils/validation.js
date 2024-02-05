export const validateNumber = (phoneNumber) => {
    if (phoneNumber[0] == "+" && phoneNumber[1] == "7") {
      //проверка на первые символы
      return "";
    } else {
      return "номер телефона должен начинаться с +7";
    }
  }

  export const validateName = (name, field) => {
    const regEx = /^[А-яЁё ]/gi;
    if (regEx.test(name)) {
      //проверка на кириллицу
      if (name.split(" ").length > 2) {
        //проверка на количество слов
        return `Поле ${field} может содержать не более двух слов`;
      } else {
        return "";
      }
    } else {
      return `Полe ${field} может содержать только кириллицу`;
    }
  }