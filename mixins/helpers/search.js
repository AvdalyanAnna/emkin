import {cloneDeep, without, has} from 'lodash';
import CryptoJS from 'crypto-js'

const updateAnswerIds = function (answersFiltersIds, value, index) {
  let answersIds = cloneDeep(answersFiltersIds)
  if (has(answersIds, index)) { // если в объекте уже есть массив с этим индексом
    answersIds[index].push(value); // добавляем новое значение в существующий массив
  } else {
    answersIds[index] = [value]; // создаем новый массив с переданным значением
  }
  return answersIds
}

const removeAnswerIds = function (answersFiltersIds, value, index) {
  let answersIds = cloneDeep(answersFiltersIds)
  if (has(answersIds, index)) { // если в объекте уже есть массив с этим индексом
    answersIds[index] = without(answersIds[index], value); // удаляем переданное значение из массива
  }
  return answersIds
}

const addAnswersToGlobalArray = function addAnswersToGlobalArray(answersIds, globalArray) {
  Object.values(answersIds).forEach((answer) => {
    answer.forEach((value) => {
      globalArray.push(value);
    });
  });
  return globalArray;
}
const decodeQuery = function (encryptedData) {
  const secretKey = '321891698'
  if(encryptedData){
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey) // расшифровываем данные
    const jsonData = decryptedData.toString(CryptoJS.enc.Utf8) // преобразуем данные в JSON-строку
    return  JSON.parse(jsonData)  //преобразуем JSON-строку в объект
  }else{
    return {}
  }

}
const encodeQuery = function (query) {
  const secretKey = '321891698'
  const jsonData = JSON.stringify(query)
  const ciphertext = CryptoJS.AES.encrypt(jsonData, secretKey).toString()
  return `data=${encodeURIComponent(ciphertext)}`

}
export {
  updateAnswerIds,
  removeAnswerIds,
  addAnswersToGlobalArray,
  decodeQuery,
  encodeQuery
}
