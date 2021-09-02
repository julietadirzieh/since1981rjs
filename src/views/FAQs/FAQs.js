import React from "react";
import "./FAQs.css";

export const FAQs = () => {
  return (
    <div className="FAQs-Container">
      <h1 className="FAQs-Title">PREGUNTAS FRECUENTES</h1>
      <ul className="listFAQs">
      <li className="liFAQs"> ¿Cómo puedo encargar un pedido?</li>
      <p>Completá el formulario en Contacto y nos comunicaremos a la brevedad.</p>
      <li className="liFAQs"> ¿Cuál es el mínimo de compra de tela?</li>
      <p>La tela se vende por rollo. Si querés comprar menos cantidad, te ofrecemos fraccionar un mínimo de 10 metros por corte y/o consultar nuestros combos de 10 metros totales en Inicio.</p>
      <li className="liFAQs">¿Hacen envíos a todo el país?</li>
      <p>Sí, hacemos envíos a todo el país. Dependiendo del lugar de destino, puede variar la demora en la entrega.</p>
      <li className="liFAQs">¿Venden camisas por menor?</li>
      <p>Sólo vendemos camisas por mayor. Para comprar por menor, te invitamos a conocer El Genovés.</p>
      </ul>
    </div>
  );
};