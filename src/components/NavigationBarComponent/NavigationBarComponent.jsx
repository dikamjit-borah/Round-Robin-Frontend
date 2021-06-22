import React from "react";
import "./NavigationBarComponent.scss";

function NavigationBarComponent() {
  return (
    <div className="nav-parent">
      <div className="nav-child">Round Robin</div>
      <div className="nav-child nav-child-right">
        <div id="nav-dropdown" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBarComponent;
