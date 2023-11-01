

import "../styles/Discount.scss";
import Form from "./Form";


function Discount() {
  const btnTitle = "Get discount";
  const title = "Thank You!";
  const text1 = "A confirmation letter has been sent to you";
  const text2 = "Check your inbox.";

  return (
    <div className="discount">
      <div className="discount__img">
        <img src="../images/dwarf.png" alt="dwarf" />
      </div>

      <div className="discount__form">
        <h1 className="discount__form__h1">5% off</h1>
        <h2 className="discount__form__h2">on the first order</h2>
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
