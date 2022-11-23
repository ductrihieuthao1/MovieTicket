import React, { Component } from "react";
import styles from './ProductItem.module.css'

class ProductItem extends Component {

  render() {
    console.log(this.props)
    return (
      <div className={styles.item}>
        <h3>Tên SP: {this.props.prod.name}</h3>
        <p>Giá: {this.props.prod.price} </p>
      </div>
    );
  }
}

export default ProductItem;
