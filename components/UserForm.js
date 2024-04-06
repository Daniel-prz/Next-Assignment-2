import React from "react";

export default function UserForm() {
  return (
    <div>
      <form>
        <label>
          Your Name:
          <input type="text"></input>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
