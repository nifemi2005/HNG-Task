export function FormEmail() {
  return (
    <div className="warning">
      <label>Email</label>
      <input
        type="email"
        required
        placeholder="yourname@email.com"
        id="email"
        className="input"
      />
    </div>
  );
}
