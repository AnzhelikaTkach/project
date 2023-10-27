import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/Discount.scss";

function Discount() {
  

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  const handleClick = () => {


    async function getDiscount() {
      try {
        const response = await axios.post("http://localhost:3333/sale/send");
        return response.data;
      } catch (err) {
        return err.message;
      }
    }
    getDiscount();
  };

  const submitForm = (data) => {
    console.log(data);
    localStorage.setItem("discount", data.telephone);
    reset();
  };
  console.log(errors);

  return (
    <div className="discount">
      <div className="discount__img">
        <img src="../images/dwarf.png" alt="dwarf" />
      </div>

      <div className="discount__form">
        <h1 className="discount__form__h1">5% off</h1>
        <h2 className="discount__form__h2">on the first order</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="discount__form__form">
            <input
              
              className="discount__form__input"
              placeholder="+49"
              type="number"
              {...register("telephone", {
                required: "This input is required",
                // minLength: {
                //   value: 11,
                //   message: "Too short! you Need 11 symbols",
                // },
                maxLength: {
                  value: 11,
                  message: "Too long! Max length is 11!",
                },
              })}
            />
            <button className="discount__form__dis">Get a discount</button>
            <button
              className="discount__form__dis"
              onClick={() => handleClick()}
            >
              Get a discount
            </button>
          </div>
        </form>
        <div>
          {errors?.telephone && (errors?.telephone?.message || <p>Error</p>)}
        </div>
      </div>
    </div>
  );
}

export default Discount;
