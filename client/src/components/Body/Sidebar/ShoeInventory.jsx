import React from 'react';
import styles from "./Sidebar.module.css";

class ShoeInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
    };
  }

  componentDidMount() {
    // Fetch sizes and quantities from the server
    fetch('http://localhost:3010/api/shoe_inventory')
      .then(response => response.json())
      .then(data => {
        this.setState({ sizes: data });
        console.log(data);
      })

      .catch(error => console.log(error));
  }

  handleAlert = (size) => {
    const email = prompt(`Enter your email address to get notified when size ${size} is back in stock:`);
    // Perform further actions with the entered email address (e.g., send it to the server)
  };

  render() {
    const { sizes } = this.state;

    // Group sizes into rows with 5 buttons per row
    const rows = [];
    let currentRow = [];
    sizes.forEach((size, index) => {
      currentRow.push(
        <button
          key={index}
          disabled={size.quantity === 0}
          onClick={() => {
            if (size.quantity === 0) {
              this.handleAlert(size.size);
            } else {
              // Perform actions for when a button with available quantity is clicked
            }
          }}
        >
          {size.size}
        </button>
      );

      if ((index + 1) % 5 === 0 || index === sizes.length - 1) {
        rows.push(<div key={index} className="row">{currentRow}</div>);
        currentRow = [];
      }
    });

    return (
      <div>
        <div>{rows}</div>
      </div>
    )
  }
}

export default ShoeInventory;
