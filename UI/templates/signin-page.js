let signinPage = `
<section id="signin-page">
  <h2>
    Sign In!
  </h2>
  <div class="signin-form">
    <form name="sign-in" id="signInForm">
      <ul class="form-signin">
        <li>
          <label>Email<span class="required">*</span>:</label>
          <input type="email" name="email" placeholder="Your Email" />
        </li>
        <li>
          <label>Password<span class="required">*</span>:</label>
          <input type="password" name="password" placeholder="Password" />
        </li>
        <li>
          <input type="submit" value="Submit" />
        </li>
        <li id="required-mssg">
          <span class="required">*All fields must be filled!</span>
        </li>
        <li id="confirm-mssg">
          <span class="required"
            >Please check if your email and password is correct.</span
          >
        </li>
      </ul>
    </form>
  </div>
</section>
`;
