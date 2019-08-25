let editList = `
<section id="edit-list">
  <h2 id="header-title"></h2>
  <nav>
    <ul>
      <li>
        <button
          id="list-nav"
          type="button"
          name="clear-list"
          onclick="runEditList.deleteTodo(); return false;"
        >
          Delete
        </button>
      </li>
      <li>
        <button
          id="list-nav"
          type="button"
          name="clear-list"
          onclick="runEditList.clearList(); return false;"
        >
          Clear List
        </button>
      </li>
      <li>
        <button
          id="list-nav"
          type="button"
          name="clear-list"
          onclick="dashboardPage(userId); return false;"
        >
          Back to Dashboard
        </button>
      </li>
      <li>
        <button
          id="list-nav"
          type="button"
          name="clear-list"
          onclick="gotoEdit(); return false;"
        >
          Edit Account
        </button>
      </li>
      <li>
        <button
          id="list-nav"
          type="button"
          name="clear-list"
          onclick="runEditList.changeTitle(); return false;"
        >
          Change Title
        </button>
      </li>
      <li>
        <button
          id="list-nav"
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
    <form id="list-form" name="list-form">
      <input
        type="text"
        id="list-element"
        name="list-element"
        placeholder="Add To List"
      />
      <input type="submit" value="Create New" />
    </form>
  </div>
  <div id="todo-list">
    <ol class="list-class"></ol>
  </div>
</section>
`;
