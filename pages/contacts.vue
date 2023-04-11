<template lang="pug">
  main.main
    section-contacts(
      v-if="loading"
      :contacts="contacts"
      :content="content"
      :background_images="background_images"
    )
</template>

<script>
import getConstructorPage from "@/mixins/getConstructorPage";

export default {
  data() {
    return {
      type: 'front_design',
      page_key: 'contacts',
    }
  },
  mixins: [getConstructorPage],
  computed: {
    contacts() {
      return [
        this.getGroups(this.content.phone),
        this.getGroups(this.content.email),
        this.getGroups(this.content.address)
      ]
    }
  },
  methods: {
    // Функция для группирования элементов массива
    getGroups(array) {
      // Объект для хранения информации о контактах, содержащий заголовок и массив строк
      let contact = {
        title: array.title,
        row: []
      }

      // Перебираем массив listLabels
      array.listLabels.forEach(item => {
        // Объект для хранения информации о контакте, содержащий метку и список
        let list = {
          label: item.value,
          list: []
        }

        // Перебираем массив list
        array.list.forEach(i => {
          // Если метка элемента совпадает с id текущего элемента из listLabels, добавляем элемент в список
          if (i.label === item.id) list.list.push(i)
        })

        // Добавляем объект list в массив row
        contact.row.push(list)
      })

      // Возвращаем объект contact
      return contact
    }

  }
}
</script>
