import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
   state = {
      items: [
         { id: 1, name: 'Mustafa', age: 24 },
         { id: 2, name: 'Ahmed', age: 25 },
         { id: 3, name: 'Saad', age: 26 },
      ],
   };

   // هنعرف فانكشن الدليت اتيم هنا علشان لما هيا هتشتغل علي الستيت و هتبدا تشيل منها عنصر معين و بالتالي الستيت هنا فلازم نعرف ال فانكشن هنا حتي لو هنستخدمها في كومبوننت تاني
   deleteItem = (id) => {
      // الطريقة الاولي بستخدام ال filter
      const items = this.state.items.filter((item) => {
         // الفيلتر بيلف علي كل الايتم اللي في الاراي و بيشوف هل الفانكشن اللي جوا الفيلتر دي رجعت ترو ولا فولس لو رجعت ترو هيحط العنصر دا في اراي جديدة و لو فولس مش هيحط العنصر دا و هيدخل علي العنص اللي بعدو و هاكذا لحد ما يكون اراي جديدة وييعتبر محزوف منها العنصر اللي الشرط طلع معاه ب فولس
         return item.id !== id;
      });
      this.setState({ items });

      // الطريقة الثانية بستخدام ال findIndex
      // const { items } = this.state;
      // const index = items.findIndex((item) => {
      //    // يعني الفيند اندكس هتلفلك علي كل الاراي اللي هيا فيها كل الايتم و في كل مرة هتنفز الفانكشن اللي جواها اللي هي بتعمل التالي بتجيب الايتم و تشوف هل الاي دي اللي في الايتم الاول دا بيساوي الاي دي اللي معايا دا لو اه هترجعلك الاندكس المناسب لو لا هتدخل علي الاندكس اللي بعدو او الايتم اللي بعدو تنفز علية نفس الفانكسن لحد ما تجبلك الاي دي المناسب
      //    // findIndex will return id that make the condition is true
      //    // الفايند انكس شبة ال ماب و لكن وظيفة الفيند اندكس انها تجبلك و الاندكس بتاع العنصر اللي هينطبق علية الشرط اللي جوا الفانكشن اللي مكتوبة جوا الفيند انكس
      //    // يعني لو الفانكشن اللي جوا الفايند انكس رجعت ترو هتروج الفايند اندكس جيبالك الانكس بتاع العنصر اللي رجعلك ترو دا و بعدين تقف مش تكمل تشيك علي بقية العناصر لكن الماب بتنفز نفس الفانكشن اللي جواها علي كل العناصر
      //    return item.id === id;
      // });
      // console.log(index); // في حالة لو كتبت الماب بدل الفيند اندكس هتلاقي قيمة الاندكس دا باراي و الاراي دي فيها ترو و فولس و عددهم بيساوي عدد العناصر اللي في الاراي اللي قبل الماب و الاراي و الترو لو الشرط تحقق و لو بصيت هذة الاراي هنا هتلاقي السبليس بتشتغل  غلط و بتمسح عناصر غلط و هتلاقي حجات تانية بتتمسح و علشان كدا لازم تستخدم الفاند انكس لانو هيرجعلك الاندكس بتاع العنصر اللي هينطبق علية الشرط
      // items.splice(index, 1);
      // this.setState({ items });
   };

   addItem = (newItem) => {
      // الفانكشن دي بنكتبها هنا لان اللي بيظهر هو الاوبجيكتات اللي في الستيت و يبقي كدا اخنا عاوزين نضيف العنصر الجديد للستيت اللي هنا فكتبنا الفانكشن هنا مع اننا هنستخدمها في كومبوننت تاني و كمان لما جينا نضيف اي دي ضفناه هنا برضو لاننا هنحدد الاي دي بناء علي العناصر اللي في الاراي اللي في الستيت وبما ان الستيت هنا فهنحط الاي دي هنا مش في كومبوننت تاني
      let checkMatch = this.state.items.findIndex((item) => {
         // console.log(item.name);
         // console.log(newItem.name);
         return item.name === newItem.name;
      });
      if (checkMatch < 0) {
         // will be -1 if this name is not found in items and grater than 0 if this name is found
         let newId = this.state.items.length + 1;
         // add unique id to solve the proplem of key
         newItem.id = newId;
         // عملنا فانكشن الاد هنا لانها هتغير في الستيت دي و هتغير في الستيت دي لان الستيت دي هيا اللي بتظهر في الرندر البيانات و الاوبجيكتات اللي فيها هيا اللي بتظهر
         const { items } = this.state;
         items.push(newItem);
         this.setState({ items });
      } else {
         alert('this name is already added');
      }
   };
   render() {
      return (
         <div className="App container">
            <h2 className="text-center">Todo App</h2>
            <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
            <AddItem addItem={this.addItem} kk={this.setState.kk} />
         </div>
      );
   }
}

// function App() {
//    return (
//       <div className="App">
//
//       </div>
//    );
// }

export default App;
