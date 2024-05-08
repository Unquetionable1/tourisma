import React from "react";

export default function Visit_Form() {
  return (

    // huidfhihiruiuirhwifh
    <>
      <header>
        <h1>WHERE ARE YOU VISITING</h1>
      </header>

      <form>
        <div>
          <div className="details">
            <label>
              <div>
                Name
                <input placeholder="Name" type="" />
              </div>
            </label>
            <label>
              <div>
                Passport/ID
                <input placeholder="Passport/ID" type="" />
              </div>
            </label>
          </div>

          <div className="details">
            <label>
              <div>
                Date of visit
                <input placeholder="Date of Visit" type="" />
              </div>
            </label>
            <label>
              <div>
                <input placeholder="Time of visit" type="" />
              </div>
            </label>
          </div>
          <label>
            <div>
              Affiliation
              <input placeholder="Affiliation" type="" />
            </div>
          </label>
        </div>
        <br />

        <div className="contact">
          <label>
            <div>
              <input placeholder="Email address" type="" />
            </div>
          </label>
        </div>
      </form>
    </>
  );
}
