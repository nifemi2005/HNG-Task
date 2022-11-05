export function FormMessage() {
  return (
    <div class="form-group">
      <label>Message</label>
      <textarea
        type="text"
        required
        placeholder="Send me a message and I'll reply you as soon as possible..."
        id="messgae"
        class="user"
        rows="5"
      ></textarea>
    </div>
  );
}
