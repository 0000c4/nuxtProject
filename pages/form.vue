<template>
  <div class="h-[100vh] flex align-center justify-center">
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col justify-center w-[30%] lg:w-[50%] sm:w-[90%] gap-2"
    >
      <input
        @focus="clearError"
        required
        class="inputForm"
        v-model="form.surname"
        type="text"
        name="name"
        placeholder="Фамилия"
      />
      <input
      @focus="clearError"
        required
        class="inputForm"
        v-model="form.name"
        type="text"
        name="name"
        placeholder="Имя"
      />
      <input
      @focus="clearError"
        required
        class="inputForm"
        v-model="form.patronymic"
        type="text"
        name="name"
        placeholder="Отчество"
      />
      <input
      @focus="clearError"
        required
        class="inputForm"
        v-model="form.phoneNumber"
        type="text"
        name="name"
        placeholder="Номер телефона"
      />
      <input
      @focus="clearError"
        required
        class="inputForm"
        v-model="form.email"
        type="text"
        name="name"
        placeholder="Email"
      />
      <input
      @focus="clearError"
        required
        class="inputForm"
        v-model="form.password"
        type="password"
        name="name"
        placeholder="Пароль"
      />
      <div class="flex flex-col">
        <span class="text-red-500">{{ errorValidation.surname }}</span>
        <span class="text-red-500">{{ errorValidation.name }}</span>
        <span class="text-red-500">{{ errorValidation.patronymic }}</span>
        <span class="text-red-500">{{ errorValidation.phoneNumber }}</span>
      </div>
      <button type="submit" class="btn">Send</button>
    </form>
  </div>
</template>

<script setup>

let form = {//form data
  surname: "",
  name: "",
  patronymic: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const errorValidation = ref({ //error object
  surname: "",
  name: "",
  patronymic: "",
  phoneNumber: "",
});
//using validate functions from utils/validation.js
function handleSubmit() { //validate all fields
  if (validateName(form.surname) != "") {
    errorValidation.value = {
      ...errorValidation.value,
      surname: validateName(form.surname, "Фамилия"),
    };
  }
  if (validateName(form.name) != "") {
    errorValidation.value = {
      ...errorValidation.value,
      name: validateName(form.name, "Имя"),
    };
  }
  if (validateName(form.patronymic) != "") {
    errorValidation.value = {
      ...errorValidation.value,
      patronymic: validateName(form.patronymic, "Отчество"),
    };
  }
  if (validateNumber(form.phoneNumber) != "") {
    errorValidation.value = {
      ...errorValidation.value,
      phoneNumber: validateNumber(form.phoneNumber),
    };
  }
  if(Object.keys(errorValidation.value).length === 0){//if obj error is empty send data
    //sendData();
    console.log("данные отправлены")
  }
}

function clearError() {
  errorValidation.value = {};
}

function sendData() {
//send to server
console.log("данные отправлены")
}


</script>
