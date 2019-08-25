let dashboard = `
<section id="dashboard">
  <h2>
    Dashboard
  </h2>
  <nav>
    <ul>
      <li>
        <button
          id="clear-list"
          type="button"
          name="clear-list"
          onclick="navigatePages('editAccount'); return false;"
        >
          Edit Account
        </button>
      </li>
      <li>
        <button
          id="clear-list"
          type="button"
          name="clear-list"
          onclick="runDashboard.clearDashboard(); return false;"
        >
          Clear Dashboard
        </button>
      </li>
      <li>
        <button
          id="clear-list"
          type="button"
          name="clear-list"
          onclick="location.reload(); return false;"
        >
          Sign Out
        </button>
      </li>
    </ul>
  </nav>
  <div class="dashboard-form">
    <form id="dash-form" name="dash-form">
      <input
        type="text"
        id="list-title"
        name="list-title"
        placeholder="Add To-Do List"
      />
      <input type="submit" value="Create New" />
    </form>
  </div>
  <div id="todo-dash">
  </div>
</section>
`;
