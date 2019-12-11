import React from "react";
import useBundledDropdownHook from "./useBundledDropdownHook.js";

function DropDownHookImpl() {
  const COLORS = ["red", "orange", "blue", "teal", "yellow"];

  const [color, ColorDropdown] = useBundledDropdownHook(
    "Color Changer",
    "orange",
    COLORS
  );

  return (
    <div>
      <ColorDropdown />
    </div>
  );
}

export default DropDownHookImpl;
