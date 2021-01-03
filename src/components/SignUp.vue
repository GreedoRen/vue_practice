<template>
  <form class="sign-up" @submit.prevent="checkForm">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input id="login" class="form-control" v-model.trim="login" />
    </div>
    <div class="form-group">
      <label for="login">Почта:</label>
      <input
        id="email"
        type="email"
        class="form-control"
        v-model.trim="email"
      />
    </div>
    <div class="form-group">
      <label for="login">Пароль:</label>
      <input
        id="password"
        type="password"
        class="form-control"
        v-model.trim="password"
      />
    </div>
    <div class="form-group">
      <label for="country">Страна проживания:</label>
      <select id="country" class="form-control" v-model="country">
        <option
          v-for="(country, index) in countries"
          :key="index"
          :value="country.value"
        >
          {{ country.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="themes">Любимые темы:</label>
      <select id="themes" class="form-control" v-model="favoriteTheme" multiple>
        <option
          v-for="(theme, index) in themes"
          :key="index"
          :value="theme.value"
        >
          {{ theme.label }}
        </option>
      </select>
    </div>
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="notification"
        v-model="agreeWithSendToMail"
        value="1"
      />
      <label class="form-check-label" for="notification"
        >Уведомлять меня о новых курсах 1</label
      >
    </div>
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="notification"
        v-model="agreeWithSendToMail"
        value="2"
      />
      <label class="form-check-label" for="notification"
        >Уведомлять меня о новых курсах 2</label
      >
    </div>
    <!-- <div class="flex">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          value="male"
          name="exampleRadios"
          id="male"
        />
        <label class="form-check-label" for="male"> Мужчина </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          value="female"
          name="exampleRadios"
          id="female"
        />
        <label class="form-check-label" for="female"> Женщина </label>
      </div> -->
    <!-- </div> -->
    <button type="submit" class="btn btn-primary">Сохранить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      email: "",
      password: "",
      countries: [
        {
          label: "Россия",
          value: "Russia",
        },
        {
          label: "Канада",
          value: "Canada",
        },
        {
          label: "Германия",
          value: "Germany",
        },
        {
          label: "Франция",
          value: "France",
        },
      ],
      country: "Russia",
      themes: [
        {
          label: "Технологии",
          value: "Technology",
        },
        {
          label: "Спорт",
          value: "Sport",
        },
        {
          label: "Культура",
          value: "Culture",
        },
        {
          label: "Политика",
          value: "Politisc",
        },
      ],
      favoriteTheme: ["Technology"],
      agreeWithSendToMail: [],
    };
  },
};
</script>

<style lang="css" scoped>
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>
