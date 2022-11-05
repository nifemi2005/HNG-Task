export function FormText() {
  return (
    <>
      <div class="row">
            <div class="text">
            <label for="firstname">First name</label>
            <input
                type="text"
                class="input"
                required
                placeholder="Enter your first name"
                id="first_name"
            />
            </div>
            <div class="text">
            <label for="lastname">Last name</label>
            <input
                type="text"
                class="input"
                required
                placeholder="Enter your last name"
                id="last_name"
            />
            </div>
      </div>
    </>
  );
}
