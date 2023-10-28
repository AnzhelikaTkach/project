import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ModalWindow from "./ModalWindow";
import "../styles/Discount.scss";
import "../styles/ModalWindow.scss";
import { clearCart } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

function Form({ url, firstSubtitle, secondSubtitle, btnTitle }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  const handleClick = () => {
    async function getDiscount() {
      try {
        const response = await axios.post(url);
        return response.data;
      } catch (err) {
        return err.message;
      }
    }
    getDiscount();
  };

  const submitForm = (data) => {
    console.log(data);
    if (btnTitle === "Get discount") {
      localStorage.setItem("discount", data.telephone);
    }
    if (btnTitle === "Order") {
      localStorage.setItem("order", data.telephone);
      dispatch(clearCart());
    }
    setOpenModal(true);
    reset();
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="discount__form__form">
          <input
            className="discount__form__input"
            placeholder="+49"
            type="number"
            {...register("telephone", {
              required: "This input is required",
              minLength: {
                value: 11,
                message: "Too short! you Need 11 symbols",
              },
              maxLength: {
                value: 11,
                message: "Maximum phone number length is 11 symbols",
              },
            })}
          />
          <button
            isValid={!isValid}
            className="discount__form__dis"
            onClick={() => handleClick()}
          >
            {btnTitle}
          </button>
          <ModalWindow
            open={openModal}
            onClose={() => setOpenModal(false)}
            firstSubtitle={firstSubtitle}
            secondSubtitle={secondSubtitle}
          />
        </div>
      </form>
      <div>
        {errors?.telephone && (errors?.telephone?.message || <p>Error</p>)}
      </div>
    </div>
  );
}

export default Form;
