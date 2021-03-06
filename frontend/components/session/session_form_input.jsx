import React from 'react';

const SessionFormInput = ({username, password, header, updateHandler, submitHandler, demoHandler}) => (
  <form onSubmit={ submitHandler} >
    <label className="label">
      <input type="text" required
        className="form-input"
        id="label-text"
        onChange={updateHandler("username")}
        value={ username }/>
      <div className="label-text">Username</div>
    </label>
    <label className="label">
    <input type="password" required
      id="label-text"
      className="form-input"
      onChange={updateHandler("password")}
      value={ password }
      />
    <div className="label-text">Password</div>
    </label>
    <input id="submit-button" className="home-button" type="submit" value={header}/>
    <button id="submit-button"
      onClick={demoHandler.bind(this)}
      type="button">Guest</button>
  </form>
);

export default SessionFormInput;
