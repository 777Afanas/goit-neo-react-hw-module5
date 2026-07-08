import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import style from "./SearchBar.module.css";

const SearchSchema = Yup.object().shape({
  searchQuery: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    // .required("Please enter a search term"),
});

// 2. Початкові значення форми
const initialValues = {
  searchQuery: "",
};

const SearchBar = ({ onSubmit }) => {
  const searchBarId = useId(); // 3. Хук для генерації унікального ID

  // 4. Функція сабміту форми   
  const handleSearch = (values, actions) => {
    const trimmedQuery = values.searchQuery.trim()

    // якщо поле порожнє — показуємо toast і зупиняємо сабміт
    if (trimmedQuery === "") {
      toast.error("Please enter text to search for images!"); // Виклик сповіщення
      return; // Перериваємо виконання функції
    }     
    onSubmit(trimmedQuery);
    actions.resetForm(); // Очищуємо поле після успішного пошуку    
  };

  return (
    <header className={style.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSearch}
        validationSchema={SearchSchema}
      >
        <Form className={style.form}>
          <div className={style.inputWrapper}>
            {/* Доступний опис поля для скрінрідерів */}
            <label htmlFor={searchBarId} className={style.visuallyHidden}>
              Search images and photos
            </label> 
            <Field
              type="text"
              name="searchQuery"
              id={searchBarId}
              className={style.input}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div> 
          <button className={style.button} type="submit" aria-label="Search">
            <FiSearch size="16px" />
          </button>            
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
