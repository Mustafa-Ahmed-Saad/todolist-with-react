import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
   state = {
      name: '',
      age: '',
   };
   handelChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value,
      });
   };
   handelSubmit = (e) => {
      e.preventDefault();
      // الاي دوت تارجيت هيجبلك الفور و لو كتبت بعدها النيم هيجبلك الانبوت اللي جوا الفورم اللي الاي دي بتاعو نيم و بعدين دون فاليو فهيجيب الفاليو بتعت الانبوت اللي واخد اي دي نيم
      if (e.target.name.value === '' || e.target.age.value === '') {
         return false;
      } else {
         this.props.addItem(this.state);
         this.setState({
            name: '',
            age: '',
         });
      }
   };
   render() {
      return (
         <form onSubmit={this.handelSubmit}>
            <input type="text" placeholder="Enter Name..." onChange={this.handelChange} id="name" value={this.state.name} />
            <input type="number" placeholder="Enter Age..." onChange={this.handelChange} id="age" value={this.state.age} min="6" max="100" />
            <input type="submit" value="Add" />
         </form>
      );
   }
}

export default AddItem;
