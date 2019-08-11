import React from "react";

const avatar = require("../assets/robert.jpg");
const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <div class="face_logo" />
          <input class="face_search" />
        </div>

        <div>
          <img class="avatar" src={avatar} />

          <span class="name">Robert</span>

          <div class="face_people" />

          <div class="face_msg" />
          <div class="face_bell" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
