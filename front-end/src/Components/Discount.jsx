import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/Discount.scss";
import Form from "./Form";
import ModalWindow from "./ModalWindow";

function Discount() {
  // const [openModal, setOpenModal] = useState(false);
  const btnTitle = "Get discount";
  const title = "Thank You!";
  const text1 = "A confirmation letter has been sent to you";
  const text2 = "Check your inbox.";

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid },
  //   reset,
  // } = useForm({ mode: "onTouched" });

  // const handleClick = () => {
  //   async function getDiscount() {
  //     try {
  //       const response = await axios.post("http://localhost:3333/sale/send");
  //       return response.data;
  //     } catch (err) {
  //       return err.message;
  //     }
  //   }
  //   getDiscount();
  // };

  // const submitForm = (data) => {
  //   console.log(data);
  //   localStorage.setItem("discount", data.telephone);
  //   setOpenModal(true);
  //   reset();
  // };
  // console.log(errors);

  return (
    <div className="discount">
      <div className="discount__img">
        <img src="../images/dwarf.png" alt="dwarf" />
      </div>

      <div className="discount__form">
        <h1 className="discount__form__h1">5% off</h1>
        <h2 className="discount__form__h2">on the first order</h2>
        {/* <form onSubmit={handleSubmit(submitForm)}>
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
              Get a discount
            </button>
            <ModalWindow open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </form> */}
        {/* <div>
          {errors?.telephone && (errors?.telephone?.message || <p>Error</p>)}
        </div> */}
        <Form
          url={"http://localhost:3333/sale/send"}
          title={title}
          firstSubtitle={text1}
          secondSubtitle={text2}
          btnTitle={btnTitle}
        />
      </div>
    </div>
  );
}

export default Discount;
