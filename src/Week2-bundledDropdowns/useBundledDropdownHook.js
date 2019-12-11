import React, { useState } from "react";

const useBundledDropdownHook = (dropdownIdentifier, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const Dropdown = () => (
    <section>
      <div style={{ backgroundColor: state }}>{dropdownIdentifier}</div>
      <select
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </section>
  );
  return [state, Dropdown, updateState];
};

export default useBundledDropdownHook;
