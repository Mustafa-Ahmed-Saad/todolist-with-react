import React from 'react';
import './TodoItems.css';

const TodoItems = (props) => {
   const { items, deleteItem } = props;
   const lengthOfItems = items.length;
   const handelClick = (e) => {
      e.stopPropagation();
      e.target.parentElement.classList.toggle('backBlack');
   };
   const ListItems = lengthOfItems ? ( // خلي بالك الصفر يعني فولس و الواحد يعني ترو و اي رقم يعني ترو
      items.map((item) => {
         return (
            <div key={item.id} onClick={handelClick}>
               <span className="name">{item.name}</span>
               <span className="age">{item.age}</span>
               <span
                  className="action icon"
                  onClick={() => {
                     deleteItem(item.id);
                  }}
               >
                  &times;
               </span>
            </div>
         );
      })
   ) : (
      <p>there is no items to show</p>
   );
   return (
      <div className="ListItems">
         <div>
            <span className="name title">name</span>
            <span className="age title">age</span>
            <span className="action title">action</span>
         </div>
         {ListItems}
      </div>
   );
};

export default TodoItems;
