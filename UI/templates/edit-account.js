let editAccount = `
<section id="edit-account">
  <h2>
    Edit Account
  </h2>
  <div class="signup-form">
    <form name="edit-acc" id="edit-acc">
      <ul class="form">
        <li>
          <label>First Name<span class="required">*</span>:</label>
          <input type="text" name="fname" placeholder="Your First Name" />
        </li>
        <li>
          <label>Last Name<span class="required">*</span>:</label>
          <input type="text" name="lname" placeholder="Your Last Name" />
        </li>
        <li>
          <label>Email<span class="required">*</span>:</label>
          <input type="email" name="email" placeholder="Your Email" />
        </li>
        <li>
          <label>Password<span class="required">*</span>:</label>
          <input type="password" name="password" placeholder="Password" />
        </li>
        <li>
          <label>Confirm Password<span class="required">*</span>:</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
          />
        </li>
        <li>
          <input type="submit" value="Edit Account" />
        </li>
        <li id="required-mssg">
          <span class="required">*All fields must be filled!</span>
        </li>
        <li id="confirm-mssg">
          <span class="required"
            >Please check your email and password formats.<br />You need a
            valid email that has not been submitted before.<br />Password
            must 6-20 characters long with atleast<br />1 uppercase
            letter, 1 lowercase letter and 1 number.</span
          >
        </li>
      </ul>
    </form>
  </div>
  <a class="edit" href="#" onclick="location.reload(); return false;"
    >Sign Out</a
  >
  <a
    class="edit"
    href="#"
    onclick="dashboardPage(userId); return false;"
    >Back To Dashboard</a
  >
  <a class="edit" href="#" onclick="runEditAcc.confirmDelete(); return false;"
    >Delete Account</a
  >
</section>
`;
